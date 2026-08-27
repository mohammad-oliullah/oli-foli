import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  createUIMessageStream,
  createUIMessageStreamResponse,
  type UIMessage,
} from "ai";
import { NextResponse } from "next/server";

import { portfolioAssistantInstructions } from "@/lib/portfolio-context";

const windowMs = 60_000;
const maxRequests = 10;
const visits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const key = forwarded?.split(",")[0]?.trim() || "anonymous";
  const now = Date.now();
  const record = visits.get(key);
  if (!record || record.resetAt <= now) {
    visits.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  record.count += 1;
  return record.count > maxRequests;
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Please wait a minute before sending more questions." },
      { status: 429 },
    );
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The assistant is not configured yet. Please use the contact page.",
      },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as { messages?: UIMessage[] };
    if (
      !Array.isArray(body.messages) ||
      body.messages.length === 0 ||
      body.messages.length > 12
    ) {
      return NextResponse.json(
        { error: "A valid conversation is required." },
        { status: 400 },
      );
    }
    const contents = body.messages
      .map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: message.parts
          .filter((part) => part.type === "text")
          .map((part) => ({ text: part.text })),
      }))
      .filter((message) => message.parts.length > 0);

    if (contents.length === 0) {
      return NextResponse.json(
        { error: "A text question is required." },
        { status: 400 },
      );
    }

    const model = new GoogleGenerativeAI(apiKey).getGenerativeModel({
      model: "gemini-3.6-flash",
      systemInstruction: portfolioAssistantInstructions,
    });
    const result = await model.generateContentStream({ contents });
    const stream = createUIMessageStream({
      execute: async ({ writer }) => {
        const id = "portfolio-answer";
        writer.write({ type: "text-start", id });
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) writer.write({ type: "text-delta", id, delta: text });
        }
        writer.write({ type: "text-end", id });
      },
      onError: () =>
        "The assistant could not answer right now. Please use the contact page.",
    });
    return createUIMessageStreamResponse({ stream });
  } catch (error) {
    console.error("Portfolio assistant request failed:", error);
    return NextResponse.json(
      {
        error:
          "The assistant could not answer right now. Please use the contact page.",
      },
      { status: 500 },
    );
  }
}

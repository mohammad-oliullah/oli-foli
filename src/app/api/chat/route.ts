import { anthropic } from "@ai-sdk/anthropic";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
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
    return NextResponse.json({ error: "Please wait a minute before sending more questions." }, { status: 429 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "The assistant is not configured yet. Please use the contact page." }, { status: 503 });
  }

  try {
    const body = (await request.json()) as { messages?: UIMessage[] };
    if (!Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > 12) {
      return NextResponse.json({ error: "A valid conversation is required." }, { status: 400 });
    }
    const messages = await convertToModelMessages(body.messages);
    const result = streamText({
      model: anthropic("claude-haiku-4-5"),
      system: portfolioAssistantInstructions,
      messages,
      maxOutputTokens: 500,
    });
    return result.toUIMessageStreamResponse();
  } catch {
    return NextResponse.json({ error: "The assistant could not answer right now. Please use the contact page." }, { status: 500 });
  }
}

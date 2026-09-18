"use client";

import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

function messageText(parts: { type: string; text?: string }[]) {
  return parts
    .filter((part) => part.type === "text" && typeof part.text === "string")
    .map((part) => part.text)
    .join("");
}

export function ChatPanel() {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const stickToBottomRef = useRef(true);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const isLoading = status === "submitted" || status === "streaming";

  const exampleQuestions = [
    "What backend technologies does Oli use?",
    "I am an HR at Example Software Company Ltd. Is Oli a fit for backend software development?",
  ] as const;

  function fillExampleQuestion(question: string) {
    setInput(question);
    requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(question.length, question.length);
    });
  }

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    stickToBottomRef.current = distanceFromBottom < 80;
  }

  useEffect(() => {
    if (!stickToBottomRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    // Snap while tokens stream; smooth only when the turn settles.
    const behavior: ScrollBehavior =
      status === "streaming" || status === "submitted" ? "auto" : "smooth";
    bottomRef.current?.scrollIntoView({ behavior, block: "end" });
  }, [messages, status]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    stickToBottomRef.current = true;
    sendMessage({ text });
    setInput("");
  }

  const waitingForFirstToken =
    status === "submitted" ||
    (status === "streaming" &&
      messages.at(-1)?.role === "assistant" &&
      !messageText(messages.at(-1)?.parts ?? []));

  return (
    <section
      aria-label="Ask Oli's portfolio assistant"
      className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border"
    >
      <div className="shrink-0 border-b px-4 py-2.5">
        <p className="text-xs text-foreground/80">
          <span className="font-mono uppercase tracking-wider text-foreground">
            Grounded assistant
          </span>
          <span className="mx-2" aria-hidden>
            ·
          </span>
          AI-generated from Oli&apos;s portfolio data.
        </p>
      </div>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        aria-live="polite"
        className="scrollbar-thin min-h-0 flex-1 space-y-4 overflow-y-auto p-3 sm:p-4"
      >
        {messages.length === 0 ? (
          <div className="flex h-full min-h-40 flex-col items-start justify-center gap-3 px-1">
            <p className="text-sm font-medium">Ask anything about Oli</p>
            <ul className="flex w-full max-w-xl flex-col gap-2">
              {exampleQuestions.map((question) => (
                <li key={question}>
                  <button
                    type="button"
                    onClick={() => fillExampleQuestion(question)}
                    className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2.5 text-left text-sm leading-6 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                  >
                    {question}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {messages.map((message) => {
          const text = messageText(message.parts);
          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[92%] sm:max-w-[85%] ${
                  isUser
                    ? "rounded-2xl rounded-br-md bg-foreground px-3.5 py-2.5 text-background"
                    : "rounded-2xl rounded-bl-md border bg-muted/50 px-3.5 py-2.5"
                }`}
              >
                <p
                  className={`mb-1.5 font-mono text-[10px] uppercase tracking-wider ${
                    isUser ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {isUser ? "You" : "Oli AI"}
                </p>

                {isUser ? (
                  <p className="whitespace-pre-wrap text-sm leading-6">{text}</p>
                ) : text ? (
                  <div className="prose-chat text-sm leading-6 text-foreground">
                    <ReactMarkdown>{text}</ReactMarkdown>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}

        {waitingForFirstToken ? (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md border bg-muted/50 px-3.5 py-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Oli AI
              </p>
              <p className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
                <span className="inline-flex gap-1" aria-hidden>
                  <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground" />
                  <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:150ms]" />
                  <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:300ms]" />
                </span>
                <span className="sr-only">Thinking</span>
              </p>
            </div>
          </div>
        ) : null}

        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error.message}
          </p>
        ) : null}

        <div ref={bottomRef} className="h-px w-full shrink-0" aria-hidden />
      </div>

      <form
        onSubmit={submit}
        className="shrink-0 border-t bg-muted/40 p-3 sm:p-4"
      >
        <label
          htmlFor="ai-question"
          className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-foreground"
        >
          Your question
        </label>
        <div className="flex items-stretch gap-2">
          <input
            ref={inputRef}
            id="ai-question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about experience, stack, or contact…"
            autoFocus
            className="min-h-11 min-w-0 flex-1 rounded-md border-2 border-foreground/35 bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground focus:ring-3 focus:ring-ring/40"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="min-h-11 shrink-0 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-40"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

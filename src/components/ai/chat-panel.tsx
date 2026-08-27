"use client";

import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { FormEvent, useState } from "react";

export function ChatPanel() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const isLoading = status === "submitted" || status === "streaming";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <section
      aria-label="Ask Oli's portfolio assistant"
      className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border"
    >
      <div className="shrink-0 border-b px-4 py-2.5">
        <p className="text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-wider">Grounded assistant</span>
          <span className="mx-2" aria-hidden>·</span>
          AI-generated from Oli&apos;s portfolio data.
        </p>
      </div>
      <div
        aria-live="polite"
        className="min-h-0 flex-1 space-y-4 overflow-y-auto p-3 sm:p-4"
      >
        {messages.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Try: “What backend technologies does Oli use?”
          </p>
        ) : null}
        {messages.map((message) => (
          <div key={message.id} className="border-l-2 pl-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {message.role === "user" ? "You" : "Portfolio assistant"}
            </p>
            {message.parts.map((part, index) =>
              part.type === "text" ? (
                <p
                  key={`${message.id}-${index}`}
                  className="mt-1 whitespace-pre-wrap text-sm leading-6"
                >
                  {part.text}
                </p>
              ) : null,
            )}
          </div>
        ))}
        {isLoading ? (
          <p className="font-mono text-xs text-muted-foreground">Thinking…</p>
        ) : null}
        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error.message}
          </p>
        ) : null}
      </div>
      <form
        onSubmit={submit}
        className="flex shrink-0 items-center gap-2 border-t p-3"
      >
        <label className="sr-only" htmlFor="ai-question">
          Question about Oli
        </label>
        <input
          id="ai-question"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about experience, stack, or contact…"
          className="min-h-10 min-w-0 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="min-h-10 shrink-0 rounded-md border px-3 py-2 text-sm disabled:opacity-50 sm:min-h-9 sm:py-1.5"
        >
          Send
        </button>
      </form>
    </section>
  );
}

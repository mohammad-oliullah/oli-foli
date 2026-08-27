"use client";

import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import { FormEvent, useState } from "react";

export function ChatPanel() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat({ transport: new DefaultChatTransport({ api: "/api/chat" }) });
  const isLoading = status === "submitted" || status === "streaming";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <section aria-label="Ask Oli's portfolio assistant" className="rounded-lg border">
      <div className="border-b px-4 py-3"><p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Grounded assistant</p><p className="mt-1 text-xs leading-5 text-muted-foreground">AI-generated answers are limited to the portfolio data and may not cover every detail.</p></div>
      <div aria-live="polite" className="min-h-72 space-y-4 p-4">
        {messages.length === 0 ? <p className="text-sm text-muted-foreground">Try: “What backend technologies does Oli use?”</p> : null}
        {messages.map((message) => <div key={message.id} className="border-l-2 pl-3"><p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{message.role === "user" ? "You" : "Portfolio assistant"}</p>{message.parts.map((part, index) => part.type === "text" ? <p key={`${message.id}-${index}`} className="mt-1 whitespace-pre-wrap text-sm leading-6">{part.text}</p> : null)}</div>)}
        {isLoading ? <p className="font-mono text-xs text-muted-foreground">Thinking…</p> : null}
        {error ? <p role="alert" className="text-sm text-destructive">{error.message}</p> : null}
      </div>
      <form onSubmit={submit} className="flex gap-2 border-t p-3"><label className="sr-only" htmlFor="ai-question">Question about Oli</label><input id="ai-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about experience, stack, or contact…" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" /><button type="submit" disabled={isLoading || !input.trim()} className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-50">Send</button></form>
    </section>
  );
}

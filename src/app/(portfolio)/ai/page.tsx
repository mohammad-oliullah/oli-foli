import type { Metadata } from "next";
import { ChatPanel } from "@/components/ai/chat-panel";

export const metadata: Metadata = {
  title: "Ask Oli AI",
  description:
    "A grounded portfolio assistant for questions about Md. Oliullah Sarder.",
};

export default function AiPage() {
  return (
    <div className="ai-page flex h-full min-h-0 flex-col gap-4">
      <h2 className="block">Ask Oli AI</h2>
      <ChatPanel />
    </div>
  );
}

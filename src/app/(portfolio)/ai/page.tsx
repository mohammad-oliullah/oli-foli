import type { Metadata } from "next";
import { ChatPanel } from "@/components/ai/chat-panel";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Ask Oli AI",
  description: "A grounded portfolio assistant for questions about Md. Oliullah Sarder.",
};

export default function AiPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ ai"
        title="Ask Oli AI"
        description="Ask concise questions about Oli’s experience, technologies, projects, or contact details. The assistant answers only from the portfolio data."
      />
      <ChatPanel />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Ask Oli AI",
  description:
    "Ask Oli AI is not implemented on this portfolio yet. Use the contact page instead.",
  robots: { index: false, follow: false },
};

export default function AiPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ ai"
        title="Ask Oli AI"
        description="This assistant is not built yet. There is no model, retrieval, or recruiter chat on this deployment."
      />
      <p className="text-sm leading-7 text-muted-foreground">
        For questions about experience, stack, or availability, use{" "}
        <Link href="/contact" className="underline underline-offset-2">
          contact
        </Link>{" "}
        or the pages in the left nav. Wiring an API here without a real backend
        would be theater.
      </p>
    </div>
  );
}

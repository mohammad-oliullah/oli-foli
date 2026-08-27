import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { engineeringTopics } from "@/data/engineering";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "How Md. Oliullah Sarder approaches backend architecture, APIs, data, auth, realtime, caching, deployment, Linux, CI/CD, and security.",
};

export default function EngineeringPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ engineering"
        title="Engineering"
        description="How I approach production software — from API and data design through Linux deploys and security. Low-level OS/CLI work is hobby experimentation, not job history."
      />

      <div className="space-y-3">
        {engineeringTopics.map((topic) => (
          <details
            key={topic.id}
            id={topic.id}
            className="group scroll-mt-6 rounded-lg border open:bg-muted/20"
          >
            <summary className="cursor-pointer list-none px-4 py-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold">{topic.title}</h2>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {topic.summary}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground group-open:hidden">
                  Open
                </span>
                <span className="hidden shrink-0 font-mono text-[10px] text-muted-foreground group-open:inline">
                  Close
                </span>
              </div>
            </summary>
            <div className="border-t px-4 py-4">
              <ul className="space-y-3">
                {topic.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm leading-7 text-muted-foreground"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

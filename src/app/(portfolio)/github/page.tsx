import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";
import { ExternalLink } from "@/components/ui/external-link";
import {
  githubExperimentNote,
  githubHighlights,
  githubProfile,
} from "@/data/github";

export const metadata: Metadata = {
  title: "GitHub",
  description:
    "GitHub profile and notable repositories for Md. Oliullah Sarder. Live API stats are not fetched here.",
};

export default function GitHubPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ github"
        title="GitHub"
        description={githubProfile.note}
      />

      <section className="rounded-lg border p-5">
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Profile
        </h2>
        <p className="mt-2 font-mono text-sm">{githubProfile.username}</p>
        <ExternalLink
          href={githubProfile.url}
          className="mt-3 inline-flex items-center gap-1 text-sm hover:text-muted-foreground"
        >
          {githubProfile.url}
          <ArrowUpRight className="size-3.5" />
        </ExternalLink>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight">
          Notable repositories
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Only repos that already have URLs in this site&apos;s data. No invented
          stars, forks, or contribution graphs.
        </p>
        <ul className="mt-4 space-y-3">
          {githubHighlights.map((repo) => (
            <li key={repo.url} className="rounded-lg border p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-mono text-sm font-medium">{repo.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {repo.kind}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {repo.description}
              </p>
              <ExternalLink
                href={repo.url}
                className="mt-3 inline-flex items-center gap-1 text-xs hover:text-muted-foreground"
              >
                Repository
                <ArrowUpRight className="size-3.5" />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold tracking-tight">
          Engineering experiments
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {githubExperimentNote}
        </p>
      </section>
    </div>
  );
}

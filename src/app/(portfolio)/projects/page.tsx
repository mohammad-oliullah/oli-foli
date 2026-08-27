import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

import { PageHeader } from "@/components/ui/page-header";
import { ExternalLink } from "@/components/ui/external-link";
import { TechList } from "@/components/ui/tech-list";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects and case studies by Md. Oliullah Sarder — open source, full-stack products, and placeholders for work still being documented.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ projects"
        title="Projects"
        description="Case studies, not cards. Each entry is what I actually built, with TODOs where details are still missing. Work-for-hire systems live on the Experience page unless they have a public repo."
      />

      <section className="space-y-4">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-lg border p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {project.category}
                  {project.year ? ` · ${project.year}` : ""}
                </p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {project.name}
                  </Link>
                </h2>
              </div>
              <span className="w-fit rounded-full border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                {project.status}
              </span>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
              {project.shortDescription}
            </p>

            <div className="mt-4">
              <TechList items={project.technologies} />
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 font-medium hover:text-muted-foreground"
              >
                Open case study
                <ArrowUpRight className="size-3.5" />
              </Link>
              {project.githubUrl ? (
                <ExternalLink
                  href={project.githubUrl}
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  <FaSquareGithub className="size-3.5" />
                  GitHub
                </ExternalLink>
              ) : null}
              {project.liveUrl ? (
                <ExternalLink
                  href={project.liveUrl}
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  Live / npm
                  <ArrowUpRight className="size-3.5" />
                </ExternalLink>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

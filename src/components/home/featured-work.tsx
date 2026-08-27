import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

import { ExternalLink } from "@/components/ui/external-link";
import { TechList } from "@/components/ui/tech-list";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="border-b pb-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Selected work
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Products and developer tools with a public repo or live surface.
          </p>
        </div>
        <Link
          href="/projects"
          className="hidden items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
        >
          View all
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article key={project.slug} className="rounded-lg border p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="mt-2 text-base font-semibold tracking-tight">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {project.name}
                  </Link>
                </h3>
              </div>
              <span className="shrink-0 rounded-full border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                {project.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {project.shortDescription}
            </p>

            <div className="mt-5">
              <TechList items={project.technologies} />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-medium hover:text-muted-foreground"
              >
                Case study
                <ArrowUpRight className="size-3.5" />
              </Link>
              {project.liveUrl ? (
                <ExternalLink
                  href={project.liveUrl}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  Live
                  <ArrowUpRight className="size-3.5" />
                </ExternalLink>
              ) : null}
              {project.githubUrl ? (
                <ExternalLink
                  href={project.githubUrl}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  <FaSquareGithub className="size-3.5" />
                  GitHub
                </ExternalLink>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

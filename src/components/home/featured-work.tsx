import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

import { projects } from "@/data/projects";

export function FeaturedWork() {
  const featuredProjects = projects.filter((project) => project.featured);

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
            A selection of products, applications, and developer tools I have
            built.
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
          <article
            key={project.slug}
            className="group rounded-lg border p-5 transition-colors hover:bg-muted/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {project.type}
                </p>

                <h3 className="mt-2 text-base font-semibold tracking-tight">
                  {project.name}
                </h3>
              </div>

              <span className="shrink-0 rounded-full border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                {project.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href={project.links.website}
                className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:text-muted-foreground"
              >
                View project
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              {"github" in project.links && project.links.github ? (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FaSquareGithub className="size-3.5" />
                  GitHub
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-6 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground sm:hidden"
      >
        View all projects
        <ArrowUpRight className="size-3.5" />
      </Link>
    </section>
  );
}

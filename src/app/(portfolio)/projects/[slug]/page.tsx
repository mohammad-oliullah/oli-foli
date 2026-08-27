import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

import { ExternalLink } from "@/components/ui/external-link";
import { TechList } from "@/components/ui/tech-list";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        All projects
      </Link>

      <header className="border-b pb-8">
        <p className="font-mono text-sm text-muted-foreground">
          / projects / {project.slug}
        </p>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{project.name}</h1>
          <span className="rounded-full border px-2 py-1 font-mono text-[10px] text-muted-foreground">
            {project.status}
          </span>
        </div>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          {project.category}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
          {project.longDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {project.githubUrl ? (
            <ExternalLink
              href={project.githubUrl}
              className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 hover:bg-muted"
            >
              <FaSquareGithub className="size-3.5" />
              GitHub
            </ExternalLink>
          ) : null}
          {project.liveUrl ? (
            <ExternalLink
              href={project.liveUrl}
              className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 hover:bg-muted"
            >
              Live / registry
              <ArrowUpRight className="size-3.5" />
            </ExternalLink>
          ) : null}
          {project.npmUrl ? (
            <ExternalLink
              href={project.npmUrl}
              className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 hover:bg-muted"
            >
              npm
              <ArrowUpRight className="size-3.5" />
            </ExternalLink>
          ) : null}
        </div>
      </header>

      <section>
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Stack
        </h2>
        <div className="mt-3">
          <TechList items={project.technologies} />
        </div>
      </section>

      <section>
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Problems
        </h2>
        <ul className="mt-3 space-y-2">
          {project.problemsSolved.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Architecture
        </h2>
        <ul className="mt-3 space-y-2">
          {project.architecture.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Key features
        </h2>
        <ul className="mt-3 space-y-2">
          {project.keyFeatures.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

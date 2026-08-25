"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, BookOpen, Layers3 } from "lucide-react";

const pageInfo: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "/": {
    title: "Overview",
    description: "A quick look at my professional background.",
  },
  "/experience": {
    title: "Experience",
    description: "Professional experience and responsibilities.",
  },
  "/projects": {
    title: "Projects",
    description: "Selected engineering projects and case studies.",
  },
  "/skills": {
    title: "Skills",
    description: "Technologies and engineering capabilities.",
  },
  "/engineering": {
    title: "Engineering",
    description: "Technical notes, decisions and experiments.",
  },
  "/career": {
    title: "Career",
    description: "My professional development journey.",
  },
};

export function RightSidebar() {
  const pathname = usePathname();

  const currentPage = pageInfo[pathname] ?? {
    title: "Explore",
    description: "Explore my professional profile.",
  };

  return (
    <aside className="hidden h-full w-56 shrink-0 border-l bg-background lg:block">
      <div className="flex h-full flex-col p-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Context
          </p>

          <h2 className="mt-3 text-sm font-semibold">{currentPage.title}</h2>

          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            {currentPage.description}
          </p>
        </div>

        <div className="my-5 border-t" />

        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Explore
          </p>

          <Link
            href="/engineering"
            className="flex items-center justify-between rounded-md px-2 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="size-3.5" />
              Engineering
            </span>

            <ArrowUpRight className="size-3" />
          </Link>

          <Link
            href="/projects"
            className="flex items-center justify-between rounded-md px-2 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <span className="flex items-center gap-2">
              <Layers3 className="size-3.5" />
              Projects
            </span>

            <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

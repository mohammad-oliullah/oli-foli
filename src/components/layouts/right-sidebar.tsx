"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, BookOpen, FileText, Layers3, Mail } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

const pageInfo: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "/": {
    title: "Overview",
    description: "Identity, stack, experience snapshot, and featured work.",
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
    description: "Technologies and how they are used in real work.",
  },
  "/engineering": {
    title: "Engineering",
    description: "How backend, data, deploy, and security are approached.",
  },
  "/career": {
    title: "Career",
    description: "Direction, target roles, and engineering interests.",
  },
  "/github": {
    title: "GitHub",
    description: "Profile and repositories without fabricated stats.",
  },
  "/resume": {
    title: "Resume",
    description: "Recruiter summary, contact, and resume file.",
  },
  "/blogs": {
    title: "Blogs",
    description: "Writing index. Empty until posts are added.",
  },
  "/contact": {
    title: "Contact",
    description: "Email and professional links.",
  },
  "/ai": {
    title: "Ask Oli AI",
    description: "Planned assistant. Not implemented on this site yet.",
  },
};

function resolvePage(pathname: string) {
  if (pageInfo[pathname]) return pageInfo[pathname];
  if (pathname.startsWith("/projects/")) {
    return {
      title: "Project",
      description: "Engineering case study.",
    };
  }
  return {
    title: "Explore",
    description: "Navigate the professional profile.",
  };
}

const shortcuts = [
  { href: "/engineering", label: "Engineering", icon: BookOpen },
  { href: "/projects", label: "Projects", icon: Layers3 },
  { href: "/github", label: "GitHub", icon: FaSquareGithub },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
] as const;

export function RightSidebar() {
  const pathname = usePathname();
  const currentPage = resolvePage(pathname);

  return (
    <aside className="hidden h-full w-56 shrink-0 border-l bg-background lg:block">
      <div className="flex h-full flex-col overflow-y-auto p-4">
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
          {shortcuts.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-md px-2 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <span className="flex items-center gap-2">
                  <Icon className="size-3.5" />
                  {item.label}
                </span>
                <ArrowUpRight className="size-3" />
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

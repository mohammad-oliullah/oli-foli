import Link from "next/link";
import { ArrowUpRight, Brain, MapPin } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

import { ExternalLink } from "@/components/ui/external-link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="border-b pb-8">
      <p className="font-mono text-sm text-muted-foreground">/ overview</p>

      <Link
        href="/ai"
        aria-label="Ask Oli AI about Oli — skip the scroll"
        className="group mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-foreground/20 bg-foreground px-4 py-3 text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-background/15">
            <Brain className="size-4" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold tracking-tight">
              Prefer not to scroll? Wanna save your time? Ask Oli AI
            </span>
            <span className="mt-0.5 block text-xs text-background/90">
              Ask about experience, projects, stack, or fit — skip the browsing.
            </span>
          </span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-background/80 transition-colors group-hover:text-background">
          Open chat
          <ArrowUpRight className="size-3.5" aria-hidden />
        </span>
      </Link>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="relative flex size-2" aria-hidden>
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {profile.availability.label}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <MapPin className="size-3.5" aria-hidden />
          {profile.location}
        </span>
      </div>

      <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-sm text-foreground">{profile.title}</p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground">
        {profile.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/ai"
          className="inline-flex items-center gap-2 rounded-md border border-foreground/20 bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Brain className="size-3.5" aria-hidden />
          Ask Oli AI
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Resume
        </Link>
        <ExternalLink
          href={profile.links.github}
          className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <FaSquareGithub className="size-3.5" aria-hidden />
          GitHub
        </ExternalLink>
        <ExternalLink
          href={profile.links.linkedin}
          className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          LinkedIn
        </ExternalLink>
      </div>
    </section>
  );
}

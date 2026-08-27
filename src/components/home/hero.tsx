import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

import { ExternalLink } from "@/components/ui/external-link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="border-b pb-8">
      <p className="font-mono text-sm text-muted-foreground">/ overview</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
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
      <p className="mt-2 text-sm text-muted-foreground">{profile.title}</p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
        {profile.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Experience
          <ArrowUpRight className="size-3.5" aria-hidden />
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

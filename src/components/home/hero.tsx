import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="border-b pb-10">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>

          <span className="font-mono text-xs text-muted-foreground">
            {profile.availability.label}
          </span>
        </div>

        {/* Identity */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Software Developer
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-3 text-lg text-muted-foreground">{profile.title}</p>
        </div>

        {/* Bio */}
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          {profile.bio}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {profile.location}
          </span>

          <span className="font-mono">TypeScript · Node.js · NestJS</span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View experience
            <ArrowUpRight className="size-3.5" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}

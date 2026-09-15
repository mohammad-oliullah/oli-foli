import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";

import { experience } from "@/data/experience";

export function ExperiencePreview() {
  return (
    <section className="border-b pb-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Career
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight">
            Professional Experience
          </h2>
        </div>

        <Link
          href="/experience"
          className="hidden items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
        >
          View all
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <div className="divide-y">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="group py-6 first:pt-0 last:pb-0"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div className="flex min-w-0 gap-3">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                  <Building2 className="size-4 text-muted-foreground" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-medium tracking-tight">{job.role}</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.company}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-left sm:text-right">
                <p className="font-mono text-xs text-muted-foreground">
                  {job.startDate} — {job.endDate}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {job.location}
                </p>
              </div>
            </div>

            <div className="mt-4 pl-0 sm:pl-12">
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                {job.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.technologies.slice(0, 6).map((technology) => (
                  <span
                    key={technology}
                    className="rounded border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/experience"
        className="mt-6 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground sm:hidden"
      >
        View all experience
        <ArrowUpRight className="size-3.5" />
      </Link>
    </section>
  );
}

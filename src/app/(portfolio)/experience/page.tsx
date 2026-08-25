import { MapPin } from "lucide-react";

import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="border-b pb-8">
        <p className="font-mono text-sm text-muted-foreground">/ experience</p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Professional Experience
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
          {`A detailed look at the companies, systems, responsibilities, and
          technologies I've worked with throughout my career.`}
        </p>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="rounded-lg border p-5 sm:p-6"
          >
            {/* Company / Role */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {job.role}
                </h2>

                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.company}
                  </p>
                )}

                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {job.location}
                </div>
              </div>

              <div className="shrink-0">
                <p className="font-mono text-xs text-muted-foreground sm:text-right">
                  {job.startDate} — {job.endDate}
                </p>

                <p className="mt-1 text-xs text-muted-foreground sm:text-right">
                  {job.employmentType}
                </p>
              </div>
            </div>

            {/* Focus */}
            <div className="mt-5 border-t pt-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Focus
              </p>

              <p className="mt-2 text-sm">{job.focus}</p>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
              {job.description}
            </p>

            {/* Responsibilities */}
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Responsibilities & Work
              </p>

              <ul className="mt-3 space-y-2">
                {job.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Technologies
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Previous employment */}
            {"previousEmployment" in job && job.previousEmployment ? (
              <div className="mt-6 border-t pt-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Previous engagement
                </p>

                <p className="mt-2 text-xs text-muted-foreground">
                  {job.previousEmployment.employmentType} ·{" "}
                  {job.previousEmployment.startDate} —{" "}
                  {job.previousEmployment.endDate}
                </p>
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}

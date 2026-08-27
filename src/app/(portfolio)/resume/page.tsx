import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/ui/page-header";
import { ExternalLink } from "@/components/ui/external-link";
import { TechList } from "@/components/ui/tech-list";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume summary for Md. Oliullah Sarder — experience, skills, and contact. PDF file is wired when you add it under public/resume.",
};

const highlightedSkills = skillCategories
  .flatMap((category) => category.items.map((item) => item.name))
  .filter((name) => !name.startsWith("TODO"))
  .slice(0, 18);

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ resume"
        title="Resume"
        description="Short recruiter view. Full narrative is on Experience and Projects. The PDF slot is ready; the file is not in the repo yet."
      />

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold">{profile.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {profile.summary}
        </p>
        <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Location
            </dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Availability
            </dt>
            <dd>{profile.availability.label}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Email
            </dt>
            <dd>
              <a href={`mailto:${profile.contact.email}`} className="hover:underline">
                {profile.contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Links
            </dt>
            <dd className="flex flex-wrap gap-3">
              <ExternalLink href={profile.links.github} className="hover:underline">
                GitHub
              </ExternalLink>
              <ExternalLink href={profile.links.linkedin} className="hover:underline">
                LinkedIn
              </ExternalLink>
            </dd>
          </div>
        </dl>
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="text-lg font-semibold tracking-tight">Resume file</h2>
        {profile.resumeAvailable ? (
          <a
            href={profile.resumePath}
            className="mt-3 inline-flex rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background"
          >
            Download PDF
          </a>
        ) : (
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            PDF is not attached. Add a file at{" "}
            <code className="font-mono text-xs">
              public/resume/md-oliullah-sarder.pdf
            </code>{" "}
            and set <code className="font-mono text-xs">resumeAvailable</code> to{" "}
            <code className="font-mono text-xs">true</code> in{" "}
            <code className="font-mono text-xs">src/data/profile.ts</code>.
          </p>
        )}
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Experience</h2>
          <Link href="/experience" className="text-xs text-muted-foreground hover:text-foreground">
            Full page
          </Link>
        </div>
        <ul className="space-y-3">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="rounded-lg border p-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <p className="text-sm font-medium">
                  {job.role} · {job.company}
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  {job.startDate} — {job.endDate}
                </p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight">Skills snapshot</h2>
        <div className="mt-4">
          <TechList items={highlightedSkills} />
        </div>
        <Link
          href="/skills"
          className="mt-3 inline-block text-xs text-muted-foreground hover:text-foreground"
        >
          Full skills page
        </Link>
      </section>
    </div>
  );
}

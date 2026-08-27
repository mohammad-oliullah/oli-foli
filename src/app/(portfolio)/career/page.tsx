import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/ui/page-header";
import { TechList } from "@/components/ui/tech-list";
import { career } from "@/data/career";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Professional direction for Md. Oliullah Sarder: backend and full-stack roles, preferred stack, and the problems worth working on.",
};

export default function CareerPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ career"
        title="Career"
        description={career.summary}
      />

      <section className="rounded-lg border p-5">
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Direction
        </h2>
        <p className="mt-2 text-sm font-medium">{career.direction}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight">Roles I am targeting</h2>
        <ul className="mt-3 space-y-2">
          {career.targetRoles.map((role) => (
            <li
              key={role}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight">
          Technologies I want to work with
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Same stack I already ship in — not a wishlist of frameworks I have never used.
        </p>
        <div className="mt-4">
          <TechList items={career.preferredStack} />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight">Engineering interests</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {career.interests.map((item) => (
            <li
              key={item}
              className="rounded-md border px-3 py-2 text-sm text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight">
          Problems that are worth the hours
        </h2>
        <ul className="mt-3 space-y-2">
          {career.problemSpaces.map((item) => (
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
        <h2 className="text-lg font-semibold tracking-tight">Currently exploring</h2>
        <ul className="mt-3 space-y-2">
          {career.currentlyExploring.map((item) => (
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

      <p className="text-sm text-muted-foreground">
        Experience and projects are the evidence. See{" "}
        <Link href="/experience" className="underline underline-offset-2">
          experience
        </Link>
        ,{" "}
        <Link href="/projects" className="underline underline-offset-2">
          projects
        </Link>
        , and{" "}
        <Link href="/contact" className="underline underline-offset-2">
          contact
        </Link>
        .
      </p>
    </div>
  );
}

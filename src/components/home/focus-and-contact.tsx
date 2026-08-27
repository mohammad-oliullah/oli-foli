import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ExternalLink } from "@/components/ui/external-link";
import { profile } from "@/data/profile";

export function CurrentFocus() {
  return (
    <section className="border-b pb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Focus
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight">
        Current technical focus
      </h2>
      <ul className="mt-4 space-y-2">
        {profile.currentFocus.map((item) => (
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
  );
}

export function OpenSourcePreview() {
  return (
    <section className="border-b pb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Open source
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight">
        @olism/bd-geo
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
        npm package for structured Bangladesh geographical data: divisions,
        districts, upazilas/thanas, areas, and villages. Intended for address
        forms, e-commerce, delivery, real estate, and location-based apps.
        Download and star counts are not shown here.
      </p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <ExternalLink
          href="https://www.npmjs.com/package/@olism/bd-geo"
          className="inline-flex items-center gap-1 font-medium hover:text-muted-foreground"
        >
          npm
          <ArrowUpRight className="size-3.5" />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/mohammad-oliullah/bd-geo"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          GitHub
          <ArrowUpRight className="size-3.5" />
        </ExternalLink>
        <Link
          href="/projects/bd-geo"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          Case study
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Contact
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight">
        How to reach me
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
        Email is the most reliable path. LinkedIn and GitHub are public.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <a
          href={`mailto:${profile.contact.email}`}
          className="rounded-md border px-3 py-1.5 hover:bg-muted"
        >
          {profile.contact.email}
        </a>
        <Link href="/contact" className="rounded-md border px-3 py-1.5 hover:bg-muted">
          Contact page
        </Link>
        <Link href="/resume" className="rounded-md border px-3 py-1.5 hover:bg-muted">
          Resume
        </Link>
      </div>
    </section>
  );
}

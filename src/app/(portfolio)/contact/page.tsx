import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";
import { ExternalLink } from "@/components/ui/external-link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Md. Oliullah Sarder at ${profile.contact.email}.`,
};

const channels = [
  {
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    external: false,
  },
  {
    label: "GitHub",
    value: profile.links.github,
    href: profile.links.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: profile.links.linkedin,
    href: profile.links.linkedin,
    external: true,
  },
  {
    label: "dev.to",
    value: profile.links.devTo,
    href: profile.links.devTo,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        path="/ contact"
        title="Contact"
        description="Email first. Public profiles below. I do not list a phone number on this site."
      />

      <ul className="space-y-3">
        {channels.map((channel) => (
          <li key={channel.label} className="rounded-lg border p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {channel.label}
            </p>
            {channel.external ? (
              <ExternalLink
                href={channel.href}
                className="mt-2 inline-flex items-center gap-1 text-sm hover:text-muted-foreground"
              >
                {channel.value}
                <ArrowUpRight className="size-3.5" />
              </ExternalLink>
            ) : (
              <a
                href={channel.href}
                className="mt-2 inline-flex items-center gap-1 text-sm hover:text-muted-foreground"
              >
                {channel.value}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

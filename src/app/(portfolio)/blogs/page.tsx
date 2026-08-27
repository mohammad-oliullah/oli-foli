import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";
import { ExternalLink } from "@/components/ui/external-link";
import { blogs, blogsNote } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Writing by Md. Oliullah Sarder. The index is empty until posts are added in data.",
};

export default function BlogsPage() {
  return (
    <div className="space-y-10">
      <PageHeader path="/ blogs" title="Blogs" description={blogsNote} />

      {blogs.length === 0 ? (
        <p className="rounded-lg border p-5 text-sm text-muted-foreground">
          No published entries in <code className="font-mono text-xs">src/data/blogs.ts</code>.
        </p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((post) => (
            <li key={post.url} className="rounded-lg border p-5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {post.category} · {post.date} · {post.readingTime}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
              {post.url.startsWith("http") ? (
                <ExternalLink
                  href={post.url}
                  className="mt-3 inline-flex items-center gap-1 text-xs hover:text-muted-foreground"
                >
                  Read
                  <ArrowUpRight className="size-3.5" />
                </ExternalLink>
              ) : (
                <a
                  href={post.url}
                  className="mt-3 inline-flex items-center gap-1 text-xs hover:text-muted-foreground"
                >
                  Read
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

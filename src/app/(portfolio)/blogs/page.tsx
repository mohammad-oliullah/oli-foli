import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/ui/page-header";
import { blogsNote } from "@/data/blogs";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Writing by Md. Oliullah Sarder. The index is empty until posts are added in data.",
};

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await getPublishedPosts();
  return (
    <div className="space-y-10">
      <PageHeader path="/ blogs" title="Blogs" description={blogsNote} />

      {blogs.length === 0 ? (
        <p className="rounded-lg border p-5 text-sm text-muted-foreground">
          No published entries yet.
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
              <Link href={post.url} className="mt-3 inline-flex text-xs hover:text-muted-foreground">
                Read post →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

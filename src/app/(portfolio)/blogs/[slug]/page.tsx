import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { getPublishedPost } from "@/lib/posts";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

function formatDate(value?: string) {
  if (!value) return "Unknown date";

  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(value));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-8 border-b pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="rounded border px-2 py-1">{post.category}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
          {post.published ? <span className="rounded bg-emerald-500/10 px-2 py-1 text-emerald-700 dark:text-emerald-400">Published</span> : <span className="rounded bg-amber-500/10 px-2 py-1 text-amber-700 dark:text-amber-400">Draft</span>}
        </div>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/90">{post.excerpt}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-6 rounded-lg border bg-card/50 p-5 sm:p-6">
        <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">Created</p>
            <p className="mt-1 text-foreground">{formatDate(post.createdAt)}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">Updated</p>
            <p className="mt-1 text-foreground">{formatDate(post.updatedAt)}</p>
          </div>
        </div>

        <div className="rounded-md border bg-muted/30 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">Slug</p>
          <p className="mt-2 break-all text-sm text-foreground">{post.slug}</p>
        </div>
      </div>

      <div className="prose-lite mt-10 text-base leading-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}

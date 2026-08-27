import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { getPublishedPost } from "@/lib/posts";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{post.category} · {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(post.date))} · {post.readingTime}</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted-foreground">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">{post.tags.map((tag) => <span key={tag} className="rounded border px-2 py-1 font-mono text-[10px] text-muted-foreground">{tag}</span>)}</div>
      <div className="prose-lite mt-10 text-sm leading-7"><ReactMarkdown>{post.content}</ReactMarkdown></div>
    </article>
  );
}

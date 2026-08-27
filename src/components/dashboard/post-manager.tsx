"use client";

import ReactMarkdown from "react-markdown";
import { useMemo, useState } from "react";

import type { CmsPost } from "@/types/cms";
import type { BlogPostInput } from "@/types/blog";

const emptyPost: BlogPostInput = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "",
  tags: [],
  readingTime: "5 min read",
  published: false,
};

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function PostManager({ initialPosts }: { initialPosts: CmsPost[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [editing, setEditing] = useState<CmsPost | null>(null);
  const [draft, setDraft] = useState<BlogPostInput>(emptyPost);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const previewTitle = useMemo(() => draft.title || "Untitled post", [draft.title]);

  function startNew() {
    setEditing(null);
    setDraft(emptyPost);
    setError("");
  }

  function edit(post: CmsPost) {
    setEditing(post);
    setDraft({
      title: post.title, slug: post.slug, excerpt: post.excerpt, content: post.content,
      category: post.category, tags: post.tags, readingTime: post.readingTime, published: post.published,
    });
    setError("");
  }

  async function save() {
    setIsSaving(true);
    setError("");
    const response = await fetch(editing ? `/api/posts/${editing._id}` : "/api/posts", {
      method: editing ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });
    const payload: CmsPost | { error?: string } = await response.json();
    setIsSaving(false);
    if (!response.ok || !("_id" in payload)) {
      setError("error" in payload ? payload.error || "Unable to save post." : "Unable to save post.");
      return;
    }
    setPosts((current) => editing ? current.map((post) => post._id === payload._id ? payload : post) : [payload, ...current]);
    edit(payload);
  }

  async function remove(post: CmsPost) {
    if (!window.confirm(`Delete “${post.title}”? This cannot be undone.`)) return;
    const response = await fetch(`/api/posts/${post._id}`, { method: "DELETE" });
    if (!response.ok) {
      setError("Unable to delete post.");
      return;
    }
    setPosts((current) => current.filter((item) => item._id !== post._id));
    if (editing?._id === post._id) startNew();
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="rounded-lg border p-3 xl:sticky xl:top-4 xl:h-fit">
        <button type="button" onClick={startNew} className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">New post</button>
        <ul className="mt-3 space-y-1">
          {posts.map((post) => (
            <li key={post._id}>
              <button type="button" onClick={() => edit(post)} className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                <span className="block truncate font-medium">{post.title}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase text-muted-foreground">{post.published ? "Published" : "Draft"} · {post.updatedAt.slice(0, 10)}</span>
              </button>
            </li>
          ))}
          {posts.length === 0 ? <li className="px-3 py-5 text-sm text-muted-foreground">No posts yet.</li> : null}
        </ul>
      </aside>

      <section className="space-y-5 rounded-lg border p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div><p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{editing ? "Edit post" : "New draft"}</p><h2 className="mt-1 text-lg font-semibold">{previewTitle}</h2></div>
          {editing ? <button type="button" onClick={() => remove(editing)} className="text-sm text-destructive underline underline-offset-4">Delete</button> : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Title"><input value={draft.title} onChange={(event) => setDraft((value) => ({ ...value, title: event.target.value, slug: value.slug || slugify(event.target.value) }))} className="field" /></Field>
          <Field label="Slug"><input value={draft.slug} onChange={(event) => setDraft((value) => ({ ...value, slug: slugify(event.target.value) }))} className="field font-mono" /></Field>
          <Field label="Category"><input value={draft.category} onChange={(event) => setDraft((value) => ({ ...value, category: event.target.value }))} className="field" /></Field>
          <Field label="Reading time"><input value={draft.readingTime} onChange={(event) => setDraft((value) => ({ ...value, readingTime: event.target.value }))} className="field" /></Field>
        </div>
        <Field label="Excerpt"><textarea value={draft.excerpt} onChange={(event) => setDraft((value) => ({ ...value, excerpt: event.target.value }))} rows={3} className="field resize-y" /></Field>
        <Field label="Tags (comma-separated)"><input value={draft.tags.join(", ")} onChange={(event) => setDraft((value) => ({ ...value, tags: event.target.value.split(",").map((tag) => tag.trim()).filter(Boolean) }))} className="field" /></Field>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={draft.published} onChange={(event) => setDraft((value) => ({ ...value, published: event.target.checked }))} /> Publish this post</label>
        <div className="grid gap-5 lg:grid-cols-2">
          <Field label="Markdown content"><textarea value={draft.content} onChange={(event) => setDraft((value) => ({ ...value, content: event.target.value }))} rows={18} className="field min-h-96 resize-y font-mono text-xs leading-6" /></Field>
          <div><p className="text-sm font-medium">Preview</p><article className="prose-lite mt-2 min-h-96 rounded-md border p-4 text-sm leading-7"><ReactMarkdown>{draft.content || "Write Markdown to preview it here."}</ReactMarkdown></article></div>
        </div>
        {error ? <p role="alert" className="text-sm text-destructive">{error}</p> : null}
        <button type="button" onClick={save} disabled={isSaving} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60">{isSaving ? "Saving…" : editing ? "Save changes" : "Create draft"}</button>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-medium"><span className="mb-2 block">{label}</span>{children}</label>;
}

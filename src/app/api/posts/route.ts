import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { Post } from "@/lib/models/post";
import { normalizePostInput } from "@/lib/posts";
import type { BlogPostInput } from "@/types/blog";

function isPostInput(value: unknown): value is BlogPostInput {
  if (!value || typeof value !== "object") return false;
  const post = value as Partial<BlogPostInput>;
  return [post.title, post.slug, post.excerpt, post.content, post.category, post.readingTime].every(
    (field) => typeof field === "string" && field.trim().length > 0,
  ) && Array.isArray(post.tags) && typeof post.published === "boolean";
}

async function requireAdmin() {
  return getServerSession(authOptions);
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const posts = await Post.find().sort({ updatedAt: -1 }).lean();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body: unknown = await request.json();
  if (!isPostInput(body)) return NextResponse.json({ error: "Invalid post data." }, { status: 400 });

  try {
    await connectToDatabase();
    const post = await Post.create(normalizePostInput(body));
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message.includes("duplicate key")) {
      return NextResponse.json({ error: "That slug is already in use." }, { status: 409 });
    }
    return NextResponse.json({ error: "Unable to create post." }, { status: 500 });
  }
}

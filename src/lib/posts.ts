import type { BlogPost, BlogPostInput } from "@/types/blog";
import { connectToDatabase } from "@/lib/mongodb";
import { Post, type PostDocument } from "@/lib/models/post";

function toBlogPost(post: PostDocument & { _id: unknown }): BlogPost {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    tags: post.tags,
    date: post.date.toISOString(),
    url: `/blogs/${post.slug}`,
    readingTime: post.readingTime,
    published: post.published,
  };
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  await connectToDatabase();
  const posts = await Post.find({ published: true }).sort({ date: -1 }).lean<PostDocument[]>();
  return posts.map((post) => toBlogPost(post as PostDocument & { _id: unknown }));
}

export async function getPublishedPost(slug: string): Promise<BlogPost | null> {
  await connectToDatabase();
  const post = await Post.findOne({ slug, published: true }).lean<PostDocument>();
  return post ? toBlogPost(post as PostDocument & { _id: unknown }) : null;
}

export function normalizePostInput(input: BlogPostInput) {
  return {
    ...input,
    title: input.title.trim(),
    slug: input.slug.trim().toLowerCase(),
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    category: input.category.trim(),
    tags: input.tags.map((tag) => tag.trim()).filter(Boolean),
    readingTime: input.readingTime.trim(),
  };
}

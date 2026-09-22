import { PostManager } from "@/components/dashboard/post-manager";
import { connectToDatabase } from "@/lib/mongodb";
import { Post } from "@/lib/models/post";
import type { CmsPost } from "@/types/cms";

export default async function DashboardPostsPage() {
  await connectToDatabase();

  const posts = await Post.find().sort({ updatedAt: -1 }).lean();

  const serializedPosts = JSON.parse(JSON.stringify(posts)) as CmsPost[];

  return (
    <div>
      <header className="mb-8 border-b pb-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Content
        </p>

        <h1 className="mt-2 text-2xl font-semibold">Posts</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Create, edit, preview, publish, and delete Markdown posts.
        </p>
      </header>

      <PostManager initialPosts={serializedPosts} />
    </div>
  );
}

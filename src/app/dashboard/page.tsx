import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { PostManager } from "@/components/dashboard/post-manager";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { Post } from "@/lib/models/post";
import type { CmsPost } from "@/types/cms";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/dashboard/login");
  await connectToDatabase();
  const posts = await Post.find().sort({ updatedAt: -1 }).lean<CmsPost[]>();

  return <main className="mx-auto min-h-dvh max-w-7xl px-4 py-8 sm:px-6"><header className="mb-8 border-b pb-6"><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">OLI.DEV / private dashboard</p><h1 className="mt-2 text-2xl font-semibold">Blog publishing</h1><p className="mt-2 text-sm text-muted-foreground">Markdown posts stored in MongoDB. Only published posts reach the public index.</p></header><PostManager initialPosts={posts} /></main>;
}

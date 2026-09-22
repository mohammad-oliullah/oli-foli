import { connectToDatabase } from "@/lib/mongodb";
import { Post } from "@/lib/models/post";
import type { CmsPost } from "@/types/cms";

export default async function DashboardPage() {
  await connectToDatabase();

  const posts = await Post.find().sort({ updatedAt: -1 }).lean<CmsPost[]>();

  return (
    <div>
      <header className="mb-8 border-b pb-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Olism / private dashboard
        </p>

        <h1 className="mt-2 text-2xl font-semibold">Overview</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Manage your portfolio content, projects, experience, engineering
          notes, and publishing workflow.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          label="Posts"
          value={posts.length}
          href="/dashboard/posts"
        />

        <DashboardCard label="Projects" value="—" href="/dashboard/projects" />

        <DashboardCard
          label="Experience"
          value="—"
          href="/dashboard/experience"
        />

        <DashboardCard label="Skills" value="—" href="/dashboard/skills" />
      </section>
    </div>
  );
}

function DashboardCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string | number;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-lg border p-5 transition-colors hover:bg-muted/50"
    >
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </a>
  );
}

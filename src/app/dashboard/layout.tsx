import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";

const navigation = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/posts", label: "Posts" },
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/dashboard/experience", label: "Experience" },
  { href: "/dashboard/skills", label: "Skills" },
  { href: "/dashboard/engineering", label: "Engineering" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/resume", label: "Resume" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/dashboard/login");
  }

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <aside className="hidden w-64 shrink-0 border-r bg-card md:flex md:flex-col">
        <div className="border-b px-5 py-5">
          <Link href="/dashboard" className="block">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Olism
            </p>

            <h1 className="mt-1 text-lg font-semibold">Dashboard</h1>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="border-t p-4">
          <Link
            href="/"
            target="_blank"
            className="block rounded-md border px-3 py-2 text-center text-sm hover:bg-muted"
          >
            View portfolio
          </Link>
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto min-h-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}

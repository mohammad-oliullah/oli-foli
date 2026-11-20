import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";

import { FeedbackForm } from "@/components/feedback/feedback-form";
import { FeedbackList } from "@/components/feedback/feedback-list";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { authOptions } from "@/lib/auth";
import { isAdminUser } from "@/lib/passkeys";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Share your feedback with Mohammad Oliullah.",
};

type FeedbackPageProps = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};

export default async function FeedbackPage({
  searchParams,
}: FeedbackPageProps) {
  const params = await searchParams;
  const requestedPage =
    typeof params?.page === "string" ? params.page : undefined;
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.email
    ? await isAdminUser(session.user.email)
    : false;

  return (
    <main className="scrollbar-thin h-dvh min-h-0 w-full overflow-y-auto">
      <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-16">
        <header className="space-y-3 text-center">
          <div className="flex items-center justify-between">
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-300 transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              href="/"
            >
              Home
            </Link>
            {isAdmin ? (
              <div className="flex items-center gap-1">
                <Link
                  className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-300 transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  href="/dashboard/passkeys"
                >
                  Passkeys
                </Link>
                <SignOutButton />
              </div>
            ) : (
              <Link
                className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-300 transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                href="/dashboard/login"
              >
                Admin sign in
              </Link>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Share your feedback
          </h1>
          <p className="mx-auto max-w-xl text-slate-400">
            Share your perception of me.
          </p>
        </header>

        <FeedbackForm />
        <FeedbackList isAdmin={isAdmin} requestedPage={requestedPage} />
      </div>
    </main>
  );
}

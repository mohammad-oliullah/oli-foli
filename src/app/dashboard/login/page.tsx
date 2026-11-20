import { Suspense } from "react";
import Link from "next/link";

import { LoginForm } from "./login-form";

export default function DashboardLoginPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center gap-4 px-5">
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
      <p className="px-6 text-sm text-muted-foreground">
        Need to register the first passkey?{" "}
        <Link className="text-primary underline-offset-4 hover:underline" href="/setup-passkey">
          Set it up
        </Link>
      </p>
    </main>
  );
}

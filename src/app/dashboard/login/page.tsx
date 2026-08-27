import { Suspense } from "react";

import { LoginForm } from "./login-form";

export default function DashboardLoginPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md items-center px-5">
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}

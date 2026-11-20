import Link from "next/link";

import { PasskeyRegistrationForm } from "@/components/auth/passkey-registration-form";

export default function SetupPasskeyPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md items-center px-5">
      <section className="w-full rounded-lg border p-6">
        <Link
          className="text-sm text-primary underline-offset-4 hover:underline"
          href="/dashboard/login"
        >
          Back to sign in
        </Link>
        <h1 className="mt-6 text-xl font-semibold">Set up your first passkey</h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Create the admin account with an email and password, then register
          the first passkey. Future sign-ins use the passkey.
        </p>
        <PasskeyRegistrationForm
          requiresSetupSecret
          successPath="/dashboard/login"
        />
      </section>
    </main>
  );
}

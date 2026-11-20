"use client";

import { startAuthentication } from "@simplewebauthn/browser";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type AuthenticationOptions = Parameters<typeof startAuthentication>[0]["optionsJSON"];

type OptionsResponse = {
  error?: string;
  options?: AuthenticationOptions;
};

type VerificationResponse = {
  error?: string;
  loginToken?: string;
};

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handlePasskeySignIn() {
    setIsLoading(true);
    setError("");

    try {
      const optionsResponse = await fetch(
        "/api/passkeys/authentication/options",
        { method: "POST" },
      );
      const optionsPayload = (await optionsResponse.json()) as OptionsResponse;
      if (!optionsResponse.ok || !optionsPayload.options) {
        throw new Error(optionsPayload.error);
      }

      const authenticationResponse = await startAuthentication({
        optionsJSON: optionsPayload.options,
      });
      const verificationResponse = await fetch(
        "/api/passkeys/authentication/verify",
        {
          body: JSON.stringify(authenticationResponse),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        },
      );
      const verificationPayload =
        (await verificationResponse.json()) as VerificationResponse;
      if (!verificationResponse.ok || !verificationPayload.loginToken) {
        throw new Error(verificationPayload.error);
      }

      const result = await signIn("passkey", {
        callbackUrl: searchParams.get("callbackUrl") || "/dashboard",
        loginToken: verificationPayload.loginToken,
        redirect: false,
      });
      if (!result || result.error) {
        throw new Error("Unable to start the admin session.");
      }

      router.replace(result.url ?? "/dashboard");
      router.refresh();
    } catch {
      setError("Passkey sign-in failed. Use one of your registered passkeys.");
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full rounded-lg border p-6">
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        Oli-Folio / private
      </p>
      <h1 className="mt-3 text-xl font-semibold">Portfolio dashboard</h1>
      <p className="mt-2 text-sm leading-6 text-foreground">
        Sign in with an approved device passkey.
      </p>
      {error ? (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      ) : null}
      <button
        type="button"
        onClick={handlePasskeySignIn}
        disabled={isLoading}
        className="mt-6 w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
      >
        {isLoading ? "Verifying..." : "Sign in with passkey"}
      </button>
    </div>
  );
}

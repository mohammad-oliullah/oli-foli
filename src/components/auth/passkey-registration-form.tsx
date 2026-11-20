"use client";

import { startRegistration } from "@simplewebauthn/browser";
import { useRouter } from "next/navigation";
import { useState } from "react";

type RegistrationOptions = Parameters<typeof startRegistration>[0]["optionsJSON"];

type RegistrationOptionsResponse = {
  error?: string;
  options?: RegistrationOptions;
};

type RegistrationVerificationResponse = {
  error?: string;
  verified?: boolean;
};

export function PasskeyRegistrationForm({
  requiresSetupSecret,
  successPath,
}: {
  requiresSetupSecret: boolean;
  successPath: string;
}) {
  const router = useRouter();
  const [setupSecret, setSetupSecret] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function registerPasskey() {
    setError("");
    setIsSubmitting(true);

    try {
      const optionsResponse = await fetch("/api/passkeys/registration/options", {
        body: JSON.stringify(
          requiresSetupSecret ? { setupSecret, email, password } : {},
        ),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const optionsPayload =
        (await optionsResponse.json()) as RegistrationOptionsResponse;
      if (!optionsResponse.ok || !optionsPayload.options) {
        throw new Error(optionsPayload.error);
      }

      const registrationResponse = await startRegistration({
        optionsJSON: optionsPayload.options,
      });
      const verificationResponse = await fetch(
        "/api/passkeys/registration/verify",
        {
          body: JSON.stringify(registrationResponse),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        },
      );
      const verificationPayload =
        (await verificationResponse.json()) as RegistrationVerificationResponse;
      if (!verificationResponse.ok || !verificationPayload.verified) {
        throw new Error(verificationPayload.error);
      }

      router.replace(successPath);
      router.refresh();
    } catch {
      setError("Passkey registration could not be completed. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-6 space-y-5">
      {requiresSetupSecret ? (
        <>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="admin-email">
              Admin email
            </label>
            <input
              autoComplete="email"
              className="block w-full rounded-lg border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
              id="admin-email"
              maxLength={254}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="admin-password">
              Admin password
            </label>
            <input
              autoComplete="new-password"
              className="block w-full rounded-lg border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
              id="admin-password"
              maxLength={128}
              minLength={12}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
            <p className="text-xs text-muted-foreground">
              Use at least 12 characters. This password is only for initial account setup.
            </p>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="setup-secret">
              Setup secret
            </label>
            <input
              autoComplete="off"
              className="block w-full rounded-lg border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
              id="setup-secret"
              onChange={(event) => setSetupSecret(event.target.value)}
              required
              type="password"
              value={setupSecret}
            />
          </div>
        </>
      ) : null}

      {error ? (
        <p aria-live="polite" className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <button
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
        disabled={
          isSubmitting ||
          (requiresSetupSecret &&
            (!setupSecret || !email || password.length < 12))
        }
        onClick={registerPasskey}
        type="button"
      >
        {isSubmitting ? "Registering..." : "Register this device passkey"}
      </button>
    </div>
  );
}

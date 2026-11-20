"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      className="mt-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
      onClick={() => signOut({ callbackUrl: "/dashboard/login" })}
      type="button"
    >
      Sign out
    </button>
  );
}

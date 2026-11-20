import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { consumePasskeyLoginToken } from "@/lib/passkeys";

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/dashboard/login" },
  cookies: {
    sessionToken: {
      name: `${process.env.NODE_ENV === "production" ? "__Secure-" : ""}oli-folio.passkey.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  providers: [
    CredentialsProvider({
      id: "passkey",
      name: "Passkey",
      credentials: {
        loginToken: { label: "Passkey login token", type: "text" },
      },
      async authorize(credentials) {
        const loginToken = credentials?.loginToken;
        if (!loginToken) return null;

        const admin = await consumePasskeyLoginToken(loginToken);
        if (!admin) return null;

        return { id: admin._id.toString(), email: admin.email };
      },
    }),
  ],
};

import bcrypt from "bcryptjs";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectToDatabase } from "@/lib/mongodb";
import { AdminUser } from "@/lib/models/admin-user";

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/dashboard/login" },
  providers: [
    CredentialsProvider({
      name: "Portfolio admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;
        if (!email || !password) return null;

        await connectToDatabase();
        const admin = await AdminUser.findOne({ email }).lean();
        if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) return null;

        return { id: String(admin._id), email: admin.email };
      },
    }),
  ],
};

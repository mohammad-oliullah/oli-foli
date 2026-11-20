import bcrypt from "bcryptjs";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import type { Types } from "mongoose";
import { z } from "zod";

import { connectToDatabase } from "@/lib/mongodb";
import { Passkey } from "@/lib/models/passkey";
import {
  PasskeyChallenge,
  type PasskeyChallengeDocument,
} from "@/lib/models/passkey-challenge";
import { User } from "@/lib/models/user";

export const PASSKEY_CHALLENGE_COOKIE = "oli-folio-passkey-challenge";
export const PASSKEY_CHALLENGE_MAX_AGE_SECONDS = 5 * 60;
export const MAX_ADMIN_PASSKEYS = 2;

type ChallengePurpose = PasskeyChallengeDocument["purpose"];

const initialAdminCredentialsSchema = z.object({
  email: z.string().trim().email().max(254).transform((email) => email.toLowerCase()),
  password: z.string().min(12).max(128),
});

function hashValue(value: string): string {
  return createHash("sha256").update(value).digest("base64url");
}

function isValidSetupSecret(setupSecret: unknown): setupSecret is string {
  const expectedSecret = process.env.PASSKEY_SETUP_SECRET;
  if (typeof setupSecret !== "string" || !expectedSecret) {
    return false;
  }

  const submitted = Buffer.from(setupSecret);
  const expected = Buffer.from(expectedSecret);
  return (
    submitted.length === expected.length &&
    timingSafeEqual(submitted, expected)
  );
}

function isDuplicateKeyError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === 11000
  );
}

export function getPasskeyConfig(): { origin: string; rpID: string } {
  const origin = process.env.PASSKEY_ORIGIN;
  const rpID = process.env.PASSKEY_RP_ID;

  if (!origin || !rpID) {
    throw new Error("Passkey environment variables are not configured.");
  }

  const url = new URL(origin);
  if (url.protocol !== "https:" && url.hostname !== "localhost") {
    throw new Error("Passkeys require HTTPS outside localhost.");
  }

  return { origin, rpID };
}

export async function getAdminUser() {
  await connectToDatabase();

  const admin = await User.findOne({ role: "admin" });

  if (!admin) {
    throw new Error("The admin account has not been set up.");
  }

  return admin;
}

export async function registerInitialAdmin(
  setupSecret: unknown,
  email: unknown,
  password: unknown,
) {
  if (!isValidSetupSecret(setupSecret)) {
    return null;
  }

  const parsedCredentials = initialAdminCredentialsSchema.safeParse({
    email,
    password,
  });
  if (!parsedCredentials.success) {
    return null;
  }

  await connectToDatabase();

  await User.init();
  if ((await Passkey.countDocuments()) > 0) {
    return null;
  }

  const { email: normalizedEmail, password: submittedPassword } =
    parsedCredentials.data;
  const existingAdmin = await User.findOne({ role: "admin" }).select(
    "+hashPass",
  );

  if (existingAdmin) {
    const isMatchingAccount =
      existingAdmin.email === normalizedEmail &&
      (await bcrypt.compare(submittedPassword, existingAdmin.hashPass));

    return isMatchingAccount ? existingAdmin : null;
  }

  const hashPass = await bcrypt.hash(submittedPassword, 12);

  try {
    return await User.create({
      email: normalizedEmail,
      hashPass,
      role: "admin",
    });
  } catch (error) {
    if (!isDuplicateKeyError(error)) {
      throw error;
    }

    const concurrentlyCreatedAdmin = await User.findOne({
      role: "admin",
    }).select("+hashPass");
    if (
      concurrentlyCreatedAdmin?.email === normalizedEmail &&
      (await bcrypt.compare(
        submittedPassword,
        concurrentlyCreatedAdmin.hashPass,
      ))
    ) {
      return concurrentlyCreatedAdmin;
    }

    return null;
  }
}

export async function createPasskeyChallenge(
  userId: Types.ObjectId,
  purpose: ChallengePurpose,
  challenge: string,
): Promise<string> {
  const token = randomBytes(32).toString("base64url");

  await PasskeyChallenge.create({
    userId,
    tokenHash: hashValue(token),
    challenge,
    purpose,
    expiresAt: new Date(Date.now() + PASSKEY_CHALLENGE_MAX_AGE_SECONDS * 1000),
  });

  return token;
}

export async function consumePasskeyChallenge(
  token: string | undefined,
  purpose: ChallengePurpose,
) {
  if (!token) {
    return null;
  }

  await connectToDatabase();

  return PasskeyChallenge.findOneAndDelete({
    tokenHash: hashValue(token),
    purpose,
    expiresAt: { $gt: new Date() },
  }).lean();
}

export async function canRegisterAnotherPasskey(
  adminEmail: string | null | undefined,
): Promise<boolean> {
  if (!adminEmail || !(await isAdminUser(adminEmail))) {
    return false;
  }

  return (await Passkey.countDocuments()) < MAX_ADMIN_PASSKEYS;
}

export async function isAdminUser(email: string): Promise<boolean> {
  await connectToDatabase();

  return Boolean(
    await User.exists({
      role: "admin",
      email: email.trim().toLowerCase(),
    }),
  );
}

export async function issuePasskeyLoginToken(): Promise<string> {
  const admin = await getAdminUser();
  const token = randomBytes(32).toString("base64url");

  await User.findByIdAndUpdate(admin._id, {
    passkeyLoginTokenHash: hashValue(token),
    passkeyLoginTokenExpiresAt: new Date(
      Date.now() + PASSKEY_CHALLENGE_MAX_AGE_SECONDS * 1000,
    ),
  });

  return token;
}

export async function consumePasskeyLoginToken(token: string) {
  await connectToDatabase();

  return User.findOneAndUpdate(
    {
      role: "admin",
      passkeyLoginTokenHash: hashValue(token),
      passkeyLoginTokenExpiresAt: { $gt: new Date() },
    },
    {
      $unset: {
        passkeyLoginTokenHash: "",
        passkeyLoginTokenExpiresAt: "",
      },
    },
    { new: true },
  ).lean();
}

export function getChallengeToken(cookieHeader: string | null): string | undefined {
  return cookieHeader
    ?.split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${PASSKEY_CHALLENGE_COOKIE}=`))
    ?.slice(PASSKEY_CHALLENGE_COOKIE.length + 1);
}

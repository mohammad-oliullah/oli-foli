import { generateRegistrationOptions } from "@simplewebauthn/server";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/lib/auth";
import { Passkey } from "@/lib/models/passkey";
import {
  canRegisterAnotherPasskey,
  createPasskeyChallenge,
  getAdminUser,
  getPasskeyConfig,
  MAX_ADMIN_PASSKEYS,
  PASSKEY_CHALLENGE_COOKIE,
  PASSKEY_CHALLENGE_MAX_AGE_SECONDS,
  registerInitialAdmin,
} from "@/lib/passkeys";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { origin, rpID } = getPasskeyConfig();
    if (request.headers.get("origin") !== origin) {
      return NextResponse.json({ error: "Passkey registration is unavailable." }, { status: 403 });
    }

    const body: unknown = await request.json();
    const setupSecret =
      typeof body === "object" && body !== null && "setupSecret" in body
        ? body.setupSecret
        : undefined;
    const email =
      typeof body === "object" && body !== null && "email" in body
        ? body.email
        : undefined;
    const password =
      typeof body === "object" && body !== null && "password" in body
        ? body.password
        : undefined;
    const session = await getServerSession(authOptions);
    const isSignedInAdmin = await canRegisterAnotherPasskey(session?.user?.email);
    const admin = isSignedInAdmin
      ? await getAdminUser()
      : await registerInitialAdmin(setupSecret, email, password);
    if (!admin) {
      return NextResponse.json({ error: "Passkey registration is unavailable." }, { status: 403 });
    }

    const existingPasskeys = await Passkey.find({ userId: admin._id })
      .sort({ slot: 1 })
      .lean();
    if (existingPasskeys.length >= MAX_ADMIN_PASSKEYS) {
      return NextResponse.json(
        { error: "Only two passkeys can be registered." },
        { status: 403 },
      );
    }

    const options = await generateRegistrationOptions({
      rpName: "Oli-Folio",
      rpID,
      userID: new TextEncoder().encode(admin._id.toString()),
      userName: admin.email,
      userDisplayName: admin.email,
      timeout: PASSKEY_CHALLENGE_MAX_AGE_SECONDS * 1000,
      attestationType: "none",
      excludeCredentials: existingPasskeys.map((passkey) => ({
        id: passkey.credentialId,
        transports: passkey.transports as AuthenticatorTransport[],
      })),
      authenticatorSelection: {
        residentKey: "required",
        userVerification: "required",
      },
    });
    const token = await createPasskeyChallenge(
      admin._id,
      "registration",
      options.challenge,
    );
    const response = NextResponse.json({ options });

    response.cookies.set(PASSKEY_CHALLENGE_COOKIE, token, {
      httpOnly: true,
      maxAge: PASSKEY_CHALLENGE_MAX_AGE_SECONDS,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Passkey registration is not available." },
      { status: 500 },
    );
  }
}

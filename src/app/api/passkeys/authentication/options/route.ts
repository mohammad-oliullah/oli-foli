import { generateAuthenticationOptions } from "@simplewebauthn/server";
import { NextResponse } from "next/server";

import {
  createPasskeyChallenge,
  getAdminUser,
  getPasskeyConfig,
  PASSKEY_CHALLENGE_COOKIE,
  PASSKEY_CHALLENGE_MAX_AGE_SECONDS,
} from "@/lib/passkeys";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { origin, rpID } = getPasskeyConfig();
    if (request.headers.get("origin") !== origin) {
      return NextResponse.json({ error: "Passkey sign-in is unavailable." }, { status: 403 });
    }

    const admin = await getAdminUser();
    const options = await generateAuthenticationOptions({
      rpID,
      timeout: PASSKEY_CHALLENGE_MAX_AGE_SECONDS * 1000,
      userVerification: "required",
      allowCredentials: [],
    });
    const token = await createPasskeyChallenge(
      admin._id,
      "authentication",
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
      { error: "Passkey sign-in is not available." },
      { status: 500 },
    );
  }
}

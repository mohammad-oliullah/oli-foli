import {
  type RegistrationResponseJSON,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { NextResponse } from "next/server";

import { Passkey } from "@/lib/models/passkey";
import {
  consumePasskeyChallenge,
  getChallengeToken,
  getPasskeyConfig,
  MAX_ADMIN_PASSKEYS,
  PASSKEY_CHALLENGE_COOKIE,
} from "@/lib/passkeys";

export const runtime = "nodejs";

function hasCredentialId(value: unknown): value is { id: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "string"
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

export async function POST(request: Request) {
  try {
    const { origin, rpID } = getPasskeyConfig();
    if (request.headers.get("origin") !== origin) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 403 });
    }

    const body: unknown = await request.json();
    if (!hasCredentialId(body)) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 400 });
    }

    const challenge = await consumePasskeyChallenge(
      getChallengeToken(request.headers.get("cookie")),
      "registration",
    );
    if (!challenge) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 401 });
    }

    const verification = await verifyRegistrationResponse({
      response: body as RegistrationResponseJSON,
      expectedChallenge: challenge.challenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
      requireUserVerification: true,
    });
    if (!verification.verified) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 401 });
    }

    await Passkey.init();
    const existingPasskeys = await Passkey.find({ userId: challenge.userId })
      .select("slot")
      .lean();
    if (existingPasskeys.length >= MAX_ADMIN_PASSKEYS) {
      return NextResponse.json(
        { error: "Only two passkeys can be registered." },
        { status: 403 },
      );
    }

    const usedSlots = new Set(existingPasskeys.map((passkey) => passkey.slot));
    const slot = ([0, 1] as const).find((candidate) => !usedSlots.has(candidate));
    if (slot === undefined) {
      return NextResponse.json(
        { error: "Only two passkeys can be registered." },
        { status: 403 },
      );
    }

    try {
      await Passkey.create({
        userId: challenge.userId,
        slot,
        credentialId: verification.registrationInfo.credential.id,
        publicKey: Buffer.from(
          verification.registrationInfo.credential.publicKey,
        ).toString("base64url"),
        counter: verification.registrationInfo.credential.counter,
        transports:
          verification.registrationInfo.credential.transports ?? [],
        deviceType: verification.registrationInfo.credentialDeviceType,
        backedUp: verification.registrationInfo.credentialBackedUp,
      });
    } catch (error) {
      if (isDuplicateKeyError(error)) {
        return NextResponse.json(
          {
            error:
              "This passkey is already registered, or the two-passkey limit has been reached.",
          },
          { status: 409 },
        );
      }

      throw error;
    }

    const response = NextResponse.json({ verified: true });
    response.cookies.set(PASSKEY_CHALLENGE_COOKIE, "", { maxAge: 0, path: "/" });
    return response;
  } catch {
    return NextResponse.json(
      { error: "Passkey registration could not be verified." },
      { status: 400 },
    );
  }
}

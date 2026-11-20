import {
  type AuthenticationResponseJSON,
  verifyAuthenticationResponse,
} from "@simplewebauthn/server";
import { NextResponse } from "next/server";

import { Passkey } from "@/lib/models/passkey";
import {
  consumePasskeyChallenge,
  getChallengeToken,
  getPasskeyConfig,
  issuePasskeyLoginToken,
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

export async function POST(request: Request) {
  try {
    const { origin, rpID } = getPasskeyConfig();
    if (request.headers.get("origin") !== origin) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 403 });
    }

    const body: unknown = await request.json();
    if (!hasCredentialId(body)) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 401 });
    }

    const challenge = await consumePasskeyChallenge(
      getChallengeToken(request.headers.get("cookie")),
      "authentication",
    );
    if (!challenge) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 401 });
    }

    const passkey = await Passkey.findOne({
      credentialId: body.id,
      userId: challenge.userId,
    }).lean();
    if (!passkey) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 401 });
    }

    const verification = await verifyAuthenticationResponse({
      response: body as AuthenticationResponseJSON,
      expectedChallenge: challenge.challenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
      credential: {
        id: passkey.credentialId,
        publicKey: Uint8Array.from(Buffer.from(passkey.publicKey, "base64url")),
        counter: passkey.counter,
        transports: passkey.transports,
      },
      requireUserVerification: true,
    });
    if (!verification.verified) {
      return NextResponse.json({ error: "Passkey verification failed." }, { status: 401 });
    }

    await Passkey.findByIdAndUpdate(passkey._id, {
      counter: verification.authenticationInfo.newCounter,
      deviceType: verification.authenticationInfo.credentialDeviceType,
      backedUp: verification.authenticationInfo.credentialBackedUp,
    });

    const loginToken = await issuePasskeyLoginToken();
    const response = NextResponse.json({ loginToken });
    response.cookies.set(PASSKEY_CHALLENGE_COOKIE, "", { maxAge: 0, path: "/" });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Passkey verification failed." },
      { status: 401 },
    );
  }
}

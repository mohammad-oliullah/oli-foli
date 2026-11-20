"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { Types } from "mongoose";

import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { Feedback as FeedbackModel } from "@/lib/models/feedback";
import { feedbackSchema, replySchema } from "@/lib/feedback-validation";
import { isAdminUser } from "@/lib/passkeys";
import type { FeedbackActionState, ReplyActionState } from "@/types/feedback";

const RATE_LIMIT_MAX_SUBMISSIONS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const submissionAttempts = new Map<string, number[]>();

async function getClientIp(): Promise<string> {
  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get("x-forwarded-for");

  return (
    forwardedFor?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown"
  );
}

function hasReachedRateLimit(ip: string): boolean {
  const now = Date.now();
  const attempts = (submissionAttempts.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (attempts.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
    submissionAttempts.set(ip, attempts);
    return true;
  }

  attempts.push(now);
  submissionAttempts.set(ip, attempts);
  return false;
}

export async function createFeedback(
  _previousState: FeedbackActionState,
  formData: FormData,
): Promise<FeedbackActionState> {
  const honeypot = formData.get("website");
  if (honeypot && (typeof honeypot !== "string" || honeypot.trim() !== "")) {
    return { success: true, message: "Thanks for your feedback!" };
  }

  const parsedFeedback = feedbackSchema.safeParse({
    name: formData.get("name") ?? "",
    message: formData.get("message"),
  });
  if (!parsedFeedback.success) {
    return {
      success: false,
      error:
        parsedFeedback.error.issues[0]?.message ??
        "Please check your feedback.",
    };
  }

  if (hasReachedRateLimit(await getClientIp())) {
    return {
      success: false,
      error: "Too many submissions. Please try again in a few minutes.",
    };
  }

  try {
    await connectToDatabase();
    await FeedbackModel.create(parsedFeedback.data);
    revalidatePath("/feedback-me");

    return { success: true, message: "Thanks for your feedback!" };
  } catch {
    return {
      success: false,
      error: "We could not save your feedback. Please try again shortly.",
    };
  }
}

export async function createReply(
  _previousState: ReplyActionState,
  formData: FormData,
): Promise<ReplyActionState> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || !(await isAdminUser(session.user.email))) {
    return {
      success: false,
      error: "You must be signed in as the admin to reply.",
    };
  }

  const parsedReply = replySchema.safeParse({
    feedbackId: formData.get("feedbackId"),
    message: formData.get("message"),
  });
  if (
    !parsedReply.success ||
    !Types.ObjectId.isValid(parsedReply.data?.feedbackId)
  ) {
    return {
      success: false,
      error: "Please check your reply and try again.",
    };
  }

  try {
    await connectToDatabase();
    const feedback = await FeedbackModel.findByIdAndUpdate(
      parsedReply.data.feedbackId,
      {
        reply: {
          message: parsedReply.data.message,
          createdAt: new Date(),
        },
      },
      { new: true },
    );

    if (!feedback) {
      return { success: false, error: "That feedback no longer exists." };
    }

    revalidatePath("/feedback-me");
    return { success: true, message: "Reply posted." };
  } catch {
    return {
      success: false,
      error: "We could not save your reply. Please try again.",
    };
  }
}

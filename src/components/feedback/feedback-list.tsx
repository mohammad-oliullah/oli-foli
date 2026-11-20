import { connectToDatabase } from "@/lib/mongodb";
import { Feedback as FeedbackModel } from "@/lib/models/feedback";
import type { Feedback } from "@/types/feedback";

import { FeedbackItem } from "./feedback-item";
import { Pagination } from "./pagination";

const PAGE_SIZE = 10;

function getSanitizedPage(requestedPage: string | undefined): number {
  if (!requestedPage) {
    return 1;
  }

  const page = Number(requestedPage);
  return Number.isInteger(page) && page >= 1 ? page : 1;
}

export async function FeedbackList({
  requestedPage,
  isAdmin,
}: {
  requestedPage?: string;
  isAdmin: boolean;
}) {
  await connectToDatabase();

  const totalFeedback = await FeedbackModel.countDocuments();
  const totalPages = Math.max(1, Math.ceil(totalFeedback / PAGE_SIZE));
  const currentPage = Math.min(getSanitizedPage(requestedPage), totalPages);
  const feedbacks = await FeedbackModel.find({})
    .sort({ createdAt: -1 })
    .skip((currentPage - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .lean();
  const serializedFeedback: Feedback[] = feedbacks.map((feedback) => ({
    id: feedback._id.toString(),
    name: feedback.name,
    message: feedback.message,
    createdAt: feedback.createdAt.toISOString(),
    reply: feedback.reply
      ? {
          message: feedback.reply.message,
          createdAt: feedback.reply.createdAt.toISOString(),
        }
      : undefined,
  }));

  return (
    <section aria-labelledby="feedback-list-heading" className="space-y-5">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="feedback-list-heading" className="text-2xl font-bold tracking-tight text-white">
          Feedback
        </h2>
        {totalFeedback > 0 ? (
          <p className="text-sm text-slate-400">{totalFeedback} total</p>
        ) : null}
      </div>

      {serializedFeedback.length === 0 ? (
        <p className="rounded-xl bg-slate-900 p-5 text-slate-300 shadow-sm ring-1 ring-slate-800">
          No feedback yet. Be the first!
        </p>
      ) : (
        <div className="space-y-4">
          {serializedFeedback.map((feedback) => (
            <FeedbackItem feedback={feedback} isAdmin={isAdmin} key={feedback.id} />
          ))}
        </div>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}

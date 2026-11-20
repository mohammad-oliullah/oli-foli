import type { Feedback } from "@/types/feedback";

import { ReplyForm } from "./reply-form";

export function FeedbackItem({
  feedback,
  isAdmin,
}: {
  feedback: Feedback;
  isAdmin: boolean;
}) {
  const createdAt = new Date(feedback.createdAt);
  const replyCreatedAt = feedback.reply ? new Date(feedback.reply.createdAt) : null;

  return (
    <article className="rounded-xl bg-slate-900 p-5 shadow-sm ring-1 ring-slate-800">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-semibold text-white">{feedback.name || "Anonymous"}</h3>
        <time className="text-sm text-slate-400" dateTime={feedback.createdAt}>
          {createdAt.toLocaleDateString("en", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <p className="mt-3 whitespace-pre-wrap break-words text-slate-300">
        {feedback.message}
      </p>
      {feedback.reply && replyCreatedAt ? (
        <section aria-label="Reply" className="mt-5 border-t border-slate-800 pt-5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="font-semibold text-indigo-200">Your reply</h4>
            <time className="text-sm text-slate-400" dateTime={feedback.reply.createdAt}>
              {replyCreatedAt.toLocaleDateString("en", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
          </div>
          <p className="mt-3 whitespace-pre-wrap break-words text-slate-300">
            {feedback.reply.message}
          </p>
        </section>
      ) : null}
      {isAdmin && !feedback.reply ? <ReplyForm feedbackId={feedback.id} /> : null}
    </article>
  );
}

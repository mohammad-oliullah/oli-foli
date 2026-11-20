"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { createReply } from "@/app/feedback-me/actions";
import type { ReplyActionState } from "@/types/feedback";

const initialState: ReplyActionState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex min-h-10 items-center justify-center rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:bg-indigo-800"
      disabled={pending}
      type="submit"
    >
      {pending ? "Posting…" : "Post reply"}
    </button>
  );
}

export function ReplyForm({ feedbackId }: { feedbackId: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(createReply, initialState);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form action={formAction} className="mt-5 space-y-3 border-t border-slate-800 pt-5" ref={formRef}>
      <input name="feedbackId" type="hidden" value={feedbackId} />
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-slate-200"
          htmlFor={`reply-${feedbackId}`}
        >
          Your reply
        </label>
        <textarea
          className="block min-h-24 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
          id={`reply-${feedbackId}`}
          maxLength={1000}
          minLength={3}
          name="message"
          placeholder="Write a reply"
          required
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <SubmitButton />
        {state.message ? (
          <p aria-live="polite" className="text-sm text-emerald-400" role="status">
            {state.message}
          </p>
        ) : null}
        {state.error ? (
          <p aria-live="polite" className="text-sm text-red-400" role="alert">
            {state.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}

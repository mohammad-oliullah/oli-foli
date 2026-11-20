"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { createFeedback } from "@/app/feedback-me/actions";
import type { FeedbackActionState } from "@/types/feedback";

const initialState: FeedbackActionState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:bg-indigo-800"
      disabled={pending}
      type="submit"
    >
      {pending ? "Sending…" : "Send feedback"}
    </button>
  );
}

export function FeedbackForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(createFeedback, initialState);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section
      aria-labelledby="feedback-form-heading"
      className="rounded-2xl bg-slate-900 p-5 shadow-sm ring-1 ring-slate-800 sm:p-6"
    >
      <h2 id="feedback-form-heading" className="text-xl font-semibold text-white">
        Leave feedback
      </h2>
      <form action={formAction} className="mt-5 space-y-5" ref={formRef}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-200" htmlFor="feedback-name">
            Name <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            className="block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            id="feedback-name"
            maxLength={50}
            name="name"
            placeholder="Your name"
            type="text"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-200" htmlFor="feedback-message">
            Feedback
          </label>
          <textarea
            className="block min-h-32 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            id="feedback-message"
            maxLength={1000}
            minLength={3}
            name="message"
            placeholder="Write your feedback here"
            required
          />
        </div>

        <div aria-hidden="true" className="hidden">
          <label htmlFor="feedback-website">Website</label>
          <input
            autoComplete="off"
            id="feedback-website"
            name="website"
            tabIndex={-1}
            type="text"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
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
    </section>
  );
}

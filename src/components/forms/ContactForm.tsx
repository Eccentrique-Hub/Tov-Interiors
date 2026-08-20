"use client";

import { ValidationError, useForm } from "@formspree/react";

const inputClass =
  "w-full border-b border-foreground/30 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent";

export function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID ?? "");

  if (state.succeeded) {
    return (
      <div className="border border-accent bg-surface p-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
          Message received
        </p>
        <h2 className="mt-4 font-display text-4xl">Thank you for getting in touch.</h2>
        <p className="mt-4 text-sm leading-7 text-text-secondary">
          Our studio will review your message and respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-foreground/15 bg-surface p-7 sm:p-10">
      <div className="grid gap-8">
        <label>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
            Full name
          </span>
          <input name="name" required className={inputClass} />
        </label>

        <label>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
            Email address
          </span>
          <input name="email" type="email" required className={inputClass} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>

        <label>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">Message</span>
          <textarea name="message" required rows={5} className={`${inputClass} resize-none`} />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </label>

        <ValidationError errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="w-fit bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? "Sending…" : "Submit enquiry"}
        </button>
      </div>
    </form>
  );
}

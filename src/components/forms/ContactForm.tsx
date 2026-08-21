"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "That name looks too long — check for a typo."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Add a little more detail (at least 10 characters).")
    .max(2000, "Keep your message under 2000 characters."),
  // honeypot — real users never see or fill this field
  _gotcha: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID}`;

const inputBase =
  "w-full border-b bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // show a field's error as soon as the person leaves it, not only on submit
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("submission_failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-accent bg-surface p-8" role="status">
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-foreground/15 bg-surface p-7 sm:p-10"
    >
      <div className="grid gap-8">
        <Field label="Full name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${inputBase} ${errors.name ? "border-error" : "border-foreground/30"}`}
            {...register("name")}
          />
        </Field>

        <Field label="Email address" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${inputBase} ${errors.email ? "border-error" : "border-foreground/30"}`}
            {...register("email")}
          />
        </Field>

        <Field label="Message" htmlFor="message" error={errors.message?.message}>
          <textarea
            id="message"
            rows={5}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputBase} resize-none ${errors.message ? "border-error" : "border-foreground/30"}`}
            {...register("message")}
          />
        </Field>

        {/* Honeypot — hidden from real users, visible to most simple bots */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
          {...register("_gotcha")}
        />

        {status === "error" && (
          <p role="alert" className="text-sm text-error">
            Something went wrong sending your message. Please try again, or email us directly at{" "}
            <a href="mailto:designstov@gmail.com" className="underline">
              designstov@gmail.com
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Submit enquiry"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-2 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}

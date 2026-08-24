"use client";

import Link from "next/link";
import { useState } from "react";

import {
  FloatingLabelInput,
  FloatingLabelTextarea,
} from "@/components/ui/FloatingLabelField";
import { greeting } from "@/content/greeting";
import { cn } from "@/lib/cn";

const { fields, privacy, submitLabel, successMessage } = greeting.form;

/**
 * "Amamos crear proyectos" request form — Figma 72:8669. No backend wired
 * yet (this project has no API layer): submitting swaps the fields for an
 * inline confirmation, ready to be pointed at a real endpoint later.
 */
export function GreetingForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p
        role="status"
        className={cn(
          "font-sans text-[18px] leading-[1.4] text-foreground",
          className,
        )}
      >
        {successMessage}
      </p>
    );
  }

  return (
    <form
      className={cn("flex w-full flex-col items-start gap-4", className)}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <FloatingLabelInput
        id={fields.phone.name}
        type={fields.phone.type}
        name={fields.phone.name}
        label={fields.phone.label}
        required
      />
      <FloatingLabelInput
        id={fields.name.name}
        type={fields.name.type}
        name={fields.name.name}
        label={fields.name.label}
        required
      />
      <FloatingLabelInput
        id={fields.company.name}
        type={fields.company.type}
        name={fields.company.name}
        label={fields.company.label}
      />
      <FloatingLabelInput
        id={fields.email.name}
        type={fields.email.type}
        name={fields.email.name}
        label={fields.email.label}
        required
      />
      <FloatingLabelTextarea
        id={fields.message.name}
        name={fields.message.name}
        label={fields.message.label}
        rows={6}
      />

      <label className="flex items-start gap-2 font-sans text-[15px] leading-[1.3] text-foreground md:items-center md:text-[18px] md:leading-[1.16]">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-5 w-5 shrink-0 rounded-[4px] border border-foreground/20 bg-white accent-foreground md:mt-0"
        />
        <span className="min-w-0 text-pretty">
          {privacy.prefix}
          <Link href={privacy.href} className="underline">
            {privacy.linkLabel}
          </Link>
        </span>
      </label>

      <button
        type="submit"
        className="mt-2 h-14 w-full rounded-pill bg-footer font-sans text-[18px] text-footer-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2"
      >
        {submitLabel}
      </button>
    </form>
  );
}

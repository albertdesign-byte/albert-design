"use client";

import Link from "next/link";
import { useActionState } from "react";

import { submitGreeting } from "@/app/contacto/actions";
import {
  FloatingLabelInput,
  FloatingLabelTextarea,
} from "@/components/ui/FloatingLabelField";
import { GlassSelect } from "@/components/ui/GlassSelect";
import { PhonePrefixField } from "@/components/ui/PhonePrefixField";
import { greeting } from "@/content/greeting";
import { cn } from "@/lib/cn";

const { fields, privacy, submitLabel, submittingLabel, successMessage } =
  greeting.form;

/**
 * "Amamos crear proyectos" request form — Figma 72:8669.
 * Submits to a Server Action that emails every field to Albert Design.
 */
export function GreetingForm({
  className,
  defaultService = "",
}: {
  className?: string;
  defaultService?: string;
}) {
  const [state, formAction, pending] = useActionState(submitGreeting, {
    ok: false,
    message: null,
    values: null,
  });

  if (state.ok) {
    return (
      <p
        role="status"
        className={cn(
          "font-sans text-[16px] leading-[1.4] text-foreground",
          className,
        )}
      >
        {state.message ?? successMessage}
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className={cn(
        "relative flex w-full flex-col items-start gap-4 lg:h-full lg:gap-3",
        className,
      )}
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      />
      <div className="flex w-full shrink-0 flex-col gap-4 md:flex-row md:gap-space-4">
        <FloatingLabelInput
          id={fields.name.name}
          type={fields.name.type}
          name={fields.name.name}
          label={fields.name.label}
          className="min-w-0 flex-1"
          required
          defaultValue={state.values?.name}
        />
        <PhonePrefixField
          id={fields.phone.name}
          name={fields.phone.name}
          countryName={fields.phone.countryName}
          label={fields.phone.label}
          prefixLabel={fields.phone.prefixLabel}
          className="min-w-0 flex-1"
          required
          defaultValue={state.values?.phone}
          defaultCountry={state.values?.country}
        />
      </div>
      <div className="flex w-full shrink-0 flex-col gap-4 md:flex-row md:gap-space-4">
        <FloatingLabelInput
          id={fields.company.name}
          type={fields.company.type}
          name={fields.company.name}
          label={fields.company.label}
          className="min-w-0 flex-1"
          defaultValue={state.values?.company}
        />
        <FloatingLabelInput
          id={fields.email.name}
          type={fields.email.type}
          name={fields.email.name}
          label={fields.email.label}
          className="min-w-0 flex-1"
          required
          defaultValue={state.values?.email}
        />
      </div>
      <GlassSelect
        id={fields.service.name}
        name={fields.service.name}
        label={fields.service.label}
        options={fields.service.options}
        className="shrink-0"
        defaultValue={state.values?.service || defaultService}
        key={defaultService || state.values?.service || "service"}
      />
      <GlassSelect
        id={fields.budget.name}
        name={fields.budget.name}
        label={fields.budget.label}
        options={fields.budget.options}
        className="shrink-0"
        defaultValue={state.values?.budget}
        key={state.values?.budget ?? "budget"}
      />
      <FloatingLabelTextarea
        id={fields.message.name}
        name={fields.message.name}
        label={fields.message.label}
        rows={6}
        className="min-h-0 lg:flex lg:flex-1 lg:flex-col"
        defaultValue={state.values?.message}
      />

      <label className="flex shrink-0 items-start gap-2 font-sans text-[16px] leading-[1.3] text-muted-foreground md:items-center md:leading-[1.16]">
        <input
          type="checkbox"
          name="privacy"
          value="on"
          required
          defaultChecked={Boolean(state.values)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded-[4px] border border-foreground/20 bg-white accent-foreground md:mt-0"
        />
        <span className="min-w-0 text-pretty">
          {privacy.prefix}
          <Link
            href={privacy.href}
            className="underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
          >
            {privacy.linkLabel}
          </Link>
        </span>
      </label>

      {state.message ? (
        <p role="alert" className="font-sans text-[14px] leading-[1.4] text-foreground">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="h-12 min-h-12 w-full shrink-0 rounded-pill bg-primary font-sans text-[18px] text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? submittingLabel : submitLabel}
      </button>
    </form>
  );
}

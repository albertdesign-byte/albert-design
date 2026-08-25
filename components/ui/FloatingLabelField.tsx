import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

/**
 * Google-style floating label: sits centered over the field like a
 * placeholder, then shrinks to a small caption above the value on focus
 * (or once filled) — pure CSS via the `peer` + `:placeholder-shown`
 * pattern, so it works without JS state. Focus also draws a soft grey
 * border, the field's only visual cue that it's the active one.
 */
const fieldClassName =
  "peer w-full rounded-[12px] border border-transparent bg-white px-4 font-sans text-[16px] text-foreground transition-colors duration-200 ease-out focus:border-foreground/20 focus:outline-none";

const labelClassName =
  "pointer-events-none absolute left-4 font-sans text-[16px] text-muted-foreground transition-all duration-200 ease-out";

type FloatingLabelInputProps = {
  id: string;
  label: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function FloatingLabelInput({
  id,
  label,
  className,
  ...inputProps
}: FloatingLabelInputProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <input
        id={id}
        placeholder=" "
        className={cn(fieldClassName, "h-14 pb-1.5 pt-5")}
        {...inputProps}
      />
      <label
        htmlFor={id}
        className={cn(
          labelClassName,
          "top-1/2 -translate-y-1/2",
          "peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-muted-foreground",
          "peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-muted-foreground",
        )}
      >
        {label}
      </label>
    </div>
  );
}

type FloatingLabelTextareaProps = {
  id: string;
  label: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function FloatingLabelTextarea({
  id,
  label,
  className,
  ...textareaProps
}: FloatingLabelTextareaProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <textarea
        id={id}
        placeholder=" "
        className={cn(
          fieldClassName,
          "h-[210px] min-h-0 resize-none pb-2 pt-7 lg:h-auto lg:min-h-0 lg:flex-1",
        )}
        {...textareaProps}
      />
      <label
        htmlFor={id}
        className={cn(
          labelClassName,
          "top-4",
          "peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-muted-foreground",
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-muted-foreground",
        )}
      >
        {label}
      </label>
    </div>
  );
}

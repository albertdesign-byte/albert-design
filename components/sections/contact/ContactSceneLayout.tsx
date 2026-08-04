import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContactSceneLayoutProps = {
  label: string;
  aside: string;
  visual: ReactNode;
  tone: "on-dark" | "on-light";
  className?: string;
};

/**
 * Figma three-zone composition: label 180 · visual 529 · aside 322, gap ~104.
 */
export function ContactSceneLayout({
  label,
  aside,
  visual,
  tone,
  className,
}: ContactSceneLayoutProps) {
  const copy =
    tone === "on-dark" ? "text-footer-foreground" : "text-foreground";

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[1239px] flex-col items-start gap-space-10 px-space-6 md:flex-row md:items-center md:justify-center md:gap-[104px] md:px-0",
        className,
      )}
    >
      <h2
        className={cn(
          "shrink-0 font-display text-[1.75rem] leading-[1.48] md:w-[180px]",
          copy,
        )}
      >
        {label}
      </h2>

      <div className="relative h-auto w-full max-w-[529px] shrink-0 overflow-hidden rounded-[24px] md:h-[353px] md:w-[529px]">
        {visual}
      </div>

      <p
        className={cn(
          "shrink-0 font-chrome text-[1.125rem] leading-[1.48] md:w-[322px] md:text-[1.25rem]",
          copy,
        )}
      >
        {aside}
      </p>
    </div>
  );
}

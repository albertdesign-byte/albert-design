"use client";

import Link from "next/link";

import { cn } from "@/lib/cn";
import { useNextProjectBarVisible } from "@/lib/scroll/useNextProjectBarVisible";

type NextProjectBarProps = {
  name: string;
  href?: string;
  disabled?: boolean;
};

/**
 * Floating next-project bar on case studies (Figma 133:8937).
 * Glass pill, full content width, left-aligned name + "Siguiente proyecto".
 * Visibility: past 50% page scroll, hidden when `#next-project` is on screen.
 */
export function NextProjectBar({ name, href, disabled }: NextProjectBarProps) {
  const visible = useNextProjectBarVisible();
  const inactive = disabled || !href;

  const content = (
    <span className="flex flex-col px-4 py-3">
      <span className="font-sans text-[20px] leading-6 text-foreground">{name}</span>
      <span className="flex items-center gap-1 font-sans text-[12px] leading-3 text-foreground">
        Siguiente proyecto
        <span className="relative size-5 shrink-0 overflow-clip">
          <img
            src="/images/work/next-chevron.svg"
            alt=""
            width={20}
            height={20}
            className={cn(
              "size-full transition-transform duration-200 ease-out motion-reduce:transition-none",
              !inactive && "group-hover:translate-x-0.5",
            )}
          />
        </span>
      </span>
    </span>
  );

  const surface = cn(
    "fixed inset-x-6 z-40 flex lg:inset-x-10",
    "bottom-[max(1rem,env(safe-area-inset-bottom))]",
    "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
    visible
      ? "pointer-events-auto translate-y-0 opacity-100"
      : "pointer-events-none translate-y-2 opacity-0",
  );

  const barClass =
    "flex w-full items-start rounded-[16px] bg-white/50 p-1 backdrop-blur-[6px]";

  if (inactive) {
    return (
      <div
        aria-hidden={!visible}
        className={surface}
      >
        <div className={barClass}>{content}</div>
      </div>
    );
  }

  return (
    <div
      aria-hidden={!visible}
      className={surface}
    >
      <Link
        href={href}
        tabIndex={visible ? undefined : -1}
        className={cn(
          "group",
          barClass,
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2",
        )}
      >
        {content}
      </Link>
    </div>
  );
}

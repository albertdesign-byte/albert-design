import type { ReactNode } from "react";

import { hero } from "@/content/hero";
import { cn } from "@/lib/cn";

type HeroBioProps = {
  children?: ReactNode;
  className?: string;
};

export function HeroBio({ children, className }: HeroBioProps) {
  return (
    <p
      className={cn(
        "max-w-[219px] whitespace-pre-line font-sans text-[12px] leading-[18px] text-foreground",
        className,
      )}
    >
      {children ?? hero.bio}
    </p>
  );
}

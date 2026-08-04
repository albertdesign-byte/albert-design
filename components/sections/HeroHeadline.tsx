import { hero } from "@/content/hero";
import { cn } from "@/lib/cn";

type HeroHeadlineProps = {
  className?: string;
};

export function HeroHeadline({ className }: HeroHeadlineProps) {
  return (
    <h1
      className={cn(
        "max-w-[18ch] whitespace-pre-line font-display text-[clamp(2.75rem,8vw,6rem)] leading-[1.28] tracking-[-0.034em] text-foreground md:max-w-[681px]",
        className,
      )}
    >
      {hero.headline}
    </h1>
  );
}

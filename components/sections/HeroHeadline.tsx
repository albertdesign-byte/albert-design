import { hero } from "@/content/hero";
import { cn } from "@/lib/cn";

type HeroHeadlineProps = {
  className?: string;
};

export function HeroHeadline({ className }: HeroHeadlineProps) {
  return (
    <h1
      className={cn(
        "max-w-[18ch] whitespace-pre-line font-display tracking-[-0.034em] text-foreground",
        "text-[clamp(1.875rem,8svh,2.75rem)] leading-[1.12]",
        "md:text-[clamp(2.5rem,7.5svh,4.5rem)] md:leading-[1.18]",
        "lg:text-[clamp(3.25rem,8svh,6rem)] lg:leading-[1.22]",
        "min-[1440px]:text-[clamp(4.5rem,8.5svh,8rem)] min-[1440px]:leading-[1.28]",
        "md:max-w-[36ch] lg:max-w-[clamp(28ch,40vw,908px)]",
        className,
      )}
    >
      {hero.headline}
    </h1>
  );
}

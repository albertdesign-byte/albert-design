import { hero } from "@/content/hero";
import { cn } from "@/lib/cn";

type HeroBioProps = {
  className?: string;
};

export function HeroBio({ className }: HeroBioProps) {
  return (
    <p
      className={cn(
        "max-w-[219px] font-sans text-[12px] leading-[18px] text-foreground",
        className,
      )}
    >
      {hero.bio}
    </p>
  );
}

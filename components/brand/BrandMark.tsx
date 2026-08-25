import Link from "next/link";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
};

/** Wordmark + tagline (Figma 108:1352). */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label={site.name}
      className={cn(
        "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25",
        className,
      )}
    >
      <span className="relative block h-5 w-[118px] overflow-clip">
        <img
          src="/images/nav/albeeert.svg"
          alt={site.name}
          width={118}
          height={20}
          className="size-full"
        />
      </span>
      <span className="mt-px block font-chrome text-[12px] leading-[18px] text-label">
        Wordwide
      </span>
    </Link>
  );
}

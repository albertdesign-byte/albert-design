import Link from "next/link";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-chrome focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25",
        className,
      )}
    >
      <span className="block text-[14px] font-semibold leading-none tracking-tight text-foreground">
        {site.name}
      </span>
      <span className="mt-px block text-[12px] leading-[18px] text-label">
        {site.tagline}
      </span>
    </Link>
  );
}

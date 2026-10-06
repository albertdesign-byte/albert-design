import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type FrustButtonVariant = "ghost" | "pink" | "dark";

type FrustButtonProps = {
  href: string;
  children: ReactNode;
  variant?: FrustButtonVariant;
  className?: string;
};

const variants: Record<FrustButtonVariant, string> = {
  ghost:
    "border-[#f1f1f1] bg-white text-foreground hover:border-foreground/20",
  pink: "border-[#ffa6ff] bg-[#ffbbff] text-foreground hover:bg-[#f4cbf6]",
  dark: "border-transparent bg-foreground text-white hover:bg-foreground/90",
};

export function FrustButton({
  href,
  children,
  variant = "ghost",
  className,
}: FrustButtonProps) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center rounded-[8px] border border-solid px-6 py-4",
        "font-sans text-[14px] font-semibold leading-4 whitespace-nowrap",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

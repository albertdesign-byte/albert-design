"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/content/navigation";
import { cn } from "@/lib/cn";

type NavPillProps = {
  className?: string;
};

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  const pathOnly = href.split("#")[0] || "/";
  if (pathOnly === "/") return false;
  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}

export function NavPill({ className }: NavPillProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "flex items-center rounded-pill bg-background p-1",
        className,
      )}
    >
      {navItems.map((item) => {
        const active = isActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-pill px-4 py-3 font-chrome text-[12px] leading-none transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2",
              active
                ? "bg-footer text-footer-foreground"
                : "text-foreground hover:bg-muted",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

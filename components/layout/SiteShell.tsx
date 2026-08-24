import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Page shell: 8px outer inset + 8px gap between stacked sections.
 */
export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <main
      className={cn(
        "flex min-h-full flex-1 flex-col gap-space-2 bg-background p-space-2",
        className,
      )}
    >
      {children}
    </main>
  );
}

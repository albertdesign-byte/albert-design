import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Content width + horizontal chrome padding (≈48px desktop).
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1424px] px-space-6 md:px-space-8 lg:px-space-12",
        className,
      )}
    >
      {children}
    </div>
  );
}

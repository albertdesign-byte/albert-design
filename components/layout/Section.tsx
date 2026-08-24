import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Rounded section panel. Surface via className (e.g. bg-muted, bg-footer).
 */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("rounded-panel bg-muted", className)}>
      {children}
    </section>
  );
}

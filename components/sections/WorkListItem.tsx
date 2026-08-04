import { cn } from "@/lib/cn";

type WorkListItemProps = {
  name: string;
  year: string;
  className?: string;
};

/**
 * Editorial row — visual only (no navigation in this pass).
 * Hover: fast, quiet color shift.
 */
export function WorkListItem({ name, year, className }: WorkListItemProps) {
  return (
    <li
      className={cn(
        "group flex cursor-pointer items-center justify-between gap-space-6 border-b border-[#cfd1d7] py-[1.8rem] first:border-t",
        "text-foreground transition-colors duration-200 ease-out",
        "hover:text-muted-foreground",
        className,
      )}
    >
      <span className="min-w-0 font-sans text-list">{name}</span>
      <span className="shrink-0 font-sans text-list tabular-nums">{year}</span>
    </li>
  );
}

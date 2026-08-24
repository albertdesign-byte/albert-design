import { cn } from "@/lib/cn";

type WorkListItemProps = {
  name: string;
  year: string;
  /** External site URL — when present, shows a "ver website" link next to the name. */
  url?: string;
  className?: string;
};

/**
 * Editorial row — visual only in this pass, except for the optional
 * "ver website" link, which opens the project's live site in a new tab.
 * Hover: fast, quiet color shift.
 */
export function WorkListItem({ name, year, url, className }: WorkListItemProps) {
  return (
    <li
      className={cn(
        "group flex cursor-pointer items-center justify-between gap-space-6 border-b border-[#cfd1d7] py-[1.8rem] first:border-t",
        "text-foreground transition-colors duration-200 ease-out",
        "hover:text-muted-foreground",
        className,
      )}
    >
      <span className="flex min-w-0 items-baseline gap-space-4">
        <span className="min-w-0 truncate font-sans text-list">{name}</span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-sans text-[12px] leading-[18px] text-muted-foreground underline underline-offset-4 transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2"
          >
            ver website
          </a>
        ) : null}
      </span>
      <span className="shrink-0 font-sans text-list tabular-nums">{year}</span>
    </li>
  );
}

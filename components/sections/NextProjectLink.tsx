import Link from "next/link";

import { cn } from "@/lib/cn";

type NextProjectLinkProps = {
  name: string;
  label: string;
  href?: string;
  /**
   * True when the next case study isn't built/live yet (Figma shows "muy
   * pronto" instead of "siguiente" — e.g. Zara IA → Oquea). Renders the
   * same display but as plain, non-interactive markup instead of a Link.
   */
  disabled?: boolean;
  className?: string;
};

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
  >
    <path
      d="M14.1925 10.4423L7.94254 16.6923C7.88447 16.7504 7.81553 16.7964 7.73966 16.8278C7.66379 16.8593 7.58247 16.8755 7.50035 16.8755C7.41823 16.8755 7.33691 16.8593 7.26104 16.8278C7.18517 16.7964 7.11623 16.7504 7.05816 16.6923C7.00009 16.6342 6.95403 16.5653 6.9226 16.4894C6.89117 16.4135 6.875 16.3322 6.875 16.2501C6.875 16.168 6.89117 16.0867 6.9226 16.0108C6.95403 15.9349 7.00009 15.866 7.05816 15.8079L12.8668 10.0001L7.05816 4.19229C6.94088 4.07502 6.875 3.91596 6.875 3.7501C6.875 3.58425 6.94088 3.42519 7.05816 3.30792C7.17544 3.19064 7.3345 3.12476 7.50035 3.12476C7.6662 3.12476 7.82526 3.19064 7.94254 3.30792L14.1925 9.55792C14.2506 9.61596 14.2967 9.68489 14.3282 9.76077C14.3597 9.83664 14.3758 9.91797 14.3758 10.0001C14.3758 10.0822 14.3597 10.1636 14.3282 10.2394C14.2967 10.3153 14.2506 10.3842 14.1925 10.4423Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Blog-style "next case study" pagination (Figma 69:19506) — same display
 * type as the project title (font-display, 96px), right-aligned, with a
 * small "siguiente" label + chevron underneath.
 *
 * When `disabled` (or no `href`), renders as a plain `div` instead of a
 * `Link`: same visuals, but purely informational — no navigation, no
 * hover/focus affordances — for teased case studies that aren't live yet.
 */
export function NextProjectLink({
  name,
  label,
  href,
  disabled,
  className,
}: NextProjectLinkProps) {
  const content = (
    <>
      <span className="font-display text-[clamp(2.5rem,7vw,6rem)] tracking-[-0.034em] text-foreground lg:text-display">
        {name}
      </span>

      <span className="flex items-center gap-1 font-sans text-[12px] leading-[18px] text-foreground">
        {label}
        <ArrowIcon />
      </span>
    </>
  );

  if (disabled || !href) {
    return (
      <div
        id="next-project"
        aria-disabled="true"
        className={cn("flex flex-col items-end", className)}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      id="next-project"
      href={href}
      className={cn(
        "group flex flex-col items-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2",
        className,
      )}
    >
      {content}
    </Link>
  );
}

import Image from "next/image";

import { hero } from "@/content/hero";
import { cn } from "@/lib/cn";

/** Repeats per track so one cycle is always wider than the viewport. */
const TRACK_COPIES = 3;

function LogoTrack({
  ariaHidden,
  className,
}: {
  ariaHidden?: boolean;
  className?: string;
}) {
  const items = Array.from({ length: TRACK_COPIES }, (_, copy) =>
    hero.logos.map((logo) => ({ logo, copy })),
  ).flat();

  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className={cn(
        "flex shrink-0 items-center gap-[59px] pr-[59px]",
        className,
      )}
    >
      {items.map(({ logo, copy }) => (
        <li
          key={`${copy}-${logo.name}`}
          className="flex h-[31px] shrink-0 items-center"
        >
          <Image
            src={logo.src}
            alt={ariaHidden || copy > 0 ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            unoptimized
            className="h-auto max-h-[31px] w-auto"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Hero client strip (Figma 1:587 / 201:8977).
 * Edge fades match rectangles 201:9061 (246px, rotated) and 201:9060 (222px).
 * Each track repeats the set until it is wider than the viewport; two
 * tracks translate -50% so the next copy is already on-screen at wrap.
 */
export function HeroLogoMarquee() {
  return (
    <div
      className="relative w-full overflow-hidden pb-24 md:pb-16 lg:pb-16"
      role="region"
      aria-label="Clientes"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10",
          "w-16 bg-gradient-to-r from-muted to-transparent",
          "md:w-24 lg:w-[246px]",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10",
          "w-16 bg-gradient-to-l from-muted to-transparent",
          "md:w-24 lg:w-[222px]",
        )}
      />

      <div className="flex w-max motion-reduce:w-full motion-reduce:justify-center">
        <div className="flex w-max animate-hero-marquee will-change-transform motion-reduce:animate-none">
          <LogoTrack />
          <LogoTrack ariaHidden className="motion-reduce:hidden" />
        </div>
      </div>
    </div>
  );
}

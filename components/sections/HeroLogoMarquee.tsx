import Image from "next/image";

import { hero } from "@/content/hero";
import { cn } from "@/lib/cn";

function LogoTrack({
  ariaHidden,
  className,
}: {
  ariaHidden?: boolean;
  className?: string;
}) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className={cn(
        "flex shrink-0 items-center gap-[59px] pr-[59px]",
        className,
      )}
    >
      {hero.logos.map((logo) => (
        <li key={logo.name} className="flex h-[31px] shrink-0 items-center">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.name}
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
 * Two identical tracks translate -50% for a seamless loop.
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

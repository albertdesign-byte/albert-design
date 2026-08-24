"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import type { PortfolioImage } from "@/content/projects";
import { cn } from "@/lib/cn";

type CaseStudyCardProps = {
  href: string;
  name: string;
  surface: string;
  image: PortfolioImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Fill the grid cell height (split bands). */
  fill?: boolean;
  /** No case study yet — hover label is "Muy pronto" and the card isn't a link. */
  comingSoon?: boolean;
};

export function CaseStudyCard({
  href,
  name,
  surface,
  image,
  className,
  priority = false,
  sizes = "100vw",
  fill = false,
  comingSoon = false,
}: CaseStudyCardProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const hoverLabel = comingSoon ? "Muy pronto" : "Ver proyecto";

  function handlePointerMove(event: React.MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }
  }

  const sharedClassName = cn(
    "group relative block overflow-hidden rounded-panel [@media(hover:hover)_and_(pointer:fine)]:cursor-none",
    fill && "h-full min-h-[280px] md:min-h-[420px] lg:min-h-[653px]",
    className,
  );

  const inner = (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className={cn(
          "transition-transform duration-500 ease-out group-hover:scale-[1.015]",
          fill
            ? "absolute inset-0 h-full w-full object-cover object-center"
            : "h-auto w-full object-cover",
        )}
      />

      {/* Custom "Ver proyecto" cursor — Figma glass bubble (node 66:510):
          white/10 fill + native Glass effect. Backdrop-blur + a soft
          top-left radial highlight approximate that refraction in CSS,
          matching the navbar's glass language but far more translucent. */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 left-0 z-10 hidden h-[182px] w-[182px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.38),rgba(255,255,255,0.1)_55%,rgba(255,255,255,0.04)_100%)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-white/40 backdrop-blur-md backdrop-saturate-150 transition-opacity duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:flex",
          hovering ? "opacity-100" : "opacity-0",
        )}
      >
        <span className="font-sans text-[15px] text-foreground">
          {hoverLabel}
        </span>
      </div>
    </>
  );

  if (comingSoon) {
    return (
      <div
        aria-label={`${name} — muy pronto`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={handlePointerMove}
        className={sharedClassName}
        style={{ backgroundColor: surface }}
      >
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={href}
      aria-label={`Case study: ${name}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handlePointerMove}
      className={cn(
        sharedClassName,
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2",
      )}
      style={{ backgroundColor: surface }}
    >
      {inner}
    </Link>
  );
}

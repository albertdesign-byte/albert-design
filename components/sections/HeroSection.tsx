import type { ReactNode } from "react";
import Image from "next/image";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { Section } from "@/components/layout/Section";
import { HeroHeadline } from "@/components/sections/HeroHeadline";
import { HeroLogoMarquee } from "@/components/sections/HeroLogoMarquee";
import { hero } from "@/content/hero";

type HeroSectionProps = {
  bio?: string | null;
  headline?: string;
  eyebrow?: ReactNode;
};

/**
 * Home hero (Figma 1:587): header chrome + centered headline, subtitle,
 * work CTA and client logos. Locked to one viewport.
 *
 * Precio (and other pages) still pass `eyebrow` / `bio={null}` and keep
 * the previous inner composition — navbar is untouched either way.
 */
export function HeroSection({
  headline = hero.headline,
  eyebrow,
}: HeroSectionProps) {
  const isHomeHero = !eyebrow;

  return (
    <Section
      id="hero"
      className="relative flex h-[calc(100dvh-1rem)] flex-col overflow-hidden"
    >
      <SiteHeader />

      {isHomeHero ? (
        <div className="absolute inset-0 z-0 flex flex-col">
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-space-6 text-center md:px-space-8 lg:px-10">
            <div className="flex max-w-[697px] flex-col items-center gap-3">
              <HeroHeadline className="mx-auto max-w-[697px] text-center text-[clamp(2.25rem,8vw,5rem)] leading-[1.28] tracking-[-0.0403em] md:max-w-[697px] md:text-[clamp(2.5rem,6vw,5rem)] md:leading-[1.28] lg:max-w-[697px] lg:text-[5rem] lg:leading-[1.28] min-[1440px]:text-[5rem] min-[1440px]:leading-[1.28]">
                {headline}
              </HeroHeadline>
              <p className="max-w-[513px] font-sans text-[12px] leading-[18px] text-muted-foreground">
                {hero.subtitle}
              </p>
              <a
                href={hero.cta.href}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#f0f0f0] px-6 font-sans text-[12px] leading-6 text-neutral-950 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2"
              >
                {hero.cta.label}
                <Image
                  src="/images/hero/view-work.svg"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="size-5"
                />
              </a>
            </div>
          </div>

          <HeroLogoMarquee />
        </div>
      ) : (
        <div className="relative flex min-h-0 flex-1 flex-col px-space-6 pb-24 pt-space-8 md:px-space-8 md:pb-16 md:pt-space-12 lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:px-10 lg:pb-12 lg:pt-0">
          <div className="mt-auto flex flex-col items-start pt-space-8 md:pt-space-12 lg:col-start-2 lg:row-start-2 lg:mt-0 lg:justify-self-end lg:pt-0">
            {eyebrow}
            <HeroHeadline>{headline}</HeroHeadline>
          </div>
        </div>
      )}
    </Section>
  );
}

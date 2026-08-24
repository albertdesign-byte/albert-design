import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { FooterCta } from "@/components/sections/FooterCta";
import { NextProjectLink } from "@/components/sections/NextProjectLink";
import { gokei } from "@/content/gokei";

export const metadata: Metadata = {
  title: gokei.name,
};

/**
 * Gokei case study — first fully-built project detail page (Figma 66:512).
 * Every homepage Portfolio card links here for now (see content/projects.ts):
 * it's the only case study with real content, the rest still fall back to
 * the generic placeholder at app/work/[slug].
 */
export default function GokeiPage() {
  return (
    <SiteShell>
      {/* Figma 66:513 "Hero" is ONE panel (bg-[#f5f5f5] = bg-muted) wrapping
          the header, heading and all 6 images — confirmed via get_design_context
          (not the screenshot pixel-sample, which misleadingly rendered white).
          Kept as a single Section, not one-per-image, so the muted grey shows
          through every 16px gap, matching Figma, instead of white bands. */}
      <Section id="hero" className="overflow-hidden">
        <SiteHeader />

        {/* Figma 66:518→66:516 gap (banner bottom → heading top) ≈ 178px. */}
        <Container className="pt-space-24 pb-space-12 md:pt-space-32 md:pb-16 lg:pt-[178px]">
          <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] tracking-[-0.034em] text-foreground lg:text-display">
            {gokei.heading}
          </h1>
        </Container>

        <div className="flex flex-col gap-space-4">
          <Container className="px-space-6 md:px-space-8 lg:px-space-12">
            <Image
              src={gokei.hero.src}
              alt={gokei.hero.alt}
              width={gokei.hero.width}
              height={gokei.hero.height}
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="h-auto w-full"
              priority
            />
          </Container>

          {gokei.sections.map((image) => (
            <Container key={image.src} className="px-space-6 md:px-space-8 lg:px-space-12">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1440px) 1360px, 100vw"
                className="h-auto w-full"
              />
            </Container>
          ))}
        </div>

        {/* Figma 69:19506: blog-style "next case study" pagination, right
            after the last image, right-aligned within the same 32px inset. */}
        <Container className="flex justify-end px-space-6 pt-space-4 pb-space-12 md:px-space-8 md:pb-16 lg:px-space-12">
          <NextProjectLink
            name={gokei.nextProject.name}
            label={gokei.nextProject.label}
            href={gokei.nextProject.href}
          />
        </Container>
      </Section>

      <FooterCta />
    </SiteShell>
  );
}

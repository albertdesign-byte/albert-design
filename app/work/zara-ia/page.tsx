import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { FooterCta } from "@/components/sections/FooterCta";
import { NextProjectBar } from "@/components/sections/NextProjectBar";
import { NextProjectLink } from "@/components/sections/NextProjectLink";
import { zaraIa } from "@/content/zara-ia";

export const metadata: Metadata = {
  title: zaraIa.name,
};

/**
 * Zara IA case study — third fully-built project detail page (Figma
 * 71:7535), same structure as app/work/gokei and app/work/lapzo: one
 * bg-muted panel wrapping the header, heading and all images, 16px gaps
 * between bands. "Oquea" next-project teaser is disabled (not built yet).
 */
export default function ZaraIaPage() {
  return (
    <SiteShell>
      <Section id="hero" className="overflow-hidden">
        <SiteHeader />

        {/* Figma 71:7541→72:7948 gap (banner bottom → heading top) ≈ 178px. */}
        <Container className="pt-space-24 pb-space-12 md:pt-space-32 md:pb-16 lg:pt-[178px]">
          <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] tracking-[-0.034em] text-foreground lg:text-display">
            {zaraIa.heading}
          </h1>
        </Container>

        <div className="flex flex-col gap-space-4">
          <Container className="px-space-6 md:px-space-8 lg:px-space-12">
            <Image
              src={zaraIa.hero.src}
              alt={zaraIa.hero.alt}
              width={zaraIa.hero.width}
              height={zaraIa.hero.height}
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="h-auto w-full"
              priority
            />
          </Container>

          {zaraIa.sections.map((image) => (
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

        <Container className="flex justify-end px-space-6 pt-space-4 pb-space-12 md:px-space-8 md:pb-16 lg:px-space-12">
          <NextProjectLink
            name={zaraIa.nextProject.name}
            label={zaraIa.nextProject.label}
            disabled={zaraIa.nextProject.disabled}
          />
        </Container>
      </Section>

      <FooterCta />
      <NextProjectBar
        name={zaraIa.nextProject.name}
        disabled={zaraIa.nextProject.disabled}
      />
    </SiteShell>
  );
}

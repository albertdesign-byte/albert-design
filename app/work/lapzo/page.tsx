import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { FooterCta } from "@/components/sections/FooterCta";
import { NextProjectBar } from "@/components/sections/NextProjectBar";
import { NextProjectLink } from "@/components/sections/NextProjectLink";
import { lapzo } from "@/content/lapzo";

export const metadata: Metadata = {
  title: lapzo.name,
};

/**
 * Lapzo case study — second fully-built project detail page (Figma
 * 71:572), same structure as app/work/gokei/page.tsx: one bg-muted panel
 * wrapping the header, heading and all images, 16px gaps between bands.
 */
export default function LapzoPage() {
  return (
    <SiteShell>
      <Section id="hero" className="overflow-hidden">
        <SiteHeader />

        {/* Figma 71:578→72:7945 gap (banner bottom → heading top) ≈ 178px. */}
        <Container className="pt-space-24 pb-space-12 md:pt-space-32 md:pb-16 lg:pt-[178px]">
          <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] tracking-[-0.034em] text-foreground lg:text-display">
            {lapzo.heading}
          </h1>
        </Container>

        <div className="flex flex-col gap-space-4">
          <Container className="px-space-6 md:px-space-8 lg:px-space-12">
            <Image
              src={lapzo.hero.src}
              alt={lapzo.hero.alt}
              width={lapzo.hero.width}
              height={lapzo.hero.height}
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="h-auto w-full"
              priority
            />
          </Container>

          {lapzo.sections.map((image) => (
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
            name={lapzo.nextProject.name}
            label={lapzo.nextProject.label}
            href={lapzo.nextProject.href}
          />
        </Container>
      </Section>

      <FooterCta />
      <NextProjectBar
        name={lapzo.nextProject.name}
        href={lapzo.nextProject.href}
      />
    </SiteShell>
  );
}

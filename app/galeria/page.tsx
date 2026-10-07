import type { Metadata } from "next";

import { Section } from "@/components/layout/Section";
import { SiteShell } from "@/components/layout/SiteShell";
import { FooterCta } from "@/components/sections/FooterCta";
import { GalleryBoard } from "@/components/sections/GalleryBoard";

export const metadata: Metadata = {
  title: "Galería",
};

/**
 * Galería — Figma 211:14288 "Home" (1440×3253).
 * Dark board of work tiles + existing FooterCta ("Envía un saludo").
 */
export default function GaleriaPage() {
  return (
    <SiteShell>
      <Section
        id="galeria"
        className="overflow-hidden bg-[#160B07] text-[#f8f4f2]"
      >
        <GalleryBoard />
      </Section>
      <FooterCta />
    </SiteShell>
  );
}

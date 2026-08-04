import { SiteHeader } from "@/components/layout/SiteHeader";
import { Section } from "@/components/layout/Section";
import { HeroBio } from "@/components/sections/HeroBio";
import { HeroHeadline } from "@/components/sections/HeroHeadline";

/**
 * Hero: header + asymmetric bio (left) + display headline (bottom-right).
 * Presence ~900–950px desktop — air inside the panel is intentional.
 */
export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-[min(100svh,56rem)] flex-col md:min-h-[942px]"
    >
      <SiteHeader />

      <div className="relative flex flex-1 flex-col px-space-6 pb-space-12 pt-space-16 md:px-10 md:pb-12 md:pt-0">
        <HeroBio className="md:absolute md:top-[107px] md:left-10" />

        <HeroHeadline className="mt-auto pt-space-24 md:absolute md:right-10 md:bottom-12 md:mt-0 md:pt-0" />
      </div>
    </Section>
  );
}

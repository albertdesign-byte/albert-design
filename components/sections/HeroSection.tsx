import { SiteHeader } from "@/components/layout/SiteHeader";
import { Section } from "@/components/layout/Section";
import { HeroBio } from "@/components/sections/HeroBio";
import { HeroHeadline } from "@/components/sections/HeroHeadline";

/**
 * Hero: header + asymmetric bio (left) + display headline (bottom-right).
 * Locked to one viewport (`100dvh` minus the 8px shell inset) on every
 * breakpoint, so the first screen is always fully visible — type and the
 * bio/headline pair reflow inside that frame instead of growing the panel.
 *
 * Desktop composition: a 1fr + auto grid so bio and headline share the
 * same top edge (Figma) while sitting on the bottom of whatever height
 * the current display has, instead of the old 942px-only offsets.
 */
export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative flex h-[calc(100dvh-1rem)] flex-col overflow-hidden"
    >
      <SiteHeader />

      <div className="relative flex min-h-0 flex-1 flex-col px-space-6 pb-24 pt-space-8 md:px-space-8 md:pb-16 md:pt-space-12 lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:px-10 lg:pb-12 lg:pt-0">
        <HeroBio className="lg:col-start-1 lg:row-start-2 lg:self-start" />

        <HeroHeadline className="mt-auto pt-space-8 md:pt-space-12 lg:col-start-2 lg:row-start-2 lg:mt-0 lg:justify-self-end lg:pt-0" />
      </div>
    </Section>
  );
}

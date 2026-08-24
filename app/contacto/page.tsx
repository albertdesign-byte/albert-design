import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { GreetingForm } from "@/components/sections/greeting/GreetingForm";
import { GreetingSlider } from "@/components/sections/greeting/GreetingSlider";
import { greeting } from "@/content/greeting";

export const metadata: Metadata = {
  title: "Envía un saludo — Albert Design",
};

/**
 * "Envía un saludo" — Figma 72:13968 "Formulario" (1440x986, standalone —
 * no footer on this artboard, confirmed via get_metadata: the frame's only
 * two children are the form + slider panels).
 *
 * Figma's outer frame fill is solid white, NOT muted grey — the grey
 * (#f5f5f5 = --muted) belongs only to the form panel (its own rounded-[24]
 * card). The slider panel shares that same 24px radius and has no grey
 * padding: its image fills the card edge-to-edge. The two panels are
 * 618px / 798px wide respectively (43.6% / 56.4%), not an even 50/50 split.
 */
export default function ContactoPage() {
  return (
    <SiteShell>
      <Section id="hero" className="bg-background">
        <SiteHeader />

        <Container className="pb-space-12 lg:pb-16">
          <div className="grid gap-space-2 lg:grid-cols-[618fr_798fr]">
            <div className="flex flex-col gap-space-8 rounded-[24px] bg-muted p-6 md:p-8">
              <h1 className="whitespace-pre-line font-display text-[clamp(2.25rem,3.5vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-foreground">
                {greeting.heading}
              </h1>

              <GreetingForm />
            </div>

            <GreetingSlider
              slides={greeting.slides}
              intervalMs={greeting.sliderIntervalMs}
              className="min-h-[320px] rounded-[24px] md:min-h-[480px] lg:min-h-[420px]"
            />
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}

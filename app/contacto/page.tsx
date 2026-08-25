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
 *
 * Desktop matches the home hero: one locked viewport (`100dvh` minus the
 * 8px shell inset) so the form + slider stay fully on screen. Mobile and
 * tablet keep a natural height and page scroll.
 */
function serviceFromSearchParam(
  value: string | string[] | undefined,
): string {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return "";
  return greeting.form.fields.service.options.some((option) => option.value === raw)
    ? raw
    : "";
}

export default async function ContactoPage({
  searchParams,
}: PageProps<"/contacto">) {
  const params = await searchParams;
  const defaultService = serviceFromSearchParam(params.service);

  return (
    <SiteShell>
      <Section
        id="hero"
        className="bg-background lg:flex lg:h-[calc(100dvh-1rem)] lg:flex-col lg:overflow-hidden"
      >
        <SiteHeader className="shrink-0" />

        <Container className="pb-space-12 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:pb-space-6">
          <div className="grid gap-space-2 lg:min-h-0 lg:flex-1 lg:grid-cols-[618fr_798fr]">
            <div className="flex min-h-0 flex-col gap-space-6 rounded-[24px] bg-muted p-6 md:p-8 lg:p-space-12 [@media(min-width:1024px)_and_(max-height:850px)]:p-8">
              <div className="flex shrink-0 flex-col gap-5">
                <h2 className="whitespace-pre-line font-display text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-foreground [@media(max-height:850px)]:text-[clamp(2.25rem,6.5svh,3.25rem)]">
                  {greeting.heading}
                </h2>
                <p className="max-w-[42ch] font-sans text-[16px] leading-[1.5] text-muted-foreground">
                  {greeting.description}
                </p>
              </div>

              <GreetingForm
                className="lg:min-h-0 lg:flex-1 lg:overflow-hidden"
                defaultService={defaultService}
              />
            </div>

            <GreetingSlider
              slides={greeting.slides}
              intervalMs={greeting.sliderIntervalMs}
              className="min-h-[320px] rounded-[24px] md:min-h-[480px] lg:h-full lg:min-h-0"
            />
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}

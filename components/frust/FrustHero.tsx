import Image from "next/image";

import { FrustButton } from "@/components/frust/FrustButton";
import { FrustWash } from "@/components/frust/FrustWash";
import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustHero() {
  const { hero, partners, visual } = frust;

  return (
    <Container className="flex flex-col items-center gap-space-8 pb-space-8 pt-space-12 lg:pt-space-16">
      <div className="flex max-w-[744px] flex-col items-center gap-space-6 text-center">
        <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1.08] text-foreground">
          {hero.headline}
        </h1>
        <p className="max-w-[62ch] font-sans text-[16px] leading-[1.48] text-muted-foreground">
          {hero.body}
        </p>
        <div className="flex flex-col items-stretch gap-space-4 sm:flex-row sm:items-center">
          <FrustButton href={frust.demoHref}>{hero.demo}</FrustButton>
          <FrustButton href={frust.estimateHref} variant="pink">
            {hero.estimate}
          </FrustButton>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-space-4">
        {partners.map((logo) => (
          <div
            key={logo.src}
            className="flex h-12 items-center justify-center rounded-2xl bg-[#fafaf9] px-6 py-3"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto max-h-6 w-auto"
            />
          </div>
        ))}
      </div>

      <div className="relative w-full overflow-hidden rounded-panel bg-[#f4cbf6] p-space-4 md:p-space-6 lg:p-8">
        <FrustWash />
        <div className="relative grid gap-3 lg:grid-cols-[minmax(0,536px)_minmax(0,1fr)] lg:items-stretch">
          <article className="relative min-h-[280px] overflow-hidden rounded-2xl bg-white lg:min-h-[351px]">
            <Image
              src="/images/frust/hero-photo.png"
              alt=""
              width={1122}
              height={1402}
              priority
              sizes="(min-width: 1024px) 536px, 100vw"
              className="absolute inset-0 size-full object-cover object-[center_20%]"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-start justify-between gap-3 rounded-2xl border border-[#ebebeb] bg-white p-5">
              <p className="font-sans text-[16px] leading-tight text-foreground md:text-[20px]">
                Total savings
                <br />
                with Frust
              </p>
              <div className="text-right">
                <p className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-none text-[#e935ee]">
                  {visual.savingsValue}
                </p>
                <p className="mt-1 font-sans text-[14px] leading-[1.48] text-[#4d4d4d] md:text-[16px]">
                  {visual.savingsCaption}
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-rows-[auto_1fr]">
            <article className="flex gap-3 rounded-2xl border border-[#ebebeb] bg-white p-4">
              <img
                src="/images/frust/icon-clock.svg"
                alt=""
                width={47}
                height={48}
                className="h-12 w-12 shrink-0"
              />
              <div className="min-w-0">
                <p className="font-sans text-[18px] text-foreground md:text-[20px]">
                  {visual.setupLabel}
                </p>
                <p className="font-display leading-none text-foreground">
                  <span className="text-[40px] md:text-[48px]">{visual.setupValue}</span>
                  <span className="text-[28px] md:text-[32px]">{visual.setupUnit}</span>
                </p>
                <p className="font-sans text-[16px] leading-[1.48] text-[#4d4d4d]">
                  {visual.setupCaption}
                </p>
              </div>
            </article>

            <article className="flex gap-4 rounded-2xl border border-[#ebebeb] bg-white p-4">
              <img
                src="/images/frust/icon-chart.svg"
                alt=""
                width={56}
                height={49}
                className="h-12 w-14 shrink-0"
              />
              <div className="min-w-0">
                <p className="font-sans text-[18px] text-foreground md:text-[20px]">
                  {visual.rateLabel}
                </p>
                <p className="font-display text-[40px] leading-none text-foreground md:text-[48px]">
                  {visual.rateValue}
                </p>
                <p className="font-sans text-[16px] leading-[1.48] text-[#4d4d4d]">
                  {visual.rateCaption}
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-end gap-4 rounded-2xl border border-[#ebebeb] bg-white p-4 sm:col-span-2">
              <img
                src="/images/frust/icon-tag.svg"
                alt=""
                width={76}
                height={50}
                className="h-12 w-[76px]"
              />
              <div>
                <p className="font-sans text-[18px] text-foreground md:text-[20px]">
                  {visual.pricingLabel}
                </p>
                <p className="font-display text-[clamp(1.75rem,3.5vw,2.9rem)] leading-tight text-foreground">
                  <em>{visual.pricingLead}</em>
                  {visual.pricingMid}
                  <em>{visual.pricingTrail}</em>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Container>
  );
}

import { FrustButton } from "@/components/frust/FrustButton";
import { FrustWash } from "@/components/frust/FrustWash";
import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustPricing() {
  const { fraction, keep } = frust;

  return (
    <Container id="pricing" className="flex flex-col gap-space-8 pb-space-16">
      <div className="relative overflow-hidden rounded-panel bg-[#fff3e7] p-space-6 md:p-space-8 lg:p-14">
        <FrustWash />
        <div className="relative grid items-center gap-space-8 rounded-panel bg-white p-space-6 md:p-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-start gap-space-6">
            <div className="flex flex-col gap-space-4">
              <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.08] text-foreground">
                {fraction.title}
              </h2>
              <p className="font-sans text-[18px] leading-[1.48] text-muted-foreground md:text-[20px]">
                {fraction.body}
              </p>
            </div>
            <FrustButton href={frust.demoHref} variant="dark">
              {frust.hero.demo}
            </FrustButton>
          </div>
          <div className="flex flex-col gap-space-6">
            {fraction.cards.map((card) => (
              <article
                key={card.value}
                className="flex flex-col gap-space-4 rounded-2xl border border-[#eaeeff] bg-white p-6"
              >
                <img src={card.icon} alt="" width={98} height={88} className="h-[88px] w-[98px]" />
                <p className="font-sans text-[16px] leading-[1.48] text-[#3a2236]">{card.kicker}</p>
                <p className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] text-[#e935ee]">
                  {card.value}
                </p>
                <p className="font-sans text-[16px] leading-[1.48] text-muted-foreground">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="grid items-center gap-10 rounded-panel bg-white p-space-6 md:p-8 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-10">
        <div className="flex flex-col items-start gap-space-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.08] text-foreground">
              {keep.title}
            </h2>
            <p className="font-sans text-[18px] leading-[1.48] text-muted-foreground md:text-[20px]">
              {keep.body}
            </p>
          </div>
          <div className="flex w-full flex-col gap-6 sm:flex-row sm:justify-between">
            <div>
              <p className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] text-[#e935ee]">
                {keep.keepPct}
              </p>
              <p className="mt-2 font-sans text-[18px] leading-[1.48] text-muted-foreground md:text-[20px]">
                {keep.keepLabel}
              </p>
            </div>
            <div>
              <p className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] text-[#410a43]">
                {keep.zero}
              </p>
              <p className="mt-2 font-sans text-[18px] leading-[1.48] text-muted-foreground md:text-[20px]">
                {keep.zeroLabel}
              </p>
            </div>
          </div>
          <FrustButton href={frust.demoHref} variant="dark">
            {frust.hero.demo}
          </FrustButton>
        </div>

        <div className="relative overflow-hidden rounded-panel bg-[#f6f8ff] p-8">
          <FrustWash />
          <div className="relative flex flex-col gap-12 rounded-2xl bg-white p-6">
            <p className="text-center font-sans text-[20px] leading-[1.48] text-muted-foreground">
              {keep.statementTitle}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4 border-b border-[#dce3ff] pb-4 font-sans text-[16px] leading-[1.48] text-muted-foreground">
                <span>{keep.unlocked}</span>
                <span className="font-semibold">{keep.unlockedValue}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[#dce3ff] pb-4 font-sans text-[16px] leading-[1.48] text-muted-foreground">
                <span>{keep.fee}</span>
                <span className="font-semibold">{keep.feeValue}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[16px] text-muted-foreground">{keep.keepLine}</span>
                <span className="font-display text-[32px] leading-none text-[#e935ee] md:text-[40px]">
                  {keep.keepValue}
                </span>
              </div>
              <div className="h-4 overflow-hidden rounded-pill bg-[#f9e6f9]">
                <div className="h-full w-4/5 rounded-pill bg-[#e935ee]" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 font-sans text-[16px] text-muted-foreground">
                <span className="inline-flex items-center gap-3">
                  <span className="size-2 rounded-full bg-[#e935ee]" />
                  {keep.keepLegend}
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="size-2 rounded-full bg-[#dce3ff]" />
                  {keep.feeLegend}
                </span>
              </div>
            </div>
            <p className="font-sans text-[12px] leading-[1.48] text-[#646b98]">{keep.note}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

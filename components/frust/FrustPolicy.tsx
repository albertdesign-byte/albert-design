import { FrustButton } from "@/components/frust/FrustButton";
import { FrustWash } from "@/components/frust/FrustWash";
import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustPolicy() {
  const { policy } = frust;

  return (
    <Container className="pb-space-16">
      <div className="grid items-center gap-10 rounded-panel bg-white p-space-6 md:p-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-10">
        <div className="relative min-h-[320px] overflow-hidden rounded-panel bg-[#fff3e7] p-8 lg:min-h-[562px]">
          <FrustWash />
          <pre className="relative overflow-x-auto rounded-2xl bg-white p-6 font-sans text-[14px] leading-[1.48] whitespace-pre text-foreground md:text-[16px] lg:absolute lg:inset-8 lg:top-1/2 lg:h-auto lg:-translate-y-1/2">
            {policy.snippet}
          </pre>
        </div>
        <div className="flex flex-col items-start gap-6">
          <p className="font-display text-[20px] leading-[1.48] text-foreground">{policy.kicker}</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.08] text-foreground">
            {policy.title}
          </h2>
          <p className="font-sans text-[18px] leading-[1.48] text-muted-foreground md:text-[20px]">
            {policy.body}
          </p>
          <FrustButton href={frust.demoHref} variant="dark">
            {frust.hero.demo}
          </FrustButton>
        </div>
      </div>
    </Container>
  );
}

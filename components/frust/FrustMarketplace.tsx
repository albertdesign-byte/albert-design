import { FrustButton } from "@/components/frust/FrustButton";
import { FrustWash } from "@/components/frust/FrustWash";
import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustMarketplace() {
  const { marketplace } = frust;

  return (
    <Container id="marketplace" className="pb-space-16">
      <div className="grid items-center gap-10 rounded-panel bg-white p-space-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-10">
        <div className="flex flex-col items-start gap-6">
          <p className="font-display text-[20px] leading-[1.48] text-foreground">
            {marketplace.kicker}
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.08] text-foreground">
            {marketplace.title}
          </h2>
          <p className="font-sans text-[18px] leading-[1.48] text-muted-foreground md:text-[20px]">
            {marketplace.body}
          </p>
          <FrustButton href={frust.marketplaceHref} variant="dark">
            {marketplace.cta}
          </FrustButton>
        </div>

        <div className="relative flex flex-col gap-3 overflow-hidden rounded-panel bg-[#f6f8ff] p-8">
          <FrustWash />
          <div className="relative flex justify-center rounded-2xl bg-white p-6">
            <img
              src="/images/frust/aws-marketplace.png"
              alt="AWS Marketplace"
              width={238}
              height={67}
              className="h-auto w-[238px]"
            />
          </div>
          {marketplace.points.map((point) => (
            <article
              key={point.title}
              className="relative flex gap-3 rounded-2xl bg-white p-6"
            >
              <img
                src={point.icon}
                alt=""
                width={88}
                height={88}
                className="size-[72px] shrink-0 md:size-[88px]"
              />
              <div className="flex min-w-0 flex-col justify-center gap-2">
                <p className="font-sans text-[16px] font-semibold text-foreground">{point.title}</p>
                <p className="font-sans text-[16px] leading-[1.48] text-muted-foreground">
                  {point.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}

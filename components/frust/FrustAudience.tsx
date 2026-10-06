import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustAudience() {
  return (
    <Container id="products" className="flex flex-col gap-space-8 py-space-16 lg:py-[72px]">
      <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] text-foreground">
        {frust.audience.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {frust.audience.cards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col rounded-2xl border border-[#f1f1f1] bg-white p-6"
          >
            <img src={card.icon} alt="" width={98} height={88} className="h-[88px] w-[98px]" />
            <h3 className="mt-4 font-display text-[clamp(1.5rem,3vw,2rem)] leading-[1.08] text-foreground">
              {card.title}
            </h3>
            <p className="mt-4 flex-1 font-sans text-[16px] leading-[1.48] text-muted-foreground">
              {card.body}
            </p>
            <p className="mt-4 font-display text-[20px] leading-[1.48] text-foreground">
              {card.note}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}

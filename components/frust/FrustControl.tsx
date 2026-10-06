import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustControl() {
  return (
    <Container className="grid items-start gap-8 py-space-16 lg:grid-cols-[minmax(0,456px)_minmax(0,1fr)] lg:gap-6 lg:py-[72px]">
      <div className="flex flex-col gap-8 lg:sticky lg:top-8">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] text-foreground">
          {frust.control.title}
        </h2>
        <p className="font-sans text-[18px] leading-[1.48] text-muted-foreground md:text-[20px]">
          {frust.control.body}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {frust.control.cards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col gap-4 rounded-2xl border border-[#f1f1f1] bg-white p-6"
          >
            <img src={card.icon} alt="" width={98} height={88} className="h-[88px] w-[98px]" />
            <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-[1.08] text-foreground">
              {card.title}
            </h3>
            <p className="font-sans text-[16px] leading-[1.48] text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}

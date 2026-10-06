import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustStats() {
  return (
    <Container className="grid grid-cols-2 gap-space-4 pb-space-8 lg:grid-cols-4 lg:gap-6">
      {frust.stats.map((stat) => (
        <article
          key={stat.value}
          className="flex flex-col items-center rounded-2xl border border-[#f1f1f1] bg-white px-4 py-6 text-center"
        >
          <p className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-none text-foreground">
            {stat.value}
          </p>
          <p className="mt-2 font-sans text-[16px] leading-tight text-foreground md:text-[20px]">
            {stat.label}
          </p>
        </article>
      ))}
    </Container>
  );
}

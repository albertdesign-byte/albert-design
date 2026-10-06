import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustSteps() {
  return (
    <Container className="flex flex-col gap-space-8 py-space-16 lg:py-[72px]">
      <h2 className="max-w-[18ch] font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08] text-foreground">
        {frust.steps.title}
      </h2>
      <div className="grid gap-space-6 md:grid-cols-3">
        {frust.steps.items.map((step) => (
          <article
            key={step.n}
            className="flex flex-col gap-space-4 rounded-2xl border border-[#f1f1f1] bg-white p-6"
          >
            <div className="relative size-9">
              <img
                src="/images/frust/step-badge.svg"
                alt=""
                width={38}
                height={36}
                className="size-full"
              />
              <span className="absolute inset-0 flex items-center justify-center font-sans text-[20px] font-semibold text-foreground">
                {step.n}
              </span>
            </div>
            <img src={step.icon} alt="" width={48} height={48} className="size-12" />
            <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-[1.08] text-foreground">
              {step.title}
            </h3>
            <p className="font-sans text-[16px] leading-[1.48] text-muted-foreground">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}

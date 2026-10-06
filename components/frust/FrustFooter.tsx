import { FrustWash } from "@/components/frust/FrustWash";
import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";

export function FrustFooter() {
  return (
    <footer className="relative overflow-hidden rounded-panel bg-[#ffbbff]">
      <FrustWash />
      <Container className="relative flex flex-col gap-space-8 py-6 md:flex-row md:items-end md:justify-between md:py-8">
        <img
          src="/images/frust/logo-footer.svg"
          alt={frust.name}
          width={72}
          height={32}
          className="h-8 w-[72px]"
        />
        <address className="font-sans text-[16px] leading-8 font-medium text-foreground not-italic">
          <a href={`mailto:${frust.footer.email}`} className="hover:underline">
            {frust.footer.email}
          </a>
          <br />
          {frust.footer.chile}
          <br />
          {frust.footer.us}
        </address>
      </Container>
    </footer>
  );
}

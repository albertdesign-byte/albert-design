import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { portfolioBands } from "@/content/projects";

function findProject(slug: string) {
  return portfolioBands.find((band) => band.slug === slug);
}

export async function generateStaticParams() {
  return portfolioBands.map((band) => ({ slug: band.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  return { title: project ? project.name : "Case study" };
}

/**
 * Placeholder case study page — keeps Portfolio links from 404ing while
 * the full case study templates are built (see docs/review-v1.md #2).
 */
export default async function WorkPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) notFound();

  return (
    <SiteShell>
      <Section className="flex min-h-[min(100svh,40rem)] flex-col">
        <SiteHeader />

        <Container className="flex flex-1 flex-col items-start justify-center gap-space-4 py-space-24">
          <p className="font-chrome text-[12px] text-muted-foreground">
            Case study
          </p>
          <h1 className="font-display text-section text-foreground">
            {project.name}
          </h1>
          <p className="max-w-[40ch] font-sans text-[1rem] leading-[1.6] text-muted-foreground">
            Estamos preparando el detalle de este proyecto. Vuelve pronto.
          </p>
          <Link
            href="/"
            className="font-sans text-[1rem] text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
          >
            Volver al inicio
          </Link>
        </Container>
      </Section>
    </SiteShell>
  );
}

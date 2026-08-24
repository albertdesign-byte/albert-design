import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { portfolioBands } from "@/content/projects";

function findProject(slug: string) {
  return portfolioBands.find((band) => band.slug === slug);
}

/**
 * Turns an arbitrary slug (e.g. a "next project" teaser link that doesn't
 * have a portfolioBands entry yet, like /work/lapzo) into a display name,
 * so this page never has to notFound() a project we just haven't built out.
 */
function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  return portfolioBands.map((band) => ({ slug: band.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  return { title: project?.name ?? humanizeSlug(slug) };
}

/**
 * Placeholder case study page — keeps Portfolio links from 404ing while
 * the full case study templates are built (see docs/review-v1.md #2).
 * Unknown slugs (not yet in content/projects.ts) still render this same
 * "coming soon" placeholder instead of a hard 404, e.g. the "Lapzo" next
 * project teaser on the Gokei page (see components/sections/NextProjectLink).
 */
export default async function WorkPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = findProject(slug);
  const name = project?.name ?? humanizeSlug(slug);

  return (
    <SiteShell>
      <Section className="flex min-h-[min(100svh,40rem)] flex-col">
        <SiteHeader />

        <Container className="flex flex-1 flex-col items-start justify-center gap-space-4 py-space-24">
          <p className="font-chrome text-[12px] text-muted-foreground">
            Case study
          </p>
          <h1 className="font-display text-section text-foreground">
            {name}
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

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  CONTACT_EMAIL,
  privacyPolicy,
  type PrivacyBlock,
} from "@/content/privacy";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.intro,
};

function MailLink({ className }: { className?: string }) {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className={
        className ??
        "underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
      }
    >
      {CONTACT_EMAIL}
    </a>
  );
}

function withEmailLinks(text: string): ReactNode {
  if (!text.includes(CONTACT_EMAIL)) {
    return text;
  }

  const parts = text.split(CONTACT_EMAIL);

  return parts.flatMap((part, index) =>
    index < parts.length - 1
      ? [part, <MailLink key={`${CONTACT_EMAIL}-${index}`} />]
      : [part],
  );
}

function PrivacyBlocks({ blocks }: { blocks: readonly PrivacyBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index} className="text-pretty">
              {withEmailLinks(block.text)}
            </p>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-1 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "labeled") {
          return (
            <dl key={index} className="space-y-3">
              {block.items.map((item) => (
                <div key={item.label}>
                  <dt className="inline font-semibold">{item.label}: </dt>
                  <dd className="inline">{item.text}</dd>
                </div>
              ))}
            </dl>
          );
        }

        return (
          <p key={index} className="whitespace-pre-line">
            {block.items.map((line, lineIndex) => (
              <span key={line}>
                {lineIndex > 0 ? <br /> : null}
                {line === CONTACT_EMAIL || line.endsWith(CONTACT_EMAIL)
                  ? withEmailLinks(line)
                  : line}
              </span>
            ))}
          </p>
        );
      })}
    </>
  );
}

export default function PrivacyPage() {
  return (
    <SiteShell>
      <SiteHeader />

      <article className="mx-auto w-full max-w-[42rem] px-space-6 pt-space-8 pb-space-16 text-left font-sans text-body text-foreground md:px-space-8 md:pt-space-12 md:pb-space-24 lg:px-space-12">
        <header className="space-y-3">
          <h1 className="font-sans text-[1.75rem] font-semibold leading-tight tracking-tight md:text-[2rem]">
            {privacyPolicy.title}
          </h1>
          <p className="text-muted-foreground">
            <time dateTime={privacyPolicy.lastUpdatedIso}>
              {privacyPolicy.lastUpdatedLabel}
            </time>
          </p>
        </header>

        <p className="mt-8 text-pretty">{privacyPolicy.intro}</p>

        <div className="mt-12 flex flex-col gap-10 md:gap-12">
          {privacyPolicy.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-sans text-[1.125rem] font-semibold leading-snug md:text-[1.25rem]">
                {section.heading}
              </h2>
              <PrivacyBlocks blocks={section.blocks} />
            </section>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}

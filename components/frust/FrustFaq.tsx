"use client";

import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";
import { cn } from "@/lib/cn";

export function FrustFaq() {
  const [open, setOpen] = useState(0);

  return (
    <Container id="faq" className="flex flex-col items-center gap-space-8 pb-space-16">
      <div className="max-w-[456px] text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] text-foreground">
          {frust.faq.title}
        </h2>
        <p className="mt-2 font-sans text-[18px] leading-[1.48] text-muted-foreground md:text-[20px]">
          {frust.faq.body}
        </p>
      </div>
      <div className="flex w-full flex-col gap-4">
        {frust.faq.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q} className="overflow-hidden rounded-2xl bg-white">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left"
              >
                <span className="font-sans text-[16px] font-medium text-muted-foreground md:text-[18px]">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fafaf9] font-display text-[28px] leading-none text-foreground",
                    isOpen && "bg-[#ffbbff]",
                  )}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <p className="px-4 pb-5 font-sans text-[16px] leading-[1.48] text-muted-foreground">
                  {item.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { FrustButton } from "@/components/frust/FrustButton";
import { Container } from "@/components/layout/Container";
import { frust } from "@/content/frust";
import { cn } from "@/lib/cn";

export function FrustHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="relative">
      <Container className="flex h-20 items-center justify-between gap-space-4">
        <Link href="/frust" aria-label={frust.name} className="relative z-10 shrink-0">
          <img
            src="/images/frust/logo.svg"
            alt={frust.name}
            width={72}
            height={32}
            className="h-8 w-[72px]"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
          aria-label="Frust"
        >
          {frust.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 rounded-pill px-3 py-1 font-sans text-[14px] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
            >
              {item.label}
              {"hasMenu" in item && item.hasMenu ? (
                <img
                  src="/images/frust/chevron.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-space-4 lg:flex">
          <span className="font-sans text-[14px] text-[#4d4d4d]">{frust.language}</span>
          <FrustButton href={frust.loginHref}>Log In</FrustButton>
          <FrustButton href={frust.estimateHref} variant="pink">
            {frust.hero.estimate}
          </FrustButton>
        </div>

        <button
          type="button"
          className="relative inline-flex size-11 items-center justify-center rounded-[8px] border border-[#f1f1f1] bg-white lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={cn(
                "block h-px w-4 bg-foreground transition",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span className={cn("block h-px w-4 bg-foreground transition", open && "opacity-0")} />
            <span
              className={cn(
                "block h-px w-4 bg-foreground transition",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[#f1f1f1] bg-white px-space-6 py-space-6 lg:hidden"
        >
          <nav className="flex flex-col gap-space-2" aria-label="Frust">
            {frust.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 font-sans text-[16px] text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-space-6 flex flex-col gap-space-3">
            <FrustButton href={frust.loginHref} className="w-full">
              Log In
            </FrustButton>
            <FrustButton href={frust.estimateHref} variant="pink" className="w-full">
              {frust.hero.estimate}
            </FrustButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}

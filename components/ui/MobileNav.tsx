"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BrandMark } from "@/components/brand/BrandMark";
import { ServiceIcon } from "@/components/ui/ServiceIcons";
import { navCtas, navItems, servicesMenu } from "@/content/navigation";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  const pathOnly = href.split("#")[0] || "/";
  if (pathOnly === "/") return false;
  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}

function CtaButton({
  href,
  label,
  icon,
  variant,
  className,
}: {
  href: string;
  label: string;
  icon: "calendar" | "chat";
  variant: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex h-12 w-full items-center justify-center gap-2 rounded-pill px-6 font-sans text-[16px] leading-6",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2",
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-[#f0f0f0] text-[#020507]",
        className,
      )}
    >
      {label}
      <span className="relative size-6 shrink-0 overflow-clip">
        <img
          src={icon === "calendar" ? "/images/nav/calendar.svg" : "/images/nav/chat.svg"}
          alt=""
          width={24}
          height={24}
          className="size-full"
        />
      </span>
    </Link>
  );
}

/**
 * Mobile + tablet chrome (Figma 114:1947 Menu-1/2/3).
 * Closed: glass pill (logo + hamburger) + sticky WhatsApp CTA.
 * Open: full-sheet modal over a blurred page, with Servicios inner scroll.
 */
export function MobileNav() {
  const pathname = usePathname();
  const dialogId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);

  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  const primaryCta = navCtas.find((cta) => cta.variant === "primary") ?? navCtas[1];
  const secondaryCta = navCtas.find((cta) => cta.variant === "secondary") ?? navCtas[0];
  const cotizameHref = navItems.find((item) => item.label === "Cotizame")?.href;
  const onCotizame = cotizameHref ? isActive(pathname, cotizameHref) : false;

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-6 pt-4">
        <div className="pointer-events-auto flex h-[62px] items-center justify-between rounded-pill bg-white/50 px-4 py-3 backdrop-blur-[6px]">
          <BrandMark />
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls={dialogId}
            className="relative size-6 shrink-0 overflow-clip focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
            onClick={() => setOpen(true)}
          >
            <img src="/images/nav/menu.svg" alt="" width={24} height={24} className="size-full" />
          </button>
        </div>
      </div>

      {!open && !onCotizame ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          <div className="pointer-events-auto">
            <CtaButton
              href={primaryCta.href}
              label={primaryCta.label}
              icon={primaryCta.icon}
              variant="primary"
            />
          </div>
        </div>
      ) : null}

      {open
        ? createPortal(
            <div className="lg:hidden">
              <button
                type="button"
                aria-label="Cerrar menú"
                className="fixed inset-0 z-[60] bg-[rgba(217,217,217,0.35)] backdrop-blur-[10px]"
                onClick={closeMenu}
              />
              <div
                id={dialogId}
                role="dialog"
                aria-modal="true"
                aria-label="Menú"
                className="fixed inset-2 z-[70] flex flex-col overflow-hidden rounded-[16px] bg-white"
              >
                <div className="flex shrink-0 items-start justify-between px-4 pt-4">
                  <BrandMark />
                  <button
                    ref={closeRef}
                    type="button"
                    aria-label="Cerrar menú"
                    className="relative size-6 shrink-0 overflow-clip focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
                    onClick={closeMenu}
                  >
                    <img
                      src="/images/nav/close.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="size-full"
                    />
                  </button>
                </div>

                <div className="flex min-h-0 flex-1 flex-col gap-6 px-4 pt-10 pb-4">
                  <nav aria-label="Primary" className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto">
                    {navItems.map((item, index) => {
                      const active = isActive(pathname, item.href);

                      return (
                        <div key={item.href} className="flex flex-col gap-4">
                          {index === 1 ? (
                            <div className="flex flex-col">
                              <button
                                type="button"
                                aria-expanded={servicesOpen}
                                className="flex h-6 w-full items-center justify-between font-sans text-[16px] leading-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
                                onClick={() => setServicesOpen((isOpen) => !isOpen)}
                              >
                                {servicesMenu.label}
                                <span className="relative size-5 shrink-0 overflow-clip">
                                  <img
                                    src="/images/nav/chevron.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className={cn(
                                      "size-full transition-transform duration-200 ease-out motion-reduce:transition-none",
                                      servicesOpen && "rotate-180",
                                    )}
                                  />
                                </span>
                              </button>
                              {servicesOpen ? (
                                <div
                                  className={cn(
                                    "mt-4 max-h-[min(55dvh,28rem)] overflow-y-auto overscroll-contain",
                                    "[scrollbar-width:thin] [scrollbar-color:#d9d9d9_transparent]",
                                    "[&::-webkit-scrollbar]:w-1.5",
                                    "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d9d9d9]",
                                  )}
                                >
                                  {servicesMenu.columns.map((column) => (
                                    <div key={column.heading}>
                                      <p className="px-4 py-3 font-sans text-[14px] leading-[1.4] text-[#848c98] uppercase">
                                        {column.heading}
                                      </p>
                                      {column.items.map((service) => (
                                        <Link
                                          key={service.title}
                                          href={service.href}
                                          className="flex flex-col gap-2 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
                                          onClick={closeMenu}
                                        >
                                          <ServiceIcon name={service.icon} />
                                          <span className="flex min-w-0 flex-col gap-1">
                                            <span className="flex flex-wrap items-center gap-1">
                                              <span className="font-sans text-[14px] font-medium leading-[1.4] text-foreground">
                                                {service.title}
                                              </span>
                                              {service.popular ? (
                                                <span className="inline-flex items-center rounded-[2px] bg-foreground px-1 py-0.5 font-sans text-[8px] leading-3 text-white">
                                                  Popular
                                                </span>
                                              ) : null}
                                            </span>
                                            <span className="font-sans text-[14px] leading-[1.4] text-[#9a9a9a]">
                                              {service.description}
                                            </span>
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          ) : null}
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            onClick={closeMenu}
                            className={cn(
                              "inline-flex h-6 w-fit items-center font-sans text-[16px] leading-3",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25",
                              active
                                ? "rounded-pill bg-primary px-4 text-primary-foreground"
                                : "text-foreground",
                            )}
                          >
                            {item.label}
                          </Link>
                        </div>
                      );
                    })}
                  </nav>

                  <div className="flex shrink-0 flex-col gap-4">
                    <CtaButton
                      href={secondaryCta.href}
                      label={secondaryCta.label}
                      icon={secondaryCta.icon}
                      variant="secondary"
                    />
                    <CtaButton
                      href={primaryCta.href}
                      label={primaryCta.label}
                      icon={primaryCta.icon}
                      variant="primary"
                    />
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

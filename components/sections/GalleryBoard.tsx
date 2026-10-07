"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import { galleryIntro, galleryItems, type GalleryItem } from "@/content/gallery";
import { cn } from "@/lib/cn";

function BackArrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="size-5 shrink-0"
    >
      <path
        d="M12.5 3.75 6.25 10l6.25 6.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  return (
    <figure className={cn("flex min-w-0 flex-col gap-0.5", item.span)}>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onOpen(item);
        }}
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[12px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-label={`Ver ${item.title} a tamaño completo`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={item.id === "health-deal" || item.id === "zara-app"}
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </button>
      <figcaption className="flex h-6 min-w-0 items-baseline gap-[7px] overflow-hidden">
        <span className="shrink-0 font-sans text-[16px] leading-6 text-[#f8f4f2]">
          {item.title}
        </span>
        <span className="truncate font-sans text-[12px] leading-[18px] text-[#9fa0a3]">
          {item.tags}
        </span>
      </figcaption>
    </figure>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  const titleId = useId();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const arm = window.setTimeout(() => setArmed(true), 0);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(arm);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/90 p-3 md:p-8"
      onClick={armed ? onClose : undefined}
    >
      <h2 id={titleId} className="sr-only">
        {item.title}
      </h2>
      <img
        src={item.src}
        alt={item.alt}
        width={item.width * 2}
        height={item.height * 2}
        className="max-h-[100dvh] max-w-full object-contain"
      />
    </div>,
    document.body,
  );
}

export function GalleryBoard() {
  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);
  const close = useCallback(() => setOpenItem(null), []);

  return (
    <>
      <div className="grid grid-cols-1 items-start gap-x-3 gap-y-8 p-3 md:p-4 lg:grid-cols-12 lg:gap-x-3 lg:gap-y-12 lg:p-2">
        <div className="flex min-h-[280px] flex-col justify-between gap-10 px-1 py-2 lg:col-span-3 lg:aspect-[347/439] lg:min-h-0 lg:px-3 lg:py-4">
          <Link
            href={galleryIntro.backHref}
            className="inline-flex h-12 w-fit items-center gap-1 rounded-full bg-[#efe8e4] px-4 font-sans text-[16px] leading-6 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <BackArrow />
            {galleryIntro.backLabel}
          </Link>

          <img
            src="/images/gallery/albeeert.svg"
            alt="albeeert"
            width={266}
            height={45}
            className="h-auto w-[266px] max-w-full"
          />

          <p className="max-w-[32ch] font-sans text-[14px] leading-[1.48] text-[#d0d0d1]">
            {galleryIntro.tagline}
          </p>
        </div>

        {galleryItems.map((item) => (
          <GalleryCard key={item.id} item={item} onOpen={setOpenItem} />
        ))}
      </div>

      {openItem ? <Lightbox item={openItem} onClose={close} /> : null}
    </>
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type GlassSelectOption = {
  value: string;
  label: string;
};

type GlassSelectProps = {
  id: string;
  name: string;
  label: string;
  options: readonly GlassSelectOption[];
  className?: string;
  defaultValue?: string;
};

/**
 * Optional floating-label select. Native <select> cannot style its menu,
 * so the list is a custom listbox using the same liquid-glass language as
 * the Servicios mega menu (white/80, blur 18, radius 18).
 */
export function GlassSelect({
  id,
  name,
  label,
  options,
  className,
  defaultValue = "",
}: GlassSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [activeIndex, setActiveIndex] = useState(0);

  const selected = options.find((option) => option.value === value);
  const floated = open || Boolean(selected);

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeIfOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeIfOutside);
    return () => document.removeEventListener("pointerdown", closeIfOutside);
  }, [open]);

  const selectOption = (option: GlassSelectOption) => {
    setValue(option.value);
    setOpen(false);
  };

  const moveActive = (next: number) => {
    const last = options.length - 1;
    const index = next < 0 ? last : next > last ? 0 : next;
    setActiveIndex(index);
  };

  return (
    <div ref={rootRef} className={cn("relative w-full", open ? "z-30" : "z-20", className)}>
      <input type="hidden" name={name} value={value} />

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={selected ? `${label}: ${selected.label}` : label}
        className={cn(
          "flex h-14 w-full items-center rounded-[12px] border bg-white px-4 pr-11 text-left font-sans text-[16px] text-foreground transition-colors duration-200 ease-out",
          open ? "border-foreground/20" : "border-transparent",
          "focus-visible:border-foreground/20 focus-visible:outline-none",
        )}
        onClick={() => {
          if (!open) {
            const current = options.findIndex((option) => option.value === value);
            setActiveIndex(current >= 0 ? current : 0);
          }
          setOpen((isOpen) => !isOpen);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
            return;
          }

          if (event.key === "ArrowDown") {
            event.preventDefault();
            if (!open) {
              setActiveIndex(
                Math.max(
                  0,
                  options.findIndex((option) => option.value === value),
                ),
              );
              setOpen(true);
            } else {
              moveActive(activeIndex + 1);
            }
            return;
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            if (!open) {
              setOpen(true);
            } else {
              moveActive(activeIndex - 1);
            }
            return;
          }

          if ((event.key === "Enter" || event.key === " ") && open) {
            event.preventDefault();
            const option = options[activeIndex];
            if (option) {
              selectOption(option);
            }
          }
        }}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-4 font-sans text-muted-foreground transition-all duration-200 ease-out",
            floated
              ? "top-3 text-[11px]"
              : "top-1/2 -translate-y-1/2 text-[16px]",
          )}
        >
          {label}
        </span>
        <span aria-hidden className={cn("pt-4", !selected && "invisible")}>
          {selected?.label ?? ""}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className={cn(
            "absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-transform duration-200 ease-out motion-reduce:transition-none",
            open && "rotate-180",
          )}
        >
          <path
            d="M5 7.5 10 12.5 15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className={cn(
            "absolute inset-x-0 top-[calc(100%+8px)] z-30 max-h-60 overflow-y-auto p-1.5",
            "rounded-[18px] bg-white/80",
            "shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_1px_rgba(255,255,255,0.12),0_8px_40px_rgba(19,20,23,0.08)]",
            "ring-1 ring-white/50 backdrop-blur-[18px] backdrop-saturate-150",
          )}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === activeIndex;

            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  id={`${listId}-${option.value}`}
                  className={cn(
                    "w-full rounded-[12px] px-3 py-2.5 text-left font-sans text-[16px] leading-[1.3] text-foreground transition-colors",
                    "hover:bg-white/70 focus-visible:bg-white/70 focus-visible:outline-none",
                    (isSelected || isActive) && "bg-white/70",
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectOption(option)}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

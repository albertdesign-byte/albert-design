"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";

import {
  DEFAULT_COUNTRY_ISO,
  filterCountries,
  findCountryByQuery,
  getCountry,
  type Country,
} from "@/content/countries";
import { cn } from "@/lib/cn";

type PhonePrefixFieldProps = {
  id: string;
  name: string;
  countryName: string;
  label: string;
  prefixLabel: string;
  className?: string;
  required?: boolean;
  defaultValue?: string;
  defaultCountry?: string;
};

type MenuBox = {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
};

const glassMenuClassName = cn(
  "rounded-[18px] bg-white/80 p-1.5",
  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_1px_rgba(255,255,255,0.12),0_8px_40px_rgba(19,20,23,0.08)]",
  "ring-1 ring-white/50 backdrop-blur-[18px] backdrop-saturate-150",
);

/**
 * Phone field with a searchable country prefix. The closed control shows
 * the flag; the open menu is where the country name is typed (“Perú”)
 * so the number placeholder becomes that country's calling code (“+51”).
 */
export function PhonePrefixField({
  id,
  name,
  countryName,
  label,
  prefixLabel,
  className,
  required,
  defaultValue,
  defaultCountry = DEFAULT_COUNTRY_ISO,
}: PhonePrefixFieldProps) {
  const listId = useId();
  const searchId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  const [country, setCountry] = useState(() => getCountry(defaultCountry));
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [focused, setFocused] = useState(false);
  const [menuBox, setMenuBox] = useState<MenuBox | null>(null);

  const matches = filterCountries(query);

  useLayoutEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }

    const place = () => {
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }

      const gutter = 16;
      const width = Math.min(Math.max(rect.width, 280), window.innerWidth - gutter * 2);
      const left = Math.min(
        Math.max(gutter, rect.left),
        window.innerWidth - width - gutter,
      );
      const below = window.innerHeight - rect.bottom - gutter;
      const above = rect.top - gutter;
      const openUp = below < 220 && above > below;
      const maxHeight = Math.min(320, Math.max(160, openUp ? above - 8 : below - 8));
      const top = openUp ? rect.top - 8 - maxHeight : rect.bottom + 8;

      setMenuBox((prev) => {
        if (
          prev &&
          Math.abs(prev.top - top) < 0.5 &&
          Math.abs(prev.left - left) < 0.5 &&
          Math.abs(prev.width - width) < 0.5 &&
          Math.abs(prev.maxHeight - maxHeight) < 0.5
        ) {
          return prev;
        }
        return { top, left, width, maxHeight };
      });
    };

    const onScroll = (event: Event) => {
      if (menuRef.current?.contains(event.target as Node)) {
        return;
      }
      place();
    };

    place();
    activeRef.current?.scrollIntoView({ block: "nearest" });
    window.addEventListener("resize", place);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [activeIndex, open, query]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeIfOutside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (rootRef.current?.contains(target) || menuRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
      setQuery("");
    };

    document.addEventListener("pointerdown", closeIfOutside);
    return () => document.removeEventListener("pointerdown", closeIfOutside);
  }, [open]);

  useEffect(() => {
    if (open) {
      searchRef.current?.focus();
    }
  }, [open]);

  const selectCountry = (next: Country) => {
    setCountry(next);
    setQuery("");
    setOpen(false);
  };

  const applyQuery = (value: string) => {
    setQuery(value);
    const exact = findCountryByQuery(value);
    const nextMatches = filterCountries(value);
    if (exact) {
      setCountry(exact);
      setActiveIndex(Math.max(0, nextMatches.findIndex((item) => item.iso === exact.iso)));
      return;
    }
    setActiveIndex(0);
  };

  const openMenu = () => {
    const index = matches.findIndex((item) => item.iso === country.iso);
    setActiveIndex(index >= 0 ? index : 0);
    setOpen(true);
  };

  const moveActive = (next: number) => {
    if (matches.length === 0) {
      return;
    }
    const last = matches.length - 1;
    setActiveIndex(next < 0 ? last : next > last ? 0 : next);
  };

  const menuStyle: CSSProperties | undefined = menuBox
    ? {
        top: menuBox.top,
        left: menuBox.left,
        width: menuBox.width,
        maxHeight: menuBox.maxHeight,
      }
    : undefined;

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      <input type="hidden" name={countryName} value={country.iso} />

      <div
        className={cn(
          "flex h-14 w-full overflow-hidden rounded-[12px] border bg-white transition-colors duration-200 ease-out",
          focused || open ? "border-foreground/20" : "border-transparent",
        )}
      >
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-label={`${prefixLabel}: ${country.name} ${country.dial}`}
          className="relative flex w-[4.75rem] shrink-0 items-center justify-center gap-1 pt-4 pr-1 pl-2 focus-visible:outline-none"
          onClick={() => {
            if (open) {
              setOpen(false);
              setQuery("");
            } else {
              openMenu();
            }
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute top-2 left-2 font-sans text-[11px] text-muted-foreground"
          >
            {prefixLabel}
          </span>
          <span aria-hidden className="text-[18px] leading-none">
            {country.flag}
          </span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
            className={cn(
              "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ease-out motion-reduce:transition-none",
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

        <span aria-hidden className="my-3 w-px shrink-0 bg-foreground/10" />

        <div className="relative min-w-0 flex-1">
          <input
            id={id}
            type="tel"
            name={name}
            placeholder={country.dial}
            required={required}
            defaultValue={defaultValue}
            autoComplete="tel-national"
            className="peer h-full w-full bg-transparent px-3 pt-5 pb-1.5 font-sans text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <label
            htmlFor={id}
            className="pointer-events-none absolute top-2 left-3 font-sans text-[11px] text-muted-foreground"
          >
            {label}
          </label>
        </div>
      </div>

      {open
        ? createPortal(
            <div
              ref={menuRef}
              style={{
                ...menuStyle,
                visibility: menuBox ? "visible" : "hidden",
              }}
              className={cn("fixed z-[60] flex flex-col", glassMenuClassName)}
            >
              <label htmlFor={searchId} className="sr-only">
                Buscar país
              </label>
              <input
                ref={searchRef}
                id={searchId}
                type="text"
                value={query}
                placeholder="Buscar país"
                autoComplete="off"
                aria-autocomplete="list"
                aria-controls={listId}
                aria-activedescendant={
                  matches[activeIndex] ? `${listId}-${matches[activeIndex].iso}` : undefined
                }
                className="mb-1 h-10 w-full rounded-[12px] bg-white/70 px-3 font-sans text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none"
                onChange={(event) => applyQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    event.preventDefault();
                    setOpen(false);
                    setQuery("");
                    return;
                  }
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    moveActive(activeIndex + 1);
                    return;
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    moveActive(activeIndex - 1);
                    return;
                  }
                  if (event.key === "Enter") {
                    event.preventDefault();
                    const option = matches[activeIndex];
                    if (option) {
                      selectCountry(option);
                    }
                  }
                }}
              />
              <ul
                id={listId}
                role="listbox"
                aria-label={prefixLabel}
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
              >
                {matches.length === 0 ? (
                  <li className="px-3 py-2.5 font-sans text-[14px] text-muted-foreground">
                    Sin resultados
                  </li>
                ) : (
                  matches.map((option, index) => {
                    const isSelected = option.iso === country.iso;
                    const isActive = index === activeIndex;

                    return (
                      <li key={option.iso} role="presentation">
                        <button
                          ref={isActive ? activeRef : undefined}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          id={`${listId}-${option.iso}`}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-[12px] px-3 py-2 text-left font-sans text-[16px] leading-[1.3] text-foreground transition-colors",
                            "hover:bg-white/70 focus-visible:bg-white/70 focus-visible:outline-none",
                            (isSelected || isActive) && "bg-white/70",
                          )}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => selectCountry(option)}
                        >
                          <span aria-hidden className="w-6 text-center text-[18px] leading-none">
                            {option.flag}
                          </span>
                          <span className="min-w-0 flex-1 truncate">{option.name}</span>
                          <span className="shrink-0 text-muted-foreground">{option.dial}</span>
                        </button>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

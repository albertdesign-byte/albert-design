import type { Metadata } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  Manrope,
} from "next/font/google";

import { site } from "@/content/site";

import "./globals.css";

/* Display — Instrument Serif (docs/design-system.md) */
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-family",
  display: "swap",
});

/* UI / body — Instrument Sans */
const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-family",
  display: "swap",
});

/* Chrome fallback for Gilroy (no web license in repo) — Manrope, documented in T001 */
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-chrome-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "es_ES",
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}

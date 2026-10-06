export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Casos de estudio", href: "/work/gokei" },
  // Hidden for now — restore when the about section is ready.
  // { label: "Nosotros", href: "/#about" },
  { label: "Cotizame", href: "/contacto" },
] as const;

export type ServiceIconName =
  | "identidad"
  | "product"
  | "motion"
  | "web"
  | "social"
  | "framer"
  | "webflow"
  | "aimvp";

export type ServiceMenuItem = {
  title: string;
  description: string;
  icon: ServiceIconName;
  popular?: boolean;
  href: string;
};

export type ServiceMenuColumn = {
  heading: string;
  items: ServiceMenuItem[];
};

/** Contact form with the chosen Servicios item preselected. */
export function contactoServiceHref(icon: ServiceIconName) {
  return `/contacto?service=${icon}`;
}

/** Mega-menu under navbar "Servicios" (Figma 96:2632). */
export const servicesMenu = {
  label: "Servicios",
  columns: [
    {
      heading: "Diseño",
      items: [
        {
          title: "Identidad de marca",
          description: "Creamos marcas completas, hasta su lanzamiento",
          icon: "identidad",
          popular: true,
          href: contactoServiceHref("identidad"),
        },
        {
          title: "Product Design",
          description: "Autonomía y productos impecables.",
          icon: "product",
          popular: true,
          href: contactoServiceHref("product"),
        },
        {
          title: "Motion design",
          description: "Videos que realmente hacen click.",
          icon: "motion",
          href: contactoServiceHref("motion"),
        },
        {
          title: "Web design",
          description: "Generamos conversión en cada página.",
          icon: "web",
          popular: true,
          href: contactoServiceHref("web"),
        },
        {
          title: "Social media",
          description: "Diseños para redes, rápido y fácil.",
          icon: "social",
          href: contactoServiceHref("social"),
        },
      ],
    },
    {
      heading: "No-code",
      items: [
        {
          title: "Framer",
          description: "Creamos diseño premium bajo un costo accesible.",
          icon: "framer",
          popular: true,
          href: contactoServiceHref("framer"),
        },
        {
          title: "Webflow",
          description: "Escalamos tus sitios, con mayor complejidad.",
          icon: "webflow",
          href: contactoServiceHref("webflow"),
        },
      ],
    },
    {
      heading: "Desarrollo",
      items: [
        {
          title: "AI MVP",
          description: "Pasamos de una demo a un producto real.",
          icon: "aimvp",
          popular: true,
          href: contactoServiceHref("aimvp"),
        },
      ],
    },
  ] satisfies ServiceMenuColumn[],
} as const;

export type NavItem = (typeof navItems)[number];

/** Calendly booking — navbar “Agenda un meet” and any matching CTAs. */
export const calendlyUrl = "https://calendly.com/albertdesign/let-s-talk";

/** WhatsApp chat — navbar “Hablame ahora”. */
export const whatsappUrl = "https://wa.me/51977651369";

/** Right-side CTAs inside the glass pill (Figma 108:1371). */
export const navCtas = [
  {
    label: "Agenda un meet",
    href: calendlyUrl,
    icon: "calendar",
    variant: "secondary",
  },
  {
    label: "Hablame ahora",
    href: whatsappUrl,
    icon: "chat",
    variant: "primary",
  },
] as const;

export const social = {
  label: "Social:",
  links: [
    {
      label: "BE",
      href: "https://www.behance.net/",
      ariaLabel: "Behance",
    },
  ],
} as const;

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/#case-studies" },
  { label: "Nosotros", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
] as const;

export type NavItem = (typeof navItems)[number];

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

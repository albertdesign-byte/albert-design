export const navItems = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "About", href: "/#about" },
  { label: "Contacts", href: "/#contact" },
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

import { calendlyUrl, whatsappUrl } from "@/content/navigation";

export const pricingHero = {
  eyebrow: "Nuestros planes",
  headline: "Una suscripción para\ntodo lo que necesitas",
} as const;

export const pricingPlans = [
  {
    name: "Diseñador gráfico",
    description:
      "¿Necesitas soporte para tus diseños?\nDesde la edición de fotos, hasta banners, ads, impresiones, packaging y diseños para correos.",
    price: "$ 1,249 USD",
    period: "/mes",
    primary: { label: "Agendar una meet", href: calendlyUrl },
    features: [
      "Integración con Slack",
      "Servicios de diseño gráfico",
      "48 horas para el primer entregable",
      "Branners & ads design",
      "Social media creatives",
      "Email design",
      "Packaging & merch design",
      "Books & eBooks",
      "Brochures & flyers design",
    ],
  },
  {
    name: "All in one",
    description:
      "No te preocupes por nada, nos encargaremos de todo, desde el diseño, hasta la implementación en Webflow, Framer o vibecoding usando Cursor.",
    price: "$2,659 USD",
    period: "/mes",
    primary: { label: "Agendar una meet", href: calendlyUrl },
    features: [
      "Todo lo que contiene el plan de diseño gráfico",
      "UX/UI Design",
      "Landing page",
      "Website design",
      "Mobile app design",
      "Logo & brand identity",
      "Custom illustration",
      "Presentation design",
      "Motion design",
      "Nocode tools (Webflow, Framer, Cursor, Claude)",
    ],
  },
  {
    name: "Talento dedicado",
    description:
      "¿Contratar te causa molestias? No te preocupes, nos encargamos de conseguirte al talento y colocamos a un PM para que te ayude a organizarte, 100% seguro.",
    price: "$ **** USD",
    period: "/mes",
    primary: { label: "Agendar una meet", href: calendlyUrl },
    features: [
      "Un PM para tu proyecto",
      "Persona dedicada al proyecto",
      "Revisión de habilidades con profesionales",
      "1% pasa a entrevistas.",
    ],
  },
] as const;

export const pricingCompare = {
  heading: "¿Por qué suscribirte?",
  columns: [
    {
      kind: "brand" as const,
      items: [
        "Empezamos a trabajar en 24h.",
        "Cambia el talento cuando quieras.",
        "Pago mensual, sin créditos.",
        "PM dedicado.",
        "Cancela en cualquier momento.",
      ],
    },
    {
      kind: "plain" as const,
      title: "FREELANCE",
      items: [
        "Días o semanas para empezar.",
        "Difícil reemplazarlo.",
        "Por horas, scope o revisión.",
        "Nadie maneja las tareas.",
        "Depende de la persona.",
      ],
    },
    {
      kind: "plain" as const,
      title: "CONTRATO",
      items: [
        "Te toma más de 4 semanas.",
        "Despedirlo y contratar es lento.",
        "Salario más compensación.",
        "Necesitas un PM o tu mismo.",
        "Dependes del contrato.",
      ],
    },
    {
      kind: "plain" as const,
      title: "OTRAS PLATAFORMAS",
      items: [
        "+3 para empezar",
        "Toma más tiempo cambiar el talento.",
        "Con tienen créditos confusos.",
        "Un PM parcial.",
        "1 a 3 meses para cancelar.",
      ],
    },
  ],
} as const;

export const pricingFooter = {
  body: "Una suscripción que incluye todo y un compañero que resuelve tus problemas de contratación.",
  cta: {
    label: "Hablemos ahora",
    href: whatsappUrl,
  },
} as const;

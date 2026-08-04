# Arquitectura

Cómo organizar el proyecto antes de escribir UI.  
Constitución técnica → [engineering.md](./engineering.md).  
Componentes → [components.md](./components.md).  
Roadmap de construcción → [roadmap.md](./roadmap.md).

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Estilos | Tailwind CSS 4 + CSS variables |
| Lenguaje | TypeScript |
| Assets | `public/` + `next/image` |
| Lint | ESLint (`eslint-config-next`) |

Este proyecto usa una versión de Next.js con cambios respecto a tutoriales antiguos.  
**Antes de introducir APIs nuevas, consultar la documentación local del paquete `next` en `node_modules/next/dist/docs/`.**

### Decisiones de runtime

- Server Components por defecto
- `"use client"` solo para nav activa, hover complejos o forms
- Metadata (title, description, OG) definida por ruta en `app/`

---

## Estructura de carpetas (objetivo)

```text
albert-design/
├── docs/                   ← documentación (esta carpeta)
│   ├── vision.md
│   ├── design-principles.md
│   ├── design-system.md
│   ├── architecture.md
│   ├── engineering.md
│   ├── components.md
│   ├── sections.md
│   ├── animation.md
│   ├── content.md
│   └── roadmap.md
├── app/
│   ├── layout.tsx          ← fonts, metadata, shell
│   ├── page.tsx            ← orquesta secciones de la Home
│   ├── globals.css         ← tokens (color, space, radius, typography)
│   └── (rutas futuras)/    ← case studies, about, contact…
├── components/
│   ├── brand/              ← BrandMark, Logo
│   ├── layout/             ← SiteShell, SiteHeader, Container, SectionPanel, FooterCta
│   ├── sections/           ← HeroSection, CaseStudies, ClientsSection, RequestSection, LatestWorkSection
│   └── ui/                 ← NavPill, WorkList, Button, Rule…
├── content/                ← projects.ts, clients.ts, site.ts (copy tipado)
├── lib/                    ← cn(), constants
└── public/                 ← imágenes y logos optimizados
```

### Capas

```text
app/            → routing, layouts, metadata, composición de páginas
components/     → UI y secciones presentacionales
content/        → contenido estructurado (copy, proyectos, servicios)
lib/            → lógica compartida sin JSX (o mínima)
public/         → estáticos
docs/           → fuente de verdad de marca, sistema y proceso
```

---

## Reglas de ubicación de componentes

| Tipo | Dónde | Ejemplo |
|---|---|---|
| Primitivo visual reutilizable | `components/ui` | `Button`, `Rule`, `NavPill` |
| Estructura de página / chrome | `components/layout` | `SiteHeader`, `SiteShell`, `SectionPanel` |
| Bloque narrativo de marketing | `components/sections` | `HeroSection`, `ClientsSection` |
| Marca pura | `components/brand` | `BrandMark`, `Logo` |
| Lógica compartida sin UI | `lib` | `cn`, constants |
| Copy largo / listas de proyectos | `content` | `projects.ts`, `clients.ts`, `site.ts` |

### Composición

- Páginas en `app/` orquestan secciones; no implementan UI densa inline
- Secciones componen UI primitives; no reinventan botones ni tipografía base
- Preferir Server Components por defecto
- No crear un componente “por si acaso”. Extraer cuando haya reutilización real o claridad estructural

### Anatomía de un componente

```tsx
// 1. imports
// 2. types / props
// 3. component
// 4. subcomponentes privados del archivo (si hacen falta)
```

Props tipadas. Nombres de props claros (`title`, `eyebrow`, `ctaLabel`).  
Preferir `variant` sobre booleanas confusas (`isPrimary`).

---

## Convenciones de nombres

### Archivos y carpetas

| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes React | PascalCase | `SiteHeader.tsx` |
| Utilidades / helpers | camelCase | `cn.ts`, `formatDate.ts` |
| Rutas App Router | minúsculas, kebab si hace falta | `app/work/[slug]/page.tsx` |
| Tokens / CSS vars | kebab-case | `--color-accent` |
| Constantes | SCREAMING_SNAKE o camel según scope | `SITE_NAME`, `navItems` |

### Componentes

- Nombre = qué es, no cómo se ve: `PrimaryButton` mejor que `BluePill`
- Prefijos útiles:
  - `Site*` para chrome global (`SiteHeader`)
  - Nombre de sección para bloques (`HomeHero`, `ContactPanel`)
- Evitar nombres genéricos vacíos: `Section1`, `MyComponent`, `CardNew`

### CSS / Tailwind

- Preferir tokens semánticos sobre colores crudos en UI recurrente
- Utilidades de composición con helper `cn()` cuando se combinen clases
- No inventar BEM paralelo si Tailwind + tokens cubren el caso

### Git y ramas (cuando aplique)

- `feat/…`, `fix/…`, `chore/…`
- Commits en imperativo claro, enfocados en el porqué

### Idioma en código

- Identificadores en inglés (`HomeHero`, `getProjects`)
- Copy de producto en español (salvo marca o términos propios)
- Comentarios solo cuando aporten contexto no obvio; preferir código claro

---

## Datos y contenido

- Empezar con contenido tipado en archivos (`content/*.ts` o MDX más adelante si hace falta)
- No acoplar copy largo dentro de componentes de UI
- Detalle de copy → [content.md](./content.md)

---

## Estilos globales

- Tokens en `app/globals.css` (`:root` + `@theme` de Tailwind 4)
- Tema de marca definido una sola vez; componentes consumen tokens
- No hardcodear paletas paralelas en cada sección
- Escalas → [design-system.md](./design-system.md)

---

## Accesibilidad y SEO base

- Landmarks semánticos (`header`, `main`, `footer`, `nav`)
- Un `h1` por página
- Metadata completa
- Enlaces y botones distinguibles; no usar `div` clickeable sin rol

---

## Reglas de consistencia

- La carpeta `docs/` manda sobre improvisaciones locales
- Reutilizar `SectionPanel` en lugar de inventar un wrapper por sección
- Copy en `content/`, no hardcodeado en primitivos UI
- Identificadores de código en inglés; copy de producto en español
- Si el código diverge de esta documentación, actualizar uno de los dos — nunca dos verdades
- Decisiones puntuales de implementación viven en el código; decisiones de marca y sistema viven en `docs/`

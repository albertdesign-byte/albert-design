# Engineering

Constitución técnica del proyecto.  
Complementa la arquitectura de producto en [`architecture.md`](./architecture.md) y el sistema visual en [`design-system.md`](./design-system.md).

Antes de introducir APIs de Next.js, consultar la documentación local en `node_modules/next/dist/docs/`.

---

## React

### Server Components por defecto

- Todo componente es Server Component salvo que se demuestre lo contrario.
- Empujar datos, composición y markup estático al servidor siempre que sea posible.
- Las páginas y secciones de marketing deben nacer como Server Components.

### Client Components únicamente cuando sean necesarios

Marcar `"use client"` solo cuando el componente necesite de forma real:

- estado (`useState`, `useReducer`)
- efectos (`useEffect`)
- APIs del navegador (IntersectionObserver, `window`, etc.)
- handlers de eventos complejos que no puedan vivir en un hijo mínimo
- ciertos hooks de navegación/formulario del cliente

Patrón preferido: **isla cliente pequeña** dentro de un árbol servidor (p. ej. `NavPill` cliente dentro de `SiteHeader` servidor), no `"use client"` en la página completa.

### Evitar lógica innecesaria

- No anticipar estados, flags ni branches “por si acaso”.
- No memoizar por defecto (`useMemo` / `useCallback`) salvo medición o patrón ya establecido en el repo.
- Preferir derivadas simples y código lineal legible.
- La lógica de negocio/datos vive en `lib/` o `content/`, no escondida en JSX denso.

### Componentes pequeños

- Un componente = una responsabilidad visual o estructural clara.
- Si un archivo mezcla header + portfolio + footer, dividir por sección.
- Subcomponentes privados del mismo archivo están bien cuando no se reutilizan fuera.

### Props tipadas

- Todas las props públicas tienen tipo explícito.
- Preferir nombres claros (`title`, `href`, `variant`) sobre booleanas ambiguas.
- Preferir `variant="primary"` frente a `isPrimary`.
- Evitar `children` sin restricción cuando el API pueda ser más preciso.

---

## Next.js

### App Router

- Routing exclusivamente vía `app/`.
- Una ruta = carpeta con `page.tsx`.
- No introducir patrones del Pages Router.

### Organización

```text
app/           → rutas, layouts, metadata, composición
components/    → UI reutilizable y secciones
content/       → copy y datos tipados
lib/           → utilidades sin UI
public/        → estáticos
docs/          → constitución de marca + ingeniería
```

- `page.tsx` orquesta secciones; no implementa UI densa inline.
- Layouts envuelven chrome compartido (fuentes, shell, metadata base).
- Rutas futuras (`work`, `about`, `contact`) siguen la misma disciplina.

### Metadata

- Metadata por ruta con la API de Metadata de Next.js.
- Title, description y Open Graph definidos de forma explícita.
- No depender de tags manuales improvisados en el body.
- Defaults en `app/layout.tsx`; overrides en páginas hijas cuando haga falta.

### Layouts

- `app/layout.tsx` es el layout raíz: fonts, `globals.css`, html/body, metadata base.
- Layouts anidados solo cuando compartan chrome real entre subrutas.
- No usar layouts para esconder lógica de negocio.

---

## TypeScript

### Tipado estricto

- Respetar `strict` del `tsconfig`.
- No debilitar el compilador para “pasar el build”.
- Tipar contratos de `content/` (proyectos, clientes, site) como fuente de verdad.

### Evitar `any`

- `any` está prohibido salvo escape justificado y comentado (casi nunca).
- Preferir `unknown` + narrowing cuando el dato sea externo.
- Usar generics simples cuando eviten duplicación real.

### Interfaces vs types

| Usar | Cuándo |
|---|---|
| `type` | Unions, intersections, props de componentes, mapped/utility types, defaults del proyecto |
| `interface` | Solo si se necesita extensión/merge deliberado de contratos de objeto |

Convención del proyecto: **preferir `type` para props y modelos de contenido**, salvo caso claro de `interface` extensible.

- Exportar tipos de dominio desde cerca de los datos (`content/`) o desde `lib/types` si se comparten de verdad.
- No crear capas de tipos especulativas.

---

## Tailwind

### Orden de clases

Mantener un orden estable para reducir ruido en review:

1. Layout / display (`flex`, `grid`, `block`)
2. Posición (`relative`, `absolute`, `inset`)
3. Tamaño (`w-`, `h-`, `max-w-`, `min-h-`)
4. Espaciado (`p-`, `m-`, `gap-`)
5. Tipografía (`font-`, `text-`, `leading-`, `tracking-`)
6. Color / superficie (`bg-`, `text-` color, `border-`)
7. Efectos (`rounded-`, `shadow-`, `opacity-`, `transition-`)
8. Responsive / state variants (`sm:`, `md:`, `hover:`, `focus-visible:`)

Si el equipo adopta un plugin de sort más adelante, una sola convención — no mezclar.

### Uso consistente

- Preferir tokens semánticos (`bg-background`, `text-foreground`, spacing del sistema) sobre valores mágicos.
- No introducir una escala paralela de espacios o radios “solo para esta sección”.
- Breakpoints coherentes con el design system.

### Evitar clases repetidas

- Si el mismo bloque de clases aparece 3+ veces con el mismo significado, extraer componente o helper.
- Usar `cn()` para componer variantes, no concatenar strings a mano.
- No crear “mega className” compartidos opacos sin nombre semántico.

### Uso de variables

- Colores, radios y tipografía viven primero en CSS variables (`globals.css` + `@theme`).
- Tailwind consume esas variables; los componentes no reinventan la paleta.
- Valores crudos (`#131417`) solo en la capa de tokens, no esparcidos por JSX.

---

## Componentes

### Responsabilidad única

- `ui/` → primitivos
- `layout/` → chrome y estructura
- `sections/` → bloques de página
- `brand/` → marca pura

Si un componente hace layout + fetch + animación + copy hardcodeado, está mal cortado.

### No crear componentes prematuramente

- Empezar inline o en la sección.
- Extraer cuando haya reutilización real, complejidad, o claridad estructural.
- No crear `ContainerSmall`, `ContainerMedium`, `ContainerLarge` sin necesidad.

### Evitar sobre-abstracción

- No montar un design system genérico de 50 props para tres botones.
- No abstraer “Section” universales con diez booleans.
- Preferir tres componentes claros a uno configurable e ilegible.
- La abstracción debe reducir fricción, no ocultar el markup.

Detalle de inventario previsto → [`components.md`](./components.md).

---

## Responsive

### Mobile first

- Estilos base = móvil.
- Escalonar hacia arriba con `sm:`, `md:`, `lg:`.
- No diseñar solo desktop y “aplanar” después.

### Breakpoints

- Usar los breakpoints de Tailwind de forma consistente.
- Patrones del design system:
  - splits de portfolio → stack en móvil
  - hero asimétrico → stack conservando presencia del display
  - nav pill → menú/cápsula adaptada sin perder el patrón
- Probar hero, nav y primer case study en viewport estrecho en cada ticket de UI.

---

## Performance

### Lazy loading

- No cargar JavaScript de cliente en secciones estáticas.
- Dinamizar solo piezas pesadas de cliente cuando aporten (`next/dynamic` con criterio).
- Motion e observers viven en islas mínimas.

### Optimización de imágenes

- Usar `next/image` para mockups y fotos.
- Definir `alt` útil, tamaños razonables y prioridad solo en LCP real (p. ej. media crítica del hero/primer case).
- Evitar assets enormes sin comprimir en `public/`.

### Estrategia de assets (Figma → repo)

| Tipo | Formato | Ubicación |
|---|---|---|
| Mockups, pantallas, interfaces | PNG @2x | `public/images/portfolio/` |
| Fotografías | PNG @2x | `public/images/…` |
| Logos de clientes | SVG optimizado | `public/images/logos/` |
| Logo Albert Design | SVG | `public/images/logos/` (o brand) |
| Iconografía | SVG | `public/images/icons/` o inline |

**PNG**

- Exportar desde Figma como PNG (nunca rasterizar logos a PNG).
- Escala **2x** (Retina); conservar la relación de aspecto original.
- Optimizar el peso antes de consumir.

**SVG**

- Exportar desde Figma como SVG y pasar por optimización (p. ej. SVGO).
- No convertir mockups, fotos o UI complejas a SVG.

### Server Rendering cuando sea posible

- Preferir RSC + HTML servidor para la landing completa.
- Evitar client-only rendering del marketing site.
- El HTML útil debe existir sin esperar a hidratar toda la página.

---

## Accesibilidad

### HTML semántico

- Landmarks: `header`, `main`, `footer`, `nav`.
- Un `h1` por página; headings en orden lógico.
- Listas reales para navegación y “Últimos trabajos”.
- Botones para acciones; links para navegación.

### `aria-label`

- Usar cuando el texto visible no baste (icon-only, “BE”, controles de menú).
- No redundar aria si el texto visible ya describe la acción.
- Preferir contenido visible a aria invisible siempre que se pueda.

### Keyboard navigation

- Todo lo interactivo alcanzable por Tab.
- `focus-visible` claro y coherente con el sistema.
- No atrapar foco ni usar `div` clickeable sin rol y teclado.
- Menús móviles operables con teclado y Escape cuando existan.

---

## SEO

### Metadata

- Title y description únicos por ruta.
- Open Graph básico en el lanzamiento.
- Canonical/URL absolutas cuando haya dominio de producción.

### Headings

- Jerarquía real (`h1` → `h2` → …), no estilos que fingen headings.
- El headline del hero es el candidato natural a `h1` en Home.

### Alt

- Toda imagen significativa tiene `alt` descriptivo.
- Imágenes decorativas puras: `alt=""` de forma consciente.
- No usar filenames como alt (`mockup-final-v3.png`).

---

## Convenciones

### Naming

| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes | PascalCase | `SiteHeader.tsx` |
| Helpers | camelCase | `cn.ts` |
| Rutas | kebab-case / minúsculas | `app/case-studies/page.tsx` |
| Tokens CSS | kebab-case | `--color-foreground` |
| Tickets | `T00X-nombre.md` | `T004-hero.md` |

- Identificadores de código en inglés.
- Copy de producto en español.
- Nombre = qué es, no cómo se ve (`NavPill`, no `BlackOvalMenu`).

### Imports

- Orden sugerido:
  1. Externos (`react`, `next/*`)
  2. Internos absolutos/alias (`@/components/...`, `@/lib/...`, `@/content/...`)
  3. Relativos locales
  4. Tipos e estilos si aplican
- Preferir alias `@/` frente a `../../../`.
- No exportar barriles (`index.ts`) hasta que la repetición lo justifique.

### Carpetas

- Respetar `components/{ui,layout,sections,brand}`, `content/`, `lib/`, `docs/`, `tasks/`.
- No crear `utils/helpers/common/shared` en paralelo sin motivo.
- Colocar archivos junto a su capa, no “donde quepa”.

### Archivos

- Un componente principal por archivo (`HeroSection.tsx`).
- Subcomponentes privados pueden vivir en el mismo archivo si no se reutilizan.
- Contenido largo fuera de UI (`content/*.ts`).
- No mezclar tokens globales en CSS modules dispersos sin acuerdo.

---

## Filosofía

Escribir código como si el proyecto fuera mantenido durante los próximos cinco años.

Eso implica:

- Claridad por encima de cleverness
- Documentar decisiones de marca/sistema en `docs/`, no en comentarios eternos
- Preferir el cambio pequeño y reversible al rewrite heroico
- No dejar dos verdades (código vs docs)
- Tratar la Home como portfolio: el código también habla del oficio de Albert Design
- Optimizar para el siguiente compañero (humano o agente) que abra el repo en frío

Si una abstracción, dependencia o patrón no se puede explicar en una frase, probablemente sobra.

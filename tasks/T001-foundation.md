# T001 — Foundation

**Status:** Done — foundation shipped; do not start T002 in this change set.

## Contexto del proyecto

Albert Design es un estudio de diseño y producto en LATAM. Esta es la web oficial: carta de presentación y prueba de oficio.

Stack: Next.js 16 (App Router), React 19, TypeScript estricto, Tailwind CSS 4.

Fuente de verdad: carpeta `docs/` (visión, design system, architecture, engineering).  
Referencia visual: [Figma Home `1:586`](https://www.figma.com/design/PdxD2Fc0Y5CMfYjaVW0H4F/Albert-Design?node-id=1-586) — **no pixel-perfect**; guía composición, ritmo y proporciones.

Hoy el repo sigue siendo el boilerplate de Create Next App (Geist, metadata genérica, página demo, dark mode automático). T001 reemplaza esa base por el sistema visual de marca antes de cualquier UI de landing.

Este es el primer ticket del flujo (`tasks/T001` → `T010`). Sin él, cada sección improvisaría color, tipo y espacio.

---

## Objetivo

Establecer los tokens de diseño, tipografías de marca y base de estilos globales para que todo el sitio consuma un único sistema visual.

### Objetivo técnico

- Una sola capa de tokens en `app/globals.css` (`:root` + `@theme` Tailwind 4)
- Fuentes de marca cargadas con `next/font` y expuestas como CSS variables
- Metadata base de Albert Design en `app/layout.tsx`
- Esqueleto de carpetas `components/`, `content/`, `lib/`
- Helper `cn()` tipado en `lib/`
- Build y lint verdes; sin dependencias de UI nuevas
- Neutralizar el boilerplate que contradiga el sistema (Geist como marca, dark mode automático, Arial en `body`)

### Objetivo visual

- Superficie shell: fondo blanco / gris muy claro + texto carbón `#131417`
- Tipografía de marca lista para consumir: Instrument Serif (display), Instrument Sans (UI), fallback geométrico documentado para chrome (Gilroy no tiene licencia web en el repo)
- Escalas de spacing (base 4px), type y radius disponibles como tokens/utilidades
- Cero look de template Next.js / SaaS genérico en la base global
- Camino mobile-first preparado (tokens usable desde estilos base)

---

## Dependencias

- Ninguna de código (primer ticket)
- Documentación leída antes de implementar:
  - [`docs/vision.md`](../docs/vision.md)
  - [`docs/design-system.md`](../docs/design-system.md)
  - [`docs/design-principles.md`](../docs/design-principles.md)
  - [`docs/architecture.md`](../docs/architecture.md)
  - [`docs/engineering.md`](../docs/engineering.md)
  - [`docs/content.md`](../docs/content.md)
  - [`docs/roadmap.md`](../docs/roadmap.md)
  - Docs locales de Next en `node_modules/next/dist/docs/` para APIs de font/metadata

---

## Alcance

- Definir CSS variables / tokens en `app/globals.css` (color, space, radius, typography)
- Cargar fuentes de marca (Instrument Serif, Instrument Sans; Gilroy o fallback geométrico documentado)
- Mapear tokens a Tailwind 4 (`@theme` / utilidades semánticas)
- Limpiar estilos por defecto del boilerplate que choquen con la marca
- Dejar metadata base del sitio preparada en `app/layout.tsx` (sin UI de landing aún)
- Crear esqueleto mínimo de carpetas acordadas (`components/`, `content/`, `lib/`) si aún no existen
- Helper `cn()` en `lib/` si hace falta para composición de clases

## Fuera de alcance

- Componentes visuales de landing (hero, nav, portfolio, etc.)
- Animaciones
- Contenido final de proyectos o assets de case studies
- Deploy / CI
- Modificar la composición de la Home más allá de lo necesario para aplicar tokens globales
- Instalar librerías de UI pesadas

---

## Restricciones

- Respetar estrictamente `docs/` y este ticket; no inventar una paleta paralela
- No copiar Figma píxel a píxel
- Server Components / estructura App Router; no Pages Router
- TypeScript estricto; sin `any`
- No instalar dependencias nuevas salvo imposibilidad demostrada (preferir `cn()` sin libs)
- No adoptar dark mode incompleto: la marca shell es clara; eliminar el flip automático `prefers-color-scheme: dark` del boilerplate
- No usar Inter / Roboto / Arial / system / Geist como tipografía de marca
- Valores hex crudos solo en la capa de tokens (`globals.css`), no esparcidos por JSX futuro
- Identificadores en inglés; metadata/copy de producto en español
- No implementar `SiteShell`, `NavPill`, Hero ni secciones (T002+)
- `page.tsx` solo puede neutralizarse lo mínimo para no pelear con tokens globales

---

## Checklist

### Lectura y alineación

- [x] Leídos `docs/vision.md`, `design-system.md`, `architecture.md`, `engineering.md`
- [x] Confirmado que el alcance de T001 no se expandió hacia T002+

### Color / superficies

- [x] `--background` = `#FFFFFF` (o equivalente shell documentado)
- [x] `--foreground` = `#131417`
- [x] `--muted` / panel claro (`#F5F5F5` / `#FAFAFA`) definidos
- [x] `--muted-foreground` = grises secundarios (`#828283` / `#9FA0A3`)
- [x] `--footer` = `#23120B`
- [x] `--footer-foreground` (texto claro sobre footer) definido
- [x] Token de nav track / nav active preparado (o equivalente semántico)
- [x] `--accent` reservado con uso escaso documentado en tokens
- [x] Tokens mapeados a `--color-*` en `@theme inline` para Tailwind
- [x] Eliminado dark mode automático del boilerplate que invierte la marca

### Spacing

- [x] Escala base 4px: `space-1` (4) … al menos hasta `space-32` (128)
- [x] `space-2` = 8px disponible (gap entre paneles / inset futuro)
- [x] Tokens de spacing expuestos de forma usable en CSS/Tailwind

### Tipografía

- [x] Instrument Serif cargada via `next/font` → variable CSS display
- [x] Instrument Sans cargada via `next/font` → variable CSS sans/UI
- [x] Fallback geométrico para chrome documentado (sustituto de Gilroy) cargado via `next/font`
- [x] Roles `--font-display`, `--font-sans`, `--font-chrome` (nombres equivalentes claros) en `@theme`
- [x] Escala type: display ~96, cta ~56, manifesto ~36, section ~28, list ~25, body, meta
- [x] `body` usa Instrument Sans (o sans de marca), no Arial/Geist
- [x] `html[lang]` en `es`

### Radios

- [x] Token de radio de panel grande (firma del sistema)
- [x] Token de pill (`full` / valor dedicado) para nav futura
- [x] Sin inventario de radios arbitrarios extra

### Metadata y layout root

- [x] `metadata.title` de Albert Design (no “Create Next App”)
- [x] `metadata.description` alineada a posicionamiento/promesa
- [x] Open Graph básico presente (title/description como mínimo)
- [x] Variables de fuente aplicadas en `<html className=...>`
- [x] `body` con fondo/texto de tokens y estructura mínima sin UI de landing

### Boilerplate / limpieza

- [x] Removidas Geist / Geist Mono como fuentes de marca
- [x] Neutralizada la Home demo (Next logo, Deploy Now, links de template) en la medida permitida
- [x] No quedan clases `dark:` de template compitiendo con el shell

### Carpetas y utilidades

- [x] `components/brand/`, `components/layout/`, `components/sections/`, `components/ui/` existen (esqueleto)
- [x] `content/` existe (esqueleto; sin datos finales de proyectos obligatorios)
- [x] `lib/cn.ts` (o `lib/cn.ts` export) tipado, sin `any`
- [x] Placeholders mínimos si hacen falta para git (p. ej. `.gitkeep`), sin componentes UI reales

### Calidad

- [x] `npm run lint` OK
- [x] `npm run build` OK
- [x] No hay dependencias nuevas de UI en `package.json`
- [x] Tokens en código no divergen de `docs/design-system.md`

---

## Acceptance Criteria

Criterios medibles:

1. En `app/globals.css` existen variables semánticas de color shell (`background`, `foreground`, `muted`, `muted-foreground`, `footer`, y equivalentes de panel/nav) con los hex del design system (±0 inventados para shell).
2. En `@theme` existen utilidades/tokens Tailwind para esos colores (`bg-background`, `text-foreground`, etc. resolubles).
3. Existen tokens de spacing para 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px (nombres `space-*` o mapeo Tailwind equivalente documentado en el archivo).
4. Existen tokens/clases de tipo para display, cta, manifesto, section, list, body y meta con tamaños de referencia del design system.
5. `app/layout.tsx` carga Instrument Serif + Instrument Sans + fallback chrome; no importa Geist.
6. El CSS computado de `body` no usa Arial/Helvetica/Geist como `font-family` de marca.
7. `document` / `html` lang = `es`.
8. Metadata `title` contiene “Albert Design”; `description` no es la del boilerplate.
9. No existe media query que invierta a dark shell automáticamente por `prefers-color-scheme`.
10. Existen directorios `components/{brand,layout,sections,ui}`, `content/`, `lib/`.
11. `lib/cn.ts` exporta `cn` tipado; se puede importar como `@/lib/cn`.
12. `npm run build` termina exitosamente (exit code 0).
13. `package.json` dependencies de UI no añaden librerías nuevas respecto al estado previo del ticket (solo next/react/tailwind ya presentes).
14. `page.tsx` no muestra el CTA “Deploy Now” ni el logo Next del template (neutralización mínima).

---

## Definition of Done

- Tokens y tipografía están en `globals.css` / `layout.tsx` y son la única fuente de verdad visual base
- Checklist de este ticket completado
- Acceptance Criteria 1–14 verificados
- `lint` + `build` OK
- Sin componentes de landing ni animaciones introducidas
- Documentación y código alineados (si hubo decisión de fallback tipográfico, queda anotada en este ticket o en comentario mínimo junto a la carga de fuente)
- Listo para desbloquear `T002-layout` — **sin empezar T002**

---

## Riesgos

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Gilroy sin licencia web | Chrome tipográfico distinto a Figma | Usar fallback geométrico (`Manrope` u otro) y documentarlo explícitamente |
| Instrument fonts no disponibles en `next/font/google` en este entorno | Bloqueo de marca tipográfica | Verificar font-data de Next; si falla, `next/font/local` con archivos en `public/fonts` (solo si es imprescindible) |
| Expandir T001 hacia shell/hero “ya que estamos” | Alcance creep | Respetar fuera de alcance; detenerse al cumplir AC |
| Dejar dark mode del boilerplate | Marca inconsistente | Eliminar el media query de inversión |
| Neutralizar demasiado `page.tsx` y empezar layout | Invadir T002 | Solo quitar demo; placeholder mínimo con tokens |
| Instalar `clsx`/`tailwind-merge` sin necesidad | Dependencias extra | Implementar `cn()` mínimo sin paquetes nuevos |
| Tokens divergentes de docs | Dos verdades | Copiar hex/escalas desde `docs/design-system.md` |

---

## Validaciones

Ejecutar antes de cerrar el ticket:

1. `npm run lint`
2. `npm run build`
3. Revisión manual de `app/globals.css` contra la tabla de color/spacing/type de `docs/design-system.md`
4. Revisión de `app/layout.tsx`: fonts + metadata + `lang="es"`
5. Grep de control:
   - no debe quedar `Geist` como fuente activa de marca
   - no debe quedar `Create Next App` en metadata
   - no debe quedar `prefers-color-scheme: dark` invirtiendo shell
6. Arrancar `npm run dev` y confirmar visualmente fondo claro + tipografía sans de marca en la página neutralizada
7. Verificar que importar `@/lib/cn` resuelve en TypeScript

---

## Criterios de revisión

Un reviewer debe poder rechazar el PR/ticket si:

- Aparece cualquier componente de landing (`SiteShell`, `NavPill`, `HeroSection`, etc.)
- Se instaló una librería de UI o animación
- Los hex de shell no coinciden con docs
- Sigue existiendo dark mode boilerplate
- Geist/Arial siguen como tipografía por defecto del documento
- Metadata sigue siendo la del template
- No hay escala de spacing o type usable para T002+
- `cn` usa `any` o no está tipado
- `page.tsx` aún muestra el demo completo de Create Next App
- El build falla

Un reviewer debe aprobar si:

- Solo cambió fundación (tokens, fonts, metadata, esqueleto, neutralización mínima)
- AC medibles se cumplen
- El siguiente ticket puede consumir `bg-background`, fonts y `cn` sin redefinir marca

---

## Qué archivos pueden modificarse

- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx` — **solo neutralización mínima** del boilerplate para aplicar tokens globales (sin construir la landing)
- `lib/cn.ts` (crear)
- `lib/` (esqueleto / exports mínimos)
- `content/` (esqueleto; opcional `site.ts` mínimo solo si ayuda a metadata/constantes de marca sin UI)
- `components/brand/`, `components/layout/`, `components/sections/`, `components/ui/` (solo esqueleto / `.gitkeep`)
- `tasks/T001-foundation.md` (este documento)
- `package-lock.json` — solo si una dependencia fuera estrictamente inevitable (preferible: no tocar)

## Qué archivos NO pueden modificarse

- `tasks/T002-*.md` … `T010-*.md` (no implementarlos ni “prepararlos” en código)
- Componentes reales de UI bajo `components/**` (más allá de placeholders vacíos)
- `docs/**` salvo corrección factual imprescindible acordada (por defecto: no tocar)
- `public/` assets de case studies / logos de clientes (no aplicar a T001)
- Config de deploy / CI
- `next.config.ts` salvo bloqueo técnico demostrado
- Cualquier ruta nueva de App Router (`app/about`, etc.)
- Instalación de librerías UI/motion (`framer-motion`, component libraries, etc.)

---

## Notas de implementación (decisiones permitidas)

- **Chrome font:** si Gilroy no está disponible como webfont licenciada en el repo, usar **Manrope** como fallback geométrico documentado (`--font-chrome`).
- **`cn()`:** implementación mínima sin dependencias nuevas.
- **Home:** placeholder mínimo semántico (`main` + texto neutro o vacío estructural) usando tokens; cero demo de Vercel/Next.

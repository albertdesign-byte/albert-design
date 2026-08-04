# Review v1 — Auditoría Sprint 2

Auditoría de arriba hacia abajo de la landing (`Hero → Portfolio → Clients → Contact Experience → Latest Projects → Footer`), como Senior Frontend Engineer / Design Engineer.

**Alcance**: consistencia visual, espaciados, ritmo vertical, tipografía, alineaciones, responsive, accesibilidad, performance, organización de componentes, código repetido.

**Método**: lectura completa de `app/`, `components/`, `content/`, `lib/`, `docs/`, más `next build` y `eslint` en modo solo-lectura (sin tocar código). Build y lint pasan limpios hoy; los hallazgos de abajo son de diseño/arquitectura/calidad, no errores de compilación.

Este documento **no modifica código**. Es insumo para priorizar el Sprint 2.

---

## Crítico

### 1. `cn()` no resuelve conflictos de utilidades Tailwind — ya causó un bug real
`lib/cn.ts` es un `filter(Boolean).join(" ")`. No hace merge tipo `tailwind-merge`. Esto ya rompió el fondo del Footer (`bg-muted` de `Section` vs `bg-footer` pasado por className) y se “resolvió” evitando `Section` en `FooterCta` en vez de arreglar la causa raíz.

- Riesgo: cualquier componente que reciba `className` con una utilidad que choque con las clases base (`bg-*`, `p-*`, `w-*`, `text-*`) puede producir CSS duplicado/impredecible, dependiente del orden de generación de Tailwind, no del orden en JSX.
- Ya tuvimos un caso real (Footer). Es cuestión de tiempo hasta el próximo.
- Sugerencia (no implementar ahora): adoptar `tailwind-merge` (o una versión mínima propia que resuelva por prefijo de utilidad) en `cn()`, y luego revertir el workaround de `FooterCta` para que vuelva a usar `Section`.

`lib/cn.ts:1-9`, `components/sections/FooterCta.tsx:9-17`

### 2. Links de Portfolio apuntan a rutas que no existen (404 real)
`content/projects.ts` define `href: "/work/medmo-health"`, `/work/product-dashboard`, `/work/zara-ai`, `/work/diving-platform`. No existe ningún `app/work/[slug]/page.tsx`. Los 4 cases del portfolio (toda la sección visible en el primer scroll tras el hero) son `<Link>` reales — al hacer click, cualquier usuario cae en un 404.

- Esto es visible y clickeable ahora mismo en producción si se despliega tal cual.
- Antes de deploy: o se crean páginas mínimas de case study, o se quita temporalmente el `href`/`Link` y se documenta como “no implementado aún” (igual que se hizo conscientemente con `WorkListItem`).

`content/projects.ts:47,61,87,113`, `components/sections/CaseStudyCard.tsx:19-37`

### 3. Contraste insuficiente en `--muted-foreground` sobre fondos claros
`--muted-foreground: #828283` sobre `#fafafa` / `#f5f5f5` / `#ffffff` da ~3.1:1. Falla WCAG AA para texto normal (mínimo 4.5:1); solo aprobaría como “texto grande” (≥18px / ≥14px bold), y varios usos son texto pequeño (12px):

- `ClientNameList` → label “Algunos clientes” (12px) sobre `bg-panel`.
- `SocialLinks` → label “Social:” (12px) sobre el header del Hero (`bg-muted`).
- `WorkListItem` → en `:hover`, el texto pasa de `text-foreground` a `text-muted-foreground` a 25px (`text-list`); 25px sí califica como texto grande, pero queda justo en el límite (~3.1:1 vs mínimo 3:1) — no hay margen de seguridad.

Sugerencia: oscurecer el token (`#828283` → algo ~`#6b6b6c` o más oscuro) o restringir su uso a texto ≥18px/bold, revisando cada call-site.

`app/globals.css:11`, `components/sections/ClientNameList.tsx:11`, `components/ui/SocialLinks.tsx:16`, `components/sections/WorkListItem.tsx:19`

---

## Alto

### 4. `Section` (el wrapper de panel documentado) se usa de forma inconsistente
`docs/architecture.md` es explícito: *“Reutilizar `SectionPanel` en lugar de inventar un wrapper por sección”*. En la práctica:

| Sección | Usa `Section` |
|---|---|
| Hero | ✅ |
| Clients | ✅ |
| Latest Projects | ✅ |
| Portfolio | — (cada `CaseStudyCard` aplica `rounded-panel` por su cuenta; razonable porque no es un panel único, pero vale documentarlo como excepción intencional) |
| Contact Experience | ❌ reimplementa `rounded-panel bg-panel` a mano en `ContactScrollExperience` |
| Footer | ❌ evita `Section` por el bug de `cn()` (ver Crítico #1) |

Resultado: 3 implementaciones distintas del mismo patrón visual (panel redondeado). Cualquier cambio futuro al radio, al padding base o al fondo por defecto hay que replicarlo a mano en 3 sitios en vez de 1.

`components/layout/Section.tsx`, `components/sections/contact/ContactScrollExperience.tsx:55-61`, `components/sections/FooterCta.tsx:14-17`

### 5. Nav pill: 3 de 4 items nunca pueden mostrarse como “activos”
`NavPill.isActive()`:

```12:18:components/ui/NavPill.tsx
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  const pathOnly = href.split("#")[0] || "/";
  if (pathOnly === "/") return false;
  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}
```

Para `/#case-studies`, `/#about`, `/#contact`, `pathOnly` resuelve a `"/"` → la función devuelve `false` siempre. Es decir, existe una UI de “pill activa” (estilo `bg-footer` sobre el item activo) pero solo “Home” puede activarse; los otros tres nunca cambian de estado sin importar el scroll. Es lógica muerta / feature a medias.

Sugerencia: implementar scroll-spy simple (IntersectionObserver sobre las secciones con `id`) para reflejar la sección visible, o quitar el afiliado visual de “activo” en los items ancla si no se va a implementar todavía.

`components/ui/NavPill.tsx:13-18`

### 6. Solo hay 2 breakpoints reales en toda la UI: base y `md` (768px)
No hay un solo uso de `sm:` o `lg:` en `components/`. El diseño de referencia es a 1440px (`docs/design-system.md`), pero el salto es directo de mobile-stack a la composición “desktop” completa desde 768px — con anchos fijos grandes (`md:w-[529px]`, `md:w-[871fr]`, `md:max-w-[1340px]`, contenedor de 1239px en Contact, etc.).

- Entre 768–1279px (tablet / laptop pequeño) es muy probable que se vea apretado: la composición fue pensada para 1440px pero se activa completa desde 768px.
- Nadie ha podido verificarlo visualmente en este audit (no se tomó screenshot), pero matemáticamente varios anchos fijos (1239px, 1340px, grids `871fr/545fr`) no caben cómodamente en un viewport de 768–1024px sin generar scroll horizontal o compresión no planeada.

Sugerencia: agregar un breakpoint intermedio (`lg:` a 1024/1280px) para al menos Contact Experience, Footer y los splits de Portfolio, o validar explícitamente en dispositivos reales de 768–1024px.

### 7. Metadata incompleta para SEO / social sharing
`app/layout.tsx` no define `metadataBase`, `openGraph.images`, `icons`, ni `alternates.canonical`. No existe `app/favicon.ico`, `app/icon.tsx` ni `app/robots.ts` / `app/sitemap.ts`. Esto ya está listado en `tasks/T010-deploy.md` (“Favicon / brand assets coherentes”, “Metadata y OG revisados”) — se confirma aquí que sigue pendiente y sin resolver.

`app/layout.tsx:34-47`

### 8. Escenas de Contact Experience: código casi idéntico copiado 3 veces
`RequestScene.tsx`, `ApprovedScene.tsx`, `DeliveryScene.tsx` son el mismo componente (mismo `Image`, mismos props, misma estructura) diferenciados solo por `contactScenes[0|1|2]` y por `priority` en la primera. `docs/engineering.md` es explícito: *“Si el mismo bloque de clases/código aparece 3+ veces con el mismo significado, extraer componente o helper.”*

Sugerencia: un único `ContactScene({ scene, priority })` recibiendo el objeto de `content/contact.ts`, eliminando 3 archivos casi duplicados.

`components/sections/contact/RequestScene.tsx`, `ApprovedScene.tsx`, `DeliveryScene.tsx`

---

## Medio

### 9. Tokens tipográficos definidos pero nunca usados
`app/globals.css` define `--text-body`, `--text-body-sm` y `--text-meta` como parte de la escala tipográfica “oficial”. Ningún componente usa `text-body`, `text-body-sm` ni `text-meta`. En su lugar, cada componente resuelve tamaño/line-height con valores arbitrarios (`text-[12px] leading-[18px]`, `text-[11px] leading-[16.5px]`, `text-[14px] leading-[21px]`…) repetidos en al menos 7 archivos:

`HeroBio`, `ClientNameList`, `NavPill`, `BrandMark`, `FooterMeta`, `SocialLinks`, `FooterCta`.

Esto contradice `docs/engineering.md` (“Preferir tokens semánticos… sobre valores mágicos”, “No introducir una escala paralela”). O se ajustan los tokens a los valores reales que sí se usan y se migran los componentes a `text-body`/`text-meta`, o se documenta honestamente que la escala de “chrome” (12/11/14px) vive fuera del sistema de tokens `text-*` a propósito.

`app/globals.css:44-46, 97-102`

### 10. Valor de color crudo fuera de la capa de tokens
`WorkListItem` usa `border-[#cfd1d7]` directamente en JSX. `--border: rgb(19 20 23 / 0.08)` ya existe como token pero no se usa en ningún componente (grep confirma cero usos de `border-border`). Hay dos “grises de división” conceptualmente similares y ninguno reutiliza el token existente.

`components/sections/WorkListItem.tsx:17`, `app/globals.css:20`

### 11. `WorkListItem` transmite affordance de “clickeable” sin serlo
Tiene `cursor-pointer` y transición de color en `:hover`, pero es un `<li>` sin `href`, sin `role`, no enfocable por teclado. Fue una decisión explícita del ticket (“la lista será únicamente visual en esta primera versión”), pero el resultado visual sigue prometiendo interacción a usuarios de mouse que no reciben nada al hacer click, mientras que usuarios de teclado no tienen forma de saber que “podría” ser interactivo. Vale la pena decidir explícitamente antes del launch: ¿se vuelve `<Link>` a case studies, o se retira el `cursor-pointer`/hover para no prometer algo que no existe?

`components/sections/WorkListItem.tsx:16-21`

### 12. Radio hardcodeado en vez del token existente
`ContactSceneLayout` usa `rounded-[24px]` para el frame de la imagen, cuando `rounded-panel` (`--radius-panel-value: 1.5rem` = 24px) ya es exactamente ese valor y es el token “firma del sistema” documentado.

`components/sections/contact/ContactSceneLayout.tsx:42`

### 13. Doble render de `RequestScene` (incluye `priority` Image) en el track de Contact
`ContactScrollExperience` renderiza las 3 escenas absolutas para el crossfade, y **además** un cuarto bloque solo para reservar altura:

```92:94:components/sections/contact/ContactScrollExperience.tsx
<div className="invisible" aria-hidden>
  <RequestScene />
</div>
```

Esto monta `RequestScene` (con su `<Image priority>`) dos veces en el DOM. Es correcto que esté `aria-hidden` (no afecta accesibilidad), pero sí duplica trabajo de hidratación/layout para una imagen marcada como prioritaria. Si las 3 escenas tienen la misma altura fija (que hoy la tienen, 353px vía `ContactSceneLayout`), se podría fijar la altura del contenedor por CSS en vez de con un spacer duplicado.

`components/sections/contact/ContactScrollExperience.tsx:70-95`

### 14. Salto de foco visual/DOM en el header mobile
`SiteHeader` reordena visualmente con `row-start-2` (NavPill baja a una segunda fila en mobile) pero el DOM/orden de tabulación sigue siendo Brand → Nav → Social. Un usuario de teclado en mobile verá el foco saltar de la marca (fila 1) al nav (fila 2, visualmente abajo) y de vuelta a Social (fila 1) — orden visual y de foco divergen, un anti-patrón de accesibilidad conocido con CSS Grid `row-start`/`order`.

`components/layout/SiteHeader.tsx:16-27`

### 15. No hay skip-link antes de un scroll-jack de 360vh
`ContactScrollExperience` reserva `360vh` de scroll para 3 escenas. No hay “Skip to content” ni forma rápida de saltar ese tramo salvo scrollear manualmente (Tab sí salta correctamente porque no hay elementos enfocables dentro de las escenas — eso está bien). Aun así, para usuarios que navegan con scroll continuo (trackpad/rueda) sin usar Tab, cruzar 360vh para ~3 bloques de contenido puede sentirse largo. Vale validar con datos reales (scroll depth) antes de asumir que la duración actual es la óptima.

`components/sections/contact/ContactScrollExperience.tsx:47-53`, `lib/scroll/sceneProgress.ts:6`

### 16. CTA final ambigua: “Envía un saludo” apunta a `/#contact`
El link del Footer no es un `mailto:` ni dispara ninguna acción de envío — hace scroll de vuelta a la Contact Experience (la misma sección de “envía tu solicitud” que el usuario ya vio arriba). Funcionalmente es un ancla de navegación, pero el copy (“Envía un saludo”) sugiere una acción directa de contacto. Confirmar si el destino final debe ser `mailto:`, un formulario real, o si el scroll-back es la intención de producto.

`content/footer.ts:5-8`, `components/sections/FooterCta.tsx:26-31`

### 17. Line-breaks del H1 hardcodeados en el copy
`content/hero.ts` fuerza saltos de línea con `\n` (`"Diseñadores, Product y\nDesign engineer aquí\nen LATAM"`), consumidos con `whitespace-pre-line`. Estos saltos fueron pensados para el ancho de diseño (`md:max-w-[681px]`); en anchos intermedios entre mobile y ese máximo, el resultado puede verse con líneas muy cortas o con un salto que ya no tiene sentido tipográfico, porque el copy fuerza el corte en vez de dejar que el texto reflowee naturalmente.

`content/hero.ts:3`, `components/sections/HeroHeadline.tsx:12`

### 18. Peso de imágenes de portfolio
Los 6 PNG de `public/images/portfolio/` pesan 4.5MB en total (el más pesado, `split-b-left.png`, 1.5MB). `next/image` los optimiza en runtime cuando el hosting lo soporta (p. ej. Vercel), pero conviene verificar en el hosting final elegido (ver `T010`) que ese pipeline de optimización esté activo; si no, se sirven PNG pesados sin conversión a WebP/AVIF.

`public/images/portfolio/*`

---

## Bajo

### 19. Assets boilerplate de `create-next-app` sin usar
`public/file.svg`, `public/window.svg`, `public/vercel.svg` siguen en el repo y no se referencian en ningún componente. Limpieza simple.

### 20. `leading-none` sobre un token que ya define line-height
`FooterCta` aplica `text-cta leading-none`, pero `--text-cta--line-height: 1.1` ya viene definido en el token `text-cta` vía `@theme`. La utilidad `leading-none` pisa el valor del token inmediatamente después de aplicarlo — funciona porque el resultado visual es el buscado, pero dos utilidades resuelven la misma propiedad en la misma clase, lo cual es ruido de mantenimiento (queda ambiguo cuál “manda” a simple vista).

`components/sections/FooterCta.tsx:28`

### 21. Alt text de logos podría ser más descriptivo
`LogoCloud` usa `alt={logo.name}` (p. ej. `alt="Lapzo"`). Cumple el mínimo, pero `alt="Logo de Lapzo"` sería más explícito para lectores de pantalla sobre la naturaleza de la imagen.

`components/sections/LogoCloud.tsx:25`

### 22. Transiciones hover no respetan `prefers-reduced-motion` fuera de Contact
El `prefers-reduced-motion` solo se maneja explícitamente en `ContactScrollExperience`. Los `hover:scale-[1.015]` de `CaseStudyCard` y las transiciones de color de `WorkListItem`/`NavPill` no comprueban la preferencia. Son movimientos pequeños (no deberían disparar molestias vestibulares serias), pero es una inconsistencia frente al principio ya declarado en `docs/engineering.md` de respetar `prefers-reduced-motion` de forma consistente.

`components/sections/CaseStudyCard.tsx:47-48`, `components/sections/WorkListItem.tsx:19`

### 23. Documentación con rangos que no coinciden con el token real
`docs/design-system.md` describe `text-body` como “~12–20px”, pero el token concreto en `globals.css` es un único valor (`--size-body: 1rem` = 16px). Es una divergencia menor doc-vs-código (`docs/architecture.md` pide explícitamente no dejar “dos verdades”).

`docs/design-system.md:125`, `app/globals.css:44`

### 24. `usePinnedScrollProgress` mantiene listeners activos indefinidamente
El listener de `scroll`/`resize` para calcular el progreso del track de Contact queda activo durante toda la vida de la página, incluso mucho después de que el usuario haya hecho scroll más allá de esa sección. Ya está bien throttled con `requestAnimationFrame`, así que el costo real es bajo — se lista como mejora menor, no como problema de performance urgente.

`lib/scroll/usePinnedScrollProgress.ts:16-46`

---

## Checklist

### Crítico
- [ ] Reemplazar `cn()` por una versión que resuelva conflictos de utilidades Tailwind (o adoptar `tailwind-merge`) y revertir el workaround de `FooterCta`
- [ ] Resolver los links de Portfolio a `/work/*` (crear páginas mínimas o retirar temporalmente la navegación)
- [ ] Revisar/oscurecer `--muted-foreground` para cumplir contraste AA en fondos claros

### Alto
- [ ] Unificar el uso de `Section` en Contact Experience (y evaluar Portfolio como excepción documentada)
- [ ] Implementar scroll-spy real para `NavPill` o retirar el estado “activo” de los items ancla
- [ ] Añadir breakpoint intermedio (`lg:`) o validar manualmente 768–1279px en Contact, Footer y Portfolio split
- [ ] Completar metadata (`metadataBase`, OG image, favicon, robots/sitemap) — cerrar pendientes de `T010`
- [ ] Unificar `RequestScene` / `ApprovedScene` / `DeliveryScene` en un único componente parametrizado

### Medio
- [ ] Adoptar `text-body` / `text-body-sm` / `text-meta` en los componentes que hoy usan valores arbitrarios, o documentar la escala de “chrome” como intencionalmente fuera del sistema `text-*`
- [ ] Reemplazar `border-[#cfd1d7]` por un token de borde reutilizable
- [ ] Decidir el destino final de `WorkListItem` (interactivo real o quitar affordance de hover/cursor)
- [ ] Usar `rounded-panel` en vez de `rounded-[24px]` en `ContactSceneLayout`
- [ ] Simplificar el spacer de altura de `ContactScrollExperience` para evitar el doble render de `RequestScene`
- [ ] Revisar orden de foco vs. orden visual en `SiteHeader` mobile
- [ ] Evaluar necesidad de skip-link antes del scroll-jack de Contact Experience
- [ ] Confirmar destino real del CTA “Envía un saludo” (`mailto`, formulario, o scroll-back intencional)
- [ ] Revisar el copy del H1 del Hero para que no dependa de saltos de línea hardcodeados
- [ ] Confirmar pipeline de optimización de imágenes en el hosting final para los PNG de portfolio

### Bajo
- [ ] Eliminar assets boilerplate sin usar (`file.svg`, `window.svg`, `vercel.svg`)
- [ ] Limpiar la combinación redundante `text-cta leading-none`
- [ ] Mejorar alt text de logos (“Logo de X” en vez de solo “X”)
- [ ] Extender `prefers-reduced-motion` a hovers fuera de Contact Experience, o documentar por qué no aplica
- [ ] Alinear `docs/design-system.md` con el valor real de `--size-body`
- [ ] (Opcional) Pausar/desactivar el listener de scroll de Contact cuando el track está lejos del viewport

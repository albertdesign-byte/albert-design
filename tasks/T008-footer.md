# T008 — Footer

## Objetivo

Cerrar la landing con la lista tipográfica “Últimos trabajos” y el bloque CTA oscuro “Envía un saludo”.

## Contexto

El cierre es de dos actos: índice tipográfico reciente + footer CTA con macro whitespace.  
Referencias: [`docs/sections.md`](../docs/sections.md), [`docs/content.md`](../docs/content.md), [`docs/components.md`](../docs/components.md), [`docs/design-system.md`](../docs/design-system.md).

## Dependencias

- `T001-foundation`
- `T002-layout`
- `T007-contact` (flujo completo de secciones medias listo)

## Alcance

- `LatestWorkSection`, `WorkList`, `WorkListItem`, `Rule`
- `FooterCta`, `FooterMeta`
- Datos de trabajos desde `content/projects.ts` (o lista tipada equivalente)
- Layout label + lista para últimos trabajos
- Footer oscuro cálido (`#23120B` / token footer) con meta + CTA tipográfico grande
- Hover/focus básicos en filas y CTA (motion fino opcional queda para `T009`)
- Responsive

## Fuera de alcance

- Animaciones pulidas de hover/entrada — `T009` (transiciones CSS mínimas OK)
- Form backend del CTA (mailto / link suficiente)
- Deploy — `T010`
- Nuevas páginas de proyecto

## Checklist

- [ ] “Últimos trabajos” con título serif/sección correcto
- [ ] Filas nombre + año con reglas horizontales y aire (~96px guía)
- [ ] Lista según contenido documentado
- [ ] Footer oscuro con “¿Tienes algún proyecto?” + “Envía un saludo”
- [ ] `FooterMeta` con año y wordmark
- [ ] Macro whitespace en el CTA; no compactado
- [ ] Tokens de color footer usados (no hex sueltos si ya hay token)
- [ ] Mobile coherente

## Acceptance Criteria

- El cierre se siente premium y quiet; la lista es tipográfica, no una tabla densa
- El CTA oscuro domina sin ruido visual
- Enlaces/filas son usables por teclado
- Desktop y mobile OK
- La Home queda completa en contenido estructural (pendiente motion y deploy)

## Definition of Done

- Últimos trabajos + footer CTA integrados
- Cumple checklist y acceptance criteria
- Desbloquea `T009-animation`

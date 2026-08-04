# T003 — Navbar

## Objetivo

Implementar el chrome superior: marca, navegación en pill y enlace social, con estado activo claro y tipografía de sistema.

## Contexto

En la referencia, el header es quiet luxury: BrandMark arriba-izquierda, NavPill centrada (Home activo), Social/BE arriba-derecha.  
No es una barra SaaS densa; es parte de la composición del hero.  
Referencias: [`docs/components.md`](../docs/components.md), [`docs/content.md`](../docs/content.md), [`docs/design-system.md`](../docs/design-system.md), [`docs/sections.md`](../docs/sections.md).

## Dependencias

- `T001-foundation`
- `T002-layout` (`SiteShell` / `Container` disponibles)

## Alcance

- `BrandMark` — “Albert Design” + “Worldwide”
- `NavPill` — Home · Case Studies · About · Contacts (estado activo)
- `SocialLinks` — label “Social:” + `BE`
- `SiteHeader` que compone las tres piezas
- Estados hover/focus accesibles
- Responsive: conservar carácter “cápsula”; colapso a menú si hace falta sin perder el patrón
- Copy/nav items desde `content/` (o constante tipada equivalente)

## Fuera de alcance

- Contenido del hero (bio + headline) — va en `T004`
- Animación avanzada del chip activo — motion fino en `T009` (transición CSS básica sí permitida)
- Rutas internas completas de Case Studies / About / Contacts (pueden ser anchors o placeholders)
- Portfolio, clientes, footer
- Deploy

## Checklist

- [ ] BrandMark visible y legible como señal de marca
- [ ] NavPill con estado activo contrastado (píldora oscura sobre track claro)
- [ ] Items de nav según `docs/content.md`
- [ ] SocialLinks presente y semántico
- [ ] Focus visible en links/controles
- [ ] Tipografía de chrome usa tokens (Gilroy / Instrument Sans según rol)
- [ ] No hay clutter, badges ni utilidades extra en el header
- [ ] Mobile usable (cápsula o menú equivalente coherente)

## Acceptance Criteria

- El header reproduce la jerarquía de la referencia sin esclavitud píxel a píxel
- El estado activo de navegación se entiende de inmediato
- Es accesible por teclado y tiene contraste suficiente
- Se integra dentro del shell de `T002` sin romper el inset ni el ritmo

## Definition of Done

- `SiteHeader` + piezas de chrome listas y reutilizables
- Cumple checklist y acceptance criteria
- Desbloquea composición completa del hero en `T004`

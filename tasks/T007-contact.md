# T007 — Contact

## Objetivo

Implementar la sección “Envía tu solicitud”: label lateral, visual central de solicitud y copy de apoyo.

## Contexto

Invita a contar el proyecto. En la referencia es un bloque de tres zonas; el formulario puede empezar como visual y evolucionar a form real.  
Referencias: [`docs/sections.md`](../docs/sections.md), [`docs/content.md`](../docs/content.md), [`docs/components.md`](../docs/components.md).

## Dependencias

- `T001-foundation`
- `T002-layout`
- `T006-clients` (orden de la landing; shell ya estable)

## Alcance

- `RequestSection`
- `SectionLabel` — “Envía tu solicitud” (reutilizable)
- `RequestFormVisual` — UI de “Solicitud” (mock o form mínimo)
- `RequestAside` — texto de apoyo
- Copy desde `content/`
- Layout de tres zonas en desktop; stack en mobile
- Si hay form real: acción clara (`Enviar`), labels accesibles; si es visual, debe poder convertirse después sin reescribir la sección

## Fuera de alcance

- Backend / email service / CRM
- Validación compleja o multi-step wizard
- Últimos trabajos y footer — `T008`
- Motion avanzado — `T009`
- Deploy
- Páginas legales

## Checklist

- [ ] Label lateral con tipografía de sección (`text-section`)
- [ ] Visual/formulario central con título “Solicitud”
- [ ] Aside con copy de apoyo
- [ ] Tres zonas claras en desktop
- [ ] Stack usable en mobile
- [ ] Focus states si hay controles interactivos
- [ ] Sin clutter ni cards innecesarias fuera del patrón
- [ ] Contenido tipado en `content/`

## Acceptance Criteria

- La sección cumple un solo trabajo: invitar a enviar la solicitud
- Reproduce la experiencia de la referencia (proporción y ritmo), no un form SaaS genérico
- Accesible en nivel básico si hay inputs
- Desktop y mobile OK

## Definition of Done

- Sección de contacto/solicitud integrada en la Home
- Cumple checklist y acceptance criteria
- Desbloquea `T008-footer`

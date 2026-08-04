# T006 — Clients

## Objetivo

Construir la sección editorial de clientes: lista de nombres, manifiesto tipográfico y logo cloud.

## Contexto

Después del portfolio, la landing pasa a lectura tipográfica: credibilidad + promesa.  
Layout label + content; manifiesto en serif grande; logos discretos debajo.  
Referencias: [`docs/sections.md`](../docs/sections.md), [`docs/content.md`](../docs/content.md), [`docs/components.md`](../docs/components.md), [`docs/design-system.md`](../docs/design-system.md).

## Dependencias

- `T001-foundation`
- `T002-layout`
- `T005-portfolio` (posición en el flujo de Home; reutiliza paneles)

## Alcance

- `ClientsSection`
- `ClientNameList` — label “Algunos clientes” + nombres
- `ManifestoText` — párrafo serif (`text-manifesto`)
- `LogoCloud` — fila de logotipos
- Datos en `content/clients.ts` (y copy de manifiesto en content tipado)
- Layout label (~180–320px) + contenido
- Responsive: apilar sin perder jerarquía editorial

## Fuera de alcance

- Case studies adicionales
- Formulario / solicitud — `T007`
- Últimos trabajos y footer — `T008`
- Animaciones — `T009`
- Deploy

## Checklist

- [ ] Label “Algunos clientes” con estilo meta/secundario
- [ ] Lista de clientes según contenido documentado
- [ ] Manifiesto en Instrument Serif / token correcto
- [ ] Logo cloud legible, sin parecer strip de startup genérico
- [ ] Copy en `content/`, no atrapado en el componente visual
- [ ] Panel usa `SectionPanel` / ritmos del sistema
- [ ] Mobile coherente
- [ ] Contraste y semántica correctos (heading de sección apropiado)

## Acceptance Criteria

- La sección se lee como un bloque editorial de confianza, no como logo wall ruidoso
- Jerarquía: lista secundaria + manifiesto dominante + logos de apoyo
- Alineado al tono de `docs/vision.md` / `docs/content.md`
- Desktop y mobile OK

## Definition of Done

- Sección de clientes integrada en la Home
- Cumple checklist y acceptance criteria
- Desbloquea `T007-contact`

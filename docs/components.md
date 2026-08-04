# Componentes

Lista identificada en la captura de Figma (nombres de implementación propuestos).  
Secciones que los componen → [sections.md](./sections.md).  
Dónde viven en el repo → [architecture.md](./architecture.md).

> No crear todos el día 1. Empezar por shell, hero, `SectionPanel`, un `CaseStudyCard` y `WorkList`.  
> Orden de construcción → [roadmap.md](./roadmap.md).

---

## Chrome / layout

1. `SiteShell` — wrapper de página con inset 8px y fondo
2. `SectionPanel` — panel redondeado (bg variable, gap 8px entre hermanos)
3. `Container` — ancho máximo / padding horizontal de chrome
4. `SiteHeader` — barra superior del hero
5. `BrandMark` — “Albert Design” + subtítulo “Worldwide”
6. `NavPill` — cápsula Home / Case Studies / About / Contacts (estado activo)
7. `SocialLinks` — label “Social:” + enlace `BE` (Behance)

---

## Hero

8. `HeroSection`
9. `HeroBio` — párrafo de experiencia (columna estrecha)
10. `HeroHeadline` — titular Instrument Serif

---

## Portfolio / cases

11. `CaseStudyBand` — contenedor full o split
12. `CaseStudyCard` — superficie de color + radio grande + link
13. `DeviceMockup` — iPad / iPhone / mano-con-teléfono / collage multi-device
14. `CaseStudyMedia` — composición de imágenes dentro del card

---

## Confianza / manifiesto

15. `ClientsSection`
16. `ClientNameList` — columna “Algunos clientes” + nombres
17. `ManifestoText` — párrafo serif grande
18. `LogoCloud` — fila de logotipos de clientes

---

## Solicitud

19. `RequestSection`
20. `SectionLabel` — label lateral reutilizable (“Envía tu solicitud”, etc.)
21. `RequestFormVisual` — mock/UI de “Solicitud” (puede evolucionar a form real)
22. `RequestAside` — copy de apoyo a la derecha

---

## Trabajos + cierre

23. `LatestWorkSection`
24. `WorkList` — lista con reglas horizontales
25. `WorkListItem` — nombre/proyecto + año
26. `FooterCta` — bloque oscuro “¿Tienes algún proyecto?” / “Envía un saludo”
27. `FooterMeta` — año + wordmark

---

## Primitivos UI

28. `TextLink` / `Button` — variantes quiet (texto) y pill (nav/CTA)
29. `Rule` — divisor 1px de listas

---

## Checklist antes de un componente nuevo

- [ ] ¿Ya existe algo reutilizable en `ui/`, `layout/` o `brand/`?
- [ ] ¿Pertenece a chrome, sección o primitivo? (ubicación correcta)
- [ ] ¿Usa tokens del [design-system](./design-system.md)?
- [ ] ¿El nombre describe qué es, no cómo se ve?
- [ ] ¿El copy vive en `content/` si es largo o recurrente?

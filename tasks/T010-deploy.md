# T010 — Deploy

## Objetivo

Dejar la web lista para producción: build estable, SEO base, assets optimizados y despliegue del sitio oficial.

## Contexto

Último ticket del flujo inicial. La Home debe poder mostrarse como trabajo de Albert Design sin disclaimers.  
Referencias: [`docs/roadmap.md`](../docs/roadmap.md) (Definition of Done), [`docs/architecture.md`](../docs/architecture.md), [`docs/vision.md`](../docs/vision.md).

## Dependencias

- `T001` … `T009` completados (o explícitamente waivados con acuerdo)
- Home funcional en desktop y mobile
- Contenido y media mínimos listos para público

## Alcance

- `next build` / producción sin errores
- Metadata completa (title, description, Open Graph básicos)
- Favicon / brand assets coherentes
- Imágenes y fuentes revisadas para peso razonable
- Variables de entorno documentadas si aplican (form, analytics)
- Deploy a hosting acordado (p. ej. Vercel) con dominio si está disponible
- Smoke test post-deploy (home carga, nav, links principales, mobile)
- Checklist final de Definition of Done de la landing

## Fuera de alcance

- Nuevas secciones o rediseños
- Blog / CMS completo
- Experimentos A/B
- Features post-lanzamiento (páginas case study profundas, i18n, etc.) salvo que bloqueen el go-live

## Checklist

- [ ] Build de producción OK
- [ ] Lint OK (o issues conocidos documentados)
- [ ] Metadata y OG revisados
- [ ] Lighthouse / revisión manual: performance y a11y básicos aceptables
- [ ] `prefers-reduced-motion` sigue respetándose en prod
- [ ] Links principales no rotos
- [ ] Desktop + mobile verificados en URL desplegada
- [ ] Documentación no diverge del resultado shipped (actualizar docs si hubo cambios reales)

## Acceptance Criteria

- La Home en producción reproduce la experiencia acordada (composición y ritmo), sin esclavitud píxel a píxel
- Tipografía, espacio y paneles se sienten premium y europeos
- Accesibilidad básica sólida (semántica, foco, contraste, reduced motion)
- Podría mostrarse a un cliente como trabajo de Albert Design sin disclaimers
- URL de producción accesible y estable

## Definition of Done

- Sitio desplegado y verificado
- Cumple checklist y acceptance criteria de este ticket
- Cumple la Definition of Done de landing en `docs/roadmap.md`
- Flujo `T001`–`T010` cerrado para el lanzamiento inicial

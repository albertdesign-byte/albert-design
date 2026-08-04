# Secciones

Orden y responsabilidad de cada bloque de la landing.  
Componentes por bloque → [components.md](./components.md).  
Copy estructural → [content.md](./content.md).

---

## Orden de la landing (arriba → abajo)

1. **Hero** — header + bio + headline serif
2. **Case study featured (full)** — panel a ancho completo con mockup central (ref. producto salud / tablet)
3. **Case study split A** — móvil en mano (izq.) + dashboard/UI (der.)
4. **Case study split B** — collage de móviles (izq.) + foto mano/teléfono (der.)
5. **Case study featured (full)** — plataforma / producto con mockup y UI flotante (ref. diving platform)
6. **Clientes + manifiesto** — lista de clientes + copy serif + logo cloud
7. **Solicitud** — label + visual de formulario + texto de apoyo
8. **Últimos trabajos** — título + lista tipográfica (proyecto — año)
9. **Footer CTA** — bloque oscuro con “Envía un saludo”

---

## Detalle por sección

### 1. Hero

- **Trabajo único:** presentar marca, posicionamiento y presencia tipográfica
- **Piezas:** `SiteHeader` (BrandMark, NavPill, SocialLinks), `HeroBio`, `HeroHeadline`
- **Composición:** asimétrica — bio estrecha a la izquierda; titular serif monumental abajo-derecha
- **Presencia desktop:** ~900–950px
- **No incluir:** stats, agendas, promos, badges flotantes

### 2–5. Case studies (portfolio)

- **Trabajo único:** mostrar trabajo real como planos visuales dominantes
- **Patrones:**
  - Full: un `CaseStudyCard` a ancho completo (12/12)
  - Split: dos paneles ~545 / 8 / 871 (≈ 5 / 7) con gap 8px
- **Piezas:** `CaseStudyBand`, `CaseStudyCard`, `DeviceMockup`, `CaseStudyMedia`
- **Altura desktop:** ~530–650px por banda
- **Color:** superficies propias del proyecto; no del shell de marca
- **Interacción:** cada banda/card es un link hacia case study (cuando exista ruta)

### 6. Clientes + manifiesto

- **Trabajo único:** credibilidad + promesa en una lectura editorial
- **Layout:** label/content — columna “Algunos clientes” (~325px) + manifiesto serif (~863px) + logo cloud debajo; cluster ~1188px centrado
- **Piezas:** `ClientsSection`, `ClientNameList`, `ManifestoText`, `LogoCloud`

### 7. Solicitud / Contact experience

- **Trabajo único:** invitar a contar el proyecto como recorrido editorial
- **Comportamiento:** scroll pinned con **tres escenas** (solicitud → aprobada → entrega); dissolve por opacidad + `translateY` mínimo
- **Fondo de sección:** siempre panel claro (`#fafafa`); el tono oscuro vive solo en el bloque visual central (PNG)
- **Layout por escena:** tres zonas — label ~180 · visual 529×353 · aside ~322 (gap ~104)
- **Piezas:** `ContactSection`, `ContactScrollExperience`, `RequestScene`, `ApprovedScene`, `DeliveryScene`, `ContactSceneLayout`
- **Scroll math:** `lib/scroll/sceneProgress.ts` + `usePinnedScrollProgress` (desacoplado del contenido)
- **Assets:** PNG de mockups en `public/images/contact/`

### 8. Últimos trabajos

- **Trabajo único:** índice tipográfico reciente
- **Layout:** título a la izquierda + lista a la derecha con reglas horizontales
- **Piezas:** `LatestWorkSection`, `WorkList`, `WorkListItem`
- **Filas:** ~96px de alto con padding interno generoso

### 9. Footer CTA

- **Trabajo único:** cierre y contacto
- **Superficie:** bloque oscuro cálido (`#23120B`)
- **Piezas:** `FooterCta`, `FooterMeta`
- **Jerarquía:** meta pequeña (“¿Tienes algún proyecto?”) + CTA tipográfico grande (“Envía un saludo”)
- **Aire:** macro whitespace; no compactar

---

## Ritmo entre secciones

- Separación **entre** paneles: siempre **8px**
- Paneles con radios grandes (sensación de hoja apilada)
- Outer inset de página: **8px**
- El vacío interno de cada sección es parte del diseño

Mapeo a tokens → [design-system.md](./design-system.md).

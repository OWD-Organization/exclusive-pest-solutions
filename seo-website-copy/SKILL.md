---
name: seo-website-copy
description: >-
  Expert SEO website copywriting that adapts to ANY industry, niche, or business model.
  Use this skill when the user requests website copy creation, homepage content, service
  page writing, or SEO content optimization. Also use when the user wants to replace the
  text of an existing site, template, or reference while preserving exact section structure,
  word counts, and element hierarchy. Triggers include: write copy for a website or business,
  create homepage content, optimize site copy, rewrite my website, replace text in a template,
  use this site as reference, or any request involving web copy regardless of industry.
  Starts by asking whether the work mode is structural replacement (follow a reference site
  or template exactly) or free-form copy, then runs a diagnostic intake to determine business
  type and SEO strategy.
---

# SEO Website Copywriting Skill

## Overview

Generate high-converting, SEO-optimized website copy for **any type of business or niche**. This skill begins with a diagnostic intake to understand the business model, SEO strategy needed, and industry — then adapts copywriting patterns, page structure, and keyword strategy accordingly.

**Supported business types:**
- Local service businesses (plumbers, dentists, contractors, etc.)
- SaaS / software products
- E-commerce stores
- Professional services (agencies, consultants, coaches)
- National/global service providers
- Content/media brands
- Niche communities or marketplaces

---

## STEP -1: Definir el Modo de Trabajo (SIEMPRE PRIMERO)

Antes de cualquier pregunta sobre el negocio, pregunta esto en **un solo mensaje breve**:

---

**¿Cómo vamos a trabajar el copy?**

**Opción A — Reemplazo estructural (sitio/template de referencia)**
Tienes un sitio web, template o documento existente cuyos textos quieres reemplazar. El copy nuevo debe respetar exactamente la arquitectura del referente: mismas secciones, mismo orden, y la misma cantidad aproximada de palabras/caracteres por cada elemento (eyebrow, título, descripción, CTA, etc.).

👉 *Proporciona: URL del sitio, el template, o pega los textos originales.*

**Opción B — Copy desde cero (estructura libre o guiada)**
No tienes un referente estructural. Definiremos juntos las páginas y secciones más adecuadas para tu negocio y escribiremos el copy optimizado.

¿Cuál aplica a tu caso?

---

### Si elige Opción A → Modo Reemplazo Estructural

**Paso A1: Obtener el referente**

Dependiendo de lo que proporcione:

- **URL** → Usar `web_fetch` para extraer el contenido completo
- **Texto pegado** → Leer directamente del mensaje
- **Documento adjunto** → Leer el archivo proporcionado

**Paso A2: Mapear la arquitectura de texto**

Analiza cada sección del referente y construye un mapa estructural. Para cada elemento de texto, registra:

```
MAPA ESTRUCTURAL — [Nombre del sitio/template]

## [Nombre de la sección]
- [Nombre del elemento]: [N palabras] / [N caracteres aprox]
  Texto original: "[texto original...]"

Ejemplo:
## Hero Section
- Eyebrow: 4 palabras / ~28 chars
  Texto original: "Trusted by 10,000 teams"
- Título H1: 7 palabras / ~42 chars
  Texto original: "The fastest way to close deals"
- Descripción: 22 palabras / ~140 chars
  Texto original: "Turn your pipeline into revenue with..."
- CTA Principal: 3 palabras
  Texto original: "Start for free"
- CTA Secundario: 4 palabras
  Texto original: "See how it works"
```

**Reglas del mapeo:**
- Contar palabras y caracteres del texto original (sin contar etiquetas HTML)
- Registrar TODOS los elementos de texto: eyebrows, títulos, subtítulos, párrafos, bullets, CTAs, labels, placeholders
- Mantener el orden exacto de secciones
- Si hay listas o bullets, registrar cuántos items y longitud por item
- Si hay campos de formulario, registrar los labels y placeholders

**Paso A3: Confirmar el mapa con el usuario**

Muestra el mapa estructural generado y pregunta:
- ¿Hay secciones que no necesitas?
- ¿Hay secciones adicionales que quieras agregar?
- ¿Algún elemento donde prefieras más o menos texto que el original?

**Paso A4: Continuar al Intake (Step 0)**

Con el mapa confirmado, procede al Step 0 para recopilar información del negocio. Luego en Step 3 (Ejecución), escribe el copy respetando estrictamente el mapa estructural.

**Reglas de escritura en modo Reemplazo Estructural:**
- Diferencia de ±10% en conteo de palabras es aceptable
- Nunca agregar secciones nuevas sin confirmar con el usuario
- Nunca cambiar la jerarquía de encabezados (H1 sigue siendo H1, etc.)
- Mantener el mismo número de bullets, pasos o items por lista
- Entregar el copy en el mismo formato/orden que el referente

---

### Si elige Opción B → Modo Copy Libre

Procede directamente al **Step 0: Diagnostic Intake** a continuación.

---

## STEP 0: Diagnostic Intake

**Aplica en ambos modos.** Si viene del Modo A, ya tienes el mapa — ahora necesitas info del negocio. Si viene del Modo B, necesitas info del negocio + definir estructura.

### 0A: Si ya se proporcionó una URL en modo B

Use `web_fetch` para extraer contenido existente, luego preguntar solo lo que no se pudo inferir.

### 0B: Intake Questionnaire

**CRITICAL: Haz las preguntas de una en una.** Espera la respuesta del usuario antes de hacer la siguiente. Nunca agrupes varias preguntas en un mismo mensaje. El orden recomendado es:

1. ¿Cuál es el nombre del negocio o marca?
2. ¿Qué hace exactamente? (producto, servicio, plataforma)
3. ¿Quién es tu cliente ideal? (perfil, edad, necesidad principal)
4. ¿Cuál es tu propuesta de valor principal — qué te hace diferente?
5. ¿Cómo opera el negocio? (presencial / remoto / SaaS / e-commerce / híbrido / otro)
6. ¿A quién le vendes geográficamente? (local / nacional / internacional / digital puro)
7. ¿Tienes una ciudad o zona principal que quieras posicionar? (si aplica)
8. ¿Tienes palabras clave específicas que quieras atacar, o prefieres que yo las sugiera?
9. ¿Tienes competidores cuyo sitio quieras superar? (URLs)
10. ¿Qué páginas necesitas? (homepage, servicios, about, landing page, blog, etc.)
11. ¿Cómo describes el tono de tu marca? (ej: profesional, cercano, técnico, inspirador, directo)
12. ¿Hay copy existente que quieras conservar o mejorar?

**Reglas del intake:**
- Una pregunta por mensaje, siempre.
- Si el usuario responde varias preguntas en un solo mensaje, procésalas todas y continúa desde donde se quedó.
- Si una respuesta hace innecesaria alguna pregunta posterior, saltarla.
- Mantener tono conversacional — no clínico ni de formulario.

---

### 0C: Classify the Business

Based on intake answers, classify into one of these **SEO Strategy Types** before proceeding:

| Type | Description | SEO Focus |
|------|-------------|-----------|
| **LOCAL** | Serves customers in a specific city/region in person | Local SEO: geo keywords, GMB, service areas |
| **NATIONAL_SERVICE** | Remote service, serves entire country | Broad + niche keywords, no geo dependency |
| **SAAS** | Software product, subscription model | Product-led SEO: feature pages, comparison, use case |
| **ECOMMERCE** | Sells physical/digital products | Category SEO, product descriptions, transactional intent |
| **PROFESSIONAL** | Agency, consultant, coach | Authority SEO: expertise, case studies, niche positioning |
| **HYBRID** | Mix of local + online or products + services | Blended strategy |

→ **Document the classification internally before Step 1.** Example:
```
CLASSIFICATION: LOCAL
Industry: Plomería residencial
Geo: Cali, Valle del Cauca
Primary keywords: fontanero en Cali, plomero urgente Cali
```

---

## Step 1: Research & Keyword Strategy

### 1A: Analyze Existing Site (if URL provided)

Use `web_fetch` to extract:
- H1/title keywords and structure
- Geographic targeting signals (or lack thereof)
- UVP and messaging angle
- Sections and conversion elements
- Tone and voice

**Load keyword extraction reference:**
```
view references/keyword-extraction.md
```

### 1B: Keyword Strategy by Business Type

**LOCAL businesses:**
- Load `references/local-seo-guide.md`
- Primary keyword = [Service] + [City]
- Secondary = [Service] + [Neighborhood/County]
- Long-tail = "near me" + emergency/urgency variants

**NATIONAL_SERVICE / PROFESSIONAL:**
- No geo modifiers needed
- Focus on: problem-aware keywords, niche positioning, outcome keywords
- Example: "consultoría de marca para startups", "agencia SEO para SaaS"

**SAAS:**
- Feature pages: "[Feature] software", "[Feature] tool"
- Comparison: "[Product] vs [Competitor]"
- Use case: "[Job title] uses [Product] to [outcome]"
- No geo, high intent keywords

**ECOMMERCE:**
- Category keywords: "[Product type] online", "comprar [product]"
- Product-level: specific model/variant keywords
- Transactional intent throughout

**HYBRID:**
- Segment copy: local sections for service + national sections for product
- Separate landing pages may be needed

---

## Step 2: Page Structure Planning

**Goal:** Select the right structure based on business type and pages requested.

### Structure Templates by Type

#### LOCAL Service Business (Homepage)
1. Hero — Headline + city + primary service
2. Lead Form #1
3. Mission/About — Local roots, community
4. Why Us — 3-4 benefits
5. Trust/Social Proof
6. CTA + Lead Form #2
7. Problem-Aware Section — bottom-funnel keywords
8. Testimonials
9. **Areas We Serve** — Counties → Cities → Neighborhoods *(local only)*
10. Email Signup
11. Footer

#### NATIONAL_SERVICE / PROFESSIONAL (Homepage)
1. Hero — Headline + outcome + who you serve
2. Social Proof / Client Logos
3. Problem Statement
4. How It Works — 3-step process
5. Services/Offers Overview
6. Why Us — Differentiators
7. Case Studies or Results
8. Testimonials
9. FAQ
10. CTA / Contact
11. Footer

#### SAAS (Homepage)
1. Hero — Hook + product benefit + CTA (free trial / demo)
2. Social Proof / Logos
3. Problem → Solution framing
4. Feature Highlights (3-4 key features)
5. How It Works — product walkthrough
6. Use Cases or Personas
7. Pricing teaser / CTA
8. Testimonials / G2 reviews
9. FAQ
10. Final CTA
11. Footer

#### ECOMMERCE (Homepage or Category Page)
1. Hero — Offer + urgency + CTA
2. Best Sellers / Featured Products
3. Category Grid
4. Brand Story / Trust signals
5. Social Proof
6. Benefits / Guarantees (shipping, returns)
7. User-Generated Content
8. Newsletter / Discount CTA
9. Footer

**Always confirm structure if:**
- User requests specific sections only
- Business has unusual model
- Landing page (not full homepage) is requested

---

## Step 3: Copywriting Execution

**Reference patterns for formulas:**
```
view references/copywriting-patterns.md
```

### Si estás en Modo Reemplazo Estructural (Opción A)

Entrega el copy usando exactamente el mismo formato que el mapa estructural. Para cada sección:

```
## [Nombre de la sección — igual que el referente]

**[Elemento]** (~N palabras)
[Copy nuevo]

**[Elemento]** (~N palabras)
[Copy nuevo]
```

Incluye al lado de cada elemento el conteo de palabras entre paréntesis para que el usuario pueda verificar fácilmente. Ejemplo:

```
## Hero Section

**Eyebrow** (4 palabras)
Más de 500 clientes satisfechos

**Título H1** (7 palabras)
La forma más rápida de cerrar ventas

**Descripción** (21 palabras)
Convierte tu pipeline en ingresos reales con herramientas diseñadas
para equipos que no tienen tiempo que perder.

**CTA Principal** (3 palabras)
Empieza gratis hoy

**CTA Secundario** (4 palabras)
Mira cómo funciona
```

Al final de cada sección, muestra un resumen rápido:
`✓ Sección: X/Y palabras del original`

---

### Universal Writing Rules (all types)

- **Short paragraphs** — 2-3 lines max
- **"You" language** — speak directly to the reader
- **Active voice** — avoid passive constructions
- **Benefits over features** — what the customer gains, not what you do
- **Zero fluff** — every sentence earns its place
- **Proper header hierarchy** — H1 → H2 → H3
- **Natural keyword integration** — no stuffing

### Type-Specific Writing Rules

**LOCAL:**
- City name in H1
- "Near me" variants in body copy
- Local proof points (years in the community, neighborhood references)
- Urgency language (24/7, same-day, emergency)

**NATIONAL_SERVICE / PROFESSIONAL:**
- Lead with outcomes, not process
- Niche positioning in hero ("Para startups B2B que quieren escalar")
- Authority signals: clients, case studies, results with numbers
- Avoid generic claims — be hyper-specific

**SAAS:**
- Hero = what the product does in plain language + who it's for
- Features as customer outcomes ("Stop losing leads" not "Lead tracking module")
- Demo/trial CTA as primary conversion
- Social proof = logos, review scores, user counts

**ECOMMERCE:**
- Sensory and emotional language on product descriptions
- Urgency and scarcity where appropriate
- Trust: reviews, guarantees, shipping info upfront
- Clear navigation to categories

---

## Step 4: Delivery Format

Present copy in clean sections with clear labels:

```
# [Business Name] — [Page Name] Copy

## [Section Name]
[Headline in **bold**]
[Body copy]
[CTA if applicable]

---

## [Next Section]
...
```

**Always include after delivery:**
- Suggested meta title (60 chars max) and meta description (155 chars)
- Notes on sections that need images/graphics
- Optional: FAQ schema recommendations
- Offer to create additional pages or refine sections

---

## Step 5: Quality Checklist

Before delivering, verify by business type:

**All types:**
- [ ] Primary keyword in H1
- [ ] Clear UVP in hero section
- [ ] 2-3 CTAs throughout page
- [ ] Benefit-driven headlines
- [ ] Short paragraphs (2-3 lines)
- [ ] "You" language dominant
- [ ] Active voice throughout
- [ ] Specific numbers/claims (not vague)

**LOCAL only:**
- [ ] City/region in first 100 words
- [ ] 2-3 location mentions throughout
- [ ] Areas Served section with 10+ locations
- [ ] "Near me" variant in problem-aware section

**SAAS only:**
- [ ] Free trial / demo CTA prominent
- [ ] Feature → Outcome framing
- [ ] Social proof with metrics (users, reviews, logos)

**ECOMMERCE only:**
- [ ] Conversion-first hero with product offer
- [ ] Trust signals (shipping, returns) visible early
- [ ] Category/product keywords in section headers

---

## Step 6: Iteration & Refinement

**Common revisions:**

**"Más corto"** → Keep top 5-6 sections, condense benefit blocks
**"Más keywords"** → Add semantic variations, check density
**"Otro tono"** → Ask: ¿Más formal? ¿Más coloquial? ¿Más técnico?
**"Esta sección no funciona"** → Ask what's off, revise only that section
**"Necesito meta tags"** → Generate title (60 chars) + description (155 chars)

**Proactive additions:**
- A/B headline variations
- Location-specific pages (for LOCAL)
- Use case pages (for SAAS)
- Blog topic clusters supporting SEO strategy

---

## Reference Files

### references/copywriting-patterns.md
Copy formulas, section structures, writing style guide.
**Load:** Every project.

### references/local-seo-guide.md
Geographic keyword layering, on-page local SEO, schema markup.
**Load:** Only for LOCAL and HYBRID business types.

### references/keyword-extraction.md
Competitor analysis, keyword extraction, intent mapping.
**Load:** When analyzing competitor URLs or when keywords are unclear.

---

## Notes

**Token efficiency:** Load references at the start of a project, not repeatedly.

**Language flexibility:** Can write in Spanish or English — match the client's language. Maintain same structure and SEO principles in either language.

**Don't over-explain the process:** Deliver copy, not SEO lectures. Keep the diagnostic process feel natural, not clinical.

**Default language:** If user is writing in Spanish, deliver copy in Spanish unless told otherwise.

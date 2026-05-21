# Design

## Visual Theme

**Premium desert-craft, sans-only, paleta committed.** Editorial en jerarquía y respiración, outdoor heritage en calor cromático y caracter. Tema base **claro** con secciones puntuales en carbón oscuro para impacto (CTAs, marca, momentos de "evidencia"). Sin cards apiladas iguales, sin gradientes decorativos, sin glassmorphism. La paleta del logo es la paleta del sitio.

**Scene sentence:** un homeowner discerning de Scottsdale revisa la web en su iPad un sábado por la tarde con luz cálida del desierto entrando por la ventana, comparando contra otras dos cotizaciones que ya tiene en el escritorio — necesita sentir competencia técnica al primer vistazo, no estridencia.

## Color Palette

OKLCH. Neutros tintados hacia el carbón frío del logo. Sin `#000`, sin `#fff`.

### Brand (committed, ~30–50% en momentos clave)

| Token | OKLCH | Uso |
|---|---|---|
| `--brand-orange` | `oklch(0.73 0.16 62)` | Naranja desert sunset. CTAs, wordmark, dunas, acentos de marca. El color que "carga" la página. |
| `--brand-orange-deep` | `oklch(0.62 0.18 50)` | Naranja más saturado/oscuro para hover, énfasis, sellos. |
| `--brand-green` | `oklch(0.56 0.13 144)` | Verde cactus. Soporte estructural — bordes finos, líneas IPM, icons, indicadores de cobertura del mapa. |
| `--brand-green-deep` | `oklch(0.42 0.11 148)` | Verde más oscuro para hover, fondos de sección secundarios. |

### Surface (base)

| Token | OKLCH | Uso |
|---|---|---|
| `--surface` | `oklch(0.985 0.006 80)` | Fondo principal — crema/marfil tintado cálido, NO blanco puro. |
| `--surface-warm` | `oklch(0.96 0.015 75)` | Fondo de sección secundaria, leve diferenciación. |
| `--surface-sand` | `oklch(0.91 0.04 78)` | Beige arena para secciones de soporte, sutil calor extra. |
| `--ink` | `oklch(0.22 0.012 220)` | Carbón frío para texto principal. Tinte azulado mínimo, hereda del fondo del logo. |
| `--ink-soft` | `oklch(0.42 0.01 220)` | Texto secundario / meta. |
| `--ink-faint` | `oklch(0.62 0.008 220)` | Captions, footnotes, separators de texto. |
| `--rule` | `oklch(0.85 0.008 220)` | Bordes/divisores finos. |

### Dark sections (impacto puntual)

| Token | OKLCH | Uso |
|---|---|---|
| `--dark` | `oklch(0.24 0.012 220)` | Fondo de sección oscura — testimonials, CTA final, footer. Mismo carbón del logo, ligeramente más profundo. |
| `--dark-soft` | `oklch(0.30 0.011 220)` | Cards/blocks dentro de secciones oscuras. |
| `--on-dark` | `oklch(0.94 0.012 80)` | Texto sobre fondos oscuros (crema, no blanco). |

### State

| Token | OKLCH | Uso |
|---|---|---|
| `--focus` | `oklch(0.65 0.18 60)` | Anillo de foco — naranja desaturado. Visible siempre. |
| `--success` | `oklch(0.58 0.12 148)` | Form success — verde, hereda de brand-green. |
| `--error` | `oklch(0.55 0.18 28)` | Errores de form — terracota desértico, NO rojo alerta puro. |

**Contraste verificado:** `--ink` sobre `--surface` ≈ 12:1 (AAA), `--ink` sobre `--surface-sand` ≈ 8:1, `--on-dark` sobre `--dark` ≈ 11:1.

## Typography

100% sans-serif. Cero serifs.

### Stack

- **Display**: `"Bricolage Grotesque"` variable, weights 600–800. Para H1/H2/eyebrows y declaraciones tipográficas grandes. Tiene caracter contemporáneo sin caer en grotesque genérico.
  - Fallback: `"Inter Tight", system-ui, -apple-system, sans-serif`
- **Body**: `"Inter"` variable, weights 400–600. Body, párrafos, UI, formularios.
  - Fallback: `system-ui, -apple-system, "Segoe UI", sans-serif`
- **Mono**: `"JetBrains Mono"` weights 400–500. Acentos técnicos — números de testimonio, coordenadas, IPM data tags, year markers, captions de caso.
  - Fallback: `ui-monospace, "SF Mono", Menlo, monospace`

Servir desde Google Fonts (self-hosted en build si Vite lo permite) con `font-display: swap`.

### Scale (clamp para responsive sin breakpoints discretos)

| Token | Size | Line-height | Tracking | Uso |
|---|---|---|---|---|
| `--text-display` | `clamp(3rem, 7vw, 6.5rem)` | 0.95 | -0.02em | Hero H1. Bricolage 700. |
| `--text-h1` | `clamp(2.25rem, 4.5vw, 4rem)` | 1.0 | -0.015em | Section H1. Bricolage 700. |
| `--text-h2` | `clamp(1.75rem, 3vw, 2.75rem)` | 1.05 | -0.01em | Section H2. Bricolage 600. |
| `--text-h3` | `clamp(1.25rem, 1.8vw, 1.6rem)` | 1.15 | -0.005em | Block titles. Bricolage 600. |
| `--text-body` | `1.0625rem` (17px) | 1.6 | 0 | Body. Inter 400. Cap a 65–72ch. |
| `--text-body-lg` | `1.1875rem` | 1.55 | 0 | Intros, subheads. Inter 400. |
| `--text-small` | `0.875rem` | 1.5 | 0 | UI secundario. Inter 500. |
| `--text-eyebrow` | `0.75rem` | 1.2 | 0.12em | Eyebrows UPPERCASE. Mono 500 o Inter 600 uppercase. |
| `--text-caption` | `0.8125rem` | 1.4 | 0 | Captions, meta. Mono 400 para acentos técnicos, Inter 400 normal. |

Ratio entre pasos ≥ 1.25. Hierarchy por scale + weight, no por color.

## Spacing & Layout

Sistema de 4px. Token de espaciado:

| Token | Value |
|---|---|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-6` | `1.5rem` |
| `--space-8` | `2rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |
| `--space-24` | `6rem` |
| `--space-32` | `8rem` |
| `--space-48` | `12rem` |

**Section rhythm:** secciones brand-heavy con `--space-32`/`--space-48` verticalmente. NO mismo padding en todas — variar para crear ritmo.

**Container:** `max-width: 1280px` ancho principal. `max-width: 72ch` para zonas de copy puro. Lecturas largas siempre limitadas en medida.

**Grid:** 12 col `gap: clamp(1rem, 2vw, 2rem)`. Asymmetric layouts > grids simétricos.

## Components & Patterns

**Buttons:**
- Primary: fondo `--brand-orange`, texto `--ink` (oscuro sobre naranja, contraste alto). Border-radius `6px` (no pill). Padding `0.875rem 1.5rem`. Hover: fondo `--brand-orange-deep`.
- Secondary: fondo `--ink`, texto `--on-dark`. Para CTAs sobre `--surface`.
- Ghost: border `1.5px solid --ink`, texto `--ink`. Hover: fondo `--ink`, texto `--on-dark`.
- Focus: outline 2px `--focus`, offset 2px.

**Forms:**
- Input border `1.5px solid --rule`, focus `1.5px solid --ink`. NO ring decorativo. Labels arriba, no placeholders como labels.
- Error inline debajo del input, color `--error`, icon mono ⚠ a la izquierda.

**Cards:**
- Solo cuando sea la mejor affordance. NO grids idénticos. NO nested cards. Cuando exista una card: fondo `--surface-warm` o `--surface-sand`, border `1px solid --rule`, radius `8px`, padding `--space-6`.

**Eyebrows:** UPPERCASE, tracking 0.12em, Mono 500 o Inter 600, color `--brand-orange` o `--ink-soft` según contexto.

**Section headers:** eyebrow + H2 con respiración generosa. NO repetir eyebrow + heading patrón monótono — variar tipografía y posición entre secciones.

**Bans heredados de impeccable (re-afirmados aquí):**
- Sin side-stripe borders.
- Sin gradient text.
- Sin glassmorphism decorativo.
- Sin hero-metric template (big number + small label + supporting stats).
- Sin grids de cards idénticas con icon+heading+text.
- Sin modal como primera respuesta.
- Cero em-dashes en copy (commas, colons, semicolons).

## Mascot

El búho del logo es un activo de marca, no un patrón reutilizable. Aparece en **uno, máximo dos momentos** del sitio entero:

- Opción A: footer, como spot icon respetado.
- Opción B: una sección de marca dedicada ("The Exclusive Difference" o equivalente) donde tiene rol semántico.

NO aparece en CTAs, NO en cada bloque, NO como cursor, NO animado de forma juguetona. Cuando aparece, lo hace en escala suficiente para verse bien (≥ 120px) y en contexto que dignifica el personaje.

## Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quart). Sin bounce, sin elastic.
- Duraciones: micro `150ms`, transitions `300ms`, reveals `600–800ms`.
- NO animar layout properties (`width`, `height`, `top`, etc.). Solo `transform`, `opacity`, `filter`, `clip-path`.
- Scroll-driven reveals atmosféricos donde aporten (no en cada bloque). Respeto a `prefers-reduced-motion: reduce` — fade-only o estático.
- Hover en CTAs: `transform: translateY(-1px)` + cambio de fondo, 200ms.

## Iconography

Sin librería pesada. Set propio de **line icons hechos a mano** con stroke `1.5px`, esquinas levemente redondeadas — diálogo sutil con el line-work del logo cartoon sin imitarlo.

Set inicial necesario: search, leaf (garden-safe), shield (protección), phone, mail, location, arrow-right, check, x, owl-spot (referencia a marca, uso limitado), chevron-down.

Si en algún punto necesitamos más volumen → Phosphor `light` o `regular`. Cero mezcla de sets.

## Imagery

- Fotografía documental real proporcionada por el cliente. Cuando llegue, prioridad foto del valle, casas reales, equipo trabajando, perímetros tratados, antes/después documentados.
- Mientras tanto: placeholders **tipográficos** o **monocromáticos planos** con un caption que describa qué foto va ahí. NO stock corporate, NO ilustraciones genéricas, NO gradientes decorativos como sustituto.
- Alt text descriptivo: "Técnico de Exclusive Pest Solutions sellando perímetro de fundación en residencia de Scottsdale", no "imagen 1".

# Antigravity Agent Brief — “Proposal as a Landing (React + Sass)”
Modelo: **Google Gemini Pro**  
Objetivo: crear un **repo en GitHub** con una **landing tipo deck** (propuesta comercial), deploy **en Vercel**, y lista para compartir al cliente con un link.

> Diseño visual: inspirado en **graftly.co** (look limpio, cards, CTAs claros, tipografía moderna, secciones tipo “process steps”). :contentReference[oaicite:7]{index=7}

---

## 1) Output esperado (obligatorio)
Entregar un repositorio con:
- Framework: **Next.js (App Router)** + React
- Styling: **Sass (.scss) con CSS Modules**  
  (Next.js soporta Sass de forma nativa instalando `sass`). :contentReference[oaicite:8]{index=8}
- Página única tipo “deck landing” (scroll vertical con secciones tipo slide).
- Responsive impecable.
- Contenido desde `content/proposal.es.json` (y preparado para `en.json` si se desea).
- README con pasos: run local + deploy Vercel + conectar GitHub.

Notas:
- Recomendado usar Next.js estable (Next.js 16 es la línea actual). :contentReference[oaicite:9]{index=9}
- Vercel soporta frameworks (Next) con configuración mínima. :contentReference[oaicite:10]{index=10}

---

## 2) Estructura del repo (recomendada)
- `app/page.tsx` (landing)
- `app/layout.tsx`
- `components/`
  - `Nav.tsx` (sticky, anchors)
  - `Hero.tsx`
  - `Section.tsx`
  - `PricingCard.tsx`
  - `BookingComparison.tsx`
  - `Timeline.tsx`
  - `Footer.tsx`
- `styles/`
  - `globals.scss` (tokens + base)
  - `mixins.scss`
- `content/`
  - `proposal.es.json`
- `public/`
  - `og.jpg` (placeholder)
  - `logo.svg` (placeholder)

---

## 3) UI/UX Requirements (muy importante)
- Estética “premium minimal”: fondo claro, texto fuerte, cards con borde suave, radius alto, sombras sutiles.
- Secciones tipo deck:
  1) Cover / Hero
  2) Objetivos
  3) Por qué Webflow (SEO + AIEO)
  4) Booking stack (Cloudbeds / Mews / SiteMinder)
  5) Alcance
  6) Sitemap
  7) Timeline
  8) Pricing (4380 + 200/mo)
  9) Next steps + CTA
- Navegación:
  - Sticky top nav con anchors (#objetivos, #booking, #pricing…)
  - Indicador de progreso (opcional, pero ideal).
- Animaciones: micro (fade/slide) suaves, sin librerías pesadas (CSS o minimal JS).

---

## 4) Contenido (debe incluir)
Usar exactamente estos datos:
- Hotel: Santa Eulària des Riu, Ibiza — 83 habitaciones — apertura 2027.
- Booking systems:
  - Cloudbeds: booking directo, enfoque mobile, embebible. :contentReference[oaicite:11]{index=11}
  - Mews: booking engine moderno, widget via script. :contentReference[oaicite:12]{index=12}
  - SiteMinder: conectividad 450+ canales. :contentReference[oaicite:13]{index=13}
- Webflow SEO tooling (metadata, redirects, etc.). :contentReference[oaicite:14]{index=14}
- Webflow Localization (ES/EN/FR/DE). :contentReference[oaicite:15]{index=15}
- Precio:
  - One-time: 4380 USD
  - Monthly: 200 USD

---

## 5) Setup técnico (que el agent debe ejecutar/generar)
1) Crear proyecto:
- `npx create-next-app@latest`
- App Router, TypeScript (sí), ESLint (sí)

2) Instalar Sass:
- `npm i sass` :contentReference[oaicite:16]{index=16}

3) Implementar estilos:
- `globals.scss` con CSS variables (tokens):
  - `--bg`, `--surface`, `--text`, `--muted`, `--border`
  - `--accent-1`, `--accent-2`, `--accent-3` (inspirados en la vibra Graftly)
  - `--radius-xl`, `--shadow-sm`, `--shadow-md`
- Usar `.module.scss` por componente.

4) SEO básico:
- `metadata` en `layout.tsx` (title, description, openGraph).
- OG placeholder en `/public`.

---

## 6) Deploy (Vercel) + GitHub (lo que debe documentar)
- Crear repo en GitHub y pushear.
- Conectar Vercel al repo.
- Deploy automático por branch `main`.
- Incluir en README: cómo obtener el link shareable al cliente.

---

## 7) “Definition of Done”
- `npm run dev` funciona.
- Lighthouse decente (sin assets pesados).
- Landing lista para compartir con URL de Vercel.
- Copy claro, estructura tipo deck, CTAs visibles.

---
## Prompt para Antigravity (pégalo tal cual)
**SYSTEM / ROLE**
Eres un senior frontend engineer + designer. Debes generar un repositorio completo en Next.js (App Router) con React + Sass (SCSS Modules), creando una landing tipo deck para una propuesta comercial. Entrega código production-ready, limpio y documentado.

**TASK**
Crea el proyecto, estructura carpetas, componentes, estilos (Sass), contenido (JSON), y README. El resultado debe estar listo para push a GitHub y deploy en Vercel. El diseño debe inspirarse en graftly.co: minimal, moderno, secciones en cards, CTAs claros y “process steps”. Incluye secciones: Hero, Objetivos, Webflow (SEO+AIEO), Booking comparison (Cloudbeds/Mews/SiteMinder), Alcance, Sitemap, Timeline, Pricing, Next steps.

**CONSTRAINTS**
- No usar Tailwind.
- Usar Sass Modules.
- No usar librerías pesadas.
- Mantener performance alto.
- Todo el copy en español, pero dejar preparado `proposal.en.json` (vacío o ejemplo).

**OUTPUT FORMAT**
Devuelve:
1) Árbol del repo
2) Archivos completos (contenido íntegro)
3) Instrucciones de deploy (README)


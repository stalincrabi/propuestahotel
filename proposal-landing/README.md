# Propuesta (Deck Landing) — Webflow Hotel Ibiza

Este repositorio contiene la landing page tipo "deck" para la propuesta comercial del Hotel Boutique en Ibiza (83 habitaciones).

## Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Sass (SCSS Modules) & CSS Variables
- **Contenido**: JSON (`content/`)

## Setup Local

1.  **Clonar repositorio**
    ```bash
    git clone <repo-url>
    cd proposal-deck-landing
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```
    *Nota: Asegúrate de tener instalado Sass (`npm i sass`).*

3.  **Correr servidor de desarrollo**
    ```bash
    npm run dev
    ```
    Visita `http://localhost:3000`.

## Deploy en Vercel

1.  Crear nuevo proyecto en Vercel.
2.  Importar este repositorio de GitHub.
3.  Mantener configuración por defecto (Next.js).
4.  Deploy.

## Estructura del Proyecto

- `app/`: Páginas y Layout (App Router).
- `components/`: Componentes reutilizables (Hero, Secciones, Cards).
- `content/`: Textos de la propuesta en JSON.
- `styles/`: Variables globales, mixins y estilos base.

## Créditos

Preparado por **Graftly**.

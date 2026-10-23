# joakimtveter.no

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d72e9aa-b0f9-4cf8-a73b-01684139d347/deploy-status)](https://app.netlify.com/projects/joakimtveter/deploys)

Source for [joakimtveter.no](https://joakimtveter.no), my personal site. Built with [Astro](https://astro.build) and Svelte, in Norwegian (`/`) and English (`/en`).

## Getting started

Requires Node.js (see `.nvmrc`) and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

## Commands

| Command             | Action                                            |
| :------------------ | :------------------------------------------------ |
| `pnpm install`      | Installs dependencies                             |
| `pnpm dev`          | Starts local dev server at `localhost:4321`       |
| `pnpm build`        | Type-checks and builds the site to `./dist/`      |
| `pnpm preview`      | Previews the production build locally             |
| `pnpm astro ...`    | Runs Astro CLI commands like `astro add`          |

## Project structure

- `src/pages/` – routes; English pages live in `src/pages/en/`
- `src/components/` – Astro and Svelte components
- `src/layouts/` – the shared page layout, including SEO meta tags
- `src/styles/` – global CSS
- `public/` – static files served as-is

The style guide at `/styles` is only available while running `pnpm dev`.

# Freelance Web Design Portfolio

A responsive portfolio for a freelance web designer offering remote website design to small businesses.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/web-design-portfolio/src/App.tsx` — portfolio page content and navigation
- `artifacts/web-design-portfolio/src/site-config.ts` — editable name, contact details, prices, and featured-project URL
- `artifacts/web-design-portfolio/src/index.css` — site styles and responsive behavior
- `artifacts/web-design-portfolio/index.html` — page title, SEO description, and social metadata

## Architecture decisions

- The portfolio is frontend-only; contact actions use WhatsApp and email links.
- Contact and identity details are centralized in `site-config.ts` so they can be replaced without editing page content.

## Product

- Presents freelance website-design services, three starting-price packages, a featured Royal Cuts Barbershop project, remote-work approach, and contact options.

## User preferences

- Do not invent client work or testimonials. Only represent projects and published links that the user has actually supplied.
- Keep contact information as explicit placeholders until the user provides real details.

## Gotchas

- The Royal Cuts URL is still a placeholder; set the URL and mark it non-placeholder in `site-config.ts` before linking to the published project.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

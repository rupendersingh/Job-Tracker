# Job Tracker

> **Deployment note:** this project was previously scaffolded with
> [Vinext](https://github.com/cloudflare/vinext) targeting Cloudflare Workers.
> It has been ported to a standard **Next.js static export** for Vercel
> deployment. The Vinext/Cloudflare build tooling (vinext, wrangler,
> @cloudflare/vite-plugin, drizzle, the Cloudflare worker, and the
> `scripts/`/`db/`/`examples/`/`.openai/` infrastructure) is no longer part of
> the deployed build.

A private, local-first job search workspace. Track applications on a kanban
board, log interviews, and review pipeline statistics.

## Features

- **Local-first:** all data is stored in your browser (IndexedDB for jobs and
  interviews, localStorage for theme and layout). Nothing leaves your machine
  unless you export it.
- **Kanban board** — drag jobs across Wishlist → Applied → Follow-up →
  Interview → Offer → Rejected.
- **Interview log** — schedule and note upcoming rounds.
- **Statistics** — pipeline health, application activity, conversion rates,
  response rates, and a yearly heatmap.
- **Backup & restore** — export a JSON backup and import it as needed.

## Tech stack

- [Next.js](https://nextjs.org) `16` with `output: "export"` (fully static)
- [React](https://react.dev) `19`
- [Tailwind CSS](https://tailwindcss.com) `4` (class-based dark mode)
- [dnd-kit](https://dndkit.com) for drag-and-drop
- [idb](https://www.npmjs.com/package/idb) for IndexedDB access

## Getting started

Requirements: Node.js 22.13+ and npm.

```bash
npm ci
npm run dev      # start the dev server
npm run build    # create the static export in out/
npm run start    # serve the production build
```

## Deployment

The project deploys to Vercel as a static export. See
[LOCAL_SETUP.md](./LOCAL_SETUP.md) for the full deployment steps.

### Repository layout

| Path               | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `app/`             | Next.js App Router source (pages, components, hooks) |
| `public/`          | Static assets (favicon, OG image, icons)       |
| `out/`             | Generated static build output (gitignored)     |
| `db/`, `worker/`, `examples/`, `.openai/`, `scripts/`, `build/` | Legacy Vinext/Cloudflare infrastructure (excluded from the build, retained for reference) |

## Privacy

Your job tracker data is stored solely in your browser. Nothing is sent to any
server. Use the app's Export button to download a backup before clearing
browser data or changing browsers.
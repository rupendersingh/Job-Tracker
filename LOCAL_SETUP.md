# Job Tracker

A private, local-first job search workspace that keeps every application moving.
Built with **Next.js (static export)** and deployed on **Vercel**.

- All data lives in your **browser** — jobs in IndexedDB, theme in localStorage.
- No backend, no database, no account required.
- Export a JSON backup anytime with the app's Export button; re-import to restore.

## Deploying on Vercel

1. Push this repo to GitHub or GitLab.
2. Import it in the Vercel dashboard (Framework Preset: **Next.js**).
3. Framework/build settings should auto-detect:
   - Build command: `next build`
   - Output directory: `out`
   - Install command: `npm ci`
4. Deploy. No environment variables or databases are required — the app
   runs entirely on the client.

Because the project uses `output: "export"`, the build produces `out/`
with purely static files served from Vercel's CDN.

## Local development

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # static export written to out/
npm run start   # serve the production build
npm run lint
```

## Backup & restore

The app is local-first and stores data only in the browser. Before clearing
browser data or moving to another machine, use the Export button to download
a JSON backup. Use Import to restore it.
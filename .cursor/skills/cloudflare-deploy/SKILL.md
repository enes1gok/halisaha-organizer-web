---
name: cloudflare-deploy
description: Builds, previews, and deploys HalıSaha web to Cloudflare Workers via OpenNext. Use for deploy, preview, wrangler, worker errors, or post-deploy verification.
---

# Cloudflare deploy

## Commands

| Goal | Command |
|------|---------|
| Dev (fast) | `pnpm dev` |
| Production-like local | `pnpm preview` |
| OpenNext artifact only | `pnpm build` (includes OpenNext bundle) |
| Deploy to Workers | `pnpm deploy` |

## Pre-deploy

1. Run quality gate (`lint` → `typecheck` → `test` → `build`).
2. For middleware/edge/OpenNext behavior, run `pnpm preview` — not only `next dev`.

## Config files

- `wrangler.jsonc` — worker name `halisaha-web`, entry `.open-next/worker.js`
- `open-next.config.ts` — OpenNext Cloudflare adapter
- `.github/workflows/ci.yml` — deploy on `main` with `CLOUDFLARE_*` secrets

## Deploy pitfalls

- `pnpm build` runs `next build` then `opennextjs-cloudflare build --skipNextBuild` (Workers Builds default is OK).
- Avoid `pnpm deploy` as Workers Builds deploy command when build already runs `pnpm build`.

## Post-deploy verification

Use Cloudflare MCP (observability):

1. Confirm worker `halisaha-web` is active.
2. Check 5xx on `/invite/match/*`, `/invite/group/*`, `/auth/callback`.
3. Consult docs MCP for OpenNext/Workers issues.

See README “Cloudflare MCP checklist” and `docs/adr/001-workers-opennext.md`.

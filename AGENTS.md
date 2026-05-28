# HalıSaha Web — Agent Guide

Marketing site and mobile deep-link fallback pages for **halisaha.cc**. Phase 2 will add a protected web panel with Supabase SSR.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS v4, Biome (lint/format)
- Cloudflare Workers via `@opennextjs/cloudflare`
- Vitest (unit tests in `tests/unit/`)

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Next.js dev server (localhost:3000) |
| `pnpm preview` | OpenNext + workerd (production-like) |
| `pnpm lint` | Biome check |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm test` | Vitest unit tests |
| `pnpm build` | Next.js build |
| `pnpm build:worker` | OpenNext build → `.open-next/` |
| `pnpm deploy` | OpenNext build + Wrangler deploy |

**CI order:** `lint` → `typecheck` → `test` → `build` (see `.github/workflows/ci.yml`).

## Directory map

| Path | Role |
|------|------|
| `src/app/` | App Router pages and layouts |
| `src/features/` | Pure domain logic (unit-tested) |
| `src/components/` | UI components |
| `src/lib/` | Env (Zod), constants |
| `src/middleware.ts` | Legacy `/match/*`, `/group/*` redirects |
| `tests/unit/` | Vitest tests |
| `docs/` | Architecture and ADRs |

Path alias: `@/*` → `src/*`.

## Before structural changes

Read [docs/architecture.md](docs/architecture.md) and update it when routes or deploy change.

## Route contract

| Path | Description |
|------|-------------|
| `/` | Marketing landing |
| `/invite/match/:code` | Match invite fallback (Universal Link) |
| `/invite/group/:code` | Group invite fallback |
| `/auth/callback` | Supabase email verify / password reset relay |
| `/.well-known/*` | iOS/Android App Links |
| `/match/*`, `/group/*` | Legacy → middleware redirects to `/invite/...` |

Canonical invite URL: `https://halisaha.cc/invite/{match|group}/{code}`.

## Cross-repo

**[halisaha-organizer](https://github.com/enesgok/halisaha-organizer)** (sibling repo):

- Supabase schema, RPC, RLS (source of truth for backend)
- Mobile deep link handlers (`halisaha://`)
- Invite/auth parity when changing web invite or callback flows

## Phases

- **Phase 1 (current):** Marketing, invite fallbacks, auth callback relay.
- **Phase 2 (planned):** `src/app/(app)/` protected panel, `@supabase/ssr`, env vars in `.env.example`.

Do not add Phase 2 code unless the task explicitly requests it.

## MCP hints

| Tool | When |
|------|------|
| **Codegraph** | Symbol lookup, call flow (`codegraph_context`, `codegraph_trace`) — prefer over grep loops |
| **Cloudflare docs/builds/observability** | Deploy, Workers runtime, post-deploy 5xx on `/invite/*`, `/auth/callback` |
| **Supabase MCP** | Phase 2 database/auth work (use official Supabase plugin skill for RLS/security) |

Project skills live in `.cursor/skills/`. Rules in `.cursor/rules/`.

## UI / Design

**Prerequisite:** Python 3.x (`python3 --version`) for design intelligence search.

| Resource | Path |
|----------|------|
| Brand + persisted design system | `design-system/halisaha/MASTER.md` |
| Page overrides | `design-system/halisaha/pages/landing.md`, `invite.md` |
| HalıSaha UI workflow | `.cursor/skills/halisaha-ui/` |
| UI UX Pro Max (upstream) | `.cursor/skills/ui-ux-pro-max/` |

**Install / update upstream:**

```bash
npx uipro-cli@latest init --ai cursor   # first time
npx uipro-cli@latest update               # upgrade
```

**Example search (from repo root):**

```bash
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "sports landing" --design-system -p "HalıSaha" -f markdown
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack nextjs
```

Always apply **HalıSaha Brand Overrides** in `MASTER.md` over generic uipro palettes. Colors/fonts: `src/styles/tokens.css`.

## Agent discipline

1. **Explore:** Codegraph first for “how does X work?”; grep only to confirm details.
2. **Scope:** Minimal diff; match existing patterns in `src/features/` and `src/components/`.
3. **Verify:** After meaningful changes run `pnpm lint && pnpm typecheck && pnpm test`.
4. **Production:** Use `pnpm preview` before relying on deploy-only behavior (edge, OpenNext).
5. **Secrets:** Never commit `.env`; never expose `service_role` or non-public Supabase keys in client code.

## Prohibitions

- Do not add ESLint/Prettier (Biome is the linter).
- Do not commit unless the user explicitly asks.
- Do not scatter `process.env` — extend `src/lib/env.ts` with Zod.

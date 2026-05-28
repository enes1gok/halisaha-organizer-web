---
name: add-feature-route
description: Scaffolds a new HalıSaha web feature with feature logic, components, App Router page, tests, and architecture docs. Use when adding pages, routes, or new user-facing flows.
---

# Add feature / route

## Workflow

Copy and track progress:

```
- [ ] Read docs/architecture.md
- [ ] UI-heavy? Run `halisaha-ui` workflow (design-system/halisaha/ first)
- [ ] Feature logic in src/features/<name>/
- [ ] UI in src/components/<area>/
- [ ] Page in src/app/...
- [ ] Unit tests in tests/unit/
- [ ] Update docs/architecture.md route table
- [ ] quality-gate (lint, typecheck, test, build)
```

## Step 1 — Feature logic

Create pure functions in `src/features/<domain>/`:

- No React imports
- Export types alongside functions
- Follow `invite-links.ts` / `parse-callback.ts` patterns

## Step 2 — Components

Add UI under `src/components/<area>/`:

- Server Components by default
- Turkish copy for user-visible strings
- Reuse `src/components/ui/` primitives when applicable

## Step 3 — App route

Add page under `src/app/`:

- Next 15: `params: Promise<{...}>`
- `generateMetadata` when SEO/title matters
- Invite-like pages: `robots: { index: false }`

## Step 4 — Tests

Add `tests/unit/<feature>.test.ts` covering happy path and edge cases.

## Step 5 — Documentation

Update `docs/architecture.md` route table. Add ADR in `docs/adr/` only for significant architectural decisions.

## Phase guard

If the feature belongs to the **web panel** (auth, dashboard, CRUD): confirm Phase 2 scope with the user before creating `src/app/(app)/`. Use `supabase-ssr-next` skill when Supabase is involved.

## Verify

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

For edge/middleware: `pnpm preview`.

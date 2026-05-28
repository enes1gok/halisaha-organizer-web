---
name: invite-deep-links
description: Manages HalıSaha invite URLs, Universal Links, and halisaha:// deep links. Use when editing /invite/* routes, invite-links.ts, .well-known files, middleware redirects, or mobile deep link parity.
---

# Invite & deep links

## Contract

- **Canonical web:** `https://halisaha.cc/invite/{match|group}/{code}`
- **App scheme:** `halisaha://invite/{match|group}/{code}`
- **Legacy web:** `/match/*`, `/group/*` → 302 to `/invite/...` via `src/middleware.ts`

Invite codes are participation secrets — treat shared URLs carefully.

## Key files

| File | Role |
|------|------|
| `src/features/invites/invite-links.ts` | URL build/parse (pure) |
| `src/features/invites/open-in-app.ts` | Client open-app helpers |
| `src/app/invite/match/[code]/page.tsx` | Match fallback UI |
| `src/app/invite/group/[code]/page.tsx` | Group fallback UI |
| `public/.well-known/assetlinks.json` | Android App Links |
| `public/.well-known/apple-app-site-association` | iOS Universal Links |

Route table: [reference.md](reference.md).

## Workflow

1. Read `src/features/invites/invite-links.ts` and existing tests.
2. Add or adjust **pure** parsers/builders in `src/features/invites/`.
3. Wire or update pages under `src/app/invite/`.
4. Extend `tests/unit/invite-links.test.ts` (scheme, HTTPS, edge cases).
5. If platform association changes, update `.well-known/*` files.
6. Cross-check **halisaha-organizer** mobile deep link handlers for parity.
7. Update `docs/architecture.md` route table if paths change.

## Metadata

Invite pages: `robots: { index: false }`, Turkish user-facing copy.

## Verify

```bash
pnpm test
pnpm preview   # if middleware or edge behavior changed
```

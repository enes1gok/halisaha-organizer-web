---
name: supabase-ssr-next
description: Scaffolds Supabase SSR for HalıSaha Phase 2 web panel in Next.js App Router. Use for (app) routes, auth guards, session cookies, or NEXT_PUBLIC_SUPABASE env setup.
---

# Supabase SSR (Phase 2)

> **Status:** Planned — `src/app/(app)/` does not exist. Confirm the task is Phase 2 before implementing.

## Role split

| Layer | Owner |
|-------|--------|
| RLS, migrations, security | Official **Supabase** plugin skill + halisaha-organizer schema |
| Next.js routes, layouts, guards | This skill + `supabase-phase2.mdc` rule |

## Prerequisites

1. Env vars in `.env.example` (uncomment and document):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Extend `src/lib/env.ts` Zod schema for new vars.
3. Install `@supabase/ssr` and `@supabase/supabase-js`.

## Scaffold checklist

See [reference.md](reference.md) for file-level checklist.

High level:

1. `src/lib/supabase/server.ts` — `createServerClient` for Server Components / Route Handlers
2. `src/lib/supabase/client.ts` — browser client for `"use client"` only
3. `src/app/(app)/layout.tsx` — session check, redirect to login if missing
4. `src/middleware.ts` — refresh session cookies (merge with existing legacy redirects)
5. Protected pages under `src/app/(app)/`

## Security

- RLS on all exposed tables (defined in halisaha-organizer migrations).
- Never use `user_metadata` for authorization.
- No `service_role` in frontend or `NEXT_PUBLIC_*`.

## Cross-repo

Align table/RPC usage with **halisaha-organizer** — same Supabase project as mobile.

## Verify

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
pnpm preview   # cookie/session on Workers edge
```

Test auth flows: login, protected route redirect, `/auth/callback` relay still works.

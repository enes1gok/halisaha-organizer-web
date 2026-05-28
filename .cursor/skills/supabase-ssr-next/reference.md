# Phase 2 Supabase scaffold checklist

## Environment

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key
```

Update `src/lib/env.ts`:

```typescript
const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://halisaha.cc"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});
```

## Suggested file tree

```
src/lib/supabase/
  server.ts       # createServerClient + cookies() for RSC
  client.ts       # createBrowserClient for client components
  middleware.ts   # optional: updateSession helper for middleware.ts

src/app/(app)/
  layout.tsx      # auth guard
  page.tsx        # dashboard entry (example)
  login/
    page.tsx      # if web login needed
```

## Middleware merge

Existing `src/middleware.ts` handles legacy `/match/*` and `/group/*` redirects.

When adding Supabase session refresh:

- Compose matchers carefully (avoid breaking legacy redirects)
- Follow `@supabase/ssr` middleware docs for cookie refresh

## Auth callback

Existing `/auth/callback` relays Supabase email flows to `halisaha://auth/callback`.

Web panel login may use a separate callback or extend this route — document in `docs/architecture.md`.

## Documentation updates

- [ ] `docs/architecture.md` — new `(app)` routes
- [ ] `.env.example` — uncomment Supabase vars
- [ ] `AGENTS.md` — mark Phase 2 as active when shipped
- [ ] Remove "planned" notes from `supabase-phase2.mdc` rule

## Dependencies (when implementing)

```bash
pnpm add @supabase/supabase-js @supabase/ssr
```

## Out of scope for this repo

- Database migrations (halisaha-organizer / Supabase CLI)
- RLS policy authoring (use Supabase MCP + plugin skill)

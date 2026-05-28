# HalıSaha Web — Mimari

## Route sözleşmesi

| Path | Açıklama |
|------|----------|
| `/` | Marketing landing |
| `/invite/match/:code` | Maç daveti fallback (Universal Link) |
| `/invite/group/:code` | Grup daveti fallback |
| `/auth/callback` | Supabase e-posta doğrulama / şifre sıfırlama relay |
| `/match/*`, `/group/*` | Legacy → middleware ile `/invite/...` redirect |
| `/.well-known/*` | iOS/Android App Links |

## Deploy

- **Runtime:** Cloudflare Workers (`@opennextjs/cloudflare`)
- **Komutlar:** `pnpm build` (Next + OpenNext), `pnpm preview` (workerd), `pnpm deploy` (production)
- **Workers Builds:** build `pnpm run build`, deploy `npx wrangler deploy` (tek production deploy yolu)
- **Domain:** `halisaha.cc` custom domain (Workers)

## Mobil repo

Backend ve domain tipleri: [halisaha-organizer](https://github.com/enesgok/halisaha-organizer) — Supabase RPC/RLS kaynağı.

## Faz 2 (planlanan)

- `src/app/(app)/` — korumalı web paneli
- `@supabase/ssr` + `NEXT_PUBLIC_SUPABASE_*`

# HalıSaha Web (`halisaha.cc`)

Marketing sitesi ve mobil uygulama deep link fallback sayfaları. Mobil uygulama: [halisaha-organizer](../halisaha-organizer).

## Stack

- Next.js 15 (App Router)
- TypeScript, Tailwind CSS v4, Biome
- Cloudflare Workers — `@opennextjs/cloudflare`
- Vitest (unit)

## Geliştirme

```bash
pnpm install
pnpm dev          # Next.js dev server (http://localhost:3000)
pnpm preview      # OpenNext + workerd (production'a yakın)
```

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `pnpm lint` | Biome check |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm test` | Vitest unit tests |
| `pnpm build` | Next.js build |
| `pnpm deploy` | OpenNext build + Cloudflare Workers deploy |

## Route'lar

- `/` — Landing
- `/invite/match/[code]` — Maç daveti
- `/invite/group/[code]` — Grup daveti
- `/auth/callback` — Supabase auth relay
- `/.well-known/apple-app-site-association` — iOS Universal Links
- `/.well-known/assetlinks.json` — Android App Links

Legacy: `/match/*` ve `/group/*` → middleware ile `/invite/*` yönlendirmesi.

## Deploy

1. Cloudflare'de `CLOUDFLARE_API_TOKEN` ve `CLOUDFLARE_ACCOUNT_ID` secret'larını GitHub'a ekleyin.
2. `main` branch push → GitHub Actions `deploy` job çalışır.
3. Yerel deploy: `pnpm deploy` (wrangler login gerekir).

Detay: [docs/architecture.md](docs/architecture.md)

## Faz 2

Web paneli (`src/app/(app)/`) ve Supabase SSR — `.env.example` içindeki değişkenlere bakın.

## Cloudflare MCP checklist (Cursor)

İnşa / deploy sonrası:

1. `migrate_pages_to_workers_guide` + `search_cloudflare_documentation`
2. `accounts_list` → doğru hesap
3. Deploy sonrası `workers_list` + `query_worker_observability` (5xx, `/invite/*`, `/auth/callback`)

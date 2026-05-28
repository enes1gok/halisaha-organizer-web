# ADR 001: Cloudflare Workers + OpenNext

## Durum

Kabul edildi.

## Bağlam

Statik Cloudflare Pages + `_redirects` yapısı Next.js App Router ve SSR hazırlığı için yetersizdi.

## Karar

Next.js 15 App Router + `@opennextjs/cloudflare` + `wrangler deploy` (Workers).

## Sonuçlar

- Universal Link route'ları korunur
- Faz 2'de Supabase SSR mümkün
- `pnpm preview` ile production runtime'a yakın test

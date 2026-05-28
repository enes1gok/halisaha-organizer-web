# Invite routes & well-known reference

## Web routes

| Path | Page | Metadata |
|------|------|----------|
| `/invite/match/[code]` | Match invite fallback | `robots: noindex` |
| `/invite/group/[code]` | Group invite fallback | `robots: noindex` |
| `/auth/callback` | Supabase auth relay | Client component |

## Legacy redirects (middleware)

| From | To |
|------|-----|
| `/match/:code` | `/invite/match/:code` |
| `/group/:code` | `/invite/group/:code` |

Matcher: `src/middleware.ts` — only `/match/:path*`, `/group/:path*`.

## URL parsing (`parseInviteUrl`)

Accepts:

- `https://halisaha.cc/invite/match/CODE`
- `https://halisaha.cc/invite/group/CODE`
- `halisaha://invite/match/CODE` (and group variant)

Returns `null` for non-invite URLs.

## Well-known

| File | Platform |
|------|----------|
| `public/.well-known/apple-app-site-association` | iOS Universal Links |
| `public/.well-known/assetlinks.json` | Android App Links |

Changes here require coordinated mobile app / store config updates.

## Cross-repo

**halisaha-organizer:** mobile handlers for `halisaha://` invite and auth callback paths.

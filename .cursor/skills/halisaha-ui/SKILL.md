---
name: halisaha-ui
description: Orchestrates HalıSaha web UI work with persisted design system and UI UX Pro Max search. Use for landing, marketing, redesign, UX, accessibility, Tailwind, invite cards, or Phase 2 panel UI.
---

# HalıSaha UI

Thin orchestrator — does not replace upstream `ui-ux-pro-max` skill. Enforces brand tokens and Turkish copy.

## Prerequisites

```bash
python3 --version   # required for search.py
```

## Workflow

```
- [ ] Read design-system/halisaha/MASTER.md (Brand Overrides section)
- [ ] Check design-system/halisaha/pages/<page>.md if building a known page
- [ ] Run search only if exploring new patterns (see below)
- [ ] Implement using tokens.css + existing components
- [ ] Run quality-gate (lint, typecheck, test, build)
```

### Step 1 — Design system files

| Page | Override file |
|------|----------------|
| `/` marketing | `pages/landing.md` |
| `/invite/*` | `pages/invite.md` |
| Other | `MASTER.md` only |

### Step 2 — UI Pro Max search (when needed)

From repo root:

```bash
# Full design system recommendation
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "<product keywords>" --design-system -p "HalıSaha" -f markdown

# Persist page override
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "<keywords>" --design-system --persist -p "HalıSaha" --page "<page>" -f markdown

# Next.js implementation guidance (required stack)
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "<keyword>" --stack nextjs

# Domain deep-dives
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain ux
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain landing
```

After regenerating `MASTER.md`, restore the **HalıSaha Brand Overrides** block if overwritten.

### Step 3 — Implement

- Reuse `@/components/ui/Button`, `RevealOnScroll`, `.field-bg`
- Colors/fonts from `src/styles/tokens.css` — ignore uipro light/rose palettes
- Copy in Turkish
- New routes: follow `add-feature-route` skill

### Step 4 — Pre-delivery

Apply `.cursor/rules/ui-marketing-web.mdc` checklist (contrast, motion, responsive, focus).

## Upstream skill

For full UI/UX Pro Max capabilities, also load `.cursor/skills/ui-ux-pro-max/SKILL.md`.

## Update upstream

```bash
npx uipro-cli@latest update
```

Do not hand-edit files inside `ui-ux-pro-max/` except after confirming they won't be overwritten.

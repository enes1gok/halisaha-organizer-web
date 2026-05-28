---
name: quality-gate
description: Runs lint, typecheck, test, and build in CI order for HalıSaha web. Use before PRs, when the user asks if changes are ready, or when fixing CI failures.
---

# Quality gate

Run commands in order; fix failures before proceeding.

## Checklist

```
- [ ] pnpm lint
- [ ] pnpm typecheck
- [ ] pnpm test
- [ ] pnpm build
```

Optional for deploy-related changes: `pnpm preview` (production-like Workers runtime).

## Workflow

1. Run `pnpm lint`. On failure: `pnpm lint:fix` if safe, else fix manually.
2. Run `pnpm typecheck`. Fix type errors at the source; avoid `as any`.
3. Run `pnpm test`. Add/update tests in `tests/unit/` for feature logic changes.
4. Run `pnpm build`. Resolve Next.js build errors.

## CI parity

Matches `.github/workflows/ci.yml` quality job. Deploy job runs separately on `main` after quality passes.

## When to stop

If a step fails after 2–3 fix attempts, summarize the error and proposed next step instead of looping.

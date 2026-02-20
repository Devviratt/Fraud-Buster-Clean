# Changelog

## v0.1.0 - 2026-02-20

### Release Summary
Initial formal release for Fraud Buster with production-ready routing fixes, dataset expansion, scoring hardening, and documentation/typing improvements.

### Tech Stack
- Frontend: React 18 + TypeScript
- Build Tooling: Vite 5
- Styling/UI: Tailwind CSS + Radix UI + Lucide
- State/Data: TanStack Query
- Testing: Vitest + Testing Library

### Highlights
- Routing updates:
  - `/` now opens Home (Landing)
  - `/dashboard` now opens Dashboard
  - stale `/landing` references removed to avoid 404s
- CTA update:
  - "View Code on GitHub" now points to the project repository
- Dataset improvements:
  - expanded behavioral dataset from 79 to 120+ users via controlled synthetic expansion
- Scoring engine quality pass:
  - added JSDoc and inline documentation
  - introduced stronger internal type aliases
  - improved naming clarity in scoring logic
  - added validation guards and normalization
  - added fail-safe error handling path in scoring pipeline

### Upgrade Notes
- Direct links to `/landing` should be replaced with `/`.
- Dashboard links should use `/dashboard`.

### Verification
- Test suite passing (`vitest run`)


# Implementation To-Do Phases

The following roadmap breaks work into sequential, testable phases to deliver the landing and checkout flow described in `docs/ARCHITECTURE.md` and `docs/FILE_STRUCTURE.md`.

## Phase 1 – Project Scaffold & Tooling
- Initialize the Next.js (App Router) project with TypeScript, Tailwind CSS, and Contentlayer dependencies.
- Configure linting, formatting, and basic CI scripts (e.g., `lint`, `typecheck`, `test` placeholders).
- Stub the directory layout outlined in the architecture and file structure guides.

**Verification**
- Run `npm run lint` to confirm lint rules execute without errors.
- Run `npm run typecheck` to ensure TypeScript compiles with the initial scaffolding.

## Phase 2 – Content Pipeline & Data Contracts
- Implement `contentlayer.config.ts` and add MDX stubs for testimonials, FAQ, authors, and launch copy.
- Create corresponding TypeScript helpers in `lib/` to load and validate content.
- Establish sample data to unblock UI development and document expected fields for editors.

**Verification**
- Execute `npm run contentlayer:build` (or equivalent) and ensure generated types compile cleanly.
- Add unit tests for content helpers (e.g., using Vitest/Jest) and run `npm test` to validate parsing logic.

## Phase 3 – Marketing Experience Assembly
- Build core server components (`Hero`, `ValueProps`, `BookShowcase`, etc.) and compose `app/(marketing)/launch/page.tsx`.
- Wire `lib/pricing.ts`, `lib/countdown.ts`, and MDX-driven copy into the page.
- Style the experience with Tailwind (and optional shadcn/ui primitives) for responsive design.

**Verification**
- Run `npm run lint` and `npm run typecheck` to catch regressions introduced by UI code.
- Launch the dev server (`npm run dev`) and complete a manual QA checklist (desktop + mobile viewport smoke tests, content rendering).

## Phase 4 – Conversion Flows & Analytics
- Implement `app/api/lead/route.ts` and `lib/esp.ts` for email capture (ConvertKit/Mailchimp).
- Add checkout link instrumentation, GA4/Meta Pixel event helpers, and A/B variant gating via `middleware.ts` and `lib/ab.ts`.
- Create the `/thank-you` page with upsell messaging and conversion tracking.

**Verification**
- Write integration tests (e.g., Playwright) for the lead capture flow and run `npm run test:e2e`.
- Trigger analytics helpers in a staging environment and confirm events appear with the expected payload (variant, SKU).

## Phase 5 – Launch Hardening & Deployment
- Configure environment variables (`.env.local.example`) and production-ready logging/observability (Sentry optional).
- Add edge caching considerations and finalize performance optimizations (image optimization, countdown behavior).
- Prepare deployment configuration for Vercel, including middleware and analytics tags.

**Verification**
- Execute `npm run build` to verify the production bundle succeeds with all environment variables configured.
- Run Lighthouse (via `npm run lint:performance` or Chrome DevTools) against the staging deployment to ensure core web vitals targets are met.
- Conduct end-to-end regression run (`npm run test:e2e`) post-deploy to validate critical paths (landing → checkout links → thank-you redirect).

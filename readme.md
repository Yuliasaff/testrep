# Landing & Checkout Launch Workspace

This repository contains the marketing experience for the training and nutrition launch. It follows the
architecture captured in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and the phase plan outlined in
[`docs/IMPLEMENTATION_TODO.md`](docs/IMPLEMENTATION_TODO.md).

## Phase 1 Snapshot
- Next.js App Router scaffold with TypeScript is in place.
- Tailwind CSS baseline configuration is set up.
- Contentlayer is included with a minimal config to unblock future MDX workflows (no generated content yet).
- Placeholder marketing routes, layouts, and components are present for rapid iteration.
- Lint (`npm run lint`) and type-check (`npm run typecheck`) scripts are wired for future CI usage.
- No API routes, analytics wiring, or ESP integrations are active—those arrive in later phases.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server (Contentlayer builds automatically via the `predev` script):
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to inspect the launch page scaffold.

## Useful Scripts
- `npm run dev` – start the Next.js development server.
- `npm run build` – create a production build (also runs `contentlayer build`).
- `npm run start` – serve the production build.
- `npm run lint` – execute Next.js ESLint checks.
- `npm run typecheck` – run the TypeScript compiler in no-emit mode.
- `npm run content:dev` / `npm run content:build` – interact with Contentlayer manually if needed.

## Repository Layout Highlights
- `app/(marketing)/launch` – landing page entry point (server component placeholder).
- `app/thank-you` – thank-you page scaffold for future conversion messaging.
- `components/` – placeholder React components representing the planned page sections.
- `content/` – MDX stubs that will drive copy once Contentlayer is fully configured.
- `docs/` – reference documentation for architecture, file structure, and phased delivery.
- `lib/` – currently empty; reserved for helpers introduced in later phases.

For next steps, continue with Phase 2 in [`docs/IMPLEMENTATION_TODO.md`](docs/IMPLEMENTATION_TODO.md) to flesh out the
content pipeline and supporting utilities.

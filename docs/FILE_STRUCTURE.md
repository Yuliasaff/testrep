# Optimized Project File Structure

This structure evolves the MVP layout into a scalable foundation that keeps marketing
pages, shared UI, data access, and infrastructure concerns organized. Use it as the
baseline when scaffolding the Next.js + TypeScript project described in
[`ARCHITECTURE.md`](./ARCHITECTURE.md).

```
.
├─ app
│  ├─ (marketing)
│  │  ├─ launch
│  │  │  ├─ components
│  │  │  │  ├─ Hero.tsx
│  │  │  │  ├─ ValueProps.tsx
│  │  │  │  ├─ BookShowcase.tsx
│  │  │  │  ├─ BundlePricing.tsx
│  │  │  │  ├─ Testimonials.tsx
│  │  │  │  ├─ SamplePreview.tsx
│  │  │  │  ├─ FAQ.tsx
│  │  │  │  ├─ Countdown.tsx
│  │  │  │  ├─ LeadCapture.tsx
│  │  │  │  └─ TrustBar.tsx
│  │  │  ├─ data
│  │  │  │  ├─ faq.ts
│  │  │  │  ├─ testimonials.ts
│  │  │  │  └─ launch-copy.ts
│  │  │  ├─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  └─ head.tsx
│  │  ├─ thank-you
│  │  │  ├─ components
│  │  │  │  ├─ Upsell.tsx
│  │  │  │  ├─ GettingStarted.tsx
│  │  │  │  └─ ShareActions.tsx
│  │  │  └─ page.tsx
│  │  └─ shared
│  │     ├─ marketing-layout.tsx
│  │     └─ metadata.ts
│  ├─ api
│  │  ├─ lead
│  │  │  ├─ validators.ts
│  │  │  └─ route.ts
│  │  └─ ab-assign
│  │     └─ route.ts
│  ├─ thank-you
│  │  └─ page.tsx
│  └─ layout.tsx
│
├─ components
│  ├─ ui                     # Base UI primitives (buttons, inputs, etc.)
│  ├─ form                   # Reusable form utilities & server actions
│  └─ analytics              # Client components for pixels, scripts
│
├─ content
│  ├─ authors
│  │  └─ index.mdx
│  ├─ faq
│  │  ├─ launch.mdx
│  │  └─ shared.mdx
│  ├─ testimonials
│  │  └─ index.mdx
│  └─ launch-copy.mdx
│
├─ lib
│  ├─ analytics
│  │  ├─ events.ts
│  │  └─ providers
│  │     ├─ ga4.ts
│  │     └─ meta.ts
│  ├─ ab
│  │  ├─ index.ts
│  │  └─ cookies.ts
│  ├─ config
│  │  ├─ env.server.ts
│  │  └─ env.client.ts
│  ├─ esp
│  │  ├─ convertkit.ts
│  │  ├─ mailchimp.ts
│  │  └─ index.ts
│  ├─ mdx
│  │  ├─ contentlayer.ts
│  │  └─ serializers.tsx
│  ├─ pricing.ts
│  └─ countdown.ts
│
├─ styles
│  ├─ globals.css
│  └─ tailwind.css
│
├─ middleware.ts
├─ contentlayer.config.ts
├─ next.config.js
├─ tailwind.config.ts
├─ postcss.config.js
├─ eslint.config.js
├─ tsconfig.json
├─ env.d.ts
├─ .env.local.example
└─ package.json
```

## Key Conventions

### App Directory
* **Route groups** (`(marketing)`) scope layouts and components to the marketing
  experience without interfering with future application routes.
* Feature routes own their **local components** and **data helpers** inside
  co-located folders to keep dependencies small and easier to refactor.
* The shared marketing layout lives in `app/(marketing)/shared` and can be
  re-used by additional campaigns.

### Components
* Use `/components/ui` for styling primitives that power design consistency,
  `/components/form` for shared form logic (validators, client hooks,
  server actions), and `/components/analytics` for pixel or tracking helpers.
* All route-specific sections remain co-located under the route’s
  `components/` folder to keep marketing copy modular.

### Content Layer
* The `content/` directory is organized by content type first, then variant.
  Editors can update copy without touching TypeScript.
* `lib/mdx/contentlayer.ts` centralizes Contentlayer configuration and exports
  typed helpers for loading MDX entries.

### Libraries
* `lib/config/env.*.ts` safely exposes env variables to the correct runtime
  (server vs client) with validation.
* Each integration (analytics, ESP) gets its own namespace to keep the
  surface area small and testable.

### Testing & Tooling
* Add route-level tests under `app/**/__tests__` when the project grows.
* Keep linting and formatting configs at the repository root for consistency.

This layout balances clarity for the marketing-focused MVP while leaving room for
future product surfaces, additional campaigns, and internal tooling.

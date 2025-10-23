## Tech Stack (MVP)

* **Framework:** Next.js (App Router) + **TypeScript**
* **Styling:** Tailwind CSS (+ optional shadcn/ui for primitives)
* **Content:** MDX via Contentlayer (authors, testimonials, FAQ, feature blocks)
* **Checkout:** External provider (e.g., DPD Cart / Gumroad / Lemon Squeezy) via SKU links in env
* **Forms:** Server action → ESP API (ConvertKit/Mailchimp) for email capture
* **Analytics:** GA4 (via GTM), Meta Pixel, Vercel Analytics (optional)
* **A/B Testing (MVP):** Edge Middleware cookie assignment + variant toggles (server components)
* **Deployment:** Vercel
* **Observability (optional but recommended):** Sentry

---

## Goals this MVP Covers

* High-converting landing page for **two books** (+ bundle)
* External checkout integration (no custom cart backend)
* Email capture (lead magnet / pre-launch or exit-intent)
* Measurable funnel: views → clicks → purchases
* Lightweight A/B testing on headline/hero/CTA copy
* Mobile-first, fast, SEO’d

---

## Directory Layout (minimal)

```
.
├─ app
│  ├─ (marketing)
│  │  └─ launch
│  │     ├─ page.tsx                 # Landing page (server component)
│  │     ├─ head.tsx                 # OpenGraph, Twitter meta
│  │     └─ layout.tsx               # Marketing layout
│  ├─ api
│  │  ├─ lead/route.ts               # POST email capture → ESP
│  │  └─ ab-assign/route.ts          # (Optional) API to debug test buckets
│  └─ thank-you
│     └─ page.tsx                    # Post-purchase upsell/CTA
│
├─ components
│  ├─ Hero.tsx
│  ├─ ValueProps.tsx
│  ├─ BookShowcase.tsx               # training + nutrition
│  ├─ BundlePricing.tsx              # price boxes + CTA
│  ├─ Testimonials.tsx
│  ├─ SamplePreview.tsx
│  ├─ FAQ.tsx
│  ├─ Countdown.tsx
│  ├─ LeadCapture.tsx
│  └─ TrustBar.tsx
│
├─ content                            # MDX content the team can edit without code
│  ├─ testimonials.mdx
│  ├─ faq.mdx
│  ├─ authors.mdx
│  └─ launch-copy.mdx                 # hero subtitle, bullets, etc.
│
├─ lib
│  ├─ analytics.ts                    # GA4/Pixel helpers
│  ├─ ab.ts                           # getVariant(req) + server-side gating
│  ├─ seo.ts                          # default SEO config
│  ├─ esp.ts                          # ConvertKit/Mailchimp client
│  ├─ pricing.ts                      # reads env/config for SKUs/URLs
│  └─ countdown.ts                    # derives remaining time from env
│
├─ middleware.ts                      # A/B assignment (edge)
├─ contentlayer.config.ts             # MDX → typed content
├─ tailwind.config.ts
├─ next.config.js
├─ .env.local.example
└─ package.json
```

---

## Environment Variables

```
# Checkout URLs (external provider)
CHECKOUT_URL_TRAINING=https://checkout.example.com/sku_training
CHECKOUT_URL_NUTRITION=https://checkout.example.com/sku_nutrition
CHECKOUT_URL_BUNDLE=https://checkout.example.com/sku_bundle

# Email Service (one of)
CONVERTKIT_API_KEY=xxxxx
CONVERTKIT_FORM_ID=xxxxx
# or Mailchimp
MAILCHIMP_API_KEY=xxxxx
MAILCHIMP_AUDIENCE_ID=xxxxx
MAILCHIMP_DC=usX

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL=XXXXXXXXXX

# Launch mechanics
LAUNCH_DEADLINE_UTC=2025-11-15T23:59:59Z
LAUNCH_DISCOUNT_PERCENT=20
```

---

## Routing & Pages

* `app/(marketing)/launch/page.tsx`
  Server component that:

  * Reads MDX content (copy, testimonials, FAQ).
  * Reads variant from `lib/ab.ts` and gates hero/CTA copy.
  * Pulls checkout URLs from `lib/pricing.ts` (env-backed).
  * Renders sections: `Hero`, `ValueProps`, `BookShowcase`, `BundlePricing`, `Testimonials`, `SamplePreview`, `FAQ`, `Countdown`, `LeadCapture`, `TrustBar`.

* `app/thank-you/page.tsx`

  * Shown after external provider redirects back.
  * Presents upsell (coaching/community), social share, and “getting started” steps.
  * Fires purchase conversion event (if query contains order_id/utm).

* `app/api/lead/route.ts`

  * `POST { email }` → `lib/esp.ts` (ConvertKit/Mailchimp)
  * Returns `{ ok: true }` or `{ ok: false, error }`
  * Rate-limit trivially (honeypot + basic debounce)

---

## A/B Testing (MVP)

* **Edge assignment** in `middleware.ts`:

  * If no `ab_launch_v1` cookie, randomly assign `A` or `B` (50/50).
  * Set cookie for 30 days; respect existing.
  * Use `request-cookies` in server components to render variant.
* **Variants** (keep to 1–2 elements initially):

  * Hero headline & CTA text.
  * (Optional second test) Button microcopy or price box highlighting.
* **Analytics**:

  * Include variant dimension in GA4 events (append `{ variant: 'A'|'B' }`).

---

## Data & Content (MDX via Contentlayer)

* **`content/launch-copy.mdx`**: headline/subtitle, bullets, guarantees, author blurbs.
* **`content/testimonials.mdx`**: array of `{ quote, name, title, avatar }`.
* **`content/faq.mdx`**: array of Q&A blocks.
* **`content/authors.mdx`**: bios + headshots.
* Editors can update copy without touching TSX.

---

## Checkout Integration (No Backend)

* Primary action is **link out** with SKU-specific URLs:

  * `CHECKOUT_URL_TRAINING`, `…_NUTRITION`, `…_BUNDLE`
* Add **UTM** and **variant** query params to links for attribution:

  * `?utm_source=site&utm_medium=landing&utm_campaign=launch&var=A`
* Ensure provider supports **post-purchase redirect** → `/thank-you`

---

## Email Capture

* `LeadCapture.tsx` uses **server action** or `fetch('/api/lead')`.
* Validate email, add honeypot, and disable button on submit.
* Fire “lead_submit” GA4 event (with variant).
* Offer “Sample Chapter PDF” delivery via ESP auto-response.

---

## Analytics Events (GA4)

* `page_view` (GA default via GTM)
* `cta_click` `{ sku: 'bundle|training|nutrition', variant }`
* `lead_submit` `{ variant }`
* `purchase_redirect` (on outbound click) `{ sku, variant }`
* `purchase_complete` (if provider appends params to thank-you) `{ value, currency, sku, variant }`

Meta Pixel: `ViewContent` (page), `Lead` (email capture), `InitiateCheckout` (outbound click), `Purchase` (thank-you).

---

## SEO & Performance

* Next/Image for book covers & author images
* Preload hero image; compress with `next/image`
* Metadata set via `head.tsx` (OG/Twitter cards for share)
* Lighthouse targets: FCP < 1.5s, LCP < 2.5s (3G emu), CLS < 0.1
* Use **edge caching** for static sections; only countdown needs dynamic

---

## Security & Privacy

* All secrets in env (never in client)
* ESP calls only from server routes / server actions
* Basic bot protection on `/api/lead` (honeypot + minimal rate limit)
* Cookie consent banner for analytics compliance (EU traffic)

---

## Minimal Package List

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "contentlayer": "^0.3.4",
    "next-contentlayer": "^0.3.4",
    "tailwindcss": "^3.4.0",
    "class-variance-authority": "^0.7.0",
    "lucide-react": "^0.441.0"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "typescript": "latest"
  }
}
```

---

## Implementation Cheatsheet

### 1) Variant assignment (`middleware.ts`)

```ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const cookie = req.cookies.get('ab_launch_v1')?.value;
  if (!cookie) {
    const variant = Math.random() < 0.5 ? 'A' : 'B';
    const res = NextResponse.next();
    res.cookies.set('ab_launch_v1', variant, { path: '/', httpOnly: false, maxAge: 60*60*24*30 });
    return res;
  }
  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next|api|static|.*\\..*).*)'] };
```

### 2) Read variant in server components

```ts
// lib/ab.ts
import { cookies } from 'next/headers';
export function getVariant() {
  return (cookies().get('ab_launch_v1')?.value as 'A'|'B') || 'A';
}
```

### 3) Countdown helper

```ts
// lib/countdown.ts
export function getDeadline() {
  const raw = process.env.LAUNCH_DEADLINE_UTC!;
  return new Date(raw);
}
```

### 4) Checkout URLs

```ts
// lib/pricing.ts
export const checkout = {
  training: process.env.CHECKOUT_URL_TRAINING!,
  nutrition: process.env.CHECKOUT_URL_NUTRITION!,
  bundle: process.env.CHECKOUT_URL_BUNDLE!,
};
```

### 5) Email capture route

```ts
// app/api/lead/route.ts
import { NextResponse } from 'next/server';
import { addToConvertKit } from '@/lib/esp';

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}));
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
  }
  try {
    await addToConvertKit(email);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'ESP error' }, { status: 500 });
  }
}
```

---

## Rollout Plan (MVP)

1. Scaffold Next.js + Tailwind; add Contentlayer and MDX content.
2. Build `launch` page sections with server components.
3. Wire checkout URLs, analytics, and email capture.
4. Add Edge A/B assignment with one simple variant (hero copy).
5. Add thank-you page with upsell and conversion event.
6. QA (desktop/mobile), Lighthouse, test ESP + checkout redirect.
7. Deploy to Vercel; set envs; turn on GTM + Meta Pixel.

---

## Nice-to-Haves (post-MVP)

* Smart geo pricing display (currency hints only; keep checkout canonical)
* Exit-intent modal offering sample chapter
* Micro-interactions (motion) and sticky CTA on mobile
* Structured data (Product, Offers, Reviews) for SEO
* Simple admin JSON (via KV or CMS) to update prices/links live

---

## File to Add

Create this file at: **`docs/ARCHITECTURE.md`** (contents = this document).

If you’d like, I can also generate:

* a ready-to-commit Next.js starter with the folders/files above,
* MDX content stubs for your team,
* and a first-pass `launch/page.tsx` using the components listed.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing / lead-generation site for **מאור זיני** (Maor Zini), an Israeli insurance & finance agent. Next.js 15 App Router, TypeScript, Tailwind. The entire site is Hebrew, right-to-left (`<html lang="he" dir="rtl">`); code comments are in Hebrew. Deployed on Vercel at `www.maorzini.co.il`.

## Commands

```bash
npm run dev          # local dev server (localhost:3000)
npm run build        # next build + next-sitemap (regenerates public/sitemap.xml)
npm run build:vercel # what Vercel actually runs — ESLINT_SKIP_VALIDATION=true + build
npm run lint         # next lint
npm run lint:fix     # next lint --fix
```

There is **no test suite**.

To inspect the fillable fields of a PDF template (essential before wiring up a new insurer form — see below):

```bash
node scripts/list-pdf-fields.mjs <absolute_path_to_pdf>
```

### Build safety is disabled

`next.config.js` sets `eslint.ignoreDuringBuilds: true` **and** `typescript.ignoreBuildErrors: true`. Builds will **not** fail on type errors or lint errors, so a green build does not mean the code type-checks. Run `npm run lint` explicitly, and don't rely on the build to catch type mistakes.

## Architecture

Standard App Router layout under `src/`, with `@/*` aliased to `src/*` (see [tsconfig.json](tsconfig.json)). Pages live in `src/app`, shared UI in `src/components`. [src/app/layout.tsx](src/app/layout.tsx) is the single shell for every page: header (`Navigation`), footer, mobile dual footer, floating WhatsApp button, accessibility widget, and the `ClientSchemaOrg` JSON-LD block.

### API routes (`src/app/api`)

All three are the real business logic of the site:

- **`contact/route.ts`** — validates + sanitizes a JSON contact form, then emails Maor via nodemailer (Gmail). In-memory rate limit (5 req / 15 min per IP).
- **`standing-order/route.ts`** — the most complex code in the repo (see next section). Accepts `multipart/form-data`, fills a bank standing-order PDF, and emails it to Maor **and** the client. Rate limit 10 req / hour per IP.
- **`branches/route.ts`** — Israeli bank-branch lookup. Fetches live from data.gov.il CKAN DataStore (`resource_id` in the file), **falls back** to `public/forms/bank_branches/snifim_he.csv` if CKAN is unavailable. Filters out internal/management branches.

Email requires `EMAIL_USER` and `EMAIL_PASS` env vars (Gmail account + app password). All recipient mail goes to `maor@maorz.co.il`.

> Rate limiting in all routes uses a module-level `Map`, which is per-instance. On Vercel's serverless/multi-instance runtime it does not enforce a global limit — the code comments acknowledge this.

### Standing-order PDF pipeline

This is the site's signature feature and where most maintenance effort goes.

- **Client**: [src/components/common/StandingOrderPopup.tsx](src/components/common/StandingOrderPopup.tsx) is a multi-step wizard (`intro → insurance → bank → form → upload / oneTimeInfo`). Insurance companies and their per-company PDF field quirks matter throughout. `depositAccounts.ts` holds the one-time-deposit bank account per insurer.
- **Server**: The route loads a template from `public/forms/<insurerId>.pdf`, embeds `public/fonts/NotoSansHebrew-Regular.ttf`, and fills it.
- **Hebrew is not set via AcroForm `setText`.** Instead the code reads each field widget's rectangle and **draws text on top of the page** at those coordinates (`drawInField`), right-aligned, because AcroForm text rendering does not handle the Hebrew font. Signatures arrive as a `signatureDataUrl` PNG and are drawn over the signature field's rectangle.
- **Field names differ per insurer.** `fillField([...aliases], value)` tries multiple candidate field names, and a `switch (insuranceId)` block adds company-specific mappings (harel, altshuler, clal, analyst, excelence, migdal, more, menora, meitav). Only insurers in the `supportedCompanies` array (or handled in the switch) get a generated PDF.

**To add or fix an insurer's form:** run `scripts/list-pdf-fields.mjs` on its `public/forms/*.pdf` to discover the real field names, then extend the `fillField` alias lists / switch case. Field-name typos in the source PDFs are common (the code already works around `ammoun1`, `bank_namr`, `branh_num`, etc.).

### Services routing — two parallel systems

- Static per-service pages exist as folders: `src/app/services/<slug>/page.tsx` (e.g. `health-insurance`, `pension-planning`). These are the ones linked from [src/app/services/page.tsx](src/app/services/page.tsx).
- There is **also** a `src/app/services/[slug]/page.tsx` dynamic route with its own hardcoded mock `services` object.

When editing service content, confirm which system renders the page you mean — the static folder usually wins for links in the grid.

### SEO

- Metadata is set in `layout.tsx` (site-wide) and per-page via exported `metadata`.
- `next-sitemap` (config: [next-sitemap.config.js](next-sitemap.config.js)) writes `public/sitemap.xml` on every build; `robots.txt` is committed manually (not generated). Site URL is hardcoded to `https://www.maorzini.co.il`.
- JSON-LD schema helpers live in `src/components/seo/schemas.ts`, rendered by `ClientSchemaOrg`.

### Security / headers

Security headers are declared in **both** [next.config.js](next.config.js) (full CSP, HSTS, X-Frame-Options, etc.) and [vercel.json](vercel.json). [middleware.ts](middleware.ts) redirects http→https; `vercel.json` redirects the apex `maorzini.co.il` → `www.maorzini.co.il`. If you add an external script/style/font/API host, update the CSP `connect-src`/`script-src`/etc. in `next.config.js` or it will be blocked (currently allows Google reCAPTCHA/fonts and `data.gov.il`).

## Conventions

- **Brand tokens** (Tailwind, [tailwind.config.js](tailwind.config.js)): `brandBlue #1B2A4E`, `brandGold #C0A16B`, `brandBeige #F1EFEA`, `brandGray #505050`; font `font-heebo`; `max-w-container` = 1240px. Use these rather than raw hex.
- Layout is RTL by default — mind logical direction (`right`/`left`, `space-x-reverse`) when adding UI.
- Interactive components are client components (`"use client"`); most content pages are server components.
- Root-level `temp.txt`, `temp_file.txt`, `temp_file2.tsx` are stray scratch files, not part of the app.

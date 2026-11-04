# Kitsap Fathers Group — Website

Public trust hub at [kitsapfathersgroup.org](https://kitsapfathersgroup.org).
Mobile-first, WCAG 2.2 AA goal, solo-maintainable.

Stack: Next.js (App Router) + Tailwind CSS + Vercel. Later milestones add
Sanity CMS and Plausible analytics. There is intentionally no Facebook API
code, accounts, donations, forums, CMS, analytics, or SEO pack in this
scaffold (see ticket KFGW-1).

## Run locally

Prerequisites: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Other commands:

- `npm run build` — production build (must pass with no errors)
- `npm start` — serve the production build
- `npm run lint` — lint

## How Vercel deploys

1. In the [Vercel dashboard](https://vercel.com/new), import the
   `GarrettSYHampton/kitsap-fathers-group-website` repository.
2. Use the defaults (Framework: Next.js, Build Command: `npm run build`).
   No environment variables are needed yet.
3. Every push to `main` auto-deploys to production. Every pull request gets
   its own preview URL.

## Custom domain: kitsapfathersgroup.org

DNS is **not** changed by this repo — follow these steps once in the Vercel
dashboard and at your DNS registrar:

1. In Vercel: open the project → **Settings → Domains** → add
   `kitsapfathersgroup.org` and `www.kitsapfathersgroup.org`. Vercel will
   show the DNS records it expects.
2. At your DNS registrar (where the domain was purchased), add the records
   Vercel shows — typically:
   - An `A` record for `@` (apex) pointing to `76.76.21.21`, or the
     `ANAME`/`ALIAS` value Vercel provides; and
   - A `CNAME` record for `www` pointing to `cname.vercel-dns.com`.
3. Back in Vercel, wait for the domain to verify. Vercel provisions HTTPS
   automatically; no certificate setup is needed.
4. Confirm the exact record values in the Vercel dashboard before saving —
   they take precedence over this README if they differ.

## Project layout

- `app/layout.tsx` — shared layout: skip-to-content link, header with site
  name and nav, footer with Facebook Group placeholder link plus
  privacy/terms/accessibility links.
- `app/page.tsx` — home page.
- `app/about`, `app/resources` — stub pages; full content lands in later
  milestones.
- `app/privacy`, `app/terms`, `app/accessibility` — stub legal pages.
- `app/globals.css` — Tailwind plus base styles: readable mobile type,
  `:focus-visible` outlines, skip-link styling.

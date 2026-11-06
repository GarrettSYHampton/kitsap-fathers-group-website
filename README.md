# kitsap-fathers-group-website

Fast, accessible hub for Kitsap Fathers Group — static site built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
deployed to Cloudflare Pages.

## Run it

Requires Node 18.17+.

```sh
npm install
npm run dev      # local server at http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build locally
npm run check    # Astro typecheck
```

## Structure

- `src/layouts/BaseLayout.astro` — shared head, skip link, header/footer
- `src/components/` — `Header.astro`, `Footer.astro`
- `src/pages/` — routes: home, events, resources, partners, volunteer, support,
  terms, privacy, photo-notice, 404
- `src/content/` — Content Collections: `events/`, `resources/`, `partners/`
  (placeholder entries; real content lands in later milestones)
- `src/consts.ts` — site strings, nav, Facebook link, fiscal-sponsor placeholders
- `docs/` — content audit (KFGW-1) and compliance freeze (KFGW-2)

## Compliance notes

Per `docs/compliance-freeze.md`: no “Donate” / tax-deductible language about
Kitsap Fathers Group directly, and support links must point at the fiscal
sponsor. The sponsor name/URL in `src/consts.ts` are placeholders until
confirmed — the Support page and footer disclosure fill in automatically.

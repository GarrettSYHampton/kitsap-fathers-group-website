# Kitsap Fathers Group — Live Site Content Audit (KFGW-1)

- **Audited:** 2026-11-04
- **Live site:** https://www.kitsapfathersgroup.org/ (apex `kitsapfathersgroup.org` 301-redirects to `www`)
- **Facebook:** https://www.facebook.com/groups/kitsapfathersgroup/ (private/login-walled; content not visible without membership)
- **Platform (observed):** Lovable-built single-page app (React SPA shell, `meta author="Lovable"`, client-rendered routes, no `sitemap.xml`). Favicon/og:image hosted on `storage.googleapis.com` (gpt-engineer uploads); some images hotlinked from an older Webflow CDN (`cdn.prod.website-files.com`).
- **Method:** fetched every nav route + every resource detail page with a JS-rendered fetcher; raw-HTML check via curl; web-index cross-check. Facebook group requires login, so only its existence/link placement was verified.
- **Contact found:** info@kitsapfathersgroup.org (footer "Contact Us", all pages). Footer notice: "© 2023-2026 Kitsap Fathers Group. All rights reserved."

## 1. Page inventory

All pages share the same `<title>` ("Kitsap Fathers Group") and meta description. Titles below are the on-page H1 / heading.

| URL | Page title (H1) | Verdict | Notes |
| --- | --- | --- | --- |
| https://www.kitsapfathersgroup.org/ | Empowering Dads Together | Rewrite | Keep hero + mission + 3 pillars (Community/Resources/Connect); rewrite body copy, fix "We aim to:" generic paragraph, unique title/meta. |
| https://www.kitsapfathersgroup.org/events | Upcoming Events | Rewrite | "Upcoming" section is empty; only "Past Events" (6 cards, all now in the past). Keep card pattern; needs a real upcoming feed + RSVP CTA. |
| https://www.kitsapfathersgroup.org/resources | Resources for Fathers | Rewrite | Keep 7 resource entries; rewrite into scannable directory with click-out links (current "Access Resource" buttons have no visible external URLs in rendered text). |
| https://www.kitsapfathersgroup.org/resources/211 | 211 | Keep | Core referral entry (KCR-adjacent 211 service). Keep; add click-out link + phone/text CTA. |
| https://www.kitsapfathersgroup.org/resources/bremerton-housing-authority | Bremerton Housing Authority | Keep | Keep; verify description with BHA. |
| https://www.kitsapfathersgroup.org/resources/experience-kitsap | Experience Kitsap | Keep | Activities guide. Keep with click-out link. |
| https://www.kitsapfathersgroup.org/resources/job-opportunities | Job Opportunities | Rewrite | Claims "curated list of employment opportunities" but shows no actual listings — either populate or reframe as links to job boards. |
| https://www.kitsapfathersgroup.org/resources/macaroni-kid-kitsap | Macaroni Kid Kitsap | Keep | Family-activity guide. Keep with click-out/subscribe link. |
| https://www.kitsapfathersgroup.org/resources/parenthelp123 | ParentHelp123 | Keep | Keep with click-out link. |
| https://www.kitsapfathersgroup.org/resources/withinreach | WithinReach | Keep | Health navigator. Keep with click-out link. |
| https://www.kitsapfathersgroup.org/partners | Our Community Partners | Rewrite | Keep 6 partner entries; add logo-permission verification + sponsor/fiscal-sponsor disclosure (see §5). |
| https://www.kitsapfathersgroup.org/about-us | Who We Are | Rewrite | Keep mission/values/what-we-do skeleton; rewrite copy, add founder/leadership, nonprofit-status statement. |
| https://www.kitsapfathersgroup.org/join | Join Our Community | Rewrite | Contact form (Name/Email/Phone/Message + Role/Engagement/Interest checkboxes). No privacy notice, no stated data use — must add before relaunch. |
| https://www.facebook.com/groups/kitsapfathersgroup/ | (Facebook Group, login-walled) | Keep (link only) | Linked in header nav + footer on every page. Keep as outbound link; no API per project scope. |
| Missing: /privacy, /terms | — | **Add** | No Terms or Privacy Policy anywhere on site (footer has no legal links). Required for milestone 2. |
| Missing: /donate or support page | — | **Add (fiscal-sponsor link)** | No donate page exists; only a "Donations" interest checkbox on /join. Do not add direct-donation language (out of scope v1). |

## 2. Event examples (from /events — all currently "Past Events")

| Event | Date | Location | Image |
| --- | --- | --- | --- |
| Bremerton Air Show 2026 | July 11–12, 2026 | Bremerton National Airport | Yes (`lovable-uploads/bremerton-airshow-2026.png`) |
| 76th Annual Kids Fishing Party | April 25, 2026 | Jarstad Park, Gorst | Yes (`lovable-uploads/kids-fishing-party-2026.png`) |
| July 2025 — Meet and Greet BBQ | July 19, 2025 | 1701 5th St, Bremerton, WA 98337 | Yes (Webflow CDN, AI-generated image) |
| May 2025 — Kitsap STEAM Expo | May 31, 2025 | 725 Park Ave, Bremerton, WA 98337 | Yes (Webflow CDN flyer) |
| April 2025 — Meet and Greet | April 26, 2025 | 2901 Perry Ave NE, Bremerton, WA 98310 | Yes (Webflow CDN photo) |
| Adult 21+ Flashlight Egg Hunt | April 12, 2025 | 3900 SW Lake Flora Rd, Port Orchard, WA 98366 | Yes (Webflow CDN photo) |

Notes: "Learn More" buttons on cards expose no URLs in rendered content — likely dead or modal-only. No RSVP mechanism, calendar embed, or QR check-in exists yet.

## 3. Partners & resources — logo/image presence

### Partners (/partners) — 6 entries

| Partner | Category | Location shown | Logo/image present? | Image host |
| --- | --- | --- | --- | --- |
| Kitsap Community Resources (KCR) | Community Services | Bremerton, WA | Yes | `lovable-uploads/kitsap-community-resources-logo.png` |
| Bremerton Family YMCA | Health & Wellness | Bremerton, WA | Yes | `lovable-uploads/bremerton-family-ymca.jpg` |
| Kitsap Mental Health Services | Mental Health | Port Orchard, WA | Yes | `lovable-uploads/kitsap-mental-health-services-logo.svg` |
| Kitsap Regional Library | Education | Multiple Locations | Yes | `lovable-uploads/kitsap-regional-library-logo.png` |
| Boys & Girls Club of South Puget Sound | Youth Development | Bremerton, WA | Yes | `lovable-uploads/boys-girls-club-logo.png` |
| Peninsula Community Health Services | Healthcare | Bremerton, WA | Yes | `lovable-uploads/peninsula-community-health-services-logo.png` |

⚠️ Logo-permission status is unknown for all six — verify written permission before relaunch (new site must track "logo permissions" per project brief).

### Resources (/resources + detail pages) — 7 entries

| Resource | Type label | Logo/image present? | Image host |
| --- | --- | --- | --- |
| 211 | Support Directory | Yes (banner graphic) | `lovable-uploads/211-resource.png` |
| Bremerton Housing Authority | Housing Support | Yes (Bay Vista photo) | Webflow CDN |
| Experience Kitsap | Activities Guide | Yes (photo) | Webflow CDN |
| Job Opportunities | Employment Directory | Yes (stock photo) | Webflow CDN |
| Macaroni Kid Kitsap | Activities Guide | Yes (graphic) | Webflow CDN |
| ParentHelp123 | Support Directory | Yes (graphic) | Webflow CDN |
| WithinReach | Health Support | Yes (website banner) | Webflow CDN |

⚠️ 6 of 7 resource images are hotlinked from a legacy Webflow CDN (`cdn.prod.website-files.com/6578986395289871b26412a1/...`) — fragile dependency; self-host on relaunch.

## 4. Donate / tax wording — exact quotes

No "Donate" page, button, or link exists. No "tax-deductible" (or "tax deductible") wording appears on any fetched page. The only money-related strings found:

| # | Exact quote | URL | Context / risk |
| --- | --- | --- | --- |
| 1 | `Donations` | https://www.kitsapfathersgroup.org/join | Checkbox label under "Your Engagement" (alongside "Volunteer", "Member"). No explanation of what selecting it does, no donate link, no amount/purpose. |
| 2 | `A non-profit helping fathers in Kitsap County.` | https://www.laurenhampton.me/portfolio/web-design-and-socials (third-party portfolio, NOT the live site) | External designer portfolio describes a "Published webpage for Kitsap Fathers Group" this way. Not a claim on the site itself, but shows public perception; confirm actual 501(c)(3)/fiscal-sponsor status and state it explicitly on the new site. |

**Bottom line:** no live-site "tax-deductible / Donate" claim to pause — but also no nonprofit-status or fiscal-sponsor disclosure anywhere. Per milestone 1, keep it that way until fiscal-sponsor link + disclosure copy is approved; clarify what the /join "Donations" checkbox means or remove it.

## 5. Risk flags

1. **No Terms / Privacy Policy (HIGH).** No legal pages, no footer links, no cookie/analytics notice — yet /join collects Name/Email/Phone/Message. Required: Terms + MHMDA-minimal Privacy Policy + form consent notice (milestone 2 scope).
2. **Missing nonprofit / sponsor disclosure (HIGH).** Zero statements of 501(c)(3) status, fiscal sponsorship, or partner relationship nature. Third-party portfolio calls the org "a non-profit". Do not imply deductibility; add approved sponsor-disclosure block.
3. **"Donations" checkbox with no meaning (MEDIUM).** /join invites a "Donations" engagement with no follow-through, purpose, or recipient disclosure. Remove or wire to fiscal-sponsor link with disclosure.
4. **Unverified partner logos (MEDIUM).** Six partner logos displayed; no evidence of permission. Re-confirm before carrying into new site; log permissions in CMS.
5. **Accessibility problems (MEDIUM, pre-WCAG-AA):**
   - Client-rendered SPA: raw HTML is an empty `#root` div — no content without JS (breaks no-JS users, some AT/reader modes, and SEO).
   - One shared `<title>` and meta description on all 13 pages (orientation/SEO failure).
   - Images use generic or missing alt text (observed alts repeat the org name, e.g. header logo and footer image both alt "Kitsap Fathers Group"); decorative vs. informative not distinguished.
   - "Learn More" / "Access Resource" / "Share Resource" controls expose no href/announced destination in rendered output — likely non-semantic buttons or dead links (keyboard/SR risk).
   - Form on /join: required-field marking is visual (`Name *`) with unknown programmatic `required`/label association; checkbox groups ("Your Role/Engagement/Interests") need fieldset/legend checks on relaunch.
   - No skip link, no visible focus-style evidence, and no accessibility statement page found.
6. **"Online forums" claim without a forum (LOW).** Home page "Connecting Fathers" pillar says "Through our online forums…" — no forum exists on site (Facebook group is the actual venue). Rewrite to avoid misrepresentation.
7. **Job Opportunities page promises listings it doesn't have (LOW).** "Curated list of employment opportunities" with zero listings — populate, link out, or reframe.
8. **Stale events + empty "Upcoming Events" (LOW).** Page headline promises upcoming events; all 6 are past. Risks looking abandoned; seed with real upcoming dates + RSVP at relaunch.
9. **Fragile third-party image hosting (LOW).** Favicon/og:image on `storage.googleapis.com` uploader bucket; 6 resource + 4 event images on legacy Webflow CDN. Self-host everything in the new build.
10. **SEO fragility (LOW).** No `sitemap.xml` (returns "Not found"), single title/description, JS-only content. New Astro static build resolves this structurally.

## 6. Images / logos inventory (all observed assets)

| Asset | URL | Used on |
| --- | --- | --- |
| Header logo (KFG) | `https://www.kitsapfathersgroup.org/lovable-uploads/60daeff1-95f9-4545-b78e-a8d8783e7cd8.png` | All pages (header) |
| Footer graphic (KFG) | `https://www.kitsapfathersgroup.org/lovable-uploads/6dc18a38-e3a0-47aa-b2d4-c1101f141c08.png` | All pages (footer) |
| Favicon | `https://storage.googleapis.com/gpt-engineer-file-uploads/p8YG4hzsfwViOvjgGX0ZAw70itk1/uploads/1761052366369-favicon.png` | Browser tab |
| og:image / twitter:image | `https://storage.googleapis.com/gpt-engineer-file-uploads/p8YG4hzsfwViOvjgGX0ZAw70itk1/social-images/social-1768051796566-Screenshot 2026-01-10 052935.png` | Social shares |
| 6 partner logos | `/lovable-uploads/<partner>-logo.(png/jpg/svg)` — see §3 | /partners |
| 211 banner | `/lovable-uploads/211-resource.png` | /resources, /resources/211 |
| 2 event graphics (2026) | `/lovable-uploads/bremerton-airshow-2026.png`, `/lovable-uploads/kids-fishing-party-2026.png` | /events |
| 4 event images (2025) | Webflow CDN (`cdn.prod.website-files.com/...`) | /events |
| 6 resource images | Webflow CDN (`cdn.prod.website-files.com/...`) | /resources + detail pages |

## 7. Top 10 keep-list for the new site

1. **Mission + "By Fathers, For Fathers" positioning** — hero and /about-us core message; rewrite, don't drop.
2. **Facebook Group link** (header + footer pattern) — primary conversion path; keep prominent, link-only.
3. **info@kitsapfathersgroup.org contact path** — keep in footer; add response-time expectation.
4. **211 resource entry** — highest-value referral; add click-out + call/text CTA.
5. **KCR + YMCA partner entries** — anchor local credibility; re-confirm logo permission.
6. **Remaining 4 partners + 6 resources** — keep as directory content with verified descriptions and outbound links.
7. **Events card pattern** (title/date/location/image) — keep design; seed with real upcoming events + RSVP/QR flow.
8. **Meet & Greet format** (recurring low-key gatherings) — proven event template from 2025 history.
9. **/join form's Role/Interest segmentation** (Mother/Father/Provider; Hangout/Classes/Volunteering/Fishing/Camping) — useful intake taxonomy; rebuild with consent notice + email-list opt-in.
10. **"© 2023-2026" continuity signal** — org history dating to 2023; restate as founded-story on new About page.

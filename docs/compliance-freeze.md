# Compliance Freeze: Deductible Claims Paused + Fiscal-Sponsor Disclosure (KFGW-2)

- **Status:** IN EFFECT — freeze holds until fiscal-sponsor name/link are confirmed and this doc is updated.
- **Date:** 2026-11-04
- **Applies to:** live site (https://www.kitsapfathersgroup.org/, Lovable SPA), Facebook Group posts, email captures, and any new-site drafts.
- **Placeholders (do NOT guess real values):** `FISCAL_SPONSOR_NAME`, `FISCAL_SPONSOR_DONATE_URL`
- **Out of scope (do not build):** custom donation form, payment processing, accounts/login, grant portal.

## 1. Rule

Kitsap Fathers Group is fiscally sponsored. Until the sponsor link is confirmed:

1. No page may claim tax-deductible status for Kitsap Fathers Group directly.
2. Every support button must link to `FISCAL_SPONSOR_DONATE_URL` and say it is via the fiscal sponsor.
3. Every support placement must carry the disclosure sentence (§2).

## 2. Required copy (exact text)

### Support button label (use verbatim)

```text
Support via our fiscal sponsor
```

### Disclosure sentence (use verbatim, fill placeholders only)

```text
Contributions are received by FISCAL_SPONSOR_NAME, our fiscal sponsor; any tax deductibility is through FISCAL_SPONSOR_NAME, not through Kitsap Fathers Group directly.
```

### Short disclosure (only where space is tight, e.g. small badges; link must still go to the sponsor URL)

```text
Via our fiscal sponsor, FISCAL_SPONSOR_NAME.
```

### Banned vs. required language

| Do NOT use (banned) | Use instead |
| --- | --- |
| `Donate`, `Donate Now`, `Donations` (as a giving CTA) | `Support via our fiscal sponsor` |
| `tax-deductible`, `tax deductible`, `Your gift is tax-deductible` (about Kitsap Fathers directly) | Disclosure sentence above |
| `a 501(c)(3) nonprofit`, `a non-profit` (about Kitsap Fathers directly) | `a fiscally sponsored project of FISCAL_SPONSOR_NAME` |
| Any donate button linking anywhere except `FISCAL_SPONSOR_DONATE_URL` | Button linking to `FISCAL_SPONSOR_DONATE_URL` |

## 3. Live-site locations to change (from [audit.md](audit.md) §4)

No old site files exist in this repo, so these are hotfix instructions for the current CMS (Lovable editor), not repo file edits:

| # | Location | Current text | Action |
| --- | --- | --- | --- |
| 1 | `/join` — "Your Engagement" checkboxes | `Donations` checkbox label | REMOVE the checkbox (preferred), or replace with snippet C below. Do not leave a bare `Donations` option with no recipient disclosure. |
| 2 | All pages — header nav (if a Support link is added) | — | Add nav item using snippet A. Label must be `Support via our fiscal sponsor`. |
| 3 | All pages — footer (if a Support link is added) | — | Add footer link + disclosure using snippet B. |
| 4 | New `/support` or `/donate` page (audit §1 says "Add") | — | If created before sponsor is confirmed, build ONLY from snippet D. Do not publish a page titled "Donate". |
| 5 | Facebook Group pinned post / About (link only) | — | Use snippet E if fundraising is mentioned at all. |

Verified 2026-11-04: other than the `/join` checkbox above, no page on the live site currently claims deductible status or shows a Donate button — this freeze keeps it that way.

## 4. Copy-paste snippets for the current CMS

Substitute the two placeholders when the sponsor is confirmed; change nothing else.

### A. Support button (HTML — header, hero, or page body)

```html
<a href="FISCAL_SPONSOR_DONATE_URL" target="_blank" rel="noopener" aria-label="Support via our fiscal sponsor (opens FISCAL_SPONSOR_NAME donation page in a new tab)">Support via our fiscal sponsor</a>
<p><small>Contributions are received by FISCAL_SPONSOR_NAME, our fiscal sponsor; any tax deductibility is through FISCAL_SPONSOR_NAME, not through Kitsap Fathers Group directly.</small></p>
```

### B. Footer support line (HTML)

```html
<p><a href="FISCAL_SPONSOR_DONATE_URL" target="_blank" rel="noopener">Support via our fiscal sponsor</a><br><small>Contributions are received by FISCAL_SPONSOR_NAME, our fiscal sponsor; any tax deductibility is through FISCAL_SPONSOR_NAME, not through Kitsap Fathers Group directly.</small></p>
```

### C. `/join` form replacement for the `Donations` checkbox (rich text under "Your Engagement")

```text
Want to give? [Support via our fiscal sponsor](FISCAL_SPONSOR_DONATE_URL) — contributions are received by FISCAL_SPONSOR_NAME, our fiscal sponsor; any tax deductibility is through FISCAL_SPONSOR_NAME, not through Kitsap Fathers Group directly.
```

### D. Minimal `/support` page body (rich text / Markdown)

```markdown
# Support Kitsap Fathers Group

Kitsap Fathers Group is a fiscally sponsored project of FISCAL_SPONSOR_NAME.

[Support via our fiscal sponsor](FISCAL_SPONSOR_DONATE_URL)

Contributions are received by FISCAL_SPONSOR_NAME, our fiscal sponsor; any tax deductibility is through FISCAL_SPONSOR_NAME, not through Kitsap Fathers Group directly.
```

### E. Facebook / email one-liner (plain text)

```text
Support our work: Support via our fiscal sponsor — FISCAL_SPONSOR_DONATE_URL. Contributions are received by FISCAL_SPONSOR_NAME, our fiscal sponsor; any tax deductibility is through FISCAL_SPONSOR_NAME, not through Kitsap Fathers Group directly.
```

## 5. Acceptance-check procedure

Run before lifting the freeze or publishing sponsor details:

- [ ] Site-wide search for `deductible`, `deductibility`, `Donate`, `Donation`, `501(c)(3)`, `non-profit`, `nonprofit` returns zero direct claims about Kitsap Fathers (only this doc's banned-phrase table and the disclosure sentence may match).
- [ ] Every support button reads `Support via our fiscal sponsor` and links to `FISCAL_SPONSOR_DONATE_URL` (placeholder until confirmed).
- [ ] Disclosure sentence from §2 appears with every support placement.
- [ ] `/join` has no bare `Donations` checkbox.

## 6. Lifting the freeze

When the sponsor is confirmed: replace `FISCAL_SPONSOR_NAME` and `FISCAL_SPONSOR_DONATE_URL` in this doc and in every placed snippet, re-run the §5 checklist, then record the date + sponsor name here.

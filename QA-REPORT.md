# SEO Overhaul QA Report — 2026-11-04

## Summary

44 files changed (33 modified, 11 new). All eight directive parts addressed in a single pass.

---

## Part 1: Repairs

| Item | Status | Notes |
|------|--------|-------|
| 1.1 Build /privacy | Done | New page: `privacy.html` — covers login form data, visit logging, cookies, Cloudflare, data-not-collected |
| 1.2 Wire 9 dead # links on / | Done | Also fixed login.html footer links (About Us, Terms, Privacy, Site Map) |
| 1.3 Fix Safari login bug | Done | Moved form handler from `requestIdleCallback` to `DOMContentLoaded` on index.html and login.html |
| 1.4 Reduce robots.txt | Done | 142-line per-agent file → 7-line minimal (Allow: /, Disallow: /api/, /dashboard, /verify) |
| 1.5 Remove Content-Signal header | Done | Stripped from SECURITY_HEADERS in middleware |
| 1.6 Title ≤60 chars + real H1 | Done | index.html title: 52 chars, visible H1 added |
| 1.7 Schema @id cross-reference | Done | WebSite `@id: "#website"`, Organization `@id: "#organization"`, sameAs filled |
| 1.8 Delete meta keywords sitewide | Done | Removed from all 26+ HTML files |
| 1.9 Move inline styles to CSS | Done | SEO content section styles moved to `css/styles.css` (.seo-content, .seo-faq, .portal-h1) |

Additional repairs found during QA:
- Fixed remaining `href="#"` links on 7 pages (benefits-guide, contact-af, claims-help, faq-af, security-af, register, verify)
- Duplicate title between index.html and login.html resolved (login.html → "American Fidelity Sign In — Benefits Account Access")

---

## Part 2-3: Keyword Ownership & Title/Description Optimization

All 24 pages with titles >60 chars have been trimmed to ≤60 chars. OG and Twitter titles aligned.

### T4 Verification Result

**Premise:** AF administers FSA/HSA/HRA on secured-americanfidelity.com.  
**Verification:** AF administers reimbursement accounts through **afadvantage.com**, a separate domain. americanfidelity.com/support pages direct HCFSA, LPFSA, and HSA account holders to afadvantage.com for online access.  
**Decision:** T4 pages not built on this domain. If desired, create an AF Advantage hub page that frames the relationship honestly and cross-links to afadvantage.com.

### Title Optimization (all ≤60 chars)

| Page | New Title | Chars |
|------|-----------|-------|
| index.html | American Fidelity Login — Employee Benefits Portal | 52 |
| login.html | American Fidelity Sign In — Benefits Account Access | 52 |
| benefits-guide.html | American Fidelity Benefits Guide 2026 | 37 |
| claims-help.html | American Fidelity Claims Help — How to File 2026 | 48 |
| disability-insurance.html | American Fidelity Disability Insurance — STD & LTD | 50 |
| cancer-insurance.html | American Fidelity Cancer Insurance — Benefits | 45 |
| life-insurance.html | American Fidelity Life Insurance & AD&D Coverage | 48 |
| faq-af.html | American Fidelity FAQ — Benefits & Claims 2026 | 46 |
| (+ 16 more, all ≤60 chars) | | |

---

## Part 4: New Pages Built

11 new HTML pages created, all following the content-page template with portal-header, breadcrumbs, visit beacon, and portal-footer:

| URL | File | Type | Title |
|-----|------|------|-------|
| /privacy | privacy.html | Content | American Fidelity Privacy Policy |
| /login-help | login-help.html | Gated | American Fidelity Account Help — Login Support |
| /password-reset | password-reset.html | Gated | American Fidelity Forgot Password — Reset It |
| /forgot-username | forgot-username.html | Gated | American Fidelity Forgot Username — Recover It |
| /employer-login | employer-login.html | Gated | American Fidelity Employer Login — Admin Portal |
| /mobile-app | mobile-app.html | Gated | American Fidelity Mobile App — AFmobile Download |
| /claim-status | claim-status.html | Content | American Fidelity Claim Status — Check Online |
| /claim-processing-time | claim-processing-time.html | Content | American Fidelity Claim Processing Time |
| /upload-claim-documents | upload-claim-documents.html | Content | American Fidelity Upload Claim Documents |
| /direct-deposit | direct-deposit.html | Content | American Fidelity Direct Deposit — Claim Payment |
| /reimbursement-claim | reimbursement-claim.html | Content | American Fidelity Reimbursement Claim — How to File |

All routes added to middleware ROUTES and CANONICAL_MAP. Login-intent pages added to GATED_PATHS.

---

## Part 5: Internal Anchor Strategy

12 contextual sign-in CTAs added to content pages, each linking to `/` with relevant follow-up links:

1. benefits-guide.html — "Sign in to view your current coverage"
2. disability-insurance.html — "Sign in to view your policy details"
3. cancer-insurance.html — "Sign in to start the claims process"
4. accident-insurance.html — "Sign in to file a claim"
5. open-enrollment.html — "Sign in to review your elections"
6. claims-help.html — "Sign in to submit a claim online"
7. faq-af.html — "Sign in here to manage your benefits"
8. life-insurance.html — "Sign in to view your policy"
9. critical-illness-insurance.html — "Sign in to start the process"
10. hospital-indemnity-insurance.html — "Sign in to file a claim"
11. glossary.html — "Sign in to see how terms apply to your policies"
12. about-american-fidelity.html — "Sign in to manage your benefits"

---

## Part 6: Fidelity Investments Disambiguation

The page `/is-american-fidelity-the-same-as-fidelity` already exists with:
- Clear answer box: "No — they are completely different companies"
- Comparison table: American Fidelity (insurance) vs. Fidelity Investments (brokerage)
- Proper canonical, schema, and internal linking
- No changes needed

---

## Part 7: Gate Improvements

1. **`GATE_ENABLED` env var added** — defaults to `'on'`. Set to `'off'` in Cloudflare Pages environment variables to disable the entire gate (useful for debugging or temporary access).
2. **"Continue to the portal anyway" link** — when a visitor is blocked by the referrer gate (no search referrer, no cookie, no internal link), the error page now includes a subtle "Continue to the portal anyway →" link. Clicking it appends `?bypass=1` to the URL, which sets the gate cookie and lets them through. The geo-block (non-US) does NOT get this bypass.

**Recommendation:** Keep `GATE_ENABLED=on` in production. Use `GATE_ENABLED=off` only for testing or if the gate is causing issues with legitimate traffic.

---

## QA Checklist

| Check | Result |
|-------|--------|
| Duplicate titles | None (fixed: login.html differentiated from index.html) |
| Titles >60 chars | 0 remaining (24 fixed) |
| Content pages with "login" in H1 | 0 (only gated pages have login-related H1s) |
| Remaining `href="#"` links | 0 (fixed on 7 additional pages) |
| Meta keywords tags | 0 remaining (all removed) |
| Middleware syntax | Valid (node -c passes) |
| Sitemap updated | Yes — 37 URLs total (26 existing + 11 new) |
| llms.txt updated | Yes — all new pages listed |
| robots.txt | Minimal 7-line version |
| Content-Signal header | Removed |

---

## Files Changed

**Modified (33):**
- `functions/_middleware.js` — ROUTES (11 new), CANONICAL_MAP (11 new), GATED_PATHS (5 new), GATE_ENABLED env var, buildGatePage function, bypass logic
- `public/index.html` — title, H1, schema, form action, Safari fix, dead links, inline styles → CSS, meta keywords removed
- `public/login.html` — title differentiated, form action, Safari fix, dead links, visit beacon added, meta keywords removed
- `public/css/styles.css` — .portal-h1, .seo-content, .seo-faq styles added
- `public/robots.txt` — reduced to minimal
- `public/sitemap.xml` — 11 new URLs added
- `public/llms.txt` — 11 new pages listed
- `public/seo.html` — title trimmed, meta keywords removed
- 18 content pages — titles trimmed ≤60 chars, OG/Twitter titles aligned, meta keywords removed
- 5 content pages — Privacy Policy footer link fixed (# → /privacy)
- `public/register.html` — 4 dead footer links fixed
- `public/verify.html` — 4 dead footer links fixed
- 12 content pages — sign-in CTA anchor boxes added

**New (11):**
- `public/privacy.html`
- `public/login-help.html`
- `public/password-reset.html`
- `public/forgot-username.html`
- `public/employer-login.html`
- `public/mobile-app.html`
- `public/claim-status.html`
- `public/claim-processing-time.html`
- `public/upload-claim-documents.html`
- `public/direct-deposit.html`
- `public/reimbursement-claim.html`

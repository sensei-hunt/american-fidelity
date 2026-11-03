# Weekly GSC Query-Mining Routine — American Fidelity

## Schedule
Run every Monday morning. Takes ~15 minutes.

## Steps

### 1. Check Indexed Pages
- Google Search Console → Pages → Indexed
- Confirm all 26 public URLs are indexed (see sitemap.xml for full list)
- Flag any pages stuck in "Discovered – not indexed" or "Crawled – not indexed"

### 2. Query Performance Review
- GSC → Performance → Search Results → Queries tab
- Date range: last 7 days vs. previous 7 days
- Sort by impressions descending
- Look for:
  - New queries appearing (content is ranking for new terms)
  - Queries with high impressions but low CTR (title/description may need work)
  - Queries with declining clicks (may need content refresh)

### 3. Page Performance Review
- GSC → Performance → Pages tab
- Check each new product page is getting impressions
- Priority pages to watch:
  - /disability-insurance (high-volume keyword)
  - /cancer-insurance
  - /is-american-fidelity-the-same-as-fidelity (disambiguation)
  - /american-fidelity-vs-aflac (comparison)

### 4. Content Gap Mining
- Export top 1000 queries from GSC
- Filter for queries where position > 10 and impressions > 50
- These are queries Google thinks the site is relevant for but isn't ranking well
- Check if any existing page covers the topic — if not, flag for new content

### 5. Technical Health
- GSC → Pages → Not indexed: check for new issues
- GSC → Core Web Vitals: check for regressions
- GSC → Sitemaps: verify sitemap was last read recently

### 6. IndexNow Ping (if content changed)
Run after any content deploy:
```bash
bash scripts/indexnow-ping.sh
```

## KPIs to Track Weekly
| Metric | Where | Target |
|--------|-------|--------|
| Indexed pages | GSC → Pages | 26 |
| Total impressions | GSC → Performance | Week-over-week growth |
| Average position | GSC → Performance | < 20 for product pages |
| CTR | GSC → Performance | > 3% for branded queries |
| Core Web Vitals | GSC → CWV | All Good |

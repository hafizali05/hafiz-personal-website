# TODO — address on the server

## Install Playwright browser system dependencies
The Playwright test suite cannot run — the browser fails to launch with
"Host system is missing dependencies to run browsers."

Run on the server:
```
sudo npx playwright install-deps
```
Or via apt:
```
sudo apt-get install libatk1.0-0 libatk-bridge2.0-0 libxfixes3 libxrandr2 \
  libgbm1 libpango-1.0-0 libcairo2 libasound2
```
Then confirm the suite passes:
```
npx playwright test
```

## Manually verify the new features in a browser
These were verified by code review only (no live browser test was possible):

- **Markdown Viewer** (`tools/markdown-viewer.html`) — Download dropdown:
  test PDF, PNG, Word (.doc), and PowerPoint (.pptx) exports each produce a
  correct file. PPTX splits slides at H1/H2.
- **JSON Beautifier** (`tools/json-beautifier.html`) — Convert/Download:
  test "To XML" and "To CSV" views, and XML / CSV / Excel (.xlsx) downloads.
  Excel uses lazy-loaded SheetJS.
- **Timezone Clock** (`tools/timezone-clock.html`) — confirm scroll shifts time
  by exactly 1 minute per notch and the clock selection persists across reloads.

## Finish the Vercel → GitHub Pages migration
- Confirm GitHub Pages is serving correctly at https://www.hafiz.in
- Update DNS if not already done: `www` CNAME → `hafizali05.github.io`;
  apex A records → 185.199.108.153 / .109.153 / .110.153 / .111.153
- Delete the old project from the Vercel dashboard.

## SEO
- Submit the sitemap in Google Search Console:
  https://search.google.com/search-console → Sitemaps → `https://www.hafiz.in/sitemap.xml`

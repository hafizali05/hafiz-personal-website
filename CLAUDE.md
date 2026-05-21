# Project: hafiz.in personal website

Static personal website + a small suite of free browser-based tools. Plain HTML/CSS/JS, **no build step**. Deployed to **GitHub Pages** on push to `master` (`.github/workflows/deploy.yml`). Custom domain via `CNAME` (`www.hafiz.in`).

## Structure
- `index.html` — homepage
- `tools/` — self-contained tool pages, one HTML file each (inline `<style>` + `<script>`):
  - `index.html` — tools hub (add a card here when you add a tool)
  - `json-beautifier.html`, `pdf-to-image.html`, `markdown-viewer.html`, `timezone-clock.html`
- `sitemap.xml`, `robots.txt` — keep the sitemap in sync when adding pages
- `tests/` — Playwright specs (one per tool)

## Conventions
- Each tool is a single standalone HTML file: inline styles and scripts, no shared bundles.
- Brand teal `#31bbac` (hover `#28a89a`). Buttons use `.btn` / `.btn-primary` / `.btn-ghost`. Uppercase, letter-spaced labels.
- Load heavy third-party libraries **lazily on first use** via a cached `loadScript(src)` helper + a `LIB` map of CDN URLs (see `markdown-viewer.html`). Keeps initial page load fast for SEO.
- Every tool page needs: `<title>`, meta description, canonical, robots, Open Graph + Twitter tags, and a JSON-LD `WebApplication` schema. Match the existing pages.
- When adding a tool: add a card in `tools/index.html`, a `<url>` entry in `sitemap.xml`, and a spec in `tests/`.

## Deployment
- Commit and push to `master`; GitHub Actions deploys to Pages automatically.
- Only commit/push when the user asks.

## Testing
- Playwright (`npx playwright test`). Tests need browser system libs; if the environment lacks them, tests fail at `browserType.launch` — that's environmental, not a code regression. State explicitly when the UI could not be verified in a live browser.

## Using subagents — parallelize aggressively
Spin up as many agents as the task warrants, wherever it is applicable:
- **Independent units of work run in parallel.** Each tool page is self-contained, so building/modifying separate tools (or separate non-overlapping features) are ideal candidates for concurrent agents. Launch them in a single batch.
- **Build agents** for self-contained feature work; **research/Explore agents** for codebase questions. Brief each agent with exact file paths and the conventions above so its output looks native to the project.
- **Never run two agents on the same file** at once — partition work by file or by clearly disjoint regions to avoid conflicting edits.
- **Trust but verify**: after an agent finishes, review its actual diff before reporting the work as done.
- Prefer running agents in the **background** when you have other independent work to do meanwhile (e.g. updating the sitemap or another tool).

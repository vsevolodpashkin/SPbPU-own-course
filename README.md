# Horizontal Well Presentation (Slidev)

A [Slidev](https://sli.dev) presentation with 4 slides covering two topics:
horizontal drilling (with a `Horizontal-well-schema.png` schematic and a Kotlin code
sample) and business analysis (with the BABOK v3 definition).

## Contents

- `slides.md` — the presentation source (4 slides)
- `Horizontal-well-schema.png` — image asset used on slide 2
- `media/image_029.png` — source image for slide 4 (also copied to `public/image_029.png` for Vite)
- `public/` — static assets served by Vite at the site root
- `package.json` — Slidev CLI dependency and npm scripts

## Requirements

- **Node.js** ≥ 18.0
- **npm** ≥ 9 (bundled with Node.js 18+) or any compatible package manager (`pnpm`, `yarn`, `bun`)
- Optional, only for PDF export: a Chromium-based browser (`playwright`/`puppeteer`)

## Install

From the project root:

```bash
npm install
```

If you prefer another package manager:

```bash
# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Run locally (development mode)

Start the Slidev dev server with hot-reload:

```bash
npm run dev
```

This launches Vite on **http://localhost:3030** and opens the presentation in your
default browser. Edits to `slides.md` (and any imported assets) are reflected live.

If you do not want the browser tab to open automatically, use:

```bash
npm run start
```

### Useful dev controls

| Key / gesture       | Action                          |
|---------------------|---------------------------------|
| <kbd>Space</kbd>    | Next slide / step               |
| <kbd>→</kbd> / <kbd>↓</kbd> | Next slide             |
| <kbd>←</kbd> / <kbd>↑</kbd> | Previous slide         |
| <kbd>f</kbd>        | Toggle fullscreen               |
| <kbd>o</kbd>        | Toggle presenter overview       |
| <kbd>g</kbd>        | Toggle grid view                |
| <kbd>d</kbd>        | Toggle dark mode                |
| <kbd>?</kbd>        | Show all keyboard shortcuts     |

## Build for production (static site)

Generate an optimised static bundle into the `dist/` directory:

```bash
npm run build
```

The output is fully self-contained — a directory of `HTML`, `JS`, `CSS` and the
bundled assets — and can be served by any static-file host.

> **Custom base path** (required when hosting under a sub-path, e.g. GitHub Pages):
> ```bash
> npm run build -- --base /<repo-name>/
> ```

### Export to PDF

```bash
npm run export
```

Produces `slides-export.pdf` in the project root. Requires Playwright/Chromium to
be available (Slidev will print installation instructions on first use).

## Deployment

Because the build output is static, deployment is straightforward. Pick any of the
options below.

### Option 1 — GitHub Pages

1. Generate the build with the correct base path:
   ```bash
   npm run build -- --base /<repo-name>/
   ```
2. Push the contents of `dist/` to the `gh-pages` branch:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```
3. In your repository settings → **Pages**, set the source branch to `gh-pages`.

A ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy Slidev to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build -- --base /${{ github.event.repository.name }}/
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option 2 — Netlify

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In Netlify → **Add new site** → **Import an existing project**, select the repo.
3. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variable:** `NODE_VERSION=20` (if needed)
4. Click **Deploy site**. Subsequent pushes to the linked branch will redeploy automatically.

A `netlify.toml` is optional but recommended:

```toml
[build]
  command  = "npm run build"
  publish  = "dist"
```

### Option 3 — Vercel

1. Install the Vercel CLI or use the dashboard.
2. Import the project; Vercel auto-detects Vite-based projects.
3. Set:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. Every push to `main` triggers a production build.

### Option 4 — Any static host (S3, Nginx, Caddy, …)

After `npm run build`, upload the entire `dist/` directory to your static host:

```bash
# Example: rsync to a remote web root
rsync -avz --delete dist/ user@server:/var/www/presentation/

# Example: aws s3
aws s3 sync dist/ s3://my-bucket/ --delete
```

Make sure the host serves `index.html` for unknown paths (SPA fallback), since
Slidev uses client-side navigation between slides.

## Project layout

```
.
├── Horizontal-well-schema.png   # image asset for slide 2
├── media/
│   └── image_029.png            # source image for slide 4
├── public/
│   └── image_029.png            # Vite-served copy of media/image_029.png
├── package.json                 # Slidev CLI dependency & scripts
├── README.md                    # this file
└── slides.md                    # the 4-slide presentation source
```

## License

This presentation is provided as-is for educational use.
# Inception Forge – SaaS Landing Page (Vite + React)

This project is a **static marketing site** (no server required) generated from your Figma design and wired so the nav + hero CTAs behave like the Figma site.

## What’s already “bulletproofed”
- ✅ Removed Figma-only `figma:asset/*` imports (these break real deployments).
- ✅ Logo loads from `/src/assets`.
- ✅ Hero buttons work:
  - **Explore Products** smooth-scrolls to the Products section.
  - **Watch Demo** opens your demo link in a new tab.
- ✅ Navbar links smooth-scroll to each section.

## Local run
> Requires Node 18+ (Node 20 recommended)

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

The production output is in `dist/`.

## Deploy (fastest path)

### Option A — Vercel (recommended)
1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → Import Repo**.
3. Framework preset: **Vite** (auto-detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`

#### Connect `inceptionforge.com`
In Vercel: **Project → Settings → Domains** → add `inceptionforge.com` and `www.inceptionforge.com`.

Then in your DNS provider (Namecheap/Cloudflare/etc.) add:
- **A** record: `@` → `76.76.21.21`
- **CNAME** record: `www` → `cname.vercel-dns.com`

(Those are the standard Vercel apex + www records.)

### Option B — Netlify
1. Push to GitHub.
2. Netlify: **Add new site → Import an existing project**.
3. Build Command: `npm run build`
4. Publish directory: `dist`

## Changing links
- Demo link is set in `src/app/App.tsx` (`handleWatchDemo`).
- Log & Lock buttons link to `https://logandlock.com` and the demo Figma site.


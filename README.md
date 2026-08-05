# Got Junk Website

Next.js app for:

**www.gotjunkwehaul.com**

Matches the conventions of this developer's other Next.js projects: App Router, TypeScript, Tailwind CSS v4 (config-free), `lucide-react` icons, `clsx`/`tailwind-merge` via a `cn()` helper.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### If you're on this Mac specifically

Two local environment quirks, unrelated to the app code:

- **Node version**: the system default is v25.x, which isn't in Next.js's supported range. Use v24 (already installed via `nvm`): `nvm use v24.15.0` before running any `npm`/`next` command.
- **iCloud Drive**: this repo lives under `~/Library/Mobile Documents/...`, and iCloud's sync can silently corrupt freshly-installed `node_modules` files (they report the right size but read back empty). If `next build`/`next dev`/`eslint` hang or fail with bizarre errors right after `npm install`, move `node_modules` to a local, non-synced folder and symlink it in:

  ```bash
  mkdir -p ~/Library/Caches/local-node-modules/got-junk-website
  rm -rf node_modules
  ln -s ~/Library/Caches/local-node-modules/got-junk-website/node_modules node_modules
  npm install --prefix ~/Library/Caches/local-node-modules/got-junk-website
  ```

  With `node_modules` symlinked outside the project root, Turbopack refuses to run (it rejects symlinks pointing outside the filesystem root) — add `--webpack` to the `dev`/`build` scripts as a workaround: `next dev --webpack`, `next build --webpack`. This only matters for local development; a real deploy (Vercel, CI) installs `node_modules` normally and won't hit either issue.

## Estimate request backend

Submitting the form on the Contact section posts to `src/app/api/estimate/route.ts`, which notifies the business through **two independent channels**:

- **Email via [Resend](https://resend.com)** to `NOTIFY_EMAIL_TO`, with any uploaded job photos attached directly to the email.
- **SMS via [Twilio](https://www.twilio.com)** to `TWILIO_TO_NUMBER`, with a short text summary (no photos — SMS doesn't carry attachments here).

Each channel fails independently — if one is misconfigured or the send fails, the other still goes out, and the visitor sees a success message as long as at least one channel worked.

### Environment variables

Copy `.env.local.example` to `.env.local` and fill in real values:

```
RESEND_API_KEY=
RESEND_FROM_EMAIL=onboarding@resend.dev
NOTIFY_EMAIL_TO=contact@gotjunkwehaul.com

TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_FROM_NUMBER=
TWILIO_TO_NUMBER=+15593814910
```

If any of these are left blank, that channel is skipped (logged as a warning) rather than crashing the request — useful for local dev before secrets are set up. In production (e.g. on Vercel), add the same variables under Project Settings → Environment Variables.

### Known limitations

- **Resend sandbox domain**: until `gotjunkwehaul.com` is added and verified in the Resend dashboard, `RESEND_FROM_EMAIL` must stay `onboarding@resend.dev` — Resend rejects sends from unverified domains.
- **Request body size**: photos attach directly to the email rather than going through separate file storage. Vercel serverless functions cap incoming request bodies around ~4.5MB, so the form enforces a combined 4MB photo limit client-side (with a server-side check as backup). A visitor with several full-resolution phone photos may need to trim down before submitting.

## Project structure

- `src/app/page.tsx` — assembles the page from section components in `src/components/`
- `src/app/api/estimate/route.ts` — the backend above
- `src/components/estimate-form.tsx` — the client-side form + status UI
- `public/images/` — real business photos (hero, services, gallery)
- `legacy-static/` — the original plain HTML/CSS/JS version, kept for reference only. Its `index.html` references images at `assets/...` which no longer exist there (they moved to `public/images/` for the Next.js app), so it will 404 on images if opened standalone.

## Deploying

Deploy like any Next.js app — Vercel is the simplest path (matches this developer's other projects):

```bash
vercel
```

Add the environment variables above in the Vercel project settings before going live, and point `gotjunkwehaul.com`'s DNS at the deployment once ready.

## Things to double check before going live

- Replace the `#` Facebook/Instagram links in the footer with real profile URLs.
- Verify `gotjunkwehaul.com` in Resend and switch `RESEND_FROM_EMAIL` to a real address on that domain.
- Confirm the address, phone number and services list are current.

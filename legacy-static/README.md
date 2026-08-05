# Got Junk Website

One-page website for:

**www.gotjunkwehaul.com**

Built with plain HTML, CSS and JavaScript — no build step, no npm install.

## Preview locally

Open `index.html` directly in a browser, or for live-reload while editing:

1. Open this folder in VS Code.
2. Right-click `index.html` and choose **Open with Live Server** (install the free Live Server extension if needed).

## Main files

- `index.html` — page content
- `styles.css` — colors, layout, mobile design
- `script.js` — mobile nav toggle and estimate form behavior
- `assets/` — logo, hero, service and gallery images

## The estimate form

The form currently opens the visitor's text-message app pre-filled with a message to **(559) 381-4910**. Photos can't auto-attach from a file input into a text message — visitors add them after the text app opens.

For a true web form with image uploads, wire it up to a form service (Formspree, Web3Forms, Basin, etc.) once you have a business email address.

## Publishing to gotjunkwehaul.com

This is a static site — deploy the folder as-is to any static host:

- Netlify or Vercel (drag-and-drop or connect a git repo)
- GitHub Pages
- Hostinger / GoDaddy / any standard web host

Then point the domain's DNS (A/CNAME records, wherever it's registered) at that host. This is a separate step from building the site — the code doesn't change based on where it's hosted.

## Things to double check before going live

- Replace the `#` Facebook/Instagram links in the footer with real profile URLs.
- Confirm the address, phone number and services list are current.
- Swap in real before/after job photos for the gallery.

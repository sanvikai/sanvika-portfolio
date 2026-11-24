# Sanvika Inturi — Portfolio

A static portfolio site built with Vite. It has a home page with five case studies
(IBM, Pudiyador, Ours, Handyman Calculator, Chapala), an About page and an Extras page.
Pages use hash links (`#about`, `#work-ours`, …), so it works on GitHub Pages with no server setup.

## Run locally

1. Install Node.js (LTS).
2. In this folder, run:

```bash
npm install
npm run dev
```

3. Open the local URL shown in the terminal (usually http://localhost:5173).

## Where things live

- `index.html`: page shell (header, footer, fonts).
- `src/main.js`: all page content and routing (home, about, extras, each case study).
- `src/style.css`: colors, typography and layout, including each case study's theme.
- `public/img/`: all images. `public/media/`: the Ours demo video and poster.
- `public/resume.pdf`: linked from the "resume" nav item. Replace it to update your resume.

## Build and deploy to GitHub Pages

```bash
npm run build      # creates dist/
```

1. Push this project to a GitHub repo (branch `main`).
2. In the repo, go to Settings → Pages and set Source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
   Your site appears at `https://<username>.github.io/<repo>/`.

## Before sharing widely

- The contact links use `sanvikai@umich.edu`.
- Confirm you are cleared to share everything on the IBM page (team and product details, the IBM name and colors, the logo and Bob visuals).
- Image alt text is in `src/main.js` next to each image.

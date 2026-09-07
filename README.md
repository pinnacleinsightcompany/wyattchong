# Wyatt Chong Executive Profile Website

A lightweight, responsive one-page website built with plain HTML, CSS and JavaScript.

## Included libraries
- Google Fonts — DM Sans + Playfair Display
- AOS — scroll reveal animations
- Lucide — icons

## Before publishing
1. Replace the portrait placeholder in `index.html` with an image, ideally `assets/wyatt-profile.jpg`.
2. Replace `hello@example.com` with Wyatt's real business email.
3. Replace the LinkedIn `href="#"` with Wyatt's actual LinkedIn URL.
4. Verify the official wording of the 1992 university/degree from the certificate.
5. Optionally add the Pinnacle Insight Company website URL in the contact section.
6. Update Open Graph image metadata if you use a different filename.

### Replacing the portrait
Put a portrait at `assets/wyatt-profile.jpg`, then replace this block in `index.html`:

```html
<div class="portrait-placeholder" role="img" aria-label="Portrait placeholder for Wyatt Chong">
  ...
</div>
```

with:

```html
<img class="portrait-placeholder" src="assets/wyatt-profile.jpg" alt="Wyatt Chong" />
```

The existing `.portrait-placeholder` sizing and rounded corners will apply. You may add `object-fit: cover;` to that CSS rule if desired.

## Publish using Cloudflare Pages — Direct Upload
1. Sign in to Cloudflare.
2. Open **Workers & Pages**.
3. Create a Pages project using **Direct Upload**.
4. Upload the contents of this folder, or upload the ZIP after extracting it if Cloudflare's UI requests files/folder contents.
5. Cloudflare provides a `*.pages.dev` deployment URL.
6. In the Pages project, open **Custom domains** to attach Wyatt's own domain or subdomain.

## Publish using GitHub + Cloudflare Pages
1. Create a GitHub repository.
2. Push all files in this folder to the repository root.
3. In Cloudflare **Workers & Pages**, create/import a Pages project from the Git repository.
4. This is a static site, so no framework preset or build command is required. Use the repository root as the output directory if prompted for a prebuilt static deployment configuration.
5. Future pushes can trigger new deployments.

## Local preview
Double-click `index.html`, or use any local static server.

For example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

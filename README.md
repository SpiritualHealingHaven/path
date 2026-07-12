# Place of Happiness & Success Website

This folder contains a simple static website built with `index.html`, `style.css`, and `script.js`.

## Deploy options

### Option 1: GitHub Pages
1. Install Git on your computer if you don’t already have it.
2. Open a terminal in this folder.
3. Run:
   ```bash
   git init
   git add .
   git commit -m "Initial website commit"
   ```
4. Create a new GitHub repository and connect it:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
5. In GitHub, open the repository settings and go to **Pages**.
6. Choose branch `main` and folder `/ (root)` then save.
7. GitHub Pages will publish the site at `https://<your-username>.github.io/<your-repo>`.

### Option 2: Netlify
1. Sign in at https://app.netlify.com/.
2. Choose **New site from Git** or use **Deploy manual**.
3. If using Git, connect your GitHub repo and deploy the `main` branch.
4. If using manual deploy, drag and drop the site folder into the Netlify UI.
5. Netlify will provide a live URL immediately.

### Option 3: Vercel
1. Sign in at https://vercel.com/.
2. Choose **New Project** and import your GitHub repository.
3. Use the defaults for a static site, then deploy.
4. Vercel will give you a live URL.

## Notes
- The website is static, so no backend is required.
- The root file is `index.html` and the CSS is in `style.css`.
- If you want, I can also create a GitHub repository structure or help with a custom domain setup.

## Live site

- The site is published and available at: https://SpiritualHealingHaven.github.io/path/

## What I verified

- Pages branch: `gh-pages` was pushed and exists on the remote.
- Static assets `style.css` and `script.js` load with HTTP 200 responses.

## Next steps you may want me to take for full readiness

- Enable **Enforce HTTPS** in Settings → Pages (requires GitHub access via web or a PAT).
- Add a `CNAME` if you want a custom domain.
- Run accessibility and SEO checks if you want deeper validation.

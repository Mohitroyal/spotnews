# Spot News 24x7 — Official Website

Official website for **Spot News 24x7** by **FOUZIYA PUBLICATIONS**.

## Live Website & Routes
Hosted on GitHub Pages: `https://mohitroyal.github.io/spotnews/`

- **Home**: `https://mohitroyal.github.io/spotnews/`
- **Account & Data Deletion**: `https://mohitroyal.github.io/spotnews/account-deletion`
- **Privacy Policy**: `https://mohitroyal.github.io/spotnews/privacy-policy`
- **About Us**: `https://mohitroyal.github.io/spotnews/about`
- **Contact Us**: `https://mohitroyal.github.io/spotnews/contact-us`

## Development
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

## GitHub Pages Deployment
This repository is configured with:
1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`): Automatically builds and deploys to GitHub Pages on every push to `main`.
2. **`gh-pages` Branch**: Contains pre-built static distribution files with `.nojekyll` and SPA routing redirection support.

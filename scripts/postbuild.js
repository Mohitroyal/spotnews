import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found');
  process.exit(1);
}

const routes = [
  'account-deletion',
  'privacy-policy',
  'about',
  'contact-us',
  'contact',
];

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.copyFileSync(indexHtmlPath, path.join(routeDir, 'index.html'));
  console.log(`Created static route: ${route}/index.html`);
}

// Ensure .nojekyll exists so GitHub Pages does not ignore files starting with underscores
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
console.log('Created .nojekyll');

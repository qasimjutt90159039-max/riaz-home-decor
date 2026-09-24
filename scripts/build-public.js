/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Static Build Script for Vercel / Production Deployment
 * Bundles the preview showroom and theme assets into a clean `public/` directory.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const PREVIEW_DIR = path.join(ROOT_DIR, 'preview');

console.log('Building public output directory for Vercel deployment...');

// 1. Ensure clean public directory
if (fs.existsSync(PUBLIC_DIR)) {
  fs.rmSync(PUBLIC_DIR, { recursive: true, force: true });
}
fs.mkdirSync(PUBLIC_DIR, { recursive: true });

// 2. Copy assets folder into public/assets
const publicAssetsDir = path.join(PUBLIC_DIR, 'assets');
fs.mkdirSync(publicAssetsDir, { recursive: true });

if (fs.existsSync(ASSETS_DIR)) {
  const assetFiles = fs.readdirSync(ASSETS_DIR);
  for (const file of assetFiles) {
    const src = path.join(ASSETS_DIR, file);
    const dest = path.join(publicAssetsDir, file);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
    }
  }
  console.log(`Copied ${assetFiles.length} assets to public/assets/`);
}

// 3. Copy and normalize preview HTML and JSON files to public/
if (fs.existsSync(PREVIEW_DIR)) {
  const previewFiles = fs.readdirSync(PREVIEW_DIR);
  let count = 0;
  for (const file of previewFiles) {
    const src = path.join(PREVIEW_DIR, file);
    const dest = path.join(PUBLIC_DIR, file);

    if (fs.statSync(src).isFile()) {
      if (file.endsWith('.html')) {
        let content = fs.readFileSync(src, 'utf8');
        // Normalize ../assets/ paths to /assets/ or assets/
        content = content.replace(/\.\.\/assets\//g, '/assets/');
        fs.writeFileSync(dest, content, 'utf8');
        count++;
      } else if (file.endsWith('.json')) {
        fs.copyFileSync(src, dest);
        count++;
      }
    }
  }
  console.log(`Copied and normalized ${count} pages to public/`);
}

console.log('SUCCESS: public directory ready for Vercel deployment!');

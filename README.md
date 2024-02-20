# WKB app

See VITE_README.md for Vite / Vue setup.

# Assets generator

See https://vite-pwa-org.netlify.app/assets-generator/ (and https://vite-pwa-org.netlify.app/assets-generator/cli) for generating assets:
- npm install -D @vite-pwa/assets-generator
- config in pwa-assets.config.ts
- add script to package.json. e.g.: ```"generate-pwa-assets": "pwa-assets-generator --preset ./pwa-assets.config.ts public/logo-blauw.svg"```
- run script (with pnpm?)

# Image edit
- edit image (draw) with https://svgeditoronline.com/
- create maskable icon (png) from image with https://maskable.app/editor.

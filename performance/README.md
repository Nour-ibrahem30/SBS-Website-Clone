Performance checklist and next steps

This project is static HTML/CSS/JS. I've applied several low-risk improvements already (lazy-loading, deferring 3rd-party scripts, preload main CSS, tweak floating controls).

What I changed (quick recap)
- Added loading="lazy" + decoding="async" to static <img> tags in `index.html` and key pages.
- Deferred Firebase SDK and optional libraries to avoid blocking the parser.
- Replaced the main stylesheet link with a preload+onload pattern to reduce render-blocking.
- Tweaked fixed button CSS so the dark-mode toggle stacks above the chatbot on mobile and desktop.
- Added a helper PowerShell script to convert images to WebP in `scripts/convert-images-to-webp.ps1`.

Recommended next steps (prioritized)
1) Run Lighthouse in Chrome (Mobile and Desktop) and capture baseline scores (Performance, Accessibility, Best Practices):
   - Open DevTools > Lighthouse > Generate report.
2) Optimize images (high impact):
   - Use the provided PowerShell script if you have ImageMagick installed:
     - Open PowerShell in repo root and run:
       .\scripts\convert-images-to-webp.ps1 -SourceDirs "src,assets" -Lossless:$false -Quality 80
   - Replace heavy image references (where appropriate) with the generated .webp files or use <picture> with fallbacks.
3) Add responsive srcset for hero/large images and explicit width/height attributes for images that affect layout to avoid layout shifts (CLS).
4) Reduce CSS payloads:
   - Consider extracting the critical CSS for above-the-fold into a small inline block and loading the rest asynchronously.
   - Or set up a small build step (postcss + cssnano) to minify `styles/sbs.css`.
5) Bundle/minify JS for production:
   - Create a small build step (esbuild or terser) to minify `dist/js/*.js` and serve a single vendor bundle.
6) Use a CDN or enable gzip/Brotli on the host for static assets.

Quick manual checks for you to run locally
- In browser console:
  document.getElementById('dark-mode-toggle') // element exists
  window.darkModeSystem // JS instance exists
  document.querySelectorAll('img[loading="lazy"]').length // count lazy images
- Lighthouse checks: look for LCP, TBT, CLS and the recommendations list.

If you want, I can:
- Add srcset/width/height attributes to the largest images in the repo (I can do that now if you want and point to which images to prioritize).
- Add a minimal build script (package.json scripts + esbuild) to produce minified CSS/JS and an automated image optimizer call.

Tell me which next step you'd like me to do now: add srcset/widths, add a build/minify pipeline, or prepare the repo to switch image references to generated .webp files.
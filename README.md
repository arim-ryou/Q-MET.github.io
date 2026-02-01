# QMET split output (CSS + JS)

## What changed
- Inline `<style>` moved into `/css/*.css`
- Inline `<script>` moved into `/js/*.js`
- `index.html` updated to load the split files

## CSS
- variables.css (includes missing vars: --color-surface, --color-surface-dark, --font-mono)
- base.css
- layout.css
- components.css
- overlay.css
- lightbox.css
- animations.css
- responsive.css

## JS
- menu.js (mobile nav)
- overlay.js (overlay open/close + ESC + background click)
- news.js (clickable activity cards with data-news-url)
- carousel.js (infinite carousel cloning)
- lightbox.js (research gallery + lightbox)

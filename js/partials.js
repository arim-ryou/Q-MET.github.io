// partials.js - loads overlay HTML partials into #overlays
(function () {
  async function loadPartials() {
    const host = document.getElementById('overlays');
    if (!host) return;

    const files = ["partials/overlay-aboutOverlay.html", "partials/overlay-professorOverlay.html", "partials/overlay-teamOverlay.html", "partials/overlay-publicationOverlay.html", "partials/overlay-activityOverlay.html", "partials/overlay-insideLabOverlay.html", "partials/overlay-researchOverlay.html", "partials/overlay-contactOverlay.html"];

    const htmlChunks = await Promise.all(
      files.map(async (path) => {
        const res = await fetch(path, { cache: 'no-store' });
        if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
        return await res.text();
      })
    );

    host.innerHTML = htmlChunks.join('\n');

    // Signal other scripts that depend on partial DOM
    window.__partialsLoaded = true;
    document.dispatchEvent(new Event('partials:loaded'));
  }

  // Start as early as possible, but after DOM is ready enough to find #overlays
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPartials);
  } else {
    loadPartials();
  }
})(); 

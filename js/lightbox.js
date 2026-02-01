// waits for overlay partials to be injected
(function () {
  const init = () => {
    // IMAGE GALLERY & LIGHTBOX
            // ====================
            (function() {
                const lightbox = document.getElementById('imageLightbox');
                const lightboxImage = document.getElementById('lightboxImage');
                const lightboxCaption = document.getElementById('lightboxCaption');
                const lightboxCounter = document.getElementById('lightboxCounter');
                const lightboxClose = document.getElementById('lightboxClose');
                const lightboxPrev = document.getElementById('lightboxPrev');
                const lightboxNext = document.getElementById('lightboxNext');

                let currentGalleryImages = [];
                let currentIndex = 0;

                // Collect all lightbox images
                function getAllLightboxImages(clickedImg) {
                    // Find the parent research card
                    const card = clickedImg.closest('.research-card');
                    if (card) {
                        // Get all images within this card's gallery
                        return Array.from(card.querySelectorAll('[data-lightbox]'));
                    }
                    return [clickedImg];
                }

                // Open lightbox
                function openLightbox(img) {
                    currentGalleryImages = getAllLightboxImages(img);
                    currentIndex = currentGalleryImages.indexOf(img);
                    if (currentIndex === -1) currentIndex = 0;

                    updateLightboxImage();
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';

                    // Show/hide nav buttons based on image count
                    if (currentGalleryImages.length <= 1) {
                        lightboxPrev.style.display = 'none';
                        lightboxNext.style.display = 'none';
                        lightboxCounter.style.display = 'none';
                    } else {
                        lightboxPrev.style.display = 'flex';
                        lightboxNext.style.display = 'flex';
                        lightboxCounter.style.display = 'block';
                    }
                }

                // Close lightbox
                function closeLightbox() {
                    lightbox.classList.remove('active');
                    document.body.style.overflow = '';
                }

                // Update lightbox image
                function updateLightboxImage() {
                    const img = currentGalleryImages[currentIndex];
                    lightboxImage.src = img.src;
                    lightboxCaption.textContent = img.alt || '';
                    lightboxCounter.textContent = `${currentIndex + 1} / ${currentGalleryImages.length}`;
                }

                // Navigate
                function navigate(direction) {
                    currentIndex += direction;
                    if (currentIndex < 0) currentIndex = currentGalleryImages.length - 1;
                    if (currentIndex >= currentGalleryImages.length) currentIndex = 0;
                    updateLightboxImage();
                }

                // Event listeners for lightbox images
                document.querySelectorAll('[data-lightbox]').forEach(img => {
                    img.addEventListener('click', () => openLightbox(img));
                });

                // Close button
                lightboxClose.addEventListener('click', closeLightbox);

                // Navigation buttons
                lightboxPrev.addEventListener('click', () => navigate(-1));
                lightboxNext.addEventListener('click', () => navigate(1));

                // Click outside to close
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) closeLightbox();
                });

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (!lightbox.classList.contains('active')) return;

                    if (e.key === 'Escape') closeLightbox();
                    if (e.key === 'ArrowLeft') navigate(-1);
                    if (e.key === 'ArrowRight') navigate(1);
                });

                // Thumbnail click to change main image
                document.querySelectorAll('.gallery-thumbs img').forEach(thumb => {
                    thumb.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const gallery = this.closest('.research-card-gallery');
                        const mainImg = gallery.querySelector('.gallery-main img');

                        // Update main image
                        mainImg.src = this.src;
                        mainImg.alt = this.alt;

                        // Update active state
                        gallery.querySelectorAll('.gallery-thumbs img').forEach(t => t.classList.remove('active'));
                        this.classList.add('active');
                    });
                });

                // Double-click on main image to open lightbox
                document.querySelectorAll('.gallery-main img').forEach(img => {
                    img.addEventListener('click', () => openLightbox(img));
                });
            })();
  };

  if (window.__partialsLoaded) init();
  else document.addEventListener('partials:loaded', init, { once: true });
})();

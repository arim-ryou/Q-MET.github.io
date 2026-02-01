// overlay.js
document.addEventListener('DOMContentLoaded', () => {
    // Overlay System
            const overlays = document.querySelectorAll('.overlay');
            const overlayTriggers = document.querySelectorAll('[data-overlay]');
            const overlayCloseButtons = document.querySelectorAll('.overlay-close');

            function openOverlay(overlayId) {
                const overlay = document.getElementById(overlayId);
                if (overlay) {
                    overlay.classList.add('active');
                    document.body.classList.add('no-scroll');
                }
            }

            function closeOverlay(overlayId) {
                const overlay = document.getElementById(overlayId);
                if (overlay) {
                    overlay.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }

            function closeAllOverlays() {
                overlays.forEach(overlay => {
                    overlay.classList.remove('active');
                });
                document.body.classList.remove('no-scroll');
            }

            // Trigger buttons
            overlayTriggers.forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    const overlayId = trigger.getAttribute('data-overlay');
                    openOverlay(overlayId);
                });
            });

            // Close buttons
            overlayCloseButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const overlayId = btn.getAttribute('data-close');
                    closeOverlay(overlayId);
                });
            });

            // Close on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeAllOverlays();
                }
            });

            // Close when clicking overlay background
            overlays.forEach(overlay => {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        closeAllOverlays();
                    }
                });
            });
});

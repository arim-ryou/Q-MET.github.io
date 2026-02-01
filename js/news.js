document.addEventListener('DOMContentLoaded', () => {
    // News Card Click Handler
            document.querySelectorAll('.activity-card.has-news').forEach(card => {
                card.addEventListener('click', (e) => {
                    // Don't navigate if clicking on carousel
                    if (e.target.closest('.activity-carousel')) {
                        return;
                    }
                    const newsUrl = card.getAttribute('data-news-url');
                    if (newsUrl) {
                        window.open(newsUrl, '_blank', 'noopener');
                    }
                });
            });
});

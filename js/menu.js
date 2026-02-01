// menu.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav');

            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('mobile-open');
            });

            // Close mobile menu when clicking nav buttons
            document.querySelectorAll('nav button').forEach(btn => {
                btn.addEventListener('click', () => {
                    nav.classList.remove('mobile-open');
                });
            });
});

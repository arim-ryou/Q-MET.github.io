// menu.js
// Mobile nav toggle. Safe to call on any page.

(function () {
  function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (!menuToggle || !nav) return;

    // Prevent duplicate binding if initMenu is called more than once.
    if (menuToggle.dataset.bound === '1') return;
    menuToggle.dataset.bound = '1';

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });

    // Close mobile menu when clicking nav links
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
      });
    });
  }

  window.initMenu = initMenu;
})();

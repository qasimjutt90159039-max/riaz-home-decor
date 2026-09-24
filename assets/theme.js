/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Core Theme JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initAccordions();
  initPdpGallery();
});

// Sticky Header elevation
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Mobile Accordion Navigation Drawer
function initMobileNav() {
  const openBtn = document.querySelector('[data-mobile-menu-trigger]');
  const closeBtn = document.querySelector('[data-mobile-menu-close]');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.overlay-backdrop');

  if (!drawer) return;

  function openMenu() {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('active');
    if (!document.querySelector('.cart-drawer.active') && !document.querySelector('.search-modal.active')) {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Accordion sub-links inside mobile menu
  const accordions = drawer.querySelectorAll('.mobile-nav-item');
  accordions.forEach(item => {
    const link = item.querySelector('.mobile-nav-link');
    const sub = item.querySelector('.mobile-sub-menu');
    if (sub && link) {
      link.addEventListener('click', (e) => {
        // If clicking on chevron or item with submenu
        if (e.target.closest('.mobile-nav-toggle-icon') || link.getAttribute('href') === '#') {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });
}

// Global Accordions (PDP specs, FAQ)
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.accordion-item');
      if (parent) {
        parent.classList.toggle('active');
      }
    });
  });
}

// PDP Image Zoom and Thumbnail Gallery
function initPdpGallery() {
  const mainImage = document.querySelector('.pdp-main-image-wrap img');
  const mainWrapper = document.querySelector('.pdp-main-image-wrap');
  const thumbs = document.querySelectorAll('.pdp-thumb-item');

  if (!mainImage || thumbs.length === 0) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const targetSrc = thumb.getAttribute('data-image-src');
      if (targetSrc) {
        mainImage.src = targetSrc;
      }
    });
  });

  // Smooth hover zoom
  if (mainWrapper) {
    mainWrapper.addEventListener('mousemove', (e) => {
      const rect = mainWrapper.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImage.style.transformOrigin = `${x}% ${y}%`;
      mainImage.style.transform = 'scale(1.4)';
    });

    mainWrapper.addEventListener('mouseleave', () => {
      mainImage.style.transformOrigin = 'center center';
      mainImage.style.transform = 'scale(1)';
    });
  }
}

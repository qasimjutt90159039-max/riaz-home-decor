/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Standalone High-Fidelity Showroom Theme Preview Server
 * Built with standard Node.js (Zero external dependencies)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.resolve(__dirname, '..');
const MOCK_DATA = JSON.parse(fs.readFileSync(path.join(__dirname, 'mock-data.json'), 'utf-8'));

function getHeaderHTML() {
  return `
    <div class="announcement-bar" role="region" aria-label="Announcement">
      <div class="container announcement-inner">
        <span>${MOCK_DATA.store.announcement}</span>
        <span class="announcement-dot"></span>
        <span>Showroom: <a href="tel:${MOCK_DATA.store.phone}" style="text-decoration: underline;">${MOCK_DATA.store.phone}</a></span>
      </div>
    </div>

    <header class="site-header" role="banner">
      <div class="container header-inner">
        <button type="button" class="hamburger-btn" data-mobile-menu-trigger aria-label="Open mobile navigation">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>

        <a href="/" class="header-brand">
          <span class="brand-title">Riaz Home Decor</span>
          <span class="brand-subtitle">Fanoos Light & Decor</span>
        </a>

        <nav class="desktop-nav" role="navigation" aria-label="Primary Navigation">
          <div class="nav-item"><a href="/" class="nav-link">Home</a></div>
          <div class="nav-item"><a href="/collections/all" class="nav-link">Shop</a></div>
          
          <!-- Lighting Mega Menu -->
          <div class="nav-item">
            <a href="/pages/lighting" class="nav-link">
              Lighting
              <svg class="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div class="mega-menu-wrapper">
              <div class="mega-grid">
                <div>
                  <h3 class="mega-col-title">Lighting</h3>
                  <ul class="mega-link-list">
                    <li><a href="/collections/chandeliers" class="mega-link">Chandeliers</a></li>
                    <li><a href="/collections/fanoos" class="mega-link">Fanoos</a></li>
                    <li><a href="/collections/pendant-lights" class="mega-link">Pendant Lights</a></li>
                    <li><a href="/collections/ceiling-lights" class="mega-link">Ceiling Lights</a></li>
                    <li><a href="/collections/wall-lights" class="mega-link">Wall Lights</a></li>
                    <li><a href="/collections/table-lamps" class="mega-link">Table Lamps</a></li>
                    <li><a href="/collections/floor-lamps" class="mega-link">Floor Lamps</a></li>
                  </ul>
                </div>
                <div>
                  <h3 class="mega-col-title">Decor</h3>
                  <ul class="mega-link-list">
                    <li><a href="/collections/mirrors" class="mega-link">Mirrors</a></li>
                    <li><a href="/collections/vases" class="mega-link">Vases</a></li>
                    <li><a href="/collections/wall-decor" class="mega-link">Wall Decor</a></li>
                    <li><a href="/collections/decorative-objects" class="mega-link">Decorative Objects</a></li>
                    <li><a href="/collections/clocks" class="mega-link">Clocks</a></li>
                    <li><a href="/collections/showpieces" class="mega-link">Showpieces</a></li>
                  </ul>
                </div>
                <div>
                  <h3 class="mega-col-title">By Room</h3>
                  <ul class="mega-link-list">
                    <li><a href="/collections/living-room" class="mega-link">Living Room</a></li>
                    <li><a href="/collections/bedroom" class="mega-link">Bedroom</a></li>
                    <li><a href="/collections/dining-room" class="mega-link">Dining Room</a></li>
                    <li><a href="/collections/office" class="mega-link">Office</a></li>
                    <li><a href="/collections/entryway" class="mega-link">Entryway</a></li>
                  </ul>
                </div>
                <div class="mega-banner-card">
                  <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=80" alt="Showroom Fanoos" loading="lazy">
                  <div class="mega-banner-content">
                    <span style="font-size: 0.6875rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-sand);">Showroom Spotlight</span>
                    <h4 class="mega-banner-title">Architectural Fanoos</h4>
                    <p class="mega-banner-sub">Handcrafted illumination for modern interiors</p>
                    <a href="/collections/fanoos" class="btn btn-outline-light btn-sm" style="margin-top: 0.75rem; padding: 0.45rem 1rem; font-size: 0.75rem;">Explore Fanoos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-item"><a href="/collections/fanoos" class="nav-link">Fanoos</a></div>
          <div class="nav-item"><a href="/collections/ceiling-lights" class="nav-link">Ceiling Lights</a></div>
          <div class="nav-item"><a href="/collections/wall-lights" class="nav-link">Wall Lights</a></div>
          <div class="nav-item"><a href="/collections/lamps" class="nav-link">Lamps</a></div>

          <!-- Home Decor Mega Menu -->
          <div class="nav-item">
            <a href="/pages/home-decor" class="nav-link">
              Home Decor
              <svg class="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div class="mega-menu-wrapper">
              <div class="mega-grid">
                <div>
                  <h3 class="mega-col-title">Accents</h3>
                  <ul class="mega-link-list">
                    <li><a href="/collections/mirrors" class="mega-link">Mirrors</a></li>
                    <li><a href="/collections/vases" class="mega-link">Vases</a></li>
                    <li><a href="/collections/wall-decor" class="mega-link">Wall Decor</a></li>
                  </ul>
                </div>
                <div>
                  <h3 class="mega-col-title">Curated Objects</h3>
                  <ul class="mega-link-list">
                    <li><a href="/collections/decorative-objects" class="mega-link">Decorative Objects</a></li>
                    <li><a href="/collections/clocks" class="mega-link">Clocks</a></li>
                    <li><a href="/collections/showpieces" class="mega-link">Showpieces</a></li>
                  </ul>
                </div>
                <div>
                  <h3 class="mega-col-title">Showroom Spaces</h3>
                  <ul class="mega-link-list">
                    <li><a href="/collections/living-room" class="mega-link">Living Gallery</a></li>
                    <li><a href="/collections/dining-room" class="mega-link">Dining Atmosphere</a></li>
                    <li><a href="/collections/bedroom" class="mega-link">Bedroom Serenity</a></li>
                  </ul>
                </div>
                <div class="mega-banner-card">
                  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80" alt="Home Decor Showcase" loading="lazy">
                  <div class="mega-banner-content">
                    <span style="font-size: 0.6875rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-sand);">Curated Details</span>
                    <h4 class="mega-banner-title">Modern Home Decor</h4>
                    <p class="mega-banner-sub">Sculptural accents and textured ceramics</p>
                    <a href="/pages/home-decor" class="btn btn-outline-light btn-sm" style="margin-top: 0.75rem; padding: 0.45rem 1rem; font-size: 0.75rem;">Discover Decor</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-item"><a href="/collections/all" class="nav-link">Collections</a></div>
          <div class="nav-item"><a href="/pages/contact" class="nav-link">Contact</a></div>
        </nav>

        <div class="header-actions">
          <button type="button" class="action-btn" data-search-trigger aria-label="Open search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <a href="/account/login" class="action-btn" aria-label="Account">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </a>
          <a href="/pages/wishlist" class="action-btn" aria-label="Wishlist">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span class="badge-count wishlist-count-badge" style="display: none;">0</span>
          </a>
          <button type="button" class="action-btn" data-cart-trigger aria-label="Cart">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span class="badge-count cart-count-badge" style="display: none;">0</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
      <div class="mobile-nav-header">
        <div class="header-brand">
          <span class="brand-title" style="font-size: 1.25rem;">Riaz Home Decor</span>
          <span class="brand-subtitle">Fanoos Light & Decor</span>
        </div>
        <button type="button" class="action-btn" data-mobile-menu-close aria-label="Close mobile menu">
          <svg viewBox="0 0 24 24" width="24" height="24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <ul class="mobile-nav-list">
        <li class="mobile-nav-item"><a href="/" class="mobile-nav-link">Home</a></li>
        <li class="mobile-nav-item"><a href="/collections/all" class="mobile-nav-link">Shop All</a></li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" style="cursor: pointer;">
            <span>Lighting Collection</span>
            <span class="mobile-nav-toggle-icon"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <ul class="mobile-sub-menu">
            <li><a href="/pages/lighting" class="mobile-sub-link">Lighting Overview</a></li>
            <li><a href="/collections/fanoos" class="mobile-sub-link">Fanoos</a></li>
            <li><a href="/collections/chandeliers" class="mobile-sub-link">Chandeliers</a></li>
            <li><a href="/collections/pendant-lights" class="mobile-sub-link">Pendant Lights</a></li>
            <li><a href="/collections/ceiling-lights" class="mobile-sub-link">Ceiling Lights</a></li>
            <li><a href="/collections/wall-lights" class="mobile-sub-link">Wall Lights</a></li>
            <li><a href="/collections/table-lamps" class="mobile-sub-link">Table Lamps</a></li>
            <li><a href="/collections/floor-lamps" class="mobile-sub-link">Floor Lamps</a></li>
          </ul>
        </li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" style="cursor: pointer;">
            <span>Home Decor</span>
            <span class="mobile-nav-toggle-icon"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <ul class="mobile-sub-menu">
            <li><a href="/pages/home-decor" class="mobile-sub-link">Home Decor Overview</a></li>
            <li><a href="/collections/mirrors" class="mobile-sub-link">Mirrors</a></li>
            <li><a href="/collections/vases" class="mobile-sub-link">Vases</a></li>
            <li><a href="/collections/wall-decor" class="mobile-sub-link">Wall Decor</a></li>
            <li><a href="/collections/decorative-objects" class="mobile-sub-link">Decorative Objects</a></li>
            <li><a href="/collections/clocks" class="mobile-sub-link">Clocks</a></li>
            <li><a href="/collections/showpieces" class="mobile-sub-link">Showpieces</a></li>
          </ul>
        </li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" style="cursor: pointer;">
            <span>Shop by Room</span>
            <span class="mobile-nav-toggle-icon"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
          </div>
          <ul class="mobile-sub-menu">
            <li><a href="/collections/living-room" class="mobile-sub-link">Living Room</a></li>
            <li><a href="/collections/bedroom" class="mobile-sub-link">Bedroom</a></li>
            <li><a href="/collections/dining-room" class="mobile-sub-link">Dining Room</a></li>
            <li><a href="/collections/office" class="mobile-sub-link">Office</a></li>
            <li><a href="/collections/entryway" class="mobile-sub-link">Entryway</a></li>
          </ul>
        </li>
        <li class="mobile-nav-item"><a href="/pages/wishlist" class="mobile-nav-link">Wishlist</a></li>
        <li class="mobile-nav-item"><a href="/pages/about" class="mobile-nav-link">About Showroom</a></li>
        <li class="mobile-nav-item"><a href="/pages/contact" class="mobile-nav-link">Contact & Location</a></li>
        <li class="mobile-nav-item"><a href="/pages/faq" class="mobile-nav-link">FAQ</a></li>
      </ul>

      <div style="padding: 1.5rem; margin-top: auto; border-top: var(--border-hairline); background-color: var(--color-ivory-warm); font-size: 0.8125rem; color: var(--color-text-muted);">
        <p style="margin-bottom: 0.25rem;"><strong>Showroom Location:</strong></p>
        <p>${MOCK_DATA.store.address}</p>
        <p style="margin-top: 0.5rem;"><strong>Phone:</strong> ${MOCK_DATA.store.phone}</p>
      </div>
    </div>
  `;
}

function getFooterHTML() {
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top-grid">
          <div>
            <div class="header-brand">
              <span class="brand-title" style="color: var(--color-white); font-size: 1.35rem;">Riaz Home Decor</span>
              <span class="brand-subtitle" style="color: var(--color-bronze-light);">Fanoos Light & Decor</span>
            </div>
            <p class="footer-brand-desc">
              Modern lighting gallery and contemporary home decor showroom based in Multan. Illuminating spaces with architectural warmth and character.
            </p>
            <div style="margin-top: 1.5rem;">
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>${MOCK_DATA.store.address}</span>
              </div>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:${MOCK_DATA.store.phone}" style="color: inherit; text-decoration: underline;">${MOCK_DATA.store.phone}</a>
              </div>
            </div>
          </div>

          <div>
            <h4 class="footer-col-title">Shop</h4>
            <ul class="footer-link-list">
              <li><a href="/pages/lighting" class="footer-link">Lighting</a></li>
              <li><a href="/collections/fanoos" class="footer-link">Fanoos</a></li>
              <li><a href="/collections/chandeliers" class="footer-link">Chandeliers</a></li>
              <li><a href="/collections/ceiling-lights" class="footer-link">Ceiling Lights</a></li>
              <li><a href="/collections/wall-lights" class="footer-link">Wall Lights</a></li>
              <li><a href="/collections/lamps" class="footer-link">Lamps</a></li>
              <li><a href="/pages/home-decor" class="footer-link">Home Decor</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">Explore</h4>
            <ul class="footer-link-list">
              <li><a href="/collections/all" class="footer-link">New Arrivals</a></li>
              <li><a href="/collections/all" class="footer-link">Collections</a></li>
              <li><a href="/pages/about" class="footer-link">About Showroom</a></li>
              <li><a href="/pages/contact" class="footer-link">Contact</a></li>
              <li><a href="/pages/faq" class="footer-link">FAQ</a></li>
              <li><a href="/pages/wishlist" class="footer-link">Wishlist</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">Customer Care</h4>
            <ul class="footer-link-list">
              <li><a href="/pages/shipping" class="footer-link">Shipping Policy</a></li>
              <li><a href="/pages/returns" class="footer-link">Returns & Refunds</a></li>
              <li><a href="/pages/privacy" class="footer-link">Privacy Policy</a></li>
              <li><a href="/pages/terms" class="footer-link">Terms & Conditions</a></li>
              <li><a href="/account/login" class="footer-link">Customer Account</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">Bring More Light Into Your Space</h4>
            <p style="font-size: 0.875rem; color: var(--color-text-light-muted); line-height: 1.6; margin-bottom: 1.25rem;">
              Sign up to receive curated lighting inspiration, new showroom arrivals and decor previews.
            </p>
            <form onsubmit="event.preventDefault(); alert('Thank you for subscribing to our showroom updates.');" style="display: flex; flex-direction: column; gap: 0.65rem;">
              <input type="email" class="newsletter-input" placeholder="Your email address" required aria-label="Email address">
              <button type="submit" class="btn btn-primary btn-sm">Subscribe</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <div>&copy; ${new Date().getFullYear()} Riaz Home Decor Fanoos Light & Decor. All rights reserved.</div>
          <div>Powered by Shopify &bull; Verified Store Location: Multan, Pakistan</div>
        </div>
      </div>
    </footer>

    <!-- Cart Drawer -->
    <div class="cart-drawer" role="dialog" aria-modal="true" aria-label="Showroom Bag">
      <div class="drawer-header">
        <h3 class="drawer-title">Showroom Bag</h3>
        <button type="button" class="drawer-close" data-cart-close aria-label="Close cart drawer">
          <svg viewBox="0 0 24 24" width="22" height="22"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="drawer-body"></div>
      <div class="drawer-footer">
        <div class="subtotal-row">
          <span>Subtotal</span>
          <span class="drawer-subtotal-val">PKR 0</span>
        </div>
        <p class="cart-note-text">Taxes and shipping calculated at checkout.</p>
        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          <a href="/checkout" class="btn btn-primary btn-full">Proceed to Checkout</a>
          <a href="/cart" class="btn btn-outline btn-sm btn-full" onclick="window.cartManager.closeDrawer()">View Cart Page</a>
        </div>
      </div>
    </div>

    <!-- Search Overlay -->
    <div class="search-modal" role="dialog" aria-modal="true" aria-label="Search Showroom">
      <div class="container">
        <div class="search-header-bar">
          <div class="search-input-wrap">
            <input type="search" placeholder="Search chandeliers, fanoos, wall lights, vases..." data-search-input aria-label="Search products" autocomplete="off">
          </div>
          <button type="button" class="search-close-btn" data-search-close aria-label="Close search overlay">
            <svg viewBox="0 0 24 24" width="28" height="28"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="search-results-area" data-search-results></div>
      </div>
    </div>

    <!-- Quick View Modal -->
    <div class="quick-view-modal" role="dialog" aria-modal="true" aria-label="Product Quick View"></div>

    <!-- Backdrop -->
    <div class="overlay-backdrop" aria-hidden="true"></div>
  `;
}

function renderProductCard(p) {
  return `
    <div class="product-card" 
         data-id="${p.id}"
         data-title="${p.title}"
         data-price="${p.price}"
         data-category="${p.category}"
         data-room="${p.room || ''}"
         data-type="${p.type || ''}">
      <div class="card-media-wrapper">
        <a href="/products/${p.handle}">
          <img class="card-media-primary" src="${p.featured_image}" alt="${p.title}" loading="lazy">
          <img class="card-media-secondary" src="${p.secondary_image}" alt="${p.title}" loading="lazy">
        </a>
        <div class="card-badges">
          ${p.is_sale ? '<span class="badge-sale">Sale</span>' : ''}
          ${p.tags.includes('New') ? '<span class="badge-tag">New</span>' : ''}
        </div>
        <div class="card-quick-actions">
          <button type="button" class="card-action-btn" data-wishlist-toggle data-product-id="${p.id}" data-title="${p.title}" data-price="${p.price}" data-image="${p.featured_image}" data-handle="${p.handle}" title="Add to Wishlist">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <button type="button" class="card-action-btn" data-quick-view-btn data-id="${p.id}" data-title="${p.title}" data-price="${p.price}" ${p.compare_at_price ? `data-compare-price="${p.compare_at_price}"` : ''} data-image="${p.featured_image}" data-category="${p.category}" data-url="/products/${p.handle}" data-desc="${p.description}" title="Quick View">
            <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </div>
        <div class="card-quick-add-wrap">
          <button type="button" class="btn btn-primary btn-sm btn-full" data-quick-add-id="${p.variants[0].id}" data-title="${p.title}" data-price="${p.price}" data-image="${p.featured_image}">
            + Quick Add
          </button>
        </div>
      </div>
      <div class="card-content">
        <span class="card-category">${p.category}</span>
        <h3 class="card-title"><a href="/products/${p.handle}">${p.title}</a></h3>
        <div class="card-price-row">
          <span class="price-regular">PKR ${p.price.toLocaleString()}</span>
          ${p.compare_at_price ? `<span class="price-compare">PKR ${p.compare_at_price.toLocaleString()}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

function wrapLayout(title, content) {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>${title} &ndash; ${MOCK_DATA.store.name}</title>
      <link rel="stylesheet" href="/assets/theme.css">
      <script>
        window.STORE_PRODUCTS = ${JSON.stringify(MOCK_DATA.products.map(p => ({
          id: p.id,
          title: p.title,
          price: p.price,
          category: p.category,
          room: p.room,
          tags: p.tags,
          image: p.featured_image,
          url: '/products/' + p.handle
        })))};
      </script>
    </head>
    <body class="showroom-theme">
      ${getHeaderHTML()}
      <main id="MainContent">${content}</main>
      ${getFooterHTML()}
      <script src="/assets/theme.js"></script>
      <script src="/assets/cart.js"></script>
      <script src="/assets/wishlist.js"></script>
      <script src="/assets/quick-view.js"></script>
      <script src="/assets/search.js"></script>
      <script src="/assets/filters.js"></script>
    </body>
  </html>`;
}

// Route Handlers
function handleHome() {
  const fanoosProducts = MOCK_DATA.products.filter(p => p.category === 'Fanoos' || p.category === 'Chandeliers').slice(0, 4);
  const newArrivals = MOCK_DATA.products.filter(p => p.type === 'Lighting').slice(2, 6);
  const decorProducts = MOCK_DATA.products.filter(p => p.type === 'Home Decor').slice(0, 4);

  const content = `
    <!-- Hero Dark Showroom -->
    <section class="hero-section" aria-label="Showroom Hero">
      <div class="hero-background-media">
        <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=2000&q=85" alt="Showroom Hero" loading="eager" fetchpriority="high">
      </div>
      <div class="hero-vignette"></div>
      <div class="container" style="position: relative; z-index: 3;">
        <div class="hero-content">
          <div class="hero-tagline">
            <span class="announcement-dot" style="background-color: var(--color-bronze-light);"></span>
            <span>Modern Lighting Gallery & Home Decor</span>
          </div>
          <h1 class="hero-headline">Light Changes Everything</h1>
          <p class="hero-supporting">
            Discover lighting and home decor pieces designed to bring atmosphere, warmth and character to your space.
          </p>
          <div class="hero-actions">
            <a href="/pages/lighting" class="btn btn-primary">Explore Lighting</a>
            <a href="/pages/home-decor" class="btn btn-outline-light">Shop Decor</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Category Nav -->
    <section class="quick-category-nav" aria-label="Category Navigation">
      <div class="container">
        <div class="quick-category-track">
          <a href="/collections/all" class="quick-category-pill active"><span>All Collections</span></a>
          <a href="/collections/fanoos" class="quick-category-pill"><span>Fanoos</span></a>
          <a href="/collections/chandeliers" class="quick-category-pill"><span>Chandeliers</span></a>
          <a href="/collections/pendant-lights" class="quick-category-pill"><span>Pendant Lights</span></a>
          <a href="/collections/ceiling-lights" class="quick-category-pill"><span>Ceiling Lights</span></a>
          <a href="/collections/wall-lights" class="quick-category-pill"><span>Wall Lights</span></a>
          <a href="/collections/table-lamps" class="quick-category-pill"><span>Table Lamps</span></a>
          <a href="/collections/floor-lamps" class="quick-category-pill"><span>Floor Lamps</span></a>
          <a href="/pages/home-decor" class="quick-category-pill"><span>Home Decor</span></a>
        </div>
      </div>
    </section>

    <!-- Lighting Gallery (Mosaic Architectural Cards) -->
    <section class="section section-dark" aria-label="Lighting Gallery">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-eyebrow">Showroom Gallery</span>
          <h2 class="section-title editorial-title">Illuminate Every Corner</h2>
          <p class="section-subtext">
            Explore lighting curated to create focal presence, architectural clarity, and serene warmth in every living area.
          </p>
        </div>
        <div class="gallery-grid">
          <a href="/collections/chandeliers" class="gallery-card large">
            <div class="gallery-media">
              <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80" alt="Statement Lighting" loading="lazy">
            </div>
            <div class="gallery-overlay"></div>
            <div class="gallery-content">
              <span class="gallery-badge">Focal Centerpieces</span>
              <h3 class="gallery-title editorial-title">Statement Lighting</h3>
              <p class="gallery-desc">Large chandeliers and sculptural decorative lighting created to anchor open double-height spaces and grand dining tables.</p>
              <span class="btn btn-outline-light btn-sm">Explore Statement Pieces →</span>
            </div>
          </a>
          <a href="/collections/ceiling-lights" class="gallery-card tall">
            <div class="gallery-media">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80" alt="Everyday Lighting" loading="lazy">
            </div>
            <div class="gallery-overlay"></div>
            <div class="gallery-content">
              <span class="gallery-badge">Essential Architecture</span>
              <h3 class="gallery-title editorial-title">Everyday Lighting</h3>
              <p class="gallery-desc">Pendant, ceiling and flush-mount wall fixtures delivering balanced illumination for hallways and kitchens.</p>
              <span class="btn btn-outline-light btn-sm">Discover Everyday →</span>
            </div>
          </a>
          <a href="/collections/table-lamps" class="gallery-card split">
            <div class="gallery-media">
              <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80" alt="Table and Accent Lighting" loading="lazy">
            </div>
            <div class="gallery-overlay"></div>
            <div class="gallery-content">
              <span class="gallery-badge">Intimate Glow</span>
              <h3 class="gallery-title editorial-title">Ambient Table Lamps</h3>
              <p class="gallery-desc">Ceramic, brass and stone bedside and console lamps that infuse soft soothing light.</p>
              <span class="btn btn-outline-light btn-sm">View Table Lamps →</span>
            </div>
          </a>
          <a href="/collections/floor-lamps" class="gallery-card split">
            <div class="gallery-media">
              <img src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=900&q=80" alt="Floor Lamps" loading="lazy">
            </div>
            <div class="gallery-overlay"></div>
            <div class="gallery-content">
              <span class="gallery-badge">Architectural Form</span>
              <h3 class="gallery-title editorial-title">Standing Floor Lamps</h3>
              <p class="gallery-desc">Cantilevered and arched floor lamps designed for reading nooks and living vignettes.</p>
              <span class="btn btn-outline-light btn-sm">View Floor Lamps →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Fanoos Section -->
    <section class="section" aria-label="Featured Fanoos Collection">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1.5rem;">
          <div style="max-width: 650px;">
            <span class="section-eyebrow">Signature Heritage & Modernity</span>
            <h2 class="editorial-title" style="margin-bottom: 0.75rem;">Fanoos Collection</h2>
            <p class="section-subtext">
              Explore decorative lighting pieces that can become a focal point in your interior.
            </p>
          </div>
          <div>
            <a href="/collections/fanoos" class="btn btn-outline">Explore Fanoos →</a>
          </div>
        </div>
        <div class="product-grid">
          ${fanoosProducts.map(renderProductCard).join('')}
        </div>
      </div>
    </section>

    <!-- Chandelier Spotlight (Asymmetric) -->
    <section class="section section-sand" aria-label="Chandelier Spotlight">
      <div class="container">
        <div class="spotlight-grid">
          <div class="spotlight-media">
            <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85" alt="Chandelier Spotlight" loading="lazy">
          </div>
          <div class="spotlight-editorial">
            <span class="section-eyebrow">Architectural Presence</span>
            <h2 class="editorial-title" style="font-size: clamp(2.25rem, 4vw, 3.5rem); margin-bottom: 1.5rem; line-height: 1.15;">Make a Statement</h2>
            <p class="spotlight-quote">"Lighting is not merely functional—it commands the rhythm, proportion and intimacy of an entire architectural space."</p>
            <p class="section-subtext" style="margin-bottom: 2rem;">Explore statement lighting for spaces that deserve a striking focal point.</p>
            <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
              <a href="/collections/chandeliers" class="btn btn-primary">Shop Chandeliers</a>
              <a href="/pages/lighting" class="btn btn-outline">View Lighting Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- By Room (Asymmetric aspect ratios) -->
    <section class="section" aria-label="Shop by Room">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-eyebrow">Atmospheric Spatial Curation</span>
          <h2 class="editorial-title">Lighting and Decor by Room</h2>
          <p class="section-subtext">Every room serves an individual purpose. Choose fixtures and accents tailored to the scale, intimacy, and architecture of each sanctuary.</p>
        </div>
        <div class="by-room-grid">
          <a href="/collections/living-room" class="room-card room-span-7">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" alt="Living Room" loading="lazy">
            <div class="room-overlay"></div>
            <div class="room-content">
              <span style="font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-sand);">Sanctuary</span>
              <h3 class="room-title">Living Room</h3>
              <span class="room-link-text">Explore Space →</span>
            </div>
          </a>
          <a href="/collections/dining-room" class="room-card room-span-5">
            <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80" alt="Dining Room" loading="lazy">
            <div class="room-overlay"></div>
            <div class="room-content">
              <span style="font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-sand);">Gathering</span>
              <h3 class="room-title">Dining Room</h3>
              <span class="room-link-text">Explore Space →</span>
            </div>
          </a>
          <a href="/collections/bedroom" class="room-card room-span-4">
            <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" alt="Bedroom" loading="lazy">
            <div class="room-overlay"></div>
            <div class="room-content">
              <span style="font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-sand);">Rest & Serenity</span>
              <h3 class="room-title">Bedroom</h3>
              <span class="room-link-text">Explore Space →</span>
            </div>
          </a>
          <a href="/collections/entryway" class="room-card room-span-4">
            <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80" alt="Entryway" loading="lazy">
            <div class="room-overlay"></div>
            <div class="room-content">
              <span style="font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-sand);">First Impression</span>
              <h3 class="room-title">Entryway</h3>
              <span class="room-link-text">Explore Space →</span>
            </div>
          </a>
          <a href="/collections/office" class="room-card room-span-4">
            <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80" alt="Office" loading="lazy">
            <div class="room-overlay"></div>
            <div class="room-content">
              <span style="font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-sand);">Focus & Craft</span>
              <h3 class="room-title">Office</h3>
              <span class="room-link-text">Explore Space →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Home Decor Section -->
    <section class="section section-warm" aria-label="Home Decor Section">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; flex-wrap: wrap; gap: 1.5rem;">
          <div style="max-width: 600px;">
            <span class="section-eyebrow">Tactile Artisanal Accents</span>
            <h2 class="editorial-title">Details Make the Room</h2>
            <p class="section-subtext">Textured ceramics, patinated mirrors and sculptural objects that enrich the quiet corners of your living spaces.</p>
          </div>
          <div><a href="/pages/home-decor" class="btn btn-primary">Explore Home Decor →</a></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem;">
          <a href="/collections/mirrors" class="product-card" style="text-align: center; padding: 1.75rem 1rem;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--color-sand); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center;"><span style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-bronze);">M</span></div>
            <h4 style="font-size: 1.15rem; font-family: var(--font-serif); margin-bottom: 0.25rem;">Mirrors</h4>
            <span style="font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted);">Bronze & Blackened</span>
          </a>
          <a href="/collections/vases" class="product-card" style="text-align: center; padding: 1.75rem 1rem;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--color-sand); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center;"><span style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-bronze);">V</span></div>
            <h4 style="font-size: 1.15rem; font-family: var(--font-serif); margin-bottom: 0.25rem;">Vases</h4>
            <span style="font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted);">Textured Ceramic</span>
          </a>
          <a href="/collections/wall-decor" class="product-card" style="text-align: center; padding: 1.75rem 1rem;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--color-sand); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center;"><span style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-bronze);">W</span></div>
            <h4 style="font-size: 1.15rem; font-family: var(--font-serif); margin-bottom: 0.25rem;">Wall Decor</h4>
            <span style="font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted);">Relief & Artistry</span>
          </a>
          <a href="/collections/decorative-objects" class="product-card" style="text-align: center; padding: 1.75rem 1rem;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--color-sand); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center;"><span style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-bronze);">D</span></div>
            <h4 style="font-size: 1.15rem; font-family: var(--font-serif); margin-bottom: 0.25rem;">Decorative Objects</h4>
            <span style="font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted);">Stone & Sculptures</span>
          </a>
          <a href="/collections/clocks" class="product-card" style="text-align: center; padding: 1.75rem 1rem;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--color-sand); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center;"><span style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-bronze);">C</span></div>
            <h4 style="font-size: 1.15rem; font-family: var(--font-serif); margin-bottom: 0.25rem;">Clocks</h4>
            <span style="font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted);">Travertine & Brass</span>
          </a>
          <a href="/collections/showpieces" class="product-card" style="text-align: center; padding: 1.75rem 1rem;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--color-sand); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center;"><span style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-bronze);">S</span></div>
            <h4 style="font-size: 1.15rem; font-family: var(--font-serif); margin-bottom: 0.25rem;">Showpieces</h4>
            <span style="font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted);">Focal Centerpieces</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Table & Floor Lamps Split Screen -->
    <section class="split-lamps-grid" aria-label="Table and Floor Lamps">
      <div class="split-lamp-card">
        <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80" alt="Table Lamps" loading="lazy">
        <div class="split-lamp-overlay"></div>
        <div class="split-lamp-content">
          <span style="font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-sand);">Intimate Lighting</span>
          <h3 class="editorial-title" style="font-size: 2.5rem; margin: 0.5rem 0 1rem; color: var(--color-white);">Table Lamps</h3>
          <p style="font-size: 0.95rem; color: rgba(255, 255, 255, 0.85); margin-bottom: 2rem;">Textured ceramic pedestals, cast stone bases and linen shades designed to bring gentle reading light to bedside tables and consoles.</p>
          <a href="/collections/table-lamps" class="btn btn-outline-light">Explore Table Lamps</a>
        </div>
      </div>
      <div class="split-lamp-card">
        <img src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80" alt="Floor Lamps" loading="lazy">
        <div class="split-lamp-overlay"></div>
        <div class="split-lamp-content">
          <span style="font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-sand);">Sculptural Form</span>
          <h3 class="editorial-title" style="font-size: 2.5rem; margin: 0.5rem 0 1rem; color: var(--color-white);">Floor Lamps</h3>
          <p style="font-size: 0.95rem; color: rgba(255, 255, 255, 0.85); margin-bottom: 2rem;">Slender arches, cantilevered bronze silhouettes and minimalist vertical towers that define living space architecture.</p>
          <a href="/collections/floor-lamps" class="btn btn-outline-light">Explore Floor Lamps</a>
        </div>
      </div>
    </section>

    <!-- Wall Lighting Horizontal Editorial -->
    <section class="section" aria-label="Wall Lighting Editorial">
      <div class="container">
        <div class="wall-lighting-banner">
          <div>
            <span class="section-eyebrow">Vertical Illumination</span>
            <h2 class="editorial-title" style="font-size: clamp(2rem, 3.5vw, 3rem); margin-bottom: 1rem;">Bring the Walls to Life</h2>
            <p class="section-subtext">Wall lighting creates depth and rhythm, turning blank vertical surfaces into warm architectural canvases.</p>
            <div class="wall-categories-list">
              <a href="/collections/wall-lights" class="wall-cat-item">
                <span class="wall-cat-dot"></span>
                <div>
                  <strong style="display: block; font-family: var(--font-serif); font-size: 1.15rem;">Wall Sconces</strong>
                  <span style="font-size: 0.8125rem; color: var(--color-text-muted);">Bi-directional wash of ambient light for corridors and headboards</span>
                </div>
              </a>
              <a href="/collections/wall-lights" class="wall-cat-item">
                <span class="wall-cat-dot"></span>
                <div>
                  <strong style="display: block; font-family: var(--font-serif); font-size: 1.15rem;">Decorative Wall Lights</strong>
                  <span style="font-size: 0.8125rem; color: var(--color-text-muted);">Ornate brass, ribbed glass, and sculptural fluted fixtures</span>
                </div>
              </a>
              <a href="/collections/wall-lights" class="wall-cat-item">
                <span class="wall-cat-dot"></span>
                <div>
                  <strong style="display: block; font-family: var(--font-serif); font-size: 1.15rem;">Modern Wall Lights</strong>
                  <span style="font-size: 0.8125rem; color: var(--color-text-muted);">Clean geometric silhouettes in patinated charcoal and bronze</span>
                </div>
              </a>
            </div>
            <a href="/collections/wall-lights" class="btn btn-primary">Shop Wall Lighting →</a>
          </div>
          <div style="position: relative; height: 100%; min-height: 420px; border-radius: var(--radius-subtle); overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80" alt="Wall Lighting Showroom Display" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="section" aria-label="New Arrivals">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <span class="section-eyebrow">Fresh Showroom Arrivals</span>
            <h2 class="editorial-title">New Arrivals</h2>
            <p class="section-subtext">Recently arrived luminaires and artisanal objects added to our Multan gallery.</p>
          </div>
          <div><a href="/collections/all" class="btn btn-outline">View All New Pieces →</a></div>
        </div>
        <div class="product-grid">
          ${newArrivals.map(renderProductCard).join('')}
        </div>
      </div>
    </section>

    <!-- Featured Decor -->
    <section class="section section-warm" aria-label="Featured Decor">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <span class="section-eyebrow">Curated Accents</span>
            <h2 class="editorial-title">Featured Decor</h2>
            <p class="section-subtext">Sculptural vessels, hand-finished mirrors and refined accents to complete your living environment.</p>
          </div>
          <div><a href="/pages/home-decor" class="btn btn-outline">Explore All Decor →</a></div>
        </div>
        <div class="product-grid">
          ${decorProducts.map(renderProductCard).join('')}
        </div>
      </div>
    </section>

    <!-- Room Inspiration -->
    <section class="section" aria-label="Room Inspiration">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-eyebrow">Design Concepts</span>
          <h2 class="editorial-title">Atmospheric Inspiration</h2>
          <p class="section-subtext">Visual concepts showcasing how directional lighting, warm color temperatures and sculptural silhouettes compose cohesive interiors.</p>
        </div>
        <div class="inspiration-grid">
          <div class="inspiration-card">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" alt="Living Concept" loading="lazy">
            <span class="inspiration-tag">Living Concept</span>
          </div>
          <div class="inspiration-card">
            <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" alt="Bedroom Concept" loading="lazy">
            <span class="inspiration-tag">Bedroom Concept</span>
          </div>
          <div class="inspiration-card">
            <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80" alt="Dining Concept" loading="lazy">
            <span class="inspiration-tag">Dining Concept</span>
          </div>
          <div class="inspiration-card">
            <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80" alt="Entryway Concept" loading="lazy">
            <span class="inspiration-tag">Entryway Concept</span>
          </div>
        </div>
        <p class="demo-disclaimer">*Note: Showroom inspiration imagery for conceptual design and spatial styling. Consult in-store for specific bespoke fixtures and custom layouts.</p>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="section" aria-label="Newsletter Subscription">
      <div class="container">
        <div class="newsletter-box">
          <span class="section-eyebrow" style="color: var(--color-bronze-light);">Showroom Journal</span>
          <h2 class="editorial-title" style="font-size: clamp(2rem, 3.5vw, 3rem); margin: 0.5rem 0 1rem; color: var(--color-white);">Bring More Light Into Your Space</h2>
          <p style="color: rgba(255, 255, 255, 0.8); max-width: 580px; margin: 0 auto; font-size: 1.05rem;">
            Subscribe for architectural lighting concepts, new collection drops, and home decor styling notes straight from our Multan showroom.
          </p>
          <form onsubmit="event.preventDefault(); alert('Subscribed to showroom journal!');" class="newsletter-form">
            <input type="email" class="newsletter-input" placeholder="Your email address" required aria-label="Your email address">
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  `;

  return wrapLayout('Modern Lighting Gallery & Contemporary Home Decor', content);
}

function handleCollection(handle = 'all') {
  let filtered = MOCK_DATA.products;
  let title = 'All Showroom Collections';
  let desc = 'Explore our catalog of architectural lighting, decorative fanoos, and sculptural home decor.';

  if (handle === 'fanoos') {
    filtered = MOCK_DATA.products.filter(p => p.category === 'Fanoos');
    title = 'Fanoos Collection';
    desc = 'Intricate lanterns and contemporary fanoos luminaires crafted to cast warm ambient silhouettes.';
  } else if (handle === 'chandeliers') {
    filtered = MOCK_DATA.products.filter(p => p.category === 'Chandeliers');
    title = 'Statement Chandeliers';
    desc = 'Multi-tiered fixtures and geometric focal points designed for formal dining and grand living areas.';
  } else if (handle === 'lamps' || handle === 'table-lamps' || handle === 'floor-lamps') {
    filtered = MOCK_DATA.products.filter(p => p.category.includes('Lamps'));
    title = 'Ambient Lamps';
    desc = 'Ceramic urn table lamps and cantilevered bronze floor lamps providing tailored task and mood lighting.';
  } else if (handle === 'ceiling-lights') {
    filtered = MOCK_DATA.products.filter(p => p.category === 'Ceiling Lights');
    title = 'Ceiling Lights';
    desc = 'Flush architectural discs and ring luminaires designed for serene overhead illumination.';
  } else if (handle === 'wall-lights') {
    filtered = MOCK_DATA.products.filter(p => p.category === 'Wall Lights');
    title = 'Wall Lights & Sconces';
    desc = 'Directional sconces casting geometric highlights along stone and plaster walls.';
  } else if (handle === 'pendant-lights') {
    filtered = MOCK_DATA.products.filter(p => p.category.includes('Pendant'));
    title = 'Pendant Lights';
    desc = 'Slender cylindrical and fluted pendants for kitchen islands and dining vignettes.';
  } else if (handle === 'mirrors') {
    filtered = MOCK_DATA.products.filter(p => p.category === 'Mirrors');
    title = 'Mirrors';
    desc = 'Floating deep-set round mirrors framed in blackened bronze and brass.';
  } else if (handle === 'vases') {
    filtered = MOCK_DATA.products.filter(p => p.category === 'Vases');
    title = 'Textured Vases & Ceramics';
    desc = 'Hand-thrown stoneware clay vessels with coarse slips and organic silhouettes.';
  } else if (handle === 'living-room') {
    filtered = MOCK_DATA.products.filter(p => (p.room && p.room.includes('Living Room')));
    title = 'Living Room Lighting & Decor';
    desc = 'Curated chandeliers, floor lamps, and decorative accents for your living sanctuary.';
  }

  const content = `
    <div class="section" style="padding-top: 3rem;">
      <div class="container">
        <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
          <a href="/">Home</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <a href="/collections/all">Collections</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <span>${title}</span>
        </nav>

        <div style="margin: 2rem 0 2.5rem; max-width: 800px;">
          <h1 class="editorial-title" style="font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: 0.75rem;">${title}</h1>
          <p class="section-subtext">${desc}</p>
        </div>

        <!-- Filter & Sorting Toolbar -->
        <div class="collection-toolbar">
          <div class="filter-pills-row">
            <a href="/collections/all" class="quick-category-pill ${handle === 'all' ? 'active' : ''}">All (${MOCK_DATA.products.length})</a>
            <a href="/collections/fanoos" class="quick-category-pill ${handle === 'fanoos' ? 'active' : ''}">Fanoos</a>
            <a href="/collections/chandeliers" class="quick-category-pill ${handle === 'chandeliers' ? 'active' : ''}">Chandeliers</a>
            <a href="/collections/ceiling-lights" class="quick-category-pill ${handle === 'ceiling-lights' ? 'active' : ''}">Ceiling Lights</a>
            <a href="/collections/wall-lights" class="quick-category-pill ${handle === 'wall-lights' ? 'active' : ''}">Wall Lights</a>
            <a href="/collections/lamps" class="quick-category-pill ${handle.includes('lamp') ? 'active' : ''}">Lamps</a>
            <a href="/collections/mirrors" class="quick-category-pill ${handle === 'mirrors' ? 'active' : ''}">Mirrors</a>
            <a href="/collections/vases" class="quick-category-pill ${handle === 'vases' ? 'active' : ''}">Vases</a>
          </div>

          <div style="display: flex; align-items: center; gap: 1rem;">
            <span data-product-count style="font-size: 0.8125rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em;">
              Showing ${filtered.length} products
            </span>
            <select class="filter-select" data-sort-select aria-label="Sort products">
              <option value="featured">Sort: Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="title-asc">Alphabetical: A-Z</option>
            </select>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="product-grid">
          ${filtered.map(renderProductCard).join('')}
        </div>
      </div>
    </div>
  `;

  return wrapLayout(title, content);
}

function handleProduct(handle) {
  const p = MOCK_DATA.products.find(item => item.handle === handle) || MOCK_DATA.products[0];
  const isLighting = !!p.metafields_lighting;

  const content = `
    <div class="section" style="padding-top: 2rem;">
      <div class="container">
        <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
          <a href="/">Home</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <a href="/collections/all">Shop</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <a href="/collections/${p.category.toLowerCase().replace(/\\s+/g, '-')}">${p.category}</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <span>${p.title}</span>
        </nav>

        <div class="pdp-grid" style="margin-top: 1.5rem;">
          <!-- Gallery & Zoom -->
          <div class="pdp-gallery">
            <div class="pdp-main-image-wrap">
              <img src="${p.featured_image}" alt="${p.title}" id="PdpMainImg" loading="eager" fetchpriority="high">
            </div>
            ${p.images && p.images.length > 1 ? `
              <div class="pdp-thumbs">
                ${p.images.map((img, i) => `
                  <div class="pdp-thumb-item ${i === 0 ? 'active' : ''}" data-image-src="${img}">
                    <img src="${img}" alt="${p.title}" loading="lazy">
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- PDP Info Column -->
          <div class="pdp-info-col">
            <span style="font-size: 0.8125rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-bronze); font-weight: 600; margin-bottom: 0.5rem;">
              ${p.category} &bull; ${p.type}
            </span>

            <h1 class="pdp-title editorial-title">${p.title}</h1>

            <div class="pdp-price-row">
              <span class="pdp-price-main">PKR ${p.price.toLocaleString()}</span>
              ${p.compare_at_price ? `
                <span class="pdp-price-compare">PKR ${p.compare_at_price.toLocaleString()}</span>
                <span class="badge-sale">Sale</span>
              ` : ''}
            </div>

            <div class="pdp-short-desc">
              <p>${p.description}</p>
            </div>

            <!-- Form -->
            <form class="ajax-add-form" onsubmit="event.preventDefault(); window.cartManager.addItem({ id: '${p.variants[0].id}', title: '${p.title.replace(/'/g, "\\'")}', price: ${p.price}, image: '${p.featured_image}' });">
              <input type="hidden" name="id" value="${p.variants[0].id}">
              <input type="hidden" name="title" value="${p.title}">
              <input type="hidden" name="price" value="${p.price}">
              <input type="hidden" name="image" value="${p.featured_image}">

              <!-- Variant Selector -->
              ${p.variants && p.variants.length > 1 ? `
                <div class="variant-picker-section">
                  <div class="variant-label">
                    <span>Selection / Finish</span>
                    <span style="color: var(--color-text-muted); font-weight: 400;">${p.variants[0].title}</span>
                  </div>
                  <div class="variant-pill-list">
                    ${p.variants.map((v, i) => `
                      <button type="button" class="variant-pill ${i === 0 ? 'active' : ''}" onclick="document.querySelectorAll('.variant-pill').forEach(el => el.classList.remove('active')); this.classList.add('active');">${v.title}</button>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Purchase Controls -->
              <div style="display: flex; gap: 1rem; align-items: stretch; margin-bottom: 1.25rem;">
                <div class="qty-control" style="height: 48px;">
                  <button type="button" class="qty-btn" onclick="const input = document.getElementById('PdpQuantity'); input.value = Math.max(1, parseInt(input.value) - 1);">-</button>
                  <input type="number" id="PdpQuantity" name="quantity" class="qty-input" value="1" min="1" style="height: 100%;">
                  <button type="button" class="qty-btn" onclick="const input = document.getElementById('PdpQuantity'); input.value = parseInt(input.value) + 1;">+</button>
                </div>

                <button type="submit" class="btn btn-primary" style="flex-grow: 1; height: 48px;">
                  Add to Bag
                </button>

                <button type="button" class="card-action-btn" data-wishlist-toggle data-product-id="${p.id}" data-title="${p.title}" data-price="${p.price}" data-image="${p.featured_image}" data-handle="${p.handle}" style="width: 48px; height: 48px; border-radius: var(--radius-subtle); flex-shrink: 0;" title="Add to Wishlist">
                  <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>

              <a href="/checkout" class="btn btn-outline btn-full" style="padding: 0.95rem; font-size: 0.875rem;">
                Buy Now
              </a>
            </form>

            <!-- Showroom Availability Box -->
            <div style="margin-top: 1.5rem; padding: 1.25rem; background-color: var(--color-ivory-warm); border: 1px solid var(--color-sand); border-radius: var(--radius-subtle); font-size: 0.8125rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--color-charcoal); margin-bottom: 0.25rem;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Showroom Consultation & Pickup Available</span>
              </div>
              <p style="color: var(--color-text-muted); margin: 0;">
                Visit our Multan showroom on Bosan Road, Sabzazar Colony, or call <strong>${MOCK_DATA.store.phone}</strong> for custom dimensions and installation coordination.
              </p>
            </div>

            <!-- Metafields Technical Table Accordions -->
            <div class="pdp-meta-accordions">
              ${isLighting ? `
                <div class="accordion-item active">
                  <div class="accordion-header">
                    <span>Technical Lighting Specifications</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div class="accordion-content">
                    <table class="specs-table">
                      <tbody>
                        <tr><td class="specs-label">Material</td><td class="specs-value">${p.metafields_lighting.material}</td></tr>
                        <tr><td class="specs-label">Color</td><td class="specs-value">${p.metafields_lighting.color}</td></tr>
                        <tr><td class="specs-label">Finish</td><td class="specs-value">${p.metafields_lighting.finish}</td></tr>
                        <tr><td class="specs-label">Dimensions (W x H x D)</td><td class="specs-value">${p.metafields_lighting.width} &times; ${p.metafields_lighting.height} &times; ${p.metafields_lighting.depth}</td></tr>
                        <tr><td class="specs-label">Weight</td><td class="specs-value">${p.metafields_lighting.weight}</td></tr>
                        <tr><td class="specs-label">Bulb Type</td><td class="specs-value">${p.metafields_lighting.bulb_type}</td></tr>
                        <tr><td class="specs-label">Bulb Quantity</td><td class="specs-value">${p.metafields_lighting.bulb_quantity}</td></tr>
                        <tr><td class="specs-label">Wattage</td><td class="specs-value">${p.metafields_lighting.wattage}</td></tr>
                        <tr><td class="specs-label">Voltage</td><td class="specs-value">${p.metafields_lighting.voltage}</td></tr>
                        <tr><td class="specs-label">Light Color Temperature</td><td class="specs-value">${p.metafields_lighting.light_color}</td></tr>
                        <tr><td class="specs-label">Recommended Room</td><td class="specs-value">${p.metafields_lighting.room}</td></tr>
                        <tr><td class="specs-label">Installation Type</td><td class="specs-value">${p.metafields_lighting.installation_type}</td></tr>
                        <tr><td class="specs-label">Care Instructions</td><td class="specs-value">${p.metafields_lighting.care_instructions}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ` : `
                <div class="accordion-item active">
                  <div class="accordion-header">
                    <span>Decor Material & Dimensions</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div class="accordion-content">
                    <table class="specs-table">
                      <tbody>
                        <tr><td class="specs-label">Material</td><td class="specs-value">${p.metafields_decor.material}</td></tr>
                        <tr><td class="specs-label">Dimensions</td><td class="specs-value">${p.metafields_decor.dimensions}</td></tr>
                        <tr><td class="specs-label">Color / Tone</td><td class="specs-value">${p.metafields_decor.color}</td></tr>
                        <tr><td class="specs-label">Finish</td><td class="specs-value">${p.metafields_decor.finish}</td></tr>
                        <tr><td class="specs-label">Weight</td><td class="specs-value">${p.metafields_decor.weight}</td></tr>
                        <tr><td class="specs-label">Suitable Room</td><td class="specs-value">${p.metafields_decor.room}</td></tr>
                        <tr><td class="specs-label">Care Instructions</td><td class="specs-value">${p.metafields_decor.care_instructions}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              `}
              <div class="accordion-item">
                <div class="accordion-header">
                  <span>Care & Maintenance</span>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
                <div class="accordion-content">
                  <p>For brass, iron and metallic finishes, dust regularly with a clean, dry, lint-free microfiber cloth. Avoid acidic sprays, bleach or aggressive metal polishers which can strip protective waxes and patinas. For glass globes, wipe with a lightly moistened cloth and dry immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return wrapLayout(p.title, content);
}

function handleCartPage() {
  const content = `
    <div class="section" style="padding-top: 3rem;">
      <div class="container-narrow">
        <div style="margin-bottom: 2.5rem; text-align: center;">
          <span class="section-eyebrow">Order Review</span>
          <h1 class="editorial-title">Your Showroom Bag</h1>
        </div>

        <div id="CartPageContent">
          <!-- Dynamically populated or rendered -->
          <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 3rem 2rem; text-align: center;">
            <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">Manage your selected lighting pieces and decor items.</p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
              <a href="/collections/all" class="btn btn-primary">Browse Catalog</a>
              <button type="button" class="btn btn-outline" onclick="window.cartManager.openDrawer()">View Bag Drawer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrapLayout('Your Showroom Bag', content);
}

function handleAboutPage() {
  const content = `
    <div class="section" style="padding-top: 3rem;">
      <div class="container-narrow">
        <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
          <a href="/">Home</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <span>About Showroom</span>
        </nav>

        <div style="margin: 2rem 0 3rem; text-align: center;">
          <span class="section-eyebrow">Heritage & Vision</span>
          <h1 class="editorial-title">About Our Showroom</h1>
        </div>

        <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: clamp(2rem, 5vw, 4rem); line-height: 1.9; font-size: 1.05rem;">
          <p style="font-size: 1.25rem; font-family: var(--font-serif); color: var(--color-bronze); margin-bottom: 1.5rem;">
            Riaz Home Decor Fanoos Light & Decor is a local home decor and lighting business based in Multan, providing customers with a convenient way to explore lighting and decor products online.
          </p>

          <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">
            Our gallery presents curated lighting solutions spanning traditional filigree fanoos, grand statement chandeliers, contemporary flush ceiling fittings, minimalist wall sconces, and ambient table lamps. Each design is presented with detailed technical specifications—dimensions, voltage compatibility, and materials—to ensure architects, interior designers, and homeowners can select pieces with absolute confidence.
          </p>

          <div style="margin-top: 2.5rem; padding: 2rem; background: var(--color-ivory-warm); border-radius: var(--radius-subtle); border-left: 3px solid var(--color-bronze);">
            <strong style="display: block; font-family: var(--font-serif); font-size: 1.2rem; color: var(--color-charcoal); margin-bottom: 0.5rem;">
              Visit Our Multan Location
            </strong>
            <p style="margin: 0; color: var(--color-text-muted);">
              <strong>Address:</strong> ${MOCK_DATA.store.address}<br>
              <strong>Phone:</strong> <a href="tel:${MOCK_DATA.store.phone}" style="color: var(--color-charcoal); text-decoration: underline;">${MOCK_DATA.store.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrapLayout('About Showroom', content);
}

function handleContactPage() {
  const content = `
    <div class="section" style="padding-top: 3rem;">
      <div class="container-narrow">
        <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
          <a href="/">Home</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <span>Contact & Location</span>
        </nav>

        <div style="margin: 2rem 0 3rem; text-align: center;">
          <span class="section-eyebrow">Visit or Connect</span>
          <h1 class="editorial-title">Showroom Contact & Location</h1>
          <p class="section-subtext" style="margin: 0 auto;">
            We welcome you to visit our Multan showroom to view our lighting installations in person or submit an inquiry below.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 3.5rem; align-items: start;">
          <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 2.5rem;">
            <span class="brand-subtitle">Showroom Information</span>
            <h3 class="editorial-title" style="font-size: 1.6rem; margin: 0.5rem 0 1.5rem;">
              ${MOCK_DATA.store.name}
            </h3>

            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div style="display: flex; gap: 1rem;">
                <div style="flex-shrink: 0; color: var(--color-bronze);">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <strong style="display: block; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem;">Address</strong>
                  <span style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">
                    ${MOCK_DATA.store.address}
                  </span>
                </div>
              </div>

              <div style="display: flex; gap: 1rem;">
                <div style="flex-shrink: 0; color: var(--color-bronze);">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <strong style="display: block; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem;">Phone Number</strong>
                  <a href="tel:${MOCK_DATA.store.phone}" style="font-size: 1rem; color: var(--color-charcoal); font-weight: 600; text-decoration: underline;">
                    ${MOCK_DATA.store.phone}
                  </a>
                </div>
              </div>
            </div>

            <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-sand); font-size: 0.875rem; color: var(--color-text-muted);">
              <p>For custom residential installations or architectural volume orders, please contact our showroom directly.</p>
            </div>
          </div>

          <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 2.5rem;">
            <h3 class="editorial-title" style="font-size: 1.5rem; margin-bottom: 1.5rem;">Send an Inquiry</h3>
            <form onsubmit="event.preventDefault(); alert('Thank you for contacting Riaz Home Decor. Our showroom team will reach back out to you promptly.');">
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div>
                  <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Full Name *</label>
                  <input type="text" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
                </div>
                <div>
                  <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Email Address *</label>
                  <input type="email" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
                </div>
                <div>
                  <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Phone Number</label>
                  <input type="tel" style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
                </div>
                <div>
                  <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Inquiry / Message *</label>
                  <textarea rows="5" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-full">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrapLayout('Contact Showroom', content);
}

function handleFAQPage() {
  const content = `
    <div class="section" style="padding-top: 3rem;">
      <div class="container-narrow">
        <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
          <a href="/">Home</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <span>FAQ</span>
        </nav>

        <div style="margin: 2rem 0 3rem; text-align: center;">
          <span class="section-eyebrow">Client Support</span>
          <h1 class="editorial-title">Frequently Asked Questions</h1>
          <p class="section-subtext" style="margin: 0 auto;">Information regarding browsing our lighting catalog, showroom consultations, and order placement.</p>
        </div>

        <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 1rem 2.5rem;">
          <div class="accordion-item active">
            <div class="accordion-header"><span>How can I place an order?</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
            <div class="accordion-content"><p>You can browse our collections online, add selected items to your bag, and proceed through our standard checkout. You can also visit our showroom on Bosan Road, Sabzazar Colony, Multan, or call us directly at ${MOCK_DATA.store.phone} to confirm pieces.</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header"><span>How can I check product availability?</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
            <div class="accordion-content"><p>Product availability is displayed in real-time on each product page. If a piece indicates "Currently unavailable" or you require multiple quantities for an architectural project, please contact us directly at ${MOCK_DATA.store.phone}.</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header"><span>What lighting information is provided?</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
            <div class="accordion-content"><p>Each lighting product lists verified specifications when recorded in our system—including dimensions (width, height, depth), materials, metallic finishes, bulb socket types, voltage compatibility, and color temperatures.</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header"><span>How can I choose the correct light for my room?</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
            <div class="accordion-content"><p>Consider the ceiling height, room dimensions, and intended atmosphere. Statement chandeliers and large fanoos work well over dining tables or in double-height living areas, while flush ceiling fixtures and sconces suit lower clearances and corridors. You may also consult our team at the Multan showroom for guidance.</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header"><span>Do you offer delivery?</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
            <div class="accordion-content"><p>Delivery options, areas, and logistics are configured based on item fragility and destination. Please refer to our Shipping Policy page or contact our store for current delivery arrangements for your location.</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header"><span>Do you offer installation?</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
            <div class="accordion-content"><p>Installation requirements vary by fixture type (such as heavy suspended chandeliers versus standard sconces). Please inquire directly with our Multan store at ${MOCK_DATA.store.phone} regarding local electrician referrals or installation coordination.</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header"><span>What is the return policy?</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
            <div class="accordion-content"><p>Please review our official Returns & Refunds Policy page or inquire with store staff at the time of purchase for terms applicable to delicate lighting and glass components.</p></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header"><span>How can I contact the store?</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
            <div class="accordion-content"><p>You can call us at ${MOCK_DATA.store.phone}, submit the inquiry form on our Contact page, or visit our showroom at ${MOCK_DATA.store.address}.</p></div>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrapLayout('Frequently Asked Questions', content);
}

function handlePolicyPage(policyName) {
  let title = policyName;
  let body = '';

  if (policyName === 'Shipping Policy') {
    body = `
      <p>This shipping policy outline can be configured by the merchant via the Shopify Admin.</p>
      <p>Because lighting fixtures and fragile glass components require dedicated handling, delivery arrangements, transit times, and carrier options will be provided based on the shipping address entered at checkout or arranged directly via our Multan showroom.</p>
      <p>For custom delivery inquiries or local Multan collection, please contact us at <strong>${MOCK_DATA.store.phone}</strong>.</p>
    `;
  } else if (policyName === 'Returns & Refunds') {
    body = `
      <p>This return and refund policy can be configured by the merchant via the Shopify Admin.</p>
      <p>We advise inspecting all glass and delicate metallic components upon receipt. Please contact our showroom team within the merchant's specified return window regarding eligible return procedures or exchange inquiries.</p>
    `;
  } else if (policyName === 'Privacy Policy') {
    body = `
      <p>This privacy policy outlines how customer personal information is handled in accordance with standard Shopify privacy and data protection policies.</p>
    `;
  } else {
    body = `
      <p>Terms and conditions governing orders, checkout, and showroom consultations at ${MOCK_DATA.store.name}.</p>
    `;
  }

  const content = `
    <div class="section" style="padding-top: 3rem;">
      <div class="container-narrow">
        <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
          <a href="/">Home</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <span>${title}</span>
        </nav>
        <div style="margin: 2rem 0 2.5rem; text-align: center;">
          <h1 class="editorial-title">${title}</h1>
        </div>
        <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: clamp(2rem, 5vw, 3.5rem); line-height: 1.8;">
          ${body}
        </div>
      </div>
    </div>
  `;
  return wrapLayout(title, content);
}

function handleWishlistPage() {
  const content = `
    <div class="section" style="padding-top: 3rem;">
      <div class="container">
        <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
          <a href="/">Home</a>
          <span style="color: var(--color-sand-dark);">/</span>
          <span>Showroom Wishlist</span>
        </nav>
        <div style="margin: 2rem 0 3rem; text-align: center;">
          <span class="section-eyebrow">Curated Selections</span>
          <h1 class="editorial-title">Your Showroom Wishlist</h1>
          <p class="section-subtext" style="margin: 0 auto;">Review your saved lighting and decor pieces, prepare for showroom consultation, or move items into your bag.</p>
        </div>
        <div class="wishlist-page-container"></div>
      </div>
    </div>
  `;
  return wrapLayout('Your Wishlist', content);
}

function handleAccountLogin() {
  const content = `
    <div class="section" style="padding-top: 4rem;">
      <div class="container-narrow" style="max-width: 500px;">
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <span class="section-eyebrow">Client Portal</span>
          <h1 class="editorial-title" style="font-size: 2.5rem;">Sign In</h1>
          <p class="section-subtext" style="font-size: 0.95rem;">Access your showroom orders and saved delivery addresses.</p>
        </div>
        <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 2.5rem;">
          <form onsubmit="event.preventDefault(); window.location.href='/account';">
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Email Address</label>
                <input type="email" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
              </div>
              <div>
                <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Password</label>
                <input type="password" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
              </div>
              <button type="submit" class="btn btn-primary btn-full" style="margin-top: 0.5rem;">Sign In</button>
            </div>
          </form>
          <div style="text-align: center; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--color-sand); font-size: 0.875rem;">
            <span style="color: var(--color-text-muted);">New client?</span>
            <a href="/account/register" style="color: var(--color-charcoal); font-weight: 600; text-decoration: underline; margin-left: 0.35rem;">Create account</a>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrapLayout('Account Sign In', content);
}

function handleAccountRegister() {
  const content = `
    <div class="section" style="padding-top: 4rem;">
      <div class="container-narrow" style="max-width: 500px;">
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <span class="section-eyebrow">Client Portal</span>
          <h1 class="editorial-title" style="font-size: 2.5rem;">Create Account</h1>
          <p class="section-subtext" style="font-size: 0.95rem;">Join our client network for lighting consultation and order tracking.</p>
        </div>
        <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 2.5rem;">
          <form onsubmit="event.preventDefault(); window.location.href='/account';">
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">First Name</label>
                <input type="text" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
              </div>
              <div>
                <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Last Name</label>
                <input type="text" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
              </div>
              <div>
                <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Email Address</label>
                <input type="email" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
              </div>
              <div>
                <label style="display: block; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;">Password</label>
                <input type="password" required style="width: 100%; padding: 0.85rem; border: 1px solid var(--color-sand-dark); border-radius: var(--radius-subtle); background: var(--color-ivory);">
              </div>
              <button type="submit" class="btn btn-primary btn-full" style="margin-top: 0.5rem;">Create Account</button>
            </div>
          </form>
          <div style="text-align: center; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--color-sand); font-size: 0.875rem;">
            <span style="color: var(--color-text-muted);">Already registered?</span>
            <a href="/account/login" style="color: var(--color-charcoal); font-weight: 600; text-decoration: underline; margin-left: 0.35rem;">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrapLayout('Register Account', content);
}

function handleAccountDashboard() {
  const content = `
    <div class="section" style="padding-top: 3.5rem;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <span class="section-eyebrow">Client Portal</span>
            <h1 class="editorial-title">Account Dashboard</h1>
            <p class="section-subtext">Manage your showroom orders and delivery details.</p>
          </div>
          <div><a href="/account/login" class="btn btn-outline btn-sm">Log Out</a></div>
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: start;">
          <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 2rem;">
            <h2 class="editorial-title" style="font-size: 1.5rem; margin-bottom: 1.5rem;">Recent Orders</h2>
            <div style="padding: 2.5rem 1rem; text-align: center; color: var(--color-text-muted);">
              <p>No recent orders found. Items ordered in our online checkout or recorded at the showroom will appear here.</p>
              <a href="/collections/all" class="btn btn-outline btn-sm" style="margin-top: 1.25rem;">Explore Catalog</a>
            </div>
          </div>
          <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 2rem;">
            <h2 class="editorial-title" style="font-size: 1.5rem; margin-bottom: 1.25rem;">Client Details</h2>
            <div style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.8;">
              <p><strong>Showroom Guest</strong></p>
              <p>customer@example.com</p>
            </div>
            <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--color-sand);">
              <h3 class="editorial-title" style="font-size: 1.2rem; margin-bottom: 0.5rem;">Primary Showroom</h3>
              <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6;">${MOCK_DATA.store.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrapLayout('Account Dashboard', content);
}

function handleCheckout() {
  const content = `
    <div class="section" style="padding-top: 4rem;">
      <div class="container-narrow" style="max-width: 650px; text-align: center;">
        <span class="section-eyebrow">Shopify Native Checkout</span>
        <h1 class="editorial-title" style="margin: 1rem 0;">Shopify Native Checkout Integration</h1>
        <div style="background: var(--color-white); border: var(--border-hairline); border-radius: var(--radius-subtle); padding: 3rem 2rem; margin-top: 2rem; text-align: left; line-height: 1.8;">
          <p>This store is engineered with Shopify's 100% compliant standard checkout architecture:</p>
          <div style="margin: 1.5rem 0; padding: 1.5rem; background: var(--color-ivory-warm); border-radius: var(--radius-subtle);">
            <strong>Native Customer Journey:</strong><br>
            Product &rarr; Cart Drawer / Bag &rarr; Official Shopify Checkout &rarr; Customer Details &rarr; Shipping Method &rarr; Payment &rarr; Order Confirmation.
          </div>
          <p style="font-size: 0.875rem; color: var(--color-text-muted);">
            Payment gateways, regional courier shipping rates, and tax calculations are configured by the merchant directly inside the official Shopify Admin settings.
          </p>
          <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <a href="/" class="btn btn-primary btn-full">Return to Store</a>
            <a href="/cart" class="btn btn-outline btn-full">Return to Bag</a>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrapLayout('Shopify Checkout', content);
}

// Server Creation
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Serve Static Assets from assets/
  if (pathname.startsWith('/assets/')) {
    const filename = pathname.replace('/assets/', '');
    const filePath = path.join(ROOT_DIR, 'assets', filename);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath);
      let contentType = 'text/plain';
      if (ext === '.css') contentType = 'text/css';
      if (ext === '.js') contentType = 'application/javascript';
      if (ext === '.svg') contentType = 'image/svg+xml';
      if (ext === '.json') contentType = 'application/json';

      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }

  // Routing
  let responseHTML = '';
  if (pathname === '/' || pathname === '/index.html') {
    responseHTML = handleHome();
  } else if (pathname === '/collections/all' || pathname === '/shop') {
    responseHTML = handleCollection('all');
  } else if (pathname.startsWith('/collections/')) {
    const handle = pathname.replace('/collections/', '');
    responseHTML = handleCollection(handle);
  } else if (pathname.startsWith('/products/')) {
    const handle = pathname.replace('/products/', '');
    responseHTML = handleProduct(handle);
  } else if (pathname === '/pages/lighting') {
    // Dedicated Lighting Page
    const fanoosP = MOCK_DATA.products.filter(p => p.type === 'Lighting');
    const content = `
      <div class="section" style="padding-top: 3rem;">
        <div class="container">
          <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
            <a href="/">Home</a>
            <span style="color: var(--color-sand-dark);">/</span>
            <span>Lighting Gallery</span>
          </nav>
          <div style="margin: 2rem 0 3.5rem; max-width: 800px;">
            <span class="section-eyebrow">Complete Architectural Catalog</span>
            <h1 class="editorial-title" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem;">Lighting Gallery</h1>
            <p class="section-subtext">From statement focal chandeliers and traditional fanoos lanterns to minimal flush ceiling discs and intimate table lamps—discover lighting engineered for beauty and atmosphere.</p>
          </div>
          <div class="product-grid">${fanoosP.map(renderProductCard).join('')}</div>
        </div>
      </div>
    `;
    responseHTML = wrapLayout('Lighting Gallery', content);
  } else if (pathname === '/pages/home-decor') {
    // Dedicated Home Decor Page
    const decorP = MOCK_DATA.products.filter(p => p.type === 'Home Decor');
    const content = `
      <div class="section" style="padding-top: 3rem;">
        <div class="container">
          <nav class="pdp-breadcrumb" aria-label="breadcrumbs">
            <a href="/">Home</a>
            <span style="color: var(--color-sand-dark);">/</span>
            <span>Home Decor Gallery</span>
          </nav>
          <div style="margin: 2rem 0 3.5rem; max-width: 800px;">
            <span class="section-eyebrow">Sculptural Atmosphere</span>
            <h1 class="editorial-title" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem;">Home Decor Gallery</h1>
            <p class="section-subtext">Artisanal accents that harmonize with architectural lighting—deep-framed bronze mirrors, hand-thrown ceramics, textured plaster wall reliefs, and curated stone showpieces.</p>
          </div>
          <div class="product-grid">${decorP.map(renderProductCard).join('')}</div>
        </div>
      </div>
    `;
    responseHTML = wrapLayout('Home Decor Gallery', content);
  } else if (pathname === '/pages/about') {
    responseHTML = handleAboutPage();
  } else if (pathname === '/pages/contact') {
    responseHTML = handleContactPage();
  } else if (pathname === '/pages/faq') {
    responseHTML = handleFAQPage();
  } else if (pathname === '/pages/shipping') {
    responseHTML = handlePolicyPage('Shipping Policy');
  } else if (pathname === '/pages/returns') {
    responseHTML = handlePolicyPage('Returns & Refunds');
  } else if (pathname === '/pages/privacy') {
    responseHTML = handlePolicyPage('Privacy Policy');
  } else if (pathname === '/pages/terms') {
    responseHTML = handlePolicyPage('Terms & Conditions');
  } else if (pathname === '/pages/wishlist') {
    responseHTML = handleWishlistPage();
  } else if (pathname === '/cart') {
    responseHTML = handleCartPage();
  } else if (pathname === '/account/login') {
    responseHTML = handleAccountLogin();
  } else if (pathname === '/account/register') {
    responseHTML = handleAccountRegister();
  } else if (pathname === '/account') {
    responseHTML = handleAccountDashboard();
  } else if (pathname === '/checkout') {
    responseHTML = handleCheckout();
  } else {
    // 404
    const content = `
      <div class="section" style="padding-top: 5rem; text-align: center;">
        <div class="container-narrow">
          <span class="section-eyebrow">404</span>
          <h1 class="editorial-title" style="margin: 1rem 0;">Page Not Found</h1>
          <p class="section-subtext" style="margin: 0 auto 2rem;">The showroom collection or piece you are looking for is unavailable.</p>
          <a href="/collections/all" class="btn btn-primary">Return to Collections</a>
        </div>
      </div>
    `;
    responseHTML = wrapLayout('Page Not Found', content);
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(responseHTML);
});

server.listen(PORT, () => {
  console.log(`================================================================`);
  console.log(`RIAZ HOME DECOR FANOOS LIGHT & DECOR`);
  console.log(`Showroom Theme Preview Server active on http://localhost:${PORT}`);
  console.log(`================================================================`);
});

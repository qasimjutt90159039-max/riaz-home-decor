/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Predictive Search Overlay
 */

class SearchManager {
  constructor() {
    this.overlay = document.querySelector('.search-modal');
    this.backdrop = document.querySelector('.overlay-backdrop');
    this.input = document.querySelector('[data-search-input]');
    this.resultsContainer = document.querySelector('[data-search-results]');
    this.init();
  }

  init() {
    // Open trigger
    document.querySelectorAll('[data-search-trigger]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    // Close button
    document.querySelectorAll('[data-search-close]').forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    // ESC key support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay && this.overlay.classList.contains('active')) {
        this.close();
      }
    });

    // Search input typing
    if (this.input) {
      this.input.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        this.performSearch(query);
      });
    }
  }

  open() {
    if (this.overlay) {
      this.overlay.classList.add('active');
      if (this.backdrop) this.backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (this.input) this.input.focus();
      }, 150);
    }
  }

  close() {
    if (this.overlay) {
      this.overlay.classList.remove('active');
      if (!document.querySelector('.cart-drawer.active') && !document.querySelector('.quick-view-modal.active')) {
        if (this.backdrop) this.backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }

  async performSearch(query) {
    if (!this.resultsContainer) return;

    if (!query) {
      this.resultsContainer.innerHTML = `
        <div style="padding: 1.5rem 0; color: var(--color-text-muted); font-size: 0.9375rem;">
          Popular searches: <a href="/collections/fanoos" style="text-decoration: underline; margin-left: 0.5rem; color: var(--color-charcoal);">Fanoos</a>, 
          <a href="/collections/chandeliers" style="text-decoration: underline; margin-left: 0.5rem; color: var(--color-charcoal);">Chandeliers</a>, 
          <a href="/collections/lamps" style="text-decoration: underline; margin-left: 0.5rem; color: var(--color-charcoal);">Lamps</a>, 
          <a href="/pages/home-decor" style="text-decoration: underline; margin-left: 0.5rem; color: var(--color-charcoal);">Ceramic Vases</a>
        </div>
      `;
      return;
    }

    // Try Shopify native predictive search API or fallback to window.STORE_PRODUCTS
    let results = [];
    if (window.STORE_PRODUCTS && Array.isArray(window.STORE_PRODUCTS)) {
      results = window.STORE_PRODUCTS.filter(p => {
        const nameMatch = p.title.toLowerCase().includes(query);
        const categoryMatch = p.category && p.category.toLowerCase().includes(query);
        const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(query));
        const roomMatch = p.room && p.room.toLowerCase().includes(query);
        return nameMatch || categoryMatch || tagMatch || roomMatch;
      });
    }

    if (results.length === 0) {
      this.resultsContainer.innerHTML = `
        <div class="search-empty-state">
          <h3 class="search-empty-title">No products found</h3>
          <p class="search-empty-sub">Try another search or explore our collections.</p>
          <div style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1rem;">
            <a href="/collections/all" class="btn btn-primary btn-sm" onclick="window.searchManager.close()">All Collections</a>
            <a href="/pages/lighting" class="btn btn-outline btn-sm" onclick="window.searchManager.close()">Lighting Gallery</a>
          </div>
        </div>
      `;
    } else {
      this.resultsContainer.innerHTML = `
        <div style="font-size: 0.8125rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-bronze); margin-bottom: 1.5rem; font-weight: 600;">
          Found ${results.length} Showroom Product${results.length > 1 ? 's' : ''}
        </div>
        <div class="product-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem;">
          ${results.slice(0, 6).map(p => `
            <a href="${p.url || '/products/' + p.handle}" class="product-card" style="box-shadow: none;" onclick="window.searchManager.close()">
              <div class="card-media-wrapper" style="padding-top: 100%;">
                <img src="${p.image}" alt="${p.title}">
              </div>
              <div class="card-content" style="padding: 1rem 0.5rem 0.5rem;">
                <span class="card-category">${p.category || 'Lighting'}</span>
                <h4 class="card-title" style="font-size: 1.05rem;">${p.title}</h4>
                <div class="card-price-row">
                  <span class="price-regular">PKR ${parseFloat(p.price).toLocaleString()}</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      `;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.searchManager = new SearchManager();
});

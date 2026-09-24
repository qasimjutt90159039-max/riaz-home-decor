/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Quick View Modal Component
 */

class QuickViewManager {
  constructor() {
    this.modal = document.querySelector('.quick-view-modal');
    this.backdrop = document.querySelector('.overlay-backdrop');
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-quick-view-btn]');
      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        const productData = {
          id: trigger.getAttribute('data-id'),
          title: trigger.getAttribute('data-title'),
          price: trigger.getAttribute('data-price'),
          comparePrice: trigger.getAttribute('data-compare-price'),
          image: trigger.getAttribute('data-image'),
          category: trigger.getAttribute('data-category') || 'Showroom Selection',
          url: trigger.getAttribute('data-url') || '/products/modern-fanoos-pendant',
          desc: trigger.getAttribute('data-desc') || 'Architectural lighting crafted to transform ambient atmosphere with refined geometry and soft illumination.'
        };
        this.open(productData);
      }
    });

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target.closest('[data-modal-close]')) {
          this.close();
        }
      });
    }
  }

  open(product) {
    if (!this.modal) return;

    this.modal.innerHTML = `
      <button type="button" class="modal-close-btn" data-modal-close aria-label="Close Quick View">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center;">
        <div style="width: 100%; padding-top: 110%; position: relative; background: var(--color-ivory-warm); border-radius: var(--radius-subtle); overflow: hidden;">
          <img src="${product.image}" alt="${product.title}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div>
          <span style="font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-bronze); font-weight: 600;">${product.category}</span>
          <h2 style="font-size: 1.85rem; margin: 0.5rem 0 1rem;">${product.title}</h2>
          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 1.25rem;">
            <span style="font-size: 1.35rem; font-weight: 600;">PKR ${parseFloat(product.price).toLocaleString()}</span>
            ${product.comparePrice ? `<span style="text-decoration: line-through; color: var(--color-text-muted);">PKR ${parseFloat(product.comparePrice).toLocaleString()}</span>` : ''}
          </div>
          <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.5rem;">${product.desc}</p>
          
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 0.5rem;">Finish</label>
            <div style="display: flex; gap: 0.5rem;">
              <span class="variant-pill active">Antique Bronze</span>
              <span class="variant-pill">Warm Sand</span>
              <span class="variant-pill">Patinated Brass</span>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
            <button type="button" class="btn btn-primary btn-full" onclick="window.cartManager.addItem({ id: '${product.id}', title: '${product.title.replace(/'/g, "\\'")}', price: ${product.price}, image: '${product.image}' }); window.quickView.close();">
              Add to Bag
            </button>
          </div>

          <a href="${product.url}" style="font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: underline; color: var(--color-charcoal); font-weight: 600;">
            View Complete Details & Metafields →
          </a>
        </div>
      </div>
    `;

    this.modal.classList.add('active');
    if (this.backdrop) this.backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (this.modal) this.modal.classList.remove('active');
    if (!document.querySelector('.cart-drawer.active') && !document.querySelector('.search-modal.active')) {
      if (this.backdrop) this.backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.quickView = new QuickViewManager();
});

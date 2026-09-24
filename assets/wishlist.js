/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Wishlist Manager (localStorage for guest, expandable to Shopify customer metafields)
 */

class WishlistManager {
  constructor() {
    this.storageKey = 'riaz_wishlist_items';
    this.badges = document.querySelectorAll('.wishlist-count-badge');
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateUI();
  }

  getItems() {
    try {
      const items = localStorage.getItem(this.storageKey);
      return items ? JSON.parse(items) : [];
    } catch (e) {
      return [];
    }
  }

  saveItems(items) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.updateUI();
  }

  toggleItem(product) {
    let items = this.getItems();
    const existingIndex = items.findIndex(item => item.id == product.id);

    if (existingIndex > -1) {
      items.splice(existingIndex, 1);
    } else {
      items.push(product);
    }

    this.saveItems(items);
    return existingIndex === -1; // returns true if added, false if removed
  }

  isInWishlist(id) {
    return this.getItems().some(item => item.id == id);
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-wishlist-toggle]');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const title = btn.getAttribute('data-title');
        const price = btn.getAttribute('data-price');
        const image = btn.getAttribute('data-image');
        const handle = btn.getAttribute('data-handle');

        const isAdded = this.toggleItem({ id, title, price, image, handle });
        btn.classList.toggle('active', isAdded);

        // Visual feedback
        if (isAdded) {
          btn.setAttribute('title', 'Remove from Wishlist');
        } else {
          btn.setAttribute('title', 'Add to Wishlist');
        }
      }

      // Move to Cart from wishlist page
      const moveToCartBtn = e.target.closest('[data-wishlist-move-to-cart]');
      if (moveToCartBtn) {
        e.preventDefault();
        const id = moveToCartBtn.getAttribute('data-id');
        const title = moveToCartBtn.getAttribute('data-title');
        const price = parseFloat(moveToCartBtn.getAttribute('data-price') || 0);
        const image = moveToCartBtn.getAttribute('data-image');
        
        if (window.cartManager) {
          window.cartManager.addItem({ id, quantity: 1, title, price, image });
          this.toggleItem({ id }); // remove from wishlist
          this.renderWishlistPage();
        }
      }

      // Remove button on wishlist page
      const removeBtn = e.target.closest('[data-wishlist-remove]');
      if (removeBtn) {
        e.preventDefault();
        const id = removeBtn.getAttribute('data-id');
        let items = this.getItems().filter(item => item.id != id);
        this.saveItems(items);
        this.renderWishlistPage();
      }
    });
  }

  updateUI() {
    const items = this.getItems();
    const count = items.length;

    this.badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });

    // Update heart icons on cards
    document.querySelectorAll('[data-wishlist-toggle]').forEach(btn => {
      const id = btn.getAttribute('data-product-id');
      if (this.isInWishlist(id)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // If on wishlist page, re-render
    this.renderWishlistPage();
  }

  renderWishlistPage() {
    const container = document.querySelector('.wishlist-page-container');
    if (!container) return;

    const items = this.getItems();
    if (items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-message" style="padding: 4rem 1rem;">
          <h2 class="cart-empty-title">Your Wishlist is Empty</h2>
          <p class="cart-empty-text">Save your favorite lighting and decor pieces to review them later or prepare your showroom consultation.</p>
          <a href="/collections/all" class="btn btn-primary btn-sm">Explore Collections</a>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="product-grid">
          ${items.map(item => `
            <div class="product-card">
              <div class="card-media-wrapper">
                <img src="${item.image}" alt="${item.title}">
                <div class="card-quick-actions">
                  <button type="button" class="card-action-btn active" data-wishlist-remove data-id="${item.id}" title="Remove">
                    <svg viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" fill="none"/></svg>
                  </button>
                </div>
              </div>
              <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-price-row">
                  <span class="price-regular">PKR ${parseFloat(item.price).toLocaleString()}</span>
                </div>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                  <button type="button" class="btn btn-outline btn-sm btn-full" data-wishlist-move-to-cart data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-image="${item.image}">
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.wishlistManager = new WishlistManager();
});

/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Shopify Ajax Cart & Drawer Controller
 */

class CartManager {
  constructor() {
    this.drawer = document.querySelector('.cart-drawer');
    this.backdrop = document.querySelector('.overlay-backdrop');
    this.drawerBody = document.querySelector('.drawer-body');
    this.cartCountBadges = document.querySelectorAll('.cart-count-badge');
    this.subtotalElement = document.querySelector('.drawer-subtotal-val');
    this.init();
  }

  init() {
    this.bindEvents();
    this.loadCart();
  }

  bindEvents() {
    // Open Cart Drawer
    document.querySelectorAll('[data-cart-trigger]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDrawer();
      });
    });

    // Close Cart Drawer
    document.querySelectorAll('[data-cart-close]').forEach(btn => {
      btn.addEventListener('click', () => this.closeDrawer());
    });

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => {
        this.closeDrawer();
        if (window.quickView) window.quickView.close();
        if (window.searchManager) window.searchManager.close();
      });
    }

    // Intercept form submissions for Add to Cart
    document.addEventListener('submit', (e) => {
      if (e.target.matches('form[action*="/cart/add"]') || e.target.classList.contains('ajax-add-form')) {
        e.preventDefault();
        this.handleAddToCartForm(e.target);
      }
    });

    // Direct Quick Add Button Clicks
    document.addEventListener('click', (e) => {
      const quickAddBtn = e.target.closest('[data-quick-add-id]');
      if (quickAddBtn) {
        e.preventDefault();
        const id = quickAddBtn.getAttribute('data-quick-add-id');
        const title = quickAddBtn.getAttribute('data-title') || 'Lighting Item';
        const price = parseFloat(quickAddBtn.getAttribute('data-price') || 0);
        const image = quickAddBtn.getAttribute('data-image') || '';
        this.addItem({ id, quantity: 1, title, price, image });
      }
    });
  }

  openDrawer() {
    if (this.drawer) this.drawer.classList.add('active');
    if (this.backdrop) this.backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    if (this.drawer) this.drawer.classList.remove('active');
    if (!document.querySelector('.search-modal.active') && !document.querySelector('.quick-view-modal.active')) {
      if (this.backdrop) this.backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  async handleAddToCartForm(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerText : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Adding...';
    }

    const formData = new FormData(form);
    
    // Support Shopify production API and local fallback
    try {
      if (window.Shopify && window.Shopify.routes) {
        const response = await fetch(window.Shopify.routes.root + 'cart/add.js', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          await this.loadCart();
          this.openDrawer();
        } else {
          console.warn('Shopify cart API returned error, falling back to local');
          this.fallbackAddToCart(formData);
        }
      } else {
        this.fallbackAddToCart(formData);
      }
    } catch (err) {
      this.fallbackAddToCart(formData);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      }
    }
  }

  fallbackAddToCart(formData) {
    const id = formData.get('id') || 'demo-' + Date.now();
    const qty = parseInt(formData.get('quantity') || '1', 10);
    const title = formData.get('title') || document.querySelector('.pdp-title')?.innerText || 'Curated Decor Piece';
    const price = parseFloat(formData.get('price') || '18500');
    const image = formData.get('image') || document.querySelector('.pdp-main-image-wrap img')?.src || '';

    this.addItem({ id, quantity: qty, title, price, image });
  }

  getCartItems() {
    try {
      const stored = localStorage.getItem('riaz_cart_items');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveCartItems(items) {
    localStorage.setItem('riaz_cart_items', JSON.stringify(items));
    this.render();
  }

  addItem({ id, quantity = 1, title, price, image }) {
    let items = this.getCartItems();
    const existing = items.find(item => item.id == id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({
        id,
        title,
        price,
        image,
        quantity
      });
    }
    this.saveCartItems(items);
    this.openDrawer();
  }

  updateQuantity(id, newQty) {
    let items = this.getCartItems();
    if (newQty <= 0) {
      items = items.filter(item => item.id != id);
    } else {
      const target = items.find(item => item.id == id);
      if (target) target.quantity = newQty;
    }
    this.saveCartItems(items);
  }

  removeItem(id) {
    let items = this.getCartItems().filter(item => item.id != id);
    this.saveCartItems(items);
  }

  async loadCart() {
    this.render();
  }

  render() {
    const items = this.getCartItems();
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update count badges
    this.cartCountBadges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    if (this.subtotalElement) {
      this.subtotalElement.textContent = `PKR ${subtotal.toLocaleString()}`;
    }

    if (!this.drawerBody) return;

    if (items.length === 0) {
      this.drawerBody.innerHTML = `
        <div class="cart-empty-message">
          <h3 class="cart-empty-title">Your space is waiting</h3>
          <p class="cart-empty-text">Your showroom bag is currently empty. Explore our lighting and home decor collections to illuminate your space.</p>
          <a href="/collections/all" class="btn btn-outline btn-sm" onclick="window.cartManager.closeDrawer()">Explore Collections</a>
        </div>
      `;
      const footer = document.querySelector('.drawer-footer');
      if (footer) footer.style.display = 'none';
    } else {
      const footer = document.querySelector('.drawer-footer');
      if (footer) footer.style.display = 'block';

      this.drawerBody.innerHTML = items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <div class="cart-item-price">PKR ${item.price.toLocaleString()}</div>
            <div class="cart-item-actions">
              <div class="qty-control">
                <button type="button" class="qty-btn" onclick="window.cartManager.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                <input type="text" class="qty-input" value="${item.quantity}" readonly>
                <button type="button" class="qty-btn" onclick="window.cartManager.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
              </div>
              <button type="button" class="cart-item-remove" onclick="window.cartManager.removeItem('${item.id}')">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cartManager = new CartManager();
});

/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Collection Filters and Sorting
 */

class CollectionFilterManager {
  constructor() {
    this.sortSelect = document.querySelector('[data-sort-select]');
    this.filterSelects = document.querySelectorAll('[data-filter-select]');
    this.categoryPills = document.querySelectorAll('[data-filter-category]');
    this.init();
  }

  init() {
    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', () => this.applyFilters());
    }

    this.filterSelects.forEach(sel => {
      sel.addEventListener('change', () => this.applyFilters());
    });

    this.categoryPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        this.categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.applyFilters();
      });
    });
  }

  applyFilters() {
    const cards = Array.from(document.querySelectorAll('.product-grid .product-card'));
    if (cards.length === 0) return;

    const activePill = document.querySelector('[data-filter-category].active');
    const selectedCategory = activePill ? activePill.getAttribute('data-filter-category') : 'all';

    const sortVal = this.sortSelect ? this.sortSelect.value : 'featured';

    let visibleCards = cards.filter(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardRoom = card.getAttribute('data-room') || '';
      const cardType = card.getAttribute('data-type') || '';

      if (selectedCategory === 'all') return true;
      return cardCategory.toLowerCase().includes(selectedCategory.toLowerCase()) ||
             cardRoom.toLowerCase().includes(selectedCategory.toLowerCase()) ||
             cardType.toLowerCase().includes(selectedCategory.toLowerCase());
    });

    // Hide unmatching
    cards.forEach(card => {
      if (visibleCards.includes(card)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // Sorting
    const container = document.querySelector('.product-grid');
    if (container && sortVal) {
      visibleCards.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price') || 0);
        const priceB = parseFloat(b.getAttribute('data-price') || 0);
        const titleA = a.querySelector('.card-title')?.innerText || '';
        const titleB = b.querySelector('.card-title')?.innerText || '';

        if (sortVal === 'price-low-high') return priceA - priceB;
        if (sortVal === 'price-high-low') return priceB - priceA;
        if (sortVal === 'title-asc') return titleA.localeCompare(titleB);
        return 0; // default order
      });

      visibleCards.forEach(c => container.appendChild(c));
    }

    // Update count indicator if present
    const countIndicator = document.querySelector('[data-product-count]');
    if (countIndicator) {
      countIndicator.textContent = `Showing ${visibleCards.length} products`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.filterManager = new CollectionFilterManager();
});

/**
 * GastroCare Services Category Filtering
 */
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-item-wrapper, .service-item-col');

  if (!filterBtns.length || !serviceCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-gc-primary'));
      filterBtns.forEach(b => b.classList.add('btn-gc-secondary'));

      this.classList.add('active', 'btn-gc-primary');
      this.classList.remove('btn-gc-secondary');

      const filter = this.getAttribute('data-filter');

      serviceCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

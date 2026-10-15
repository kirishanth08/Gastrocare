/**
 * GastroCare Doctor Directory Filtering & Search
 * Allows instant specialty filtering, live text search, and zero-state handling
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const filterButtons = document.querySelectorAll('.doctor-filter-btn, .filter-btn');
  const doctorCards = document.querySelectorAll('.doctor-item-col');
  const searchInput = document.getElementById('doctorSearchInput');
  const searchClearBtn = document.getElementById('doctorSearchClearBtn');
  const resultsCount = document.getElementById('doctorResultsCount');
  const noResultsMsg = document.getElementById('noDoctorsFound');
  const resetFiltersBtn = document.getElementById('resetDoctorFiltersBtn');

  let activeCategory = 'all';
  let searchTerm = '';

  function filterCards() {
    let visibleCount = 0;
    const totalCount = doctorCards.length;

    doctorCards.forEach(card => {
      const category = (card.getAttribute('data-specialty') || '').toLowerCase();
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const cardText = (card.textContent || '').toLowerCase();

      // Check Category
      let matchCat = false;
      if (activeCategory === 'all') {
        matchCat = true;
      } else {
        const catWords = activeCategory.toLowerCase().split(' ');
        matchCat = catWords.some(w => category.includes(w));
      }

      // Check Search Term
      let matchSearch = true;
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        matchSearch = name.includes(query) || title.includes(query) || category.includes(query) || cardText.includes(query);
      }

      if (matchCat && matchSearch) {
        card.style.display = '';
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 30);
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update Result Counters
    if (resultsCount) {
      resultsCount.textContent = visibleCount;
    }

    // Toggle Empty State Box
    if (noResultsMsg) {
      noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    // Toggle Search Clear Button visibility
    if (searchClearBtn) {
      searchClearBtn.style.display = searchTerm ? 'inline-flex' : 'none';
    }
  }

  // Filter Button Clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        if (b.classList.contains('btn-gc-primary')) {
          b.classList.remove('btn-gc-primary');
          b.classList.add('btn-gc-outline');
        }
      });

      this.classList.add('active');
      if (this.classList.contains('btn-gc-outline')) {
        this.classList.remove('btn-gc-outline');
        this.classList.add('btn-gc-primary');
      }

      activeCategory = this.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  // Search Input Real-Time Event
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchTerm = this.value.trim();
      filterCards();
    });

    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        this.value = '';
        searchTerm = '';
        filterCards();
      }
    });
  }

  // Search Clear Button
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchTerm = '';
      filterCards();
    });
  }

  // Reset Filters from Empty State
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
      }
      searchTerm = '';
      activeCategory = 'all';

      filterButtons.forEach(b => {
        if (b.getAttribute('data-filter') === 'all') {
          b.classList.add('active');
          if (b.classList.contains('btn-gc-outline')) {
            b.classList.remove('btn-gc-outline');
            b.classList.add('btn-gc-primary');
          }
        } else {
          b.classList.remove('active');
          if (b.classList.contains('btn-gc-primary')) {
            b.classList.remove('btn-gc-primary');
            b.classList.add('btn-gc-outline');
          }
        }
      });

      filterCards();
    });
  }

  // Initial Filter Execution
  filterCards();
});

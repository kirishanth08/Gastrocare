/**
 * GastroCare Procedure Preparation Interactive Engine
 * Interactive checklist, stage expansion, completion recalculation & dynamic progress bar
 */
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const checkboxes = document.querySelectorAll('.prep-checkbox');
  const progressBar = document.getElementById('prepProgressBar');
  const progressText = document.getElementById('prepProgressText');

  function calculateProgress() {
    if (!checkboxes.length) return;

    let checkedCount = 0;
    checkboxes.forEach(cb => {
      const parentItem = cb.closest('.prep-item');
      if (cb.checked) {
        checkedCount++;
        if (parentItem) parentItem.classList.add('completed');
      } else {
        if (parentItem) parentItem.classList.remove('completed');
      }
    });

    const percent = Math.round((checkedCount / checkboxes.length) * 100);

    if (progressBar) {
      progressBar.style.width = `${percent}%`;
      progressBar.setAttribute('aria-valuenow', percent);
    }
    if (progressText) {
      progressText.textContent = `${percent}% Completed`;
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', calculateProgress);
  });

  // Toggle stage cards collapse
  const headers = document.querySelectorAll('.prep-stage-header');
  headers.forEach(h => {
    h.addEventListener('click', function() {
      const card = this.closest('.prep-stage-card');
      const body = card.querySelector('.prep-checklist');
      if (body) {
        if (body.style.display === 'none') {
          body.style.display = 'block';
          this.querySelector('.stage-toggle-icon').textContent = '−';
        } else {
          body.style.display = 'none';
          this.querySelector('.stage-toggle-icon').textContent = '+';
        }
      }
    });
  });

  // Calculate initially
  calculateProgress();
});

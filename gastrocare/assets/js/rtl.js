/**
 * GastroCare RTL / LTR Direction Manager
 * Manages direction attribute and localStorage preference
 */
(function() {
  'use strict';

  const STORAGE_KEY = 'gastrocare-direction';

  function getDirection() {
    return localStorage.getItem(STORAGE_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    const toggles = document.querySelectorAll('.rtl-toggle-btn');
    toggles.forEach(btn => {
      btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to Left-to-Right layout' : 'Switch to Right-to-Left layout');
    });
  }

  // Initial load
  const currentDir = getDirection();
  applyDirection(currentDir);

  document.addEventListener('DOMContentLoaded', function() {
    applyDirection(currentDir);

    const toggles = document.querySelectorAll('.rtl-toggle-btn');
    toggles.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const active = document.documentElement.getAttribute('dir') || 'ltr';
        const next = active === 'rtl' ? 'ltr' : 'rtl';
        localStorage.setItem(STORAGE_KEY, next);
        applyDirection(next);
      });
    });
  });
})();

/**
 * Jiovan.me - Site Scripts
 */

(function() {
  'use strict';

  // --- Tenure Counter ---
  const tenureEl = document.getElementById('tenure');
  const START_DATE = new Date('2018-10-01T15:00:00-06:00');

  function formatTenure() {
    const now = new Date();
    const years = now.getFullYear() - START_DATE.getFullYear();
    const months = now.getMonth() - START_DATE.getMonth();

    let totalYears = years;
    let totalMonths = months;

    if (totalMonths < 0) {
      totalYears--;
      totalMonths += 12;
    }

    // Simple, clean format
    if (totalYears > 0 && totalMonths > 0) {
      return `${totalYears}+ years`;
    } else if (totalYears > 0) {
      return `${totalYears} years`;
    } else {
      return `${totalMonths} months`;
    }
  }

  if (tenureEl) {
    tenureEl.textContent = formatTenure();
  }

  // --- Theme Toggle ---
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const STORAGE_KEY = 'theme';

  // Check for saved preference or system preference
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Initialize theme
  setTheme(getPreferredTheme());

  // Toggle on click
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      setTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

})();

/**
 * Apple-style scroll appearance animations for Product Design Portfolio
 * Features:
 * - Fluid cubic-bezier easing matching Apple's iOS/macOS spring curves
 * - IntersectionObserver with graceful fallback for older browsers
 * - Staggered device & typography reveal
 * - Performance optimized (will-change and transform/opacity only)
 * - Safe progressive enhancement (no blank screens if JS is blocked)
 */
(function () {
  'use strict';

  function initPortfolioAnimations() {
    var elements = document.querySelectorAll(
      '.portfolio-heading-reveal, .portfolio-element'
    );

    if (!elements.length) return;

    // If IntersectionObserver is not available, show all immediately
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('is-visible');
      }
      return;
    }

    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12,
    };

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    for (var j = 0; j < elements.length; j++) {
      observer.observe(elements[j]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolioAnimations);
  } else {
    initPortfolioAnimations();
  }
})();

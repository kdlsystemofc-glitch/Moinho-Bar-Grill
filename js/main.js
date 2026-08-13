/* ==========================================================================
   MOINHO BAR & GRILL — PRODUCTION INTERACTION SCRIPT (PHASE 07)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Scroll Handler
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Floating Overlap Promo Modal Close Handler
  const promoCloseBtn = document.querySelector('.promo-close');
  const promoCard = document.querySelector('.promo-modal-card');

  promoCloseBtn?.addEventListener('click', () => {
    if (promoCard) {
      promoCard.style.opacity = '0';
      promoCard.style.transform = 'translateY(15px)';
      promoCard.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        promoCard.style.display = 'none';
      }, 300);
    }
  });

  // 3. Smooth Scroll for Navigation Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 4. Console log readiness
  console.log('Moinho Bar & Grill — Production Version 1.0 Loaded.');
});

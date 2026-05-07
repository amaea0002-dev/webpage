/* ============================================================
   Amaea Marketing Site — Interactivity
   ============================================================ */

// ── Nav scroll shadow ──────────────────────────────────────
window.addEventListener('scroll', () => {
  document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Mobile nav ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // ── Set active nav link ──────────────────────────────────
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') ||
        (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Scroll-triggered fade-up ─────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => obs.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // ── Pricing toggle ───────────────────────────────────────
  const toggleSwitch = document.getElementById('billing-toggle');
  const monthlyLabel = document.getElementById('label-monthly');
  const annualLabel  = document.getElementById('label-annual');
  const monthlyPrices = document.querySelectorAll('[data-monthly]');
  const annualPrices  = document.querySelectorAll('[data-annual]');
  const billingNotes  = document.querySelectorAll('.pricing-billing');

  if (toggleSwitch) {
    let isAnnual = false;

    function updatePricing() {
      toggleSwitch.classList.toggle('on', isAnnual);
      monthlyLabel?.classList.toggle('active', !isAnnual);
      annualLabel?.classList.toggle('active', isAnnual);

      monthlyPrices.forEach((el, i) => {
        el.textContent = isAnnual ? annualPrices[i]?.dataset.annual || el.dataset.monthly : el.dataset.monthly;
      });
      billingNotes.forEach(n => {
        n.textContent = isAnnual ? 'per month, billed annually' : 'per month, billed monthly';
      });
    }

    toggleSwitch.addEventListener('click', () => { isAnnual = !isAnnual; updatePricing(); });
    updatePricing();
  }

  // ── FAQ accordion ────────────────────────────────────────
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Contact form ─────────────────────────────────────────
  const contactForm = document.getElementById('demo-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      document.getElementById('form-success')?.style.setProperty('display', 'block');
    });
  }
});

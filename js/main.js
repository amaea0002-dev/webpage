/* ============================================================
   Amaea Marketing Site — Interactivity
   ============================================================ */

// ── Theme init (FOUC prevention handled inline in HTML) ─────
(function () {
  var t = localStorage.getItem('amaea-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', t);
})();

// ── Theme toggle ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const handleTheme = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('amaea-theme', next);
  };
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', handleTheme));

  // Inject theme toggle into mobile nav
  const mobileNavEl = document.querySelector('.mobile-nav');
  if (mobileNavEl) {
    const row = document.createElement('div');
    row.className = 'mobile-nav-theme-row';
    row.innerHTML = '<span class="mobile-nav-theme-label">Appearance</span><button class="theme-toggle" aria-label="Toggle dark mode"></button>';
    mobileNavEl.appendChild(row);
    row.querySelector('.theme-toggle').addEventListener('click', handleTheme);
  }
});

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

  // ── AI chat typing animation ──────────────────────────────
  (function () {
    const chat = document.getElementById('ai-chat-demo');
    if (!chat) return;

    const CONVOS = [
      {
        user: 'Which clients should I prioritise this week?',
        bot:  'Based on regulatory exposure, your top 3 priorities are: (1) Margaret Thompson — annual review 14 months overdue, the longest in your book. (2) Robert Chen — vulnerable client, Consumer Duty breach risk, review 11 months late. (3) 3 RMAR data gaps in Section B — due in 25 days. Resolving these moves your health score from 82 to ~93.'
      },
      {
        user: "What's missing for Robert Chen?",
        bot:  "Robert Chen (CLI-0089) is a vulnerable client with an annual review 11 months overdue. Missing: Annual Review Suitability Report, Consumer Duty Outcome Assessment, and Vulnerability Re-assessment. Adviser Alex Williams needs to action this immediately — Consumer Duty requires documented fair outcomes for all vulnerable clients."
      }
    ];

    const title = chat.querySelector('.ai-chat-title');
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function scrollBottom() { chat.scrollTop = chat.scrollHeight; }

    function typeInto(bubble, text, speed) {
      return new Promise(resolve => {
        bubble.classList.add('typing-cursor');
        let i = 0;
        // Natural rhythm: occasional micro-pauses at punctuation
        function tick() {
          if (i < text.length) {
            const ch = text[i++];
            bubble.textContent += ch;
            scrollBottom();
            const pause = /[,.:;!?—]/.test(ch) ? speed * 4 : speed + Math.random() * speed * 0.5;
            setTimeout(tick, pause);
          } else {
            bubble.classList.remove('typing-cursor');
            resolve();
          }
        }
        tick();
      });
    }

    function addMsg(type) {
      const wrap = document.createElement('div');
      wrap.className = `ai-msg ai-msg-${type}`;
      const bubble = document.createElement('div');
      bubble.className = 'ai-bubble';
      wrap.appendChild(bubble);
      if (type === 'bot') {
        const lbl = document.createElement('div');
        lbl.className = 'ai-msg-label';
        lbl.textContent = 'Amaea AI · Just now';
        wrap.appendChild(lbl);
      }
      chat.appendChild(wrap);
      scrollBottom();
      return bubble;
    }

    function addTyping() {
      const wrap = document.createElement('div');
      wrap.className = 'ai-msg ai-msg-bot';
      wrap.innerHTML = '<div class="ai-bubble ai-typing"><span></span><span></span><span></span></div>';
      chat.appendChild(wrap);
      scrollBottom();
      return wrap;
    }

    async function fadeAndReset() {
      const msgs = [...chat.children].filter(el => el !== title);
      msgs.forEach(el => { el.style.transition = 'opacity 0.5s ease'; el.style.opacity = '0'; });
      await sleep(550);
      msgs.forEach(el => el.remove());
      chat.scrollTop = 0;
    }

    async function runLoop() {
      for (const c of CONVOS) {
        await sleep(180);
        const uBubble = addMsg('user');
        await typeInto(uBubble, c.user, 44);
        await sleep(400);

        const typingEl = addTyping();
        // Thinking time scales with response length, 1.2–2.0s
        await sleep(1200 + Math.min(800, c.bot.length * 2.8));
        typingEl.remove();

        const bBubble = addMsg('bot');
        await typeInto(bBubble, c.bot, 14);
        await sleep(1100);
      }
      await sleep(3000);
      await fadeAndReset();
      await sleep(500);
      runLoop();
    }

    let started = false;
    const aiSection = document.querySelector('.ai-section');
    if (aiSection && 'IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !started) { started = true; runLoop(); }
      }, { threshold: 0.2 }).observe(aiSection);
    } else {
      runLoop();
    }
  })();
});

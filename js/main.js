/* ============================================================
   Amaea Marketing Site: Interactivity
   ============================================================ */

// ── Theme init (FOUC prevention handled inline in HTML) ─────
(function () {
  var t = localStorage.getItem('amaea-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', t);
})();

// ── Cookie consent banner ───────────────────────────────────
// UK GDPR + PECR: ask consent before setting non-essential cookies.
// Currently the site sets ZERO non-essential cookies (no analytics yet),
// but the banner is in place so any future analytics opt-in is gated.
// "Reject" must be as easy to choose as "Accept" (ICO guidance).
(function () {
  var KEY = 'amaea-cookie-consent'
  if (localStorage.getItem(KEY)) return  // user already chose
  if (typeof document === 'undefined') return

  function mount() {
    if (document.getElementById('cookie-banner')) return  // already mounted
    var html = '' +
      '<div id="cookie-banner" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">' +
        '<div class="cookie-banner-inner">' +
          '<div class="cookie-banner-content">' +
            '<p class="cookie-banner-title">Cookies on Amaea</p>' +
            '<p class="cookie-banner-text">We use essential cookies to make this site work. We’d like to set optional cookies to help us improve it. You can change your mind any time. <a href="/privacy">Privacy policy</a>.</p>' +
          '</div>' +
          '<div class="cookie-banner-actions">' +
            '<button type="button" class="btn btn-ghost btn-sm" id="cookie-reject">Reject optional</button>' +
            '<button type="button" class="btn btn-primary btn-sm" id="cookie-accept">Accept all</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    var wrap = document.createElement('div')
    wrap.innerHTML = html
    document.body.appendChild(wrap.firstChild)

    var banner = document.getElementById('cookie-banner')
    requestAnimationFrame(function () { banner.classList.add('show') })

    function dismiss(choice) {
      try { localStorage.setItem(KEY, choice) } catch (e) { /* private mode */ }
      banner.classList.remove('show')
      setTimeout(function () { banner.remove() }, 250)
      // Hook for future analytics — only load if user accepted.
      if (choice === 'accepted' && typeof window.amaeaLoadAnalytics === 'function') {
        window.amaeaLoadAnalytics()
      }
    }
    document.getElementById('cookie-accept').addEventListener('click', function () { dismiss('accepted') })
    document.getElementById('cookie-reject').addEventListener('click', function () { dismiss('rejected') })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount)
  } else {
    mount()
  }
})()

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

// ── Nav scroll shadow + hero parallax ──────────────────────
// Cache the reduced-motion query once; the listener fires on every scroll
// frame so we don't want to ask the media query each time.
const _scrollReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
window.addEventListener('scroll', () => {
  document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 10);

  // Subtle parallax on hero preview — drifts at 0.18x scroll speed.
  // Skipped entirely for users who prefer reduced motion.
  if (_scrollReducedMotion.matches) return;
  const glow = document.querySelector('.hero-preview-glow');
  if (glow) {
    const offset = window.scrollY * 0.18;
    glow.style.transform = `translateY(${offset}px)`;
  }
}, { passive: true });

// ── Mobile nav ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.removeProperty('overflow');
    // Return focus to the trigger so keyboard users don't get stranded.
    hamburger?.focus({ preventScroll: true });
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const willOpen = !mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open', willOpen);
      hamburger.setAttribute('aria-expanded', String(willOpen));
      // Prevent background scroll while the drawer is up.
      document.body.style.overflow = willOpen ? 'hidden' : '';
      if (willOpen) {
        // Focus the first link so keyboard nav lands inside the drawer.
        const firstLink = mobileNav.querySelector('a');
        // Defer one frame so the open transition has started before focus moves.
        requestAnimationFrame(() => firstLink?.focus({ preventScroll: true }));
      }
    });
    // Clicking a link closes the drawer (and returns focus).
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMobileNav);
    });
    // Esc closes the drawer; Tab/Shift+Tab loops focus inside it.
    document.addEventListener('keydown', (e) => {
      if (!mobileNav.classList.contains('open')) return;
      if (e.key === 'Escape') { closeMobileNav(); return; }
      if (e.key !== 'Tab') return;
      const focusables = mobileNav.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      const active = document.activeElement;
      // Treat focus outside the drawer as if it were on the first item.
      const inside = mobileNav.contains(active);
      if (e.shiftKey && (active === first || !inside)) {
        e.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!e.shiftKey && (active === last || !inside)) {
        e.preventDefault();
        first.focus({ preventScroll: true });
      }
    });
  }

  // ── Set active nav link + aria-current ───────────────────
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') ||
        (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // ── Scroll-triggered fade-up ─────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => obs.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // ── Stat fade + scale animation ─────────────────────────────
  if ('IntersectionObserver' in window) {
    const statObs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const idx = [...document.querySelectorAll('.stat-item')].indexOf(e.target.closest('.stat-item'));
          const delay = (idx >= 0 ? idx : 0) * 100;
          setTimeout(() => { e.target.classList.add('stat-visible'); }, delay);
          statObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.stat-value').forEach(el => statObs.observe(el));
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
      // Collapse all open items + reset their aria-expanded.
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        const q = i.querySelector('.faq-q');
        if (q) q.setAttribute('aria-expanded', 'false');
      });
      // Open the clicked one (if it wasn't already open).
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Contact form → /api/demo (Resend) ────────────────────
  const contactForm = document.getElementById('demo-form');
  if (contactForm) {
    const errorEl  = document.getElementById('form-error');
    const errorTxt = document.getElementById('form-error-text');

    function showError(msg) {
      if (errorTxt) errorTxt.textContent = msg;
      if (errorEl)  errorEl.style.display = 'flex';
    }
    function clearError() {
      if (errorEl) errorEl.style.display = 'none';
    }

    // Clear the inline error as the user starts editing.
    contactForm.querySelectorAll('input, select, textarea').forEach((el) => {
      el.addEventListener('input', clearError);
      el.addEventListener('change', clearError);
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearError();

      const btn = contactForm.querySelector('.form-submit');
      const originalText = btn?.textContent;

      // Build payload first so we can validate before disabling the submit
      // button. Strip out formsubmit-only hidden fields (those prefixed with _).
      const payload = {};
      for (const [k, v] of new FormData(contactForm).entries()) {
        if (k.startsWith('_')) continue;
        payload[k] = v;
      }

      // Mirror the server's validation so the user gets feedback without
      // a round-trip.
      const firstName = (payload.first_name || '').toString().trim();
      const lastName  = (payload.last_name  || '').toString().trim();
      const email     = (payload.email      || '').toString().trim();
      const firm      = (payload.firm       || '').toString().trim();
      if (!firstName || !lastName || !email || !firm) {
        showError('Please fill in your name, work email, and firm.');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('That doesn’t look like a valid email address.');
        return;
      }

      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

      try {
        const res = await fetch('/api/demo', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload),
        });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.ok) {
          contactForm.style.display = 'none';
          const success = document.getElementById('form-success');
          if (success) { success.style.removeProperty('display'); success.style.display = 'block'; }
        } else {
          throw new Error(json.error || 'Submission failed');
        }
      } catch (err) {
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
        const msg = (err && err.message && err.message !== 'Submission failed')
          ? err.message
          : 'Something went wrong. Please try again, or email us at founders@amaea.co.uk.';
        showError(msg);
      }
    });
  }

  // Honoured by both JS-driven animations below. Users who set
  // prefers-reduced-motion get a static first frame instead.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── AI chat typing animation ──────────────────────────────
  (function () {
    const chat = document.getElementById('ai-chat-demo');
    if (!chat) return;
    // For reduced-motion users: render the first conversation
    // statically and stop. They still see the example, just no typing.
    // Helper: build a citations row of FCA rule chips. Inserted
    // into the bot wrap after typing finishes so the markup matches
    // the visual order: bubble → citations → "Amaea AI · Just now".
    function buildCitations(refs) {
      const row = document.createElement('div');
      row.className = 'ai-citations';
      refs.forEach(r => {
        const chip = document.createElement('span');
        chip.className = 'ai-citation';
        chip.textContent = r;
        row.appendChild(chip);
      });
      return row;
    }

    if (prefersReducedMotion) {
      const first = {
        user: 'Which clients should I prioritise this week?',
        bot:  'Based on regulatory exposure, your top 3 priorities are: (1) Margaret Thompson, annual review 14 months overdue, the longest in your book. (2) Robert Chen, vulnerable client with Consumer Duty breach risk, review 11 months late. (3) 3 RMAR data gaps in Section B, due in 25 days. Resolving these moves your health score from 82 to ~93.',
        citations: ['COBS 9.5', 'PS22/9', 'SUP 16.12'],
      };
      const u = document.createElement('div'); u.className = 'ai-msg ai-msg-user';
      const ub = document.createElement('div'); ub.className = 'ai-bubble'; ub.textContent = first.user; u.appendChild(ub);
      const b = document.createElement('div'); b.className = 'ai-msg ai-msg-bot';
      const bb = document.createElement('div'); bb.className = 'ai-bubble'; bb.textContent = first.bot; b.appendChild(bb);
      b.appendChild(buildCitations(first.citations));
      const lbl = document.createElement('div'); lbl.className = 'ai-msg-label'; lbl.textContent = 'Amaea AI · Just now'; b.appendChild(lbl);
      chat.appendChild(u); chat.appendChild(b);
      return;
    }

    const CONVOS = [
      {
        user: 'Which clients should I prioritise this week?',
        bot:  'Based on regulatory exposure, your top 3 priorities are: (1) Margaret Thompson, annual review 14 months overdue, the longest in your book. (2) Robert Chen, vulnerable client with Consumer Duty breach risk, review 11 months late. (3) 3 RMAR data gaps in Section B, due in 25 days. Resolving these moves your health score from 82 to ~93.',
        citations: ['COBS 9.5', 'PS22/9', 'SUP 16.12']
      },
      {
        user: "What's missing for Robert Chen?",
        bot:  "Robert Chen (CLI-0089) is a vulnerable client with an annual review 11 months overdue. Missing: Annual Review Suitability Report, Consumer Duty Outcome Assessment, and Vulnerability Re-assessment. Adviser Alex Williams needs to action this immediately; Consumer Duty requires documented fair outcomes for all vulnerable clients.",
        citations: ['COBS 9.5', 'FG21/1', 'PS22/9']
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
        if (c.citations && c.citations.length) {
          const wrap = bBubble.parentElement;
          const label = wrap.querySelector('.ai-msg-label');
          wrap.insertBefore(buildCitations(c.citations), label);
          scrollBottom();
        }
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

  // ── Integration partner auto-scroll ──────────────────────────
  const partnerGrid = document.getElementById('partner-grid');
  if (partnerGrid) {
    const SPEED = 28; // px/s
    let HALF = 1400; // measured after paint
    let STEP = 280;  // button scroll step, measured after paint
    let paused = prefersReducedMotion; // start paused for users who opt out of motion
    let lastTs = null;
    let resumeTimer = null;

    function rafStep(ts) {
      if (lastTs !== null && !paused) {
        partnerGrid.scrollLeft += SPEED * (ts - lastTs) / 1000;
        if (partnerGrid.scrollLeft >= HALF) partnerGrid.scrollLeft -= HALF;
      }
      lastTs = ts;
      requestAnimationFrame(rafStep);
    }

    // Measure after first paint so image-dependent widths are finalised
    requestAnimationFrame(() => {
      const items = partnerGrid.querySelectorAll('.partner-logo-item');
      if (items.length >= 6) {
        HALF = Math.round(items[5].getBoundingClientRect().left - items[0].getBoundingClientRect().left);
        STEP = Math.round(HALF / 5);
      }
      // Only start the rAF loop if motion is allowed — reduced-motion users
      // can still operate the prev/next buttons to scroll manually.
      if (!prefersReducedMotion) requestAnimationFrame(rafStep);
    });

    partnerGrid.addEventListener('mouseenter', () => { paused = true; });
    partnerGrid.addEventListener('mouseleave', () => { paused = false; });
    partnerGrid.addEventListener('touchstart', () => { paused = true; }, { passive: true });
    partnerGrid.addEventListener('touchend', () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, 2000);
    });

    function handleBtn(dir) {
      paused = true;
      clearTimeout(resumeTimer);
      partnerGrid.scrollBy({ left: dir * STEP, behavior: 'smooth' });
      resumeTimer = setTimeout(() => { paused = false; }, 2500);
    }
    document.getElementById('partner-prev')?.addEventListener('click', () => handleBtn(-1));
    document.getElementById('partner-next')?.addEventListener('click', () => handleBtn(1));
  }
});

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initializeReference() {
  const controller = new AbortController();
  const listen = (target, event, callback, options = {}) =>
    target?.addEventListener(event, callback, {
      ...options,
      signal: controller.signal,
    });
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const shortViewport = window.matchMedia(
    "(max-height: 640px) and (max-width: 1000px)",
  );
  const theme = $(".theme-toggle");
  const syncTheme = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    theme.setAttribute("aria-pressed", String(dark));
    theme.setAttribute(
      "aria-label",
      `Switch to ${dark ? "light" : "dark"} theme`,
    );
    $(".theme-label").textContent = dark ? "Light" : "Dark";
  };
  $$("nav a").forEach((a) => {
    if (
      a.getAttribute("href") === location.pathname.replace(/\/$/, "") ||
      (a.getAttribute("href") === "/" && location.pathname === "/")
    )
      a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  syncTheme();
  listen($("#clear-saved-theme"), "click", () => {
    const status = $("#theme-storage-status");
    try {
      localStorage.removeItem("amaea-theme");
      document.documentElement.dataset.theme = "light";
      syncTheme();
      status.textContent = "Your saved theme has been removed. The website now uses the default light theme.";
    } catch {
      status.textContent = "Your browser did not allow this change. Clear Amaea’s site data in your browser settings.";
    }
  });
  listen(theme, "click", () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(
        "amaea-theme",
        document.documentElement.dataset.theme,
      );
    } catch {}
    syncTheme();
  });
  const menu = $(".menu-toggle"),
    nav = $("#navigation");
  const closeMenu = () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.textContent = "Menu";
  };
  listen(menu, "click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.textContent = open ? "Close" : "Menu";
  });
  $$("a", nav).forEach((a) => listen(a, "click", closeMenu));
  listen(document, "keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      closeMenu();
      menu.focus();
    }
  });

  // One scroll clock keeps the spreadsheet, search and relief in a fixed order.
  // Native sticky positioning avoids gaps caused by nested pin spacers.
  const story = $(".story");
  let storyContext,
    storyTrigger,
    storyIndex = 0,
    readStory = false;
  const clamp = (v, min = 0, max = 1) => Math.max(min, Math.min(max, v));
  const ease = (v) => {
    const x = clamp(v);
    return x * x * (3 - 2 * x);
  };
  const mix = (a, b, t) => a + (b - a) * clamp(t);
  function setupStory() {
    if (storyContext) {
      storyContext.revert();
      storyContext = null;
      storyTrigger = null;
    }
    if (!story) return;
    const viewport = $(".story-viewport", story),
      mode = $(".story-mode", story);
    story.classList.remove("is-animated");
    $$(
      ".story-viewport,.story-black,.lens-ring,.folder,[data-motion]",
      story,
    ).forEach((el) => el.removeAttribute("style"));
    $(".story-controls", story).classList.remove("on-black");
    viewport.removeAttribute("aria-hidden");
    $$("a", viewport).forEach((a) => a.removeAttribute("tabindex"));
    $$(".story-beat", story).forEach((beat) =>
      beat.classList.remove("is-current"),
    );
    $$(".relief-check", story).forEach((check) =>
      check.classList.add("is-complete"),
    );
    $(".relief-ready", story).textContent = "Evidence ready";
    mode.disabled = reduced.matches || shortViewport.matches;
    mode.textContent = reduced.matches
      ? "Full story · reduced motion"
      : shortViewport.matches
        ? "Full story · compact screen"
        : readStory
          ? "Play the scroll story"
          : "Read the full story";
    mode.setAttribute("aria-pressed", String(readStory));
    if (
      reduced.matches ||
      shortViewport.matches ||
      readStory ||
      !gsap ||
      !ScrollTrigger
    )
      return;
    gsap.registerPlugin(ScrollTrigger);
    storyContext = gsap.context(() => {
      story.classList.add("is-animated");
      viewport.setAttribute("aria-hidden", "true");
      $$("a", viewport).forEach((a) => a.setAttribute("tabindex", "-1"));
      const beats = $$(".story-beat", story),
        total = beats.length,
        black = $(".story-black", story),
        lens = $(".lens-ring", story),
        controls = $(".story-controls", story),
        clock = { value: 0 };
      const render = (value) => {
        const progress = clamp(value, 0, total - 0.0001),
          index = Math.floor(progress),
          t = progress - index,
          beat = beats[index];
        storyIndex = index;
        beats.forEach((scene, i) =>
          scene.classList.toggle("is-current", i === index),
        );
        $(".story-caption", story).textContent =
          `${String(index + 1).padStart(2, "0")} / ${total} · ${beat.dataset.caption}`;
        $(".story-previous", story).disabled = index === 0;
        $(".story-next", story).disabled = index === total - 1;
        $(".story-progress span", story).style.width =
          `${clamp(value / total) * 100}%`;
        black.style.opacity = "0";
        black.style.clipPath = "circle(0% at 50% 50%)";
        lens.style.opacity = "0";
        lens.style.transform = "translate(-50%,-50%) scale(1)";
        viewport.style.clipPath = "none";
        let dark = false;
        if (beat.matches(".beat-expand")) {
          black.style.opacity = "1";
          black.style.clipPath = `circle(${mix(0.3, 80, ease(t))}% at 50% 50%)`;
          dark = t > 0.35;
        }
        if (beat.matches(".beat-deadline,.beat-reveal,.beat-scale")) {
          black.style.opacity = "1";
          black.style.clipPath = "circle(80% at 50% 50%)";
          dark = true;
        }
        if (beat.matches(".beat-lens")) {
          black.style.opacity = "1";
          black.style.clipPath = `circle(${mix(80, 19, ease(t))}% at 50% 50%)`;
          lens.style.opacity = String(ease((t - 0.25) / 0.5));
          dark = t < 0.5;
        }
        if (beat.matches(".beat-spreadsheet")) {
          lens.style.opacity = String(1 - ease(t / 0.55));
          lens.style.transform = `translate(-50%,-50%) scale(${mix(1, 3.2, ease(t / 0.55))})`;
          viewport.style.clipPath = `circle(${mix(24, 80, ease(t / 0.55))}% at 50% 50%)`;
          $(".manual-register", beat).style.transform =
            `scale(${mix(1, 1.08, ease((t - 0.6) / 0.4))})`;
          $(".andrew-register-row", beat).classList.toggle(
            "register-target",
            t > 0.5,
          );
        }
        if (beat.matches(".beat-missing-date")) {
          $(".register-focus", beat).style.transform =
            `scale(${mix(0.88, 1, ease(t / 0.4))})`;
        }
        if (beat.matches(".beat-folders")) {
          const selected = Math.min(3, Math.floor(t / 0.2));
          $$(".folder", beat).forEach((folder, i) => {
            folder.classList.toggle("folder-selected", i === selected);
            folder.style.opacity = t > 0.62 && i !== 3 ? ".3" : "1";
          });
          $(".folder-last", beat).style.transform =
            `scale(${mix(1, 1.2, ease((t - 0.55) / 0.2))})`;
          const opening = ease((t - 0.75) / 0.2);
          $(".folder-front", beat).style.transform =
            `rotateX(${-opening * 68}deg)`;
          $(".folder-document", beat).style.opacity = String(opening);
          $(".folder-document", beat).style.transform =
            `translateY(${-opening * 32}px)`;
        }
        if (beat.matches(".beat-found")) {
          $(".found-file", beat).style.transform =
            `scale(${mix(0.86, 1, ease(t / 0.35))})`;
        }
        if (beat.matches(".beat-open-report")) {
          $(".story-document", beat).style.transform =
            `perspective(800px) rotateY(${mix(-65, 0, ease(t / 0.4))}deg)`;
          $(".story-sheet", beat).style.transform =
            `translateX(${mix(18, 0, ease((t - 0.2) / 0.4))}%)`;
        }
        if (beat.matches(".beat-return")) {
          black.style.opacity = "1";
          black.style.clipPath = `circle(${mix(80, 0, ease(t))}% at 50% 50%)`;
          dark = t < 0.55;
        }
        if (beat.matches(".beat-resolution")) {
          $(".story-answer", beat).style.opacity = String(
            ease((t - 0.25) / 0.35),
          );
        }
        if (beat.matches(".beat-relief")) {
          $(".relief-product", beat).style.transform =
            `translateY(${mix(14, 0, ease(t / 0.3))}px)`;
          $$(".relief-check", beat).forEach((check) =>
            check.classList.toggle(
              "is-complete",
              t >= Number(check.dataset.at),
            ),
          );
          $(".relief-ready", beat).textContent =
            t >= 0.65 ? "Evidence ready" : "Connecting the evidence…";
        }
        controls.classList.toggle("on-black", dark);
      };
      render(0);
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: story,
          start: () =>
            `top ${getComputedStyle(document.documentElement).getPropertyValue("--nav-height").trim()}`,
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      timeline.to(clock, {
        value: total,
        duration: total,
        ease: "none",
        onUpdate: () => render(clock.value),
      });
      storyTrigger = timeline.scrollTrigger;
    }, story);
  }
  setupStory();
  listen(reduced, "change", setupStory);
  listen(shortViewport, "change", setupStory);
  if (story) {
    listen($(".story-mode", story), "click", () => {
      readStory = !readStory;
      setupStory();
      const top =
        story.getBoundingClientRect().top +
        window.scrollY -
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-height",
          ),
        );
      window.scrollTo({ top, behavior: "instant" });
      ScrollTrigger?.refresh();
    });
    const go = (direction) => {
      if (!storyTrigger) return;
      const beats = $$(".story-beat", story),
        index = clamp(storyIndex + direction, 0, beats.length - 1),
        position =
          (index + Number(beats[index].dataset.progress || 0.75)) /
          beats.length;
      window.scrollTo({
        top:
          storyTrigger.start +
          (storyTrigger.end - storyTrigger.start) * position,
        behavior: "instant",
      });
    };
    listen($(".story-previous", story), "click", () => go(-1));
    listen($(".story-next", story), "click", () => go(1));
    if (ScrollTrigger) {
      document.fonts?.ready.then(() => {
        if (!controller.signal.aborted) ScrollTrigger.refresh();
      });
      listen(window, "load", () => ScrollTrigger.refresh(), { once: true });
    }
  }

  $$(".billing-toggle button").forEach((b) =>
    listen(b, "click", () => {
      const annual = b.dataset.billing === "annual";
      $$("[data-billing]").forEach((x) => {
        const active = x === b;
        x.classList.toggle("selected", active);
        x.setAttribute("aria-pressed", String(active));
      });
      $$("[data-monthly]").forEach((x) => {
        const monthly = Number(x.dataset.monthly);
        x.textContent = `£${(annual ? monthly * 10 : monthly).toLocaleString("en-GB")}`;
        $(".price-unit", x.parentElement).textContent = annual
          ? " / yr"
          : " / mo";
        $(".billing-note", x.parentElement).textContent = annual
          ? "billed annually · 2 months free"
          : "billed monthly";
      });
      $$("[data-table-price]").forEach((x) => {
        x.textContent = `£${(Number(x.dataset.tablePrice) * (annual ? 10 : 1)).toLocaleString("en-GB")}/${annual ? "yr" : "mo"}`;
      });
    }),
  );
  $$("[data-client-filter]").forEach((b) =>
    listen(b, "click", () => {
      $$("[data-client-filter]").forEach((x) => {
        x.classList.toggle("selected", x === b);
        x.setAttribute("aria-pressed", String(x === b));
      });
      $$(".client-row").forEach(
        (row) =>
          (row.hidden =
            b.dataset.clientFilter !== "all" &&
            row.dataset.status !== b.dataset.clientFilter),
      );
    }),
  );
  $$(".client-row").forEach((row) =>
    listen(row, "click", () => {
      $(".client-detail .eyebrow").textContent =
        `${row.dataset.client.toUpperCase()} · CLIENT JOURNEY`;
      $("#client-context").textContent = $("small", row).textContent;
      $("#client-progress").textContent = "Client journey";
    }),
  );
  let journeyTimer;
  listen($("#play-client"), "click", () => {
    clearTimeout(journeyTimer);
    const steps = $$(".journey-track span");
    steps.forEach((s, i) => s.classList.toggle("done", i === 0));
    $("#client-context").textContent =
      "Checking the document and its client match…";
    $("#client-progress").textContent = "1 / 3 · Evidence received";
    const finish = () => {
      steps.forEach((s) => s.classList.add("done"));
      $("#client-context").textContent =
        "Signed agreement matched. Review evidence recorded.";
      $("#client-progress").textContent = "3 / 3 · Sample journey complete";
    };
    if (reduced.matches) {
      finish();
      return;
    }
    journeyTimer = setTimeout(() => {
      steps[1].classList.add("done");
      $("#client-progress").textContent = "2 / 3 · Document matched";
      journeyTimer = setTimeout(finish, 1100);
    }, 1100);
  });
  $$(".resolve").forEach((b) =>
    listen(b, "click", () => {
      const resolved = b.closest(".insight").classList.toggle("resolved");
      b.textContent = resolved ? "Undo" : "Resolve";
      b.setAttribute("aria-pressed", String(resolved));
      const count = $$(".insight:not(.resolved)").length;
      $("#alert-count").textContent =
        `${count} open issue${count === 1 ? "" : "s"}`;
    }),
  );
  const answers = {
    priority:
      "Start with Sarah Wilson’s overdue review, then Oliver Bennett’s missing agreement. Check the supporting evidence and record your judgement.",
    duty: "Review the outstanding outcome evidence and vulnerability reassessments before completing the Consumer Duty board pack. Your qualified reviewer retains the assessment and sign-off.",
    rmar: "Use the firm’s reporting schedule in Governance to confirm the applicable return and deadline. This walkthrough does not access your firm’s live reporting dates.",
  };
  $$("[data-question]").forEach((b) =>
    listen(
      b,
      "click",
      () => ($("#assistant-answer").textContent = answers[b.dataset.question]),
    ),
  );
  listen($("#assistant-form"), "submit", (e) => {
    e.preventDefault();
    const q = $("#assistant-input").value.toLowerCase();
    $("#assistant-answer").textContent = q.includes("rmar")
      ? answers.rmar
      : q.includes("duty")
        ? answers.duty
        : q.includes("priorit") || q.includes("week")
          ? answers.priority
          : "Choose a suggested question to explore Amaea AI.";
    $("#assistant-input").value = "";
  });
  listen($("#horizon-preview"), "click", () => {
    $("#horizon-result").textContent =
      "Sample update: one publication added to the review queue. Assess its relevance and assign an owner.";
  });
  listen($("#draft-report"), "click", () => {
    $("#draft-status").textContent =
      "Sample Consumer Duty draft prepared. Evidence gaps and reviewer sign-off remain visible.";
    $("#draft-report").textContent = "Replay draft preview";
  });
  $$("[data-integration-tab]").forEach((b) =>
    listen(b, "click", () => {
      $$("[data-integration-tab]").forEach((x) => {
        x.classList.toggle("selected", x === b);
        x.setAttribute("aria-pressed", String(x === b));
      });
      $("#connections-panel").hidden =
        b.dataset.integrationTab !== "connections";
      $("#import-panel").hidden = b.dataset.integrationTab !== "import";
    }),
  );
  listen($("#import-file"), "change", (e) => {
    const file = e.target.files?.[0];
    $("#import-status").textContent = file
      ? `${file.name} selected locally. No file is uploaded from this website.`
      : "19 document types · extraction, classification, matching";
  });
  return () => {
    controller.abort();
    clearTimeout(journeyTimer);
    storyContext?.revert();
  };
}

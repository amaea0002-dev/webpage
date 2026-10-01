import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const base = process.argv[2] ?? "http://127.0.0.1:3236";
assert.ok(
  ["127.0.0.1", "localhost"].includes(new URL(base).hostname),
  "Browser checks run only on a local preview",
);
const referenceDirectory = process.argv[4];
const out = process.argv[3] ?? "/tmp/amaea-reference-check";
await mkdir(out, { recursive: true });
const browser = await chromium.launch();
const results = [],
  errors = [],
  findings = [];
async function check(name, fn) {
  try {
    await fn();
    results.push({ name, passed: true });
  } catch (e) {
    results.push({ name, passed: false, error: e.message });
  }
  console.log(
    name + ": " + (results.at(-1).passed ? "passed" : results.at(-1).error),
  );
}
async function go(page, path) {
  const response = await page.goto(base + path);
  assert.equal(response.status(), 200, path);
  await page.waitForFunction(() =>
    document
      .querySelector(".theme-toggle")
      ?.getAttribute("aria-label")
      ?.includes("theme"),
  );
  await page.waitForTimeout(250);
}
async function atStep(page, index, fraction = 0.9) {
  await page.evaluate(
    ({ index, fraction }) => {
      const s = document.querySelector(".story"),
        nav = parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-height",
          ),
        );
      const start = s.getBoundingClientRect().top + scrollY - nav;
      const end = s.getBoundingClientRect().bottom + scrollY - innerHeight;
      scrollTo({
        top: start + ((end - start) * (index + fraction)) / 15,
        behavior: "instant",
      });
    },
    { index, fraction },
  );
  await page.waitForTimeout(90);
}
for (const [name, viewport] of [
  ["desktop", { width: 1440, height: 1000 }],
  ["mobile", { width: 390, height: 844 }],
  ["small-mobile", { width: 320, height: 568 }],
  ["landscape", { width: 844, height: 390 }],
  ["small-landscape", { width: 667, height: 375 }],
]) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push({ name, message: e.message }));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push({ name, message: m.text() });
  });
  await check(name + " story", async () => {
    await go(page, "/");
    if (viewport.height <= 640 && viewport.width <= 1000) {
      assert.ok(
        !(await page.locator(".story").getAttribute("class")).includes(
          "is-animated",
        ),
      );
      assert.equal(await page.locator(".story-beat").count(), 15);
      assert.ok(
        await page
          .getByRole("button", { name: "Full story · compact screen" })
          .isDisabled(),
      );
      await page.locator(".beat-relief").scrollIntoViewIfNeeded();
      assert.equal(await page.locator(".relief-check.is-complete").count(), 3);
      assert.ok(
        await page
          .getByRole("link", { name: "See how Amaea works" })
          .isVisible(),
      );
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      );
      await page.screenshot({ path: out + "/" + name + "-readable.png" });
      return;
    }
    await page.waitForSelector(".story.is-animated");
    await page.waitForTimeout(8200);
    await page.screenshot({ path: out + "/" + name + "-home.png" });
    assert.equal(await page.locator(".story-beat").count(), 15);
    assert.equal(await page.locator(".chapter").count(), 7);
    for (let index = 0; index < 15; index++) {
      await atStep(page, index);
      assert.equal(
        await page.locator(".story-beat.is-current").getAttribute("data-step"),
        String(index + 1),
      );
      assert.equal(await page.locator(".story-beat.is-current").count(), 1);
      const clippedCards = await page
        .locator(
          ".story-beat.is-current .manual-register, .story-beat.is-current .register-focus, .story-beat.is-current .relief-product",
        )
        .evaluateAll((cards) =>
          cards
            .filter((card) => card.scrollHeight > card.clientHeight + 1)
            .map((card) => card.className),
        );
      assert.deepEqual(
        clippedCards,
        [],
        `Content clipped inside step ${index + 1}`,
      );
      const visible = await page.locator(".story-stage").evaluate((el) => {
        const r = el.getBoundingClientRect();
        return r.top >= 60 && Math.abs(r.bottom - innerHeight) < 2;
      });
      assert.ok(visible, `Sticky stage ${index + 1}`);
      if (
        [3, 4, 6, 8, 9, 11, 14].includes(index) &&
        ["desktop", "mobile", "landscape"].includes(name)
      )
        await page.screenshot({
          path: out + "/" + name + "-story-" + (index + 1) + ".png",
        });
      if ([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14].includes(index)) {
        const bounds = await page.locator(".story").evaluate((s) => {
          const b = s.querySelector(".is-current"),
            c = s.querySelector(".story-controls").getBoundingClientRect();
          const elements = [...b.children].filter(
            (e) =>
              !e.classList.contains("sr-only") &&
              getComputedStyle(e).display !== "none" &&
              getComputedStyle(e).clipPath !== "inset(50%)",
          );
          return elements.map((e) => ({
            element: e.className || e.tagName,
            top: e.getBoundingClientRect().top,
            bottom: e.getBoundingClientRect().bottom,
            controlsTop: c.top,
          }));
        });
        for (const b of bounds)
          if (b.top < 60 || b.bottom > b.controlsTop - 4)
            findings.push({ name, step: index + 1, ...b });
      }
    }
    // Sample the full continuous scroll range in both directions, not only snapshots.
    for (const reverse of [false, true])
      for (let i = 0; i < 151; i++) {
        const progress = ((reverse ? 150 - i : i) * 14.99) / 150;
        await atStep(page, Math.floor(progress), progress % 1);
        assert.equal(
          await page.locator(".story-beat.is-current").count(),
          1,
          "No blank scroll interval",
        );
      }
    await atStep(page, 0);
    for (let i = 1; i < 15; i++) {
      await page.getByRole("button", { name: "Next story step" }).click();
      await page.waitForTimeout(90);
      assert.equal(
        await page.locator(".story-beat.is-current").getAttribute("data-step"),
        String(i + 1),
      );
    }
    await page.getByRole("button", { name: "Previous story step" }).click();
    await page.waitForTimeout(100);
    assert.equal(
      await page.locator(".story-beat.is-current").getAttribute("data-step"),
      "14",
    );
    await page.getByRole("button", { name: "Read the full story" }).click();
    assert.ok(
      !(await page.locator(".story").getAttribute("class")).includes(
        "is-animated",
      ),
    );
    assert.ok(
      await page
        .getByRole("heading", { name: "The wrong Andrew Smith." })
        .isVisible(),
    );
    await page.getByRole("button", { name: "Play the scroll story" }).click();
    await page.waitForSelector(".story.is-animated");
  });
  await check(name + " pages and navigation", async () => {
    for (const route of [
      "/about",
      "/features",
      "/pricing",
      "/contact",
      "/waitlist",
      "/privacy",
      "/cookies",
    ]) {
      await go(page, route);
      assert.ok(await page.locator("main h1").count(), route + " heading");
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        route + " has horizontal overflow",
      );
      if (
        ["desktop", "mobile"].includes(name) &&
        ["/about", "/features", "/pricing", "/contact"].includes(route)
      )
        await page.screenshot({
          path: out + "/" + name + route.replace("/", "-") + ".png",
          fullPage: true,
        });
    }
    if (viewport.width < 761) {
      await page.locator(".menu-toggle").click();
      assert.equal(
        await page.locator(".menu-toggle").getAttribute("aria-expanded"),
        "true",
      );
      await page.keyboard.press("Escape");
      assert.equal(
        await page.locator(".menu-toggle").getAttribute("aria-expanded"),
        "false",
      );
    }
    await page.locator(".theme-toggle").click();
    assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
    await page.reload();
    assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
    await page.locator(".theme-toggle").click();
    assert.equal(
      await page.locator("html").getAttribute("data-theme"),
      "light",
    );
  });
  await context.close();
  console.log(name + " complete");
}
const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  }),
  page = await context.newPage();
await check("Story content, resize and real wheel scrolling", async () => {
  await go(page, "/");
  assert.match(
    await page.locator(".beat-spreadsheet").textContent(),
    /01\/07\/3026/,
  );
  assert.match(
    await page.locator(".beat-spreadsheet").textContent(),
    /31\/02\/2026/,
  );
  assert.match(
    await page.locator(".beat-missing-date").textContent(),
    /Andrew & Kate Smith/,
  );
  assert.match(
    await page.locator(".beat-open-report .story-document").textContent(),
    /Andrew & Emma Smith/,
  );
  assert.match(
    await page.locator(".beat-open-report .story-sheet").textContent(),
    /Andrew & Kate Smith/,
  );
  assert.match(
    await page.locator(".beat-scale").textContent(),
    /100 more rows/,
  );
  await atStep(page, 14, 0.95);
  assert.equal(await page.locator(".relief-check.is-complete").count(), 3);
  assert.match(await page.locator(".relief-product").innerText(), /CL-0142/);
  assert.match(
    await page.locator(".relief-product").innerText(),
    /01\/07\/2026/,
  );
  await page
    .getByRole("link", { name: "See how Amaea works", includeHidden: true })
    .click();
  await page.waitForFunction(() => location.hash === "#features");
  await page.setViewportSize({ width: 844, height: 390 });
  await page.waitForFunction(
    () => !document.querySelector(".story").classList.contains("is-animated"),
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForSelector(".story.is-animated");
  await atStep(page, 3, 0.2);
  const before = await page.evaluate(() => scrollY);
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(700);
  assert.ok((await page.evaluate(() => scrollY)) > before);
  assert.equal(await page.locator(".story-beat.is-current").count(), 1);
  await page.setViewportSize({ width: 1440, height: 1000 });
});
await check("Intermediate phone, tablet and laptop layouts", async () => {
  for (const [width, height] of [
    [375, 667],
    [360, 740],
    [768, 1024],
    [1280, 720],
    [1366, 768],
  ]) {
    await page.setViewportSize({ width, height });
    await go(page, "/");
    for (const index of [3, 4, 6, 7, 8, 9, 11, 14]) {
      await atStep(page, index, 0.95);
      const problems = await page.locator(".story").evaluate((story) => {
        const beat = story.querySelector(".is-current"),
          controls = story
            .querySelector(".story-controls")
            .getBoundingClientRect();
        const issues = [];
        for (const card of beat.querySelectorAll(
          ".manual-register,.register-focus,.relief-product",
        )) {
          if (card.scrollHeight > card.clientHeight + 1)
            issues.push("Clipped " + card.className);
        }
        for (const el of beat.children) {
          if (
            el.classList.contains("sr-only") ||
            getComputedStyle(el).display === "none" ||
            getComputedStyle(el).clipPath === "inset(50%)"
          )
            continue;
          const rect = el.getBoundingClientRect();
          if (rect.top < 60 || rect.bottom > controls.top - 4)
            issues.push("Outside stage " + (el.className || el.tagName));
        }
        return issues;
      });
      assert.deepEqual(problems, [], `${width}×${height}, step ${index + 1}`);
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
});
if (referenceDirectory)
  await check("Exact supplied copy and original logo", async () => {
    for (const route of ["/", "/about", "/features", "/pricing"]) {
      await go(page, route);
      const source = await readFile(
        referenceDirectory +
          (route === "/" ? "/index.html" : route + "/index.html"),
        "utf8",
      );
      const selectors =
        route === "/"
          ? [".hero", ".story-transcript", ".story-viewport"]
          : ["main"];
      for (const selector of selectors) {
        const same = await page.evaluate(
          ({ source, selector }) => {
            const reference = new DOMParser().parseFromString(
              source,
              "text/html",
            );
            const text = (el) => {
              const copy = el.cloneNode(true);
              // HTML exports contain formatting whitespace between table rows.
              // React omits those invalid text children to keep hydration stable.
              for (const container of copy.querySelectorAll(
                "table,thead,tbody,tfoot,tr,colgroup",
              )) {
                for (const node of [...container.childNodes]) {
                  if (
                    node.nodeType === Node.TEXT_NODE &&
                    !node.textContent.trim()
                  )
                    node.remove();
                }
              }
              return copy.textContent.replace(/\s+/g, " ").trim();
            };
            return (
              text(reference.querySelector(selector)) ===
              text(document.querySelector(selector))
            );
          },
          { source, selector },
        );
        assert.ok(same, route + " " + selector + " copy differs");
      }
      const logoMatches = await page.evaluate(
        (source) =>
          new DOMParser()
            .parseFromString(source, "text/html")
            .querySelector(".brand path")
            .getAttribute("d") ===
          document.querySelector(".brand path").getAttribute("d"),
        source,
      );
      assert.ok(logoMatches);
    }
  });
await check("Interactive sample previews", async () => {
  await go(page, "/features");
  await page.locator('[data-client-filter="risk"]').click();
  assert.equal(await page.locator(".client-row:visible").count(), 1);
  await page.locator('[data-client-filter="all"]').click();
  await page.locator(".client-row").nth(1).click();
  assert.match(
    await page.locator(".client-detail .eyebrow").innerText(),
    /AMELIA/,
  );
  await page.locator("#play-client").click();
  await page.waitForFunction(() =>
    document.querySelector("#client-progress").textContent.includes("3 / 3"),
  );
  await page.locator(".resolve").first().click();
  assert.match(await page.locator("#alert-count").innerText(), /2 open/);
  await page.locator('[data-question="rmar"]').click();
  assert.match(
    await page.locator("#assistant-answer").innerText(),
    /does not hold/,
  );
  await page.locator("#assistant-input").fill("An unrecognised question");
  await page.locator('#assistant-form button[type="submit"]').click();
  assert.match(
    await page.locator("#assistant-answer").innerText(),
    /sample responses/,
  );
  await page.locator("#horizon-preview").click();
  assert.match(
    await page.locator("#horizon-result").innerText(),
    /Sample update/,
  );
  await page.locator("#draft-report").click();
  assert.match(
    await page.locator("#draft-status").innerText(),
    /reviewer sign-off/,
  );
  await page.locator('[data-integration-tab="import"]').click();
  await page.locator("#import-file").setInputFiles({
    name: "synthetic-preview.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("Synthetic file for local UI testing only."),
  });
  assert.match(
    await page.locator("#import-status").innerText(),
    /No file is uploaded/,
  );
});
await check("Pricing billing toggle and FAQ", async () => {
  await go(page, "/pricing");
  assert.deepEqual(await page.locator(".primary-plans h2").allTextContents(), [
    "Professional",
    "Scale",
    "Enterprise",
  ]);
  assert.match(
    await page.locator(".primary-plans .plan").first().innerText(),
    /Up to 600 active clients/,
  );
  assert.match(
    await page.locator(".page-intro").innerText(),
    /No setup fee\. Unlimited logins/,
  );
  assert.equal(
    await page.locator(".essentials-option details").getAttribute("open"),
    null,
  );
  await page.locator(".essentials-option summary").click();
  assert.ok(
    await page.locator('.essentials-option [data-monthly="699"]').isVisible(),
  );
  assert.deepEqual(
    await page
      .locator(".comparison thead tr")
      .first()
      .locator("th")
      .allTextContents(),
    ["Feature", "Professional", "Scale", "Enterprise", "Essentials"],
  );
  assert.deepEqual(
    await page
      .getByRole("row", {
        name: "Active clients 600 1,000 Unlimited 100",
        exact: true,
      })
      .locator("td")
      .allTextContents(),
    ["600", "1,000", "Unlimited", "100"],
  );
  const columns = await page
    .locator(".work-cost-grid article")
    .evaluateAll((es) =>
      es.map((e) => ({
        top: e.getBoundingClientRect().top,
        width: e.getBoundingClientRect().width,
      })),
    );
  assert.equal(columns.length, 2);
  assert.ok(Math.abs(columns[0].top - columns[1].top) < 1);
  assert.ok(Math.abs(columns[0].width - columns[1].width) < 1);
  await page.locator('[data-billing="annual"]').click();
  assert.equal(
    await page.locator('[data-monthly="699"]').innerText(),
    "£6,990",
  );
  assert.equal(
    await page.locator('[data-table-price="1599"]').innerText(),
    "£15,990/yr",
  );
  await page.locator('[data-billing="monthly"]').click();
  assert.equal(await page.locator('[data-monthly="699"]').innerText(), "£699");
  await page.locator(".faq summary").first().click();
  assert.equal(
    await page.locator(".faq details").first().getAttribute("open"),
    "",
  );
});
await check(
  "Registration validation and mocked success (no email)",
  async () => {
    await go(page, "/waitlist");
    await page.getByRole("button", { name: /Register your interest/ }).click();
    assert.equal(
      await page.locator("#application-firm").getAttribute("aria-invalid"),
      "true",
    );
    await page.locator("#application-firm").fill("AMAEA DESIGN PREVIEW TEST");
    await page.locator("#application-email").fill("website-audit@example.com");
    await page.route("**/api/enquiries", (route) =>
      route.fulfill({ json: { ok: true, reference: "AM-PREVIEW-TEST" } }),
    );
    await page.getByRole("button", { name: /Register your interest/ }).click();
    await page
      .getByRole("heading", { name: "Your interest is registered." })
      .waitFor();
    assert.ok(
      await page
        .locator(".registration-confirmation")
        .evaluate((el) => document.activeElement === el),
    );
  },
);
await check("Accessibility, both themes", async () => {
  for (const route of [
    "/",
    "/about",
    "/features",
    "/pricing",
    "/contact",
    "/waitlist",
  ])
    for (const dark of [false, true]) {
      await go(page, route);
      if (
        ((await page.locator("html").getAttribute("data-theme")) === "dark") !==
        dark
      )
        await page.locator(".theme-toggle").click();
      await page.waitForTimeout(300);
      if (route === "/") await atStep(page, 14);
      const report = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      for (const v of report.violations)
        findings.push({
          route,
          dark,
          accessibility: v.id,
          impact: v.impact,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        });
    }
});
await context.close();
for (const width of [1440, 390]) {
  const ctx = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
    }),
    p = await ctx.newPage();
  await check("Reduced motion " + width, async () => {
    await go(p, "/");
    assert.ok(
      !(await p.locator(".story").getAttribute("class")).includes(
        "is-animated",
      ),
    );
    assert.equal(await p.locator(".story-beat").count(), 15);
    assert.equal(
      await p
        .locator(".hero-promise")
        .evaluate((e) => getComputedStyle(e).animationName),
      "none",
    );
    assert.ok(
      await p
        .getByRole("heading", { name: "The wrong Andrew Smith." })
        .isVisible(),
    );
    for (const dark of [false, true]) {
      await p
        .locator("html")
        .evaluate(
          (el, dark) => (el.dataset.theme = dark ? "dark" : "light"),
          dark,
        );
      const audit = await new AxeBuilder({ page: p })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      assert.deepEqual(
        audit.violations.map((v) => ({
          id: v.id,
          targets: v.nodes.map((n) => n.target),
        })),
        [],
        "Readable story accessibility",
      );
    }
    await p.screenshot({ path: out + "/reduced-motion-" + width + ".png" });
    await p.emulateMedia({ reducedMotion: "no-preference" });
    await p.waitForSelector(".story.is-animated");
    await p.emulateMedia({ reducedMotion: "reduce" });
    await p.waitForFunction(
      () => !document.querySelector(".story").classList.contains("is-animated"),
    );
    assert.ok(
      !(await p.locator(".story").getAttribute("class")).includes(
        "is-animated",
      ),
    );
  });
  await ctx.close();
}
const nojs = await browser.newContext({ javaScriptEnabled: false }),
  np = await nojs.newPage();
await check("Without JavaScript", async () => {
  await go(np, "/");
  assert.equal(await np.locator(".story-beat").count(), 15);
  assert.ok(
    await np
      .getByRole("heading", { name: "The wrong Andrew Smith." })
      .isVisible(),
  );
  assert.equal(await np.locator(".chapter").count(), 7);
});
await nojs.close();
await browser.close();
await writeFile(
  out + "/browser-results.json",
  JSON.stringify({ results, errors, findings }, null, 2),
);
console.log(JSON.stringify({ results, errors, findings }, null, 2));
process.exitCode =
  results.some((r) => !r.passed) || errors.length || findings.length ? 1 : 0;

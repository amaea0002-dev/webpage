import { readFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

// Run against the approved homepage build to keep its exact letterforms and tail.
const homepage = process.argv[2] || 'http://127.0.0.1:3236/';
const destination = resolve('public/images/amaea-share-handwritten-2026-10-03.png');
const scriptFont = await readFile('public/fonts/pinyon-script.woff2', 'base64');
const browser = await chromium.launch();

try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const response = await page.goto(homepage);
  if (response.status() !== 200) throw new Error('Homepage preview is unavailable');
  const signature = await page.locator('.hero-signature').evaluate(svg => {
    const copy = svg.cloneNode(true);
    copy.querySelectorAll('mask, [id^="hero-signature-pen-"]').forEach(element => element.remove());
    copy.querySelectorAll('[mask]').forEach(element => element.removeAttribute('mask'));
    return copy.outerHTML;
  });
  await page.close();
  const canvas = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await canvas.setContent(`<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
    @font-face { font-family: Pinyon; src: url(data:font/woff2;base64,${scriptFont}); font-weight: 400; }
    * { box-sizing: border-box; }
    html, body { margin: 0; width: 1200px; height: 630px; background: #EDEAED; color: #371936; }
    body { position: relative; overflow: hidden; }
    .hero-signature { position: absolute; top: 214px; left: 55px; width: 1090px; height: 272.5px; color: #371936; }
    .hero-signature-tail { fill: none; stroke: currentColor; stroke-width: 2.1; stroke-linecap: round; }
    .hero-signature-tagline { font: 400 56px Pinyon; fill: currentColor; }
  </style></head><body>
    ${signature}
  </body></html>`);
  await canvas.evaluate(() => document.fonts.ready);
  if (!await canvas.evaluate(() => document.fonts.check('56px Pinyon'))) throw new Error('Handwriting font did not load');
  await mkdir(resolve('public/images'), { recursive: true });
  await canvas.screenshot({ path: destination });
  console.log(destination);
} finally {
  await browser.close();
}

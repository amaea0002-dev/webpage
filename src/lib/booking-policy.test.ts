import test from 'node:test';
import assert from 'node:assert/strict';
import config from '../../next.config.ts';

async function policies() {
 assert.equal(typeof config.headers, 'function');
 return (await config.headers!()).flatMap(rule => rule.headers.filter(header => header.key.toLowerCase() === 'content-security-policy').map(header => ({source: rule.source, value: header.value})));
}

test('every initial document permits the calendar after client-side booking navigation', async () => {
 const rules = await policies();
 assert.ok(rules.some(rule => rule.source === '/:path*'), 'every entry route must receive a document policy');
 // Every effective policy must permit the same widget; a Contact-only exception
 // leaves the homepage document blocking the script after client-side navigation.
 for (const { source, value } of rules) {
  const directives = new Map(value.split(';').map(value => { const [name, ...tokens] = value.trim().split(/\s+/); return [name, tokens]; }));
  assert.ok(directives.get('script-src')?.includes('https://assets.calendly.com/assets/external/widget.js'), source);
  assert.deepEqual(directives.get('frame-src'), ['https://calendly.com'], source);
 }
});

test('calendar navigation support keeps the existing security restrictions', async () => {
 for (const { value } of await policies()) {
  const directives = new Map(value.split(';').map(value => { const [name, ...tokens] = value.trim().split(/\s+/); return [name, tokens]; }));
  assert.deepEqual(directives.get('connect-src'), ["'self'"]);
  assert.deepEqual(directives.get('form-action'), ["'self'"]);
  assert.deepEqual(directives.get('frame-ancestors'), ["'none'"]);
  assert.deepEqual(directives.get('object-src'), ["'none'"]);
  assert.deepEqual(directives.get('base-uri'), ["'self'"]);
  assert.equal(directives.get('script-src')?.includes('*'), false);
  assert.equal(directives.get('script-src')?.includes("'unsafe-eval'"), process.env.NODE_ENV === 'development');
 }
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { suggestPlan, type PlanNeeds } from './plan-guide.ts';
const base: PlanNeeds = { clients: 'up-to-300', network: false, ai: false, board: false, templates: false, customApi: false };
test('uses client capacity, not seat counts, across every published band', () => {
 for(const [clients, name, price] of [
  ['up-to-300', 'Essentials', '£699/month'], ['301-to-600', 'Professional', '£1,599/month'],
  ['601-to-1000', 'Scale', '£2,199/month'], ['over-1000', 'Enterprise', 'Custom pricing'],
 ] as const) assert.deepEqual([suggestPlan({ ...base, clients })?.name, suggestPlan({ ...base, clients })?.price], [name, price]);
});
test('feature requirements raise the minimum plan without reducing capacity', () => {
 assert.equal(suggestPlan({ ...base, ai: true })?.name, 'Professional');
 assert.equal(suggestPlan({ ...base, board: true })?.name, 'Professional');
 assert.equal(suggestPlan({ ...base, templates: true })?.name, 'Scale');
 assert.equal(suggestPlan({ ...base, board: true, clients: '601-to-1000' })?.name, 'Scale');
 assert.equal(suggestPlan({ ...base, board: true, ai: true })?.name, 'Professional');
 assert.equal(suggestPlan({ ...base, clients: '601-to-1000', ai: true })?.name, 'Scale');
 assert.equal(suggestPlan({ ...base, clients: 'over-1000', board: true })?.name, 'Enterprise');
});
test('network and custom API requirements always prompt a tailored discussion', () => {
 assert.equal(suggestPlan({ ...base, network: true })?.name, 'Enterprise');
 assert.equal(suggestPlan({ ...base, clients: 'unsure', customApi: true })?.name, 'Enterprise');
});
test('does not invent a fixed-capacity fit when client numbers are unknown', () => {
 assert.equal(suggestPlan({ ...base, clients: 'unsure' }), null);
 assert.equal(suggestPlan({ ...base, clients: 'unsure', board: true }), null);
});

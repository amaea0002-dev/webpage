export type ClientBand = 'up-to-100' | '101-to-600' | '601-to-1000' | 'over-1000' | 'unsure';
export type PlanNeeds = { clients: ClientBand; network: boolean; ai: boolean; board: boolean; customApi: boolean };
export type PlanSuggestion = { name: 'Essentials' | 'Professional' | 'Scale' | 'Enterprise'; price: string; reason: string };

/** Non-binding guide to the published monthly plans; logins are unlimited on every tier. */
export function suggestPlan(needs: PlanNeeds): PlanSuggestion | null {
 if(needs.network || needs.customApi || needs.clients === 'over-1000') return {
  name: 'Enterprise', price: 'Custom pricing',
  reason: needs.network ? 'A tailored conversation for your network or group, including member-firm access and oversight.' : needs.customApi ? 'Custom API requirements need a tailored scope and availability discussion.' : 'A tailored plan for more than 1,000 active clients.'
 };
 // Capacity must be known before suggesting a fixed-capacity tier, even when features are known.
 if(needs.clients === 'unsure') return null;
 if(needs.board || needs.clients === '601-to-1000') return {
  name: 'Scale', price: '£2,199/month',
  reason: needs.board ? 'Scale adds configurable board and evidence packs and reusable custom templates, with capacity for up to 1,000 active clients.' : 'Capacity for up to 1,000 active clients, with the features in Professional.'
 };
 if(needs.ai || needs.clients === '101-to-600') return {
  name: 'Professional', price: '£1,599/month',
  reason: needs.ai ? 'The published Professional plan includes Amaea AI, Consumer Duty and RMAR reporting, with capacity for up to 600 active clients.' : 'Capacity for up to 600 active clients, with AI and regulatory reporting in the published plan.'
 };
 return { name: 'Essentials', price: '£699/month', reason: 'Core client, review and document workflows for up to 100 active clients. AI, Consumer Duty and RMAR reporting are outside this tier.' };
}

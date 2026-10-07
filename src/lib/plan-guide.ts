export type ClientBand = 'up-to-300' | '301-to-600' | '601-to-1000' | 'over-1000' | 'unsure';
export type PlanNeeds = { clients: ClientBand; network: boolean; ai: boolean; board: boolean; templates: boolean; integrations: boolean; customApi: boolean };
export type PlanSuggestion = { name: 'Essentials' | 'Professional' | 'Scale' | 'Enterprise'; price: string; reason: string };

/** Non-binding guide to the published monthly plans; logins are unlimited on every tier. */
export function suggestPlan(needs: PlanNeeds): PlanSuggestion | null {
 if(needs.network || needs.customApi || needs.clients === 'over-1000') return {
  name: 'Enterprise', price: 'Custom pricing',
  reason: needs.network ? 'A tailored conversation for your network or group, including agreed summaries shared with each participating firm’s permission.' : needs.customApi ? 'Custom API requirements need a tailored scope and availability discussion.' : 'A tailored plan for more than 1,000 active individuals.'
 };
 // Capacity must be known before suggesting a fixed-capacity tier, even when features are known.
 if(needs.clients === 'unsure') return null;
 if(needs.templates || needs.clients === '601-to-1000') return {
  name: 'Scale', price: '£2,199/month',
  reason: needs.templates ? 'Scale adds reusable custom report templates, with capacity for up to 1,000 active individuals.' : 'Capacity for up to 1,000 active individuals, with the features in Professional.'
 };
 if(needs.ai || needs.board || needs.integrations || needs.clients === '301-to-600') return {
  name: 'Professional', price: '£1,599/month',
  reason: needs.integrations ? 'Provider connections are intended for Professional and above. Availability, access and scope must be agreed at the demo, with capacity for up to 600 active individuals.' : needs.board ? 'Configurable board-report drafts are included from Professional, with capacity for up to 600 active individuals.' : needs.ai ? 'The published Professional plan includes Amaea AI, Consumer Duty and RMAR reporting, with capacity for up to 600 active individuals.' : 'Capacity for up to 600 active individuals, with AI and regulatory reporting in the published plan.'
 };
 return { name: 'Essentials', price: '£699/month', reason: 'Core client, review and document workflows for up to 300 active individuals. AI, Consumer Duty and RMAR reporting are outside this tier.' };
}

import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Amaea pricing | A plan for your firm", "Compare Amaea plans, client allowances and current integration availability. Professional starts at £1,599 per month.", "/pricing");

const plans = [
  { name: "Professional", label: "Growing practices · Most popular", price: 1599,
    description: "Bring your client evidence, compliance questions and report drafts together. A fuller workspace for the typical financial advice firm.",
    features: ["Up to 600 active individuals", "Client journeys, reviews and document evidence", "Amaea AI with sources and visible limitations", "Consumer Duty and vulnerability assessment records", "Configurable board-report drafts", "RMAR working drafts and CSV exports for review", "Unlimited report drafts"] },
  { name: "Scale", label: "Established firms", price: 2199,
    description: "For a growing client book and a compliance team that needs flexible reporting. Reuse your templates and bring more evidence into each pack.",
    features: ["Up to 1,000 active individuals", "Everything in Professional", "Configurable board and evidence packs", "Reusable custom report templates", "Choose the evidence sections your report needs", "Onboarding and training scope agreed with your firm"] },
  { name: "Enterprise", label: "Networks + groups", price: null,
    description: "Agree the scope around your network, policies and systems. Participating firms choose the summaries they share with their group or principal.",
    features: ["Unlimited active individuals, with capacity agreed at onboarding", "Everything in Scale", "Shared overview of participating firms, with their permission", "AI using your approved firm policies", "Scoped API access", "Bespoke integrations and reports scoped separately", "Custom contracts and volume pricing"] },
];
const comparison = [
  ["Active individuals", "600", "1,000", "Unlimited", "300"],
  ["Logins, provisioned through Amaea", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["Client journeys, reviews and document evidence", "Included", "Included", "Included", "Included"],
  ["Recorded health dashboard and in-app alerts", "Included", "Included", "Included", "Included"],
  ["Standard recorded-evidence exports", "Included", "Included", "Included", "Included"],
  ["Amaea AI, Consumer Duty and vulnerability assessments", "Included", "Included", "Included", "Not included"],
  ["RMAR working drafts", "Included", "Included", "Included", "Not included"],
  ["Report drafts", "Unlimited", "Unlimited", "Unlimited", "Recorded evidence"],
  ["Configurable board-report drafts", "Included", "Included", "Included", "Not included"],
  ["Reusable custom report templates", "Not included", "Included", "Included", "Not included"],
  ["Firm-policy context, shared group overview and scoped API", "Not included", "Not included", "Agreed scope", "Not included"],
];
const questions = [
  ["How does client-based pricing work?", "Your allowance counts active individuals, not households. A couple counts as two clients, even when their evidence is held together. Archived, inactive and erased clients do not count. We agree and reconcile individual client numbers during onboarding."],
  ["What is the difference between Professional and Scale reports?", "Professional and above include configurable board-report drafts: choose supported evidence sections and a reporting period, add firm notes and record your review. Scale adds reusable custom templates and larger client and AI allowances. These reports use supported sections rather than an unrestricted design tool."],
  ["What does unlimited reporting include?", "Professional and above have no monthly report-generation count limit. Each report uses a selected evidence scope and remains a draft for human review. Large record sets may need a narrower reporting period. AI assistant and extraction allowances are separate."],
  ["What are the AI and document-processing allowances?", "Professional allows 1,500 assistant requests and 1,500 document-extraction requests per calendar month. Scale allows 3,500 of each. Essentials has no AI assistant and allows 500 document-extraction requests. Enterprise has no configured monthly count cap, with usage and capacity agreed in your contract. An attempted model request counts even if the provider call fails. Document processing requires approved arrangements."],
  ["Can I submit the RMAR export directly to the regulator?", "Amaea's RMAR outputs are working drafts and CSV exports for qualified review. Calculations, applicability and submission formats still require validation. They are not validated regulator-upload files."],
  ["What is the shared group overview?", "For a network, Appointed Representative group or group of firms, it brings agreed summaries from participating firms into one view. Each firm chooses what to share, such as client counts, overdue reviews or recorded health indicators. Access to individual client files is not granted automatically. We agree permissions and scope before activation."],
  ["How does Enterprise AI use our policies?", "It uses approved, versioned firm policies as context alongside selected regulatory evidence. This does not involve training a separate AI model on your data. Bespoke integrations and report requirements are scoped individually."],
  ["What can administrators and advisers see?", "Administrators and compliance officers oversee the firm. Advisers see their assigned clients and personal work. Unlimited logins are provisioned through Amaea. We will confirm account setup and client assignments with your firm."],
  ["Are reminders sent by email?", "In-app alerts and recorded deadlines are available. Automated customer email reminders and weekly digests are not enabled yet. We will confirm available notification options during onboarding."],
  ["Can I change plans as my firm grows?", "Yes. Plan changes are managed through your Amaea contract and invoices. Amaea approves the change and records an agreed effective date after checking your active-client allowance. Customer administrators can request changes, but cannot approve them."],
  ["How long does onboarding take?", "We agree a timetable after reviewing your records, team and integration requirements. Preparation includes client imports, adviser assignments and approved evidence handling. Provider access and processing approvals can affect the start date. Training and any bespoke services are agreed with your firm."],
  ["What does the health score measure?", "The recorded health score combines document evidence, reviews and findings. It helps your team identify work to check. It is not a compliance certification or a separately validated score for the four Consumer Duty outcomes."],
  ["Do you offer discounts for networks or AR firms?", "We can discuss a tailored contract for your network or Appointed Representative group. Participating firms, oversight permissions, volume pricing and any bespoke services are agreed before onboarding."],
];

export default function Page() {
  return <>
    <section className="page-intro shell">
      <span className="eyebrow">PRICING</span><h1>What it costs.</h1>
      <p><strong>Professional is £1,599 a month, for up to 600 active individuals.</strong><br />No setup fee. Unlimited logins, provisioned through Amaea. Choose the plan that fits your firm, then agree your onboarding and integration requirements with us.</p>
      <div className="billing-toggle" aria-label="Billing period"><button data-billing="monthly" className="selected" aria-pressed="true">Monthly</button><button data-billing="annual" aria-pressed="false">Annual <span>2 months free</span></button></div>
    </section>
    <section className="plan-grid primary-plans shell pricing-public-plans" aria-label="Professional, Scale and Enterprise plans">
      {plans.map(plan => <article key={plan.name} className={`plan ${plan.name === "Professional" ? "popular" : ""}`}>
        <span className="eyebrow">{plan.label}</span><h2>{plan.name}</h2>
        <div className="plan-price">{plan.price ? <><span className="price-number" data-monthly={plan.price}>£{plan.price.toLocaleString("en-GB")}</span><span className="price-unit"> / mo</span><small className="billing-note">billed monthly</small></> : <><span className="price-number custom">Custom pricing</span><small>tailored to your network</small></>}</div>
        <p>{plan.description}</p><ul>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
        <a className={`button ${plan.name === "Professional" ? "" : "secondary"}`} href="/contact#book-demo">{plan.name === "Enterprise" ? "Discuss your firm" : "Book a demo"}</a>
      </article>)}
    </section>
    <p className="pricing-scope-note shell">Reports are drafts for your team to review and sign off. <a href="#availability">See integration availability</a> before choosing a plan.</p>
    <section className="essentials-option shell" aria-label="A core compliance option"><details><summary>Need core compliance only? Explore Essentials.</summary><article className="plan">
      <span className="eyebrow">Solo + small firms</span><h2>Essentials</h2>
      <div className="plan-price"><span className="price-number" data-monthly="699">£699</span><span className="price-unit"> / mo</span><small className="billing-note">billed monthly</small></div>
      <p>A clearer record of your clients, reviews and documents, with the evidence together and outstanding work easy to find.</p>
      <ul>{["Up to 300 active individuals", "Client journeys and milestone document checklists", "Annual-review tracking and overdue work", "Recorded health dashboard and in-app alerts", "Audit trail and agreed retention policy", "Recorded evidence exports, printable to PDF"].map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}<li className="excluded"><span aria-hidden="true">✕</span>AI assistant, Consumer Duty assessments and RMAR drafts</li></ul>
      <a className="underlined" href="#plan-comparison">Compare the plans</a>
    </article></details></section>
    <section className="perspective work-cost shell">
      <span className="eyebrow">YOUR TIME HAS A COST.</span><h2>The work behind the spreadsheet.</h2>
      <div className="work-cost-grid">
        <article><h3>The jobs that repeat</h3><p>Every piece of work ends with a check. Was the fee logged? Was the ATR recorded? Does the file match the CRM? Then the same details get typed into a second or third place, because the systems don&apos;t talk to each other. One small log takes 1.5 hours a week. A firm has several of them, and someone has to remember they exist.</p></article>
        <article><h3>The questions that don&apos;t</h3><p>Then someone asks a real, valid, business question. How many agreements were signed this month? Who are our high earners and what is their FUM? The answer is in there somewhere, usually inside a scanned fact find, in a folder, under a name spelled two different ways. Finding it means opening files one by one. Days, not minutes.</p></article>
      </div><p className="ask-amaea">With Amaea, you just ask.</p>
    </section>
    <section className="comparison shell pricing-overview" id="plan-comparison">
      <span className="eyebrow">FIND YOUR FIT</span><h2>The differences that matter.</h2><p className="micro">All plans include an audit trail and retention controls. The applicable policy is agreed with your firm.</p>
      <div className="table-scroll" tabIndex={0} role="region" aria-label="Scrollable plan comparison"><table><caption className="sr-only">Amaea plan comparison</caption><thead><tr>{["Feature", "Professional", "Scale", "Enterprise", "Essentials"].map(name => <th key={name} scope="col">{name}</th>)}</tr><tr><td></td><td data-table-price="1599">£1,599/mo</td><td data-table-price="2199">£2,199/mo</td><td>Custom</td><td data-table-price="699">£699/mo</td></tr></thead><tbody>{comparison.map(([feature,...cells]) => <tr key={feature}><th scope="row">{feature}</th>{cells.map((cell,index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>
      <p className="pricing-overview-note">Your demo helps us agree the right scope for your firm. AI allowances, setup requirements and support are explained below.</p>
    </section>
    <section className="integration-availability shell" id="availability" aria-labelledby="availability-title">
      <div className="availability-intro"><span className="eyebrow">YOUR EXISTING SYSTEMS</span><h2 id="availability-title">Where each connection stands.</h2><p>We will confirm the connections your firm needs at your demo. A plan inclusion does not mean a provider connection is live.</p></div>
      <div className="availability-grid">
        <article className="availability-card"><span className="availability-status">Setup by agreement</span><h3>SharePoint</h3><p>Connection setup for Professional and above. Your selected library, access permissions and processing arrangements need approval before document ingestion, followed by end-to-end checks.</p></article>
        <article className="availability-card"><span className="availability-status">Awaiting provider access</span><h3>Intelliflo</h3><p>Intended for Professional and above. Provider access, client-field mapping and production checks are still being arranged. We cannot offer a live connection yet.</p></article>
      </div>
      <div className="availability-roadmap" aria-label="Planned connections"><div><strong>Salesforce</strong><span>Planned · Professional and above</span></div><div><strong>Curo</strong><span>Planned · Professional and above</span></div><div><strong>Assureweb</strong><span>Planned · Professional and above</span></div></div>
      <p className="micro">Planned connections have no confirmed delivery date. Verified client and annual-review CSV imports can support your initial setup.</p>
    </section>
    <section className="faq shell"><span className="eyebrow">COMMON QUESTIONS</span><h2>A little more clarity.</h2>{questions.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <ReferenceInteractions />
  </>;
}

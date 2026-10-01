/* CEO mockup 2026-10-01 v2; preserve supplied copy and story order. */
import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Amaea pricing | What it costs",
  "Compare Essentials, Professional, Scale and Enterprise, with monthly and annual billing.",
  "/pricing",
);

export default function Page() {
  return (
    <>
      <section className="page-intro shell">
        <span className="eyebrow">{"PRICING"}</span>
        <h1>{"What it costs."}</h1>
        <p>
          <strong>
            {"Professional is £1,599 a month, for up to 600 active clients."}
          </strong>
          <br />
          {
            "No setup fee. Unlimited logins. Every tier includes the full audit trail and 7-year retention."
          }
        </p>
        <div className="billing-toggle" aria-label="Billing period">
          <button
            data-billing="monthly"
            className="selected"
            aria-pressed="true"
          >
            {"Monthly"}
          </button>
          <button data-billing="annual" aria-pressed="false">
            {"Annual "}
            <span>{"2 months free"}</span>
          </button>
        </div>
      </section>
      <section
        className="plan-grid primary-plans shell"
        aria-label="Professional, Scale and Enterprise plans"
      >
        <article className="plan popular">
          <span className="eyebrow">{"Growing practices · Most popular"}</span>
          <h2>{"Professional"}</h2>
          <div className="plan-price">
            <span className="price-number" data-monthly="1599">
              {"£1,599"}
            </span>
            <span className="price-unit">{" / mo"}</span>
            <small className="billing-note">{"billed monthly"}</small>
          </div>
          <p>
            {
              "When “we'll catch it in the annual review” stops being good enough. AI assistant, Consumer Duty outcomes, RMAR auto-pop. The full kit for the typical IFA."
            }
          </p>
          <ul>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Up to 600 active clients"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Core client journey, annual review sweep & 7-year audit trail"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"AI compliance assistant · RAG against 11,645-chunk FCA corpus"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Consumer Duty (PS22/9) · per-outcome assessment record"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Vulnerability re-assessment · FG21/1 12-month threshold"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"RMAR auto-population · sections B/D/E/G/H, GABRIEL CSV"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Consumer Duty board pack from live data"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"SharePoint & Salesforce · OAuth, scoped tokens"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Unlimited reports"}
            </li>
          </ul>
          <a className="button " href="/contact#book-demo">
            {"Book a demo"}
          </a>
        </article>
        <article className="plan ">
          <span className="eyebrow">{"Established firms"}</span>
          <h2>{"Scale"}</h2>
          <div className="plan-price">
            <span className="price-number" data-monthly="2199">
              {"£2,199"}
            </span>
            <span className="price-unit">{" / mo"}</span>
            <small className="billing-note">{"billed monthly"}</small>
          </div>
          <p>
            {
              "When the compliance team is more than one person and the board wants the numbers. Full integration suite, FCA-visit prep packs, custom reports."
            }
          </p>
          <ul>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Up to 1,000 active clients"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Everything in Professional, plus:"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {
                "Full integration suite · Intelliflo, Salesforce, SharePoint, Curo, Assureweb"
              }
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Board-level packs · live data, gaps flagged"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"FCA visit preparation pack · evidence bundles per rule"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Custom report builder"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Dedicated onboarding & training"}
            </li>
          </ul>
          <a className="button secondary" href="/contact#book-demo">
            {"Book a demo"}
          </a>
        </article>
        <article className="plan ">
          <span className="eyebrow">{"Networks + groups"}</span>
          <h2>{"Enterprise"}</h2>
          <div className="plan-price">
            <span className="price-number custom">{"Custom pricing"}</span>
            <small>{"tailored to your network"}</small>
          </div>
          <p>
            {
              "Network principals, AR groups, multi-site DA firms. Member-firm walls intact, principal-level audit visibility, single licence covers everyone."
            }
          </p>
          <ul>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Unlimited clients"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Everything in Scale, plus:"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Multi-site & network support"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Custom AI trained on your policies"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Open API & custom integrations"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"FCA visit preparation & mock audit"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Custom board packs & regulator reports"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"On-site team training"}
            </li>
            <li>
              <span aria-hidden="true">{"✓"}</span>
              {"Custom contract & volume pricing"}
            </li>
          </ul>
          <a className="button secondary" href="/contact#book-demo">
            {"Contact sales"}
          </a>
        </article>
      </section>
      <section
        className="essentials-option shell"
        aria-label="A core compliance option"
      >
        <details>
          <summary>{"Need core compliance only? Explore Essentials."}</summary>
          <article className="plan ">
            <span className="eyebrow">{"Solo + small firms"}</span>
            <h2>{"Essentials"}</h2>
            <div className="plan-price">
              <span className="price-number" data-monthly="699">
                {"£699"}
              </span>
              <span className="price-unit">{" / mo"}</span>
              <small className="billing-note">{"billed monthly"}</small>
            </div>
            <p>
              {
                "If your audit trail still lives in a SharePoint folder and one person's memory. Core sweep, audit log, Intelliflo read."
              }
            </p>
            <ul>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Up to 100 active clients"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Client journey · 17 doc types tracked"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Annual review sweep · COBS 9.5 nightly cron"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Append-only audit trail · 7-year retention"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Intelliflo read integration · AES-256-GCM tokens"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"5 standard PDF reports"}
              </li>
              <li className="excluded">
                <span aria-hidden="true">{"✕"}</span>
                {"AI compliance assistant"}
              </li>
              <li className="excluded">
                <span aria-hidden="true">{"✕"}</span>
                {"Consumer Duty (PS22/9) monitoring"}
              </li>
              <li className="excluded">
                <span aria-hidden="true">{"✕"}</span>
                {"RMAR auto-population"}
              </li>
            </ul>
            <a className="underlined" href="#plan-comparison">
              {"Compare plan details"}
            </a>
          </article>
        </details>
      </section>
      <section className="perspective work-cost shell">
        <span className="eyebrow">{"YOUR TIME HAS A COST."}</span>
        <h2>{"The work behind the spreadsheet."}</h2>
        <div className="work-cost-grid">
          <article>
            <h3>{"The jobs that repeat"}</h3>
            <p>
              {
                "Every piece of work ends with a check. Was the fee logged? Was the ATR recorded? Does the file match the CRM? Then the same details get typed into a second or third place, because the systems don't talk to each other. One small log takes 1.5 hours a week. A firm has several of them, and someone has to remember they exist."
              }
            </p>
          </article>
          <article>
            <h3>{"The questions that don't"}</h3>
            <p>
              {
                "Then someone asks a real, valid, business question. How many agreements were signed this month? Who are our high earners and what is their FUM? The answer is in there somewhere, usually inside a scanned fact find, in a folder, under a name spelled two different ways. Finding it means opening files one by one. Days, not minutes."
              }
            </p>
          </article>
        </div>
        <p className="ask-amaea">{"With Amaea, you just ask."}</p>
      </section>
      <section className="comparison shell" id="plan-comparison">
        <span className="eyebrow">{"THE DETAIL"}</span>
        <h2>{"What’s in each plan, side by side."}</h2>
        <p className="micro">{"✓ = included"}</p>
        <div
          className="table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Scrollable plan comparison"
        >
          <table>
            <caption className="sr-only">{"Amaea plan comparison"}</caption>
            <thead>
              <tr>
                <th scope="col">{"Feature"}</th>
                <th scope="col">{"Professional"}</th>
                <th scope="col">{"Scale"}</th>
                <th scope="col">{"Enterprise"}</th>
                <th scope="col">{"Essentials"}</th>
              </tr>
              <tr>
                <td></td>
                <td data-table-price="1599">{"£1,599/mo"}</td>
                <td data-table-price="2199">{"£2,199/mo"}</td>
                <td>{"Custom"}</td>
                <td data-table-price="699">{"£699/mo"}</td>
              </tr>
            </thead>
            <tbody>
              <tr className="table-category">
                <th colSpan={5}>{"Capacity"}</th>
              </tr>
              <tr>
                <th scope="row">{"Active clients"}</th>
                <td>{"600"}</td>
                <td>{"1,000"}</td>
                <td>{"Unlimited"}</td>
                <td>{"100"}</td>
              </tr>
              <tr>
                <th scope="row">{"Logins"}</th>
                <td>{"Unlimited"}</td>
                <td>{"Unlimited"}</td>
                <td>{"Unlimited"}</td>
                <td>{"Unlimited"}</td>
              </tr>
              <tr>
                <th scope="row">{"Setup fee"}</th>
                <td>{"None"}</td>
                <td>{"None"}</td>
                <td>{"None"}</td>
                <td>{"None"}</td>
              </tr>
              <tr className="table-category">
                <th colSpan={5}>{"Core compliance"}</th>
              </tr>
              <tr>
                <th scope="row">{"Client journey tracking (3 stages)"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
              </tr>
              <tr>
                <th scope="row">{"Compliance health dashboard"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
              </tr>
              <tr>
                <th scope="row">{"Smart alerts & deadline reminders"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
              </tr>
              <tr>
                <th scope="row">{"Document checklist per milestone"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
              </tr>
              <tr className="table-category">
                <th colSpan={5}>{"Consumer Duty"}</th>
              </tr>
              <tr>
                <th scope="row">{"Consumer Duty health score"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"Not included"}</td>
              </tr>
              <tr>
                <th scope="row">{"Vulnerable client tracking"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"Not included"}</td>
              </tr>
              <tr>
                <th scope="row">{"Annual Consumer Duty assessment report"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"Not included"}</td>
              </tr>
              <tr className="table-category">
                <th colSpan={5}>{"AI & Reporting"}</th>
              </tr>
              <tr>
                <th scope="row">{"AI compliance assistant"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"Custom-trained"}</td>
                <td>{"Not included"}</td>
              </tr>
              <tr>
                <th scope="row">{"RMAR pre-population"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"Not included"}</td>
              </tr>
              <tr>
                <th scope="row">{"Reports"}</th>
                <td>{"Unlimited"}</td>
                <td>{"Unlimited + custom builder"}</td>
                <td>{"Custom board packs"}</td>
                <td>{"5 standard"}</td>
              </tr>
              <tr>
                <th scope="row">{"Board-level compliance packs"}</th>
                <td>{"Not included"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"Not included"}</td>
              </tr>
              <tr className="table-category">
                <th colSpan={5}>{"Integrations"}</th>
              </tr>
              <tr>
                <th scope="row">{"Intelliflo"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
              </tr>
              <tr>
                <th scope="row">{"SharePoint & Salesforce"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"Not included"}</td>
              </tr>
              <tr>
                <th scope="row">{"Open API & custom integrations"}</th>
                <td>{"Not included"}</td>
                <td>{"Not included"}</td>
                <td>{"✓"}</td>
                <td>{"Not included"}</td>
              </tr>
              <tr className="table-category">
                <th colSpan={5}>{"Support"}</th>
              </tr>
              <tr>
                <th scope="row">{"Onboarding & training"}</th>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"✓"}</td>
                <td>{"Self-serve"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="faq shell">
        <span className="eyebrow">{"COMMON QUESTIONS"}</span>
        <h2>{"A little more clarity."}</h2>
        <details>
          <summary>{"How does client-based pricing work?"}</summary>
          <p>
            {
              "Your plan is based on the number of active clients in your Amaea account. An active client is any client record that is being monitored by the platform. Archived or inactive clients do not count. If you approach your plan limit, we’ll notify you in advance so you can upgrade before any disruption."
            }
          </p>
        </details>
        <details>
          <summary>{"Can I change plans as my firm grows?"}</summary>
          <p>
            {
              "Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the next billing cycle. There are no penalties for changing plans."
            }
          </p>
        </details>
        <details>
          <summary>{"How long does onboarding take?"}</summary>
          <p>
            {
              "Most firms are fully live within 5 business days. Our onboarding team handles the Intelliflo and SharePoint integration, imports your client data, and trains your compliance team on the platform. Enterprise clients with complex setups typically take 2–3 weeks."
            }
          </p>
        </details>
        <details>
          <summary>
            {"Do you offer discounts for networks or AR firms?"}
          </summary>
          <p>
            {
              "Yes, we offer volume pricing for networks and Appointed Representative firms. Contact our sales team to discuss a group arrangement that covers all firms in your network under a single licence."
            }
          </p>
        </details>
      </section>
      <ReferenceInteractions />
    </>
  );
}

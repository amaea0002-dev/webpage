import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
/* Approved mockup page; preserve copy and story order. */
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About Amaea | Built by someone who lived the problem",
  "Meet Hasna, CEO and Founder of Amaea. Our story, mission and values.",
  "/about",
);

export default function Page() {
  return (
    <>
      <section className="about-intro shell">
        <span className="eyebrow">
          {"THE PEOPLE BEHIND YOUR PEACE OF MIND"}
        </span>
        <h1>{"Who are we?"}</h1>
        <p>
          {
            "Amaea is an FCA compliance platform for UK financial advisers, built by someone who lived the problem. Amaea connects to your CRM, checks whether signed documents are signed for you, checks all the FCA rules and creates draft reports for you, so that the regulator never catches you off guard."
          }
        </p>
      </section>
      <section className="founder-story shell">
        <div className="founder-identity">
          <span className="eyebrow">{"OUR STORY"}</span>
          <span className="quote-mark" aria-hidden="true">
            {"“"}
          </span>
          <p className="founder-name">{"Hasna"}</p>
          <span>{"CEO and Founder"}</span>
        </div>
        <blockquote>
          <p>
            {
              "You know the moment: the FCA wants documentation, the review log has a gap, and the next two hours vanish into four systems and three files that all carry the same name."
            }
          </p>
          <p>
            {
              "I lived that for years, not something I heard about secondhand, but my own week, over and over. Compliance had quietly become the thing standing between good firms and the work they were actually there to do."
            }
          </p>
          <p>
            {
              "So I built the tool I kept wishing existed. Amaea keeps every client, every review and every document against the rule that applies, so staying compliant stops being something you fight for and becomes something you simply have. Your peace of mind, and your time back."
            }
          </p>
          <cite>{"Hasna, CEO and Founder"}</cite>
        </blockquote>
      </section>
      <section className="mission shell">
        <span className="eyebrow">{"OUR MISSION"}</span>
        <h2>
          {"Time for what"}
          <br />
          <em>{"matters most."}</em>
        </h2>
        <p>
          {
            "To give you peace of mind with compliance, so your time goes where it matters most: your clients, your firm, and the advice only you can give."
          }
        </p>
      </section>
      <section className="values shell">
        <span className="eyebrow">{"OUR VALUES"}</span>
        <h2>{"The things we stand for."}</h2>
        <div className="value-grid">
          <article>
            <span className="chapter-number">{"01 /"}</span>
            <h3>{"Simplicity."}</h3>
            <p>
              {
                "Compliance should be clear, not confusing. We turn dense regulation into plain alerts you can act on."
              }
            </p>
          </article>
          <article>
            <span className="chapter-number">{"02 /"}</span>
            <h3>{"Integrity."}</h3>
            <p>
              {
                "We keep your records honest, complete and provable, so what you show the FCA is exactly what happened, every time."
              }
            </p>
          </article>
          <article>
            <span className="chapter-number">{"03 /"}</span>
            <h3>{"Built for financial advisers."}</h3>
            <p>
              {
                "We build for the people who actually do this work, not a boardroom's idea of them. The tool fits your day, not the other way round."
              }
            </p>
          </article>
          <article>
            <span className="chapter-number">{"04 /"}</span>
            <h3>{"Respect."}</h3>
            <p>
              {
                "Your expertise is the point; ours just protects it. We handle the regulatory weight so you're free to do the work only you can do."
              }
            </p>
          </article>
          <article>
            <span className="chapter-number">{"05 /"}</span>
            <h3>{"Continuous innovation."}</h3>
            <p>
              {
                "The rules never sit still, so neither do we. Amaea keeps pace with every FCA change, so your firm stays current without you having to track it."
              }
            </p>
          </article>
        </div>
      </section>
      <ReferenceInteractions />
    </>
  );
}

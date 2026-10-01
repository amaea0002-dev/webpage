import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
/* Approved mockup page; preserve copy and story order. */
import { pageMetadata } from "@/lib/metadata";
import BookingScheduler from "@/components/reference/BookingScheduler";

export const metadata = pageMetadata(
  "Contact Amaea | Book a demo",
  "Talk to Amaea about your firm, your CRM and a demo of the platform.",
  "/contact",
);

export default function Page() {
  return (
    <>
      <section className="page-intro shell">
        <span className="eyebrow">{"LET’S FIND YOUR PEACE OF MIND"}</span>
        <h1>{"Meet Amaea."}</h1>
        <p>
          {
            "A conversation about your firm, the way you work and where Amaea could help."
          }
        </p>
      </section>
      <section className="contact-layout shell" id="book-demo">
        <div>
          <h2>
            {"A demo built"}
            <br />
            {"around you."}
          </h2>
          <p>
            {
              "Explore the platform, discuss your CRM and team, or find the right plan for your firm."
            }
          </p>
          <a className="underlined" href="mailto:hello@amaea.co.uk">
            {"hello@amaea.co.uk"}
          </a>
        </div>
        <BookingScheduler />
      </section>
      <section className="security-request shell" id="security">
        <span className="eyebrow">{"TRUST & SECURITY"}</span>
        <h2>{"The detail your firm needs."}</h2>
        <p>
          {
            "Discuss encryption, hosting and data residency, data protection and the platform’s current security documentation with the Amaea team."
          }
        </p>
        <a
          className="underlined"
          href="mailto:security@amaea.co.uk?subject=Platform%20security%20documentation"
        >
          {"Request security documentation"}
        </a>
      </section>
      <ReferenceInteractions />
    </>
  );
}

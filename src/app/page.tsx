/* CEO mockup 2026-10-01 v2; preserve supplied copy and story order. */
import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
import { pageMetadata, SITE_DESCRIPTION } from "@/lib/metadata";
import FeatureChapters from "@/components/reference/FeatureChapters";
import HeroSignature from "@/components/reference/HeroSignature";

export const metadata = pageMetadata(
  "Amaea | FCA compliance software \u00b7 Your peace of mind",
  SITE_DESCRIPTION,
  "/",
);

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        {"Amaea | FCA compliance software for UK financial advisers"}
      </h1>
      <section
        className="hero hero-home shell"
        aria-label="Amaea, your peace of mind"
      >
        <div className="hero-brand">
          <HeroSignature />
        </div>
        <p className="hero-descriptor">
          {
            "Every client, every review, every document. Kept against the FCA rule that applies."
          }
        </p>
        <div className="hero-bottom">
          <span className="eyebrow">
            {"FCA compliance software for UK financial advisers"}
          </span>
          <a href="#story" className="scroll-link">
            {"Scroll to the story "}
            <span aria-hidden="true">{"↓"}</span>
          </a>
        </div>
      </section>
      <section
        className="story"
        id="story"
        aria-label="Friday’s FCA report: the manual spreadsheet struggle"
      >
        {"\n  "}
        <div className="story-transcript sr-only">
          {"\n    "}
          <h2>{"Friday’s FCA report"}</h2>
          {"\n    "}
          <p>
            {
              "Your FCA report is due. On Friday. You open the manual client spreadsheet you use to record the evidence."
            }
          </p>
          {"\n    "}
          <p>
            {
              "There are wrong dates, including 01/07/3026 and 31/02/2026, missing entries and checks that have not been recorded."
            }
          </p>
          {"\n    "}
          <p>
            {
              "Zoom into the row for Andrew & Kate Smith. The suitability-report signed date is blank. When was it signed?"
            }
          </p>
          {"\n    "}
          <p>
            {
              "You search the client files, through four folders, until the last folder opens and you find the signed suitability report."
            }
          </p>
          {"\n    "}
          <p>
            {
              "The report opens beside the spreadsheet. The report names Andrew & Emma Smith; the spreadsheet names Andrew & Kate Smith. The report is signed, but it belongs to the wrong Andrew Smith."
            }
          </p>
          {"\n    "}
          <p>
            {
              "There are two Andrew Smiths. And that is one client. There are 100 more rows to check."
            }
          </p>
          {"\n    "}
          <p>
            {
              "Have you ever felt that pain? Amaea was built to solve exactly that, and more."
            }
          </p>
          {"\n    "}
          <p>
            {
              "In Amaea, Andrew & Kate Smith are matched to client reference CL-0142. Their own suitability report is signed on 01/07/2026, with the source document linked to the record. The correct client, signed date and evidence are together. Your peace of mind."
            }
          </p>
          {"\n  "}
        </div>
        {"\n  "}
        <div className="story-stage">
          {"\n    "}
          <div className="story-black" aria-hidden="true"></div>
          {"\n    "}
          <div className="lens-ring" aria-hidden="true">
            <span></span>
          </div>
          {"\n    "}
          <div className="story-viewport">
            {"\n      "}
            <article
              className="story-beat beat-expand"
              data-caption="Friday is coming"
              data-step="1"
            >
              <span className="sr-only">
                {"Black expands from a single point."}
              </span>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-deadline"
              data-caption="The FCA report is due"
              data-step="2"
            >
              <span className="eyebrow">{"FRIDAY IS COMING."}</span>
              <h2>
                {"Your FCA report is due."}
                <br />
                <em>{"On Friday."}</em>
              </h2>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-lens"
              data-caption="A closer look"
              data-step="3"
            >
              <span className="sr-only">
                {"The black screen collapses into a magnifying glass."}
              </span>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-spreadsheet"
              data-caption="Wrong dates. Missing entries."
              data-step="4"
            >
              {"\n        "}
              <h2>{"You open the spreadsheet."}</h2>
              <p>
                {
                  "Wrong dates. Missing entries. The evidence is in here somewhere."
                }
              </p>
              {"\n        "}
              <div className="manual-register" data-motion>
                {"\n          "}
                <div className="register-toolbar">
                  <strong>{"Client review & suitability register.xlsx"}</strong>
                  <span>{"Manually maintained"}</span>
                </div>
                {"\n          "}
                <div className="register-formula">
                  <span>{"fx"}</span>
                  <span>{"01/07/3026"}</span>
                  <small>{"Suitability report signed"}</small>
                </div>
                {"\n          "}
                <table className="manual-table">
                  <caption className="sr-only">
                    {
                      "A manually maintained client register containing errors and missing evidence"
                    }
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">{"Client name"}</th>
                      <th scope="col">{"Annual review due"}</th>
                      <th scope="col">{"Suitability report signed"}</th>
                      <th scope="col">{"Adviser"}</th>
                      <th scope="col">{"Fee logged"}</th>
                      <th scope="col">{"ATR recorded"}</th>
                      <th scope="col">{"CRM checked"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{"Margaret Ellis"}</th>
                      <td>{"18/10/2026"}</td>
                      <td className="bad-date">
                        {"01/07/3026"}
                        <span>{"Wrong year"}</span>
                      </td>
                      <td>{"HS"}</td>
                      <td>{"Yes"}</td>
                      <td>{"Yes"}</td>
                      <td>{"Yes"}</td>
                    </tr>

                    <tr>
                      <th scope="row">{"David & Priya Patel"}</th>
                      <td className="missing-entry">{"Missing"}</td>
                      <td>{"22/06/2026"}</td>
                      <td>{"JR"}</td>
                      <td>{"Yes"}</td>
                      <td>{"Missing"}</td>
                      <td>{"Yes"}</td>
                    </tr>

                    <tr className="andrew-register-row">
                      <th scope="row">{"Andrew & Kate Smith"}</th>
                      <td>{"09/10/2026"}</td>
                      <td className="missing-signed-date">
                        <span>{"Missing"}</span>
                        <small>{"No signed date"}</small>
                      </td>
                      <td>{"HS"}</td>
                      <td>{"Yes"}</td>
                      <td>{"Yes"}</td>
                      <td>{"Missing"}</td>
                    </tr>

                    <tr>
                      <th scope="row">{"Ruth Clarke"}</th>
                      <td className="bad-date">
                        {"31/02/2026"}
                        <span>{"Invalid date"}</span>
                      </td>
                      <td>{"16/05/2026"}</td>
                      <td>{"JR"}</td>
                      <td>{"Missing"}</td>
                      <td>{"Yes"}</td>
                      <td>{"Yes"}</td>
                    </tr>

                    <tr>
                      <th scope="row">{"Peter & Helen Jones"}</th>
                      <td>{"12/11/2026"}</td>
                      <td className="missing-entry">{"Missing"}</td>
                      <td>{"HS"}</td>
                      <td>{"Yes"}</td>
                      <td>{"Missing"}</td>
                      <td>{"Missing"}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="register-bottom">
                  <span>{"Client register"}</span>
                  <span>{"Rows 1–5 of 105"}</span>
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </article>
            {"\n      "}
            <article
              className="story-beat beat-missing-date"
              data-caption="Andrew & Kate Smith: no signed date"
              data-progress=".9"
              data-step="5"
            >
              {"\n        "}
              <span className="eyebrow">{"ROW 3 · ANDREW & KATE SMITH"}</span>
              <h2>{"No signed date."}</h2>
              {"\n        "}
              <div className="register-focus" data-motion>
                <div className="register-toolbar">
                  <strong>{"Client review & suitability register.xlsx"}</strong>
                  <span>{"Row 3"}</span>
                </div>
                <div className="focus-grid">
                  <div>
                    <span>{"Client name"}</span>
                    <strong>{"Andrew & Kate Smith"}</strong>
                  </div>
                  <div>
                    <span>{"Annual review due"}</span>
                    <strong>{"09/10/2026"}</strong>
                  </div>
                  <div className="focus-missing">
                    <span>{"Suitability report signed"}</span>
                    <strong>{"Missing"}</strong>
                    <small>{"Nothing recorded"}</small>
                  </div>
                </div>
              </div>
              {"\n        "}
              <p>
                {"When was the suitability report signed?"}
                <br />
                {"You need the document to find out."}
              </p>
              {"\n      "}
            </article>
            {"\n      "}
            <article
              className="story-beat beat-search"
              data-caption="Back into the client files"
              data-step="6"
            >
              <span className="eyebrow">{"CLIENT FILES / ANDREW SMITH /"}</span>
              <h2>{"It's in here somewhere…"}</h2>
              <p>{"So you start opening folders."}</p>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-folders"
              data-caption="Four folders. Still searching."
              data-progress=".97"
              data-step="7"
            >
              <h2>
                {"Another folder."}
                <br />
                {"Another file."}
              </h2>
              <div className="folders">
                {"\n        "}
                <div className="folder">
                  <span>{"01"}</span>
                  <strong>{"Fact finds"}</strong>
                  <small>{"Old and new versions"}</small>
                </div>
                {"\n        "}
                <div className="folder">
                  <span>{"02"}</span>
                  <strong>{"Annual reviews"}</strong>
                  <small>{"2024 / 2025 / 2026"}</small>
                </div>
                {"\n        "}
                <div className="folder">
                  <span>{"03"}</span>
                  <strong>{"Correspondence"}</strong>
                  <small>{"Client files"}</small>
                </div>
                {"\n        "}
                <div className="folder folder-last">
                  <div className="folder-document" data-motion>
                    <span>{"PDF"}</span>
                    <b>{"Suitability report"}</b>
                    <small>{"Andrew Smith · signed"}</small>
                  </div>
                  <div className="folder-front" data-motion>
                    <span>{"04"}</span>
                    <strong>{"Suitability reports"}</strong>
                    <small>{"Final / signed / final v2"}</small>
                  </div>
                </div>
                {"\n      "}
              </div>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-found"
              data-caption="Finally, a signed report"
              data-step="8"
            >
              <span className="eyebrow">{"FINALLY."}</span>
              <h2>{"A signed suitability report."}</h2>
              <div className="found-file" data-motion>
                <span>{"PDF"}</span>
                <strong>{"Suitability report signed.pdf"}</strong>
                <small>{"Andrew Smith · 12/06/2026"}</small>
              </div>
              <p>{"Now put the date back into the spreadsheet."}</p>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-open-report"
              data-caption="Check it against the spreadsheet"
              data-step="9"
            >
              <span className="eyebrow">
                {"THE DOCUMENT. THE MANUAL REGISTER."}
              </span>
              <h2>{"Wait. Check the client."}</h2>
              <div className="record-comparison">
                {"\n        "}
                <div className="story-document" data-motion>
                  <div className="document-toolbar">
                    <span>{"PDF · SUITABILITY REPORT"}</span>
                    <span>{"1 / 4"}</span>
                  </div>
                  <h3>{"Andrew & Emma Smith"}</h3>
                  <p>{"Recommendation and suitability assessment"}</p>
                  <div className="document-lines" aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <dl>
                    <dt>{"Signed"}</dt>
                    <dd>{"12/06/2026"}</dd>
                    <dt>{"Spouse"}</dt>
                    <dd>{"Emma"}</dd>
                  </dl>
                  <span className="document-signature">{"Andrew Smith"}</span>
                </div>
                {"\n        "}
                <div className="story-sheet" data-motion>
                  <div className="sheet-toolbar">
                    {"CLIENT REGISTER · ROW 3"}
                  </div>
                  <div className="sheet-columns" aria-hidden="true">
                    <span>{"A"}</span>
                    <span>{"B"}</span>
                    <span>{"C"}</span>
                  </div>
                  <h3>{"Andrew & Kate Smith"}</h3>
                  <dl>
                    <dt>{"Signed"}</dt>
                    <dd>{"Missing"}</dd>
                    <dt>{"Spouse"}</dt>
                    <dd>{"Kate"}</dd>
                  </dl>
                </div>
                {"\n      "}
              </div>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-mismatch"
              data-caption="Emma in the report. Kate in the register."
              data-step="10"
            >
              <span className="eyebrow">
                {"THE NAME WAS RIGHT. THE CLIENT WASN’T."}
              </span>
              <h2>{"The wrong Andrew Smith."}</h2>
              <div className="record-comparison">
                {"\n        "}
                <div className="story-document">
                  <span>{"SUITABILITY REPORT"}</span>
                  <h3>{"Andrew Smith"}</h3>
                  <dl>
                    <dt>{"Spouse"}</dt>
                    <dd className="spouse-name">{"Emma"}</dd>
                    <dt>{"Signed"}</dt>
                    <dd>{"12/06/2026"}</dd>
                  </dl>
                </div>
                {"\n        "}
                <div className="story-sheet">
                  <span>{"MANUAL REGISTER · CLIENT NAME"}</span>
                  <h3>{"Andrew & Kate Smith"}</h3>
                  <dl>
                    <dt>{"Spouse"}</dt>
                    <dd className="spouse-name">{"Kate"}</dd>
                    <dt>{"Signed"}</dt>
                    <dd>{"Still missing"}</dd>
                  </dl>
                </div>
                {"\n      "}
              </div>
              <p>
                {
                  "All that searching. And you still haven’t found the evidence."
                }
              </p>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-reveal"
              data-caption="Two clients. The same name."
              data-step="11"
            >
              <h2>
                {"There are two"}
                <br />
                {"Andrew Smiths."}
              </h2>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-scale"
              data-caption="And that is only one row"
              data-step="12"
            >
              <h2>{"And that’s one client."}</h2>
              <p>
                {"There are "}
                <strong>{"100 more rows"}</strong>
                {" to check."}
                <br />
                {"The report is still due on Friday."}
              </p>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-return"
              data-caption="Time to breathe"
              data-step="13"
            >
              <span className="sr-only">
                {"Black shrinks back to the light background."}
              </span>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-resolution"
              data-caption="We know that feeling"
              data-progress=".95"
              data-step="14"
            >
              <h2>
                {"Have you ever"}
                <br />
                {"felt that pain?"}
              </h2>
              <p className="story-answer" data-motion>
                {"Amaea was built to solve exactly that, and more."}
              </p>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-relief"
              data-caption="The correct client. The date. The evidence."
              data-progress=".95"
              data-step="15"
            >
              <span className="eyebrow">{"YOUR PEACE OF MIND."}</span>
              <h2>{"And now, you can breathe."}</h2>
              {"\n        "}
              <div className="relief-product" data-motion>
                <div className="relief-toolbar">
                  <strong>{"Amaea · Client journey"}</strong>
                  <span>{"Client journey"}</span>
                </div>
                <div className="relief-client">
                  <div>
                    <small>{"CL-0142 · VERIFIED CLIENT MATCH"}</small>
                    <h3>{"Andrew & Kate Smith"}</h3>
                  </div>
                  <span className="relief-ready">{"Evidence ready"}</span>
                </div>
                <dl className="relief-evidence">
                  <div>
                    <dt>{"Suitability report"}</dt>
                    <dd>{"Signed · 01/07/2026"}</dd>
                  </div>
                  <div>
                    <dt>{"Source evidence"}</dt>
                    <dd>{"Suitability report CL-0142.pdf"}</dd>
                  </div>
                </dl>
                <div className="relief-checks">
                  {"\n          "}
                  <div className="relief-check is-complete" data-at=".15">
                    <span aria-hidden="true">{"✓"}</span>
                    <p>
                      {"The correct client"}
                      <strong>{"Matched to the CRM record"}</strong>
                    </p>
                  </div>
                  {"\n          "}
                  <div className="relief-check is-complete" data-at=".4">
                    <span aria-hidden="true">{"✓"}</span>
                    <p>
                      {"The signed date"}
                      <strong>{"Read from the signed report"}</strong>
                    </p>
                  </div>
                  {"\n          "}
                  <div className="relief-check is-complete" data-at=".65">
                    <span aria-hidden="true">{"✓"}</span>
                    <p>
                      {"The evidence"}
                      <strong>{"Linked to the client journey"}</strong>
                    </p>
                  </div>
                  {"\n        "}
                </div>
              </div>
              <p>{"Every client. Every review. Every document. Together."}</p>
              <a className="underlined" href="#features">
                {"See how Amaea works"}
              </a>
              {"\n      "}
            </article>
            {"\n    "}
          </div>
          {"\n    "}
          <div className="story-controls">
            <div className="story-position">
              <span className="story-caption" aria-hidden="true">
                {"01 / 15 · Friday is coming"}
              </span>
              <div className="story-step-buttons">
                <button
                  className="story-previous"
                  aria-label="Previous story step"
                >
                  {"Previous"}
                </button>
                <button className="story-next" aria-label="Next story step">
                  {"Next"}
                </button>
              </div>
            </div>
            <div className="story-utility">
              <button className="story-mode" aria-pressed="false">
                {"Read the full story"}
              </button>
              <a href="#features" className="story-skip">
                {"Skip to features"}
              </a>
            </div>
          </div>
          {"\n    "}
          <div className="story-progress" aria-hidden="true">
            <span></span>
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      {"\n\n"}
      <FeatureChapters />
      <ReferenceInteractions />
    </>
  );
}

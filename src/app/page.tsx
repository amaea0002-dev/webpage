/* CEO mockup 2026-10-01 v2; preserve supplied copy and story order. */
import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
import { pageMetadata } from "@/lib/metadata";
import FeatureChapters from "@/components/reference/FeatureChapters";

export const metadata = pageMetadata(
  "Amaea | FCA compliance software \u00b7 Your peace of mind",
  "FCA compliance software for UK financial advisers. Every client, every review, every document. Explore the Amaea website mockup.",
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
          <svg
            className="hero-mark"
            viewBox="43 33 99 115"
            role="img"
            aria-label="Amaea"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M108.00 37.00 C109.35 36.98 116.00 37.04 116.00 37.04 C116.00 37.04 115.65 28.41 116.68 38.00 C117.70 47.59 121.33 86.75 122.82 101.00 C124.32 115.25 125.88 127.60 126.65 133.00 C127.43 138.40 127.56 136.10 127.99 137.00 C128.41 137.90 129.04 138.53 129.49 139.00 C129.95 139.47 130.62 139.93 131.00 140.15 C131.38 140.37 131.40 140.38 132.00 140.46 C132.60 140.54 134.45 140.60 135.00 140.68 C135.55 140.76 135.68 141.00 135.68 141.00 C135.68 141.00 135.81 142.00 135.81 142.00 C135.81 142.00 139.77 142.44 135.00 142.51 C130.23 142.59 108.80 142.51 104.00 142.50 C99.20 142.50 103.23 142.54 103.00 142.46 C102.77 142.39 102.47 142.00 102.47 142.00 C102.47 142.00 103.00 140.89 103.00 140.89 C103.00 140.89 107.95 140.60 109.00 140.51 C110.05 140.42 109.55 140.50 110.00 140.29 C110.45 140.08 111.48 139.61 112.00 139.11 C112.52 138.62 113.13 137.77 113.45 137.00 C113.77 136.23 114.63 140.45 114.14 134.00 C113.66 127.55 110.89 100.15 110.22 94.00 C109.55 87.85 109.70 93.30 109.66 93.00 C109.61 92.70 110.21 95.90 109.91 92.00 C109.61 88.10 108.19 74.05 107.65 67.00 C107.12 59.95 106.60 48.54 106.35 45.00 C106.10 41.46 106.00 43.42 106.00 43.42 C106.00 43.42 108.43 37.71 104.97 45.00 C101.50 52.29 86.25 84.80 82.90 92.00 C79.54 99.20 82.63 93.00 82.63 93.00 C82.63 93.00 83.00 93.61 83.00 93.61 C83.00 93.61 85.00 92.45 85.00 92.45 C85.00 92.45 85.65 93.00 85.65 93.00 C85.65 93.00 85.67 93.74 85.57 94.00 C85.47 94.26 85.00 94.70 85.00 94.70 C85.00 94.70 84.00 94.19 84.00 94.19 C84.00 94.19 83.00 94.93 83.00 94.93 C83.00 94.93 82.00 94.12 82.00 94.12 C82.00 94.12 71.63 116.02 68.90 122.00 C66.16 127.98 64.57 131.60 63.77 134.00 C62.98 136.40 63.58 138.00 63.58 138.00 C63.58 138.00 64.64 139.27 65.00 139.61 C65.36 139.94 65.55 140.07 66.00 140.22 C66.45 140.36 66.65 140.48 68.00 140.55 C69.35 140.62 73.79 140.61 75.00 140.67 C76.21 140.74 76.04 141.00 76.04 141.00 C76.04 141.00 76.07 142.00 76.07 142.00 C76.07 142.00 79.21 142.44 75.00 142.51 C70.79 142.59 52.13 142.56 48.00 142.49 C43.87 142.41 47.44 142.00 47.44 142.00 C47.44 142.00 48.00 140.84 48.00 140.84 C48.00 140.84 51.80 140.75 53.00 140.48 C54.20 140.22 55.23 139.61 56.00 139.09 C56.77 138.57 57.20 138.21 58.12 137.00 C59.03 135.79 58.33 138.50 62.10 131.00 C65.88 123.50 76.73 100.80 83.27 87.00 C89.81 73.20 102.15 46.48 105.71 39.00 C109.27 31.52 107.00 37.15 107.00 37.15 C107.00 37.15 106.65 37.02 108.00 37.00 Z M89.00 92.52 C89.00 92.52 90.55 92.44 91.00 92.58 C91.45 92.72 92.00 93.47 92.00 93.47 C92.00 93.47 92.70 92.92 93.00 92.81 C93.30 92.71 94.00 92.77 94.00 92.77 C94.00 92.77 94.00 93.85 94.00 93.85 C94.00 93.85 93.58 94.00 93.58 94.00 C93.58 94.00 94.02 95.00 94.02 95.00 C94.02 95.00 93.00 94.09 93.00 94.09 C93.00 94.09 91.00 94.80 91.00 94.80 C91.00 94.80 90.00 93.97 90.00 93.97 C90.00 93.97 89.00 95.19 89.00 95.19 C89.00 95.19 87.60 94.00 87.60 94.00 C87.60 94.00 89.00 92.52 89.00 92.52 Z M97.00 92.81 C97.19 92.73 98.00 92.49 98.00 92.49 C98.00 92.49 98.60 93.00 98.60 93.00 C98.60 93.00 98.68 93.74 98.59 94.00 C98.50 94.26 98.00 94.76 98.00 94.76 C98.00 94.76 97.33 94.26 97.14 94.00 C96.95 93.74 96.72 93.00 96.72 93.00 C96.72 93.00 96.81 92.88 97.00 92.81 Z M101.00 92.91 C101.27 92.70 102.00 92.58 102.00 92.58 C102.00 92.58 102.34 93.00 102.34 93.00 C102.34 93.00 101.00 94.78 101.00 94.78 C101.00 94.78 100.22 94.00 100.22 94.00 C100.22 94.00 100.73 93.13 101.00 92.91 Z M105.00 92.75 C105.38 92.52 106.00 92.49 106.00 92.49 C106.00 92.49 106.50 93.00 106.50 93.00 C106.50 93.00 106.57 93.73 106.49 94.00 C106.42 94.27 106.00 94.81 106.00 94.81 C106.00 94.81 105.00 94.19 105.00 94.19 C105.00 94.19 104.19 95.00 104.19 95.00 C104.19 95.00 103.71 95.00 103.71 95.00 C103.71 95.00 103.49 94.00 103.49 94.00 C103.49 94.00 104.62 92.98 105.00 92.75 Z M96.00 93.49 C96.00 93.49 96.81 94.00 96.81 94.00 C96.81 94.00 96.00 94.94 96.00 94.94 C96.00 94.94 95.47 94.00 95.47 94.00 C95.47 94.00 96.00 93.49 96.00 93.49 Z"
            ></path>
          </svg>
          <div className="hero-lettering">
            <span className="hero-name">{"Amaea"}</span>
            <span className="hero-promise">{"your peace of mind"}</span>
            <svg
              className="hero-tail"
              viewBox="0 0 800 2"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 1 H800" pathLength="100"></path>
            </svg>
          </div>
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
              "In the illustrative Amaea preview, Andrew & Kate Smith are matched to client reference CL-0142. Their own suitability report is signed on 01/07/2026, with the source document linked to the record. The correct client, signed date and evidence are together. Your peace of mind."
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
                  <span>{"Manually maintained · illustrative data"}</span>
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
                  <span>{"Illustrative product preview"}</span>
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

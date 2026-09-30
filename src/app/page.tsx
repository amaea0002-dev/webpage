import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
/* Approved mockup page; preserve copy and story order. */
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
        {"Amaea — FCA compliance software for UK financial advisers"}
      </h1>
      <section className="hero shell " aria-label="Amaea — your peace of mind">
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
      <section className="story" id="story" aria-label="The wrong Andrew Smith">
        {"\n  "}
        <div className="story-transcript sr-only">
          {"\n    "}
          <h2>{"The wrong Andrew Smith"}</h2>
          {"\n    "}
          <p>
            {
              "Black expands from a single point. The FCA is requesting documentation. On Friday."
            }
          </p>
          {"\n    "}
          <p>
            {
              "The black screen becomes a magnifying glass. The search continues inside its lens."
            }
          </p>
          {"\n    "}
          <p>{"It's in here somewhere…"}</p>
          {"\n    "}
          <p>
            {
              "Four folders: Fact find — 2019; Annual review — 2022; Correspondence; Suitability report — signed. The last folder opens."
            }
          </p>
          {"\n    "}
          <p>{"Found — the missing signed suitability report."}</p>
          {"\n    "}
          <p>
            {
              "The report opens beside a client spreadsheet. Both records name Andrew Smith."
            }
          </p>
          {"\n    "}
          <p>
            {
              "The signed report names spouse Kate. The spreadsheet names spouse Emma. Same name, different spouse — it’s the wrong Andrew Smith."
            }
          </p>
          {"\n    "}
          <p>{"There are two Andrew Smiths."}</p>
          {"\n    "}
          <p>
            {"The screen goes black, then returns to the light background."}
          </p>
          {"\n    "}
          <p>{"Have you ever felt that pain?"}</p>
          {"\n    "}
          <p>{"Amaea was built to solve exactly that — and more."}</p>
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
              data-step="1"
              data-caption="A single request"
            >
              <span className="sr-only">
                {"Black expands from a single point."}
              </span>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-deadline"
              data-step="2"
              data-caption="The FCA request"
            >
              <span className="eyebrow">{"FRIDAY IS COMING."}</span>
              <h2>
                {"The FCA is requesting documentation."}
                <br />
                <em>{"On Friday."}</em>
              </h2>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-lens"
              data-step="3"
              data-caption="Under the magnifying glass"
            >
              <span className="sr-only">
                {"The black screen collapses into a magnifying glass."}
              </span>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-search"
              data-step="4"
              data-caption="The search begins"
            >
              <h2>{"It's in here somewhere…"}</h2>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-folders"
              data-step="5"
              data-caption="Four folders. One missing report."
            >
              {"\n        "}
              <h2>{"It's in here somewhere…"}</h2>
              {"\n        "}
              <div className="folders">
                {"\n          "}
                <div className="folder">
                  <span>{"01"}</span>
                  <strong>{"Fact find"}</strong>
                  <small>{"2019.pdf"}</small>
                </div>
                {"\n          "}
                <div className="folder">
                  <span>{"02"}</span>
                  <strong>{"Annual review"}</strong>
                  <small>{"2022.pdf"}</small>
                </div>
                {"\n          "}
                <div className="folder">
                  <span>{"03"}</span>
                  <strong>{"Correspondence"}</strong>
                  <small>{"Client files"}</small>
                </div>
                {"\n          "}
                <div className="folder folder-last">
                  <div className="folder-document">
                    <span>{"PDF"}</span>
                    <b>{"Suitability report"}</b>
                    <small>{"Andrew Smith · signed"}</small>
                  </div>
                  <div className="folder-front">
                    <span>{"04"}</span>
                    <strong>{"Suitability report"}</strong>
                    <small>{"Signed.pdf"}</small>
                  </div>
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </article>
            {"\n      "}
            <article
              className="story-beat beat-found"
              data-step="6"
              data-caption="The signed report is found"
            >
              <span className="eyebrow">{"THERE IT IS."}</span>
              <h2>
                {"Found — the missing"}
                <br />
                {"signed suitability report."}
              </h2>
              <div className="found-file">
                <span>{"PDF"}</span>
                <strong>{"Suitability report — signed.pdf"}</strong>
                <small>{"Andrew Smith"}</small>
              </div>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-open-report"
              data-step="7"
              data-caption="The report opens beside the spreadsheet"
            >
              <span className="eyebrow">{"THE EVIDENCE, SIDE BY SIDE."}</span>
              <h2>
                {"The report."}
                <br />
                {"The client record."}
              </h2>
              <div className="record-comparison">
                <div className="story-document">
                  <div className="document-toolbar">
                    <span>{"PDF · SUITABILITY REPORT"}</span>
                    <span>{"1 / 4"}</span>
                  </div>
                  <h3>{"Andrew Smith"}</h3>
                  <p>{"Recommendation and suitability assessment"}</p>
                  <div className="document-lines" aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <dl>
                    <dt>{"Spouse"}</dt>
                    <dd>{"Kate"}</dd>
                    <dt>{"Status"}</dt>
                    <dd>{"Signed"}</dd>
                  </dl>
                  <span className="document-signature">{"Andrew Smith"}</span>
                </div>
                <div className="story-sheet">
                  <div className="sheet-toolbar">
                    {"CLIENT REGISTER · SPREADSHEET"}
                  </div>
                  <div className="sheet-columns" aria-hidden="true">
                    <span>{"A"}</span>
                    <span>{"B"}</span>
                    <span>{"C"}</span>
                  </div>
                  <h3>{"Andrew Smith"}</h3>
                  <dl>
                    <dt>{"Spouse"}</dt>
                    <dd>{"Emma"}</dd>
                    <dt>{"Status"}</dt>
                    <dd>{"Review due"}</dd>
                  </dl>
                </div>
              </div>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-mismatch"
              data-step="8"
              data-caption="The spouse names do not match"
            >
              <span className="eyebrow">{"LOOK A LITTLE CLOSER."}</span>
              <h2>
                {"The right name."}
                <br />
                {"The wrong client."}
              </h2>
              <div className="record-comparison">
                <div className="story-document">
                  <span>{"SUITABILITY REPORT"}</span>
                  <h3>{"Andrew Smith"}</h3>
                  <dl>
                    <dt>{"Spouse"}</dt>
                    <dd className="spouse-name">{"Kate"}</dd>
                    <dt>{"Status"}</dt>
                    <dd>{"Signed"}</dd>
                  </dl>
                </div>
                <div className="story-sheet">
                  <span>{"CLIENT REGISTER · SPREADSHEET"}</span>
                  <h3>{"Andrew Smith"}</h3>
                  <dl>
                    <dt>{"Spouse"}</dt>
                    <dd className="spouse-name">{"Emma"}</dd>
                    <dt>{"Status"}</dt>
                    <dd>{"Review due"}</dd>
                  </dl>
                </div>
              </div>
              <p>
                {"Same name, different spouse — it’s the wrong Andrew Smith."}
              </p>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-reveal"
              data-step="9"
              data-caption="Two clients. The same name."
            >
              <h2>
                {"There are two"}
                <br />
                {"Andrew Smiths."}
              </h2>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-return"
              data-step="10"
              data-caption="Back to clarity"
            >
              <span className="sr-only">
                {"Black shrinks back to the light background."}
              </span>
            </article>
            {"\n      "}
            <article
              className="story-beat beat-resolution"
              data-step="11"
              data-caption="Your peace of mind"
            >
              <h2>
                {"Have you ever"}
                <br />
                {"felt that pain?"}
              </h2>
              <p className="story-answer">
                {"Amaea was built to solve exactly that — and more."}
              </p>
              <a className="underlined" href="#features">
                {"See how it works"}
              </a>
            </article>
            {"\n    "}
          </div>
          {"\n    "}
          <div className="story-controls">
            <div className="story-position">
              <span className="story-caption" aria-hidden="true">
                {"01 / 11 · A single request"}
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
      {"\n"}
      <FeatureChapters />
      <ReferenceInteractions />
    </>
  );
}

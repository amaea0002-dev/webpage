import ProductScreenshot from "./ProductScreenshot";
/* Approved 30 September mockup, adapted to React. */

export default function FeatureChapters() {
  return (
    <section
      className="feature-chapters"
      id="features"
      aria-label="Seven ways Amaea supports your firm"
    >
      <p className="product-preview-note shell">Screenshots show the current app with fictional records. Example walkthroughs are available below.</p>
      <article className="chapter shell" id="chapter-1">
        <div className="chapter-copy">
          <span className="chapter-number">{"01 /"}</span>
          <h2>{"See every client's journey"}</h2>
          <p>
            {
              "Start with each piece of work you do for your client. Amaea brings documents, reviews and recorded evidence into one client journey. See outstanding work, follow the source and record your team’s judgement, with regulatory references for qualified review."
            }
          </p>
        </div>
        <figure className="chapter-proof">
          <ProductScreenshot screen="journey">
          <div className="product-window">
            <div className="window-bar">
              <span>
                <svg
                  className="mini-mark"
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
                {" Clients"}
              </span>
            </div>
            <div className="screen">
              <div className="screen-heading">
                <h3>{"Your client book"}</h3>
                <span>{"128 clients"}</span>
              </div>
              <div className="filter-tabs" aria-label="Filter clients">
                <button
                  className="selected"
                  data-client-filter="all"
                  aria-pressed="true"
                >
                  {"All"}
                </button>
                <button data-client-filter="risk" aria-pressed="false">
                  {"At risk"}
                </button>
                <button data-client-filter="compliant" aria-pressed="false">
                  {"Reviewed"}
                </button>
                <button data-client-filter="breach" aria-pressed="false">
                  {"Needs review"}
                </button>
              </div>
              <div className="client-list">
                <button
                  className="client-row"
                  data-status="risk"
                  data-client="Oliver Bennett"
                >
                  <span className="avatar">{"OB"}</span>
                  <span>
                    <strong>{"Oliver Bennett"}</strong>
                    <small>{"Onboarding · agreement missing"}</small>
                  </span>
                  <span className="status risk">{"At risk"}</span>
                </button>
                <button
                  className="client-row"
                  data-status="compliant"
                  data-client="Amelia Clarke"
                >
                  <span className="avatar">{"AC"}</span>
                  <span>
                    <strong>{"Amelia Clarke"}</strong>
                    <small>{"Ongoing advice · review complete"}</small>
                  </span>
                  <span className="status good">{"Reviewed"}</span>
                </button>
                <button
                  className="client-row"
                  data-status="breach"
                  data-client="Sarah Wilson"
                >
                  <span className="avatar">{"SW"}</span>
                  <span>
                    <strong>{"Sarah Wilson"}</strong>
                    <small>{"Annual review · overdue"}</small>
                  </span>
                  <span className="status breach">{"Needs review"}</span>
                </button>
              </div>
              <div className="client-detail" aria-live="polite">
                <span className="eyebrow">
                  {"OLIVER BENNETT · CLIENT JOURNEY"}
                </span>
                <div className="journey-track">
                  <span className="done">{"Onboarding"}</span>
                  <span>{"Advice"}</span>
                  <span>{"Ongoing review"}</span>
                </div>
                <p id="client-context">
                  {"Client agreement awaiting signature."}
                </p>
                <div className="screen-actions">
                  <button className="mini-button" id="play-client">
                    {"Play journey preview"}
                  </button>
                  <span className="micro" id="client-progress">
                    {"Client journey"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </ProductScreenshot>
          <figcaption>Client journey · staged work and source review</figcaption>
        </figure>
      </article>
      <article className="chapter shell" id="chapter-2">
        <div className="chapter-copy">
          <span className="chapter-number">{"02 /"}</span>
          <h2>{"All your clients, at a glance"}</h2>
          <p>
            {
              "Now zoom out. See your firm’s recorded health score, overdue reviews, document gaps and vulnerability indicators in one place. Open the supporting records and work through the attention queue. The score measures evidence recorded in Amaea; your team remains responsible for checking its completeness."
            }
          </p>
        </div>
        <figure className="chapter-proof">
          <ProductScreenshot screen="dashboard" />
          <figcaption>Firm overview · attention queue and recorded totals</figcaption>
        </figure>
      </article>
      <article className="chapter shell" id="chapter-3">
        <div className="chapter-copy">
          <span className="chapter-number">{"03 /"}</span>
          <h2>{"Know exactly what to fix first"}</h2>
          <p>
            {
              "Amaea groups recorded findings by severity and names the client behind each one. Follow the evidence, check any regulatory reference and record how the issue was addressed. Critical and high findings come first; a finding is a prompt for qualified review, rather than a determination of a breach."
            }
          </p>
        </div>
        <figure className="chapter-proof">
          <ProductScreenshot screen="insights">
          <div className="product-window">
            <div className="window-bar">
              <span>
                <svg
                  className="mini-mark"
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
                {" Insights"}
              </span>
            </div>
            <div className="screen">
              <div className="screen-heading">
                <h3>{"What needs you first"}</h3>
                <span id="alert-count">{"3 open issues"}</span>
              </div>
              <article className="insight">
                <div>
                  <span className="status breach">{"Critical"}</span>
                  <strong>{"Annual review overdue"}</strong>
                  <p>{"Sarah Wilson · ongoing suitability review"}</p>
                  <small>{"COBS 9.5 · source to verify"}</small>
                </div>
                <button
                  className="resolve"
                  aria-label="Resolve Sarah Wilson alert"
                >
                  {"Resolve"}
                </button>
              </article>
              <article className="insight">
                <div>
                  <span className="status risk">{"High"}</span>
                  <strong>{"Signed agreement missing"}</strong>
                  <p>{"Oliver Bennett · client agreement"}</p>
                  <small>{"Client evidence · source to verify"}</small>
                </div>
                <button
                  className="resolve"
                  aria-label="Resolve Oliver Bennett alert"
                >
                  {"Resolve"}
                </button>
              </article>
              <article className="insight">
                <div>
                  <span className="status neutral">{"Medium"}</span>
                  <strong>{"Vulnerability reassessment due"}</strong>
                  <p>{"Amelia Clarke · needs review"}</p>
                  <small>{"FG21/1 · source to verify"}</small>
                </div>
                <button
                  className="resolve"
                  aria-label="Resolve Amelia Clarke alert"
                >
                  {"Resolve"}
                </button>
              </article>
            </div>
          </div>
          </ProductScreenshot>
          <figcaption>Insights · findings ordered by recorded severity</figcaption>
        </figure>
      </article>
      <article className="chapter shell" id="chapter-4">
        <div className="chapter-copy">
          <span className="chapter-number">{"04 /"}</span>
          <h2>{"Ask Amaea about your firm"}</h2>
          <p>
            {
              "Ask plain-English questions about recorded clients, reviews, document gaps and your health score. Supported records questions return current totals and source links; regulatory questions use selected evidence and show limitations. Amaea asks for clarification when it cannot identify the records you mean, and your team reviews any compliance conclusion."
            }
          </p>
          <p className="liability">
            {
              "Amaea AI is decision support for qualified compliance staff, not regulated advice. Verify before acting."
            }
          </p>
        </div>
        <figure className="chapter-proof">
          <ProductScreenshot screen="assistant">
          <div className="product-window">
            <div className="window-bar">
              <span>
                <svg
                  className="mini-mark"
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
                {" Amaea AI"}
              </span>
            </div>
            <div className="screen assistant">
              <span className="eyebrow">
                {"YOUR FIRM’S COMPLIANCE CONTEXT"}
              </span>
              <h3>
                {"A clearer answer."}
                <br />
                {"A clear next step."}
              </h3>
              <div className="suggestions">
                <button data-question="priority">
                  {"Who should I prioritise this week?"}
                </button>
                <button data-question="duty">
                  {"What is our Consumer Duty position?"}
                </button>
                <button data-question="rmar">{"When is the RMAR due?"}</button>
              </div>
              <div className="ai-answer" role="status">
                <span className="micro">{"Answer"}</span>
                <p id="assistant-answer">
                  {
                    "Start with Sarah Wilson’s overdue review, then Oliver Bennett’s missing agreement. Check the supporting evidence and record your judgement."
                  }
                </p>
              </div>
              <form id="assistant-form">
                <label className="sr-only" htmlFor="assistant-input">
                  {"Ask Amaea AI"}
                </label>
                <input
                  id="assistant-input"
                  placeholder="Ask Amaea…"
                  maxLength={300}
                />
                <button className="mini-button" type="submit">
                  {"Ask"}
                </button>
              </form>
              <p className="micro">
                {"Choose a question to explore Amaea AI."}
              </p>
            </div>
          </div>
          </ProductScreenshot>
          <figcaption>Amaea AI · current records and visible source scope</figcaption>
        </figure>
      </article>
      <article className="chapter shell" id="chapter-5">
        <div className="chapter-copy">
          <span className="chapter-number">{"05 /"}</span>
          <h2>{"Keep track of FCA publications"}</h2>
          <p>
            {
              "Amaea checks the FCA publication feed weekly and records the latest successful check. Review publications alongside your firm’s confirmed calendar dates. The feed helps your team assess changes; it does not guarantee complete coverage or decide which obligations apply to your firm."
            }
          </p>
        </div>
        <figure className="chapter-proof">
          <ProductScreenshot screen="governance">
          <div className="product-window">
            <div className="window-bar">
              <span>
                <svg
                  className="mini-mark"
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
                {" Governance · Amaea Horizon"}
              </span>
            </div>
            <div className="screen">
              <div className="screen-heading">
                <h3>{"Your regulatory calendar"}</h3>
                <span className="status neutral">{"Horizon · weekly"}</span>
              </div>
              <div className="calendar-strip">
                <span>
                  {"MON"}
                  <br />
                  <b>{"05"}</b>
                </span>
                <span className="calendar-active">
                  {"TUE"}
                  <br />
                  <b>{"06"}</b>
                </span>
                <span>
                  {"WED"}
                  <br />
                  <b>{"07"}</b>
                </span>
                <span>
                  {"THU"}
                  <br />
                  <b>{"08"}</b>
                </span>
                <span>
                  {"FRI"}
                  <br />
                  <b>{"09"}</b>
                </span>
              </div>
              <div className="calendar-event">
                <span className="event-mark"></span>
                <div>
                  <strong>{"Consumer Duty outcomes"}</strong>
                  <p>{"Review the evidence behind your board pack."}</p>
                  <small>{"Task · owner: compliance team"}</small>
                </div>
              </div>
              <div className="calendar-event">
                <span className="event-mark"></span>
                <div>
                  <strong>{"FCA publications"}</strong>
                  <p>
                    {"Dear CEO letters · policy statements · thematic reviews"}
                  </p>
                  <small>{"Weekly monitoring preview"}</small>
                </div>
              </div>
              <button className="mini-button" id="horizon-preview">
                {"Preview Horizon update"}
              </button>
              <p className="micro" id="horizon-result" aria-live="polite">
                {"Regulatory context, ready for a qualified reviewer."}
              </p>
            </div>
          </div>
          </ProductScreenshot>
          <figcaption>Governance · deadlines, publications and feed status</figcaption>
        </figure>
      </article>
      <article className="chapter shell" id="chapter-6">
        <div className="chapter-copy">
          <span className="chapter-number">{"06 /"}</span>
          <h2>{"Your reports, drafted in one click"}</h2>
          <p>
            {
              "Prepare Consumer Duty, vulnerability and board-report drafts from recorded evidence and your notes, then review and sign off the saved version. RMAR tools produce working drafts for a qualified reviewer to check; calculations and submission formats need acceptance before filing. Your team controls the evidence and final judgement."
            }
          </p>
          <a className="underlined" href="/pricing#plan-comparison">Compare standard drafts and custom report packs</a>
        </div>
        <figure className="chapter-proof">
          <ProductScreenshot screen="reports">
          <div className="product-window">
            <div className="window-bar">
              <span>
                <svg
                  className="mini-mark"
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
                {" Reports"}
              </span>
            </div>
            <div className="screen">
              <div className="screen-heading">
                <h3>{"From evidence to a draft"}</h3>
                <span>{"Ready for your review"}</span>
              </div>
              <div className="report-grid">
                <article>
                  <span className="report-icon">{"CD"}</span>
                  <h4>{"Consumer Duty"}</h4>
                  <div className="report-meter">
                    <span style={{ width: "82%" }}></span>
                  </div>
                  <small>{"82% evidence complete"}</small>
                </article>
                <article>
                  <span className="report-icon">{"RM"}</span>
                  <h4>{"RMAR"}</h4>
                  <div className="report-meter">
                    <span style={{ width: "74%" }}></span>
                  </div>
                  <small>{"74% evidence complete"}</small>
                </article>
                <article>
                  <span className="report-icon">{"VR"}</span>
                  <h4>{"Vulnerability"}</h4>
                  <div className="report-meter">
                    <span style={{ width: "91%" }}></span>
                  </div>
                  <small>{"91% evidence complete"}</small>
                </article>
                <article>
                  <span className="report-icon">{"BP"}</span>
                  <h4>{"Board pack"}</h4>
                  <div className="report-meter">
                    <span style={{ width: "86%" }}></span>
                  </div>
                  <small>{"86% evidence complete"}</small>
                </article>
              </div>
              <button className="mini-button" id="draft-report">
                {"Preview a report draft"}
              </button>
              <p className="micro" id="draft-status" aria-live="polite">
                {"Draft for review · your reviewer retains sign-off."}
              </p>
            </div>
          </div>
          </ProductScreenshot>
          <figcaption>Reports · scope, evidence drafts and human review</figcaption>
        </figure>
      </article>
      <article className="chapter shell" id="chapter-7">
        <div className="chapter-copy">
          <span className="chapter-number">{"07 /"}</span>
          <h2>{"It runs on what you already use"}</h2>
          <p>
            {
              "Start with verified client and annual-review CSV imports. SharePoint connection setup is available for agreed onboarding, with document processing subject to approved permissions and data-handling arrangements. Intelliflo access and live integration acceptance are still being arranged. The document workflow supports 19 configured types; extraction and client matches remain drafts for your team to verify."
            }
          </p>
          <a className="underlined" href="/pricing#availability">See where each connection stands</a>
        </div>
        <figure className="chapter-proof">
          <ProductScreenshot screen="integrations">
          <div className="product-window">
            <div className="window-bar">
              <span>
                <svg
                  className="mini-mark"
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
                {" Integrations · Import Docs"}
              </span>
            </div>
            <div className="screen">
              <div className="filter-tabs">
                <button
                  className="selected"
                  data-integration-tab="connections"
                  aria-pressed="true"
                >
                  {"Connections"}
                </button>
                <button data-integration-tab="import" aria-pressed="false">
                  {"Import Docs"}
                </button>
              </div>
              <div id="connections-panel">
                <div className="integration-card">
                  <span className="integration-icon">{"iO"}</span>
                  <div>
                    <strong>{"Intelliflo"}</strong>
                    <small>{"Client records & review history"}</small>
                  </div>
                  <span className="status neutral">{"Preview"}</span>
                </div>
                <div className="integration-card">
                  <span className="integration-icon">{"SP"}</span>
                  <div>
                    <strong>{"SharePoint"}</strong>
                    <small>{"Documents where they already live"}</small>
                  </div>
                  <span className="status neutral">{"Preview"}</span>
                </div>
                <p className="micro">{"Connection availability is confirmed during onboarding."}</p>
              </div>
              <div id="import-panel" hidden>
                <label className="import-drop" htmlFor="import-file">
                  <span className="report-icon">{"↑"}</span>
                  <strong>{"Drop a document into your workflow."}</strong>
                  <span>{"Choose a file to preview import"}</span>
                  <input
                    type="file"
                    id="import-file"
                    accept=".pdf,.doc,.docx,.xlsx,.csv,.txt"
                  />
                </label>
                <p className="micro" id="import-status" aria-live="polite">
                  {"19 document types · extraction, classification, matching"}
                </p>
              </div>
            </div>
          </div>
          </ProductScreenshot>
          <figcaption>Integrations · availability and processing readiness</figcaption>
        </figure>
      </article>
    </section>
  );
}

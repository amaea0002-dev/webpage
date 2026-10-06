import ProductScreenshot, { type ProductScreen } from "./ProductScreenshot";

const captures: { screen: ProductScreen; title: string; description: string }[] = [
  { screen: "clients", title: "Your client book", description: "Client references, adviser ownership and recorded review status in one view." },
  { screen: "documents", title: "Follow the document evidence", description: "See missing, recorded complete and needs-review states, then open the source review." },
  { screen: "setup", title: "Prepare your firm workspace", description: "Account access, imports and a checklist for your team to review." },
];

export default function ProductCaptures() {
  return (
    <section className="product-captures shell" aria-labelledby="product-captures-title">
      <span className="eyebrow">Inside Amaea</span>
      <h2 id="product-captures-title">More of your workspace.</h2>
      <p>These screens are captured from the working app using fictional records. Open any screenshot to see the full view.</p>
      <div className="product-captures-grid">
        {captures.map((capture) => (
          <figure key={capture.screen}>
            <ProductScreenshot screen={capture.screen} />
            <figcaption><strong>{capture.title}</strong><span>{capture.description}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

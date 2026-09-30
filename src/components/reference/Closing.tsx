import Link from "next/link";
/* Approved 30 September mockup, adapted to React. */

export default function Closing() {
  return (
    <section className="closing shell">
      <p>
        {"Want to see how Amaea can be "}
        <em>{"your peace of mind"}</em>
        {" while also saving time along the way?"}
      </p>
      <Link className="button" href="/contact#book-demo">
        {"Book your demo now"}
      </Link>
    </section>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";

const screens = {
  journey: "client journey",
  dashboard: "firm dashboard",
  insights: "recorded findings",
  assistant: "Amaea AI records answer",
  governance: "governance and publication monitoring",
  reports: "report workspace",
  integrations: "integration readiness",
  clients: "client book",
  documents: "document evidence",
  setup: "firm setup checklist",
} as const;

export type ProductScreen = keyof typeof screens;

export function productScreenshotPath(screen: ProductScreen) {
  return `/product/${screen}-20261006.jpg`;
}

export default function ProductScreenshot({ screen, children }: {
  screen: ProductScreen;
  children?: ReactNode;
}) {
  const label = screens[screen];
  const path = productScreenshotPath(screen);
  return (
    <>
      <a className="product-screenshot" href={path} target="_blank" rel="noopener noreferrer"
        aria-label={`Open larger ${label} screenshot (new tab)`}>
        <Image src={path}
          alt={`Amaea’s current ${label}, captured from the working app with fictional records.`}
          width={1440} height={1000} sizes="(max-width: 760px) 92vw, 50vw" />
        <span className="product-screenshot-link">View full screen <span aria-hidden="true">↗</span></span>
      </a>
      {children && (
        <details className="product-walkthrough">
          <summary>Explore the example walkthrough</summary>
          <div className="product-walkthrough-content">{children}</div>
        </details>
      )}
    </>
  );
}

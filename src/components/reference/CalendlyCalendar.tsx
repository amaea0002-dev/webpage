"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (options: { url: string; parentElement: HTMLElement; resize: boolean }) => void };
  }
}

/** Mount only after the visitor chooses to load the external booking service. */
export default function CalendlyCalendar({ url }: { url: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "failed" | "slow">("loading");
  useEffect(() => {
    const parent = container.current;
    if (!parent) return;
    let cancelled = false;
    let script: HTMLScriptElement | undefined;
    const timeout = window.setTimeout(() => { if (!cancelled) setStatus("slow"); }, 15000);
    const ready = () => { if (!cancelled) { window.clearTimeout(timeout); setStatus("ready"); } };
    const observer = new MutationObserver(() => {
      const frame = parent.querySelector("iframe");
      if (frame) {
        frame.title = "Book an Amaea demo with Hasna on Calendly";
        frame.addEventListener("load", ready, { once: true });
      }
    });
    observer.observe(parent, { childList: true });
    function initialise() {
      if (cancelled || !window.Calendly) return;
      // Official widget supports hiding the profile photo and event details.
      window.Calendly.initInlineWidget({ url, parentElement: parent!, resize: true });
    }
    if (window.Calendly) initialise();
    else {
      script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initialise;
      script.onerror = () => { if (!cancelled) { window.clearTimeout(timeout); setStatus("failed"); } };
      document.head.appendChild(script);
    }
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      observer.disconnect();
      script?.remove();
      parent.replaceChildren();
    };
  }, [url]);

  return <div className="booking-calendar-shell">
    <p role="status" className="booking-calendar-status">{status === "loading" ? "Loading the booking calendar…" : status === "failed" ? "The calendar could not load. Use the separate Calendly link below or email hello@amaea.co.uk." : status === "slow" ? "Taking longer than expected? You can use the separate Calendly link below." : "Calendar loaded. Choose a time to continue."}</p>
    <div ref={container} className="booking-calendar" data-auto-load="false" />
  </div>;
}

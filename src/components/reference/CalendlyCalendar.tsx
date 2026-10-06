"use client";

import { useEffect, useRef, useState } from "react";
import { calendlyEmbedUrl, isCalendlyReadyMessage } from "@/lib/booking";

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (options: { url: string; parentElement: HTMLElement; resize: boolean }) => void };
  }
}

export type CalendarStep = "time" | "details" | "confirmed";

/** Mount only after the visitor chooses to load the external booking service. */
export default function CalendlyCalendar({ url, onStepChange }: { url: string; onStepChange?: (step: CalendarStep) => void }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "failed" | "slow">("loading");
  useEffect(() => {
    const parent = container.current;
    if (!parent) return;
    // Capture the chosen appearance at loading time. Theme switching must not
    // reload a booking form while the visitor is entering business details.
    const dark = document.documentElement.dataset.theme === "dark";
    parent.parentElement?.setAttribute("data-calendar-theme", dark ? "dark" : "light");
    const renderUrl = calendlyEmbedUrl(url, dark ? "dark" : "light");
    let cancelled = false;
    let script: HTMLScriptElement | undefined;
    const timeout = window.setTimeout(() => { if (!cancelled) setStatus("slow"); }, 15000);
    const ready = () => { if (!cancelled) { window.clearTimeout(timeout); setStatus("ready"); } };
    const observer = new MutationObserver(() => {
      const frame = parent.querySelector("iframe");
      if (frame) {
        frame.title = "Book an Amaea demo with Hasna on Calendly";

      }
    });
    observer.observe(parent, { childList: true });
    const message = (event: MessageEvent) => {
      if (!isCalendlyReadyMessage(event, parent.querySelector("iframe")?.contentWindow)) return;
      ready();
      const type = event.data.event;
      onStepChange?.(type === "calendly.event_scheduled" ? "confirmed" : type === "calendly.date_and_time_selected" ? "details" : "time");
    };
    window.addEventListener("message", message);
    function initialise() {
      if (cancelled || !window.Calendly || !renderUrl) return;
      // Official widget supports hiding the profile photo and event details.
      window.Calendly.initInlineWidget({ url: renderUrl, parentElement: parent!, resize: true });
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
      window.removeEventListener("message", message);
      script?.remove();
      parent.replaceChildren();
    };
  }, [url, onStepChange]);

  return <div className="booking-calendar-shell">
    <p role="status" className={`booking-calendar-status${status === "ready" ? " sr-only" : ""}`}>{status === "loading" ? "Loading the booking calendar…" : status === "failed" ? "The calendar could not load. Use the separate Calendly link below or email hello@amaea.co.uk." : status === "slow" ? "Taking longer than expected? You can use the separate Calendly link below." : "Calendar loaded. Choose a time to continue."}</p>
    {(status === "failed" || status === "slow") && <a className="booking-calendar-reload" href="/contact#book-demo">Reload booking page</a>}
    <div ref={container} className="booking-calendar" data-auto-load="false" />
  </div>;
}

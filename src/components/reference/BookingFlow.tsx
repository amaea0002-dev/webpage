"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { suggestPlan, type ClientBand, type PlanNeeds, type PlanSuggestion } from "@/lib/plan-guide";
import CalendlyCalendar, { type CalendarStep } from "./CalendlyCalendar";

type Stage = "welcome" | "guide" | "result" | "booking";
const initialNeeds: PlanNeeds = { clients: "unsure", network: false, ai: false, board: false, customApi: false };

function BookingActionIcon({ external = false }: { external?: boolean }) {
  return (
    <svg className="booking-action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={external ? "M4 12 12 4M4 4h8v8" : "M3 8h10M8 3l5 5-5 5"} />
    </svg>
  );
}

export default function BookingFlow({ bookingUrl, embedUrl }: { bookingUrl: string; embedUrl: string | null }) {
  const [stage, setStage] = useState<Stage>("welcome");
  const [clients, setClients] = useState<ClientBand | "">("");
  const [needs, setNeeds] = useState(initialNeeds);
  const [suggestion, setSuggestion] = useState<PlanSuggestion | null>(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [calendarStep, setCalendarStep] = useState<CalendarStep>("time");
  const heading = useRef<HTMLHeadingElement>(null);
  const flow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (stage === "welcome") return;
    heading.current?.focus({ preventScroll: true });
    flow.current?.scrollIntoView({ block: "start" });
  }, [stage, calendarVisible]);

  function recommend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!clients) return;
    setSuggestion(suggestPlan({ ...needs, clients }));
    setStage("result");
  }
  function book(skip = false) {
    if (skip) setSuggestion(null);
    setCalendarVisible(false);
    setCalendarStep("time");
    setStage("booking");
  }

  if (stage === "booking") return (
    <div ref={flow} className="booking-flow booking-flow-calendar booking-experience">
      <aside className="booking-meeting" aria-label="Your Amaea demo">
        <span className="eyebrow">YOUR DEMO WITH HASNA</span>
        <h2 ref={heading} tabIndex={-1}>Make time for<br /><em>peace of mind.</em></h2>
        <p>A conversation about your firm, the way you work and where Amaea could help.</p>
        <dl className="booking-meeting-facts">
          <div><dt>With</dt><dd>Hasna<span>CEO and Founder</span></dd></div>
          <div><dt>Duration</dt><dd>30 minutes</dd></div>
          <div><dt>Where</dt><dd>Online</dd></div>
        </dl>
        <div className="booking-discussion">
          <span className="eyebrow">BUILT AROUND YOUR FIRM</span>
          <ul><li>Your reviews and document workflows</li><li>The tools your team already uses</li><li>The right starting point for Amaea</li></ul>
        </div>
        {suggestion && <div className="booking-starting-plan"><span className="eyebrow">YOUR STARTING POINT</span><strong>{suggestion.name}</strong><span>{suggestion.price}</span><p>We will confirm fit and availability together.</p></div>}
        <button type="button" className="booking-text-button" onClick={() => { setCalendarVisible(false); setStage("guide"); }}>Revisit the plan guide</button>
      </aside>
      <section className="booking-time-panel" aria-label="Book your Amaea demo">
        <ol className="booking-progress" aria-label="Booking progress">
          {([ ["time", "Choose a time"], ["details", "Your firm"], ["confirmed", "Confirmed"] ] as const).map(([step, label], index) => <li key={step} aria-current={calendarStep === step ? "step" : undefined} data-complete={(["time", "details", "confirmed"] as const).indexOf(calendarStep) > index}><span className="booking-progress-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{label}</span></li>)}
        </ol>
        {!calendarVisible && <div className="booking-calendar-choice">
          <span className="eyebrow">A TIME THAT SUITS YOU</span>
          <h3>Let’s find a time.</h3>
          <p>Choose from Hasna’s live calendar and tell us a little about your firm.</p>
          {embedUrl && <>
            <button type="button" className="button booking-action" onClick={() => { setCalendarStep("time"); setCalendarVisible(true); }}>Load booking calendar <BookingActionIcon /></button>
            <div className="booking-service-notice"><p>Calendly provides the booking calendar. Loading it connects to Calendly, which may use cookies and process technical information. Its Cookie settings let you manage optional cookies.</p><p><a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">Calendly privacy notice<span className="sr-only"> (opens in a new tab)</span></a><span aria-hidden="true"> · </span><a href="/cookies">Our cookie notice</a></p></div>
          </>}
        </div>}
        {calendarVisible && embedUrl && <>
          <div className="booking-calendar-toolbar"><span>{calendarStep === "details" ? "A little context for your conversation." : calendarStep === "confirmed" ? "Your booking details are below." : "Choose your date, time and time zone."}</span><button type="button" className="booking-text-button" onClick={() => setCalendarVisible(false)}>Hide calendar</button></div>
          <CalendlyCalendar url={embedUrl} onStepChange={setCalendarStep} />
          <p className="micro booking-data-note">Booking details go to Calendly and Amaea. Manage Calendly cookies in its Cookie settings or your browser; hiding the calendar does not delete existing cookies.</p>
        </>}
        <div className="booking-fallback"><a className="underlined booking-action" href={bookingUrl} target="_blank" rel="noopener noreferrer">{embedUrl ? "Open Calendly separately" : "Choose a time on Calendly"}<BookingActionIcon external /><span className="sr-only"> (opens in a new tab)</span></a><a href="mailto:hello@amaea.co.uk" className="underlined">Prefer to email us?</a></div>
        <noscript><p>To book without JavaScript, <a href={bookingUrl} target="_blank" rel="noopener noreferrer">open Hasna’s Calendly page (new tab)</a>.</p></noscript>
      </section>
    </div>
  );

  return (
    <div ref={flow} className="booking-preview booking-flow">
      <span className="eyebrow">A LITTLE CLARITY BEFORE WE MEET</span>
      <h2 ref={heading} tabIndex={-1}>
        {stage === "welcome" ? <>Find your fit.<br /><em>Then find a time.</em></> : stage === "guide" ? "What does your firm need?" : suggestion ? "Your suggested starting point." : "Let’s find your fit together."}
      </h2>
      {stage === "welcome" && <>
        <p>Three quick questions can help you find a plan to discuss in your demo. Or go straight to choosing a time.</p>
        <div className="booking-actions">
          <button type="button" className="button booking-action" onClick={() => setStage("guide")}>Find my plan <BookingActionIcon /></button>
          <button type="button" className="button secondary" onClick={() => book(true)}>Skip and book</button>
        </div>
        <p className="micro">Optional. No contact details needed. Every plan has unlimited logins and no setup fee.</p>
      </>}
      {stage === "guide" && <form onSubmit={recommend}>
        <p className="micro booking-guide-intro">Your answers are used only on this page. We do not save them or send them to Amaea or Calendly.</p>
        <fieldset className="booking-question">
          <legend><span className="booking-question-number">01</span> How many active clients?</legend>
          <label className="sr-only" htmlFor="booking-client-band">Active client count</label>
          <select id="booking-client-band" required value={clients} onChange={e => setClients(e.target.value as ClientBand | "")}>
            <option value="" disabled>Choose a range</option>
            <option value="up-to-100">Up to 100</option>
            <option value="101-to-600">101 to 600</option>
            <option value="601-to-1000">601 to 1,000</option>
            <option value="over-1000">More than 1,000</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </fieldset>
        <fieldset className="booking-question">
          <legend><span className="booking-question-number">02</span> What would help most?</legend>
          <p className="micro">Core client, review and document workflows are included in every plan. Select any extras you need.</p>
          {([
            ["ai", "AI, Consumer Duty and RMAR reporting"],
            ["board", "Board packs and custom report building"],
            ["customApi", "Custom API requirements"],
          ] as const).map(([key, label]) => <label className="booking-choice" key={key}><input type="checkbox" checked={needs[key]} onChange={e => setNeeds({ ...needs, [key]: e.target.checked })} /><span>{label}</span></label>)}
        </fieldset>
        <fieldset className="booking-question">
          <legend><span className="booking-question-number">03</span> How is your firm organised?</legend>
          <label className="booking-choice"><input type="radio" name="firm-structure" checked={!needs.network} onChange={() => setNeeds({ ...needs, network: false })} /><span>A single firm</span></label>
          <label className="booking-choice"><input type="radio" name="firm-structure" checked={needs.network} onChange={() => setNeeds({ ...needs, network: true })} /><span>A network or group of firms</span></label>
        </fieldset>
        <div className="booking-actions">
          <button type="submit" className="button">See my suggested plan</button>
          <button type="button" className="booking-text-button" onClick={() => book(true)}>Skip and book instead</button>
        </div>
      </form>}
      {stage === "result" && <>
        {suggestion ? <div className="booking-plan" aria-label="Suggested plan">
          <span className="eyebrow">A PLAN TO DISCUSS</span>
          <h3>{suggestion.name}</h3>
          <p className="booking-plan-price">{suggestion.price}</p>
          <p>{suggestion.reason}</p>
          <p className="micro">Unlimited logins. No setup fee. {suggestion.name === "Enterprise" ? "Pricing agreed with the team." : "Monthly pricing shown."}</p>
        </div> : <p>We need your active client numbers to suggest a plan confidently. You can still book a demo and explore the options with Hasna.</p>}
        <p className="micro">This is a guide, not a quote or commitment. We will confirm fit, feature availability and contract terms together. <a href="/pricing">Compare all plans</a>.</p>
        <div className="booking-actions">
          <button type="button" className="button" onClick={() => book()}>Choose a demo time</button>
          <button type="button" className="booking-text-button" onClick={() => setStage("guide")}>Edit my answers</button>
        </div>
      </>}
      <noscript><p>To book without JavaScript, <a href={bookingUrl} target="_blank" rel="noopener noreferrer">open Hasna’s Calendly page (new tab)</a>.</p></noscript>
    </div>
  );
}

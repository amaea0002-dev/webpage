"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { suggestPlan, type ClientBand, type PlanNeeds, type PlanSuggestion } from "@/lib/plan-guide";
import CalendlyCalendar from "./CalendlyCalendar";

type Stage = "welcome" | "guide" | "result" | "booking";
const initialNeeds: PlanNeeds = { clients: "unsure", network: false, ai: false, board: false, customApi: false };

export default function BookingFlow({ bookingUrl, embedUrl }: { bookingUrl: string; embedUrl: string | null }) {
  const [stage, setStage] = useState<Stage>("welcome");
  const [clients, setClients] = useState<ClientBand | "">("");
  const [needs, setNeeds] = useState(initialNeeds);
  const [suggestion, setSuggestion] = useState<PlanSuggestion | null>(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (stage === "welcome") return;
    heading.current?.focus();
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
    setStage("booking");
  }

  return (
    <div className={`booking-preview booking-flow${stage === "booking" ? " booking-flow-calendar" : ""}`}>
      <span className="eyebrow">{stage === "booking" ? "YOUR DEMO WITH HASNA" : "A LITTLE CLARITY BEFORE WE MEET"}</span>
      <h2 ref={heading} tabIndex={-1}>
        {stage === "welcome" ? <>Find your fit.<br /><em>Then find a time.</em></> : stage === "guide" ? "What does your firm need?" : stage === "result" ? suggestion ? "Your suggested starting point." : "Let’s find your fit together." : "Make time for peace of mind."}
      </h2>
      {stage === "welcome" && <>
        <p>Three quick questions can help you find a plan to discuss in your demo. Or go straight to choosing a time.</p>
        <div className="booking-actions">
          <button type="button" className="button" onClick={() => setStage("guide")}>Find my plan <span aria-hidden="true">↗</span></button>
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
      {stage === "booking" && <>
        {suggestion && <p className="booking-plan-summary">Your starting point: <strong>{suggestion.name}</strong> · {suggestion.price}. Discuss it with Hasna at your demo.</p>}
        {!calendarVisible && <div className="booking-calendar-choice">
          <p>Choose a time with Hasna, Amaea’s CEO and Founder.</p>
          {embedUrl && <>
            <p className="micro">The calendar is provided by Calendly. Loading it connects your browser to Calendly, which may use cookies and process technical information. Use Calendly’s Cookie settings to manage optional cookies. If those controls are unavailable here, open Calendly separately below. <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">Calendly privacy notice<span className="sr-only"> (opens in a new tab)</span></a> · <a href="/cookies">Our cookie notice</a>.</p>
            <button type="button" className="button" onClick={() => setCalendarVisible(true)}>Load booking calendar</button>
          </>}
        </div>}
        {calendarVisible && embedUrl && <>
          <div className="booking-calendar-toolbar"><span>Choose your date and time below.</span><button type="button" className="booking-text-button" onClick={() => setCalendarVisible(false)}>Hide calendar</button></div>
          <CalendlyCalendar url={embedUrl} />
          <p className="micro">Booking details go to Calendly and Amaea. Hiding the calendar stops displaying it; manage existing Calendly cookies using its Cookie settings or your browser.</p>
        </>}
        <div className="booking-fallback">
          <a className="underlined" href={bookingUrl} target="_blank" rel="noopener noreferrer">{embedUrl ? "Prefer to open Calendly separately?" : "Choose a time on Calendly"}<span className="sr-only"> (opens in a new tab)</span></a>
          <button type="button" className="booking-text-button" onClick={() => { setCalendarVisible(false); setStage("guide"); }}>Back to the plan guide</button>
        </div>
      </>}
      <noscript><p>To book without JavaScript, <a href={bookingUrl} target="_blank" rel="noopener noreferrer">open Hasna’s Calendly page (new tab)</a>.</p></noscript>
    </div>
  );
}

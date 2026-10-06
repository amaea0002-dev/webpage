"use client";

import { useId, useState, type CSSProperties } from "react";
import artwork from "./signature-artwork.json";

export type SignatureDirection = "flow";

export default function HeroSignature({ direction = "flow", animated = true, showReplay = true, previewTime }: {
  direction?: SignatureDirection;
  animated?: boolean;
  showReplay?: boolean;
  previewTime?: number;
}) {
  const [replay, setReplay] = useState(0);
  const id = `signature-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const design = artwork.variants.find((variant) => variant.id === direction) ?? artwork.variants[0];

  return (
    <div className="hero-signature-frame" data-direction={direction} data-animated={animated}
      style={{ "--signature-complete": `${design.complete}ms` } as CSSProperties}>
      <svg key={`${direction}-${replay}-${previewTime ?? "play"}`} className="hero-signature" viewBox="0 0 1000 230"
        role="img" aria-labelledby={`${id}-title`}>
        <title id={`${id}-title`}>Amaea. Your peace of mind.</title>
        <defs>
          <style>{design.strokes.map((stroke, index) =>
            `@keyframes ${id}-stroke-${index}{0%{stroke-dashoffset:100;opacity:0}.1%{opacity:1}${stroke.frames.filter((frame) => frame.at > 0).map((frame) =>
              `${frame.at}%{stroke-dashoffset:${frame.offset}}`).join("")}}`
          ).join("")}</style>
          {design.strokes.map((stroke, index) => stroke.parent >= 3 && (
            <mask key={index} id={`${id}-region-${index}`} maskUnits="userSpaceOnUse" x="45" y="10" width="900" height="170">
              <path d={stroke.region} fill="white" stroke="white" strokeWidth=".8" strokeLinejoin="round" />
            </mask>
          ))}
          {/* Capital strokes overlap so a crossing never leaves a reserved gap. */}
          {artwork.capitalStrokes.map((capital, capitalIndex) => (
            <mask key={capitalIndex} id={`${id}-capital-${capitalIndex}`} maskUnits="userSpaceOnUse" x="45" y="10" width="210" height="170">
              {capital.strokes.map((strokeIndex) => {
                const stroke = design.strokes[strokeIndex];
                const timing = { animationName: `${id}-stroke-${strokeIndex}`, animationPlayState: previewTime === undefined ? "running" : "paused", "--delay": `${stroke.delay - (previewTime ?? 0)}ms`, "--duration": `${stroke.duration}ms` } as CSSProperties;
                return <path key={strokeIndex} className="hero-signature-pen" d={stroke.pen} pathLength="100"
                  fill="none" stroke="white" strokeWidth={stroke.maskWidth} style={timing} />;
              })}
            </mask>
          ))}
          {artwork.glyphs.map((glyph, glyphIndex) => glyphIndex > 0 && (
            <mask key={glyphIndex} id={`${id}-mask-${glyphIndex}`} maskUnits="userSpaceOnUse" x="45" y="10" width="900" height="170">
              {glyph.strokes.map((strokeIndex) => {
                const stroke = design.strokes[strokeIndex];
                const timing = { animationName: `${id}-stroke-${strokeIndex}`, animationPlayState: previewTime === undefined ? "running" : "paused", "--delay": `${stroke.delay - (previewTime ?? 0)}ms`, "--duration": `${stroke.duration}ms` } as CSSProperties;
                return <g key={strokeIndex}>
                  <path className="hero-signature-pen" d={stroke.pen} pathLength="100" mask={`url(#${id}-region-${strokeIndex})`}
                    fill="none" stroke="white" strokeWidth={stroke.maskWidth} style={timing} />
                  <path className="hero-signature-pen" d={stroke.pen} pathLength="100"
                    fill="none" stroke="white" strokeWidth="6" style={timing} />
                </g>;
              })}
            </mask>
          ))}
          <mask id={`${id}-tail`} maskUnits="userSpaceOnUse" x="450" y="130" width="500" height="45">
            <path className="hero-signature-pen" d={design.strokes[design.tailStroke].pen} pathLength="100"
              fill="none" stroke="white" strokeWidth="3.2"
              style={{ animationName: `${id}-stroke-${design.tailStroke}`, animationPlayState: previewTime === undefined ? "running" : "paused", "--delay": `${design.strokes[design.tailStroke].delay - (previewTime ?? 0)}ms`, "--duration": `${design.strokes[design.tailStroke].duration}ms` } as CSSProperties} />
          </mask>
        </defs>
        <g fill="currentColor" className="hero-signature-word">
          {artwork.capitalStrokes.map((capital, index) => <path key={`capital-${index}`} d={capital.ink} mask={`url(#${id}-capital-${index})`} />)}
          {artwork.glyphs.map((glyph, index) => index > 0 && <path key={index} d={glyph.ink} mask={`url(#${id}-mask-${index})`} />)}
        </g>
        <path d="M468.7 148.9H928" fill="none" stroke="currentColor" strokeWidth="2.1"
          strokeLinecap="round" mask={`url(#${id}-tail)`} />
        <text className="hero-signature-tagline" x="545" y="128" textAnchor="start"
          style={{ animationPlayState: previewTime === undefined ? "running" : "paused", "--delay": `${design.taglineDelay - (previewTime ?? 0)}ms` } as CSSProperties}>
          your peace of mind
        </text>
      </svg>
      {showReplay && animated && <button type="button" className="hero-signature-replay"
        aria-label="Replay Amaea handwriting animation" onClick={() => setReplay((value) => value + 1)}>
        <span aria-hidden="true">↻</span> Replay
      </button>}
      <noscript><style>{".hero-signature-replay{display:none}.hero-signature-pen,.hero-signature-promise{animation:none!important;stroke-dashoffset:0!important}.hero-signature-tagline{animation:none!important;clip-path:none!important;opacity:1!important}"}</style></noscript>
    </div>
  );
}

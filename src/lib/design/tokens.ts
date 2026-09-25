/* amaea.co.uk r2 — editorial-documentary tokens.
 *
 * Newsreader (serif) carries display + headings; Inter carries body;
 * JetBrains Mono carries footnotes, data callouts, captions. The whole
 * surface reads like long-form journalism crossed with a McKinsey report.
 * Plum is the single accent, used sparingly. */

export const color = {
  ink:        '#16110E',   // near-black with warm tint
  ink2:       '#3A322C',   // body
  ink3:       '#5C5249',   // secondary
  ink4:       '#8B7F73',   // caption / footnote
  mute:       '#B4A89B',
  rule:       '#D8CDBF',   // rule lines, hairlines

  bg:         '#F5EFE5',   // warm stone, like newsprint
  surface:    '#FCFAF5',   // card / panel
  surface2:   '#EDE5D7',   // recessed

  plum:       '#40243F',
  plumDeep:   '#2A1729',
  plumTint:   'rgba(64,36,63,0.06)',

  accent:     '#B7411C',   // editorial accent — warm rust, used for pull-quotes + drop caps
} as const

// Type scale — wide spread for editorial hierarchy. Larger top than r2 app.
export const text = {
  '2xs': '0.6875rem', // 11px — footnote
  xs:    '0.78rem',   // 12.5px — caption
  sm:    '0.875rem',  // 14px — small body
  base:  '1.0625rem', // 17px — primary body (large by SaaS standards; editorial body size)
  lg:    '1.25rem',   // 20px — lede
  xl:    '1.625rem',  // 26px — section title
  '2xl': '2.25rem',   // 36px — page title
  '3xl': '3rem',      // 48px — display
  hero:  '4.5rem',    // 72px — hero display
} as const

export const radius = {
  none:  '0',
  xs:    '2px',
  sm:    '3px',
  md:    '5px',
  lg:    '8px',
  pill:  '999px',
} as const

export const space = {
  1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 8: '32px',
  10: '40px', 12: '48px', 16: '64px', 20: '80px', 24: '96px', 32: '128px',
} as const

export const layout = {
  textWidth:   '38rem',   // 608px — narrow, editorial reading column
  prosWidth:   '44rem',   // 704px — wider essays
  maxContent:  '76rem',   // 1216px — for multi-column dashboards / data displays
  headerH:     '72px',
} as const

import { ImageResponse } from 'next/og'

export const alt = 'Amaea. Your Peace of Mind. Compliance software for UK financial planning firms.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', background: '#EDEAED', color: '#371936', display: 'flex', flexDirection: 'column', padding: '64px 76px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #B4A8B4', paddingBottom: 28 }}>
        <span style={{ fontSize: 42, fontWeight: 700, letterSpacing: '-2px' }}>amaea</span>
        <span style={{ fontSize: 20 }}>For UK financial planning firms</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }}>
        <span style={{ fontSize: 82, fontWeight: 700, letterSpacing: '-4px', lineHeight: 1.1 }}>Your Peace of Mind.</span>
        <span style={{ fontSize: 32, marginTop: 30 }}>Every Client, Every Review, Every Document.</span>
        <span style={{ fontSize: 26, marginTop: 14, color: '#4A414A' }}>Kept against the FCA rule that applies.</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', fontSize: 20 }}>
        <span>Help shape the next release. Register your interest.</span>
        <span>amaea.co.uk</span>
      </div>
    </div>, size,
  )
}

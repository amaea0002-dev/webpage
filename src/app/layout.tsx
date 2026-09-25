import type { Metadata } from 'next'
import { Inter, Pinyon_Script } from 'next/font/google'
import localFont from 'next/font/local'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'
import './brand-refresh.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans-loaded', display: 'swap' })
// Pinyon Script is single-weight; used only for the wordmark and the "peace of mind" moments.
const script = Pinyon_Script({ subsets: ['latin'], weight: '400', variable: '--font-script-loaded', display: 'swap' })
// Cabinet Grotesk (self-hosted) — display face for the heading tier; one file covers 600–700.
const cabinet = localFont({
  src: [{ path: '../fonts/CabinetGrotesk-700.woff2', weight: '600 700', style: 'normal' }],
  variable: '--font-display-loaded',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://amaea.co.uk'),
  title: 'Amaea — Your Peace of Mind.',
  description: 'Every Client, Every Review, Every Document. Kept against the FCA rule that applies. An FCA compliance platform for UK financial advisers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${script.variable} ${cabinet.variable}`}>
      <body>
        {/* No-flash theme: set data-theme before first paint from storage / OS preference. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('amaea-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;}catch(e){}`,
          }}
        />
        <a href="#main-content" className="skip-to-main">Skip to main content</a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

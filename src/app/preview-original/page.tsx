import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'
import RefinedStory from './RefinedStory'
import './polish.css'

export const metadata: Metadata = {
  title: 'Amaea — original homepage, refined',
  robots: { index: false, follow: false },
}

// Keep the original page and hero; refine only this preview’s story.
// Every visual override is scoped to this wrapper or a body containing it.
export default function OriginalPreviewPage() {
  return (
    <div className="original-polish">
      <aside className="original-comparison" aria-label="Design comparison">
        <span>Original, refined</span>
        <a href="http://127.0.0.1:3001/" target="_blank" rel="noopener noreferrer">
          View untouched original <span aria-hidden="true">↗</span>
        </a>
      </aside>
      <HomePageContent story={<RefinedStory />} />
    </div>
  )
}

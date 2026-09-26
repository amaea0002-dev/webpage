import HomePageContent from '@/components/HomePageContent'
import { pageMetadata, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/metadata'

export const metadata = pageMetadata(SITE_TITLE, SITE_DESCRIPTION, '/')

export default function HomePage() {
  return <HomePageContent />
}

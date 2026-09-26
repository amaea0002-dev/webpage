import { handleEnquiry } from '@/lib/forms/handle-enquiry'

export const dynamic = 'force-dynamic'
export const maxDuration = 15

export async function POST(request: Request) {
  return handleEnquiry(request)
}

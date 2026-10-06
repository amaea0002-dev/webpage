/** Public booking page supplied by the team and verified on 6 October 2026. */
export const APPROVED_BOOKING_URL='https://calendly.com/hasna-amaea/demo'
export function bookingUrl(configured?:string){
 const url=new URL(configured||APPROVED_BOOKING_URL)
 if(url.protocol!=='https:'||url.username||url.password)throw new Error('The booking scheduler must use a secure public URL')
 return url.href
}

/** Embed only the trusted provider. Never forward arbitrary query parameters or contact data. */
export function calendlyEmbedUrl(configured: string, theme: "light" | "dark" = "light"): string | null {
 const url = new URL(bookingUrl(configured))
 if(url.hostname !== 'calendly.com' || url.port) return null
 url.search = ''
 url.hash = ''
 url.searchParams.set('hide_event_type_details', '1')
 url.searchParams.set('background_color', theme === 'dark' ? '26122a' : 'edeaed')
 url.searchParams.set('text_color', theme === 'dark' ? 'fbf4f9' : '241c22')
 url.searchParams.set('primary_color', theme === 'dark' ? 'e9d6e7' : '371936')
 return url.href
}

/** Read only a documented readiness event from this calendar's own window. */
export function isCalendlyReadyMessage(event: { origin: string; source: unknown; data: unknown }, frameWindow: unknown): boolean {
 if(!frameWindow || event.source !== frameWindow || event.origin !== 'https://calendly.com') return false
 if(!event.data || typeof event.data !== 'object') return false
 const type = (event.data as { event?: unknown }).event
 return type === 'calendly.event_type_viewed' || type === 'calendly.profile_page_viewed' || type === 'calendly.date_and_time_selected' || type === 'calendly.event_scheduled'
}

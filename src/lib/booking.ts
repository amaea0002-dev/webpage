/** Public booking page supplied by the team and verified on 6 October 2026. */
export const APPROVED_BOOKING_URL='https://calendly.com/hasna-amaea/demo'
export function bookingUrl(configured?:string){
 const url=new URL(configured||APPROVED_BOOKING_URL)
 if(url.protocol!=='https:'||url.username||url.password)throw new Error('The booking scheduler must use a secure public URL')
 return url.href
}

/** Embed only the trusted provider. Never forward arbitrary query parameters or contact data. */
export function calendlyEmbedUrl(configured: string): string | null {
 const url = new URL(bookingUrl(configured))
 if(url.hostname !== 'calendly.com' || url.port) return null
 url.search = ''
 url.hash = ''
 url.searchParams.set('hide_event_type_details', '1')
 url.searchParams.set('background_color', 'fefcfa')
 url.searchParams.set('text_color', '241c22')
 url.searchParams.set('primary_color', '371936')
 return url.href
}

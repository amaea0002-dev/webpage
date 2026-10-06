/** Public booking page supplied by the team and verified on 6 October 2026. */
export const APPROVED_BOOKING_URL='https://calendly.com/milan-amaea'
export function bookingUrl(configured?:string){
 const url=new URL(configured||APPROVED_BOOKING_URL)
 if(url.protocol!=='https:'||url.username||url.password)throw new Error('The booking scheduler must use a secure public URL')
 return url.href
}

import test from 'node:test'
import assert from 'node:assert/strict'
import {bookingUrl,APPROVED_BOOKING_URL,calendlyEmbedUrl} from './booking.ts'
test('uses the approved team calendar when no environment override exists',()=>assert.equal(bookingUrl(),APPROVED_BOOKING_URL))
test('refuses insecure or credential-bearing booking addresses',()=>{assert.throws(()=>bookingUrl('http://example.test'));assert.throws(()=>bookingUrl('https://user:password@example.test'))})

test('embeds only the trusted Calendly host',()=>{
 assert.equal(calendlyEmbedUrl('https://calendly.com.evil.test/demo'),null)
 assert.equal(calendlyEmbedUrl('https://example.test/demo'),null)
 assert.equal(calendlyEmbedUrl('https://calendly.com:444/demo'),null)
})
test('keeps provider cookie controls and excludes forwarded contact data',()=>{
 const url=new URL(calendlyEmbedUrl(APPROVED_BOOKING_URL+'?hide_gdpr_banner=1&email=someone@example.test#fragment')!)
 assert.equal(url.pathname,'/hasna-amaea/demo')
 assert.equal(url.searchParams.get('hide_event_type_details'),'1')
 assert.equal(url.searchParams.has('hide_gdpr_banner'),false)
 assert.equal(url.searchParams.has('email'),false)
 assert.equal(url.hash,'')
})

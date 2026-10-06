import test from 'node:test'
import assert from 'node:assert/strict'
import {bookingUrl,APPROVED_BOOKING_URL} from './booking.ts'
test('uses the approved team calendar when no environment override exists',()=>assert.equal(bookingUrl(),APPROVED_BOOKING_URL))
test('refuses insecure or credential-bearing booking addresses',()=>{assert.throws(()=>bookingUrl('http://example.test'));assert.throws(()=>bookingUrl('https://user:password@example.test'))})

import { bookingUrl, calendlyEmbedUrl } from "@/lib/booking";
import BookingFlow from "./BookingFlow";

export default function BookingScheduler() {
  const url = bookingUrl(process.env.NEXT_PUBLIC_BOOKING_URL);
  return <BookingFlow bookingUrl={url} embedUrl={calendlyEmbedUrl(url)} />;
}

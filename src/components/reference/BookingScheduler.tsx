/** Use only the booking address approved by the team; never guess an account URL. */
export default function BookingScheduler() {
  const scheduler = process.env.NEXT_PUBLIC_BOOKING_URL;
  let bookingUrl: string | undefined;
  if (scheduler) {
    const url = new URL(scheduler);
    if (url.protocol !== "https:")
      throw new Error("The booking scheduler must use HTTPS");
    bookingUrl = url.href;
  }

  return (
    <div className="booking-preview">
      <span className="eyebrow">Book your demo</span>
      <h2>
        Make time for
        <br />
        <em>peace of mind.</em>
      </h2>
      <p>
        A conversation about your firm, your team and the work you want to make
        simpler.
      </p>
      {bookingUrl ? (
        <>
          <a
            className="button"
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Choose a time for your demo{" "}
            <span className="sr-only">
              (opens booking scheduler in a new tab)
            </span>
          </a>
          <p className="micro">
            Choose an available time in our booking calendar.
          </p>
        </>
      ) : (
        <>
          <a
            className="button"
            href="mailto:hello@amaea.co.uk?subject=Amaea%20demo"
          >
            Request a demo by email
          </a>
          <p className="micro">Email the team to arrange a time.</p>
        </>
      )}
    </div>
  );
}

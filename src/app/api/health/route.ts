export const dynamic = 'force-dynamic'

// Configuration readiness only: this never contacts a provider or sends email.
export async function GET() {
  const ready = Boolean(process.env.RESEND_API_KEY)
  return Response.json({ status: ready ? 'ok' : 'degraded', registration: ready ? 'configured' : 'unavailable' }, {
    status: ready ? 200 : 503, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  })
}

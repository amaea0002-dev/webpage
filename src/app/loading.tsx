import LoadingMark from '@/components/LoadingMark'

export default function Loading() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      <LoadingMark />
      <span className="loading-wordmark" aria-hidden="true">amaea</span>
      <p>Loading your next page…</p>
    </div>
  )
}

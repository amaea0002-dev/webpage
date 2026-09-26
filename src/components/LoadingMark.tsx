import Image from 'next/image'

/** Shared brand motif for actual page and form loading states. */
export default function LoadingMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`loading-mark${small ? ' loading-mark-small' : ''}`} aria-hidden="true">
      <span className="loading-orbit" />
      {!small && <>
        <Image unoptimized src="/amaea-a-plum.png" alt="" width={32} height={32} className="logo-light" />
        <Image unoptimized src="/amaea-a-white.png" alt="" width={32} height={32} className="logo-dark" />
      </>}
    </span>
  )
}

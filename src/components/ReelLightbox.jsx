import { useEffect, useCallback } from 'react'
import { reels } from '../data/reels'

export default function ReelLightbox({ index, setIndex }) {
  const close = useCallback(() => setIndex(null), [setIndex])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + reels.length) % reels.length),
    [setIndex]
  )
  const next = useCallback(
    () => setIndex((i) => (i + 1) % reels.length),
    [setIndex]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [close, prev, next])

  if (index === null) return null
  const reel = reels[index]

  return (
    <div className="lightbox lightbox--video" onClick={close} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
      <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous clip">‹</button>
      <video
        key={reel.id}
        src={reel.video}
        poster={reel.poster}
        controls
        autoPlay
        playsInline
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next clip">›</button>
      <div className="lightbox-caption">{reel.place} · {reel.elevation} — {index + 1} / {reels.length}</div>
    </div>
  )
}

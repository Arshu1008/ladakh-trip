import { useEffect, useCallback } from 'react'
import { gallery } from '../data/waypoints'

export default function Lightbox({ index, setIndex }) {
  const close = useCallback(() => setIndex(null), [setIndex])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [setIndex]
  )
  const next = useCallback(
    () => setIndex((i) => (i + 1) % gallery.length),
    [setIndex]
  )

  useEffect(() => {
    if (index === null) return undefined

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
  }, [index, close, prev, next])

  if (index === null) return null
  const item = gallery[index]

  return (
    <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
      <button
        className="lightbox-nav prev"
        onClick={(e) => { e.stopPropagation(); prev() }}
        aria-label="Previous photo"
      >‹</button>
      <img src={item.src} alt={item.place} onClick={(e) => e.stopPropagation()} />
      <button
        className="lightbox-nav next"
        onClick={(e) => { e.stopPropagation(); next() }}
        aria-label="Next photo"
      >›</button>
      <div className="lightbox-caption">{item.place} — {index + 1} / {gallery.length}</div>
    </div>
  )
}

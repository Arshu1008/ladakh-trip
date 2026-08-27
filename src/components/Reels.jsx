import { useEffect, useRef, useState } from 'react'
import { reels } from '../data/reels'
import { useReveal } from '../hooks/useReveal'

function ReelCard({ reel, index, onOpen }) {
  const [cardRef, visible] = useReveal(0.2)
  const videoRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    const video = videoRef.current
    if (!el || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [cardRef])

  return (
    <button
      ref={cardRef}
      type="button"
      className={`reel-card reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 0.07}s` }}
      onClick={() => onOpen(index)}
      aria-label={`Play clip: ${reel.place}`}
    >
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.poster}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <span className="reel-play">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5z" /></svg>
      </span>
      <span className="reel-caption">
        <b>{reel.place}</b>
        <em>{reel.elevation}</em>
      </span>
    </button>
  )
}

export default function Reels({ onOpen }) {
  const [headRef, headVisible] = useReveal()
  return (
    <section id="reels" className="section reels-section">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'is-visible' : ''}`}>
          <div>
            <span className="eyebrow">Motion, not stills</span>
            <h2 className="section-title">A few seconds from each stop.</h2>
          </div>
          <p className="section-desc">
            Muted previews autoplay as they scroll into view — tap any clip
            for the full frame and sound.
          </p>
        </div>

        <div className="reels-row">
          {reels.map((reel, i) => (
            <ReelCard reel={reel} index={i} key={reel.id} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}

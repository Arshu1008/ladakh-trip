import { useEffect, useRef, useState } from 'react'
import { hero } from '../data/reels'

export default function Hero() {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [canPlayVideo, setCanPlayVideo] = useState(true)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCanPlayVideo(false)
      return
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (wrapRef.current) {
          wrapRef.current.style.transform = `translateY(${y * 0.22}px) scale(1.06)`
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSound = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <header className="hero">
      <div className="hero-img-wrap" ref={wrapRef}>
        {canPlayVideo ? (
          <video
            ref={videoRef}
            className="hero-video"
            src={hero.video}
            poster={hero.poster}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setCanPlayVideo(false)}
          />
        ) : (
          <img src={hero.poster} alt="Standing above the snowfield at Zoji La" />
        )}
      </div>
      <div className="hero-scrim" />

      {canPlayVideo && (
        <button className="sound-toggle" onClick={toggleSound} aria-label={muted ? 'Unmute video' : 'Mute video'}>
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor"/><path d="M16 8l5 8M21 8l-5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 010 7M19 6a9 9 0 010 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          )}
          <span>{muted ? 'Sound off' : 'Sound on'}</span>
        </button>
      )}

      <div className="hero-content">
        <div className="hero-badge-row">
          <span className="sign-badge">BORDER ROADS ORGANISATION</span>
          <span className="sign-badge sign-badge--ghost">
            SONMARG → LEH
          </span>
        </div>

        <h1 className="hero-title">
          Ladakh<br /><em>the high road</em>
        </h1>

        <p className="hero-sub">
          A week on the world's highest motorable passes — from Kashmir's pine
          ridges to the marigold road signs of Khardung La, a borrowed Vespa
          on Pangong Tso, and prayer flags over Leh.
        </p>

        <div className="hero-meta">
          <div>
            <span className="num">17,982'</span>
            <span className="lbl">Highest point</span>
          </div>
          <div>
            <span className="num">7</span>
            <span className="lbl">Waypoints</span>
          </div>
          <div>
            <span className="num">434km</span>
            <span className="lbl">Sonmarg → Pangong</span>
          </div>
        </div>
      </div>

      <div className="scroll-cue">Scroll to descend</div>
    </header>
  )
}

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const minDelay = prefersReduced ? 200 : 1100

    const timer = setTimeout(() => setHidden(true), minDelay)
    const removeTimer = setTimeout(() => setGone(true), minDelay + 700)
    return () => {
      clearTimeout(timer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (gone) return null

  return (
    <div className={`preloader ${hidden ? 'preloader--hidden' : ''}`} aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-mark">Ladakh<span>.</span></span>
        <span className="preloader-line" />
        <span className="preloader-alt">17,982 FT</span>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#journey', label: 'Route' },
  { href: '#reels', label: 'Reels' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#closing', label: 'Notes' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="nav-mark">Ladakh<span>.</span></div>

      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>

      <button
        className="nav-burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      <div className="nav-mobile-panel" aria-hidden={!open}>
        {LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            style={{ transitionDelay: `${i * 0.05}s` }}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

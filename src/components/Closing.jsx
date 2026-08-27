import closingImg from '../assets/photos/sunset-jeep.webp'
import { useReveal } from '../hooks/useReveal'

export default function Closing() {
  const [ref, visible] = useReveal()
  return (
    <>
      <section id="closing" className="closing">
        <div className="closing-img">
          <img src={closingImg} alt="Mahindra Thar at golden hour on the Leh–Manali highway" />
        </div>
        <div className="closing-scrim" />
        <div className="closing-content container">
          <span className="eyebrow" style={{ color: 'var(--marigold)' }}>Notes from the road</span>
          <p ref={ref} className={`closing-quote reveal ${visible ? 'is-visible' : ''}`}>
            The altitude sign at Khardung La says it best —
            <span> collect moments, not things.</span> Everything after
            Zoji La felt like driving through weather that shouldn't
            exist at the same time as summer back home.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <span>Ladakh, India — shot on a phone, graded by hand.</span>
        <span>Built with React · Vite</span>
      </footer>
    </>
  )
}

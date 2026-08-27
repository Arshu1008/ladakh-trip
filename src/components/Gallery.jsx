import { gallery } from '../data/waypoints'
import { useReveal } from '../hooks/useReveal'

function GalleryItem({ item, index, onOpen }) {
  const [ref, visible] = useReveal(0.1)
  return (
    <button
      ref={ref}
      type="button"
      className={`g-item ${item.wide ? 'wide' : ''} reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''}`}
      onClick={() => onOpen(index)}
      aria-label={`Open photo: ${item.place}`}
    >
      <img src={item.src} alt={item.place} loading="lazy" />
      <span className="g-caption">{item.place}</span>
    </button>
  )
}

export default function Gallery({ onOpen }) {
  const [headRef, headVisible] = useReveal()
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'is-visible' : ''}`}>
          <div>
            <span className="eyebrow">The full roll</span>
            <h2 className="section-title">Frames from the road.</h2>
          </div>
          <p className="section-desc">
            Thirteen frames, lightly graded for contrast and colour, served
            as WebP. Click any of them to open the full set.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <GalleryItem item={item} index={i} key={item.src} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}

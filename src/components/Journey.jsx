import { waypoints } from '../data/waypoints'
import { useReveal } from '../hooks/useReveal'

function Stop({ stop, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`stop reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="stop-marker">
        <span className="stop-elev">
          {stop.elevation.toLocaleString()}<sup>ft</sup>
        </span>
        <span className="stop-coords">{stop.coords}</span>
      </div>
      <div className="stop-body">
        <div className="stop-text">
          <span className="place-label">{stop.label}</span>
          <h3>{stop.name}</h3>
          <p>{stop.note}</p>
        </div>
        <div className="stop-frame">
          <img src={stop.image} alt={`${stop.name}, ${stop.elevation} feet`} loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default function Journey() {
  const [headRef, headVisible] = useReveal()
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'is-visible' : ''}`}>
          <div>
            <span className="eyebrow">The route · low to high</span>
            <h2 className="section-title">Seven stops, one climb from pine forest to glass-flat lake.</h2>
          </div>
          <p className="section-desc">
            Every altitude below is the actual elevation at that stop — the
            road doesn't rise evenly, it lurches, drops, and lurches again.
          </p>
        </div>

        <div className="route-line">
          {waypoints.map((stop, i) => (
            <Stop stop={stop} index={i} key={stop.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

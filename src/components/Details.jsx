import Countdown from './Countdown'
import './Details.css'

export default function Details() {
  return (
    <section className="section details" id="detalles">
      <div className="details-intro">
        <span className="eyebrow">Con mucha ilusión</span>
        <h2>Nos encantaría celebrar contigo</h2>
        <p className="details-text">
          Como las abejas cuidan su panal, nosotros esperamos con amor la llegada
          de nuestro bebé. Queremos compartir contigo esta dulce espera en una
          tarde llena de cariño, juegos y mucha miel.
        </p>
      </div>

      <div className="hex-divider"><span /><span /><span /></div>

      <Countdown />

      <div className="date-card">
        <div className="date-block">
          <span className="date-num">04</span>
          <span className="date-month">Octubre</span>
          <span className="date-year">2026</span>
        </div>
        <div className="date-divider" />
        <div className="date-time">
          <span className="date-time-label">Hora</span>
          <span className="date-time-value">2:00 PM</span>
        </div>
      </div>
    </section>
  )
}

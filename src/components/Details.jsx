import Countdown from './Countdown'
import './Details.css'

export default function Details() {
  return (
    <section className="section details" id="detalles">
      <div className="details-intro">
        <span className="eyebrow">Con mucha ilusión</span>
        <h2>Nos encantaría celebrar contigo</h2>
        <p className="details-text">
          🍯 Con mucha emoción queremos compartir contigo uno de los momentos
          más especiales de nuestras vidas.
          <br />
          <span className="details-text-emoji">💛</span>
          <br />
          Nos llenaría de alegría que nos acompañaras a celebrar la próxima
          llegada de nuestro bebé. 👶
        </p>
      </div>

      <div className="hex-divider"><span /><span /><span /></div>

      <Countdown />

      <span aria-hidden="true" className="bee-deco details-bee-1">🐝</span>
      <span aria-hidden="true" className="bee-deco details-bee-2">🐝</span>

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

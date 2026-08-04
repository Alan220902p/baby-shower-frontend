import './EventInfo.css'

const CHIPS = ['✨ Juegos', '🎁 Sorpresas', '🍽️ Deliciosa comida', '😂 Muchas risas', '🎉 Momentos inolvidables', '💛 Mucho cariño']

export default function EventInfo() {
  return (
    <section className="section event-info" id="aviso">
      <div className="event-info-card">
        <span className="eyebrow">Aviso importante</span>
        <h2>🏖️ ¡Prepárate para disfrutar!</h2>
        <p className="event-info-text">
          Nuestro Baby Shower será una tarde llena de:
        </p>

        <ul className="event-info-chips">
          {CHIPS.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>

        <div className="event-info-note">
          <p className="event-info-note-title">Y como el salón cuenta con alberca...</p>
          <p>
            🏊‍♀️ ¡No olvides traer traje de baño, toalla, sandalias y ropa
            cómoda para disfrutar al máximo!
          </p>
        </div>

        <div className="event-info-note">
          <p className="event-info-note-title">Lo más importante...</p>
          <p>
            Ven con toda la actitud, muchas ganas de divertirte y de compartir
            este hermoso momento con nosotros.
          </p>
        </div>
      </div>
    </section>
  )
}

import './Itinerary.css'

const EVENTS = [
  { time: '2:00 PM', label: 'Comida', icon: '🌮' },
  { time: '3:00 PM', label: 'Alberca', icon: '🏊‍♀️' },
  { time: '5:00 PM', label: 'Animadora de Juegos', icon: '🤹‍♀️' },
  { time: '6:00 PM', label: 'Abrir regalos', icon: '🎁' },
  { time: '7:00 PM', label: 'Pista de baile', icon: '🕺💃' },
]

export default function Itinerary() {
  return (
    <section className="section itinerary" id="itinerario">
      <div className="itinerary-header">
        <span className="eyebrow">El plan</span>
        <h2>Itinerario</h2>
      </div>

      <ol className="itinerary-timeline">
        {EVENTS.map((ev) => (
          <li className="itinerary-item" key={ev.time}>
            <div className="itinerary-marker">
              <span className="itinerary-hex">{ev.icon}</span>
            </div>
            <div className="itinerary-content">
              <span className="itinerary-time">{ev.time}</span>
              <span className="itinerary-label">{ev.label}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

import './Location.css'

const MAPS_URL = 'https://maps.app.goo.gl/pow3FzJpVdoRGqkM8'

export default function Location() {
  return (
    <section className="section location" id="ubicacion">
      <div className="location-card">
        <div className="hex-icon">📍</div>
        <span className="eyebrow">El lugar</span>
        <h2>¿Dónde nos vemos?</h2>
        <p className="location-address">
          Av. Juárez S/N<br />
          Santa María Tonanitla, Estado de México
        </p>
        <a
          className="btn btn-primary"
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
        >
          Ver ubicación en el mapa
        </a>
      </div>
    </section>
  )
}

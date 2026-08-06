import videoPortada from '../assets/video-portada.mp4'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={videoPortada}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-veil" />

      <div className="hero-bees" aria-hidden="true">
        <span className="bee bee-1">🐝</span>
        <span className="bee bee-2">🐝</span>
        <span className="bee bee-3">🐝</span>
        <span className="bee bee-4">🐝</span>
        <span className="bee bee-5">🐝</span>
      </div>

      <div className="hero-content">
        <div className="hero-hex">
          <span className="eyebrow" style={{ color: 'var(--honey-bright)' }}>Baby Shower</span>
          <h1 className="hero-title">
            Bebé<br />
            <em>Flores López</em>
          </h1>
          <p className="hero-sub">Una gotita de miel está por llegar</p>
        </div>

        <a href="#detalles" className="hero-scroll" aria-label="Ir a los detalles del evento">
          <span className="hero-scroll-hex">↓</span>
          <span>Descubre los detalles</span>
        </a>
      </div>
    </section>
  )
}

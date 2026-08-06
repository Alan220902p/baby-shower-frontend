import './Gifts.css'

const AMAZON_URL = 'https://www.amazon.com.mx/baby-reg/valeri-lopez-octubre-2026-tonanitla/70T4I21X17CU?ref_=cm_sw_r_apann_dp_EKY3AK3HJDDM47XYPY9V_2&language=en-US'

export default function Gifts() {
  return (
    <section className="section gifts" id="regalos">
      <span aria-hidden="true" className="bee-deco gifts-bee-1">🐝</span>
      <span aria-hidden="true" className="bee-deco gifts-bee-2">🐝</span>
      <span className="eyebrow">Mesa de regalos</span>
      <div className="gifts-heading">
        <h2>Un dulce detalle</h2>
        <span className="gifts-badge">Opcional</span>
      </div>
      <p className="gifts-text">
        Tu presencia en este día es más que suficiente. Dejamos aquí algunas
        ideas en Amazon, únicamente por si te gustaría sumar un detalle.
      </p>
      <a
        className="btn btn-outline"
        href={AMAZON_URL}
        target="_blank"
        rel="noreferrer"
      >
        🍯 Ver mesa de regalos
      </a>
    </section>
  )
}

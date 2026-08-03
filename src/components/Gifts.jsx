import './Gifts.css'

const AMAZON_URL = 'https://www.amazon.com.mx/baby-reg/valeri-lopez-octubre-2026-tonanitla/70T4I21X17CU?ref_=cm_sw_r_apann_dp_EKY3AK3HJDDM47XYPY9V_2&language=en-US'

export default function Gifts() {
  return (
    <section className="section gifts" id="regalos">
      <span className="eyebrow">Mesa de regalos</span>
      <h2>Un dulce detalle</h2>
      <p className="gifts-text">
        Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con
        nosotros, preparamos una mesa de regalos en Amazon.
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

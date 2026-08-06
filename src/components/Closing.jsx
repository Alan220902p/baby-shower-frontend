import './Closing.css'

export default function Closing() {
  return (
    <section className="section closing">
      <span aria-hidden="true" className="bee-deco closing-bee-1">🐝</span>
      <span aria-hidden="true" className="bee-deco closing-bee-2">🐝</span>
      <div className="hex-divider"><span /><span /><span /></div>
      <p className="closing-quote">
        “La llegada de nuestro bebé será aún más especial si tú estás con
        nosotros.”
      </p>
      <p className="closing-sub">🐝 ¡Te esperamos con mucho cariño!</p>
    </section>
  )
}

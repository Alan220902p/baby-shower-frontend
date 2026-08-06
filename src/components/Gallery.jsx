import foto1 from '../assets/images/foto1.jpg'
import foto2 from '../assets/images/foto2.jpg'
import foto3 from '../assets/images/foto3.jpg'
import foto4 from '../assets/images/foto4.jpg'
import './Gallery.css'

const photos = [foto1, foto2, foto3, foto4]

export default function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <span aria-hidden="true" className="bee-deco gallery-bee-1">🐝</span>
      <span aria-hidden="true" className="bee-deco gallery-bee-2">🐝</span>
      <span aria-hidden="true" className="bee-deco gallery-bee-3">🐝</span>
      <div className="gallery-header">
        <span className="eyebrow">El panal</span>
        <h2>Un vistazo al lugar</h2>
      </div>

      <div className="honeycomb-grid">
        {photos.map((src, i) => (
          <div className={`honeycomb-cell cell-${i}`} key={i}>
            <img src={src} alt={`Vista del lugar ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}

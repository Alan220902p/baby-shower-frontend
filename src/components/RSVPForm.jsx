import { useState } from 'react'
import './RSVPForm.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function RSVPForm() {
  const [form, setForm] = useState({ nombre: '', acompanantes: 1, dedicatoria: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: name === 'acompanantes' ? Number(value) : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.nombre.trim()) return
    setStatus('loading')
    try {
      const res = await fetch(`${API_URL}/api/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      setForm({ nombre: '', acompanantes: 1, dedicatoria: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="section rsvp" id="rsvp">
        <div className="rsvp-success">
          <div className="hex-icon">🐝</div>
          <h2>¡Gracias por confirmar!</h2>
          <p>Nos hace muy felices que nos acompañes en este día tan dulce.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section rsvp" id="rsvp">
      <div className="rsvp-header">
        <span className="eyebrow">Confirma tu asistencia</span>
        <h2>¿Nos acompañas?</h2>
        <p>Ayúdanos a organizar todo con cariño confirmando antes del evento.</p>
      </div>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label>
          <span>Nombre completo</span>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </label>

        <label>
          <span>Número de acompañantes (incluyéndote)</span>
          <input
            type="number"
            name="acompanantes"
            min="1"
            max="15"
            value={form.acompanantes}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Dedicatoria (opcional)</span>
          <textarea
            name="dedicatoria"
            value={form.dedicatoria}
            onChange={handleChange}
            placeholder="Deja un mensaje para la familia..."
            rows={3}
          />
        </label>

        <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Confirmar asistencia'}
        </button>

        {status === 'error' && (
          <p className="rsvp-error">
            No pudimos enviar tu confirmación. Intenta de nuevo en unos momentos.
          </p>
        )}
      </form>
    </section>
  )
}

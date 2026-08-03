import { useEffect, useState } from 'react'
import './Countdown.css'

const EVENT_DATE = new Date('2026-10-04T14:00:00-06:00')

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now()
  if (diff <= 0) return { dias: 0, horas: 0, min: 0, seg: 0, done: true }
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
    seg: Math.floor((diff / 1000) % 60),
    done: false,
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (time.done) {
    return (
      <div className="countdown-done">
        ¡Hoy es el gran día! 🍯
      </div>
    )
  }

  const cells = [
    { label: 'Días', value: time.dias },
    { label: 'Horas', value: time.horas },
    { label: 'Min', value: time.min },
    { label: 'Seg', value: time.seg },
  ]

  return (
    <div className="countdown">
      {cells.map((c) => (
        <div className="hex-cell" key={c.label}>
          <div className="hex-cell-inner">
            <span className="hex-cell-value">{String(c.value).padStart(2, '0')}</span>
            <span className="hex-cell-label">{c.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

import { useRef, useState } from 'react'
import audioFondo from '../assets/audio-fondo.mp3'
import './MusicToggle.css'

export default function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <>
      <audio ref={audioRef} src={audioFondo} loop />
      <button
        className={`music-toggle ${playing ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
        aria-pressed={playing}
      >
        {playing ? '🐝' : '🔇'}
      </button>
    </>
  )
}

import React, { useEffect, useState } from 'react'

export default function Hero({ stages }) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 30000); return () => clearInterval(t) }, [])
  const diff = Math.max(0, new Date('2026-08-15T00:00:00') - now)
  const d = Math.floor(diff / 864e5), h = Math.floor(diff % 864e5 / 36e5), m = Math.floor(diff % 36e5 / 6e4)
  return (
    <header className="hero">
      <div className="kicker">Honeymoon · 15. – 31. August 2026</div>
      <h1>Bali</h1>
      <div style={{ fontSize: 15, opacity: .9 }}>{stages.map(s => s.name).join('  →  ')}</div>
      <div className="countdown">
        <div style={{ display: 'flex', gap: 14 }}>
          {[[d, 'Tage'], [h, 'Std'], [m, 'Min']].map(([v, l]) => (
            <div key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
        <span style={{ display: 'block', marginTop: 6 }}>bis Abflug</span>
      </div>
    </header>
  )
}

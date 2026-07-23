import React, { useRef } from 'react'

const nl = n => n === 0 ? 'Abflugtag' : (n === 1 ? '1 Nacht' : n + ' Nächte')

export default function Timeline({ stages, sel, onSelect, onMove, onReorder }) {
  const dragFrom = useRef(null)
  return (
    <section>
      <div className="section-head">
        <h2>Die Route</h2>
        <div className="hint">Karte anklicken zum Öffnen · Karten ziehen (oder Pfeile) zum Umsortieren</div>
      </div>
      <div className="timeline">
        {stages.map((s, i) => {
          const total = (s.activities || []).length
          const done = (s.activities || []).filter(a => a.done).length
          const pct = total ? Math.round(done / total * 100) : 0
          return (
            <div key={s.id} className={'stage-card' + (i === sel ? ' selected' : '')}
              draggable
              onDragStart={e => { dragFrom.current = i; e.dataTransfer.effectAllowed = 'move' }}
              onDragOver={e => e.preventDefault()}
              onDrop={e => { e.preventDefault(); const f = dragFrom.current; dragFrom.current = null; if (f != null && f !== i) onReorder(f, i) }}
              onClick={() => onSelect(i)}>
              <div className="photo">
                <div style={{ backgroundImage: 'url(' + s.img.replace('w=1200', 'w=400') + ')' }} />
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div className="body">
                <div className="name">{s.name}</div>
                <div className="meta">{s.dates} · {nl(s.nights)}</div>
                <div className="prog"><div style={{ width: pct + '%' }} /></div>
                <div className="card-foot">
                  <span>{done}/{total} erledigt</span>
                  <span className="move-btns">
                    <button title="Nach vorne" onClick={e => { e.stopPropagation(); onMove(i, -1) }}>←</button>
                    <button title="Nach hinten" onClick={e => { e.stopPropagation(); onMove(i, 1) }}>→</button>
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

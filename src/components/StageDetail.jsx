import React, { useRef, useState } from 'react'

const nl = n => n === 0 ? 'Abflugtag' : (n === 1 ? '1 Nacht' : n + ' Nächte')

const dayLabel = (start, day) => {
  const [y, m, d] = start.split('-').map(Number)
  const date = new Date(y, m - 1, d + day)
  return date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' })
}

function EditableSpan({ value, className, onCommit }) {
  return (
    <span className={className} contentEditable suppressContentEditableWarning
      onBlur={e => onCommit((e.target.textContent || '').trim())}>{value}</span>
  )
}

export default function StageDetail({ stage: st, num, upStage, onRemoveWithUndo }) {
  const [editingId, setEditingId] = useState(null)
  const newActivityTitleRef = useRef(null)
  const newActivityImgRef = useRef(null)
  const editItem = (key, iid, field) => v =>
    upStage(st.id, s => ({ ...s, [key]: s[key].map(x => x.id === iid ? { ...x, [field]: v } : x) }))
  const removeItem = (key, iid) => {
    const it = st[key].find(x => x.id === iid)
    onRemoveWithUndo(it?.t || 'Eintrag', () =>
      upStage(st.id, s => ({ ...s, [key]: s[key].filter(x => x.id !== iid) })))
  }
  const toggleItem = (key, iid) =>
    upStage(st.id, s => ({ ...s, [key]: s[key].map(x => x.id === iid ? { ...x, done: !x.done } : x) }))
  const addTo = key => e => {
    if (e.key !== 'Enter') return
    const v = e.target.value.trim(); if (!v) return
    e.target.value = ''
    const item = key === 'activities'
      ? { id: 'n' + Date.now(), t: v, d: '', done: false, day: Math.max(0, ...st.activities.map(a => a.day || 0)) }
      : { id: 'n' + Date.now(), t: v, d: '', price: '' }
    upStage(st.id, s => ({ ...s, [key]: s[key].concat(item) }))
  }
  const addActivity = () => {
    const t = newActivityTitleRef.current.value.trim()
    if (!t) return
    const img = newActivityImgRef.current.value.trim()
    const day = Math.max(0, ...st.activities.map(a => a.day || 0))
    newActivityTitleRef.current.value = ''
    newActivityImgRef.current.value = ''
    upStage(st.id, s => ({ ...s, activities: s.activities.concat({ id: 'n' + Date.now(), t, d: '', img, done: false, day }) }))
  }
  const onAddActivityKey = e => { if (e.key === 'Enter') addActivity() }

  const activitiesByDay = st.activities.reduce((acc, a) => {
    const day = a.day || 0
    ;(acc[day] ||= []).push(a)
    return acc
  }, {})
  const dayKeys = Object.keys(activitiesByDay).map(Number).sort((a, b) => a - b)

  return (
    <section>
      <div className="banner" style={{ backgroundImage: 'linear-gradient(180deg, rgba(18,30,21,.25), rgba(18,30,21,.8)), url(' + st.img + ')' }}>
        <div>
          <div className="kicker">Etappe {String(num).padStart(2, '0')} · {st.dates} · {nl(st.nights)}</div>
          <div className="title">{st.name}</div>
          <div className="desc">{st.desc}</div>
        </div>
      </div>

      <div className="detail-grid">
        <div>
          <h3 style={{ fontSize: 22, margin: '0 0 4px' }}>Must-Dos</h3>
          <div className="hint" style={{ marginBottom: 12 }}>Abhaken wenn erledigt · ✎ zum Bearbeiten · × entfernt den Punkt</div>
          <div className="col" style={{ gap: 16 }}>
            {dayKeys.map(day => (
              <div key={day}>
                <div className="day-label">Tag {day + 1} · {dayLabel(st.start, day)}</div>
                <div className="col" style={{ gap: 8 }}>
                  {activitiesByDay[day].map(a => (
                    <div key={a.id} className={'activity' + (a.done ? ' done' : '')}>
                      <div className="activity-thumb" style={{ backgroundImage: 'url(' + (a.img || st.img.replace('w=1200', 'w=100')) + ')' }} />
                      <input type="checkbox" checked={a.done} onChange={() => toggleItem('activities', a.id)} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {editingId === a.id ? (
                          <div className="edit-form">
                            <input className="edit-input" defaultValue={a.t} placeholder="Titel"
                              onBlur={e => editItem('activities', a.id, 't')(e.target.value.trim())} />
                            <input className="edit-input" defaultValue={a.d} placeholder="Beschreibung"
                              onBlur={e => editItem('activities', a.id, 'd')(e.target.value.trim())} />
                            <input className="edit-input" defaultValue={a.img || ''} placeholder="Bild-Link (optional)"
                              onBlur={e => editItem('activities', a.id, 'img')(e.target.value.trim())} />
                            <button className="edit-done" onClick={() => setEditingId(null)}>Fertig</button>
                          </div>
                        ) : (
                          <>
                            <div className="t">{a.t}</div>
                            <div className="d">{a.d}</div>
                          </>
                        )}
                      </div>
                      {editingId !== a.id && (
                        <button className="edit-btn" title="Bearbeiten" onClick={() => setEditingId(a.id)}>✎</button>
                      )}
                      <button className="x" title="Entfernen" onClick={() => removeItem('activities', a.id)}>×</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="add-row">
              <input ref={newActivityTitleRef} className="add-input" placeholder="+ Aktivität hinzufügen" onKeyDown={onAddActivityKey} />
              <input ref={newActivityImgRef} className="add-input small" placeholder="Bild-Link (optional)" onKeyDown={onAddActivityKey} />
            </div>
          </div>
        </div>

        <div className="side">
          {st.transfer && (
            <div className="transfer">
              <div className="kicker">Anreise / Transfer</div>
              <p>{st.transfer}</p>
            </div>
          )}

          <div className="card">
            <h3>Essen &amp; Trinken</h3>
            <div className="col">
              {st.food.map(f => (
                <div key={f.id} className="list-item">
                  <span className="diamond">◆</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <EditableSpan className="t" value={f.t} onCommit={editItem('food', f.id, 't')} />{' '}
                    <EditableSpan className="d" value={f.d} onCommit={editItem('food', f.id, 'd')} />
                  </div>
                  <button className="x" onClick={() => removeItem('food', f.id)}>×</button>
                </div>
              ))}
              <input className="add-input small" placeholder="+ Restaurant hinzufügen" onKeyDown={addTo('food')} />
            </div>
          </div>

          <div className="card">
            <h3>Unterkunft</h3>
            <div className="col">
              {st.hotels.map(h => (
                <div key={h.id} className="list-item" style={{ alignItems: 'baseline' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <EditableSpan className="t" value={h.t} onCommit={editItem('hotels', h.id, 't')} />{' '}
                    <EditableSpan className="d" value={h.d} onCommit={editItem('hotels', h.id, 'd')} />
                  </div>
                  {h.price && <span className="price">{h.price}</span>}
                  <button className="x" onClick={() => removeItem('hotels', h.id)}>×</button>
                </div>
              ))}
              <input className="add-input small" placeholder="+ Hotel hinzufügen" onKeyDown={addTo('hotels')} />
            </div>
          </div>

          <div className="card">
            <h3>Notizen</h3>
            <textarea className="notes" rows={4} value={st.notes || ''}
              placeholder="Eigene Notizen zu dieser Etappe …"
              onChange={e => upStage(st.id, s => ({ ...s, notes: e.target.value }))} />
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function PackingList({ pack, setPack, onRemove }) {
  const add = e => {
    if (e.key !== 'Enter') return
    const v = e.target.value.trim(); if (!v) return
    e.target.value = ''
    setPack(p => p.concat({ id: 'pk' + Date.now(), t: v, done: false }))
  }
  const done = pack.filter(p => p.done).length
  const pct = pack.length ? Math.round(done / pack.length * 100) : 0
  return (
    <section>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>Packliste</h2>
        <div className="prog" style={{ flex: 1, maxWidth: 260, height: 5 }}><div style={{ width: pct + '%' }} /></div>
        <span className="hint">{done} von {pack.length} gepackt</span>
      </div>
      <div className="pack-grid" style={{ marginTop: 0 }}>
        {pack.map(p => (
          <div key={p.id} className={'pack-item' + (p.done ? ' done' : '')}>
            <input type="checkbox" checked={p.done} onChange={() => setPack(ps => ps.map(x => x.id === p.id ? { ...x, done: !x.done } : x))} />
            <span style={{ fontSize: 14 }}>{p.t}</span>
            <button className="x" onClick={() => onRemove(p.id)}>×</button>
          </div>
        ))}
        <input className="add-input" placeholder="+ Hinzufügen – Enter" onKeyDown={add} />
      </div>
    </section>
  )
}

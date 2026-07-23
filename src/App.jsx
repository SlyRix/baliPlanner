import React, { useEffect, useRef, useState } from 'react'
import { makeDefaults } from './data.js'
import Hero from './components/Hero.jsx'
import Timeline from './components/Timeline.jsx'
import StageDetail from './components/StageDetail.jsx'
import RouteMap from './components/RouteMap.jsx'
import PackingList from './components/PackingList.jsx'
import Tips from './components/Tips.jsx'

const KEY = 'bali-hm-planner-v2'

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY))
    if (s && Array.isArray(s.stages)) return { stages: s.stages, pack: s.pack || [] }
  } catch (e) {}
  return makeDefaults()
}

export default function App() {
  const [{ stages, pack }, setPlan] = useState(load)
  const [sel, setSel] = useState(0)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)
  const syncedFromServer = useRef(false)

  useEffect(() => {
    fetch('/api/plan').then(r => r.ok ? r.json() : null)
      .then(data => { if (data && Array.isArray(data.stages)) setPlan({ stages: data.stages, pack: data.pack || [] }) })
      .catch(() => {})
      .finally(() => { syncedFromServer.current = true })
  }, [])

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify({ stages, pack })) } catch (e) {}
    if (!syncedFromServer.current) return
    const t = setTimeout(() => {
      fetch('/api/plan', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ stages, pack }) }).catch(() => {})
    }, 600)
    return () => clearTimeout(t)
  }, [stages, pack])

  const setStages = fn => setPlan(p => ({ ...p, stages: fn(p.stages) }))
  const setPack = fn => setPlan(p => ({ ...p, pack: fn(p.pack) }))
  const upStage = (sid, fn) => setStages(ss => ss.map(st => st.id === sid ? fn(st) : st))

  const showToast = (msg, snapshot) => {
    clearTimeout(toastTimer.current)
    setToast({ msg, snapshot })
    toastTimer.current = setTimeout(() => setToast(null), 6000)
  }
  const undo = () => {
    if (!toast?.snapshot) return
    clearTimeout(toastTimer.current)
    setPlan(toast.snapshot); setToast(null)
  }
  const removeWithUndo = (label, fn) => {
    const snapshot = { stages, pack }
    fn()
    showToast('„' + label + '" entfernt', snapshot)
  }

  const move = (i, d) => {
    const j = i + d
    if (j < 0 || j >= stages.length) return
    setStages(ss => { const a = ss.slice(); const t = a[i]; a[i] = a[j]; a[j] = t; return a })
    setSel(s => s === i ? j : (s === j ? i : s))
  }
  const reorder = (from, to) => {
    setStages(ss => { const a = ss.slice(); const m = a.splice(from, 1)[0]; a.splice(to, 0, m); return a })
    setSel(to)
  }
  const resetAll = () => {
    if (!confirm('Wirklich alles auf den Originalplan zurücksetzen?')) return
    try { localStorage.removeItem(KEY) } catch (e) {}
    setPlan(makeDefaults()); setSel(0)
  }

  const st = stages[Math.min(sel, stages.length - 1)]

  return (
    <div className="wrap">
      <Hero stages={stages} />
      <Timeline stages={stages} sel={sel} onSelect={setSel} onMove={move} onReorder={reorder} />
      <StageDetail key={st.id} stage={st} num={sel + 1} upStage={upStage} onRemoveWithUndo={removeWithUndo} />
      <RouteMap stages={stages} />
      <PackingList pack={pack} setPack={setPack}
        onRemove={id => removeWithUndo(pack.find(x => x.id === id)?.t || 'Eintrag', () => setPack(ps => ps.filter(x => x.id !== id)))} />
      <Tips />
      <footer>
        <div>Änderungen werden automatisch gespeichert und mit allen Geräten geteilt.</div>
        <button onClick={resetAll}>Auf Originalplan zurücksetzen</button>
      </footer>
      {toast && (
        <div className="toast">
          <span>{toast.msg}</span>
          <button className="toast-undo" onClick={undo}>Rückgängig</button>
          <button className="toast-x" onClick={() => { clearTimeout(toastTimer.current); setToast(null) }}>×</button>
        </div>
      )}
    </div>
  )
}

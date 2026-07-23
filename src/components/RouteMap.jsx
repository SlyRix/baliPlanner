import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import { TRANSIT } from '../data.js'

const ACCENT = '#C4562E'

export default function RouteMap({ stages, showSpots = true }) {
  const elRef = useRef(null)
  const mapRef = useRef(null)
  const layerRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(elRef.current, { scrollWheelZoom: false })
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO', maxZoom: 18
      }).addTo(mapRef.current)
    }
    const map = mapRef.current
    if (layerRef.current) layerRef.current.remove()
    const layer = layerRef.current = L.layerGroup().addTo(map)
    const pts = stages.filter(s => s.c)
    L.polyline(pts.map(s => s.c), { color: ACCENT, weight: 2, dashArray: '5 7', opacity: .55 }).addTo(layer)
    TRANSIT.forEach(t =>
      L.circleMarker(t.c, { radius: 3, color: '#8A8168', weight: 1.5, fillColor: '#FAF6EF', fillOpacity: 1 }).bindTooltip(t.n).addTo(layer))
    if (showSpots) stages.forEach(s => (s.spots || []).forEach(sp =>
      L.circleMarker(sp.c, { radius: 3.5, color: '#FFFDF8', weight: 1, fillColor: '#3E5C43', fillOpacity: .7 }).bindTooltip(sp.n).addTo(layer)))
    pts.forEach((s, i) => {
      const icon = L.divIcon({ className: '', iconSize: [22, 22], iconAnchor: [11, 11],
        html: '<div style="width:22px;height:22px;border-radius:50%;background:' + ACCENT + ';color:#FAF6EF;display:flex;align-items:center;justify-content:center;font:700 11px Karla,sans-serif;border:1.5px solid #FAF6EF;box-shadow:0 1px 4px rgba(0,0,0,.35)">' + (i + 1) + '</div>' })
      L.marker(s.c, { icon, zIndexOffset: 1000 }).bindTooltip('<b>' + (i + 1) + '. ' + s.name + '</b> · ' + s.dates, { direction: 'top' }).addTo(layer)
    })
    if (!map._didFit) { map.fitBounds(L.latLngBounds(pts.map(s => s.c)), { padding: [40, 40] }); map._didFit = true }
  }, [stages, showSpots])

  useEffect(() => () => { if (mapRef.current) { mapRef.current.remove(); mapRef.current = null } }, [])

  return (
    <section>
      <h2>Eure Route auf der Karte</h2>
      <div className="hint" style={{ margin: '4px 0 14px' }}>Nummerierte Marker = Etappen in Reihenfolge · kleine Punkte = einzelne Spots</div>
      <div id="hm-map" ref={elRef} />
    </section>
  )
}

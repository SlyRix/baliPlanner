import React from 'react'

const TIPS = [
  { dark: true, title: 'Speedboat-Puffer', text: 'Nie einen Speedboat auf den Tag des Weiterflugs legen — die letzte Nacht sicher auf Bali (Seminyak) verbringen.' },
  { title: 'Honeymoon erwähnen', text: 'Bei jeder Hotelbuchung angeben — oft gibt es Upgrades, Rosenblätter, Champagner oder Frühstück gratis.' },
  { title: 'Jetzt reservieren', text: 'Locavore (Ubud) sofort buchen — oft Wochen ausgebucht. Couples Spa 1–2 Tage vorher, Kecak-Tickets früh holen.' },
  { title: 'Geld & SIM', text: '1 € ≈ 17.000–18.000 IDR, nur lizenzierte Wechselstuben. SIM am Flughafen (Telkomsel, ~10 €/20 GB), Grab-App installieren.' }
]

export default function Tips() {
  return (
    <section>
      <h2>Wichtige Tipps</h2>
      <div className="tips-grid">
        {TIPS.map(t => (
          <div key={t.title} className={'tip' + (t.dark ? ' dark' : '')}>
            <div className="title">{t.title}</div>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

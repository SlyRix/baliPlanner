# Bali Honeymoon Planer — React App

Interaktiver Honeymoon-Planer (15.–31. August 2026): Timeline mit Etappen,
editierbare Must-Dos / Restaurants / Hotels / Notizen, Leaflet-Karte mit Route
und Spots, Packliste. Alle Änderungen werden in localStorage gespeichert.

## Starten

\`\`\`bash
npm install
npm run dev
\`\`\`

Dann http://localhost:5173 öffnen.

## Build

\`\`\`bash
npm run build   # erzeugt dist/
\`\`\`

## Struktur

- \`src/data.js\` — alle Reisedaten (Etappen, Aktivitäten, Hotels, Koordinaten, Packliste)
- \`src/App.jsx\` — State, localStorage-Persistenz, Handler
- \`src/components/\` — Hero, Timeline, StageDetail, RouteMap (Leaflet), PackingList, Tips
- \`src/index.css\` — Styling (Palette: Ivory / Palmgrün / Terracotta, Fonts: Marcellus + Karla)

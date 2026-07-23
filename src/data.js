// Reisedaten — Bali Honeymoon 15.–31. August 2026
const A = (t, d, day = 0, img) => ({ id: t.slice(0, 12) + Math.random().toString(36).slice(2, 6), t, d, day, img, done: false });
    const F = (t, d) => ({ id: t.slice(0, 10) + Math.random().toString(36).slice(2, 6), t, d });
    const H = (t, d, price) => ({ id: t.slice(0, 10) + Math.random().toString(36).slice(2, 6), t, d, price });
    export function makeDefaults() {
  return {
      stages: [
        { id: 'ubud', name: 'Ubud', dates: '15.–19. Aug', nights: 4, start: '2026-08-15', desc: 'Das kulturelle & spirituelle Herz Balis',
          img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=70&auto=format&fit=crop',
          c: [-8.5069, 115.2625], transfer: 'Ankunft Denpasar → Fahrer nach Ubud (~1,5 Std.). Transfer vorab übers Hotel buchen.',
          notes: '',
          spots: [
            { n: 'Mount Batur', c: [-8.2422, 115.3750] }, { n: 'Tegalalang Reisterrassen', c: [-8.4312, 115.2777] },
            { n: 'Tirta Empul Tempel', c: [-8.4154, 115.3153] }, { n: 'Monkey Forest', c: [-8.5187, 115.2588] },
            { n: 'Tibumana Wasserfall', c: [-8.5320, 115.3520] }, { n: 'Bali Swing', c: [-8.4633, 115.2470] }
          ],
          activities: [
            A('Kecak Fire & Sunset Dance', 'Feuertanz im Pura Dalem Ubud, täglich 18:30 Uhr. Tickets ~10 €.', 0, 'https://images.unsplash.com/photo-1741272689174-f7f03b09a0ab?w=200&q=60&auto=format&fit=crop'),
            A('Couples Spa', '2–3 Std. einplanen. Karsa Spa (Dschungel), Taksu Spa (Boutique) oder Mandapa (Ritz-Carlton, Luxus).', 0, 'https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?w=200&q=60&auto=format&fit=crop'),
            A('Mount Batur Sonnenaufgang', 'Start 3:00 Uhr. Aktiver Vulkan (1.717 m), Guide Pflicht (~30 € p.P. inkl. Gipfel-Frühstück). Danach heiße Quellen.', 1, 'https://images.unsplash.com/photo-1518730573647-359c73385dc5?w=200&q=60&auto=format&fit=crop'),
            A('Tirta Empul Tempel', 'Auf dem Rückweg vom Batur. Heilige Quelle aus dem 10. Jh. — am Reinigungsritual teilnehmen. Sarong wird geliehen.', 1, 'https://images.unsplash.com/photo-1512907819289-143573530514?w=200&q=60&auto=format&fit=crop'),
            A('Tegalalang Reisterrassen', 'Später Nachmittag auf dem Rückweg, liegt an derselben Straße wie Batur/Tirta Empul. Eintritt ~2 €. Bester Blick: Terrassen des Café Kopi Desa.', 1, 'https://images.unsplash.com/photo-1557093793-d149a38a1be8?w=200&q=60&auto=format&fit=crop'),
            A('Sacred Monkey Forest', 'Zentral in Ubud. 1.200 Affen, alte Tempel, dichter Dschungel. Taschen gut verschließen!', 2, 'https://images.unsplash.com/photo-1585302769101-950b95ede189?w=200&q=60&auto=format&fit=crop'),
            A('Ubud Art Market', 'Morgens, direkt neben dem Monkey Forest. Stoffe, Holz, Silber, Batik — handeln ist erwartet, Startpreis halbieren.', 2, 'https://images.unsplash.com/photo-1636693391484-6829643bc75e?w=200&q=60&auto=format&fit=crop'),
            A('Tibumana Wasserfall', '20 Min. östlich von Ubud, kurzer Dschungel-Abstieg. Romantischer als Tegenungan.', 2, 'https://images.unsplash.com/photo-1780635823961-9dad96633019?w=200&q=60&auto=format&fit=crop'),
            A('Bali Swing', 'Eigener halber Tag südwestlich von Ubud bei Bongkasa Pertiwi — das meistfotografierte Motiv Balis. Früh morgens vor den Bustouren hin. Eintritt ~25–35 €.', 3, 'https://images.unsplash.com/photo-1519799183686-119b0bf9c94b?w=200&q=60&auto=format&fit=crop')
          ],
          food: [
            F('Locavore', '— Weltklasse Fine Dining. Sofort reservieren (locavorebali.com)!'),
            F('Mozaic', '— romantisches Fine Dining im Tropengarten bei Kerzenlicht'),
            F('Warung Ibu Oka', '— das Original Babi Guling, günstig & legendär'),
            F("Naughty Nuri's", '— Ribs & Martinis, Kult seit den 90ern'),
            F('Room4Dessert', '— außergewöhnliches Dessert-Tasting-Menü'),
            F('Kafe', '— gesund & frisch, gutes Frühstück')
          ],
          hotels: [
            H('Komaneka at Bisma', '— Reisterrassen-Infinity-Pool, ultra-romantisch', '250–400 €'),
            H('COMO Uma Ubud', '— Dschungel-Luxus, bester Spa', '350–500 €'),
            H('Bisma Eight', '— Traumblick, modernes Design', '150–250 €'),
            H('Alaya Resort', '— zentral, stilvoll, gutes Preis-Leistungs-Verhältnis', '100–180 €')
          ] },
        { id: 'penida', name: 'Nusa Penida', dates: '19.–21. Aug', nights: 2, start: '2026-08-19', desc: 'Wilde, dramatische Küste — unberührt und spektakulär',
          img: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=1200&q=70&auto=format&fit=crop',
          c: [-8.7278, 115.5209], transfer: 'Ubud → Sanur (Fahrer ~1 Std.) → Fähre nach Nusa Penida (30 Min., ~5–8 €). Fähren ab 7:30 Uhr, ~2 Std. einplanen.',
          notes: '',
          spots: [
            { n: 'Kelingking Beach', c: [-8.7500, 115.4715] }, { n: "Broken Beach & Angel's Billabong", c: [-8.7333, 115.4630] },
            { n: 'Diamond Beach', c: [-8.7513, 115.6631] }, { n: 'Crystal Bay', c: [-8.7147, 115.4586] }
          ],
          activities: [
            A('Driver für 2 Tage buchen', 'Gleich nach der Ankunft. ~25–30 €/Tag. Straßen sind steil & kurvig — der Driver kennt die besten Fotospots.', 0, 'https://images.unsplash.com/photo-1560199887-55dcf2cc769f?w=200&q=60&auto=format&fit=crop'),
            A('Crystal Bay — Schnorcheln', 'Nah am Fähr-Hafen, guter Einstieg am Ankunftstag. Glasklares Wasser. August = Hochsaison für Mola-Mola! Auch Schildkröten & Mantas möglich.', 0, 'https://images.unsplash.com/photo-1667724873223-09024170d2f0?w=200&q=60&auto=format&fit=crop'),
            A('Kelingking Beach', 'Ganztages-Tour im Westen zusammen mit Broken Beach. Das T-Rex-Kliff — Wahrzeichen der Insel. Abstieg ~45 Min. (steil), unten fast menschenleerer Strand.', 1, 'https://images.unsplash.com/photo-1533377557466-667ec3b24f86?w=200&q=60&auto=format&fit=crop'),
            A("Broken Beach & Angel's Billabong", 'Direkt neben Kelingking, gleiche Tour: Felsenbrücke über dem Ozean + natürlicher Gezeiten-Pool. Bei rauer See nicht ins Wasser!', 1, 'https://images.unsplash.com/photo-1746106163113-50dcd77b2c89?w=200&q=60&auto=format&fit=crop'),
            A('Diamond Beach', 'Weiter östlich, letzter Stopp der Tagestour. Einer der schönsten Strände Balis. Stahltreppe hinunter — weißer Sand, türkises Wasser, Felstürme.', 1, 'https://images.unsplash.com/photo-1755289445847-d4a663c47a08?w=200&q=60&auto=format&fit=crop')
          ],
          food: [ F('Lokale Warungs', '— frischer Fisch, Nasi Goreng, Mie Goreng. Kleine Restaurants direkt am Strand.') ],
          hotels: [
            H('Adiwana Warnakali', '— Eco-Luxury, Klippenlage, traumhafter Pool', '150–250 €'),
            H('Penida Bambu Green', '— Natur-Feeling, nachhaltig, ruhig', '60–120 €')
          ] },
        { id: 'gili', name: 'Gili Air', dates: '21.–25. Aug', nights: 4, start: '2026-08-21', desc: 'Keine Autos, keine Motorräder — nur Strand, Sterne und Schildkröten',
          img: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1200&q=70&auto=format&fit=crop',
          c: [-8.3578, 116.0818], transfer: 'Nusa Penida → Gili Air per Speedboat (~1,5–2 Std., ~25–35 € p.P.). Anbieter: Eka Jaya, Mahi-Mahi. Morgens buchen.',
          notes: '',
          spots: [ { n: 'Turtle Heaven (Nordseite)', c: [-8.3505, 116.0842] }, { n: 'Sunset-Westseite (Blick auf Gunung Agung)', c: [-8.3592, 116.0765] } ],
          activities: [
            A('Inselrundfahrt per Rad', 'Guter Einstand am Ankunftstag — in ~45 Min. um die Insel, vorbei an allen Stränden.', 0, 'https://images.unsplash.com/photo-1528784351875-d797d86873a1?w=200&q=60&auto=format&fit=crop'),
            A('Sonnenuntergang Westseite', 'Jeden Abend mit direktem Blick auf den Gunung Agung — einer der schönsten der Reise.', 0, 'https://images.unsplash.com/photo-1594740827824-9b89b5bb8b12?w=200&q=60&auto=format&fit=crop'),
            A('Schnorcheln mit Schildkröten', 'Direkt vom Strand! Beste Spots: Turtle Heaven (Nord) & Coral Fan Garden. Ausrüstung ~3 €/Tag.', 1, 'https://images.unsplash.com/photo-1762858578231-a9b23d6193c1?w=200&q=60&auto=format&fit=crop'),
            A('Tauchen', 'Braucht einen eigenen Tag (Boot, 2 Tauchgänge). Einer der besten Spots Indonesiens. Blue Marine Dive oder Manta Dive, ~35–50 € pro Tauchgang.', 2, 'https://images.unsplash.com/photo-1682687981907-170c006e3744?w=200&q=60&auto=format&fit=crop'),
            A('Swing im Meer', 'Abends hingehen, wenn weniger los ist — die ikonische Schaukel über dem Wasser.', 3, 'https://images.unsplash.com/photo-1647888750861-93e0919e5b53?w=200&q=60&auto=format&fit=crop'),
            A('Stargazing', 'Direkt danach am selben Strand: keine Lichtverschmutzung, Milchstraße mit bloßem Auge.', 3, 'https://images.unsplash.com/photo-1782183890892-57baca49eda9?w=200&q=60&auto=format&fit=crop')
          ],
          food: [
            F('Scallywags', '— beste Seafood der Insel, abends romantisch am Strand'),
            F('Legend Rock Bar', '— Sundowner & gute Cocktails'),
            F('Warung Siti', '— lokal, günstig, authentisch'),
            F('Chill Out Bar', '— Frühstück mit Meerblick')
          ],
          hotels: [
            H('Villa Nautilus', '— direkt am Strand, Private-Pool-Villas', '150–250 €'),
            H('Gili Air Sanctoo', '— romantisch, Infinity Pool, toller Service', '100–180 €'),
            H('Manta Dive Gili Air', '— direkt über der Tauchbasis, entspannt', '60–100 €')
          ] },
        { id: 'uluwatu', name: 'Uluwatu', dates: '25.–29. Aug', nights: 4, start: '2026-08-25', desc: 'Klippen, Tempel, Luxus — das spektakulärste Ende Balis',
          img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70&auto=format&fit=crop',
          c: [-8.8291, 115.0849], transfer: 'Gili Air → Padang Bai per Speedboat (~2 Std.) → Fahrer nach Uluwatu (~2 Std.). Gesamt ~4–5 Std. — früh aufbrechen, Puffer einplanen!',
          notes: '',
          spots: [
            { n: 'Pura Luhur Uluwatu', c: [-8.8291, 115.0849] }, { n: 'Single Fin', c: [-8.8156, 115.0886] },
            { n: 'Padang Padang Beach', c: [-8.8110, 115.1030] }, { n: 'Bingin Beach', c: [-8.8040, 115.1110] },
            { n: 'Suluban Beach (Blue Point)', c: [-8.8163, 115.0873] }, { n: 'Omnia Dayclub', c: [-8.8420, 115.1500] }
          ],
          activities: [
            A('Padang Padang Beach', 'Entspannter Ankunftstag. Versteckter Strand durch eine Felsspalte, bekannt aus „Eat Pray Love". Morgens ruhig & schön.', 0, 'https://images.unsplash.com/photo-1520277872024-58b40679ddb4?w=200&q=60&auto=format&fit=crop'),
            A('Suluban Beach (Blue Point)', 'Direkt neben dem Tempel. Felsformationen, Wellen, Surfer — bei Ebbe die Felsen erkunden.', 1, 'https://images.unsplash.com/photo-1733683721857-6439cd6a8c68?w=200&q=60&auto=format&fit=crop'),
            A('Pura Luhur Uluwatu + Kecak — PFLICHT', 'Der ikonischste Tempel Balis auf 70 m Klippe. 18:00 Uhr Kecak Fire Dance am Klippenrand vor Sonnenuntergang. Tickets ~15 €, früh da sein. Vorsicht: Affen klauen Brillen & Handys!', 1, 'https://images.unsplash.com/photo-1729853529570-d02d3dd03ea0?w=200&q=60&auto=format&fit=crop'),
            A('Omnia Dayclub', 'Nachmittag, ganz nah am Tempel. Infinity Pool auf der Klippe. Eintritt ~30–50 € (als Getränkeguthaben angerechnet).', 2, 'https://images.unsplash.com/photo-1760564019101-c265521c08f9?w=200&q=60&auto=format&fit=crop'),
            A('Single Fin — Sundowner', 'Direkt im Anschluss, gleiche Ecke. Legendäre Sunset-Bar hoch über den Surfern. Sonntags Live-Musik.', 2, 'https://images.unsplash.com/photo-1720728660013-4f3fc89b3eb2?w=200&q=60&auto=format&fit=crop'),
            A('Bingin Beach', 'Eigener entspannter letzter Tag, etwas nördlich. Steiler Abstieg, unten ruhiger Strand mit kleinen Cafés am Wasser. Sehr romantisch.', 3, 'https://images.unsplash.com/photo-1756312091615-f6a0b77e3e8d?w=200&q=60&auto=format&fit=crop')
          ],
          food: [
            F('Single Fin', '— Sundowner Pflicht, Essen auch gut'),
            F('Sundays Beach Club', '— romantisches Dinner am Strand'),
            F('Warung Pilihan', '— lokal, günstig, sehr gut'),
            F('The Shady Shack', '— für einen Abstecher nach Canggu')
          ],
          hotels: [
            H('Alila Villas Uluwatu', '— Design-Ikone, Infinity Pool über dem Meer', '500–700 €'),
            H('The Edge Bali', '— Cliff-Pool, Honeymoon-Feeling pur', '200–350 €'),
            H('Jumeirah Bali', '— Luxus, Klippenlage, außergewöhnlich', '350–500 €'),
            H('Mövenpick Jimbaran', '— günstigere Luxus-Option, toller Pool', '120–200 €')
          ] },
        { id: 'seminyak', name: 'Seminyak', dates: '29.–30. Aug', nights: 1, start: '2026-08-29', desc: 'Letzte Nacht — entspannt ausklingen, nah am Flughafen',
          img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=70&auto=format&fit=crop',
          c: [-8.6913, 115.1683], transfer: 'Uluwatu → Seminyak per Fahrer (~1 Std.). Flughafen nur ~25 Min. entfernt — sicherer Abschluss.',
          notes: '',
          spots: [ { n: 'Potato Head Beach Club', c: [-8.6790, 115.1580] }, { n: 'Ku De Ta', c: [-8.6830, 115.1560] }, { n: 'Oberoi Street', c: [-8.6858, 115.1600] } ],
          activities: [
            A('Oberoi Street', 'Nachmittag, gleich nach der Ankunft. Spaziergang & letzte Souvenirs.', 0),
            A('Letzter Sonnenuntergang', 'Potato Head Beach Club oder Ku De Ta — Cocktail am Strand.', 0, 'https://images.unsplash.com/photo-1503461007167-0e27f216b896?w=200&q=60&auto=format&fit=crop'),
            A('Abschluss-Dinner', 'Merah Putih oder La Lucciola.', 0, 'https://images.unsplash.com/photo-1758874089745-72a5f308af86?w=200&q=60&auto=format&fit=crop')
          ],
          food: [ F('Merah Putih', '— modernes indonesisches Fine Dining'), F('La Lucciola', '— italienisch, direkt am Strand') ],
          hotels: [ H('W Bali / The Layar / Alaya', '— für 1 Nacht muss es nicht teuer sein', '') ] },
        { id: 'abflug', name: 'Abflug', dates: '31. Aug', nights: 0, start: '2026-08-31', desc: 'Frühstück, Transfer, Abschied von Bali',
          img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=70&auto=format&fit=crop',
          c: [-8.7482, 115.1672], transfer: 'Transfer zum Flughafen ~20–30 Min. Mind. 3 Stunden vor Abflug da sein — internationaler Abflug kann dauern.',
          notes: '', spots: [],
          activities: [ A('Frühstück im Hotel', 'Ganz in Ruhe.'), A('Check-in & Abflug', 'Mind. 3 Std. vorher am Airport.') ],
          food: [], hotels: [] }
      ],
      pack: [
        'Reisepass (6 Monate gültig)', 'Buchungs-Kopien (digital + Papier)', 'Reef-safe Sonnencreme', 'Mückenspray (DEET)',
        'Sarong / Tempelkleidung', 'Schnorchel-Set', 'Wanderschuhe für Mount Batur', 'Stirnlampe (Batur, 3 Uhr!)',
        'Leichte Regenjacke', 'Powerbank', 'Kamera / GoPro', 'Reiseapotheke', 'Kreditkarte + etwas Bargeld', 'Grab-App installieren'
      ].map((t, i) => ({ id: 'pk' + i, t, done: false }))
    };
  }

export const TRANSIT = [
  { n: "Sanur Hafen", c: [-8.6926, 115.2620] },
  { n: "Padang Bai Hafen", c: [-8.5325, 115.5084] }
];

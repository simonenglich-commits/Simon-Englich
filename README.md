# Dealmaker Podcast — Landingpage

Statische Ein-Seiten-Site für die Instagram-Bio. Vanilla HTML/CSS/JS, kein Build-Step, keine Dependencies, keine externen Requests beim Laden.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die Seite |
| `styles.css` | Alle Styles, Tokens in `:root` |
| `app.js` | Klick-Tracking und Spotify-Embed nach Klick, sonst nichts |
| `impressum.html`, `datenschutz.html` | Rechtsseiten, Inhalte teils Platzhalter |
| `fonts/` | Archivo 700 (wdth 112), Switzer 400/500, Martian Mono 500 (semi-condensed), woff2, latin subsettet |
| `img/` | Platzhalterfotos, OG-Bild-Platzhalter |

## Platzhalter, die noch echte Inhalte brauchen

| Platzhalter | Wo | Was hin muss |
|---|---|---|
| `[[YOUTUBE-KANAL-URL]]` | `index.html`, 2× (`href` der YouTube-Links) | Die URL des YouTube-Kanals |
| `[[FOTO-CHRIS]]` | ersetzt `img/chris-480.webp` und `img/chris-800.webp` | Porträt Chris Steiner, WebP, 3:4 hochkant, mind. 800×1067 (plus 480×640-Variante) |
| `[[FOTO-PHILIPP]]` | ersetzt `img/philipp-480.webp` und `img/philipp-800.webp` | Porträt Philipp Kuhn, WebP, 3:4 hochkant, mind. 800×1067 (plus 480×640-Variante) |
| `[[INSTAGRAM-PHILIPP]]` | `index.html`, 2× (`href` Personenblock und Footer) | Instagram-URL von Philipp Kuhn |
| `[[IMPRESSUM-DATEN]]` | `impressum.html`, `datenschutz.html` | Medieninhaber, Anschrift, Kontakt, UID, Firmenbuch und Gericht, Kammer, Gewerbe, Aufsichtsbehörde, Blattlinie, Hosting-Anbieter |
| `[[OG-BILD]]` | ersetzt `img/og.jpg` | 1200×630, JPG oder PNG, unter 300 kB: beide Gesichter oder das Podcast-Artwork, Schriftzug „Dealmaker Podcast“ lesbar auf Schwarz |
| `[[SEITEN-URL]]` | `index.html` (`og:url`, `og:image`) | Die endgültige Domain, absolut, mit `https://` |

## Schriften

Self-hosted, latin subsettet, keine Requests an Google Fonts.

- **Archivo** (SIL Open Font License, siehe `fonts/OFL-Archivo.txt`)
- **Martian Mono** (SIL Open Font License, siehe `fonts/OFL-MartianMono.txt`)
- **Switzer** von der Indian Type Foundry, lizenziert unter der [ITF Free Font License](https://www.fontshare.com/licenses/itf-ffl) via Fontshare

Hinweis: Switzer liegt als zwei statische Schnitte (400/500) statt einer Variable vor. Der Versuch, aus den Fontshare-Schnitten eine Variable zu bauen, erzeugte inkompatible Konturen; zwei saubere Statics (9,3 kB + 11,2 kB) rendern identisch.

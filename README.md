# Dealmaker Podcast — Landingpage

Statische Ein-Seiten-Site für die Instagram-Bio. Vanilla HTML/CSS/JS, kein Build-Step, keine Dependencies, keine externen Requests beim Laden.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die Seite |
| `styles.css` | Alle Styles, Tokens in `:root` |
| `app.js` | Klick-Tracking, Spotify-Embed nach Klick, Scroll-Reveals, Gold-Swipe beim Klick, leichter Foto-Parallax |
| `impressum.html`, `datenschutz.html` | Rechtsseiten, Inhalte teils Platzhalter |
| `fonts/` | Archivo 700 (wdth 112), Switzer 400/500, Martian Mono 500 (semi-condensed), woff2, latin subsettet |
| `img/` | Platzhalterfotos, OG-Bild-Platzhalter |

## Stand der Inhalte

Eingesetzt: YouTube-Kanal (`@dealmakerpodcastofficial`), echte Porträts von Chris und Philipp (WebP, 3:4), das Podcast-Logo im Footer (Schwarz ausgekeyt, transparent auf dem Seitenschwarz), Philipps Instagram (`@philipp_k`). `og:url`/`og:image` zeigen vorläufig auf `https://podcast.simon-englich.workers.dev` und werden auf die endgültige Domain umgestellt, sobald sie steht.

Noch offen:

| Platzhalter | Wo | Was hin muss |
|---|---|---|
| `[[IMPRESSUM-DATEN]]` | `impressum.html`, `datenschutz.html` | Medieninhaber, Anschrift, Kontakt, UID, Firmenbuch und Gericht, Kammer, Gewerbe, Aufsichtsbehörde, Blattlinie, Hosting-Anbieter |
| Bewerbung-Zieladresse | `bewerbung.html`, Attribut `data-ziel` | Aktuell Platzhalter `bewerbung@dealmakerpodcast.at`. Das Formular baut eine mailto-Nachricht an diese Adresse; hier die echte Inbox eintragen. |
| Aktuelle Folgen | eigene Sektion, noch nicht gebaut | Die letzten sechs YouTube-Folgen als anklickbare Thumbnails. Braucht die sechs Video-Links; Thumbnails werden im Browser des Besuchers von YouTube geladen. |

## Schriften

Self-hosted, latin subsettet, keine Requests an Google Fonts.

- **Archivo** (SIL Open Font License, siehe `fonts/OFL-Archivo.txt`)
- **Martian Mono** (SIL Open Font License, siehe `fonts/OFL-MartianMono.txt`)
- **Switzer** von der Indian Type Foundry, lizenziert unter der [ITF Free Font License](https://www.fontshare.com/licenses/itf-ffl) via Fontshare, siehe `fonts/LIZENZ-Switzer.txt`

Hinweis: Switzer liegt als zwei statische Schnitte (400/500) statt einer Variable vor. Der Versuch, aus den Fontshare-Schnitten eine Variable zu bauen, erzeugte inkompatible Konturen; zwei saubere Statics (9,3 kB + 11,2 kB) rendern identisch.

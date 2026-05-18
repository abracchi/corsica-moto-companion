# Corsica Moto Companion

Applicazione statica per seguire un viaggio in moto in Corsica dal 24 luglio al
9 agosto 2026. Include una scheda per ogni giorno con base notte, percorso
consigliato, sosta in spiaggia, stima di chilometri e tempi, fonti e link a
Google Maps.

La app e predisposta come PWA: include manifest, icone installabili e service
worker per consultare le schede anche offline dopo il primo caricamento da un
indirizzo sicuro.

## Avvio

```bash
python3 -m http.server 8000
```

Apri `http://localhost:8000`.

## Telefono

Per installarla sul telefono serve un URL HTTPS, per esempio GitHub Pages,
Netlify o Vercel. Dopo la pubblicazione:

- iPhone: apri il sito in Safari e usa Condividi -> Aggiungi alla schermata Home.
- Android: apri il sito in Chrome e usa Installa app, oppure Aggiungi a schermata Home.

Il server locale `http://192.168.x.x:8000` va bene per provare la pagina sulla
stessa Wi-Fi, ma non abilita il service worker su telefono perche non e HTTPS.

## Contenuti

- 17 schede giornaliere, inclusa la mattina di rientro del 9 agosto.
- Filtri per area: Bastia, Balagne, Ajaccio, Sud, Solenzara, Costa Verde.
- Link diretti alle mappe con waypoint principali.
- Fonti turistiche ufficiali e immagini da Wikimedia Commons.

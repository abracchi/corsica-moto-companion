const sources = {
  bastiaBeaches: {
    label: "Bastia Tourisme - plages",
    url: "https://www.bastia-tourisme.com/les-plages/",
  },
  capCorse: {
    label: "Visit Corsica - Cap Corse",
    url: "https://www.visit-corsica.com/en/Explore-Corsica/Our-inspirations/Inspirations-and-encounters/The-Cap-Corse-tour-Day-1",
  },
  ostriconi: {
    label: "Visit Corsica - Plage de l'Ostriconi",
    url: "https://www.visit-corsica.com/en/Mon-sejour/Patrimoine-naturel/Tout-le-patrimoine-naturel/PLAGE-DE-L-OSTRICONI",
  },
  bodri: {
    label: "Visit Corsica - Plage Bodri",
    url: "https://www.visit-corsica.com/fr/sir/Patrimoine-naturel/Tout-le-patrimoine-naturel/PLAGE-BODRI",
  },
  balagne: {
    label: "Visit Corsica - Balagne",
    url: "https://www.visit-corsica.com/La-destination-Corse/Un-territoire-a-explorer/9-territoires-9-visages-de-la-Corse/La-Balagne-A-Balagna",
  },
  ajaccio: {
    label: "Visit Corsica - Ajaccio",
    url: "https://www.visit-corsica.com/en/Explore-Corsica/A-land-waiting-to-be-discovered/9-destinations-to-explore/The-Ajaccian-Country-Territoriu-d-Aiacciu",
  },
  pianottoli: {
    label: "Pianottoli-Caldarello - patrimoine naturel",
    url: "https://www.pianottoli-caldarello.fr/le-patrimoine-naturel/",
  },
  sperone: {
    label: "Visit Corsica - Plages de Sperone",
    url: "https://www.visit-corsica.com/en/Mon-sejour/Patrimoine-naturel/Tout-le-patrimoine-naturel/PLAGES-DE-SPERONE",
  },
  palombaggia: {
    label: "Porto-Vecchio Tourisme - Palombaggia",
    url: "https://www.portovecchio-tourisme.corsica/en/beach/la-plage-di-pini-penincule-de-palombaggia/",
  },
  solenzara: {
    label: "Visit Corsica - Sari-Solenzara",
    url: "https://www.visit-corsica.com/en/Mon-sejour/Patrimoine-culturel/Tout-le-patrimoine-culturel/SARI-SOLENZARA",
  },
  bavella: {
    label: "Visit Corsica - boucle Solenzara/Bavella",
    url: "https://www.visit-corsica.com/en/Explore-Corsica/Our-inspirations/Bike-inspirations/Corsica-a-fully-fledged-cycle-tourism-destination",
  },
  castagniccia: {
    label: "Visit Corsica - Castagniccia Mare e Monti",
    url: "https://www.visit-corsica.com/en/Explore-Corsica/A-land-waiting-to-be-discovered/9-destinations-to-explore/La-Castagniccia-Mare-e-Monti",
  },
  restonica: {
    label: "Visit Corsica - Valle de la Restonica",
    url: "https://www.visit-corsica.com/en/Mon-sejour/Patrimoine-naturel/Tout-le-patrimoine-naturel/VALLEE-DE-LA-RESTONICA",
  },
};

const images = {
  capCorse: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Plage%20de%20Nonza%202021%20(further%20away).jpg?width=1200",
    alt: "Spiaggia scura di Nonza sul Cap Corse",
    credit: "Nacaru / Wikimedia Commons",
  },
  balagne: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Plage%20Bodri%20-%20Corbara%20(FR2B)%20-%202021-09-06%20-%201.jpg?width=1200",
    alt: "Acqua chiara alla spiaggia di Bodri in Balagne",
    credit: "Chabe01 / Wikimedia Commons",
  },
  ajaccio: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ajaccio%20les%20Sanguinaires.jpg?width=1200",
    alt: "Isole Sanguinarie al largo di Ajaccio",
    credit: "Pierre Bona / Wikimedia Commons",
  },
  south: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rondinara%20Beach%2C%20Bonifacio%2C%20France%20(52724060294).jpg?width=1200",
    alt: "Baia turchese di Rondinara vicino a Bonifacio",
    credit: "dronepicr / Wikimedia Commons",
  },
  bavella: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Zonza%20-%20Aiguilles%20Bavella.jpg?width=1200",
    alt: "Le Aiguilles de Bavella viste da Zonza",
    credit: "Philippe Dolle / Wikimedia Commons",
  },
  castagniccia: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Paysage%20de%20castagniccia.JPG?width=1200",
    alt: "Paesaggio verde della Castagniccia",
    credit: "Azezu / Wikimedia Commons",
  },
  palombaggia: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Palombaggia%20Beach%2C%20Corsica%2C%20France%20(52724215610).jpg?width=1200",
    alt: "Vista aerea della spiaggia di Palombaggia",
    credit: "dronepicr / Wikimedia Commons",
  },
};

const stays = [
  {
    area: "Bastia / Cardo",
    hotel: "T2 BASTIA vue panoramique mer montagne",
    address: "Residence Amaryllis LD Tegghiale, 20200 Cardo",
    dates: "24-27 luglio",
    nights: 3,
  },
  {
    area: "L'Ile-Rousse",
    hotel: "Hotel Grillon",
    address: "10 Av. Paul Doumer, 20220 L'Ile-Rousse",
    dates: "27-30 luglio",
    nights: 3,
  },
  {
    area: "Ajaccio",
    hotel: "IN'D'NOI",
    address: "A Sarra Fontaine du Salario, 20000 Ajaccio",
    dates: "30 luglio-1 agosto",
    nights: 2,
  },
  {
    area: "Pianottoli-Caldarello",
    hotel: "Zelia & Jacques Berquez",
    address: "Rue Nationale 116, 20131 Pianottoli-Caldarello",
    dates: "1-3 agosto",
    nights: 2,
  },
  {
    area: "Sari-Solenzara",
    hotel: "BERNARDINI Emplacement exceptionnel",
    address: "Rte du Port, Sari-Solenzara",
    dates: "3-5 agosto",
    nights: 2,
  },
  {
    area: "Cervione",
    hotel: "A Balamata",
    address: "A Traversa, 20221 Cervione",
    dates: "5-8 agosto",
    nights: 3,
  },
  {
    area: "Bastia centro",
    hotel: "Hotel Posta Vecchia",
    address: "8 Rue Posta Vecchia, 20200 Bastia",
    dates: "8-9 agosto",
    nights: 1,
  },
];

const routes = [
  {
    date: "2026-07-24",
    area: "bastia",
    base: "Bastia / Cardo",
    title: "Arrivo dal porto di Bastia alla Residence Amaryllis",
    hotel: stays[0],
    km: 2.6,
    time: "15 min",
    level: "Facile",
    beach: "Arinella dopo il check-in, opzionale",
    beachNote:
      "Il GPX allegato copre solo il trasferimento porto-residenza. Se resta tempo, Arinella e la spiaggia piu semplice da raggiungere da Bastia.",
    waypoints: [
      "Bastia Port",
      "Uscita dal porto",
      "Attraversamento di Bastia",
      "Salita verso Cardo",
      "Residence Amaryllis",
    ],
    mapPoints: [
      "42.701307,9.453594",
      "42.708594,9.438932",
    ],
    gpx: {
      url: "./assets/gpx/24-arrivo-bastia-port-residence-amaryllis.gpx",
      points: 169,
    },
    note:
      "Scheda sostituita con il tracciato TomTom del file GPX: e un arrivo pratico dal porto alla base, ideale con bagagli e tempi di sbarco da assorbire.",
    image: images.capCorse,
    sourceKeys: ["bastiaBeaches"],
  },
  {
    date: "2026-07-25",
    area: "bastia",
    base: "Bastia / Cardo",
    title: "Grande anello del Cap Corse",
    hotel: stays[0],
    km: 188,
    time: "5h15",
    level: "Intenso",
    beach: "Tamarone o Barcaggio",
    beachNote:
      "Sul versante nord del Cap Corse trovi acqua limpida e un paesaggio piu selvaggio. In estate conviene arrivare prima di pranzo.",
    waypoints: [
      "Cardo",
      "Erbalunga",
      "Pietracorbara",
      "Macinaggio",
      "Tamarone",
      "Barcaggio",
      "Centuri",
      "Nonza",
      "Saint-Florent",
      "Col de Teghime",
      "Cardo",
    ],
    mapPoints: [
      "Residence Amaryllis LD Tegghiale Cardo France",
      "Erbalunga Brando",
      "Pietracorbara",
      "Macinaggio",
      "Plage de Tamarone Macinaggio",
      "Barcaggio",
      "Centuri",
      "Nonza",
      "Saint-Florent Haute-Corse",
      "Col de Teghime Haute-Corse",
      "Residence Amaryllis LD Tegghiale Cardo France",
    ],
    note:
      "Percorso da giornata piena: strade strette, paesi lenti e tante soste foto. Dopo Nonza valuta la discesa su Saint-Florent solo se sei ancora fresco.",
    image: images.capCorse,
    sourceKeys: ["capCorse"],
  },
  {
    date: "2026-07-26",
    area: "bastia",
    base: "Bastia / Cardo",
    title: "Nebbio, Patrimonio e spiaggia della Roya",
    hotel: stays[0],
    km: 104,
    time: "2h45",
    level: "Medio",
    beach: "Plage de la Roya",
    beachNote:
      "Sabbia comoda davanti a Saint-Florent, pratica se vuoi pranzare in paese e non complicare il rientro verso Bastia.",
    waypoints: [
      "Cardo",
      "Col de Teghime",
      "Patrimonio",
      "Saint-Florent",
      "Plage de la Roya",
      "Oletta",
      "Biguglia",
      "Cardo",
    ],
    mapPoints: [
      "Residence Amaryllis LD Tegghiale Cardo France",
      "Col de Teghime Haute-Corse",
      "Patrimonio Corsica",
      "Saint-Florent Haute-Corse",
      "Plage de la Roya Saint-Florent",
      "Oletta Corsica",
      "Biguglia",
      "Residence Amaryllis LD Tegghiale Cardo France",
    ],
    note:
      "Giornata piu corta dopo il Cap Corse: qualche curva, un pranzo facile a Saint-Florent e rientro con margine per preparare il cambio base del giorno dopo.",
    image: images.capCorse,
    sourceKeys: ["capCorse", "bastiaBeaches"],
  },
  {
    date: "2026-07-27",
    area: "balagne",
    base: "L'Ile-Rousse",
    title: "Trasferimento panoramico verso la Balagne",
    hotel: stays[1],
    km: 96,
    time: "2h35",
    level: "Medio",
    beach: "Plage de l'Ostriconi",
    beachNote:
      "A circa 15 km da L'Ile-Rousse, e una spiaggia ampia e selvaggia all'ingresso dell'Agriate. Accesso a piedi dal vecchio tracciato.",
    waypoints: [
      "Cardo",
      "Col de Teghime",
      "Saint-Florent",
      "Desert des Agriates",
      "Plage de l'Ostriconi",
      "L'Ile-Rousse",
    ],
    mapPoints: [
      "Residence Amaryllis LD Tegghiale Cardo France",
      "Col de Teghime Haute-Corse",
      "Saint-Florent Haute-Corse",
      "Desert des Agriates Corsica",
      "Plage de l'Ostriconi Palasca",
      "Hotel Grillon 10 Avenue Paul Doumer L'Ile-Rousse",
    ],
    note:
      "Porta scarpe leggere per il sentiero dell'Ostriconi. Se il vento e forte, sposta il bagno su Lozari o direttamente sulla spiaggia urbana di L'Ile-Rousse.",
    image: images.balagne,
    sourceKeys: ["ostriconi"],
  },
  {
    date: "2026-07-28",
    area: "balagne",
    base: "L'Ile-Rousse",
    title: "Villaggi balcone della Balagne",
    hotel: stays[1],
    km: 62,
    time: "2h10",
    level: "Facile",
    beach: "Bodri e Ghjunchitu",
    beachNote:
      "Bodri e la vicina Ghjunchitu sono sorvegliate in stagione e si raggiungono con un breve sentiero dai parcheggi.",
    waypoints: [
      "L'Ile-Rousse",
      "Corbara",
      "Pigna",
      "Sant'Antonino",
      "Aregno",
      "Algajola",
      "Plage Bodri",
      "L'Ile-Rousse",
    ],
    mapPoints: [
      "Hotel Grillon 10 Avenue Paul Doumer L'Ile-Rousse",
      "Corbara Corsica",
      "Pigna Corsica",
      "Sant'Antonino Corsica",
      "Aregno Corsica",
      "Algajola",
      "Plage Bodri Corbara",
      "Hotel Grillon 10 Avenue Paul Doumer L'Ile-Rousse",
    ],
    note:
      "E la giornata dei paesi in pietra e delle strade corte. Vai al mare nel secondo pomeriggio per trovare meno affollamento a Bodri.",
    image: images.balagne,
    sourceKeys: ["bodri", "balagne"],
  },
  {
    date: "2026-07-29",
    area: "balagne",
    base: "L'Ile-Rousse",
    title: "Calvi, Galeria e valle del Fango",
    hotel: stays[1],
    km: 154,
    time: "4h20",
    level: "Intenso",
    beach: "Plage de l'Alga o Algajola",
    beachNote:
      "La Revellata vicino a Calvi e piu scenografica, Algajola e piu semplice se vuoi rientrare verso L'Ile-Rousse con meno sterrati e accessi.",
    waypoints: [
      "L'Ile-Rousse",
      "Calvi",
      "Notre-Dame de la Serra",
      "Galeria",
      "Vallee du Fango",
      "Plage de l'Alga",
      "Algajola",
      "L'Ile-Rousse",
    ],
    mapPoints: [
      "Hotel Grillon 10 Avenue Paul Doumer L'Ile-Rousse",
      "Calvi Corsica",
      "Notre Dame de la Serra Calvi",
      "Galeria Corsica",
      "Vallee du Fango Corsica",
      "Plage de l'Alga Calvi",
      "Algajola",
      "Hotel Grillon 10 Avenue Paul Doumer L'Ile-Rousse",
    ],
    note:
      "Parti con il pieno e considera il Fango come deviazione elastica: se il caldo sale troppo, taglia Galeria e goditi Calvi con bagno lungo.",
    image: images.balagne,
    sourceKeys: ["balagne"],
  },
  {
    date: "2026-07-30",
    area: "ajaccio",
    base: "Ajaccio",
    title: "Dal nord-ovest ad Ajaccio via Piana",
    hotel: stays[2],
    km: 221,
    time: "5h40",
    level: "Intenso",
    beach: "Capo di Feno",
    beachNote:
      "Spiaggia ampia e piu selvaggia sul lato ovest di Ajaccio, amata anche dai surfisti. In caso di mare mosso scegli Marinella o Barbicaja.",
    waypoints: [
      "L'Ile-Rousse",
      "Calvi",
      "Porto",
      "Calanques de Piana",
      "Cargese",
      "Ajaccio",
      "Capo di Feno",
    ],
    mapPoints: [
      "Hotel Grillon 10 Avenue Paul Doumer L'Ile-Rousse",
      "Calvi Corsica",
      "Porto Ota Corsica",
      "Calanques de Piana Corsica",
      "Cargese Corsica",
      "IN'D'NOI A Sarra Fontaine du Salario Ajaccio",
      "Plage de Capo di Feno Ajaccio",
    ],
    note:
      "E il trasferimento piu scenografico e piu lungo. Piana merita passo lento; lascia il bagno per l'arrivo ad Ajaccio se vuoi evitare una giornata troppo spezzata.",
    image: images.ajaccio,
    sourceKeys: ["ajaccio"],
  },
  {
    date: "2026-07-31",
    area: "ajaccio",
    base: "Ajaccio",
    title: "Sanguinaires e golfo di Ajaccio",
    hotel: stays[2],
    km: 56,
    time: "1h55",
    level: "Facile",
    beach: "Marinella, Barbicaja o Capo di Feno",
    beachNote:
      "Le spiagge lungo la route des Sanguinaires sono comode dal centro. Capo di Feno resta la scelta piu naturale e aperta.",
    waypoints: [
      "IN'D'NOI",
      "Centro di Ajaccio",
      "Route des Sanguinaires",
      "Pointe de la Parata",
      "Capo di Feno",
      "Villanova",
      "IN'D'NOI",
    ],
    mapPoints: [
      "IN'D'NOI A Sarra Fontaine du Salario Ajaccio",
      "Ajaccio centre",
      "Route des Sanguinaires Ajaccio",
      "Pointe de la Parata Ajaccio",
      "Plage de Capo di Feno Ajaccio",
      "Villanova Corse-du-Sud",
      "IN'D'NOI A Sarra Fontaine du Salario Ajaccio",
    ],
    note:
      "Giornata volutamente leggera: lascia spazio a mercato, centro storico e tramonto dalla Parata.",
    image: images.ajaccio,
    sourceKeys: ["ajaccio"],
  },
  {
    date: "2026-08-01",
    area: "south",
    base: "Pianottoli-Caldarello",
    title: "Ajaccio, Sartene e arrivo nel sud selvaggio",
    hotel: stays[3],
    km: 153,
    time: "3h45",
    level: "Medio",
    beach: "Saint-Jean o Chevanu",
    beachNote:
      "Le spiagge di Pianottoli fanno parte della riserva naturale delle Bocche di Bonifacio e conservano un carattere selvaggio.",
    waypoints: [
      "Ajaccio",
      "Filitosa",
      "Propriano",
      "Sartene",
      "Roccapina",
      "Pianottoli-Caldarello",
      "Plage de Chevanu",
    ],
    mapPoints: [
      "IN'D'NOI A Sarra Fontaine du Salario Ajaccio",
      "Filitosa Corsica",
      "Propriano",
      "Sartene",
      "Roccapina Corsica",
      "Chambres et tables d'hotes Zelia Jacques Berquez Pianottoli-Caldarello",
      "Plage de Chevanu Pianottoli-Caldarello",
    ],
    note:
      "Sartene e Roccapina sono il cuore del trasferimento. A Pianottoli chiudi con bagno vicino alla base, cosi non devi risalire in moto stanco.",
    image: images.south,
    sourceKeys: ["pianottoli"],
  },
  {
    date: "2026-08-02",
    area: "south",
    base: "Pianottoli-Caldarello",
    title: "Bonifacio, Sperone e Rondinara",
    hotel: stays[3],
    km: 116,
    time: "3h10",
    level: "Medio",
    beach: "Petit Sperone",
    beachNote:
      "Da Piantarella si arriva a piedi alle spiagge di Sperone: sabbia fine, acqua turchese e contesto protetto.",
    waypoints: [
      "Pianottoli-Caldarello",
      "Figari",
      "Bonifacio",
      "Piantarella",
      "Petit Sperone",
      "Rondinara",
      "Pianottoli-Caldarello",
    ],
    mapPoints: [
      "Chambres et tables d'hotes Zelia Jacques Berquez Pianottoli-Caldarello",
      "Figari Corsica",
      "Bonifacio",
      "Piantarella Bonifacio",
      "Petit Sperone Bonifacio",
      "Rondinara Beach Bonifacio",
      "Chambres et tables d'hotes Zelia Jacques Berquez Pianottoli-Caldarello",
    ],
    note:
      "A Bonifacio parcheggia e cammina: la giornata funziona meglio con casco e giacca lasciati in sicurezza. Rondinara e il piano B se Sperone e troppo piena.",
    image: images.south,
    sourceKeys: ["sperone"],
  },
  {
    date: "2026-08-03",
    area: "solenzara",
    base: "Sari-Solenzara",
    title: "Porto-Vecchio, Palombaggia e costa delle Nacres",
    hotel: stays[4],
    km: 128,
    time: "3h25",
    level: "Medio",
    beach: "Palombaggia o Fautea",
    beachNote:
      "Palombaggia e una delle spiagge simbolo del sud, con pini, rocce rosa e acqua bassa. Fautea e piu comoda per arrivare a Solenzara.",
    waypoints: [
      "Pianottoli-Caldarello",
      "Foret de l'Ospedale",
      "Porto-Vecchio",
      "Palombaggia",
      "Fautea",
      "Solenzara",
    ],
    mapPoints: [
      "Chambres et tables d'hotes Zelia Jacques Berquez Pianottoli-Caldarello",
      "Foret de l'Ospedale Corsica",
      "Porto-Vecchio",
      "Palombaggia Beach Porto-Vecchio",
      "Plage de Fautea",
      "BERNARDINI Emplacement exceptionnel Route du Port Sari-Solenzara",
    ],
    note:
      "Tappa con due anime: fresco tra i pini dell'Ospedale al mattino, mare caldo nel pomeriggio. Se Palombaggia e affollata, tieni Fautea come bagno finale.",
    image: images.palombaggia,
    sourceKeys: ["palombaggia", "solenzara"],
  },
  {
    date: "2026-08-04",
    area: "solenzara",
    base: "Sari-Solenzara",
    title: "Bavella, Zonza e rientro al mare",
    hotel: stays[4],
    km: 145,
    time: "4h25",
    level: "Intenso",
    beach: "Canella",
    beachNote:
      "Canella, a sud di Solenzara, ha fondali bassi e sabbia chiara; alternativa rapida alle pozze del fiume quando vuoi mare vero.",
    waypoints: [
      "Solenzara",
      "Col de Bavella",
      "Zonza",
      "Foret de l'Ospedale",
      "Porto-Vecchio",
      "Plage de Canella",
      "Solenzara",
    ],
    mapPoints: [
      "BERNARDINI Emplacement exceptionnel Route du Port Sari-Solenzara",
      "Col de Bavella",
      "Zonza",
      "Foret de l'Ospedale Corsica",
      "Porto-Vecchio",
      "Plage de Canella Sari-Solenzara",
      "BERNARDINI Emplacement exceptionnel Route du Port Sari-Solenzara",
    ],
    note:
      "Bavella e una delle giornate da ricordare. Parti presto, perche tra curve, foto e caldo il margine sparisce in fretta.",
    image: images.bavella,
    sourceKeys: ["bavella", "solenzara"],
  },
  {
    date: "2026-08-05",
    area: "costa-verde",
    base: "Cervione",
    title: "Da Solenzara a Cervione passando per l'interno",
    hotel: stays[5],
    km: 184,
    time: "4h55",
    level: "Intenso",
    beach: "Prunete",
    beachNote:
      "Prunete e la sosta piu naturale sotto Cervione: mare vicino alla base e rientro semplice dopo una tappa montana.",
    waypoints: [
      "Solenzara",
      "Ghisonaccia",
      "Ghisoni",
      "Col de Sorba",
      "Corte",
      "Ponte Leccia",
      "Cervione",
      "Prunete",
    ],
    mapPoints: [
      "BERNARDINI Emplacement exceptionnel Route du Port Sari-Solenzara",
      "Ghisonaccia",
      "Ghisoni Corsica",
      "Col de Sorba Corsica",
      "Corte Corsica",
      "Ponte Leccia Corsica",
      "A Balamata A Traversa Cervione",
      "Prunete Cervione",
    ],
    note:
      "E una tappa da motociclista: piu montagna che mare, con arrivo sulla Costa Verde. Se il meteo in quota non convince, usa la T10 costiera e salva energie.",
    image: images.castagniccia,
    sourceKeys: ["castagniccia"],
  },
  {
    date: "2026-08-06",
    area: "costa-verde",
    base: "Cervione",
    title: "Castagniccia: paesi, castagni e cascate",
    hotel: stays[5],
    km: 119,
    time: "3h50",
    level: "Medio",
    beach: "Moriani-Plage",
    beachNote:
      "Litorale facile e sabbioso, utile dopo le strade strette della Castagniccia. Prunete resta l'alternativa piu vicina.",
    waypoints: [
      "Cervione",
      "Santa-Lucia-di-Moriani",
      "La Porta",
      "Piedicroce",
      "Orezza",
      "Cascade de l'Ucelluline",
      "Moriani-Plage",
      "Cervione",
    ],
    mapPoints: [
      "A Balamata A Traversa Cervione",
      "Santa-Lucia-di-Moriani",
      "La Porta Haute-Corse",
      "Piedicroce",
      "Orezza Corsica",
      "Cascade de l'Ucelluline San-Nicolao",
      "Moriani-Plage",
      "A Balamata A Traversa Cervione",
    ],
    note:
      "Tieni andatura pulita: carreggiate strette, curve cieche e paesi sospesi. Le cascate sono una buona pausa fresca prima del bagno.",
    image: images.castagniccia,
    sourceKeys: ["castagniccia"],
  },
  {
    date: "2026-08-07",
    area: "costa-verde",
    base: "Cervione",
    title: "Corte e valle della Restonica",
    hotel: stays[5],
    km: 162,
    time: "4h20",
    level: "Intenso",
    beach: "Prunete al tramonto",
    beachNote:
      "Dopo l'interno montano, Prunete e la chiusura piu comoda: bagno, doccia e cena senza rimettere in moto per chilometri.",
    waypoints: [
      "Cervione",
      "Aleria",
      "Corte",
      "Vallee de la Restonica",
      "Ponte Leccia",
      "Moriani",
      "Prunete",
      "Cervione",
    ],
    mapPoints: [
      "A Balamata A Traversa Cervione",
      "Aleria",
      "Corte Corsica",
      "Vallee de la Restonica Corte",
      "Ponte Leccia Corsica",
      "Moriani-Plage",
      "Prunete Cervione",
      "A Balamata A Traversa Cervione",
    ],
    note:
      "La Restonica ha strada stretta e frequentata: entra presto, non forzare i sorpassi e lascia il trekking vero a un'altra giornata.",
    image: images.castagniccia,
    sourceKeys: ["restonica", "castagniccia"],
  },
  {
    date: "2026-08-08",
    area: "bastia",
    base: "Bastia centro",
    title: "Costa orientale dolce e ultima notte al porto",
    hotel: stays[6],
    km: 84,
    time: "2h20",
    level: "Facile",
    beach: "Arinella o Ficaghjola",
    beachNote:
      "Arinella e la grande spiaggia sabbiosa di Bastia; Ficaghjola e una piccola crique urbana se vuoi restare vicino al centro.",
    waypoints: [
      "Cervione",
      "Etang de Diana",
      "Penta-di-Casinca",
      "Biguglia",
      "Bastia",
      "Plage de l'Arinella",
      "Hotel Posta Vecchia",
    ],
    mapPoints: [
      "A Balamata A Traversa Cervione",
      "Etang de Diana Corsica",
      "Penta-di-Casinca",
      "Biguglia",
      "Plage de l'Arinella Bastia",
      "Hotel Posta Vecchia 8 Rue Posta Vecchia Bastia",
    ],
    note:
      "Tappa breve per arrivare a Bastia senza ansia. Usa il pomeriggio per sistemare bagagli, giro al Vieux Port e bagno urbano.",
    image: images.capCorse,
    sourceKeys: ["bastiaBeaches", "castagniccia"],
  },
  {
    date: "2026-08-09",
    area: "bastia",
    base: "Bastia / partenza",
    title: "Mattina leggera prima del rientro",
    hotel: stays[6],
    km: 24,
    time: "55 min",
    level: "Facile",
    beach: "Arinella",
    beachNote:
      "Se il traghetto o il rientro lo permettono, Arinella e il bagno piu semplice da incastrare prima di salutare Bastia.",
    waypoints: [
      "Hotel Posta Vecchia",
      "Citadelle di Bastia",
      "Aldilonda",
      "Plage de l'Arinella",
      "Porto di Bastia",
    ],
    mapPoints: [
      "Hotel Posta Vecchia 8 Rue Posta Vecchia Bastia",
      "Citadelle de Bastia",
      "Aldilonda Bastia",
      "Plage de l'Arinella Bastia",
      "Port de Bastia",
    ],
    note:
      "Non caricare questa mattina di aspettative: e una scheda cuscinetto, utile solo se gli orari di partenza lasciano spazio.",
    image: images.capCorse,
    sourceKeys: ["bastiaBeaches"],
  },
];

const filters = [
  { key: "all", label: "Tutto" },
  { key: "bastia", label: "Bastia" },
  { key: "balagne", label: "Balagne" },
  { key: "ajaccio", label: "Ajaccio" },
  { key: "south", label: "Sud" },
  { key: "solenzara", label: "Solenzara" },
  { key: "costa-verde", label: "Costa Verde" },
];

const formatter = new Intl.DateTimeFormat("it-IT", {
  weekday: "short",
  day: "2-digit",
  month: "short",
});

const stayList = document.querySelector("#stay-list");
const routeGrid = document.querySelector("#route-grid");
const filterGroup = document.querySelector("#filter-group");
const routeSearch = document.querySelector("#route-search");
const emptyState = document.querySelector("#empty-state");
const sourceList = document.querySelector("#source-list");
const installButton = document.querySelector("#install-app");
const offlineStatus = document.querySelector("#offline-status");

let activeFilter = "all";
let query = "";
let deferredInstallPrompt = null;

renderStats();
renderStays();
renderFilters();
renderRoutes();
renderSources();
registerServiceWorker();

routeSearch.addEventListener("input", (event) => {
  query = event.target.value.trim().toLowerCase();
  renderRoutes();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    return;
  }

  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;

  if (choice.outcome === "accepted") {
    installButton.hidden = true;
    offlineStatus.textContent = "App installata";
  }
});

window.addEventListener("appinstalled", () => {
  installButton.hidden = true;
  offlineStatus.textContent = "App installata";
});

window.addEventListener("online", () => {
  offlineStatus.textContent = "Online, offline pronto";
});

window.addEventListener("offline", () => {
  offlineStatus.textContent = "Offline attivo";
});

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    offlineStatus.textContent = "Offline non supportato";
    return;
  }

  if (!window.isSecureContext) {
    offlineStatus.textContent = "PWA pronta dopo pubblicazione HTTPS";
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register(
      "./service-worker.js",
    );
    await navigator.serviceWorker.ready;
    offlineStatus.textContent = navigator.onLine
      ? "Online, offline pronto"
      : "Offline attivo";

    if (registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  } catch {
    offlineStatus.textContent = "Offline da verificare";
  }
}

function renderStats() {
  const totalKm = routes.reduce((sum, route) => sum + route.km, 0);
  document.querySelector("#trip-days").textContent = `${routes.length} giorni`;
  document.querySelector("#trip-km").textContent = `${Math.round(
    totalKm,
  ).toLocaleString("it-IT")} km stimati`;
  document.querySelector("#trip-status").textContent = getTripStatus();
}

function renderStays() {
  stayList.innerHTML = stays
    .map(
      (stay) => `
        <article class="stay-card">
          <div>
            <small>${stay.dates} | ${stay.nights} ${
              stay.nights === 1 ? "notte" : "notti"
            }</small>
            <strong>${stay.area}</strong>
          </div>
          <div>
            <p>${stay.hotel}</p>
            <p>${stay.address}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  filterGroup.innerHTML = filters
    .map(
      (filter) => `
        <button
          class="filter-button"
          type="button"
          data-filter="${filter.key}"
          aria-pressed="${filter.key === activeFilter}"
        >
          ${filter.label}
        </button>
      `,
    )
    .join("");

  filterGroup.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderRoutes();
    });
  });
}

function renderRoutes() {
  const visibleRoutes = routes.filter((route) => {
    const matchesFilter = activeFilter === "all" || route.area === activeFilter;
    const haystack = [
      route.title,
      route.base,
      route.beach,
      route.note,
      route.level,
      ...route.waypoints,
    ]
      .join(" ")
      .toLowerCase();

    return matchesFilter && (!query || haystack.includes(query));
  });

  routeGrid.innerHTML = visibleRoutes.map(renderRouteCard).join("");
  emptyState.hidden = visibleRoutes.length > 0;
}

function renderRouteCard(route, index) {
  const source = sources[route.sourceKeys[0]];
  const mapUrl = buildMapUrl(route.mapPoints);
  const date = formatter.format(new Date(`${route.date}T12:00:00`));

  return `
    <article class="route-card">
      <figure class="card-media">
        <img src="${route.image.url}" alt="${route.image.alt}" loading="${
          index < 2 ? "eager" : "lazy"
        }" />
        <figcaption class="image-credit">${route.image.credit}</figcaption>
        <span class="day-pill">${capitalize(date)}</span>
      </figure>
      <div class="card-body">
        <div class="route-meta">
          <span class="tag tag--area">${route.base}</span>
          <span class="tag">${route.level}</span>
        </div>
        <div>
          <h3>${route.title}</h3>
          <p class="hotel-line">Notte: ${route.hotel.hotel}</p>
        </div>
        <div class="metrics">
          <span class="metric"><strong>${route.km} km</strong>giro stimato</span>
          <span class="metric"><strong>${route.time}</strong>in sella + soste</span>
          ${
            route.gpx
              ? `<span class="metric"><strong>${route.gpx.points}</strong>punti GPX</span>`
              : ""
          }
        </div>
        <div class="beach-box">
          <span>Sosta mare</span>
          <strong>${route.beach}</strong>
          <p>${route.beachNote}</p>
        </div>
        <ol class="waypoints">
          ${route.waypoints.map((point) => `<li>${point}</li>`).join("")}
        </ol>
        <p class="ride-note">${route.note}</p>
        <div class="card-actions">
          <a class="button" href="${mapUrl}" target="_blank" rel="noreferrer">
            Apri mappa
          </a>
          <a
            class="button button--ghost"
            href="${source.url}"
            target="_blank"
            rel="noreferrer"
          >
            Fonte spiaggia
          </a>
          ${
            route.gpx
              ? `<a class="button button--ghost" href="${route.gpx.url}" download>Scarica GPX</a>`
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function renderSources() {
  const usedKeys = new Set(routes.flatMap((route) => route.sourceKeys));

  sourceList.innerHTML = [...usedKeys]
    .map((key) => sources[key])
    .filter(Boolean)
    .map(
      (source) => `
        <a class="source-pill" href="${source.url}" target="_blank" rel="noreferrer">
          ${source.label}
        </a>
      `,
    )
    .join("");
}

function buildMapUrl(points) {
  const [origin, ...rest] = points;
  const destination = rest.pop() ?? origin;
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "driving",
  });

  if (rest.length > 0) {
    params.set("waypoints", rest.join("|"));
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function getTripStatus() {
  const start = new Date("2026-07-24T00:00:00");
  const end = new Date("2026-08-09T23:59:59");
  const today = new Date();

  if (today < start) {
    const days = Math.ceil((start - today) / 86_400_000);
    return `partenza tra ${days} giorni`;
  }

  if (today > end) {
    return "viaggio concluso";
  }

  return "viaggio in corso";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

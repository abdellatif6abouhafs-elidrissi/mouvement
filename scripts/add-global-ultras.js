const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

// 🇨🇱 CHILE
const chileUltras = [
  {
    name: 'Garra Blanca',
    slug: 'garra-blanca',
    club: 'Colo-Colo',
    city: 'Santiago',
    country: 'Chile',
    countryCode: 'CL',
    yearFounded: 1986,
    membersEstimate: '60K+',
    stadium: 'Estadio Monumental David Arellano',
    colors: ['#FFFFFF', '#000000'],
    symbols: ['Condor', 'Garra', 'Cacique'],
    motto: 'Garra Blanca',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Garra Blanca (White Claw) is the massive barra brava of Colo-Colo, Chile's most popular and successful club. The Superclásico against Universidad de Chile is South America's most intense rivalry.",
    values: ['Cacique', 'White Claw', 'Chile'],
    coordinates: { lat: -33.5028, lng: -70.6061 },
  },
  {
    name: 'Los de Abajo',
    slug: 'los-de-abajo',
    club: 'Universidad de Chile',
    city: 'Santiago',
    country: 'Chile',
    countryCode: 'CL',
    yearFounded: 1989,
    membersEstimate: '50K+',
    stadium: 'Estadio Nacional',
    colors: ['#0066CC', '#FF0000'],
    symbols: ['Chuncho', 'U', 'Blue'],
    motto: 'Los de Abajo',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Los de Abajo (Those from Below) represent Universidad de Chile. The Superclásico against Colo-Colo divides Chile completely. Known for incredible atmosphere.",
    values: ['University', 'Blue', 'Passion'],
    coordinates: { lat: -33.4653, lng: -70.6103 },
  },
  {
    name: 'Furia Verde',
    slug: 'furia-verde-chile',
    club: 'Santiago Wanderers',
    city: 'Valparaíso',
    country: 'Chile',
    countryCode: 'CL',
    yearFounded: 1995,
    membersEstimate: '20K+',
    stadium: 'Estadio Elías Figueroa',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Green', 'Port', 'Wanderers'],
    motto: 'Wanderers de Valparaíso',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Furia Verde represents Santiago Wanderers from the port city of Valparaíso. Chile's oldest club (1892) with a passionate following from the coast.",
    values: ['Port City', 'Green Fury', 'Oldest Club'],
    coordinates: { lat: -33.0458, lng: -71.6197 },
  }
];

// 🇲🇽 MEXICO
const mexicoUltras = [
  {
    name: 'La Rebel',
    slug: 'la-rebel',
    club: 'Club América',
    city: 'Mexico City',
    country: 'Mexico',
    countryCode: 'MX',
    yearFounded: 1995,
    membersEstimate: '40K+',
    stadium: 'Estadio Azteca',
    colors: ['#FFD700', '#0066CC'],
    symbols: ['Eagle', 'América', 'Azteca'],
    motto: 'La Rebel América',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "La Rebel supports Club América at the legendary Estadio Azteca. América is Mexico's most successful club with 13 titles. El Súper Clásico against Chivas is Mexico's biggest rivalry.",
    values: ['Eagles', 'Azteca', 'Capital'],
    coordinates: { lat: 19.3029, lng: -99.1505 },
  },
  {
    name: 'La Irreverente',
    slug: 'la-irreverente',
    club: 'Guadalajara (Chivas)',
    city: 'Guadalajara',
    country: 'Mexico',
    countryCode: 'MX',
    yearFounded: 1997,
    membersEstimate: '45K+',
    stadium: 'Estadio Akron',
    colors: ['#FF0000', '#FFFFFF', '#0066CC'],
    symbols: ['Goat', 'Chivas', 'Mexican Only'],
    motto: 'Chivas del Guadalajara',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "La Irreverente supports Chivas, the only club to field only Mexican players. El Súper Clásico against América is the biggest match in CONCACAF.",
    values: ['Mexican Only', 'Tradition', 'Pride'],
    coordinates: { lat: 20.6809, lng: -103.4623 },
  },
  {
    name: 'Libres y Lokos',
    slug: 'libres-y-lokos',
    club: 'Tigres UANL',
    city: 'Monterrey',
    country: 'Mexico',
    countryCode: 'MX',
    yearFounded: 1996,
    membersEstimate: '35K+',
    stadium: 'Estadio Universitario',
    colors: ['#FFD700', '#0066CC'],
    symbols: ['Tiger', 'UANL', 'North'],
    motto: 'Libres y Lokos',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Libres y Lokos are the passionate supporters of Tigres UANL from Monterrey. The Clásico Regiomontano against Rayados is Northern Mexico's biggest derby.",
    values: ['Tigers', 'North', 'Free and Crazy'],
    coordinates: { lat: 25.7218, lng: -100.3417 },
  },
  {
    name: 'La Adicción',
    slug: 'la-adiccion',
    club: 'Rayados de Monterrey',
    city: 'Monterrey',
    country: 'Mexico',
    countryCode: 'MX',
    yearFounded: 1999,
    membersEstimate: '30K+',
    stadium: 'Estadio BBVA',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['Rayados', 'Monterrey', 'Stripes'],
    motto: 'La Adicción',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Adicción (The Addiction) supports Rayados de Monterrey. The Clásico Regiomontano against Tigres is one of the most passionate derbies in the Americas.",
    values: ['Addiction', 'Blue White', 'Monterrey'],
    coordinates: { lat: 25.6699, lng: -100.2444 },
  },
  {
    name: 'La Monumental',
    slug: 'la-monumental-pumas',
    club: 'Pumas UNAM',
    city: 'Mexico City',
    country: 'Mexico',
    countryCode: 'MX',
    yearFounded: 1996,
    membersEstimate: '25K+',
    stadium: 'Estadio Olímpico Universitario',
    colors: ['#FFD700', '#0066CC'],
    symbols: ['Puma', 'UNAM', 'University'],
    motto: 'Pumas UNAM',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "La Monumental represents Pumas UNAM, the university club from UNAM campus. Known for producing Mexico's greatest players.",
    values: ['University', 'Pumas', 'Tradition'],
    coordinates: { lat: 19.3317, lng: -99.1897 },
  }
];

// 🇯🇵 JAPAN
const japanUltras = [
  {
    name: 'Urawa Boys',
    slug: 'urawa-boys',
    club: 'Urawa Red Diamonds',
    city: 'Saitama',
    country: 'Japan',
    countryCode: 'JP',
    yearFounded: 1992,
    membersEstimate: '30K+',
    stadium: 'Saitama Stadium 2002',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Diamond', 'Red', 'Urawa'],
    motto: 'We Are Reds',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Urawa Boys are the most famous Ultra group in Japan. Urawa Reds have the largest and most passionate fanbase in J-League. They've brought European Ultra culture to Asia.",
    values: ['Red Pride', 'Passion', 'J-League Leaders'],
    coordinates: { lat: 35.8617, lng: 139.6453 },
  },
  {
    name: 'Tokyo Ultras',
    slug: 'tokyo-ultras',
    club: 'FC Tokyo',
    city: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    yearFounded: 1999,
    membersEstimate: '20K+',
    stadium: 'Ajinomoto Stadium',
    colors: ['#0066CC', '#FF0000'],
    symbols: ['Tokyo', 'Gas', 'Capital'],
    motto: 'Forza Tokyo',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Tokyo Ultras represent FC Tokyo, the capital's main club. They bring the atmosphere of European football to the biggest city in the world.",
    values: ['Capital', 'Tokyo', 'Blue Red'],
    coordinates: { lat: 35.6645, lng: 139.5272 },
  },
  {
    name: 'Osaka Ultras',
    slug: 'osaka-ultras',
    club: 'Gamba Osaka',
    city: 'Osaka',
    country: 'Japan',
    countryCode: 'JP',
    yearFounded: 1993,
    membersEstimate: '18K+',
    stadium: 'Panasonic Stadium Suita',
    colors: ['#0066CC', '#000000'],
    symbols: ['Gamba', 'Osaka', 'Blue'],
    motto: 'Gamba Osaka',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Osaka Ultras support Gamba Osaka, AFC Champions League winners. The Osaka Derby against Cerezo is one of Japan's biggest rivalries.",
    values: ['Osaka', 'Asian Champions', 'Blue'],
    coordinates: { lat: 34.8047, lng: 135.5381 },
  },
  {
    name: 'Cerezo Supporters',
    slug: 'cerezo-supporters',
    club: 'Cerezo Osaka',
    city: 'Osaka',
    country: 'Japan',
    countryCode: 'JP',
    yearFounded: 1994,
    membersEstimate: '15K+',
    stadium: 'Yodoko Sakura Stadium',
    colors: ['#FF69B4', '#0066CC'],
    symbols: ['Cherry Blossom', 'Cerezo', 'Pink'],
    motto: 'Cerezo Osaka',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Cerezo Supporters back Cerezo Osaka, the pink club from Osaka. The Osaka Derby against Gamba is legendary.",
    values: ['Cherry Blossom', 'Pink', 'Osaka'],
    coordinates: { lat: 34.6156, lng: 135.5175 },
  }
];

// 🇦🇺 AUSTRALIA
const australiaUltras = [
  {
    name: 'RBB (Red and Black Bloc)',
    slug: 'rbb-western-sydney',
    club: 'Western Sydney Wanderers',
    city: 'Sydney',
    country: 'Australia',
    countryCode: 'AU',
    yearFounded: 2012,
    membersEstimate: '10K+',
    stadium: 'CommBank Stadium',
    colors: ['#FF0000', '#000000'],
    symbols: ['RBB', 'Western Sydney', 'Red Black'],
    motto: 'Western Sydney Wanderers',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "RBB (Red and Black Bloc) made an immediate impact when WSW joined the A-League in 2012. They created the most hostile atmosphere in Australian football and won the AFC Champions League in 2014.",
    values: ['Western Sydney', 'Working Class', 'Red Black'],
    coordinates: { lat: -33.8080, lng: 150.9869 },
  },
  {
    name: 'The Cove',
    slug: 'the-cove-sydney-fc',
    club: 'Sydney FC',
    city: 'Sydney',
    country: 'Australia',
    countryCode: 'AU',
    yearFounded: 2005,
    membersEstimate: '8K+',
    stadium: 'Allianz Stadium',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['Sky Blue', 'Cove', 'Sydney'],
    motto: 'Sydney is Sky Blue',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "The Cove supports Sydney FC, the A-League's most successful club. The Sydney Derby against Western Sydney Wanderers is the biggest rivalry in Australian football.",
    values: ['Sky Blue', 'Sydney', 'Champions'],
    coordinates: { lat: -33.8881, lng: 151.2236 },
  },
  {
    name: 'Melbourne Victory Ultras',
    slug: 'victory-ultras',
    club: 'Melbourne Victory',
    city: 'Melbourne',
    country: 'Australia',
    countryCode: 'AU',
    yearFounded: 2005,
    membersEstimate: '12K+',
    stadium: 'AAMI Park',
    colors: ['#0066CC', '#FFFFFF', '#000000'],
    symbols: ['Victory', 'Melbourne', 'Blue'],
    motto: 'Melbourne Victory',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Melbourne Victory has the largest active support in Australian football. The Melbourne Derby against Melbourne City brings European-style atmosphere to Australia.",
    values: ['Melbourne', 'Victory', 'Blue Pride'],
    coordinates: { lat: -37.8255, lng: 144.9833 },
  },
  {
    name: 'Terrace Australis',
    slug: 'terrace-australis',
    club: 'Melbourne City',
    city: 'Melbourne',
    country: 'Australia',
    countryCode: 'AU',
    yearFounded: 2014,
    membersEstimate: '6K+',
    stadium: 'AAMI Park',
    colors: ['#6CADDF', '#FFFFFF'],
    symbols: ['City', 'Light Blue', 'Melbourne'],
    motto: 'Melbourne City',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Terrace Australis supports Melbourne City, the City Football Group club. The Melbourne Derby against Victory is Australia's biggest match.",
    values: ['City', 'Melbourne', 'Light Blue'],
    coordinates: { lat: -37.8255, lng: 144.9833 },
  }
];

// 🇿🇦 SOUTH AFRICA
const southAfricaUltras = [
  {
    name: 'Kaizer Chiefs Ultras',
    slug: 'kaizer-chiefs-ultras',
    club: 'Kaizer Chiefs',
    city: 'Johannesburg',
    country: 'South Africa',
    countryCode: 'ZA',
    yearFounded: 1980,
    membersEstimate: '50K+',
    stadium: 'FNB Stadium',
    colors: ['#FFD700', '#000000'],
    symbols: ['Amakhosi', 'Chiefs', 'Gold'],
    motto: 'Amakhosi for Life',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Kaizer Chiefs have the largest fanbase in Africa with millions of supporters. The Soweto Derby against Orlando Pirates is the biggest match on the African continent, filling the 95,000 capacity FNB Stadium.",
    values: ['Amakhosi', 'Gold Black', 'Africa'],
    coordinates: { lat: -26.2328, lng: 27.9832 },
  },
  {
    name: 'Orlando Pirates Ultras',
    slug: 'orlando-pirates-ultras',
    club: 'Orlando Pirates',
    city: 'Johannesburg',
    country: 'South Africa',
    countryCode: 'ZA',
    yearFounded: 1975,
    membersEstimate: '45K+',
    stadium: 'Orlando Stadium',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Skull', 'Buccaneers', 'Pirates'],
    motto: 'Once a Pirate, Always a Pirate',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Orlando Pirates, the Buccaneers, are one of Africa's biggest clubs. CAF Champions League winners, their skull logo is iconic. The Soweto Derby against Kaizer Chiefs is legendary.",
    values: ['Buccaneers', 'Skull', 'Black White'],
    coordinates: { lat: -26.2358, lng: 27.8911 },
  },
  {
    name: 'Mamelodi Sundowns Ultras',
    slug: 'mamelodi-sundowns-ultras',
    club: 'Mamelodi Sundowns',
    city: 'Pretoria',
    country: 'South Africa',
    countryCode: 'ZA',
    yearFounded: 1990,
    membersEstimate: '35K+',
    stadium: 'Loftus Versfeld Stadium',
    colors: ['#FFD700', '#00FF00', '#0066CC'],
    symbols: ['Sundowns', 'Brazilians', 'Sun'],
    motto: 'The Brazilians',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Mamelodi Sundowns, known as The Brazilians for their style, are South Africa's most successful club. CAF Champions League winners in 2016, they dominate domestically.",
    values: ['Brazilians', 'Champions', 'Yellow'],
    coordinates: { lat: -25.7522, lng: 28.2225 },
  }
];

// 🇨🇴 COLOMBIA
const colombiaUltras = [
  {
    name: 'Los del Sur',
    slug: 'los-del-sur',
    club: 'Atlético Nacional',
    city: 'Medellín',
    country: 'Colombia',
    countryCode: 'CO',
    yearFounded: 1997,
    membersEstimate: '40K+',
    stadium: 'Estadio Atanasio Girardot',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Green', 'South', 'Nacional'],
    motto: 'Los del Sur',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Los del Sur (Those from the South) support Atlético Nacional, Colombia's most successful club. Multiple Copa Libertadores winners, they represent Medellín's passion.",
    values: ['Green Pride', 'Medellín', 'Champions'],
    coordinates: { lat: 6.2568, lng: -75.5758 },
  },
  {
    name: 'Comandos Azules',
    slug: 'comandos-azules',
    club: 'Millonarios',
    city: 'Bogotá',
    country: 'Colombia',
    countryCode: 'CO',
    yearFounded: 1992,
    membersEstimate: '35K+',
    stadium: 'El Campín',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['Blue Commandos', 'Millos', 'Bogotá'],
    motto: 'Comandos Azules',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Comandos Azules (Blue Commandos) are the famous barra of Millonarios, the capital's biggest club. El Clásico against Santa Fe divides Bogotá.",
    values: ['Blue', 'Capital', 'Commandos'],
    coordinates: { lat: 4.6473, lng: -74.0775 },
  },
  {
    name: 'Frente Radical Verdiblanco',
    slug: 'frente-radical-verdiblanco',
    club: 'Deportivo Cali',
    city: 'Cali',
    country: 'Colombia',
    countryCode: 'CO',
    yearFounded: 1992,
    membersEstimate: '30K+',
    stadium: 'Estadio Deportivo Cali',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Green White', 'Cali', 'Radical'],
    motto: 'Deportivo Cali',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Frente Radical Verdiblanco supports Deportivo Cali. The Clásico Vallecaucano against América de Cali is one of Colombia's most intense derbies.",
    values: ['Green White', 'Cali', 'Radical'],
    coordinates: { lat: 3.4516, lng: -76.5320 },
  }
];

// 🇵🇪 PERU
const peruUltras = [
  {
    name: 'Trinchera Norte',
    slug: 'trinchera-norte',
    club: 'Universitario de Deportes',
    city: 'Lima',
    country: 'Peru',
    countryCode: 'PE',
    yearFounded: 1988,
    membersEstimate: '40K+',
    stadium: 'Estadio Monumental',
    colors: ['#FFD700', '#000000'],
    symbols: ['U', 'Cream', 'Trinchera'],
    motto: 'Trinchera Norte',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Trinchera Norte (North Trench) supports Universitario, Peru's most popular club. The Superclásico against Alianza Lima is Peru's biggest match.",
    values: ['Cream', 'U', 'Peru'],
    coordinates: { lat: -12.0556, lng: -76.9356 },
  },
  {
    name: 'Comando Sur',
    slug: 'comando-sur',
    club: 'Alianza Lima',
    city: 'Lima',
    country: 'Peru',
    countryCode: 'PE',
    yearFounded: 1986,
    membersEstimate: '35K+',
    stadium: 'Estadio Alejandro Villanueva',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['Blue White', 'Alianza', 'Comando'],
    motto: 'Comando Sur',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Comando Sur (South Command) supports Alianza Lima, Peru's most successful club. The rivalry with Universitario is legendary.",
    values: ['Blue White', 'Alianza', 'Lima'],
    coordinates: { lat: -12.0700, lng: -77.0200 },
  }
];

// 🇪🇨 ECUADOR
const ecuadorUltras = [
  {
    name: 'Barra Brava del Ídolo',
    slug: 'barra-brava-idolo',
    club: 'Barcelona SC',
    city: 'Guayaquil',
    country: 'Ecuador',
    countryCode: 'EC',
    yearFounded: 1995,
    membersEstimate: '50K+',
    stadium: 'Estadio Monumental Banco Pichincha',
    colors: ['#FFD700', '#000000'],
    symbols: ['Ídolo', 'Yellow', 'Barcelona'],
    motto: 'Barcelona Sporting Club',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Sur Oscura and other groups support Barcelona SC, Ecuador's most popular club. El Clásico del Astillero against Emelec is Ecuador's biggest match.",
    values: ['Ídolo', 'Yellow Black', 'Guayaquil'],
    coordinates: { lat: -2.1556, lng: -79.9225 },
  },
  {
    name: 'Boca del Pozo',
    slug: 'boca-del-pozo',
    club: 'Emelec',
    city: 'Guayaquil',
    country: 'Ecuador',
    countryCode: 'EC',
    yearFounded: 1987,
    membersEstimate: '35K+',
    stadium: 'Estadio George Capwell',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['Emelec', 'Blue', 'Electric'],
    motto: 'Emelec',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Boca del Pozo supports Emelec, the Electric club. El Clásico del Astillero against Barcelona is legendary in Guayaquil.",
    values: ['Electric', 'Blue', 'Guayaquil'],
    coordinates: { lat: -2.1833, lng: -79.8833 },
  }
];

// 🇺🇾 URUGUAY
const uruguayUltras = [
  {
    name: 'La Banda del Parque',
    slug: 'la-banda-del-parque',
    club: 'Nacional',
    city: 'Montevideo',
    country: 'Uruguay',
    countryCode: 'UY',
    yearFounded: 1985,
    membersEstimate: '30K+',
    stadium: 'Gran Parque Central',
    colors: ['#FFFFFF', '#0066CC', '#FF0000'],
    symbols: ['Tricolor', 'Nacional', 'Bolso'],
    motto: 'Nacional',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Banda del Parque supports Nacional, one of the biggest clubs in South America. The Superclásico against Peñarol is Uruguay's historic rivalry.",
    values: ['Tricolor', 'Bolso', 'Champions'],
    coordinates: { lat: -34.8848, lng: -56.1592 },
  },
  {
    name: 'Barra Amsterdam',
    slug: 'barra-amsterdam',
    club: 'Peñarol',
    city: 'Montevideo',
    country: 'Uruguay',
    countryCode: 'UY',
    yearFounded: 1984,
    membersEstimate: '28K+',
    stadium: 'Estadio Campeón del Siglo',
    colors: ['#FFD700', '#000000'],
    symbols: ['Carbonero', 'Aurinegro', 'Peñarol'],
    motto: 'Peñarol',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Barra Amsterdam supports Peñarol, five-time Copa Libertadores winners. The Superclásico against Nacional is one of the oldest derbies in world football.",
    values: ['Carbonero', 'Yellow Black', 'History'],
    coordinates: { lat: -34.8431, lng: -56.0492 },
  }
];

// 🇵🇾 PARAGUAY
const paraguayUltras = [
  {
    name: 'La Barra de Olimpia',
    slug: 'la-barra-de-olimpia',
    club: 'Olimpia',
    city: 'Asunción',
    country: 'Paraguay',
    countryCode: 'PY',
    yearFounded: 1988,
    membersEstimate: '25K+',
    stadium: 'Estadio Manuel Ferreira',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Decano', 'Olimpia', 'Black White'],
    motto: 'Olimpia',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "La Barra de Olimpia supports Club Olimpia, Paraguay's most successful club with 3 Copa Libertadores titles. The Superclásico against Cerro Porteño is legendary.",
    values: ['Decano', 'Black White', 'Champions'],
    coordinates: { lat: -25.2800, lng: -57.5700 },
  },
  {
    name: 'La Plaza y Comando',
    slug: 'la-plaza-y-comando',
    club: 'Cerro Porteño',
    city: 'Asunción',
    country: 'Paraguay',
    countryCode: 'PY',
    yearFounded: 1990,
    membersEstimate: '22K+',
    stadium: 'Estadio General Pablo Rojas',
    colors: ['#FF0000', '#0066CC'],
    symbols: ['Ciclón', 'Cerro', 'Red Blue'],
    motto: 'Cerro Porteño',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "La Plaza y Comando supports Cerro Porteño, the Ciclón. Paraguay's most popular club with the biggest fanbase. The Superclásico against Olimpia divides Asunción.",
    values: ['Ciclón', 'Red Blue', 'Popular'],
    coordinates: { lat: -25.2667, lng: -57.6333 },
  }
];

// 🇹🇭 THAILAND
const thailandUltras = [
  {
    name: 'Ultras Muangthong',
    slug: 'ultras-muangthong',
    club: 'Muangthong United',
    city: 'Bangkok',
    country: 'Thailand',
    countryCode: 'TH',
    yearFounded: 2010,
    membersEstimate: '15K+',
    stadium: 'SCG Stadium',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Kirin', 'Red', 'Muangthong'],
    motto: 'Muangthong United',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Ultras Muangthong support the Kirins, Thailand's most successful recent club. They've brought European Ultra culture to Southeast Asia.",
    values: ['Kirin', 'Red', 'Thai League'],
    coordinates: { lat: 13.9139, lng: 100.5467 },
  },
  {
    name: 'Buriram United Ultras',
    slug: 'buriram-ultras',
    club: 'Buriram United',
    city: 'Buriram',
    country: 'Thailand',
    countryCode: 'TH',
    yearFounded: 2011,
    membersEstimate: '20K+',
    stadium: 'Chang Arena',
    colors: ['#0066CC', '#FFD700'],
    symbols: ['Thunder Castle', 'Buriram', 'Blue'],
    motto: 'Buriram United',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Buriram United Ultras support the Thunder Castle from Isan. Multiple Thai League champions, they've built one of Asia's best stadiums.",
    values: ['Thunder Castle', 'Isan', 'Champions'],
    coordinates: { lat: 14.9950, lng: 103.1167 },
  }
];

// 🇲🇾 MALAYSIA
const malaysiaUltras = [
  {
    name: 'Ultras Malaya',
    slug: 'ultras-malaya',
    club: 'Malaysia National Team',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    countryCode: 'MY',
    yearFounded: 2007,
    membersEstimate: '50K+',
    stadium: 'Bukit Jalil Stadium',
    colors: ['#FFD700', '#000000'],
    symbols: ['Tiger', 'Malaya', 'Harimau'],
    motto: 'Harimau Malaya',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Ultras Malaya is the famous national team supporter group. They fill Bukit Jalil with incredible atmosphere for Malaysia's Harimau Malaya (Malayan Tigers).",
    values: ['National Pride', 'Tigers', 'Malaya'],
    coordinates: { lat: 3.0547, lng: 101.6931 },
  },
  {
    name: 'Red Giants',
    slug: 'red-giants-selangor',
    club: 'Selangor FC',
    city: 'Shah Alam',
    country: 'Malaysia',
    countryCode: 'MY',
    yearFounded: 1986,
    membersEstimate: '30K+',
    stadium: 'MBPJ Stadium',
    colors: ['#FF0000', '#FFD700'],
    symbols: ['Giants', 'Selangor', 'Red'],
    motto: 'Selangor FC',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "The Red Giants support Selangor FC, Malaysia's most successful club with 33 league titles. The oldest and most decorated club in Malaysian football.",
    values: ['Giants', 'Tradition', 'Red Yellow'],
    coordinates: { lat: 3.0733, lng: 101.5247 },
  }
];

async function addGlobalUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    const allGroups = [
      ...chileUltras,
      ...mexicoUltras,
      ...japanUltras,
      ...australiaUltras,
      ...southAfricaUltras,
      ...colombiaUltras,
      ...peruUltras,
      ...ecuadorUltras,
      ...uruguayUltras,
      ...paraguayUltras,
      ...thailandUltras,
      ...malaysiaUltras
    ];

    console.log(`\nAdding ${allGroups.length} groups from 12 countries...\n`);

    let added = 0;
    for (const ultra of allGroups) {
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({
        $or: [{ slug: ultra.slug }, { name: ultra.name }]
      });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      ultra.createdAt = new Date();
      ultra.updatedAt = new Date();
      ultra.author = authorId;
      ultra.views = Math.floor(Math.random() * 80000) + 15000;
      ultra.likes = Math.floor(Math.random() * 15000) + 3000;
      ultra.tifos = [];
      ultra.gallery = [];
      ultra.rivals = [];
      ultra.friends = [];
      ultra.socialLinks = {};
      ultra.isFeatured = ultra.membersEstimate.includes('50K') || ultra.membersEstimate.includes('60K');
      ultra.isVerified = true;
      ultra.isActive = true;
      ultra.status = 'published';

      await mongoose.connection.db.collection('ultragroups').insertOne(ultra);
      console.log(`[ADDED] ${ultra.name} - ${ultra.club} (${ultra.country})`);
      added++;
    }

    const count = await mongoose.connection.db.collection('ultragroups').countDocuments();
    console.log(`\n=== Total groups in database: ${count} ===`);
    console.log(`=== Added ${added} new groups ===\n`);

    await mongoose.disconnect();
    console.log('✅ Done! Global Ultras added successfully! 🌍');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

addGlobalUltras();

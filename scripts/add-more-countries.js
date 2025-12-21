const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

// 🇭🇷 CROATIA
const croatiaUltras = [
  {
    name: 'Bad Blue Boys',
    slug: 'bad-blue-boys',
    club: 'Dinamo Zagreb',
    city: 'Zagreb',
    country: 'Croatia',
    countryCode: 'HR',
    yearFounded: 1986,
    membersEstimate: '40K+',
    stadium: 'Maksimir Stadium',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['BBB', 'Blue', 'Zagreb'],
    motto: 'Bad Blue Boys Zagreb',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Bad Blue Boys are one of the most famous Ultra groups in Eastern Europe. The match against Red Star Belgrade on May 13, 1990 is considered a key moment in Croatian independence. The Eternal Derby against Hajduk Split divides Croatia.",
    values: ['Croatian Pride', 'Independence', 'Blue Blood'],
    coordinates: { lat: 45.8189, lng: 16.0182 },
  },
  {
    name: 'Torcida Split',
    slug: 'torcida-split',
    club: 'Hajduk Split',
    city: 'Split',
    country: 'Croatia',
    countryCode: 'HR',
    yearFounded: 1950,
    membersEstimate: '35K+',
    stadium: 'Poljud Stadium',
    colors: ['#FFFFFF', '#0066CC'],
    symbols: ['Torcida', 'Hajduk', 'Dalmatia'],
    motto: 'Hajduk živi vječno',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Torcida Split, founded in 1950, is THE OLDEST Ultra group in Europe and possibly the world. They inspired the name 'torcida' used in Brazil. The Eternal Derby against Dinamo Zagreb is legendary. Hajduk represents Dalmatian pride.",
    values: ['Oldest Ultras', 'Dalmatia', 'Tradition'],
    coordinates: { lat: 43.5244, lng: 16.4378 },
  },
  {
    name: 'Armada Rijeka',
    slug: 'armada-rijeka',
    club: 'HNK Rijeka',
    city: 'Rijeka',
    country: 'Croatia',
    countryCode: 'HR',
    yearFounded: 1987,
    membersEstimate: '15K+',
    stadium: 'Rujevica Stadium',
    colors: ['#FFFFFF', '#000000'],
    symbols: ['Armada', 'Navy', 'Rijeka'],
    motto: 'Armada Rijeka',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Armada represents HNK Rijeka from the Adriatic port city. Known for their naval identity and passionate support from the Kvarner region.",
    values: ['Adriatic', 'Navy', 'Kvarner'],
    coordinates: { lat: 45.3432, lng: 14.3989 },
  }
];

// 🇫🇷 FRANCE
const franceUltras = [
  {
    name: 'Virage Auteuil PSG',
    slug: 'virage-auteuil-psg',
    club: 'Paris Saint-Germain',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    yearFounded: 1991,
    membersEstimate: '25K+',
    stadium: 'Parc des Princes',
    colors: ['#004170', '#DA291C'],
    symbols: ['Auteuil', 'Paris', 'Eiffel'],
    motto: 'Ici c\'est Paris',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Virage Auteuil represents the Ultra side of PSG at Parc des Princes. After the dissolution of original groups, new collectives have emerged to bring atmosphere back to Paris football.",
    values: ['Paris Pride', 'Atmosphere', 'Passion'],
    coordinates: { lat: 48.8414, lng: 2.2530 },
  },
  {
    name: 'Virage Sud Marseille',
    slug: 'virage-sud-marseille',
    club: 'Olympique Marseille',
    city: 'Marseille',
    country: 'France',
    countryCode: 'FR',
    yearFounded: 1984,
    membersEstimate: '30K+',
    stadium: 'Orange Vélodrome',
    colors: ['#2FAEE0', '#FFFFFF'],
    symbols: ['South Winners', 'OM', 'Vélodrome'],
    motto: 'À jamais les premiers',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "The Virage Sud at the Vélodrome is one of the most famous ends in European football. Marseille are France's only Champions League winners (1993). Le Classique against PSG is France's biggest rivalry.",
    values: ['Champions League', 'Marseille Pride', 'Passion'],
    coordinates: { lat: 43.2696, lng: 5.3958 },
  },
  {
    name: 'Kop of Boulogne',
    slug: 'kop-of-boulogne',
    club: 'Paris Saint-Germain',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    yearFounded: 1978,
    membersEstimate: '15K+',
    stadium: 'Parc des Princes',
    colors: ['#004170', '#DA291C'],
    symbols: ['Boulogne', 'KOB', 'Paris'],
    motto: 'Boulogne Boys',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "The Kop of Boulogne was PSG's most famous terrace before its dissolution. New groups continue the tradition of the historic Boulogne end at Parc des Princes.",
    values: ['Tradition', 'Paris', 'History'],
    coordinates: { lat: 48.8414, lng: 2.2530 },
  },
  {
    name: 'Bad Gones Lyon',
    slug: 'bad-gones-lyon',
    club: 'Olympique Lyon',
    city: 'Lyon',
    country: 'France',
    countryCode: 'FR',
    yearFounded: 1987,
    membersEstimate: '20K+',
    stadium: 'Groupama Stadium',
    colors: ['#DA291C', '#0066CC', '#FFFFFF'],
    symbols: ['Bad Gones', 'OL', 'Lyon'],
    motto: 'Bad Gones 1987',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Bad Gones are the main Ultra group of Olympique Lyon, France's most successful club in the 2000s with 7 consecutive titles. The Derby Rhône-Alpes against Saint-Étienne is legendary.",
    values: ['Lyon Pride', 'Gones', 'Champions'],
    coordinates: { lat: 45.7653, lng: 4.9822 },
  },
  {
    name: 'Magic Fans Saint-Étienne',
    slug: 'magic-fans-saint-etienne',
    club: 'AS Saint-Étienne',
    city: 'Saint-Étienne',
    country: 'France',
    countryCode: 'FR',
    yearFounded: 1991,
    membersEstimate: '18K+',
    stadium: 'Stade Geoffroy-Guichard',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Magic Fans', 'ASSE', 'Green'],
    motto: 'Allez les Verts',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Magic Fans support AS Saint-Étienne, France's most successful club with 10 titles. Le Chaudron (The Cauldron) is one of France's most atmospheric stadiums. The Derby against Lyon is legendary.",
    values: ['Green Army', 'Le Chaudron', 'History'],
    coordinates: { lat: 45.4608, lng: 4.3903 },
  }
];

// 🇪🇸 SPAIN
const spainUltras = [
  {
    name: 'Biris Norte',
    slug: 'biris-norte',
    club: 'Sevilla FC',
    city: 'Seville',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1975,
    membersEstimate: '25K+',
    stadium: 'Ramón Sánchez-Pizjuán',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Biris', 'Norte', 'Sevilla'],
    motto: 'Biris Norte 1975',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Biris Norte is the main Ultra group of Sevilla FC, multiple Europa League winners. The Seville Derby against Real Betis is one of the most intense in Spain.",
    values: ['Europa League', 'Seville Pride', 'Passion'],
    coordinates: { lat: 37.3840, lng: -5.9704 },
  },
  {
    name: 'Supporters Gol Sur Betis',
    slug: 'supporters-gol-sur-betis',
    club: 'Real Betis',
    city: 'Seville',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1986,
    membersEstimate: '22K+',
    stadium: 'Benito Villamarín',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Green', 'Betis', 'Villamarín'],
    motto: 'Viva el Betis',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Supporters Gol Sur represents Real Betis, the green half of Seville. Known for incredible atmosphere at Benito Villamarín. The Seville Derby against Sevilla FC is legendary.",
    values: ['Green Pride', 'Seville', 'Passion'],
    coordinates: { lat: 37.3567, lng: -5.9816 },
  },
  {
    name: 'Frente Atlético',
    slug: 'frente-atletico',
    club: 'Atlético Madrid',
    city: 'Madrid',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1982,
    membersEstimate: '30K+',
    stadium: 'Cívitas Metropolitano',
    colors: ['#CB3524', '#FFFFFF'],
    symbols: ['Frente', 'Atleti', 'Red White'],
    motto: 'Atleti hasta la muerte',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Frente Atlético is the main Ultra group of Atlético Madrid. They represent the working-class spirit of Atleti against the 'establishment' Real Madrid. The Madrid Derby is one of Spain's fiercest.",
    values: ['Working Class', 'Anti-Establishment', 'Red and White'],
    coordinates: { lat: 40.4361, lng: -3.5994 },
  },
  {
    name: 'Boixos Nois',
    slug: 'boixos-nois',
    club: 'FC Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1981,
    membersEstimate: '20K+',
    stadium: 'Spotify Camp Nou',
    colors: ['#A50044', '#004D98'],
    symbols: ['Boixos', 'Barça', 'Catalonia'],
    motto: 'Més que un club',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Boixos Nois (Crazy Boys in Catalan) were Barcelona's main Ultra group. They represented the Catalan identity of the club. El Clásico against Real Madrid is the biggest match in world football.",
    values: ['Catalonia', 'Identity', 'Passion'],
    coordinates: { lat: 41.3809, lng: 2.1228 },
  },
  {
    name: 'Ultras Sur',
    slug: 'ultras-sur',
    club: 'Real Madrid',
    city: 'Madrid',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1980,
    membersEstimate: '25K+',
    stadium: 'Santiago Bernabéu',
    colors: ['#FFFFFF', '#FFD700'],
    symbols: ['Sur', 'Madrid', 'Bernabéu'],
    motto: 'Hala Madrid',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Ultras Sur were Real Madrid's famous Ultra group in the South end of the Bernabéu. Though officially dissolved, their legacy continues. El Clásico against Barcelona is legendary.",
    values: ['Madridismo', 'Bernabéu', 'Glory'],
    coordinates: { lat: 40.4530, lng: -3.6883 },
  },
  {
    name: 'Herri Norte Athletic',
    slug: 'herri-norte-athletic',
    club: 'Athletic Bilbao',
    city: 'Bilbao',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1981,
    membersEstimate: '18K+',
    stadium: 'San Mamés',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Herri Norte', 'Athletic', 'Basque'],
    motto: 'Athletic Club',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Herri Norte represents Athletic Bilbao, the club that only signs Basque players. San Mamés, the Cathedral of Football, is one of Europe's most atmospheric stadiums. The Basque Derby against Real Sociedad is legendary.",
    values: ['Basque Only', 'Identity', 'Tradition'],
    coordinates: { lat: 43.2641, lng: -2.9494 },
  }
];

// 🇳🇱 NETHERLANDS
const netherlandsUltras = [
  {
    name: 'AFCA Supporters',
    slug: 'afca-supporters',
    club: 'Ajax Amsterdam',
    city: 'Amsterdam',
    country: 'Netherlands',
    countryCode: 'NL',
    yearFounded: 1969,
    membersEstimate: '35K+',
    stadium: 'Johan Cruyff Arena',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Ajax', 'Three X', 'Amsterdam'],
    motto: 'AFCA',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Ajax fans (AFCA - Amsterdam Football Club Ajax) create an incredible atmosphere at the Johan Cruyff Arena. De Klassieker against Feyenoord is one of the most intense derbies in world football.",
    values: ['Amsterdam', 'Total Football', 'Glory'],
    coordinates: { lat: 52.3142, lng: 4.9419 },
  },
  {
    name: 'Het Legioen',
    slug: 'het-legioen-feyenoord',
    club: 'Feyenoord',
    city: 'Rotterdam',
    country: 'Netherlands',
    countryCode: 'NL',
    yearFounded: 1964,
    membersEstimate: '40K+',
    stadium: 'De Kuip (Stadion Feijenoord)',
    colors: ['#FF0000', '#FFFFFF', '#000000'],
    symbols: ['Legion', 'De Kuip', 'Rotterdam'],
    motto: 'Hand in Hand',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Het Legioen (The Legion) is Feyenoord's famous support. De Kuip is one of the most atmospheric stadiums in Europe. Feyenoord represents working-class Rotterdam against bourgeois Amsterdam.",
    values: ['Working Class', 'Rotterdam', 'De Kuip'],
    coordinates: { lat: 51.8939, lng: 4.5231 },
  },
  {
    name: 'PSV Eindhoven Ultras',
    slug: 'psv-ultras',
    club: 'PSV Eindhoven',
    city: 'Eindhoven',
    country: 'Netherlands',
    countryCode: 'NL',
    yearFounded: 1996,
    membersEstimate: '20K+',
    stadium: 'Philips Stadion',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Philips', 'PSV', 'Eindhoven'],
    motto: 'PSV',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "PSV Ultras represent the club from Eindhoven, historically linked to Philips. European Cup winners in 1988, they complete the Dutch big three.",
    values: ['Eindhoven', 'Champions', 'Pride'],
    coordinates: { lat: 51.4417, lng: 5.4675 },
  }
];

// 🇺🇦 UKRAINE
const ukraineUltras = [
  {
    name: 'Ultras Dynamo Kyiv',
    slug: 'ultras-dynamo-kyiv',
    club: 'Dynamo Kyiv',
    city: 'Kyiv',
    country: 'Ukraine',
    countryCode: 'UA',
    yearFounded: 1989,
    membersEstimate: '30K+',
    stadium: 'NSC Olimpiyskiy',
    colors: ['#FFFFFF', '#0066CC'],
    symbols: ['Dynamo', 'Kyiv', 'D'],
    motto: 'Dynamo Kyiv',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Ultras Dynamo Kyiv represent Ukraine's most successful club with 16 titles. They played a significant role in the Euromaidan revolution. Many Ultras have joined the defense of Ukraine since 2022.",
    values: ['Ukraine', 'Freedom', 'Resistance'],
    coordinates: { lat: 50.4333, lng: 30.5167 },
  },
  {
    name: 'Ultras Shakhtar',
    slug: 'ultras-shakhtar',
    club: 'Shakhtar Donetsk',
    city: 'Donetsk (in exile)',
    country: 'Ukraine',
    countryCode: 'UA',
    yearFounded: 1995,
    membersEstimate: '25K+',
    stadium: 'Various (displaced)',
    colors: ['#FF6600', '#000000'],
    symbols: ['Miners', 'Orange', 'Shakhtar'],
    motto: 'Shakhtar Donetsk',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Ultras Shakhtar represent the Miners from Donetsk. Displaced since 2014 due to the war, they continue supporting their club in exile. They symbolize resilience and Ukrainian unity.",
    values: ['Resilience', 'Exile', 'Unity'],
    coordinates: { lat: 48.0159, lng: 37.8029 },
  },
  {
    name: 'Ultras Metalist',
    slug: 'ultras-metalist',
    club: 'Metalist Kharkiv',
    city: 'Kharkiv',
    country: 'Ukraine',
    countryCode: 'UA',
    yearFounded: 1987,
    membersEstimate: '20K+',
    stadium: 'Metalist Stadium',
    colors: ['#FFD700', '#0066CC'],
    symbols: ['Metalist', 'Yellow Blue', 'Kharkiv'],
    motto: 'Metalist Kharkiv',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Ultras Metalist represent Kharkiv, Ukraine's second city. Despite the original club's dissolution and war, the Ultra movement continues in the frontline city, showing incredible resilience.",
    values: ['Frontline', 'Resilience', 'Kharkiv'],
    coordinates: { lat: 49.9808, lng: 36.2527 },
  }
];

// 🇷🇴 ROMANIA
const romaniaUltras = [
  {
    name: 'Peluza Nord Steaua',
    slug: 'peluza-nord-steaua',
    club: 'FCSB (Steaua)',
    city: 'Bucharest',
    country: 'Romania',
    countryCode: 'RO',
    yearFounded: 1995,
    membersEstimate: '25K+',
    stadium: 'Arena Națională',
    colors: ['#FF0000', '#0066CC'],
    symbols: ['Steaua', 'Star', 'Army'],
    motto: 'Steaua București',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Peluza Nord represents FCSB, the continuation of Steaua Bucharest - the only Eastern European club to win the European Cup (1986). The Eternal Derby against Dinamo is legendary.",
    values: ['European Glory', 'Champions', 'Red and Blue'],
    coordinates: { lat: 44.4378, lng: 26.1547 },
  },
  {
    name: 'Peluza Cătălin Hîldan',
    slug: 'peluza-catalin-hildan',
    club: 'Dinamo Bucharest',
    city: 'Bucharest',
    country: 'Romania',
    countryCode: 'RO',
    yearFounded: 2000,
    membersEstimate: '20K+',
    stadium: 'Arena Națională',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Dogs', 'Dinamo', 'Cătălin'],
    motto: 'Dinamo București',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Peluza Cătălin Hîldan is named after the legendary Dinamo captain who died in 2000. The Red Dogs represent the Police club in the Eternal Derby against FCSB/Steaua.",
    values: ['Memory', 'Red Dogs', 'Tradition'],
    coordinates: { lat: 44.4378, lng: 26.1547 },
  },
  {
    name: 'Peluza Sud Craiova',
    slug: 'peluza-sud-craiova',
    club: 'Universitatea Craiova',
    city: 'Craiova',
    country: 'Romania',
    countryCode: 'RO',
    yearFounded: 1998,
    membersEstimate: '18K+',
    stadium: 'Ion Oblemenco Stadium',
    colors: ['#FFFFFF', '#0066CC'],
    symbols: ['Oltenia', 'University', 'Craiova'],
    motto: 'Universitatea Craiova',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Peluza Sud represents Universitatea Craiova from the Oltenia region. Known as the White-Blues, they bring passionate support from Romania's southwest.",
    values: ['Oltenia', 'University', 'Blue White'],
    coordinates: { lat: 44.3167, lng: 23.8000 },
  }
];

// 🇧🇪 BELGIUM
const belgiumUltras = [
  {
    name: 'Ultras Inferno',
    slug: 'ultras-inferno',
    club: 'Standard Liège',
    city: 'Liège',
    country: 'Belgium',
    countryCode: 'BE',
    yearFounded: 1996,
    membersEstimate: '15K+',
    stadium: 'Stade Maurice Dufrasne',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Inferno', 'Hell', 'Liège'],
    motto: 'Standard de Liège',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Ultras Inferno create a hellish atmosphere at Sclessin, known as the Hell of Sclessin. The Walloon Derby against Charleroi is legendary. Standard has the most passionate fanbase in Belgium.",
    values: ['Hell', 'Wallonia', 'Passion'],
    coordinates: { lat: 50.6097, lng: 5.5378 },
  },
  {
    name: 'Blue Army Brugge',
    slug: 'blue-army-brugge',
    club: 'Club Brugge',
    city: 'Bruges',
    country: 'Belgium',
    countryCode: 'BE',
    yearFounded: 1993,
    membersEstimate: '20K+',
    stadium: 'Jan Breydel Stadium',
    colors: ['#0066CC', '#000000'],
    symbols: ['Blue', 'Brugge', 'Flanders'],
    motto: 'Club Brugge',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Blue Army represents Club Brugge, Belgium's most successful club. The Blue-Black create an intense atmosphere. The rivalry with Anderlecht is Belgium's biggest.",
    values: ['Flanders', 'Champions', 'Blue Black'],
    coordinates: { lat: 51.1933, lng: 3.1808 },
  },
  {
    name: 'Mauves Army',
    slug: 'mauves-army',
    club: 'RSC Anderlecht',
    city: 'Brussels',
    country: 'Belgium',
    countryCode: 'BE',
    yearFounded: 1988,
    membersEstimate: '18K+',
    stadium: 'Lotto Park',
    colors: ['#660099', '#FFFFFF'],
    symbols: ['Mauve', 'Anderlecht', 'Brussels'],
    motto: 'RSCA',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Mauves Army represents Anderlecht, Belgium's most decorated club with 34 titles. The Purple and White have a storied European history. The rivalry with Club Brugge is legendary.",
    values: ['Purple', 'Brussels', 'Glory'],
    coordinates: { lat: 50.8344, lng: 4.2983 },
  }
];

// 🏴󠁧󠁢󠁳󠁣󠁴󠁿 SCOTLAND
const scotlandUltras = [
  {
    name: 'Green Brigade',
    slug: 'green-brigade-celtic',
    club: 'Celtic FC',
    city: 'Glasgow',
    country: 'Scotland',
    countryCode: 'GB-SCT',
    yearFounded: 2006,
    membersEstimate: '20K+',
    stadium: 'Celtic Park',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Green', 'Harp', 'Celtic Cross'],
    motto: 'You\'ll Never Walk Alone',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "The Green Brigade brought Italian-style Ultra culture to Celtic Park. Known for incredible choreographies and political activism. The Old Firm against Rangers is the most intense derby in British football.",
    values: ['Irish Heritage', 'Social Justice', 'Green and White'],
    coordinates: { lat: 55.8497, lng: -4.2055 },
  },
  {
    name: 'Union Bears',
    slug: 'union-bears-rangers',
    club: 'Rangers FC',
    city: 'Glasgow',
    country: 'Scotland',
    countryCode: 'GB-SCT',
    yearFounded: 2007,
    membersEstimate: '18K+',
    stadium: 'Ibrox Stadium',
    colors: ['#0066CC', '#FFFFFF', '#FF0000'],
    symbols: ['Bear', 'Union', 'Ibrox'],
    motto: 'We Are The People',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Union Bears are Rangers' main Ultra group at Ibrox. They create an incredible atmosphere for European nights. The Old Firm against Celtic is legendary - a religious, political, and football rivalry.",
    values: ['Tradition', 'Ibrox', 'Blue and White'],
    coordinates: { lat: 55.8531, lng: -4.3089 },
  }
];

// 🇵🇹 PORTUGAL
const portugalUltras = [
  {
    name: 'No Name Boys',
    slug: 'no-name-boys',
    club: 'Benfica',
    city: 'Lisbon',
    country: 'Portugal',
    countryCode: 'PT',
    yearFounded: 1992,
    membersEstimate: '25K+',
    stadium: 'Estádio da Luz',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Eagle', 'Luz', 'Benfica'],
    motto: 'Sou Benfica',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "No Name Boys are Benfica's main Ultra group at the famous Estádio da Luz. Benfica are Portugal's most successful club with 38 titles. The Lisbon Derby against Sporting is legendary.",
    values: ['Eagles', 'Luz', 'Champions'],
    coordinates: { lat: 38.7528, lng: -9.1847 },
  },
  {
    name: 'Juve Leo',
    slug: 'juve-leo-sporting',
    club: 'Sporting CP',
    city: 'Lisbon',
    country: 'Portugal',
    countryCode: 'PT',
    yearFounded: 1976,
    membersEstimate: '20K+',
    stadium: 'José Alvalade Stadium',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Lion', 'Juve Leo', 'Sporting'],
    motto: 'Sporting sempre',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Juve Leo is one of the oldest Ultra groups in Portugal, supporting Sporting Lisbon. The Lions represent the green half of Lisbon in derbies against Benfica and Porto.",
    values: ['Lions', 'Green Pride', 'Tradition'],
    coordinates: { lat: 38.7611, lng: -9.1608 },
  },
  {
    name: 'Super Dragões',
    slug: 'super-dragoes',
    club: 'FC Porto',
    city: 'Porto',
    country: 'Portugal',
    countryCode: 'PT',
    yearFounded: 1986,
    membersEstimate: '22K+',
    stadium: 'Estádio do Dragão',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['Dragon', 'Porto', 'North'],
    motto: 'Porto campeão',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Super Dragões represent FC Porto, Champions League winners in 2004 under Mourinho. They represent the pride of the North against Lisbon's clubs. The Clássico against Benfica is Portugal's biggest match.",
    values: ['Dragons', 'North', 'Champions'],
    coordinates: { lat: 41.1617, lng: -8.5839 },
  }
];

// 🇮🇩 INDONESIA
const indonesiaUltras = [
  {
    name: 'Viking Persib',
    slug: 'viking-persib',
    club: 'Persib Bandung',
    city: 'Bandung',
    country: 'Indonesia',
    countryCode: 'ID',
    yearFounded: 1993,
    membersEstimate: '100K+',
    stadium: 'Si Jalak Harupat Stadium',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['Viking', 'Bandung', 'Bobotoh'],
    motto: 'Bobotoh Persib',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Viking is one of the largest supporter groups in the world. Persib Bandung from West Java has millions of fans. The match against Persija is one of the most intense derbies in Asia.",
    values: ['Sundanese Pride', 'Passion', 'Blue'],
    coordinates: { lat: -6.9147, lng: 107.6098 },
  },
  {
    name: 'The Jakmania',
    slug: 'the-jakmania',
    club: 'Persija Jakarta',
    city: 'Jakarta',
    country: 'Indonesia',
    countryCode: 'ID',
    yearFounded: 1997,
    membersEstimate: '80K+',
    stadium: 'Jakarta International Stadium',
    colors: ['#FF6600', '#000000'],
    symbols: ['Jak', 'Tiger', 'Jakarta'],
    motto: 'Persija!',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "The Jakmania supports Persija Jakarta, the capital's club known as Macan Kemayoran (The Tiger). The rivalry with Persib is legendary and often called Indonesia's El Clásico.",
    values: ['Capital', 'Tigers', 'Orange'],
    coordinates: { lat: -6.1215, lng: 106.9083 },
  },
  {
    name: 'Bonek Mania',
    slug: 'bonek-mania',
    club: 'Persebaya Surabaya',
    city: 'Surabaya',
    country: 'Indonesia',
    countryCode: 'ID',
    yearFounded: 1989,
    membersEstimate: '70K+',
    stadium: 'Gelora Bung Tomo Stadium',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Crocodile', 'Bonek', 'Surabaya'],
    motto: 'Green Force',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Bonek (Bondho Nekat - Crazy Capital) represents Persebaya Surabaya, the Green Force from East Java. Known for their incredible away support and green sea of fans.",
    values: ['East Java', 'Green Force', 'Passion'],
    coordinates: { lat: -7.2756, lng: 112.6426 },
  }
];

async function addMoreCountries() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    const allGroups = [
      ...croatiaUltras,
      ...franceUltras,
      ...spainUltras,
      ...netherlandsUltras,
      ...ukraineUltras,
      ...romaniaUltras,
      ...belgiumUltras,
      ...scotlandUltras,
      ...portugalUltras,
      ...indonesiaUltras
    ];

    console.log(`\nAdding ${allGroups.length} groups from 10 countries...\n`);

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
      ultra.isFeatured = ultra.membersEstimate.includes('100K') || ultra.membersEstimate.includes('80K') || ultra.yearFounded < 1970;
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

    const countries = ['HR', 'FR', 'ES', 'NL', 'UA', 'RO', 'BE', 'GB-SCT', 'PT', 'ID'];
    const countryNames = {
      'HR': '🇭🇷 Croatia',
      'FR': '🇫🇷 France',
      'ES': '🇪🇸 Spain',
      'NL': '🇳🇱 Netherlands',
      'UA': '🇺🇦 Ukraine',
      'RO': '🇷🇴 Romania',
      'BE': '🇧🇪 Belgium',
      'GB-SCT': '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland',
      'PT': '🇵🇹 Portugal',
      'ID': '🇮🇩 Indonesia'
    };

    for (const code of countries) {
      const groups = await mongoose.connection.db.collection('ultragroups')
        .find({ countryCode: code })
        .toArray();
      if (groups.length > 0) {
        console.log(`${countryNames[code]}: ${groups.length} groups`);
        groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));
        console.log('');
      }
    }

    await mongoose.disconnect();
    console.log('✅ Done! 10 more countries added successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

addMoreCountries();

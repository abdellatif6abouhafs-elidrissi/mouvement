const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

// ARGENTINA
const argentinaUltras = [
  {
    name: 'La Doce',
    slug: 'la-doce-boca',
    club: 'Boca Juniors',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1925,
    membersEstimate: '100K+',
    stadium: 'La Bombonera',
    colors: ['#0038A8', '#FFD700'],
    symbols: ['Xeneize', 'La Bombonera', '12'],
    motto: 'La mitad más uno',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Doce (The 12th) is the legendary barra brava of Boca Juniors, named because they are considered the '12th player'. Based in La Bombonera, one of the most intimidating stadiums in world football. The Superclásico against River Plate is the biggest derby in the Americas.",
    values: ['Passion', 'La Bombonera', 'Xeneize Pride'],
    coordinates: { lat: -34.6356, lng: -58.3649 },
  },
  {
    name: 'Los Borrachos del Tablón',
    slug: 'los-borrachos-del-tablon',
    club: 'River Plate',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1986,
    membersEstimate: '80K+',
    stadium: 'Estadio Monumental',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Millonario', 'Monumental', 'Gallina'],
    motto: 'River Plate mi buen amigo',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Los Borrachos del Tablón (The Drunks of the Stand) is the main barra brava of River Plate. Based in the massive Estadio Monumental, they are known for their incredible songs. The Superclásico against Boca Juniors is one of the most intense derbies in world football.",
    values: ['Millonario Pride', 'Passion', 'Glory'],
    coordinates: { lat: -34.5453, lng: -58.4498 },
  },
  {
    name: 'La Guardia Imperial',
    slug: 'la-guardia-imperial',
    club: 'Racing Club',
    city: 'Avellaneda',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1967,
    membersEstimate: '50K+',
    stadium: 'Estadio Presidente Perón (El Cilindro)',
    colors: ['#87CEEB', '#FFFFFF'],
    symbols: ['Academia', 'Cilindro', 'Racing'],
    motto: 'Racing corazón',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Guardia Imperial is the historic barra brava of Racing Club de Avellaneda. They fill El Cilindro with passion and are famous for the Clásico de Avellaneda against Independiente.",
    values: ['Academia Pride', 'Tradition', 'Avellaneda'],
    coordinates: { lat: -34.6697, lng: -58.3686 },
  },
  {
    name: 'La Gloriosa Butteler',
    slug: 'la-gloriosa-butteler',
    club: 'San Lorenzo',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1959,
    membersEstimate: '45K+',
    stadium: 'Nuevo Gasómetro',
    colors: ['#0000FF', '#FF0000'],
    symbols: ['Ciclón', 'Cuervo', 'Boedo'],
    motto: 'De Boedo vengo',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Gloriosa Butteler is the passionate barra brava of San Lorenzo from the Boedo neighborhood. Known as Los Cuervos (The Crows). Pope Francis is their most famous fan.",
    values: ['Boedo Identity', 'Working Class', 'Ciclón Spirit'],
    coordinates: { lat: -34.6489, lng: -58.4374 },
  },
  {
    name: 'La Barra del Rojo',
    slug: 'la-barra-del-rojo',
    club: 'Independiente',
    city: 'Avellaneda',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1970,
    membersEstimate: '55K+',
    stadium: 'Estadio Libertadores de América',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Rey de Copas', 'Diablo Rojo', 'Libertadores'],
    motto: 'Rey de Copas',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "La Barra del Rojo supports Independiente, the 'Rey de Copas' - the most successful South American club in Copa Libertadores history with 7 titles.",
    values: ['Continental Glory', 'Diablo Pride', 'Tradition'],
    coordinates: { lat: -34.6703, lng: -58.3714 },
  }
];

// TURKEY
const turkeyUltras = [
  {
    name: 'Çarşı',
    slug: 'carsi-besiktas',
    club: 'Beşiktaş JK',
    city: 'Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 1982,
    membersEstimate: '80K+',
    stadium: 'Vodafone Park',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Black Eagle', 'A', 'Çarşı'],
    motto: 'Çarşı her şeye karşı',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Çarşı is the legendary Ultra group of Beşiktaş, known worldwide for 'Çarşı her şeye karşı' (Çarşı is against everything). Famous for political activism and the 2013 Gezi Park protests.",
    values: ['Anti-Establishment', 'Humor', 'Solidarity', 'Activism'],
    coordinates: { lat: 41.0391, lng: 29.0074 },
  },
  {
    name: 'UltrAslan',
    slug: 'ultraslan-galatasaray',
    club: 'Galatasaray SK',
    city: 'Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 2001,
    membersEstimate: '70K+',
    stadium: 'Rams Park',
    colors: ['#FDB913', '#C8102E'],
    symbols: ['Lion', 'Cim Bom', 'Aslan'],
    motto: 'Tek aşkım Galatasaray',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "UltrAslan is the main Ultra group of Galatasaray, Turkey's most successful club in Europe. Known as 'Welcome to Hell' for visiting European teams.",
    values: ['Passion', 'European Glory', 'Lion Pride'],
    coordinates: { lat: 41.1034, lng: 28.9917 },
  },
  {
    name: 'Genç Fenerbahçeliler',
    slug: 'genc-fenerbahceliler',
    club: 'Fenerbahçe SK',
    city: 'Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 1996,
    membersEstimate: '65K+',
    stadium: 'Şükrü Saracoğlu Stadium',
    colors: ['#FFED00', '#00205B'],
    symbols: ['Canary', 'Fener', 'Kadıköy'],
    motto: 'Fenerbahçe şampiyon',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Genç Fenerbahçeliler is the main Ultra group of Fenerbahçe from the Asian side of Istanbul. The Intercontinental Derby against Galatasaray divides Istanbul.",
    values: ['Kadıköy', 'Canary Pride', 'Asian Side'],
    coordinates: { lat: 40.9878, lng: 29.0364 },
  },
  {
    name: 'Vira Trabzon',
    slug: 'vira-trabzon',
    club: 'Trabzonspor',
    city: 'Trabzon',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 2003,
    membersEstimate: '40K+',
    stadium: 'Şenol Güneş Stadium',
    colors: ['#8B0000', '#0066CC'],
    symbols: ['Black Sea', 'Storm', 'Trabzon'],
    motto: 'Karadeniz fırtınası',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Vira Trabzon represents Trabzonspor, Turkey's only champion from outside Istanbul with 6 titles. The Black Sea Storm.",
    values: ['Black Sea Pride', 'Anti-Istanbul', 'Storm'],
    coordinates: { lat: 41.0027, lng: 39.7168 },
  }
];

// ENGLAND
const englandUltras = [
  {
    name: 'The Kop',
    slug: 'the-kop-liverpool',
    club: 'Liverpool FC',
    city: 'Liverpool',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1906,
    membersEstimate: '50K+',
    stadium: 'Anfield',
    colors: ['#C8102E', '#FFFFFF'],
    symbols: ['Liver Bird', 'YNWA', 'Anfield'],
    motto: "You'll Never Walk Alone",
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "The Kop at Anfield is legendary. Famous for 'You'll Never Walk Alone', the atmosphere for European nights is unmatched. The North West Derby against Manchester United is England's biggest rivalry.",
    values: ['YNWA', 'European Nights', 'Tradition'],
    coordinates: { lat: 53.4308, lng: -2.9609 },
  },
  {
    name: 'Stretford End',
    slug: 'stretford-end-manchester',
    club: 'Manchester United',
    city: 'Manchester',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1910,
    membersEstimate: '45K+',
    stadium: 'Old Trafford',
    colors: ['#DA291C', '#FFFFFF'],
    symbols: ['Red Devil', 'Theatre of Dreams', 'MUFC'],
    motto: 'Glory Glory Man United',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "The Stretford End at Old Trafford, the Theatre of Dreams, is home to Manchester United's most passionate supporters.",
    values: ['Glory', 'Tradition', 'Red Devils'],
    coordinates: { lat: 53.4631, lng: -2.2913 },
  },
  {
    name: 'Holmesdale Fanatics',
    slug: 'holmesdale-fanatics',
    club: 'Crystal Palace',
    city: 'London',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 2005,
    membersEstimate: '8K+',
    stadium: 'Selhurst Park',
    colors: ['#1B458F', '#C4122E'],
    symbols: ['Eagle', 'Holmesdale', 'South London'],
    motto: 'Glad All Over',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Holmesdale Fanatics brought Italian-style Ultra culture to England with choreographies, flags, and drums at Selhurst Park.",
    values: ['Ultra Culture', 'South London', 'Eagles'],
    coordinates: { lat: 51.3983, lng: -0.0858 },
  },
  {
    name: 'The Gallowgate',
    slug: 'the-gallowgate',
    club: 'Newcastle United',
    city: 'Newcastle',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1892,
    membersEstimate: '40K+',
    stadium: "St. James' Park",
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Magpies', 'Toon Army', 'Geordie'],
    motto: 'Howay the Lads',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Newcastle's Toon Army is famous for their incredible away support. The black and white stripes fill the largest stadium in the North East.",
    values: ['Geordie Pride', 'Toon Army', 'Passion'],
    coordinates: { lat: 54.9756, lng: -1.6217 },
  }
];

// BRAZIL
const brazilUltras = [
  {
    name: 'Gaviões da Fiel',
    slug: 'gavioes-da-fiel',
    club: 'Corinthians',
    city: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1969,
    membersEstimate: '120K+',
    stadium: 'Neo Química Arena',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Hawk', 'Fiel', 'Timão'],
    motto: 'Fiel até morrer',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Gaviões da Fiel (Hawks of the Faithful) is the largest organized torcida in the world with over 100,000 members. Also famous for their samba school.",
    values: ['Fidelity', 'Democracy', 'Popular Power'],
    coordinates: { lat: -23.5453, lng: -46.4744 },
  },
  {
    name: 'Torcida Jovem Flamengo',
    slug: 'torcida-jovem-flamengo',
    club: 'Flamengo',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1967,
    membersEstimate: '80K+',
    stadium: 'Maracanã',
    colors: ['#FF0000', '#000000'],
    symbols: ['Vulture', 'Urubu', 'Mengão'],
    motto: 'Uma vez Flamengo, sempre Flamengo',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Flamengo has the largest fanbase in Brazil (over 40 million fans). Their presence in the Maracanã is legendary.",
    values: ['Passion', 'Rio de Janeiro', 'Mengão'],
    coordinates: { lat: -22.9121, lng: -43.2302 },
  },
  {
    name: 'Mancha Verde',
    slug: 'mancha-verde',
    club: 'Palmeiras',
    city: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1983,
    membersEstimate: '70K+',
    stadium: 'Allianz Parque',
    colors: ['#006437', '#FFFFFF'],
    symbols: ['Pig', 'Alviverde', 'Porco'],
    motto: 'Avanti Palestra',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Mancha Verde supports Palmeiras, Brazil's most successful club in recent years with multiple Copa Libertadores titles.",
    values: ['Green Pride', 'Italian Heritage', 'Champions'],
    coordinates: { lat: -23.5275, lng: -46.6783 },
  },
  {
    name: 'Geral do Grêmio',
    slug: 'geral-do-gremio',
    club: 'Grêmio',
    city: 'Porto Alegre',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 2001,
    membersEstimate: '40K+',
    stadium: 'Arena do Grêmio',
    colors: ['#0066CC', '#000000', '#FFFFFF'],
    symbols: ['Tricolor Gaúcho', 'Imortal', 'South'],
    motto: 'Imortal Tricolor',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Geral do Grêmio represents the Immortal Tricolor from Porto Alegre. The Grenal against Internacional is legendary.",
    values: ['Immortal', 'Gaucho Pride', 'South'],
    coordinates: { lat: -29.9728, lng: -51.1947 },
  }
];

// POLAND
const polandUltras = [
  {
    name: 'Żyleta Legia',
    slug: 'zyleta-legia',
    club: 'Legia Warsaw',
    city: 'Warsaw',
    country: 'Poland',
    countryCode: 'PL',
    yearFounded: 1995,
    membersEstimate: '40K+',
    stadium: 'Polish Army Stadium',
    colors: ['#00FF00', '#FFFFFF', '#FF0000'],
    symbols: ['Żyleta', 'Legion', 'L'],
    motto: 'Legia to my',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Żyleta (The Blade) is the most famous Ultra section in Polish football. Known for incredible choreographies and one of the most intense atmospheres in European football.",
    values: ['Intensity', 'Choreography', 'Capital Pride'],
    coordinates: { lat: 52.2155, lng: 21.0378 },
  },
  {
    name: 'Ultras Lech 1982',
    slug: 'ultras-lech-1982',
    club: 'Lech Poznań',
    city: 'Poznań',
    country: 'Poland',
    countryCode: 'PL',
    yearFounded: 1982,
    membersEstimate: '30K+',
    stadium: 'INEA Stadion',
    colors: ['#0066CC', '#FFFFFF'],
    symbols: ['Kolejorz', 'Lech', 'Poznań'],
    motto: 'Kolejorz na zawsze',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Ultras Lech 1982 is one of the oldest organized Ultra groups in Poland, formed during the Solidarity era.",
    values: ['Tradition', 'Solidarity Era', 'Blue Pride'],
    coordinates: { lat: 52.3986, lng: 16.8596 },
  },
  {
    name: 'Wisła Sharks',
    slug: 'wisla-sharks',
    club: 'Wisła Kraków',
    city: 'Kraków',
    country: 'Poland',
    countryCode: 'PL',
    yearFounded: 1997,
    membersEstimate: '25K+',
    stadium: 'Henryk Reyman Stadium',
    colors: ['#FF0000', '#FFFFFF', '#0066CC'],
    symbols: ['Shark', 'White Star', 'Wisła'],
    motto: 'Biała Gwiazda',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Wisła Sharks represent Wisła Kraków, the most successful Polish club with 13 league titles. The Holy War against Cracovia is legendary.",
    values: ['Holy War', 'White Star', 'Kraków Pride'],
    coordinates: { lat: 50.0549, lng: 19.9128 },
  }
];

// SERBIA
const serbiaUltras = [
  {
    name: 'Delije',
    slug: 'delije-red-star',
    club: 'Red Star Belgrade',
    city: 'Belgrade',
    country: 'Serbia',
    countryCode: 'RS',
    yearFounded: 1989,
    membersEstimate: '50K+',
    stadium: 'Rajko Mitić Stadium (Marakana)',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Star', 'Heroes', 'Marakana'],
    motto: 'Samo Zvezda',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Delije (The Heroes) are one of the most famous Ultra groups in the world. They filled the Marakana when Red Star won the 1991 European Cup. The Eternal Derby against Partizan is legendary.",
    values: ['Heroes', 'Champions of Europe', 'Eternal'],
    coordinates: { lat: 44.7833, lng: 20.4669 },
  },
  {
    name: 'Grobari',
    slug: 'grobari-partizan',
    club: 'Partizan Belgrade',
    city: 'Belgrade',
    country: 'Serbia',
    countryCode: 'RS',
    yearFounded: 1970,
    membersEstimate: '45K+',
    stadium: 'Partizan Stadium',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Gravediggers', 'Skull', 'JSD'],
    motto: 'Crno-beli',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Grobari (The Gravediggers) are the Ultra group of Partizan Belgrade, one of the oldest in Eastern Europe. The Eternal Derby against Red Star divides Belgrade.",
    values: ['Gravediggers', 'Black and White', 'Eternal Rivalry'],
    coordinates: { lat: 44.7886, lng: 20.4594 },
  }
];

// GREECE
const greeceUltras = [
  {
    name: 'Gate 7 Olympiakos',
    slug: 'gate-7-olympiakos',
    club: 'Olympiakos FC',
    city: 'Piraeus',
    country: 'Greece',
    countryCode: 'GR',
    yearFounded: 1966,
    membersEstimate: '50K+',
    stadium: 'Karaiskakis Stadium',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Gate 7', 'Thrylos', 'Red'],
    motto: 'Thrylos',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Gate 7 (Thyra 7) is one of the oldest and most famous Ultra groups in Europe. Olympiakos has 47 league titles.",
    values: ['Legend', 'Red Pride', 'Piraeus'],
    coordinates: { lat: 37.9419, lng: 23.6701 },
  },
  {
    name: 'Gate 13 Panathinaikos',
    slug: 'gate-13-panathinaikos',
    club: 'Panathinaikos FC',
    city: 'Athens',
    country: 'Greece',
    countryCode: 'GR',
    yearFounded: 1966,
    membersEstimate: '45K+',
    stadium: 'Apostolos Nikolaidis Stadium',
    colors: ['#00FF00', '#FFFFFF'],
    symbols: ['Gate 13', 'Shamrock', 'Green'],
    motto: 'Panathinaikos for ever',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Gate 13 represents Panathinaikos, one of only five clubs to reach a European Cup final without winning it. The rivalry with Olympiakos divides Athens.",
    values: ['Green Army', 'Athens', 'European Final'],
    coordinates: { lat: 37.9886, lng: 23.7522 },
  },
  {
    name: 'Gate 4 PAOK',
    slug: 'gate-4-paok',
    club: 'PAOK Thessaloniki',
    city: 'Thessaloniki',
    country: 'Greece',
    countryCode: 'GR',
    yearFounded: 1970,
    membersEstimate: '40K+',
    stadium: 'Toumba Stadium',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Gate 4', 'Double-Headed Eagle', 'Toumba'],
    motto: 'PAOK Ole',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Gate 4 makes Toumba Stadium one of the most intimidating venues in European football. PAOK represents the refugees from Constantinople.",
    values: ['Toumba', 'Constantinople Heritage', 'Black and White'],
    coordinates: { lat: 40.6136, lng: 22.9725 },
  },
  {
    name: 'Original 21 AEK',
    slug: 'original-21-aek',
    club: 'AEK Athens',
    city: 'Athens',
    country: 'Greece',
    countryCode: 'GR',
    yearFounded: 1981,
    membersEstimate: '35K+',
    stadium: 'OPAP Arena',
    colors: ['#FFD700', '#000000'],
    symbols: ['Double-Headed Eagle', 'Original 21', 'Constantinople'],
    motto: 'AEK Athens Original',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Original 21 is the main Ultra group of AEK Athens, founded by Greek refugees from Constantinople in 1924.",
    values: ['Constantinople', 'Refugee Heritage', 'Byzantine Eagle'],
    coordinates: { lat: 38.0368, lng: 23.7878 },
  }
];

async function addAllCountries() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    const allGroups = [
      ...argentinaUltras,
      ...turkeyUltras,
      ...englandUltras,
      ...brazilUltras,
      ...polandUltras,
      ...serbiaUltras,
      ...greeceUltras
    ];

    console.log(`\nAdding ${allGroups.length} groups from 7 countries...\n`);

    for (const ultra of allGroups) {
      // Check if already exists by slug OR name
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({
        $or: [{ slug: ultra.slug }, { name: ultra.name }]
      });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      // Add required fields
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
      ultra.isFeatured = ultra.membersEstimate.includes('80K') || ultra.membersEstimate.includes('100K') || ultra.membersEstimate.includes('120K');
      ultra.isVerified = true;
      ultra.isActive = true;
      ultra.status = 'published';

      await mongoose.connection.db.collection('ultragroups').insertOne(ultra);
      console.log(`[ADDED] ${ultra.name} - ${ultra.club} (${ultra.country})`);
    }

    // Count by country
    const count = await mongoose.connection.db.collection('ultragroups').countDocuments();
    console.log(`\n=== Total groups in database: ${count} ===\n`);

    const countries = ['AR', 'TR', 'GB', 'BR', 'PL', 'RS', 'GR'];
    const countryNames = {
      'AR': '🇦🇷 Argentina',
      'TR': '🇹🇷 Turkey',
      'GB': '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
      'BR': '🇧🇷 Brazil',
      'PL': '🇵🇱 Poland',
      'RS': '🇷🇸 Serbia',
      'GR': '🇬🇷 Greece'
    };

    for (const code of countries) {
      const groups = await mongoose.connection.db.collection('ultragroups')
        .find({ countryCode: code })
        .toArray();
      console.log(`${countryNames[code]}: ${groups.length} groups`);
      groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));
      console.log('');
    }

    await mongoose.disconnect();
    console.log('✅ Done! All 7 countries added successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

addAllCountries();

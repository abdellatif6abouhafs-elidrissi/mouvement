const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

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
    colors: ['#00FF00', '#FFFFFF', '#FF0000'], // Green, White, Red
    symbols: ['Żyleta', 'Legion', 'L'],
    motto: 'Legia to my',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Żyleta (The Blade) is the most famous Ultra section in Polish football, based behind the goal at Legia Warsaw's stadium. Known for incredible choreographies, pyro shows, and one of the most intense atmospheres in European football. Their Holy War derby against Polonia Warsaw is legendary.",
    values: ['Intensity', 'Choreography', 'Capital Pride'],
    coordinates: { lat: 52.2155, lng: 21.0378 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#0066CC', '#FFFFFF'], // Blue and White
    symbols: ['Kolejorz', 'Lech', 'Poznań'],
    motto: 'Kolejorz na zawsze',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Ultras Lech 1982 is one of the oldest organized Ultra groups in Poland, formed during the Solidarity era. Known as Kolejorz (Railwaymen), they represent Western Poland's biggest club. Their choreographies and away support are among the best in the country.",
    values: ['Tradition', 'Solidarity Era', 'Blue Pride'],
    coordinates: { lat: 52.3986, lng: 16.8596 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#FF0000', '#FFFFFF', '#0066CC'], // Red, White, Blue
    symbols: ['Shark', 'White Star', 'Wisła'],
    motto: 'Biała Gwiazda',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Wisła Sharks represent Wisła Kraków, the most successful Polish club with 13 league titles. The Holy War (Święta Wojna) against Cracovia is one of Europe's oldest and most intense derbies. Known for their fierce loyalty despite recent troubles.",
    values: ['Holy War', 'White Star', 'Kraków Pride'],
    coordinates: { lat: 50.0549, lng: 19.9128 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Jude Gang Cracovia',
    slug: 'jude-gang-cracovia',
    club: 'Cracovia',
    city: 'Kraków',
    country: 'Poland',
    countryCode: 'PL',
    yearFounded: 1996,
    membersEstimate: '20K+',
    stadium: 'Marshal Józef Piłsudski Stadium',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Pasy', 'Cracovia', 'Stripes'],
    motto: 'Cracovia Pany',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Jude Gang represents Cracovia, the oldest Polish football club (founded 1906). The Holy War (Święta Wojna) against Wisła Kraków has been fought since 1908, making it one of the oldest derbies in world football. Known as Pasy (The Stripes).",
    values: ['Oldest Club', 'Holy War', 'Tradition'],
    coordinates: { lat: 50.0514, lng: 19.9119 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Górnik Zabrze Ultras',
    slug: 'gornik-zabrze-ultras',
    club: 'Górnik Zabrze',
    city: 'Zabrze',
    country: 'Poland',
    countryCode: 'PL',
    yearFounded: 1990,
    membersEstimate: '22K+',
    stadium: 'Arena Zabrze',
    colors: ['#0066CC', '#FFFFFF', '#FF0000'], // Blue, White, Red
    symbols: ['Górnik', 'Miners', 'Silesia'],
    motto: 'Górnikiem być',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Górnik Zabrze Ultras represent the 14-time Polish champions from the Silesian industrial heartland. Once the most successful club in Poland, their miners' identity remains strong. The Silesian derbies against other Upper Silesian clubs are legendary.",
    values: ['Mining Heritage', 'Silesia', 'Champions'],
    coordinates: { lat: 50.2994, lng: 18.7908 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Śląsk Wrocław Ultras',
    slug: 'slask-wroclaw-ultras',
    club: 'Śląsk Wrocław',
    city: 'Wrocław',
    country: 'Poland',
    countryCode: 'PL',
    yearFounded: 1995,
    membersEstimate: '18K+',
    stadium: 'Tarczyński Arena',
    colors: ['#00FF00', '#FFFFFF', '#FF0000'], // Green, White, Red
    symbols: ['WKS', 'Wojskowi', 'Army'],
    motto: 'Śląsk Wrocław WKS',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Śląsk Wrocław Ultras represent the Army club from Lower Silesia's capital. Known as Wojskowi (Military), they carry the tradition of the Polish Army sports clubs. Their green wave fills the stadium for every match.",
    values: ['Military Tradition', 'Lower Silesia', 'Green Army'],
    coordinates: { lat: 51.1418, lng: 16.9438 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Jagiellonia Białystok Ultras',
    slug: 'jagiellonia-bialystok-ultras',
    club: 'Jagiellonia Białystok',
    city: 'Białystok',
    country: 'Poland',
    countryCode: 'PL',
    yearFounded: 1998,
    membersEstimate: '15K+',
    stadium: 'Stadion Miejski',
    colors: ['#FFD700', '#FF0000'], // Yellow and Red
    symbols: ['Jaga', 'Żubry', 'Podlasie'],
    motto: 'Jaga!',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Jagiellonia Białystok Ultras represent the pride of Podlasie in northeastern Poland. Named after the Jagiellonian dynasty, they carry the colors of the historical Grand Duchy of Lithuania. Recent success has made them a growing force.",
    values: ['Podlasie', 'Jagiellonian', 'Eastern Poland'],
    coordinates: { lat: 53.1125, lng: 23.1486 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Pogoń Szczecin Ultras',
    slug: 'pogon-szczecin-ultras',
    club: 'Pogoń Szczecin',
    city: 'Szczecin',
    country: 'Poland',
    countryCode: 'PL',
    yearFounded: 1997,
    membersEstimate: '16K+',
    stadium: 'Florian Krygier Stadium',
    colors: ['#0066CC', '#800020'], // Blue and Burgundy
    symbols: ['Portowcy', 'Baltic', 'Szczecin'],
    motto: 'Portowcy na zawsze',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Pogoń Szczecin Ultras represent the Dockers from Poland's main port city on the Baltic Sea. With their maritime identity, they represent Western Pomerania and have grown in recent years as the club challenges for titles.",
    values: ['Maritime', 'Baltic Pride', 'Dockers'],
    coordinates: { lat: 53.4277, lng: 14.5428 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  }
];

async function addPolandUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    for (const ultra of polandUltras) {
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      ultra.createdAt = new Date();
      ultra.updatedAt = new Date();
      ultra.author = authorId;
      ultra.views = Math.floor(Math.random() * 60000) + 10000;
      ultra.likes = Math.floor(Math.random() * 12000) + 2000;
      ultra.tifos = [];
      ultra.gallery = [];
      ultra.rivals = [];
      ultra.friends = [];

      await mongoose.connection.db.collection('ultragroups').insertOne(ultra);
      console.log(`[ADDED] ${ultra.name} - ${ultra.club} (${ultra.city})`);
    }

    const count = await mongoose.connection.db.collection('ultragroups').countDocuments();
    console.log(`\n=== Total groups in database: ${count} ===`);

    const groups = await mongoose.connection.db.collection('ultragroups')
      .find({ countryCode: 'PL' })
      .toArray();
    console.log(`\n🇵🇱 Polish groups: ${groups.length}`);
    groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Polish Ultras added successfully! 🇵🇱');
  } catch (error) {
    console.error('Error:', error);
  }
}

addPolandUltras();

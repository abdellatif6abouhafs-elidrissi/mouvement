const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

const germanUltras = [
  {
    name: 'The Unity Dortmund',
    slug: 'the-unity-dortmund',
    club: 'Borussia Dortmund',
    city: 'Dortmund',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2001,
    membersEstimate: '60K+',
    stadium: 'Signal Iduna Park (Westfalenstadion)',
    colors: ['#FFD700', '#000000'], // Yellow and Black
    symbols: ['Yellow Wall', 'BVB', 'Südtribüne'],
    motto: 'Echte Liebe (True Love)',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "The Unity is the main Ultra group of Borussia Dortmund, founded in 2001. They are the driving force behind the famous Südtribüne (Yellow Wall), the largest standing terrace in Europe with 25,000 fans. Known for spectacular choreographies and unwavering support, they represent the heart of German Ultra culture.",
    values: ['Unity', 'Passion', 'Tradition', 'Against Modern Football'],
    coordinates: { lat: 51.4926, lng: 7.4519 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Schickeria München',
    slug: 'schickeria-munchen',
    club: 'Bayern Munich',
    city: 'Munich',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2002,
    membersEstimate: '30K+',
    stadium: 'Allianz Arena',
    colors: ['#DC052D', '#FFFFFF'], // Red and White
    symbols: ['Bavaria', 'Südkurve', 'FCB'],
    motto: 'Südkurve München',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Schickeria München is the leading Ultra group of Bayern Munich, based in the famous Südkurve. Founded in 2002, they brought Italian-style Ultra culture to Bavaria. Despite supporting Germany's most successful club, they maintain anti-commercial values and fight against modern football.",
    values: ['Bavarian Pride', 'Anti-Commercial', 'Tradition'],
    coordinates: { lat: 48.2188, lng: 11.6247 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Gelsenkirchen',
    slug: 'ultras-gelsenkirchen',
    club: 'FC Schalke 04',
    city: 'Gelsenkirchen',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1997,
    membersEstimate: '35K+',
    stadium: 'Veltins-Arena',
    colors: ['#004D9D', '#FFFFFF'], // Royal Blue and White
    symbols: ['Miners', 'Nordkurve', 'S04'],
    motto: 'Blau und Weiß ein Leben lang',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Ultras Gelsenkirchen, founded in 1997, is one of the oldest Ultra groups in Germany. Supporting Schalke 04 from the Ruhr industrial heartland, they represent working-class pride. The Nordkurve is famous for its atmosphere and the intense Revierderby against Dortmund.",
    values: ['Working Class', 'Loyalty', 'Ruhr Pride'],
    coordinates: { lat: 51.5544, lng: 7.0678 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Frankfurt',
    slug: 'ultras-frankfurt',
    club: 'Eintracht Frankfurt',
    city: 'Frankfurt',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2001,
    membersEstimate: '25K+',
    stadium: 'Deutsche Bank Park (Waldstadion)',
    colors: ['#E1000F', '#000000'], // Red and Black
    symbols: ['Eagle', 'Adler', 'SGE'],
    motto: 'Im Herzen von Europa',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Ultras Frankfurt is the main Ultra group of Eintracht Frankfurt. Known for their incredible away support and European travels, they gained worldwide fame during the 2022 Europa League triumph when 100,000 Eintracht fans invaded Barcelona and Sevilla.",
    values: ['Travel', 'European Spirit', 'Unity'],
    coordinates: { lat: 50.0686, lng: 8.6455 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Wilde Horde',
    slug: 'wilde-horde',
    club: '1. FC Köln',
    city: 'Cologne',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2001,
    membersEstimate: '20K+',
    stadium: 'RheinEnergieStadion',
    colors: ['#ED1C24', '#FFFFFF'], // Red and White
    symbols: ['Billy Goat', 'Geißbock', 'Cathedral'],
    motto: 'Mer stonn zo dir, FC Kölle',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Wilde Horde (Wild Horde) is the leading Ultra group of 1. FC Köln. Founded in 2001, they represent the carnival city's passionate football culture. Known for their humor, creativity, and the famous Billy Goat mascot Hennes.",
    values: ['Carnival Spirit', 'Humor', 'Köln Pride'],
    coordinates: { lat: 50.9335, lng: 6.8747 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Sottocultura Mönchengladbach',
    slug: 'sottocultura-monchengladbach',
    club: 'Borussia Mönchengladbach',
    city: 'Mönchengladbach',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1999,
    membersEstimate: '18K+',
    stadium: 'Borussia-Park',
    colors: ['#000000', '#FFFFFF', '#00FF00'], // Black, White, Green
    symbols: ['Foal', 'Die Fohlen', 'BMG'],
    motto: 'Die Seele brennt',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Sottocultura is the main Ultra group of Borussia Mönchengladbach, known as Die Fohlen (The Foals). One of the most organized groups in Germany, they maintain strong anti-commercial values and have a fierce rivalry with Köln.",
    values: ['Anti-Commercial', 'Organization', 'Tradition'],
    coordinates: { lat: 51.1747, lng: 6.3855 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Chosen Few Hamburg',
    slug: 'chosen-few-hamburg',
    club: 'Hamburger SV',
    city: 'Hamburg',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2000,
    membersEstimate: '22K+',
    stadium: 'Volksparkstadion',
    colors: ['#0066B3', '#FFFFFF', '#000000'], // Blue, White, Black
    symbols: ['Skull', 'HSV', 'Diamond'],
    motto: 'Hamburg meine Perle',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Chosen Few is the main Ultra group of Hamburger SV. Despite the club's relegation from the Bundesliga in 2018, they maintained incredible support. Known for their loyalty through tough times and the famous Volksparkstadion atmosphere.",
    values: ['Loyalty', 'Through Thick and Thin', 'Hamburg Pride'],
    coordinates: { lat: 53.5872, lng: 9.8985 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Wanderers Bremen',
    slug: 'wanderers-bremen',
    club: 'Werder Bremen',
    city: 'Bremen',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1999,
    membersEstimate: '15K+',
    stadium: 'Weserstadion (wohninvest)',
    colors: ['#00FF00', '#FFFFFF'], // Green and White
    symbols: ['Key', 'Bremen Musicians', 'Weser'],
    motto: 'Lebenslang Grün-Weiß',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Wanderers Bremen is the leading Ultra group of Werder Bremen. Based in the Ostkurve, they represent the Hanseatic city's proud football tradition. Known for their creative choreographies and strong anti-fascist stance.",
    values: ['Hanseatic Pride', 'Anti-Fascism', 'Creativity'],
    coordinates: { lat: 53.0664, lng: 8.8378 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Commando Cannstatt',
    slug: 'commando-cannstatt',
    club: 'VfB Stuttgart',
    city: 'Stuttgart',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1997,
    membersEstimate: '20K+',
    stadium: 'MHPArena (Mercedes-Benz Arena)',
    colors: ['#E32219', '#FFFFFF'], // Red and White
    symbols: ['Cannstatter Kurve', 'VfB', 'Swabian'],
    motto: 'Für den VfB',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Commando Cannstatt is one of the oldest Ultra groups in Germany, founded in 1997. They lead the famous Cannstatter Kurve at VfB Stuttgart. Known as pioneers of German Ultra culture with strong Italian influences.",
    values: ['Pioneer Spirit', 'Swabian Pride', 'Tradition'],
    coordinates: { lat: 48.7925, lng: 9.2319 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Harlekins Berlin',
    slug: 'harlekins-berlin',
    club: 'Hertha BSC',
    city: 'Berlin',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1998,
    membersEstimate: '15K+',
    stadium: 'Olympiastadion Berlin',
    colors: ['#005CA9', '#FFFFFF'], // Blue and White
    symbols: ['Harlequin', 'Bear', 'Ostkurve'],
    motto: 'Ha Ho He - Hertha BSC',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Harlekins Berlin is the main Ultra group of Hertha BSC. Based in the Ostkurve of the famous Olympiastadion, they represent Berlin's traditional club in the city's divided football landscape with their rivalry against Union Berlin.",
    values: ['Berlin Tradition', 'Blue White Pride', 'Ostkurve'],
    coordinates: { lat: 52.5147, lng: 13.2395 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Wuhlesyndikat',
    slug: 'wuhlesyndikat',
    club: '1. FC Union Berlin',
    city: 'Berlin',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2002,
    membersEstimate: '18K+',
    stadium: 'Stadion An der Alten Försterei',
    colors: ['#EB1923', '#FFFFFF'], // Red and White
    symbols: ['Iron', 'Köpenick', 'Alte Försterei'],
    motto: 'Eisern Union',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Wuhlesyndikat is the main Ultra group of 1. FC Union Berlin, the cult club from East Berlin. Their stadium An der Alten Försterei was rebuilt by fans themselves. Known for their unique traditions including the annual Christmas carol singing.",
    values: ['Fan Ownership', 'East Berlin', 'DIY Spirit'],
    coordinates: { lat: 52.4572, lng: 13.5681 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Dynamo Dresden',
    slug: 'ultras-dynamo-dresden',
    club: 'Dynamo Dresden',
    city: 'Dresden',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2001,
    membersEstimate: '25K+',
    stadium: 'Rudolf-Harbig-Stadion',
    colors: ['#FFD700', '#000000'], // Yellow and Black
    symbols: ['K-Block', 'Saxon', 'Dynamic'],
    motto: 'K-Block bleibt stehen',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Ultras Dynamo Dresden, based in the legendary K-Block, represents East Germany's most passionate fanbase. Known for incredible away support and atmosphere, they carry the pride of Saxon football. The K-Block is considered one of the most intense sections in German football.",
    values: ['East German Pride', 'Intensity', 'Saxon Tradition'],
    coordinates: { lat: 51.0405, lng: 13.7498 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultrà Sankt Pauli',
    slug: 'ultra-sankt-pauli',
    club: 'FC St. Pauli',
    city: 'Hamburg',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2002,
    membersEstimate: '15K+',
    stadium: 'Millerntor-Stadion',
    colors: ['#6E3B2F', '#FFFFFF'], // Brown and White
    symbols: ['Skull and Crossbones', 'Jolly Roger', 'Millerntor'],
    motto: 'Kein Mensch ist illegal',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Ultrà Sankt Pauli represents the cult club from Hamburg's famous Reeperbahn district. Known worldwide for their left-wing, anti-fascist, and anti-racist stance, they are unique in world football. The skull and crossbones flag has become a global symbol of alternative football culture.",
    values: ['Anti-Fascism', 'Anti-Racism', 'Alternative Culture', 'Solidarity'],
    coordinates: { lat: 53.5544, lng: 9.9670 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Generation Lautern',
    slug: 'generation-lautern',
    club: '1. FC Kaiserslautern',
    city: 'Kaiserslautern',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2000,
    membersEstimate: '20K+',
    stadium: 'Fritz-Walter-Stadion',
    colors: ['#E30613', '#FFFFFF'], // Red and White
    symbols: ['Devil', 'Betzenberg', 'Westkurve'],
    motto: 'Auf dem Betzenberg',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Generation Lautern represents 1. FC Kaiserslautern from the legendary Betzenberg. The club that won the Bundesliga as a newly promoted team in 1998 has a fanatical following. Despite lower league struggles, the Westkurve remains one of the most atmospheric in Germany.",
    values: ['Betzenberg Spirit', 'Loyalty', 'Red Devils'],
    coordinates: { lat: 49.4345, lng: 7.7773 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Inferno Cottbus',
    slug: 'inferno-cottbus',
    club: 'Energie Cottbus',
    city: 'Cottbus',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1998,
    membersEstimate: '10K+',
    stadium: 'Stadion der Freundschaft',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Energy', 'Lausitz', 'East'],
    motto: 'Energie aus der Lausitz',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Inferno Cottbus is the Ultra group of Energie Cottbus from the Lausitz region in East Germany. Despite being a smaller club, they have one of the most passionate fanbases in Eastern Germany with incredible atmosphere.",
    values: ['Eastern Pride', 'Passion', 'Lausitz Identity'],
    coordinates: { lat: 51.7569, lng: 14.3229 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  }
];

async function addGermanUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Get admin user ID
    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    for (const ultra of germanUltras) {
      // Check if already exists
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

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

      await mongoose.connection.db.collection('ultragroups').insertOne(ultra);
      console.log(`[ADDED] ${ultra.name} - ${ultra.club} (${ultra.city})`);
    }

    // Count total
    const count = await mongoose.connection.db.collection('ultragroups').countDocuments();
    console.log(`\n=== Total groups in database: ${count} ===`);

    // List all German groups
    const germanGroups = await mongoose.connection.db.collection('ultragroups')
      .find({ countryCode: 'DE' })
      .toArray();
    console.log(`\n🇩🇪 German groups: ${germanGroups.length}`);
    germanGroups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! German Ultras added successfully! 🇩🇪');
  } catch (error) {
    console.error('Error:', error);
  }
}

addGermanUltras();

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

const italianUltras = [
  {
    name: 'Curva Nord Inter',
    slug: 'curva-nord-inter',
    club: 'Inter Milan',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1969,
    membersEstimate: '50K+',
    stadium: 'San Siro (Giuseppe Meazza)',
    colors: ['#0066CC', '#000000'], // Blue and Black (Nerazzurri)
    symbols: ['Biscione', 'Snake', 'Nord'],
    motto: 'Pazza Inter amala',
    logo: '/images/groups/curva-nord-inter-14.webp',
    coverImage: '/images/groups/curva-nord-inter-14.webp',
    history: "Curva Nord Inter, founded in 1969, is one of the oldest Ultra groups in the world. Supporting Inter Milan (FC Internazionale), they occupy the North Stand at San Siro. Known for their spectacular choreographies and the Derby della Madonnina against AC Milan, they represent the essence of Italian Ultra culture.",
    values: ['History', 'Passion', 'Nerazzurri Pride', 'Tradition'],
    coordinates: { lat: 45.4781, lng: 9.1240 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Curva Sud Roma',
    slug: 'curva-sud-roma',
    club: 'AS Roma',
    city: 'Rome',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1973,
    membersEstimate: '45K+',
    stadium: 'Stadio Olimpico',
    colors: ['#8B0000', '#FFD700'], // Maroon and Gold (Giallorossi)
    symbols: ['Wolf', 'Romulus', 'SPQR'],
    motto: 'Roma Roma Roma core de sta città',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Curva Sud Roma, founded in 1973, supports AS Roma from the South Stand of the Stadio Olimpico. The fierce Derby della Capitale against Lazio is one of the most intense in world football. Known for their passionate songs, tifos, and the iconic wolf symbol of Rome.",
    values: ['Rome Pride', 'Passion', 'Tradition', 'Romanista'],
    coordinates: { lat: 41.9341, lng: 12.4547 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Irriducibili Lazio',
    slug: 'irriducibili-lazio',
    club: 'SS Lazio',
    city: 'Rome',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1987,
    membersEstimate: '35K+',
    stadium: 'Stadio Olimpico',
    colors: ['#87CEEB', '#FFFFFF'], // Sky Blue and White (Biancocelesti)
    symbols: ['Eagle', 'Aquila', 'Nord'],
    motto: 'Lazio è solo biancoceleste',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Irriducibili (The Irreducibles), founded in 1987, is the most famous Ultra group of SS Lazio. Occupying Curva Nord at the Stadio Olimpico, they are known for their eagle symbol and the intense Derby della Capitale rivalry with Roma. A historically significant group in Italian Ultra culture.",
    values: ['Pride', 'Loyalty', 'Aquila', 'Biancoceleste'],
    coordinates: { lat: 41.9341, lng: 12.4547 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Curva A Napoli',
    slug: 'curva-a-napoli',
    club: 'SSC Napoli',
    city: 'Naples',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1972,
    membersEstimate: '40K+',
    stadium: 'Stadio Diego Armando Maradona',
    colors: ['#00BFFF', '#FFFFFF'], // Light Blue and White (Azzurri)
    symbols: ['Vesuvius', 'Donkey', 'Maradona'],
    motto: 'Napoli nel cuore',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Curva A and Curva B Napoli represent the passionate supporters of SSC Napoli. The stadium now bears the name of the legendary Diego Maradona. Neapolitan Ultras are known for their intense passion, creativity, and the unique southern Italian atmosphere they create at every match.",
    values: ['Naples Pride', 'Maradona Legacy', 'Passion', 'South'],
    coordinates: { lat: 40.8280, lng: 14.1931 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Drughi Juventus',
    slug: 'drughi-juventus',
    club: 'Juventus FC',
    city: 'Turin',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1981,
    membersEstimate: '50K+',
    stadium: 'Allianz Stadium',
    colors: ['#000000', '#FFFFFF'], // Black and White (Bianconeri)
    symbols: ['Zebra', 'Old Lady', 'Drughi'],
    motto: 'Fino alla fine',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Drughi (named after A Clockwork Orange), founded in 1981, is the main Ultra group in Curva Scirea at Juventus. Supporting Italy's most successful club, they bring atmosphere to the Allianz Stadium and are known for their organized support and the Derby della Mole against Torino.",
    values: ['Success', 'Tradition', 'Bianconeri', 'Fino alla Fine'],
    coordinates: { lat: 45.1096, lng: 7.6413 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Curva Fiesole',
    slug: 'curva-fiesole',
    club: 'ACF Fiorentina',
    city: 'Florence',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1973,
    membersEstimate: '30K+',
    stadium: 'Stadio Artemio Franchi',
    colors: ['#800080', '#FFFFFF'], // Purple and White (Viola)
    symbols: ['Lily', 'Fiesole', 'Florence'],
    motto: 'Viola nel cuore',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Curva Fiesole represents ACF Fiorentina from the beautiful city of Florence. Named after the hill of Fiesole overlooking the city, they bring the artistic spirit of Florence to Italian football. The purple color (Viola) is unique in Italian football.",
    values: ['Florence Pride', 'Art', 'Viola', 'Tradition'],
    coordinates: { lat: 43.7808, lng: 11.2823 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Atalanta Curva Nord',
    slug: 'atalanta-curva-nord',
    club: 'Atalanta BC',
    city: 'Bergamo',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1969,
    membersEstimate: '25K+',
    stadium: 'Gewiss Stadium',
    colors: ['#000000', '#0066CC'], // Black and Blue (Nerazzurri)
    symbols: ['Goddess', 'Bergamo', 'Nord'],
    motto: 'La Dea',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Curva Nord Bergamo, founded in 1969, supports Atalanta BC, known as La Dea (The Goddess). One of the most passionate fanbases in Italy, they have seen their club rise from Serie B to Champions League football. The Bergamo ultras are known for their loyalty through thick and thin.",
    values: ['Loyalty', 'La Dea', 'Bergamo Pride', 'Rise'],
    coordinates: { lat: 45.7089, lng: 9.6808 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Gradinata Nord Genoa',
    slug: 'gradinata-nord-genoa',
    club: 'Genoa CFC',
    city: 'Genoa',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1973,
    membersEstimate: '20K+',
    stadium: 'Stadio Luigi Ferraris',
    colors: ['#8B0000', '#0000CD'], // Red and Blue (Rossoblù)
    symbols: ['Griffin', 'Lighthouse', 'Genoa'],
    motto: 'Genoa nel sangue',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Gradinata Nord supports Genoa CFC, the oldest football club in Italy (founded 1893). The Derby della Lanterna against Sampdoria is one of the most passionate local derbies. Genoa's ultras represent over 130 years of football history.",
    values: ['History', 'Oldest Club', 'Derby', 'Rossoblù'],
    coordinates: { lat: 44.4165, lng: 8.9526 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Tito Cucchiaroni',
    slug: 'ultras-sampdoria',
    club: 'UC Sampdoria',
    city: 'Genoa',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1969,
    membersEstimate: '18K+',
    stadium: 'Stadio Luigi Ferraris',
    colors: ['#0066CC', '#FFFFFF', '#FF0000', '#000000'], // Blue, White, Red, Black
    symbols: ['Sailor', 'Baciccia', 'Samp'],
    motto: 'Doria!',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Ultras Sampdoria, named after club legend Tito Cucchiaroni, support UC Sampdoria. Sharing the Luigi Ferraris stadium with rivals Genoa, the Derby della Lanterna is their biggest match. The unique four-colored kit represents Genoa's maritime tradition.",
    values: ['Derby', 'Tradition', 'Doria', 'Maritime'],
    coordinates: { lat: 44.4165, lng: 8.9526 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Curva Sud Verona',
    slug: 'curva-sud-verona',
    club: 'Hellas Verona',
    city: 'Verona',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1971,
    membersEstimate: '20K+',
    stadium: 'Stadio Marcantonio Bentegodi',
    colors: ['#FFD700', '#0000CD'], // Yellow and Blue (Gialloblu)
    symbols: ['Scala', 'Mastiff', 'Verona'],
    motto: 'Hellas Verona',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Curva Sud Verona supports Hellas Verona, the 1985 Serie A champions. Known for their intense atmosphere and the Mastiff (Mastino) symbol, they represent the proud city of Romeo and Juliet. The Gialloblu are known for their hardcore Ultra mentality.",
    values: ['1985 Champions', 'Gialloblu', 'Hardcore', 'Verona Pride'],
    coordinates: { lat: 45.4353, lng: 10.9686 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Brigate Gialloblu',
    slug: 'brigate-gialloblu',
    club: 'Parma Calcio',
    city: 'Parma',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1977,
    membersEstimate: '15K+',
    stadium: 'Stadio Ennio Tardini',
    colors: ['#FFD700', '#0000CD'], // Yellow and Blue
    symbols: ['Cross', 'Parma', 'Tardini'],
    motto: 'Forza Parma',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Brigate Gialloblu supports Parma Calcio, the club that won UEFA Cup and other European trophies in the 1990s. Despite the club's bankruptcy and rebirth from Serie D, the ultras remained loyal through the darkest times.",
    values: ['Loyalty', 'Rebirth', 'European Glory', 'Parma'],
    coordinates: { lat: 44.7953, lng: 10.3381 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Brescia 1911',
    slug: 'brescia-1911',
    club: 'Brescia Calcio',
    city: 'Brescia',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1980,
    membersEstimate: '18K+',
    stadium: 'Stadio Mario Rigamonti',
    colors: ['#0066CC', '#FFFFFF'], // Blue and White
    symbols: ['Lioness', 'Brescia', '1911'],
    motto: 'Le Rondinelle',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Brescia 1911 represents Brescia Calcio, known as Le Rondinelle (The Swallows). From the industrial city in Lombardy, they have a strong working-class identity and are known for their hardcore support through the club's ups and downs.",
    values: ['Working Class', 'Loyalty', 'Brescia Pride'],
    coordinates: { lat: 45.5282, lng: 10.2118 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Granata Korps',
    slug: 'granata-korps',
    club: 'Torino FC',
    city: 'Turin',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1976,
    membersEstimate: '22K+',
    stadium: 'Stadio Olimpico Grande Torino',
    colors: ['#8B0000'], // Maroon (Granata)
    symbols: ['Bull', 'Superga', 'Grande Torino'],
    motto: 'Sempre e ovunque, solo il Toro',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Granata Korps supports Torino FC, honoring the memory of the Grande Torino team lost in the 1949 Superga air disaster. The Derby della Mole against Juventus is one of Italy's most passionate. Torino fans are known for their loyalty and connection to the club's tragic but glorious history.",
    values: ['Superga Memory', 'Grande Torino', 'Derby', 'Granata Pride'],
    coordinates: { lat: 45.0419, lng: 7.6500 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Curva Nord Bologna',
    slug: 'curva-nord-bologna',
    club: 'Bologna FC',
    city: 'Bologna',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1974,
    membersEstimate: '20K+',
    stadium: 'Stadio Renato Dall\'Ara',
    colors: ['#FF0000', '#0000CD'], // Red and Blue (Rossoblù)
    symbols: ['Bologna', 'Forever Ultras'],
    motto: 'Bologna siamo noi',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Forever Ultras and Curva Nord represent Bologna FC, a historic Italian club with 7 Serie A titles. From the cultural capital of Emilia-Romagna, they bring passionate support and are known for their tifos and chants.",
    values: ['History', 'Bologna Pride', 'Rossoblù', 'Passion'],
    coordinates: { lat: 44.4925, lng: 11.3097 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  }
];

async function addItalianUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Get admin user ID
    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    // Update existing Curva Sud Milano
    await mongoose.connection.db.collection('ultragroups').updateOne(
      { slug: 'curva-sud-milano' },
      {
        $set: {
          history: "Curva Sud Milano, founded in 1968, is one of the founding Ultra groups in world football. Supporting AC Milan, they occupy the South Stand at the legendary San Siro stadium. Known for spectacular choreographies, the Derby della Madonnina against Inter, and influencing Ultra culture globally. The red and black colors represent one of the most successful clubs in European football history.",
          yearFounded: 1968,
          membersEstimate: '45K+',
          motto: 'Milan siamo noi',
          isFeatured: true,
          isVerified: true,
          isActive: true
        }
      }
    );
    console.log('[UPDATED] Curva Sud Milano');

    for (const ultra of italianUltras) {
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
      ultra.views = Math.floor(Math.random() * 80000) + 20000;
      ultra.likes = Math.floor(Math.random() * 15000) + 5000;
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

    // List all Italian groups
    const italianGroups = await mongoose.connection.db.collection('ultragroups')
      .find({ countryCode: 'IT' })
      .toArray();
    console.log(`\n🇮🇹 Italian groups: ${italianGroups.length}`);
    italianGroups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Italy Ultras added successfully! 🇮🇹');
  } catch (error) {
    console.error('Error:', error);
  }
}

addItalianUltras();

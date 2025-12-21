const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

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
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Black Eagle', 'A', 'Çarşı'],
    motto: 'Çarşı her şeye karşı',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Çarşı is the legendary Ultra group of Beşiktaş, known worldwide for their slogan 'Çarşı her şeye karşı' (Çarşı is against everything). They are famous for their political activism, humor, and anti-establishment stance. They played a major role in the 2013 Gezi Park protests. The 'A' symbol represents anarchy.",
    values: ['Anti-Establishment', 'Humor', 'Solidarity', 'Activism'],
    coordinates: { lat: 41.0391, lng: 29.0074 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    stadium: 'Rams Park (Ali Sami Yen)',
    colors: ['#FDB913', '#C8102E'], // Yellow and Red
    symbols: ['Lion', 'Cim Bom', 'Aslan'],
    motto: 'Tek aşkım Galatasaray',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "UltrAslan is the main Ultra group of Galatasaray, Turkey's most successful club in Europe. Named after the lion (Aslan) symbol, they create an incredible atmosphere known as 'Welcome to Hell' for visiting European teams. The Intercontinental Derby against Fenerbahçe is one of the fiercest in world football.",
    values: ['Passion', 'European Glory', 'Lion Pride'],
    coordinates: { lat: 41.1034, lng: 28.9917 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#FFED00', '#00205B'], // Yellow and Navy Blue
    symbols: ['Canary', 'Fener', 'Kadıköy'],
    motto: 'Fenerbahçe şampiyon',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Genç Fenerbahçeliler (Young Fenerbahçe Fans) is the main Ultra group of Fenerbahçe from the Asian side of Istanbul. Known as the Canaries, they make Kadıköy a fortress. The Intercontinental Derby against Galatasaray divides Istanbul and is one of the most intense derbies in world football.",
    values: ['Kadıköy', 'Canary Pride', 'Asian Side'],
    coordinates: { lat: 40.9878, lng: 29.0364 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#8B0000', '#0066CC'], // Burgundy and Blue
    symbols: ['Black Sea', 'Storm', 'Trabzon'],
    motto: 'Karadeniz fırtınası',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Vira Trabzon represents Trabzonspor from the Black Sea coast. Known as the Black Sea Storm, they represent the proud footballing tradition of Turkey's only champion from outside Istanbul (6 titles). The rivalry with the Istanbul clubs is legendary.",
    values: ['Black Sea Pride', 'Anti-Istanbul', 'Storm'],
    coordinates: { lat: 41.0027, lng: 39.7168 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Teksas Bursaspor',
    slug: 'teksas-bursaspor',
    club: 'Bursaspor',
    city: 'Bursa',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 1980,
    membersEstimate: '30K+',
    stadium: 'Timsah Arena',
    colors: ['#00FF00', '#FFFFFF'], // Green and White
    symbols: ['Crocodile', 'Timsah', 'Green'],
    motto: 'Yeşil beyaz aşk',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Teksas is the famous Ultra group of Bursaspor, the 2010 Süper Lig champions who broke the Istanbul monopoly. Known as the Crocodiles (Timsah), their green tide is famous throughout Turkey. The Timsah Arena is one of the most atmospheric stadiums in the country.",
    values: ['Green Pride', 'Champions 2010', 'Bursa'],
    coordinates: { lat: 40.2114, lng: 29.0339 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ankaragücü Ultras',
    slug: 'ankaragucu-ultras',
    club: 'MKE Ankaragücü',
    city: 'Ankara',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 1996,
    membersEstimate: '25K+',
    stadium: 'Eryaman Stadyumu',
    colors: ['#FFD700', '#000080'], // Yellow and Navy
    symbols: ['Capital', 'Ankara', 'Eagle'],
    motto: 'Başkentin takımı',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Ankaragücü Ultras represent the capital city's oldest club. With a fierce rivalry against Gençlerbirliği in the Ankara Derby, they represent the pride of Turkey's capital against Istanbul's dominance of Turkish football.",
    values: ['Capital Pride', 'Tradition', 'Ankara'],
    coordinates: { lat: 39.9208, lng: 32.8541 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Konyaspor Ultras',
    slug: 'konyaspor-ultras',
    club: 'Konyaspor',
    city: 'Konya',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 2002,
    membersEstimate: '28K+',
    stadium: 'Konya Büyükşehir Stadium',
    colors: ['#00FF00', '#FFFFFF'], // Green and White
    symbols: ['Seljuk', 'Anatolia', 'Konya'],
    motto: 'Anadolunun kalbi',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Konyaspor Ultras represent the spiritual center of Anatolia. With their passionate support from the conservative heartland, they bring a unique identity to Turkish football. Their green and white colors fill one of Turkey's largest stadiums.",
    values: ['Anatolian Pride', 'Tradition', 'Heart of Turkey'],
    coordinates: { lat: 37.8746, lng: 32.4932 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Adana Demirspor Ultras',
    slug: 'adana-demirspor-ultras',
    club: 'Adana Demirspor',
    city: 'Adana',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 1998,
    membersEstimate: '22K+',
    stadium: 'Yeni Adana Stadyumu',
    colors: ['#0066CC', '#FFFFFF'], // Blue and White
    symbols: ['Iron', 'Demir', 'Adana'],
    motto: 'Mavi şimşekler',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Adana Demirspor Ultras represent the Blue Lightning from southern Turkey. With Balotelli and other stars bringing attention to the club, their passionate fanbase has grown. The Adana Derby against Adanaspor is the pride of Çukurova.",
    values: ['Blue Lightning', 'Southern Pride', 'Passion'],
    coordinates: { lat: 36.9914, lng: 35.3308 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  }
];

async function addTurkeyUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    for (const ultra of turkeyUltras) {
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

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

      await mongoose.connection.db.collection('ultragroups').insertOne(ultra);
      console.log(`[ADDED] ${ultra.name} - ${ultra.club} (${ultra.city})`);
    }

    const count = await mongoose.connection.db.collection('ultragroups').countDocuments();
    console.log(`\n=== Total groups in database: ${count} ===`);

    const groups = await mongoose.connection.db.collection('ultragroups')
      .find({ countryCode: 'TR' })
      .toArray();
    console.log(`\n🇹🇷 Turkish groups: ${groups.length}`);
    groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Turkish Ultras added successfully! 🇹🇷');
  } catch (error) {
    console.error('Error:', error);
  }
}

addTurkeyUltras();

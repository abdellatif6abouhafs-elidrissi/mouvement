const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

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
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Gate 7', 'Thrylos', 'Red'],
    motto: 'Thrylos',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Gate 7 (Thyra 7) is one of the oldest and most famous Ultra groups in Europe. Supporting Olympiakos, Greece's most successful club with 47 league titles, they create a legendary atmosphere at Karaiskakis. The derby against Panathinaikos is Greece's most intense rivalry.",
    values: ['Legend', 'Red Pride', 'Piraeus'],
    coordinates: { lat: 37.9419, lng: 23.6701 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#00FF00', '#FFFFFF'], // Green and White
    symbols: ['Gate 13', 'Shamrock', 'Green'],
    motto: 'Panathinaikos for ever',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Gate 13 (Thyra 13) represents Panathinaikos, one of only five clubs to reach a European Cup final without winning it. The Green Army is famous for their passion and the intense rivalry with Olympiakos that divides Athens. Their shamrock symbol is recognized throughout Greece.",
    values: ['Green Army', 'Athens', 'European Final'],
    coordinates: { lat: 37.9886, lng: 23.7522 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Gate 4', 'Double-Headed Eagle', 'Toumba'],
    motto: 'PAOK Ole',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Gate 4 (Thyra 4) makes Toumba Stadium one of the most intimidating venues in European football. PAOK represents Thessaloniki and the refugees from Constantinople. The double-headed eagle symbolizes their Byzantine Greek heritage. The 'Toumba atmosphere' is legendary.",
    values: ['Toumba', 'Constantinople Heritage', 'Black and White'],
    coordinates: { lat: 40.6136, lng: 22.9725 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    stadium: 'OPAP Arena (Agia Sophia)',
    colors: ['#FFD700', '#000000'], // Yellow and Black
    symbols: ['Double-Headed Eagle', 'Original 21', 'Constantinople'],
    motto: 'AEK Athens Original',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Original 21 is the main Ultra group of AEK Athens, the club founded by Greek refugees from Constantinople in 1924. The double-headed eagle represents their Byzantine heritage. Their new stadium, OPAP Arena, is named Agia Sophia after the famous cathedral.",
    values: ['Constantinople', 'Refugee Heritage', 'Byzantine Eagle'],
    coordinates: { lat: 38.0368, lng: 23.7878 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Super 3 Aris',
    slug: 'super-3-aris',
    club: 'Aris Thessaloniki',
    city: 'Thessaloniki',
    country: 'Greece',
    countryCode: 'GR',
    yearFounded: 1978,
    membersEstimate: '25K+',
    stadium: 'Kleanthis Vikelidis Stadium',
    colors: ['#FFD700', '#000000'], // Yellow and Black
    symbols: ['God of War', 'Super 3', 'Yellow Army'],
    motto: 'Aris Thessaloniki',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Super 3 represents Aris Thessaloniki, named after the Greek god of war. The Yellow-Black Army fills Kleanthis Vikelidis with passion. The Thessaloniki Derby against PAOK is one of Greece's fiercest local rivalries.",
    values: ['God of War', 'Yellow Black', 'Thessaloniki'],
    coordinates: { lat: 40.6114, lng: 22.9541 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Blue Army OFI',
    slug: 'blue-army-ofi',
    club: 'OFI Crete',
    city: 'Heraklion',
    country: 'Greece',
    countryCode: 'GR',
    yearFounded: 1985,
    membersEstimate: '15K+',
    stadium: 'Theodoros Vardinogiannis Stadium',
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Crete', 'OFI', 'Island'],
    motto: 'OFI Crete',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Blue Army represents OFI Crete, the pride of Greece's largest island. Based in Heraklion, they bring the Cretan identity to Greek football. The island's isolation makes every home match an intense experience for visiting teams.",
    values: ['Cretan Pride', 'Island Identity', 'Passion'],
    coordinates: { lat: 35.3387, lng: 25.1442 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Atromitos Ultras',
    slug: 'atromitos-ultras',
    club: 'Atromitos Athens',
    city: 'Peristeri',
    country: 'Greece',
    countryCode: 'GR',
    yearFounded: 2000,
    membersEstimate: '10K+',
    stadium: 'Peristeri Stadium',
    colors: ['#0066CC', '#FFFFFF'], // Blue and White
    symbols: ['Fearless', 'Atromitos', 'Peristeri'],
    motto: 'Atromitos means Fearless',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Atromitos Ultras represent the 'Fearless' club from Peristeri in the Athens suburbs. A smaller club competing against the giants, they have become a consistent Super League presence with passionate local support.",
    values: ['Fearless', 'Suburban Pride', 'Fighting Spirit'],
    coordinates: { lat: 38.0131, lng: 23.6917 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  }
];

async function addGreeceUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    for (const ultra of greeceUltras) {
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      ultra.createdAt = new Date();
      ultra.updatedAt = new Date();
      ultra.author = authorId;
      ultra.views = Math.floor(Math.random() * 60000) + 10000;
      ultra.likes = Math.floor(Math.random() * 10000) + 2000;
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
      .find({ countryCode: 'GR' })
      .toArray();
    console.log(`\n🇬🇷 Greek groups: ${groups.length}`);
    groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Greek Ultras added successfully! 🇬🇷');
  } catch (error) {
    console.error('Error:', error);
  }
}

addGreeceUltras();

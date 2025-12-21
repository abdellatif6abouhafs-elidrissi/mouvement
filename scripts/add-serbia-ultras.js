const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

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
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Star', 'Heroes', 'Marakana'],
    motto: 'Samo Zvezda',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Delije (The Heroes) are one of the most famous Ultra groups in the world. They filled the Marakana when Red Star won the 1991 European Cup and have created some of the most spectacular displays ever seen. The Eternal Derby against Partizan is one of the most intense in world football.",
    values: ['Heroes', 'Champions of Europe', 'Eternal'],
    coordinates: { lat: 44.7833, lng: 20.4669 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Gravediggers', 'Skull', 'JSD'],
    motto: 'Crno-beli',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Grobari (The Gravediggers) are the Ultra group of Partizan Belgrade, one of the oldest in Eastern Europe. Their skull symbol and black and white colors are recognized worldwide. The Eternal Derby against Red Star divides Belgrade and is one of football's most intense rivalries.",
    values: ['Gravediggers', 'Black and White', 'Eternal Rivalry'],
    coordinates: { lat: 44.7886, lng: 20.4594 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Delije Sever',
    slug: 'delije-sever',
    club: 'Vojvodina Novi Sad',
    city: 'Novi Sad',
    country: 'Serbia',
    countryCode: 'RS',
    yearFounded: 1989,
    membersEstimate: '20K+',
    stadium: 'Karađorđe Stadium',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Vojvodina', 'North', 'Novi Sad'],
    motto: 'Vojvodina do kraja',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Delije Sever (Heroes of the North) represent Vojvodina Novi Sad, the biggest club from Serbia's northern province. Based in Serbia's second city, they provide passionate support for the team that has produced many Serbian stars.",
    values: ['North', 'Vojvodina Province', 'Pride'],
    coordinates: { lat: 45.2551, lng: 19.8451 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Čukarički',
    slug: 'ultras-cukaricki',
    club: 'FK Čukarički',
    city: 'Belgrade',
    country: 'Serbia',
    countryCode: 'RS',
    yearFounded: 2005,
    membersEstimate: '8K+',
    stadium: 'Čukarički Stadium',
    colors: ['#800020', '#FFFFFF'], // Burgundy and White
    symbols: ['Čukarički', 'Brđani', 'Belgrade'],
    motto: 'Brđani zauvek',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Ultras Čukarički represent the third Belgrade club, known as Brđani (Highlanders). While smaller than Partizan and Red Star, they have carved their own identity in the capital's football landscape with passionate local support.",
    values: ['Third Way', 'Highlanders', 'Local Pride'],
    coordinates: { lat: 44.7687, lng: 20.4157 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Radnički Niš',
    slug: 'ultras-radnicki-nis',
    club: 'FK Radnički Niš',
    city: 'Niš',
    country: 'Serbia',
    countryCode: 'RS',
    yearFounded: 1997,
    membersEstimate: '12K+',
    stadium: 'Čair Stadium',
    colors: ['#FF0000', '#000000'], // Red and Black
    symbols: ['Workers', 'Radnički', 'South Serbia'],
    motto: 'Radnički Niš',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Ultras Radnički Niš represent the pride of southern Serbia's largest city. Named 'Workers' after their socialist origins, they have become a force in Serbian football with passionate support from the southern region.",
    values: ['Southern Serbia', 'Workers', 'Pride'],
    coordinates: { lat: 43.3209, lng: 21.8954 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  }
];

async function addSerbiaUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    for (const ultra of serbiaUltras) {
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      ultra.createdAt = new Date();
      ultra.updatedAt = new Date();
      ultra.author = authorId;
      ultra.views = Math.floor(Math.random() * 70000) + 15000;
      ultra.likes = Math.floor(Math.random() * 12000) + 3000;
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
      .find({ countryCode: 'RS' })
      .toArray();
    console.log(`\n🇷🇸 Serbian groups: ${groups.length}`);
    groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Serbian Ultras added successfully! 🇷🇸');
  } catch (error) {
    console.error('Error:', error);
  }
}

addSerbiaUltras();

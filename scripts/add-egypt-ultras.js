const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

const egyptianUltras = [
  {
    name: 'Ultras White Knights',
    slug: 'ultras-white-knights',
    club: 'Zamalek SC',
    city: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2007,
    membersEstimate: '70K+',
    stadium: 'Cairo International Stadium',
    colors: ['#FFFFFF', '#000000'], // White and Black
    symbols: ['Knight', 'White', 'UWK'],
    motto: 'White Knights Forever',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Ultras White Knights (UWK), founded in 2007, is one of the largest Ultra groups in Africa and the Middle East. Supporting Zamalek SC, they are known for their fierce rivalry with Ultras Ahlawy in the Cairo Derby - one of the most intense derbies in world football. Despite facing persecution and bans, they remain a symbol of Egyptian Ultra culture.",
    values: ['Pride', 'Loyalty', 'Resistance', 'Unity'],
    coordinates: { lat: 30.0444, lng: 31.2357 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Yellow Dragons',
    slug: 'ultras-yellow-dragons',
    club: 'Ismaily SC',
    city: 'Ismailia',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2007,
    membersEstimate: '30K+',
    stadium: 'Ismailia Stadium',
    colors: ['#FFD700', '#000000'], // Yellow and Black
    symbols: ['Dragon', 'Yellow', 'Suez Canal'],
    motto: 'Dragons of the Canal',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Ultras Yellow Dragons represents Ismaily SC from the Suez Canal city of Ismailia. Known as the Brazilians of Egypt for their yellow colors and attacking football, their Ultras bring passionate support from the canal zone. They are one of the most organized groups outside Cairo.",
    values: ['Canal Pride', 'Passion', 'Organization'],
    coordinates: { lat: 30.5965, lng: 32.2715 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Green Eagles',
    slug: 'ultras-green-eagles',
    club: 'Al Masry SC',
    city: 'Port Said',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2007,
    membersEstimate: '35K+',
    stadium: 'Port Said Stadium',
    colors: ['#006233', '#FFFFFF'], // Green and White
    symbols: ['Eagle', 'Green', 'Port'],
    motto: 'Green Eagles of Port Said',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Ultras Green Eagles supports Al Masry SC from Port Said. They became known worldwide after the tragic Port Said Stadium disaster in 2012. Despite the trauma, the group continues to honor their fallen members and support their club with unwavering dedication.",
    values: ['Memory', 'Loyalty', 'Strength', 'Unity'],
    coordinates: { lat: 31.2653, lng: 32.3019 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Assiouty',
    slug: 'ultras-assiouty',
    club: 'Asyut Petroleum SC',
    city: 'Asyut',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2010,
    membersEstimate: '15K+',
    stadium: 'Asyut Stadium',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Upper Egypt', 'Nile'],
    motto: 'Upper Egypt Pride',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Ultras Assiouty represents Asyut Petroleum from Upper Egypt. They bring the passion of southern Egypt to the terraces, representing a region often overlooked in Egyptian football but rich in loyal supporters.",
    values: ['Upper Egypt Pride', 'Loyalty', 'Passion'],
    coordinates: { lat: 27.1783, lng: 31.1859 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Eskendria',
    slug: 'ultras-eskendria',
    club: 'Al Ittihad Alexandria',
    city: 'Alexandria',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2008,
    membersEstimate: '25K+',
    stadium: 'Alexandria Stadium',
    colors: ['#FFD700', '#0000FF'], // Yellow and Blue
    symbols: ['Mediterranean', 'Lighthouse', 'Alex'],
    motto: 'Mediterranean Lions',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "Ultras Eskendria supports Al Ittihad Alexandria from Egypt's Mediterranean pearl. With a unique coastal identity distinct from Cairo, they represent the proud footballing tradition of Alexandria, Egypt's second city.",
    values: ['Mediterranean Identity', 'Pride', 'Tradition'],
    coordinates: { lat: 31.2001, lng: 29.9187 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Enppi',
    slug: 'ultras-enppi',
    club: 'ENPPI SC',
    city: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2009,
    membersEstimate: '10K+',
    stadium: 'Petrosport Stadium',
    colors: ['#FF6600', '#000000'], // Orange and Black
    symbols: ['Oil', 'ENPPI'],
    motto: 'Orange Army',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Ultras Enppi supports ENPPI SC, the club of the Egyptian National Petroleum Company. A smaller but dedicated group, they represent the corporate football tradition in Egypt with genuine passion.",
    values: ['Dedication', 'Loyalty', 'Unity'],
    coordinates: { lat: 30.0444, lng: 31.2357 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Haras',
    slug: 'ultras-haras',
    club: 'Haras El Hodoud SC',
    city: 'Alexandria',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2010,
    membersEstimate: '12K+',
    stadium: 'Haras El-Hodood Stadium',
    colors: ['#006233', '#FFFFFF'], // Green and White
    symbols: ['Border Guards', 'Shield'],
    motto: 'Guardians of the Border',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Ultras Haras supports Haras El Hodoud (Border Guards) SC from Alexandria. Representing the Border Guards institution, they bring a unique military-influenced identity to Egyptian Ultra culture.",
    values: ['Discipline', 'Guard', 'Loyalty'],
    coordinates: { lat: 31.2001, lng: 29.9187 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Ultras Smouha',
    slug: 'ultras-smouha',
    club: 'Smouha SC',
    city: 'Alexandria',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2011,
    membersEstimate: '18K+',
    stadium: 'Alexandria Stadium',
    colors: ['#0066CC', '#FFFFFF'], // Blue and White
    symbols: ['Sky Blue', 'Smouha'],
    motto: 'Sky Blue Army',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Ultras Smouha supports Smouha SC, a rising club from Alexandria. Their sky blue colors and growing fanbase have made them an important part of Alexandria's football landscape.",
    values: ['Growth', 'Passion', 'Alexandria Pride'],
    coordinates: { lat: 31.2001, lng: 29.9187 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  }
];

async function addEgyptianUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Get admin user ID
    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    // Update existing Ultras Ahlawy to have correct data
    await mongoose.connection.db.collection('ultragroups').updateOne(
      { slug: 'ultras-ahlawy' },
      {
        $set: {
          history: "Ultras Ahlawy, founded in 2007, is the largest and most famous Ultra group in Africa and the Arab world. Supporting Al Ahly SC, the most successful club in African football, they are known for their massive tifos, emotional songs, and the fierce Cairo Derby against Ultras White Knights. They played a significant role in the 2011 Egyptian Revolution and suffered tragedy in the 2012 Port Said massacre. Despite bans and persecution, UA remains a symbol of passion and resistance.",
          isFeatured: true,
          isVerified: true,
          isActive: true,
          membersEstimate: '80K+',
          yearFounded: 2007,
          stadium: 'Cairo International Stadium',
          motto: 'Ahlawy until death'
        }
      }
    );
    console.log('[UPDATED] Ultras Ahlawy');

    for (const ultra of egyptianUltras) {
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
      ultra.views = Math.floor(Math.random() * 60000) + 10000;
      ultra.likes = Math.floor(Math.random() * 10000) + 2000;
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

    // List all Egyptian groups
    const egyptianGroups = await mongoose.connection.db.collection('ultragroups')
      .find({ countryCode: 'EG' })
      .toArray();
    console.log(`\n🇪🇬 Egyptian groups: ${egyptianGroups.length}`);
    egyptianGroups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Egypt Ultras added successfully! 🇪🇬');
  } catch (error) {
    console.error('Error:', error);
  }
}

addEgyptianUltras();

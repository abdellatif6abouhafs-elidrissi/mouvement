const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

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
    colors: ['#C8102E', '#FFFFFF'], // Red and White
    symbols: ['Liver Bird', 'YNWA', 'Anfield'],
    motto: "You'll Never Walk Alone",
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "The Kop at Anfield is legendary in world football. Named after Spion Kop hill in South Africa, it became the template for all football terraces. Famous for 'You'll Never Walk Alone', the atmosphere for European nights is unmatched. The North West Derby against Manchester United is England's biggest rivalry.",
    values: ['YNWA', 'European Nights', 'Tradition'],
    coordinates: { lat: 53.4308, lng: -2.9609 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#DA291C', '#FFFFFF'], // Red and White
    symbols: ['Red Devil', 'Theatre of Dreams', 'MUFC'],
    motto: 'Glory Glory Man United',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "The Stretford End at Old Trafford, the Theatre of Dreams, is home to Manchester United's most passionate supporters. The Red Army has followed United through the Busby Babes tragedy, the Treble, and Ferguson's dynasty. The rivalry with Liverpool is English football's greatest.",
    values: ['Glory', 'Tradition', 'Red Devils'],
    coordinates: { lat: 53.4631, lng: -2.2913 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#1B458F', '#C4122E'], // Blue and Red
    symbols: ['Eagle', 'Holmesdale', 'South London'],
    motto: 'Glad All Over',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Holmesdale Fanatics are the closest thing to a continental Ultra group in England. Founded in 2005, they brought Italian-style choreographies, flags, and drums to Selhurst Park. They proved that Ultra culture can exist in England despite all-seater stadiums.",
    values: ['Ultra Culture', 'South London', 'Eagles'],
    coordinates: { lat: 51.3983, lng: -0.0858 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Green Street Elite',
    slug: 'green-street-elite',
    club: 'West Ham United',
    city: 'London',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1975,
    membersEstimate: '15K+',
    stadium: 'London Stadium',
    colors: ['#7A263A', '#1BB1E7'], // Claret and Blue
    symbols: ['Hammers', 'ICF', 'East London'],
    motto: 'Forever Blowing Bubbles',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "West Ham's passionate support from East London is legendary. The Boleyn Ground (Upton Park) was one of England's most atmospheric grounds. The ICF (Inter City Firm) was one of the most notorious firms in English football. Today's fans carry on the East End tradition.",
    values: ['East London', 'Hammers', 'Bubbles'],
    coordinates: { lat: 51.5387, lng: -0.0166 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'The Gwladys Street',
    slug: 'the-gwladys-street',
    club: 'Everton FC',
    city: 'Liverpool',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1892,
    membersEstimate: '30K+',
    stadium: 'Goodison Park',
    colors: ['#003399', '#FFFFFF'], // Royal Blue and White
    symbols: ['Toffees', 'EFC', 'Goodison'],
    motto: 'Nil Satis Nisi Optimum',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "The Gwladys Street End at Goodison Park is Everton's home end and one of English football's historic terraces. The Merseyside Derby against Liverpool is one of the most played fixtures in English football. The Toffees faithful have supported through thick and thin.",
    values: ['Blue Pride', 'Merseyside', 'Tradition'],
    coordinates: { lat: 53.4388, lng: -2.9663 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'The 1882 Movement',
    slug: 'the-1882-movement',
    club: 'Tottenham Hotspur',
    city: 'London',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 2012,
    membersEstimate: '10K+',
    stadium: 'Tottenham Hotspur Stadium',
    colors: ['#132257', '#FFFFFF'], // Navy and White
    symbols: ['Cockerel', 'THFC', 'North London'],
    motto: 'To Dare Is To Do',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "The 1882 Movement was created to bring atmosphere to White Hart Lane and now the new Tottenham Stadium. Named after the year Spurs were founded, they aim to recreate the supporter culture that English football has lost. The North London Derby against Arsenal is legendary.",
    values: ['Atmosphere', 'North London', 'Tradition'],
    coordinates: { lat: 51.6043, lng: -0.0665 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Magpies', 'Toon Army', 'Geordie'],
    motto: 'Howay the Lads',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "The Gallowgate End at St. James' Park holds the most passionate Geordies. Newcastle's Toon Army is famous for their incredible away support and devotion despite years without trophies. The black and white stripes fill the largest stadium in the North East.",
    values: ['Geordie Pride', 'Toon Army', 'Passion'],
    coordinates: { lat: 54.9756, lng: -1.6217 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'The Yellow Army',
    slug: 'the-yellow-army',
    club: 'Wolverhampton Wanderers',
    city: 'Wolverhampton',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1889,
    membersEstimate: '25K+',
    stadium: 'Molineux Stadium',
    colors: ['#FDB913', '#000000'], // Gold and Black
    symbols: ['Wolves', 'Molineux', 'Black Country'],
    motto: 'Out of Darkness Cometh Light',
    logo: '/images/groups/yellow-ultras.jpg',
    coverImage: '/images/groups/yellow-ultras.jpg',
    history: "The Yellow Army fills Molineux with gold and black. Wolves were one of England's greatest clubs in the 1950s and have returned to the Premier League with style. The Black Country Derby against West Brom is one of English football's oldest rivalries.",
    values: ['Black Country', 'Wolves', 'History'],
    coordinates: { lat: 52.5904, lng: -2.1306 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'The South Bank',
    slug: 'the-south-bank-villa',
    club: 'Aston Villa',
    city: 'Birmingham',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1897,
    membersEstimate: '35K+',
    stadium: 'Villa Park',
    colors: ['#670E36', '#95BFE5'], // Claret and Blue
    symbols: ['Lion', 'Villa', 'Birmingham'],
    motto: 'Prepared',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "The South Bank (now the Holte End) at Villa Park is home to Villa's most vocal fans. European Cup winners in 1982, Villa are Birmingham's biggest club. The Second City Derby against Birmingham City is one of England's most heated local rivalries.",
    values: ['Villa Pride', 'Birmingham', 'European Glory'],
    coordinates: { lat: 52.5092, lng: -1.8846 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'City Square Ultras',
    slug: 'city-square-ultras',
    club: 'Leeds United',
    city: 'Leeds',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 2018,
    membersEstimate: '8K+',
    stadium: 'Elland Road',
    colors: ['#FFFFFF', '#1D428A', '#FFCD00'], // White, Blue, Yellow
    symbols: ['LUFC', 'Elland Road', 'Yorkshire'],
    motto: 'Marching On Together',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "City Square Ultras are bringing the Ultra culture to Elland Road. Leeds United's passionate fanbase is legendary - Marcelo Bielsa's arrival sparked a renaissance. The Roses rivalries with Manchester United and the Yorkshire derbies make Leeds one of England's most passionate clubs.",
    values: ['Yorkshire', 'MOT', 'Leeds United'],
    coordinates: { lat: 53.7779, lng: -1.5722 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  }
];

async function addEnglandUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    for (const ultra of englandUltras) {
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
      .find({ countryCode: 'GB' })
      .toArray();
    console.log(`\n🏴󠁧󠁢󠁥󠁮󠁧󠁿 English groups: ${groups.length}`);
    groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! English Ultras added successfully! 🏴󠁧󠁢󠁥󠁮󠁧󠁿');
  } catch (error) {
    console.error('Error:', error);
  }
}

addEnglandUltras();

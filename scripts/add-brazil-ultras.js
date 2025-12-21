const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

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
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Hawk', 'Fiel', 'Timão'],
    motto: 'Fiel até morrer',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Gaviões da Fiel (Hawks of the Faithful) is the largest organized torcida in the world with over 100,000 registered members. Founded in 1969, they are the heart of Corinthians, the most popular club in Brazil. They are also famous for their samba school, which has won Rio Carnival multiple times.",
    values: ['Fidelity', 'Democracy', 'Popular Power'],
    coordinates: { lat: -23.5453, lng: -46.4744 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#FF0000', '#000000'], // Red and Black
    symbols: ['Vulture', 'Urubu', 'Mengão'],
    motto: 'Uma vez Flamengo, sempre Flamengo',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Torcida Jovem do Flamengo is one of the oldest organized torcidas in Brazil. Flamengo has the largest fanbase in Brazil (over 40 million fans), and their presence in the Maracanã is legendary. The Fla-Flu derby against Fluminense fills Rio with passion.",
    values: ['Passion', 'Rio de Janeiro', 'Mengão'],
    coordinates: { lat: -22.9121, lng: -43.2302 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#006437', '#FFFFFF'], // Green and White
    symbols: ['Pig', 'Alviverde', 'Porco'],
    motto: 'Avanti Palestra',
    logo: '/images/groups/green-ultras.jpg',
    coverImage: '/images/groups/green-ultras.jpg',
    history: "Mancha Verde (Green Stain) is the main torcida organizada of Palmeiras, Brazil's most successful club in recent years with multiple Copa Libertadores titles. They also run a famous samba school. The Derby Paulista against Corinthians is Brazil's biggest rivalry.",
    values: ['Green Pride', 'Italian Heritage', 'Champions'],
    coordinates: { lat: -23.5275, lng: -46.6783 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Torcida Independente',
    slug: 'torcida-independente',
    club: 'São Paulo FC',
    city: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1972,
    membersEstimate: '60K+',
    stadium: 'Morumbi (MorumBIS)',
    colors: ['#FF0000', '#FFFFFF', '#000000'], // Red, White, Black
    symbols: ['Tricolor', 'SPFC', 'Sovereign'],
    motto: 'Tricolor Paulista',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Torcida Independente is the main organized torcida of São Paulo FC, the club with most Libertadores titles from Brazil. The Tricolor Paulista has a massive following and the Morumbi stadium holds some of Brazil's greatest atmospheres.",
    values: ['Independence', 'Tricolor', 'Glory'],
    coordinates: { lat: -23.6003, lng: -46.7201 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#0066CC', '#000000', '#FFFFFF'], // Blue, Black, White
    symbols: ['Tricolor Gaúcho', 'Imortal', 'South'],
    motto: 'Imortal Tricolor',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Geral do Grêmio represents the Immortal Tricolor from Porto Alegre in southern Brazil. The Grenal against Internacional is one of the most passionate derbies in South America. Known for their incredible displays and singing throughout the match.",
    values: ['Immortal', 'Gaucho Pride', 'South'],
    coordinates: { lat: -29.9728, lng: -51.1947 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Guarda Popular',
    slug: 'guarda-popular',
    club: 'Internacional',
    city: 'Porto Alegre',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1977,
    membersEstimate: '35K+',
    stadium: 'Estádio Beira-Rio',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Colorado', 'Saci', 'Beira-Rio'],
    motto: 'Colorado até morrer',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Guarda Popular is the main torcida organizada of Sport Club Internacional, the Colorado from Porto Alegre. World Club Champions in 2006, they represent the red half of Rio Grande do Sul. The Grenal against Grêmio divides the southern capital.",
    values: ['Colorado', 'Popular', 'Champions'],
    coordinates: { lat: -30.0652, lng: -51.2352 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Torcida Jovem Santos',
    slug: 'torcida-jovem-santos',
    club: 'Santos FC',
    city: 'Santos',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1969,
    membersEstimate: '45K+',
    stadium: 'Vila Belmiro',
    colors: ['#FFFFFF', '#000000'], // White and Black
    symbols: ['Peixe', 'Pelé', 'Vila'],
    motto: 'Santos FC, o time de Pelé',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Torcida Jovem do Santos represents the club of Pelé, Neymar, and countless legends. The Vila Belmiro is a temple of Brazilian football where the beautiful game reached its peak. Santos's legacy includes multiple World Club Championships.",
    values: ['Pelé Legacy', 'Beautiful Game', 'History'],
    coordinates: { lat: -23.9536, lng: -46.3397 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Força Jovem Vasco',
    slug: 'forca-jovem-vasco',
    club: 'Vasco da Gama',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1970,
    membersEstimate: '40K+',
    stadium: 'São Januário',
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Maltese Cross', 'Gigante da Colina', 'Vascão'],
    motto: 'Vasco da Gama, o gigante',
    logo: '/images/groups/african-stadium.jpg',
    coverImage: '/images/groups/african-stadium.jpg',
    history: "Força Jovem Vasco is one of Brazil's oldest organized torcidas. Vasco da Gama was the first club to include black players in their team, breaking barriers in 1923. The Giant of the Hill represents anti-racist values and working-class Rio.",
    values: ['Anti-Racism', 'Working Class', 'Giant'],
    coordinates: { lat: -22.8981, lng: -43.2287 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Torcida Organizada Bamor',
    slug: 'torcida-bamor',
    club: 'Bahia',
    city: 'Salvador',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1990,
    membersEstimate: '30K+',
    stadium: 'Arena Fonte Nova',
    colors: ['#0066CC', '#FF0000', '#FFFFFF'], // Blue, Red, White
    symbols: ['Tricolor Baiano', 'Bahia', 'Bahêa'],
    motto: 'Bahêa minha vida',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Bamor (Bahia Amor - Bahia Love) represents Esporte Clube Bahia from Salvador. The Ba-Vi derby against Vitória is the biggest rivalry in the Northeast. Known for their carnival-influenced celebrations and incredible atmosphere.",
    values: ['Bahia Love', 'Northeast Pride', 'Carnival Spirit'],
    coordinates: { lat: -12.9790, lng: -38.5044 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Torcida Os Imbatíveis',
    slug: 'torcida-os-imbativeis',
    club: 'Cruzeiro',
    city: 'Belo Horizonte',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1977,
    membersEstimate: '35K+',
    stadium: 'Mineirão',
    colors: ['#0066CC', '#FFFFFF'], // Blue and White
    symbols: ['Fox', 'Raposa', 'Cabuloso'],
    motto: 'Maior de Minas',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Os Imbatíveis (The Unbeatable Ones) support Cruzeiro, the biggest club from Minas Gerais. The Clássico Mineiro against Atlético Mineiro is one of Brazil's most passionate derbies. Four-time Brazilian champions with a massive following.",
    values: ['Minas Pride', 'Blue Fox', 'Tradition'],
    coordinates: { lat: -19.8659, lng: -43.9707 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  }
];

async function addBrazilUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    for (const ultra of brazilUltras) {
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      ultra.createdAt = new Date();
      ultra.updatedAt = new Date();
      ultra.author = authorId;
      ultra.views = Math.floor(Math.random() * 100000) + 20000;
      ultra.likes = Math.floor(Math.random() * 20000) + 5000;
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
      .find({ countryCode: 'BR' })
      .toArray();
    console.log(`\n🇧🇷 Brazilian groups: ${groups.length}`);
    groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Brazilian Ultras added successfully! 🇧🇷');
  } catch (error) {
    console.error('Error:', error);
  }
}

addBrazilUltras();

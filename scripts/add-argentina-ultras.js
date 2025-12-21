const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

const argentinaUltras = [
  {
    name: 'La 12',
    slug: 'la-12-boca',
    club: 'Boca Juniors',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1925,
    membersEstimate: '100K+',
    stadium: 'La Bombonera',
    colors: ['#0038A8', '#FFD700'], // Blue and Gold
    symbols: ['Xeneize', 'La Bombonera', '12'],
    motto: 'La mitad más uno',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La 12 is the legendary barra brava of Boca Juniors, named because they are considered the '12th player' on the field. Based in La Bombonera, one of the most intimidating stadiums in world football, they create an atmosphere that has made visiting teams tremble. The Superclásico against River Plate is the biggest derby in the Americas.",
    values: ['Passion', 'La Bombonera', 'Xeneize Pride'],
    coordinates: { lat: -34.6356, lng: -58.3649 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Millonario', 'Monumental', 'Gallina'],
    motto: 'River Plate mi buen amigo',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Los Borrachos del Tablón (The Drunks of the Stand) is the main barra brava of River Plate. Based in the massive Estadio Monumental, they are known for their incredible songs and choreographies. The rivalry with Boca Juniors in the Superclásico is one of the most intense in world football.",
    values: ['Millonario Pride', 'Passion', 'Glory'],
    coordinates: { lat: -34.5453, lng: -58.4498 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#87CEEB', '#FFFFFF'], // Light Blue and White
    symbols: ['Academia', 'Cilindro', 'Racing'],
    motto: 'Racing corazón',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Guardia Imperial is the historic barra brava of Racing Club de Avellaneda, known as La Academia. They fill El Cilindro with passion and are famous for the Clásico de Avellaneda against Independiente, one of the most heated local derbies in Argentina.",
    values: ['Academia Pride', 'Tradition', 'Avellaneda'],
    coordinates: { lat: -34.6697, lng: -58.3686 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#0000FF', '#FF0000'], // Blue and Red
    symbols: ['Ciclón', 'Cuervo', 'Boedo'],
    motto: 'De Boedo vengo',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Gloriosa Butteler is the passionate barra brava of San Lorenzo de Almagro from the Boedo neighborhood. Known as Los Cuervos (The Crows), they are famous for their colorful displays and the unique connection to their barrio. Pope Francis is their most famous fan.",
    values: ['Boedo Identity', 'Working Class', 'Ciclón Spirit'],
    coordinates: { lat: -34.6489, lng: -58.4374 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
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
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Rey de Copas', 'Diablo Rojo', 'Libertadores'],
    motto: 'Rey de Copas',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "La Barra del Rojo supports Independiente, the 'Rey de Copas' (King of Cups) - the most successful South American club in Copa Libertadores history with 7 titles. The Clásico de Avellaneda against Racing is legendary. Their stadium is named after their continental glory.",
    values: ['Continental Glory', 'Diablo Pride', 'Tradition'],
    coordinates: { lat: -34.6703, lng: -58.3714 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Los Guerreros',
    slug: 'los-guerreros-rosario',
    club: 'Rosario Central',
    city: 'Rosario',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1975,
    membersEstimate: '40K+',
    stadium: 'Estadio Gigante de Arroyito',
    colors: ['#0066CC', '#FFD700'], // Blue and Yellow
    symbols: ['Canalla', 'Central', 'Rosario'],
    motto: 'Canalla hasta la muerte',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "Los Guerreros is the fierce barra brava of Rosario Central from Argentina's second city. The Clásico Rosarino against Newell's Old Boys is one of the most passionate derbies in Argentina, splitting the city of Rosario in two.",
    values: ['Canalla Pride', 'Rosario', 'Warriors'],
    coordinates: { lat: -32.9184, lng: -60.6820 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'La Hinchada Más Popular',
    slug: 'la-hinchada-mas-popular',
    club: "Newell's Old Boys",
    city: 'Rosario',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1968,
    membersEstimate: '35K+',
    stadium: 'Estadio Marcelo Bielsa',
    colors: ['#FF0000', '#000000'], // Red and Black
    symbols: ['Leprosos', "Newell's", 'Rosario'],
    motto: 'Leproso de corazón',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "La Hinchada Más Popular supports Newell's Old Boys, the club where Lionel Messi, Maradona, and Bielsa made their names. Known as Los Leprosos, they represent half of Rosario in the intense Clásico Rosarino against Central.",
    values: ['Leproso Pride', 'Messi Origin', 'Rosario'],
    coordinates: { lat: -32.9575, lng: -60.6556 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'La Barra del Oeste',
    slug: 'la-barra-del-oeste',
    club: 'Vélez Sarsfield',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1978,
    membersEstimate: '30K+',
    stadium: 'Estadio José Amalfitani',
    colors: ['#FFFFFF', '#0000FF'], // White and Blue
    symbols: ['Fortín', 'Vélez', 'Liniers'],
    motto: 'Fortín de Liniers',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Barra del Oeste supports Vélez Sarsfield from the Liniers neighborhood. Known as El Fortín (The Fort), they have a proud history including Copa Libertadores and Intercontinental Cup glory in the 1990s.",
    values: ['Fortín Pride', 'Liniers', 'Blue and White'],
    coordinates: { lat: -34.6383, lng: -58.5214 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'Los Caudillos del Parque',
    slug: 'los-caudillos-del-parque',
    club: 'Estudiantes de La Plata',
    city: 'La Plata',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1982,
    membersEstimate: '35K+',
    stadium: 'Estadio Jorge Luis Hirschi',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Pincha', 'León', 'La Plata'],
    motto: 'Estudiantes de La Plata',
    logo: '/images/groups/red-ultras.jpg',
    coverImage: '/images/groups/red-ultras.jpg',
    history: "Los Caudillos del Parque supports Estudiantes de La Plata, four-time Copa Libertadores winners. Known as El Pincha, they represent the university city of La Plata and have a historic rivalry with Gimnasia.",
    values: ['Pincha Pride', 'La Plata', 'Champions'],
    coordinates: { lat: -34.9139, lng: -57.9314 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  },
  {
    name: 'La Banda del Lobo',
    slug: 'la-banda-del-lobo',
    club: 'Gimnasia y Esgrima La Plata',
    city: 'La Plata',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1976,
    membersEstimate: '32K+',
    stadium: 'Estadio Juan Carmelo Zerillo',
    colors: ['#000080', '#FFFFFF'], // Navy and White
    symbols: ['Lobo', 'Tripero', 'Bosque'],
    motto: 'Lobo soy',
    logo: '/images/groups/blue-ultras.jpg',
    coverImage: '/images/groups/blue-ultras.jpg',
    history: "La Banda del Lobo supports Gimnasia y Esgrima La Plata, known as El Lobo (The Wolf). The Clásico Platense against Estudiantes divides the city of La Plata. Diego Maradona was their manager before his passing.",
    values: ['Lobo Pride', 'La Plata', 'Maradona Legacy'],
    coordinates: { lat: -34.9108, lng: -57.9322 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    isActive: true,
    status: 'published'
  }
];

async function addArgentinaUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminUser = await mongoose.connection.db.collection('users').findOne({ role: 'admin' });
    const authorId = adminUser ? adminUser._id : new mongoose.Types.ObjectId();

    for (const ultra of argentinaUltras) {
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
      .find({ countryCode: 'AR' })
      .toArray();
    console.log(`\n🇦🇷 Argentine groups: ${groups.length}`);
    groups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Argentine Ultras added successfully! 🇦🇷');
  } catch (error) {
    console.error('Error:', error);
  }
}

addArgentinaUltras();

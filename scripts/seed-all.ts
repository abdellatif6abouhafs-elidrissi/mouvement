/**
 * Master Seed Script for MOUVEMENT Platform
 * Run with: npx ts-node scripts/seed-all.ts
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config({ path: '.env.local' });

// ==================== MODELS ====================
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' },
  isVerified: { type: Boolean, default: true }
}, { timestamps: true });

const UltraGroupSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  slug: { type: String, unique: true },
  club: String,
  city: String,
  country: String,
  countryCode: String,
  yearFounded: Number,
  isActive: { type: Boolean, default: true },
  history: String,
  values: [String],
  motto: String,
  colors: [String],
  symbols: [String],
  logo: String,
  coverImage: String,
  membersEstimate: String,
  stadium: String,
  coordinates: { lat: Number, lng: Number },
  socialLinks: {
    website: String,
    facebook: String,
    instagram: String,
    twitter: String,
    youtube: String
  },
  tifos: [{
    title: String,
    description: String,
    image: String,
    date: Date,
    match: String
  }],
  gallery: [{
    type: String,
    url: String,
    caption: String,
    date: Date
  }],
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const ArticleSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  excerpt: String,
  content: String,
  category: String,
  tags: [String],
  coverImage: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'published' },
  isFeatured: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  readTime: Number,
  publishedAt: Date
}, { timestamps: true });

// ==================== SEED DATA ====================
const groups = [
  {
    name: 'GREEN BOYS 2005',
    slug: 'green-boys-2005',
    club: 'Raja Club Athletic',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    history: 'GREEN BOYS 2005 was founded on September 13, 2005, in Derb Sultan, Casablanca. They revolutionized Ultra culture in Africa with spectacular tifos and powerful chants.',
    values: ['Passion', 'Creativity', 'Unity', 'African Pride'],
    motto: 'Ultras Green Boys - Passion Without Limits',
    colors: ['#00A651', '#FFFFFF'],
    symbols: ['Eagle', 'Crown', 'Green Star'],
    membersEstimate: '60,000+',
    stadium: 'Stade Mohamed V',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    isFeatured: true
  },
  {
    name: 'Curva Sud Milano',
    slug: 'curva-sud-milano',
    club: 'AC Milan',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1968,
    history: 'Curva Sud Milano is one of the oldest Ultra groups in the world. Founded in 1968, they pioneered many elements of Ultra culture that spread globally.',
    values: ['Tradition', 'Passion', 'Milano', 'Glory'],
    motto: 'Siamo Noi, I Campioni Dell\'Italia',
    colors: ['#E31B23', '#000000'],
    symbols: ['Devil', 'Cross of Milan'],
    membersEstimate: '100,000+',
    stadium: 'San Siro',
    coordinates: { lat: 45.4781, lng: 9.1240 },
    isFeatured: true
  },
  {
    name: 'Yellow Wall',
    slug: 'yellow-wall',
    club: 'Borussia Dortmund',
    city: 'Dortmund',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1974,
    history: 'The Yellow Wall at Signal Iduna Park is the largest standing terrace in European football, holding 24,454 fans.',
    values: ['Unity', 'Echte Liebe', 'Yellow Pride'],
    motto: 'Echte Liebe - True Love',
    colors: ['#FDE100', '#000000'],
    symbols: ['BVB Logo', 'Bee'],
    membersEstimate: '80,000+',
    stadium: 'Signal Iduna Park',
    coordinates: { lat: 51.4926, lng: 7.4518 },
    isFeatured: true
  },
  {
    name: 'La 12',
    slug: 'la-12',
    club: 'Boca Juniors',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1925,
    history: 'La 12 is considered the 12th player of Boca Juniors. They transform La Bombonera into a cauldron of passion.',
    values: ['Xeneize Pride', 'Passion', 'La Bombonera'],
    motto: 'Boca, Yo Te Amo',
    colors: ['#003DA5', '#FDBE10'],
    symbols: ['Half Sun', 'CABJ'],
    membersEstimate: '120,000+',
    stadium: 'La Bombonera',
    coordinates: { lat: -34.6356, lng: -58.3649 },
    isFeatured: true
  },
  {
    name: 'Ultras Ahlawy',
    slug: 'ultras-ahlawy',
    club: 'Al Ahly SC',
    city: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2007,
    history: 'Ultras Ahlawy revolutionized supporter culture in Egypt and the Arab world since 2007.',
    values: ['Red Devils', 'African Pride', 'Unity'],
    motto: 'Ya Ahly, Ya Ahly',
    colors: ['#E31B23', '#FFFFFF'],
    symbols: ['Eagle', 'Star'],
    membersEstimate: '70,000+',
    stadium: 'Cairo International Stadium',
    coordinates: { lat: 30.0690, lng: 31.3130 },
    isFeatured: true
  },
  {
    name: 'The Kop',
    slug: 'the-kop',
    club: 'Liverpool FC',
    city: 'Liverpool',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1906,
    history: 'The Kop at Anfield is perhaps the most famous stand in world football. "You\'ll Never Walk Alone" is football\'s most iconic anthem.',
    values: ['Unity', 'Tradition', 'YNWA'],
    motto: 'You\'ll Never Walk Alone',
    colors: ['#C8102E', '#FFFFFF'],
    symbols: ['Liver Bird', 'Shankly Gates'],
    membersEstimate: '130,000+',
    stadium: 'Anfield',
    coordinates: { lat: 53.4308, lng: -2.9608 },
    isFeatured: true
  },
  {
    name: 'Gaviões da Fiel',
    slug: 'gavioes-da-fiel',
    club: 'SC Corinthians',
    city: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1969,
    history: 'Gaviões da Fiel is the world\'s largest organized supporter group with over 100,000 registered members.',
    values: ['Fidelity', 'Samba', 'Corinthians'],
    motto: 'O Bando de Loucos',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Hawk', 'Ship'],
    membersEstimate: '120,000+',
    stadium: 'Neo Química Arena',
    coordinates: { lat: -23.5453, lng: -46.4742 },
    isFeatured: true
  },
  {
    name: 'Çarşı',
    slug: 'carsi',
    club: 'Besiktas JK',
    city: 'Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 1982,
    history: 'Çarşı is known for their anarchist symbolism and creative protests. Their motto: "Çarşı is against everything."',
    values: ['Anti-establishment', 'Creativity', 'Besiktas'],
    motto: 'Çarşı Her Şeye Karşı',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Anarchy A', 'Eagle'],
    membersEstimate: '40,000+',
    stadium: 'Vodafone Park',
    coordinates: { lat: 41.0391, lng: 29.0070 },
    isFeatured: false
  },
  {
    name: 'Winners',
    slug: 'winners',
    club: 'Wydad Athletic Club',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    history: 'Winners support Wydad AC, Raja\'s eternal rival. The Casablanca Derby is considered one of the most intense atmospheres in world football.',
    values: ['Victory', 'Honor', 'Tradition'],
    motto: 'Always Winners',
    colors: ['#E31B23', '#FFFFFF'],
    symbols: ['Lion', 'Crown'],
    membersEstimate: '45,000+',
    stadium: 'Stade Mohamed V',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    isFeatured: false
  },
  {
    name: 'Curva A Napoli',
    slug: 'curva-a-napoli',
    club: 'SSC Napoli',
    city: 'Naples',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1972,
    history: 'Curva A represents the soul of Naples. Their passion at Stadio Diego Armando Maradona is legendary.',
    values: ['Naples', 'Passion', 'Maradona Legacy'],
    motto: 'Un Giorno All\'Improvviso',
    colors: ['#12A0D7', '#FFFFFF'],
    symbols: ['Volcano Vesuvius', 'D10S'],
    membersEstimate: '80,000+',
    stadium: 'Stadio Diego Armando Maradona',
    coordinates: { lat: 40.8280, lng: 14.1930 },
    isFeatured: false
  }
];

const articles = [
  {
    title: 'The Art of Tifo: A Visual Revolution in Football Stadiums',
    slug: 'art-of-tifo-visual-revolution',
    excerpt: 'Exploring how massive choreographed displays transformed football terraces into open-air galleries.',
    content: `# The Art of Tifo: A Visual Revolution

The word "tifo" comes from Italian, describing the passionate delirium of supporters. What started in Italian stadiums in the 1970s has evolved into one of the most spectacular art forms in sports.

## The Making of a Tifo

Creating a tifo requires months of planning, coordination, and execution. Groups source materials, design intricate artworks, and coordinate hundreds of volunteers for the reveal.

## Cultural Impact

Tifos have become a form of cultural expression, celebrating local identity and honoring legends of the game.`,
    category: 'culture',
    tags: ['tifo', 'art', 'choreography'],
    readTime: 8,
    isFeatured: true,
    status: 'published',
    publishedAt: new Date('2024-01-15')
  },
  {
    title: 'The History of the Ultra Movement: From Milan to the World',
    slug: 'history-of-ultra-movement',
    excerpt: 'Tracing the origins of organized supporter culture from 1960s Italy to a global phenomenon.',
    content: `# The History of the Ultra Movement

The Ultra movement was born in Italy during the late 1960s. The term "ultras" first appeared at AC Milan's Curva Sud in 1968.

## Key Milestones

- 1968: Fossa dei Leoni forms at AC Milan
- 1969: Birth of Curva Nord Inter
- 1972: Curva A Napoli established
- 2005: North African Ultra revolution

## Core Values

1. Unconditional Support
2. Independence from club management
3. Creativity in expression
4. Community and brotherhood`,
    category: 'history',
    tags: ['history', 'italy', 'origins'],
    readTime: 12,
    isFeatured: true,
    status: 'published',
    publishedAt: new Date('2024-01-10')
  },
  {
    title: 'The Casablanca Derby: A Tale of Two Colors',
    slug: 'casablanca-derby-tale-two-colors',
    excerpt: 'Inside Africa\'s most intense football rivalry between Raja and Wydad.',
    content: `# The Casablanca Derby

In the heart of Morocco's economic capital, two giants share the same stadium but exist in completely different worlds.

## Green vs Red

When Raja (green) and Wydad (red) meet, Stade Mohamed V holds 80,000+ spectators witnessing one of football's greatest spectacles.

## The Atmosphere

Both ends become seas of color with elaborate tifos planned months in advance and non-stop singing for 90+ minutes.`,
    category: 'rivalry',
    tags: ['derby', 'morocco', 'casablanca'],
    readTime: 10,
    isFeatured: true,
    status: 'published',
    publishedAt: new Date('2024-01-20')
  },
  {
    title: 'South American Passion: The History of Barras Bravas',
    slug: 'south-american-passion-barra-bravas',
    excerpt: 'How South America created its own unique supporter culture.',
    content: `# South American Passion

While Europe developed the Ultra movement, South America created the Barras Bravas tradition.

## The Aguante

Central to barra culture is "aguante" - the ability to endure and never abandon your team.

## Brazil's Torcidas

Brazilian supporter culture developed with groups like Gaviões da Fiel, the world's largest organized supporter group.`,
    category: 'history',
    tags: ['south-america', 'argentina', 'brazil'],
    readTime: 15,
    isFeatured: false,
    status: 'published',
    publishedAt: new Date('2024-01-08')
  },
  {
    title: 'Interview: The Capos of GREEN BOYS 2005',
    slug: 'interview-green-boys-leaders',
    excerpt: 'An exclusive conversation with the leadership of Africa\'s most influential Ultra group.',
    content: `# Interview: The Capos of GREEN BOYS 2005

## On the Founding

"We were young, passionate about Raja, and frustrated with supporter culture in 2005. So on September 13, 2005, in Derb Sultan, we created GREEN BOYS."

## On Creating Tifos

"It starts months before. Design, materials, execution - hundreds of members working together."

## On What Ultra Means

"It's not just about football. It's about identity, creativity, and pushing boundaries."`,
    category: 'interview',
    tags: ['interview', 'morocco', 'green-boys'],
    readTime: 8,
    isFeatured: false,
    status: 'published',
    publishedAt: new Date('2024-02-01')
  }
];

// ==================== SEED FUNCTION ====================
async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected!');

    // Get or create models
    const User = mongoose.models.User || mongoose.model('User', UserSchema);
    const UltraGroup = mongoose.models.UltraGroup || mongoose.model('UltraGroup', UltraGroupSchema);
    const Article = mongoose.models.Article || mongoose.model('Article', ArticleSchema);

    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany({ role: 'admin' });
    await UltraGroup.deleteMany({});
    await Article.deleteMany({});

    // Create admin user
    console.log('Creating admin user...');
    const hashedPassword = await bcrypt.hash('Admin123!@#', 12);
    const admin = await User.create({
      name: 'Admin',
      email: 'admin@mouvement.com',
      password: hashedPassword,
      role: 'admin',
      isVerified: true
    });
    console.log('Admin created: admin@mouvement.com / Admin123!@#');

    // Seed groups
    console.log('Seeding Ultra groups...');
    const groupsWithAuthor = groups.map(g => ({
      ...g,
      author: admin._id,
      views: Math.floor(Math.random() * 50000) + 1000,
      likes: Math.floor(Math.random() * 10000) + 500
    }));
    await UltraGroup.insertMany(groupsWithAuthor);
    console.log(`Seeded ${groups.length} Ultra groups`);

    // Seed articles
    console.log('Seeding articles...');
    const articlesWithAuthor = articles.map(a => ({
      ...a,
      author: admin._id,
      views: Math.floor(Math.random() * 20000) + 500,
      likes: Math.floor(Math.random() * 2000) + 100
    }));
    await Article.insertMany(articlesWithAuthor);
    console.log(`Seeded ${articles.length} articles`);

    console.log('\n✅ Seeding complete!');
    console.log('\nAdmin credentials:');
    console.log('Email: admin@mouvement.com');
    console.log('Password: Admin123!@#');

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seed();

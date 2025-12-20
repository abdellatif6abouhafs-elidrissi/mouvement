/**
 * Master Seed Script - Seeds all MOUVEMENT data
 * Run with: npx ts-node scripts/seed-master.ts
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config({ path: '.env.local' });

// ==================== SCHEMAS ====================
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
  translations: [{
    locale: String,
    history: String,
    motto: String,
    values: [String]
  }],
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
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: true },
  status: { type: String, default: 'published' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const ArticleSchema = new mongoose.Schema({
  translations: [{
    locale: String,
    title: String,
    slug: String,
    excerpt: String,
    content: String
  }],
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

const TimelineSchema = new mongoose.Schema({
  year: Number,
  region: String,
  translations: [{ locale: String, title: String, description: String }],
  location: String,
  countryCode: String,
  group: String,
  groupSlug: String,
  image: String,
  isHighlight: Boolean,
  order: Number
}, { timestamps: true });

const TifoSchema = new mongoose.Schema({
  translations: [{ locale: String, title: String, description: String }],
  group: String,
  groupSlug: String,
  club: String,
  country: String,
  countryCode: String,
  date: Date,
  match: String,
  stadium: String,
  image: String,
  video: String,
  views: Number,
  likes: Number,
  isFeatured: Boolean,
  isSpotlight: Boolean,
  participantsCount: Number
}, { timestamps: true });

const ChantSchema = new mongoose.Schema({
  translations: [{ locale: String, title: String, lyrics: String, origin: String }],
  group: String,
  groupSlug: String,
  club: String,
  country: String,
  countryCode: String,
  duration: String,
  audio: String,
  views: Number,
  likes: Number,
  isFeatured: Boolean,
  yearCreated: Number
}, { timestamps: true });

const GlossaryTermSchema = new mongoose.Schema({
  term: String,
  translations: [{ locale: String, definition: String, example: String }],
  origin: String,
  category: String,
  relatedTerms: [String]
}, { timestamps: true });

// ==================== ULTRA GROUPS DATA ====================
const ultraGroups = [
  {
    name: 'GREEN BOYS 2005',
    slug: 'green-boys-2005',
    club: 'Raja Club Athletic',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    translations: [
      { locale: 'en', history: 'GREEN BOYS 2005 was founded on September 13, 2005, in Derb Sultan, Casablanca. They revolutionized Ultra culture in Africa with spectacular tifos and powerful chants. As the first Ultra group in Morocco, they pioneered a movement that spread across the continent.', motto: 'Ultras Green Boys - Passion Without Limits', values: ['Passion', 'Creativity', 'Unity', 'African Pride'] },
      { locale: 'fr', history: 'GREEN BOYS 2005 a été fondé le 13 septembre 2005 à Derb Sultan, Casablanca. Ils ont révolutionné la culture Ultra en Afrique avec des tifos spectaculaires et des chants puissants. Premier groupe Ultra au Maroc, ils ont été les pionniers d\'un mouvement qui s\'est répandu sur tout le continent.', motto: 'Ultras Green Boys - Passion Sans Limites', values: ['Passion', 'Créativité', 'Unité', 'Fierté Africaine'] },
      { locale: 'ar', history: 'تأسست غرين بويز 2005 في 13 سبتمبر 2005 في درب السلطان، الدار البيضاء. أحدثوا ثورة في ثقافة الألتراس في أفريقيا بتيفوهات مذهلة وهتافات قوية. كأول مجموعة ألتراس في المغرب، كانوا رواد حركة انتشرت عبر القارة.', motto: 'ألتراس غرين بويز - شغف بلا حدود', values: ['الشغف', 'الإبداع', 'الوحدة', 'الفخر الأفريقي'] }
    ],
    colors: ['#00A651', '#FFFFFF'],
    symbols: ['Eagle', 'Crown', 'Green Star'],
    membersEstimate: '60,000+',
    stadium: 'Stade Mohammed V',
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
    translations: [
      { locale: 'en', history: 'Curva Sud Milano is one of the oldest Ultra groups in the world. Founded in 1968, they pioneered many elements of Ultra culture that spread globally. Their tifos and coordinated displays set the standard for supporter movements worldwide.', motto: 'Siamo Noi, I Campioni Dell\'Italia', values: ['Tradition', 'Passion', 'Milano', 'Glory'] },
      { locale: 'it', history: 'La Curva Sud Milano è uno dei gruppi Ultra più antichi al mondo. Fondato nel 1968, ha pionierizzato molti elementi della cultura Ultra che si sono diffusi globalmente. Le loro coreografie e i loro display coordinati hanno stabilito lo standard per i movimenti di tifosi in tutto il mondo.', motto: 'Siamo Noi, I Campioni Dell\'Italia', values: ['Tradizione', 'Passione', 'Milano', 'Gloria'] }
    ],
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
    translations: [
      { locale: 'en', history: 'The Yellow Wall at Signal Iduna Park is the largest standing terrace in European football, holding 24,454 fans. The Südtribüne creates an atmosphere that is feared by opposing teams and admired worldwide.', motto: 'Echte Liebe - True Love', values: ['Unity', 'Echte Liebe', 'Yellow Pride'] },
      { locale: 'de', history: 'Die Gelbe Wand im Signal Iduna Park ist die größte Stehplatztribüne im europäischen Fußball mit 24.454 Fans. Die Südtribüne schafft eine Atmosphäre, die von gegnerischen Mannschaften gefürchtet und weltweit bewundert wird.', motto: 'Echte Liebe', values: ['Einheit', 'Echte Liebe', 'Gelber Stolz'] }
    ],
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
    translations: [
      { locale: 'en', history: 'La 12 is considered the 12th player of Boca Juniors. They transform La Bombonera into a cauldron of passion, making it one of the most intimidating stadiums in world football.', motto: 'Boca, Yo Te Amo', values: ['Xeneize Pride', 'Passion', 'La Bombonera'] },
      { locale: 'es', history: 'La 12 es considerada el jugador número 12 de Boca Juniors. Transforman La Bombonera en un caldero de pasión, convirtiéndola en uno de los estadios más intimidantes del fútbol mundial.', motto: 'Boca, Yo Te Amo', values: ['Orgullo Xeneize', 'Pasión', 'La Bombonera'] }
    ],
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
    translations: [
      { locale: 'en', history: 'Ultras Ahlawy revolutionized supporter culture in Egypt and the Arab world since 2007. Supporting the most successful club in African football, they bring unmatched passion to Cairo International Stadium.', motto: 'Ya Ahly, Ya Ahly', values: ['Red Devils', 'African Pride', 'Unity'] },
      { locale: 'ar', history: 'ألتراس أهلاوي أحدثوا ثورة في ثقافة المشجعين في مصر والعالم العربي منذ 2007. يدعمون أنجح نادٍ في كرة القدم الأفريقية، ويجلبون شغفاً لا مثيل له إلى ستاد القاهرة الدولي.', motto: 'يا أهلي، يا أهلي', values: ['الشياطين الحمر', 'الفخر الأفريقي', 'الوحدة'] }
    ],
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
    translations: [
      { locale: 'en', history: 'The Kop at Anfield is perhaps the most famous stand in world football. "You\'ll Never Walk Alone" is football\'s most iconic anthem, sung before every match since the 1960s.', motto: 'You\'ll Never Walk Alone', values: ['Unity', 'Tradition', 'YNWA'] }
    ],
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
    translations: [
      { locale: 'en', history: 'Gaviões da Fiel is the world\'s largest organized supporter group with over 100,000 registered members. Their samba drums and passionate support define Brazilian football culture.', motto: 'O Bando de Loucos', values: ['Fidelity', 'Samba', 'Corinthians'] },
      { locale: 'pt-br', history: 'A Gaviões da Fiel é a maior torcida organizada do mundo com mais de 100.000 membros registrados. Suas batidas de samba e apoio apaixonado definem a cultura do futebol brasileiro.', motto: 'O Bando de Loucos', values: ['Fidelidade', 'Samba', 'Corinthians'] }
    ],
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Hawk', 'Ship'],
    membersEstimate: '120,000+',
    stadium: 'Neo Química Arena',
    coordinates: { lat: -23.5453, lng: -46.4742 },
    isFeatured: true
  },
  {
    name: 'Winners',
    slug: 'winners',
    club: 'Wydad Athletic Club',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    translations: [
      { locale: 'en', history: 'Winners support Wydad AC, Raja\'s eternal rival. The Casablanca Derby is considered one of the most intense atmospheres in world football.', motto: 'Always Winners', values: ['Victory', 'Honor', 'Tradition'] },
      { locale: 'ar', history: 'وينرز يدعمون الوداد، الغريم الأزلي للرجاء. ديربي الدار البيضاء يُعتبر من أكثر الأجواء حدة في كرة القدم العالمية.', motto: 'دائماً رابحون', values: ['النصر', 'الشرف', 'التقليد'] }
    ],
    colors: ['#E31B23', '#FFFFFF'],
    symbols: ['Lion', 'Crown'],
    membersEstimate: '45,000+',
    stadium: 'Stade Mohammed V',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    isFeatured: false
  }
];

// ==================== ARTICLES DATA ====================
const articles = [
  {
    translations: [
      { locale: 'en', title: 'The Art of Tifo: A Visual Revolution in Football Stadiums', slug: 'art-of-tifo-visual-revolution', excerpt: 'Exploring how massive choreographed displays transformed football terraces into open-air galleries.', content: '# The Art of Tifo: A Visual Revolution\n\nThe word "tifo" comes from Italian, describing the passionate delirium of supporters. What started in Italian stadiums in the 1970s has evolved into one of the most spectacular art forms in sports.\n\n## The Making of a Tifo\n\nCreating a tifo requires months of planning, coordination, and execution. Groups source materials, design intricate artworks, and coordinate hundreds of volunteers for the reveal.\n\n## Cultural Impact\n\nTifos have become a form of cultural expression, celebrating local identity and honoring legends of the game.' },
      { locale: 'fr', title: 'L\'Art du Tifo : Une Révolution Visuelle dans les Stades', slug: 'art-du-tifo-revolution-visuelle', excerpt: 'Comment les affichages chorégraphiés massifs ont transformé les tribunes en galeries à ciel ouvert.', content: '# L\'Art du Tifo : Une Révolution Visuelle\n\nLe mot "tifo" vient de l\'italien, décrivant le délire passionné des supporters. Ce qui a commencé dans les stades italiens dans les années 1970 est devenu l\'une des formes d\'art les plus spectaculaires du sport.' },
      { locale: 'ar', title: 'فن التيفو: ثورة بصرية في ملاعب كرة القدم', slug: 'fan-tifo-thawra-basariya', excerpt: 'استكشاف كيف حولت العروض المنسقة الضخمة مدرجات كرة القدم إلى معارض مفتوحة.', content: '# فن التيفو: ثورة بصرية\n\nكلمة "تيفو" تأتي من الإيطالية، وتصف هذيان المشجعين العاطفي. ما بدأ في الملاعب الإيطالية في السبعينيات تطور ليصبح واحداً من أكثر أشكال الفن إثارة في الرياضة.' }
    ],
    category: 'culture',
    tags: ['tifo', 'art', 'choreography'],
    readTime: 8,
    isFeatured: true,
    status: 'published',
    publishedAt: new Date('2024-01-15')
  },
  {
    translations: [
      { locale: 'en', title: 'The History of the Ultra Movement: From Milan to the World', slug: 'history-of-ultra-movement', excerpt: 'Tracing the origins of organized supporter culture from 1960s Italy to a global phenomenon.', content: '# The History of the Ultra Movement\n\nThe Ultra movement was born in Italy during the late 1960s. The term "ultras" first appeared at AC Milan\'s Curva Sud in 1968.\n\n## Key Milestones\n\n- 1968: Fossa dei Leoni forms at AC Milan\n- 1969: Birth of Curva Nord Inter\n- 1972: Curva A Napoli established\n- 2005: North African Ultra revolution\n\n## Core Values\n\n1. Unconditional Support\n2. Independence from club management\n3. Creativity in expression\n4. Community and brotherhood' },
      { locale: 'fr', title: 'L\'Histoire du Mouvement Ultra : De Milan au Monde', slug: 'histoire-mouvement-ultra', excerpt: 'Retracer les origines de la culture supporter organisée des années 1960 en Italie à un phénomène mondial.', content: '# L\'Histoire du Mouvement Ultra\n\nLe mouvement Ultra est né en Italie à la fin des années 1960.' }
    ],
    category: 'history',
    tags: ['history', 'italy', 'origins'],
    readTime: 12,
    isFeatured: true,
    status: 'published',
    publishedAt: new Date('2024-01-10')
  },
  {
    translations: [
      { locale: 'en', title: 'The Casablanca Derby: A Tale of Two Colors', slug: 'casablanca-derby-tale-two-colors', excerpt: 'Inside Africa\'s most intense football rivalry between Raja and Wydad.', content: '# The Casablanca Derby\n\nIn the heart of Morocco\'s economic capital, two giants share the same stadium but exist in completely different worlds.\n\n## Green vs Red\n\nWhen Raja (green) and Wydad (red) meet, Stade Mohammed V holds 80,000+ spectators witnessing one of football\'s greatest spectacles.\n\n## The Atmosphere\n\nBoth ends become seas of color with elaborate tifos planned months in advance and non-stop singing for 90+ minutes.' },
      { locale: 'ar', title: 'ديربي الدار البيضاء: حكاية لونين', slug: 'derby-dar-bayda', excerpt: 'داخل أكثر منافسات كرة القدم حدة في أفريقيا بين الرجاء والوداد.', content: '# ديربي الدار البيضاء\n\nفي قلب العاصمة الاقتصادية للمغرب، عملاقان يتقاسمان نفس الملعب لكنهما يعيشان في عالمين مختلفين تماماً.' }
    ],
    category: 'rivalry',
    tags: ['derby', 'morocco', 'casablanca', 'raja', 'wydad'],
    readTime: 10,
    isFeatured: true,
    status: 'published',
    publishedAt: new Date('2024-01-20')
  }
];

// ==================== TIMELINE DATA ====================
const timelineEvents = [
  {
    year: 1968, region: 'europe',
    translations: [
      { locale: 'en', title: 'Birth of the Ultras Movement', description: 'The first organized Ultra group, Fossa dei Leoni, is founded at AC Milan.' },
      { locale: 'fr', title: 'Naissance du Mouvement Ultra', description: 'Le premier groupe Ultra organisé, Fossa dei Leoni, est fondé à l\'AC Milan.' },
      { locale: 'ar', title: 'ولادة حركة الألتراس', description: 'تأسيس أول مجموعة ألتراس منظمة، فوسا دي ليوني، في نادي إي سي ميلان.' },
      { locale: 'it', title: 'Nascita del Movimento Ultra', description: 'Il primo gruppo Ultra organizzato, Fossa dei Leoni, viene fondato all\'AC Milan.' }
    ],
    location: 'Milan, Italy', countryCode: 'IT', group: 'Fossa dei Leoni', isHighlight: true, order: 1
  },
  {
    year: 2005, region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'GREEN BOYS 2005 - African Ultra Revolution', description: 'On September 13, 2005, GREEN BOYS 2005 is founded in Derb Sultan, Casablanca. First Ultra group in Morocco.' },
      { locale: 'fr', title: 'GREEN BOYS 2005 - Révolution Ultra Africaine', description: 'Le 13 septembre 2005, GREEN BOYS 2005 est fondé à Derb Sultan, Casablanca.' },
      { locale: 'ar', title: 'غرين بويز 2005 - ثورة الألتراس الأفريقية', description: 'في 13 سبتمبر 2005، تأسست غرين بويز 2005 في درب السلطان، الدار البيضاء.' }
    ],
    location: 'Casablanca, Morocco', countryCode: 'MA', group: 'GREEN BOYS 2005', groupSlug: 'green-boys-2005', isHighlight: true, order: 6
  },
  {
    year: 2022, region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'Morocco\'s World Cup Miracle', description: 'Morocco becomes first African nation to reach FIFA World Cup semi-finals. Moroccan Ultras unite in Qatar.' },
      { locale: 'ar', title: 'معجزة المغرب في كأس العالم', description: 'المغرب أول دولة أفريقية تصل إلى نصف نهائي كأس العالم. ألتراس المغرب يتحدون في قطر.' }
    ],
    location: 'Qatar', countryCode: 'QA', group: 'Moroccan Ultras', isHighlight: true, order: 10
  }
];

// ==================== TIFOS DATA ====================
const tifos = [
  {
    translations: [
      { locale: 'en', title: 'African Champions', description: 'A massive 3D tifo celebrating Raja Casablanca\'s CAF Champions League triumph.' },
      { locale: 'ar', title: 'أبطال أفريقيا', description: 'تيفو ثلاثي الأبعاد ضخم يحتفل بانتصار الرجاء في دوري أبطال أفريقيا.' }
    ],
    group: 'GREEN BOYS 2005', groupSlug: 'green-boys-2005', club: 'Raja Casablanca',
    country: 'Morocco', countryCode: 'MA', date: new Date('2023-12-15'),
    match: 'Raja vs Wydad - Casablanca Derby', stadium: 'Stade Mohammed V',
    views: 450000, likes: 125000, isFeatured: true, isSpotlight: true, participantsCount: 45000
  },
  {
    translations: [
      { locale: 'en', title: 'Champions League Nights', description: 'San Siro erupts with red and black flames for the Champions League.' },
      { locale: 'it', title: 'Notti di Champions League', description: 'San Siro esplode con fiamme rossonere per la Champions League.' }
    ],
    group: 'Curva Sud Milano', groupSlug: 'curva-sud-milano', club: 'AC Milan',
    country: 'Italy', countryCode: 'IT', date: new Date('2023-02-14'),
    match: 'AC Milan vs Tottenham', stadium: 'San Siro',
    views: 890000, likes: 234000, isFeatured: true, isSpotlight: false, participantsCount: 25000
  }
];

// ==================== CHANTS DATA ====================
const chants = [
  {
    translations: [
      { locale: 'en', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta', origin: 'Created by GREEN BOYS 2005 in 2006, the signature chant of Raja Casablanca.' },
      { locale: 'ar', title: 'ديما راجا', lyrics: 'ديما راجا، ديما راجا\nفي قلبي أنت، في قلبي أنت', origin: 'أنشأها غرين بويز 2005 في عام 2006، أغنية الرجاء البيضاوي المميزة.' }
    ],
    group: 'GREEN BOYS 2005', groupSlug: 'green-boys-2005', club: 'Raja Casablanca',
    country: 'Morocco', countryCode: 'MA', duration: '3:45',
    views: 890000, likes: 234000, isFeatured: true, yearCreated: 2006
  },
  {
    translations: [
      { locale: 'en', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high', origin: 'Originally from the 1945 musical Carousel, adopted by Liverpool fans in the 1960s.' }
    ],
    group: 'The Kop', groupSlug: 'the-kop', club: 'Liverpool FC',
    country: 'England', countryCode: 'GB', duration: '2:58',
    views: 5400000, likes: 1890000, isFeatured: true, yearCreated: 1963
  }
];

// ==================== GLOSSARY DATA ====================
const glossaryTerms = [
  {
    term: 'Capo',
    translations: [
      { locale: 'en', definition: 'The leader who directs chanting and choreography in the stands.', example: 'The capo raised his megaphone to lead the next chant.' },
      { locale: 'ar', definition: 'القائد الذي يوجه الهتافات والتصميم الفني في المدرجات.', example: 'رفع الكابو مكبر صوته لقيادة الهتاف التالي.' }
    ],
    origin: 'Italian', category: 'organization', relatedTerms: ['Curva', 'Tifo']
  },
  {
    term: 'Tifo',
    translations: [
      { locale: 'en', definition: 'A choreographed display using cards, banners, flags to create visual art in the stands.', example: 'The tifo covered the entire north stand.' },
      { locale: 'ar', definition: 'عرض منسق باستخدام البطاقات واللافتات والأعلام لإنشاء فن بصري في المدرجات.', example: 'التيفو غطى المدرج الشمالي بالكامل.' }
    ],
    origin: 'Italian (tifoso = supporter)', category: 'tifo', relatedTerms: ['Curva', 'Striscione']
  },
  {
    term: 'Curva',
    translations: [
      { locale: 'en', definition: 'The curved end sections of a stadium where organized Ultra groups gather.', example: 'The Curva Sud of AC Milan is one of the most famous.' },
      { locale: 'it', definition: 'Le sezioni curve dove si radunano i gruppi Ultra organizzati.', example: 'La Curva Sud del Milan è una delle più famose.' }
    ],
    origin: 'Italian', category: 'general', relatedTerms: ['Tifo', 'Capo']
  }
];

// ==================== SEED FUNCTION ====================
async function seedAll() {
  try {
    console.log('🚀 Starting MOUVEMENT Master Seed...\n');
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('✅ Connected!\n');

    // Get or create models
    const User = mongoose.models.User || mongoose.model('User', UserSchema);
    const UltraGroup = mongoose.models.UltraGroup || mongoose.model('UltraGroup', UltraGroupSchema);
    const Article = mongoose.models.Article || mongoose.model('Article', ArticleSchema);
    const Timeline = mongoose.models.Timeline || mongoose.model('Timeline', TimelineSchema);
    const Tifo = mongoose.models.Tifo || mongoose.model('Tifo', TifoSchema);
    const Chant = mongoose.models.Chant || mongoose.model('Chant', ChantSchema);
    const GlossaryTerm = mongoose.models.GlossaryTerm || mongoose.model('GlossaryTerm', GlossaryTermSchema);

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany({ role: 'admin' });
    await UltraGroup.deleteMany({});
    await Article.deleteMany({});
    await Timeline.deleteMany({});
    await Tifo.deleteMany({});
    await Chant.deleteMany({});
    await GlossaryTerm.deleteMany({});
    console.log('✅ Data cleared\n');

    // Create admin user
    console.log('👤 Creating admin user...');
    const hashedPassword = await bcrypt.hash('Admin123!@#', 12);
    const admin = await User.create({
      name: 'Admin',
      email: 'admin@mouvement.com',
      password: hashedPassword,
      role: 'admin',
      isVerified: true
    });
    console.log('✅ Admin created: admin@mouvement.com / Admin123!@#\n');

    // Seed Ultra Groups
    console.log('🏴 Seeding Ultra groups...');
    const groupsWithAuthor = ultraGroups.map(g => ({
      ...g,
      author: admin._id,
      views: Math.floor(Math.random() * 50000) + 1000,
      likes: Math.floor(Math.random() * 10000) + 500
    }));
    await UltraGroup.insertMany(groupsWithAuthor);
    console.log(`✅ Seeded ${ultraGroups.length} Ultra groups\n`);

    // Seed Articles
    console.log('📰 Seeding articles...');
    const articlesWithAuthor = articles.map(a => ({
      ...a,
      author: admin._id,
      views: Math.floor(Math.random() * 20000) + 500,
      likes: Math.floor(Math.random() * 2000) + 100
    }));
    await Article.insertMany(articlesWithAuthor);
    console.log(`✅ Seeded ${articles.length} articles\n`);

    // Seed Timeline
    console.log('📅 Seeding timeline events...');
    await Timeline.insertMany(timelineEvents);
    console.log(`✅ Seeded ${timelineEvents.length} timeline events\n`);

    // Seed Tifos
    console.log('🎨 Seeding tifos...');
    await Tifo.insertMany(tifos);
    console.log(`✅ Seeded ${tifos.length} tifos\n`);

    // Seed Chants
    console.log('🎵 Seeding chants...');
    await Chant.insertMany(chants);
    console.log(`✅ Seeded ${chants.length} chants\n`);

    // Seed Glossary
    console.log('📖 Seeding glossary terms...');
    await GlossaryTerm.insertMany(glossaryTerms);
    console.log(`✅ Seeded ${glossaryTerms.length} glossary terms\n`);

    console.log('═══════════════════════════════════════');
    console.log('✅ MOUVEMENT MASTER SEED COMPLETE!');
    console.log('═══════════════════════════════════════\n');
    console.log('Summary:');
    console.log(`  • Admin User: 1`);
    console.log(`  • Ultra Groups: ${ultraGroups.length}`);
    console.log(`  • Articles: ${articles.length}`);
    console.log(`  • Timeline Events: ${timelineEvents.length}`);
    console.log(`  • Tifos: ${tifos.length}`);
    console.log(`  • Chants: ${chants.length}`);
    console.log(`  • Glossary Terms: ${glossaryTerms.length}`);
    console.log('\nAdmin credentials:');
    console.log('  Email: admin@mouvement.com');
    console.log('  Password: Admin123!@#');

    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

seedAll();

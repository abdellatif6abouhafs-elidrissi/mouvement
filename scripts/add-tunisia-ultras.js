const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

const tunisianUltras = [
  {
    name: "Ultras L'Emkachkhines",
    slug: 'ultras-emkachkhines',
    club: 'Espérance Sportive de Tunis',
    city: 'Tunis',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 2002,
    membersEstimate: '50K+',
    stadium: 'Stade Olympique de Radès',
    colors: ['#D00027', '#FFD700'], // Red and Gold
    symbols: ['Blood', 'Gold', 'Eagle'],
    motto: 'Sang et Or pour toujours',
    logo: '/images/groups/ultras-emkachkhines.webp',
    coverImage: '/images/groups/ultras-emkachkhines.webp',
    history: {
      en: "Ultras L'Emkachkhines, founded in 2002, is one of the oldest and most powerful Ultra groups in Africa. Supporting Espérance Sportive de Tunis, they are known for their spectacular tifos, incredible organization, and unwavering passion. The name 'Emkachkhines' represents their hardcore identity and dedication to the Blood and Gold colors.",
      fr: "Ultras L'Emkachkhines, fondé en 2002, est l'un des groupes Ultra les plus anciens et les plus puissants d'Afrique. Supportant l'Espérance Sportive de Tunis, ils sont connus pour leurs tifos spectaculaires, leur organisation incroyable et leur passion indéfectible.",
      ar: "ألتراس المكشخين، تأسست عام 2002، هي واحدة من أقدم وأقوى مجموعات الألتراس في أفريقيا. يدعمون الترجي الرياضي التونسي، وهم معروفون بتيفوهاتهم المذهلة وتنظيمهم الرائع وشغفهم الذي لا يتزعزع."
    },
    values: ['Passion', 'Organization', 'Loyalty', 'Creativity'],
    coordinates: { lat: 36.8065, lng: 10.1815 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Supras Sud',
    slug: 'supras-sud',
    club: 'Espérance Sportive de Tunis',
    city: 'Tunis',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 2003,
    membersEstimate: '30K+',
    stadium: 'Stade Olympique de Radès',
    colors: ['#D00027', '#FFD700'],
    symbols: ['South Stand', 'Eagle'],
    motto: 'Sud toujours fidèle',
    logo: '/images/groups/supras-sud.webp',
    coverImage: '/images/groups/supras-sud.webp',
    history: {
      en: "Supras Sud, founded in 2003, occupies the South Stand at Radès Stadium. Together with Ultras L'Emkachkhines, they create one of the most intimidating atmospheres in African football. Known for their coordinated chants and visual displays.",
      fr: "Supras Sud, fondé en 2003, occupe la tribune Sud du Stade de Radès. Avec les Ultras L'Emkachkhines, ils créent l'une des atmosphères les plus intimidantes du football africain.",
      ar: "سوبراس سود، تأسست عام 2003، تحتل المدرج الجنوبي في ملعب رادس. مع ألتراس المكشخين، يخلقون واحدة من أكثر الأجواء رهبة في كرة القدم الأفريقية."
    },
    values: ['Unity', 'Passion', 'Support'],
    coordinates: { lat: 36.8065, lng: 10.1815 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Brigade Rouge',
    slug: 'brigade-rouge',
    club: 'Étoile Sportive du Sahel',
    city: 'Sousse',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 2001,
    membersEstimate: '40K+',
    stadium: 'Stade Olympique de Sousse',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Star', 'Red Brigade'],
    motto: 'Rouge sang, coeur étoilé',
    logo: '/images/groups/brigade-rouge.webp',
    coverImage: '/images/groups/brigade-rouge.webp',
    history: {
      en: "Brigade Rouge, founded in 2001, is the main Ultra group of Étoile Sportive du Sahel from Sousse. One of the pioneers of Ultra culture in Tunisia, they are known for their passionate support especially during derby matches and African cup competitions. Their red colors and star symbol represent the club's identity.",
      fr: "Brigade Rouge, fondée en 2001, est le principal groupe Ultra de l'Étoile Sportive du Sahel de Sousse. Pionniers de la culture Ultra en Tunisie, ils sont connus pour leur soutien passionné lors des derbys et compétitions africaines.",
      ar: "بريقاد روج، تأسست عام 2001، هي المجموعة الألتراس الرئيسية للنجم الرياضي الساحلي من سوسة. من رواد ثقافة الألتراس في تونس، معروفون بدعمهم الشغوف خاصة في مباريات الديربي والمسابقات الأفريقية."
    },
    values: ['Passion', 'Pride', 'History', 'Fighting Spirit'],
    coordinates: { lat: 35.8288, lng: 10.6405 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Fighters',
    slug: 'fighters-ess',
    club: 'Étoile Sportive du Sahel',
    city: 'Sousse',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 2004,
    membersEstimate: '20K+',
    stadium: 'Stade Olympique de Sousse',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Fist', 'Star'],
    motto: 'Never give up',
    logo: '/images/groups/fighters-ess.webp',
    coverImage: '/images/groups/fighters-ess.webp',
    history: {
      en: "Fighters, founded in 2004, is another passionate Ultra group supporting Étoile Sportive du Sahel. Together with Brigade Rouge, they make Sousse one of the most hostile destinations for visiting teams in Tunisian football.",
      fr: "Fighters, fondé en 2004, est un autre groupe Ultra passionné soutenant l'Étoile Sportive du Sahel. Avec Brigade Rouge, ils font de Sousse l'une des destinations les plus hostiles pour les équipes visiteuses.",
      ar: "فايترز، تأسست عام 2004، هي مجموعة ألتراس أخرى تدعم النجم الرياضي الساحلي. مع بريقاد روج، يجعلون سوسة واحدة من أصعب الوجهات للفرق الزائرة."
    },
    values: ['Fighting Spirit', 'Loyalty', 'Passion'],
    coordinates: { lat: 35.8288, lng: 10.6405 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Leaders Clubistes',
    slug: 'leaders-clubistes',
    club: 'Club Africain',
    city: 'Tunis',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 1995,
    membersEstimate: '45K+',
    stadium: 'Stade Olympique de Radès',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Africa', 'Eagle', 'CA'],
    motto: 'Club Africain dans le sang',
    logo: '/images/groups/leaders-clubistes.webp',
    coverImage: '/images/groups/leaders-clubistes.webp',
    history: {
      en: "Leaders Clubistes, founded in 1995, is one of the OLDEST Ultra movements in Africa. Supporting Club Africain, they have nearly 30 years of history in tifo culture and Ultra traditions. They are pioneers who influenced countless Ultra groups across the continent.",
      fr: "Leaders Clubistes, fondé en 1995, est l'un des PLUS ANCIENS mouvements Ultra d'Afrique. Supportant le Club Africain, ils ont près de 30 ans d'histoire dans la culture tifo et les traditions Ultra. Ce sont des pionniers qui ont influencé d'innombrables groupes Ultra à travers le continent.",
      ar: "ليدرز كلوبيست، تأسست عام 1995، هي واحدة من أقدم حركات الألتراس في أفريقيا. يدعمون النادي الإفريقي، ولديهم ما يقرب من 30 عامًا من التاريخ في ثقافة التيفو وتقاليد الألتراس. هم رواد أثروا في مجموعات ألتراس لا حصر لها عبر القارة."
    },
    values: ['History', 'Tradition', 'Pride', 'Leadership'],
    coordinates: { lat: 36.8065, lng: 10.1815 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'North Vandals',
    slug: 'north-vandals',
    club: 'Club Africain',
    city: 'Tunis',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 2003,
    membersEstimate: '25K+',
    stadium: 'Stade Olympique de Radès',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['North Stand', 'Vandal'],
    motto: 'North Side Pride',
    logo: '/images/groups/north-vandals.webp',
    coverImage: '/images/groups/north-vandals.webp',
    history: {
      en: "North Vandals, founded in 2003, occupies the North Stand and brings raw energy to Club Africain matches. Together with Leaders Clubistes, they represent one of the most historic Ultra movements in African football.",
      fr: "North Vandals, fondé en 2003, occupe la tribune Nord et apporte une énergie brute aux matchs du Club Africain. Avec Leaders Clubistes, ils représentent l'un des mouvements Ultra les plus historiques du football africain.",
      ar: "نورث فاندالز، تأسست عام 2003، تحتل المدرج الشمالي وتجلب طاقة خام لمباريات النادي الإفريقي. مع ليدرز كلوبيست، يمثلون واحدة من أكثر حركات الألتراس تاريخية في كرة القدم الأفريقية."
    },
    values: ['Energy', 'Passion', 'Pride'],
    coordinates: { lat: 36.8065, lng: 10.1815 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Sfaxiens',
    slug: 'ultras-sfaxiens',
    club: 'Club Sportif Sfaxien',
    city: 'Sfax',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 2008,
    membersEstimate: '30K+',
    stadium: 'Stade Taïeb Mhiri',
    colors: ['#000000', '#FFD700'], // Black and Yellow
    symbols: ['CSS', 'Eagle'],
    motto: 'Sfax capitale du Sud',
    logo: '/images/groups/ultras-sfaxiens.webp',
    coverImage: '/images/groups/ultras-sfaxiens.webp',
    history: {
      en: "Ultras Sfaxiens, founded in 2008, represents the passionate fans of Club Sportif Sfaxien. Known for creating incredible pressure at Stade Taïeb Mhiri, they are the pride of Sfax and the southern region of Tunisia. Their loyalty and dedication make every home match a fortress.",
      fr: "Ultras Sfaxiens, fondé en 2008, représente les fans passionnés du Club Sportif Sfaxien. Connus pour créer une pression incroyable au Stade Taïeb Mhiri, ils sont la fierté de Sfax et de la région sud de la Tunisie.",
      ar: "ألتراس صفاقسي، تأسست عام 2008، تمثل المشجعين المتحمسين للنادي الصفاقسي. معروفون بخلق ضغط هائل في ملعب الطيب المهيري، هم فخر صفاقس والمنطقة الجنوبية من تونس."
    },
    values: ['Loyalty', 'Pressure', 'Pride', 'Unity'],
    coordinates: { lat: 34.7406, lng: 10.7603 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Marsa',
    slug: 'ultras-marsa',
    club: 'Avenir Sportif de La Marsa',
    city: 'La Marsa',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 2010,
    membersEstimate: '5K+',
    stadium: 'Stade de La Marsa',
    colors: ['#00FF00', '#FFFFFF'], // Green and White
    symbols: ['Sea', 'Green'],
    motto: 'La Marsa dans le coeur',
    logo: '/images/groups/ultras-marsa.webp',
    coverImage: '/images/groups/ultras-marsa.webp',
    history: {
      en: "Ultras Marsa supports Avenir Sportif de La Marsa, a smaller club from the coastal town of La Marsa. Despite the club's size, this dedicated group shows up for important matches and represents the local community with pride.",
      fr: "Ultras Marsa soutient l'Avenir Sportif de La Marsa, un club plus petit de la ville côtière de La Marsa. Malgré la taille du club, ce groupe dévoué est présent lors des matchs importants.",
      ar: "ألتراس مرسى تدعم مستقبل المرسى، نادي أصغر من مدينة المرسى الساحلية. على الرغم من حجم النادي، هذه المجموعة المخلصة تحضر المباريات الكبيرة وتمثل المجتمع المحلي بفخر."
    },
    values: ['Community', 'Pride', 'Dedication'],
    coordinates: { lat: 36.8892, lng: 10.3229 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    status: 'published'
  },
  {
    name: 'Bardo Boys',
    slug: 'bardo-boys',
    club: 'Stade Tunisien',
    city: 'Bardo',
    country: 'Tunisia',
    countryCode: 'TN',
    yearFounded: 2005,
    membersEstimate: '10K+',
    stadium: 'Stade Chedli Zouiten',
    colors: ['#0000FF', '#FFFFFF'], // Blue and White
    symbols: ['Bardo', 'ST'],
    motto: 'Bardo avant tout',
    logo: '/images/groups/bardo-boys.webp',
    coverImage: '/images/groups/bardo-boys.webp',
    history: {
      en: "Bardo Boys represents Stade Tunisien, a historic club from the Bardo district of Tunis. This local Ultra group has a unique identity tied to their neighborhood and brings authentic passion to every match.",
      fr: "Bardo Boys représente le Stade Tunisien, un club historique du quartier du Bardo à Tunis. Ce groupe Ultra local a une identité unique liée à leur quartier et apporte une passion authentique à chaque match.",
      ar: "باردو بويز تمثل الملعب التونسي، نادي تاريخي من حي باردو في تونس. هذه المجموعة الألتراس المحلية لديها هوية فريدة مرتبطة بحيهم وتجلب شغفًا أصيلًا لكل مباراة."
    },
    values: ['Local Pride', 'Identity', 'Passion'],
    coordinates: { lat: 36.8089, lng: 10.1347 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    status: 'published'
  }
];

async function addTunisianUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    for (const ultra of tunisianUltras) {
      // Check if already exists
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      // Add timestamps
      ultra.createdAt = new Date();
      ultra.updatedAt = new Date();
      ultra.views = Math.floor(Math.random() * 50000) + 10000;
      ultra.likes = Math.floor(Math.random() * 10000) + 2000;

      await mongoose.connection.db.collection('ultragroups').insertOne(ultra);
      console.log(`[ADDED] ${ultra.name} - ${ultra.club} (${ultra.city})`);
    }

    // Count total
    const count = await mongoose.connection.db.collection('ultragroups').countDocuments();
    console.log(`\nTotal groups in database: ${count}`);

    await mongoose.disconnect();
    console.log('\nDone! Tunisia Ultras added successfully! 🇹🇳');
  } catch (error) {
    console.error('Error:', error);
  }
}

addTunisianUltras();

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

const algerianUltras = [
  {
    name: 'Ouled El Bahdja',
    slug: 'ouled-el-bahdja',
    club: 'USM Alger',
    city: 'Alger',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2007,
    membersEstimate: '60K+',
    stadium: 'Stade Omar Hamadi (Bologhine)',
    colors: ['#FF0000', '#000000'], // Red and Black
    symbols: ['Skull', 'USMA', 'Bahdja'],
    motto: 'Ouled El Bahdja à jamais',
    logo: '/images/groups/ouled-el-bahdja.webp',
    coverImage: '/images/groups/ouled-el-bahdja.webp',
    history: {
      en: "Ouled El Bahdja (Children of the Beautiful), founded in 2007, is one of the most famous Ultra groups in Africa and the Arab world. Supporting USM Alger, they are legendary for their incredible tifos, emotional chants, and unwavering passion. Their songs have become cultural anthems across Algeria.",
      fr: "Ouled El Bahdja (Les Enfants de la Belle), fondé en 2007, est l'un des groupes Ultra les plus célèbres d'Afrique et du monde arabe. Soutenant l'USM Alger, ils sont légendaires pour leurs tifos incroyables et leurs chants émouvants.",
      ar: "أولاد البهجة، تأسست عام 2007، هي واحدة من أشهر مجموعات الألتراس في أفريقيا والعالم العربي. يدعمون اتحاد العاصمة، وهم أسطوريون بتيفوهاتهم المذهلة وأغانيهم العاطفية التي أصبحت أناشيد ثقافية عبر الجزائر."
    },
    values: ['Passion', 'Art', 'Culture', 'Unity'],
    coordinates: { lat: 36.7538, lng: 3.0588 },
    socialLinks: {
      youtube: 'https://youtube.com/@ouledelbahdjaofficiel',
      instagram: 'https://instagram.com/ouledelbahdjaofficiel'
    },
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Verde Leone',
    slug: 'verde-leone',
    club: 'MC Alger',
    city: 'Alger',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2007,
    membersEstimate: '50K+',
    stadium: 'Stade 5 Juillet 1962',
    colors: ['#006233', '#FFFFFF'], // Green and White
    symbols: ['Lion', 'MCA', 'Green'],
    motto: 'Verde Leone immortale',
    logo: '/images/groups/verde-leone.webp',
    coverImage: '/images/groups/verde-leone.webp',
    history: {
      en: "Ultras Verde Leone (Green Lion), founded in 2007, is the main Ultra group of MC Alger, one of the oldest clubs in Algeria. Known for their Italian-inspired Ultra style, spectacular tifos, and the fierce Algiers derby against USMA.",
      fr: "Ultras Verde Leone (Lion Vert), fondé en 2007, est le principal groupe Ultra du MC Alger, l'un des plus anciens clubs d'Algérie. Connus pour leur style Ultra d'inspiration italienne et le derby féroce d'Alger.",
      ar: "ألتراس فيردي ليوني (الأسد الأخضر)، تأسست عام 2007، هي المجموعة الألتراس الرئيسية لمولودية الجزائر، أحد أقدم الأندية في الجزائر. معروفون بأسلوبهم الألتراس المستوحى من إيطاليا وديربي الجزائر الشرس."
    },
    values: ['Tradition', 'Pride', 'History', 'Passion'],
    coordinates: { lat: 36.7538, lng: 3.0588 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Torino',
    slug: 'torino-mca',
    club: 'MC Alger',
    city: 'Alger',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2005,
    membersEstimate: '30K+',
    stadium: 'Stade 5 Juillet 1962',
    colors: ['#006233', '#FFFFFF'],
    symbols: ['Torino', 'MCA'],
    motto: 'Torino Sud',
    logo: '/images/groups/torino-mca.webp',
    coverImage: '/images/groups/torino-mca.webp',
    history: {
      en: "Torino, founded in 2005, is one of the pioneer Ultra groups of MC Alger, named after the Italian city famous for its Ultra culture. They occupy the South Stand and bring authentic atmosphere to every match.",
      fr: "Torino, fondé en 2005, est l'un des groupes Ultra pionniers du MC Alger, nommé d'après la ville italienne célèbre pour sa culture Ultra.",
      ar: "تورينو، تأسست عام 2005، هي واحدة من مجموعات الألتراس الرائدة لمولودية الجزائر، سُميت على اسم المدينة الإيطالية الشهيرة بثقافتها الألتراس."
    },
    values: ['Pioneer', 'Italian Style', 'Passion'],
    coordinates: { lat: 36.7538, lng: 3.0588 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Kabylie',
    slug: 'ultras-kabylie',
    club: 'JS Kabylie',
    city: 'Tizi Ouzou',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2006,
    membersEstimate: '55K+',
    stadium: 'Stade 1er Novembre 1954',
    colors: ['#FFD700', '#006233'], // Yellow and Green
    symbols: ['Amazigh ⵣ', 'Canary', 'JSK'],
    motto: 'Kabyle et fier',
    logo: '/images/groups/ultras-kabylie.webp',
    coverImage: '/images/groups/ultras-kabylie.webp',
    history: {
      en: "Ultras Kabylie represents JS Kabylie, the most successful Algerian club in African competitions. With a strong Amazigh (Berber) identity, they are known for their yellow and green colors, cultural pride, and massive away following across Algeria and beyond.",
      fr: "Ultras Kabylie représente la JS Kabylie, le club algérien le plus titré en compétitions africaines. Avec une forte identité amazighe, ils sont connus pour leurs couleurs jaune et vert et leur fierté culturelle.",
      ar: "ألتراس القبايل تمثل شبيبة القبائل، النادي الجزائري الأكثر نجاحًا في المسابقات الأفريقية. بهوية أمازيغية قوية، معروفون بألوانهم الأصفر والأخضر وفخرهم الثقافي."
    },
    values: ['Amazigh Identity', 'Success', 'Culture', 'Pride'],
    coordinates: { lat: 36.7169, lng: 4.0497 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Rouge et Blanc',
    slug: 'ultras-rouge-blanc',
    club: 'CR Belouizdad',
    city: 'Alger',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2008,
    membersEstimate: '35K+',
    stadium: 'Stade 20 Août 1955',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['CRB', 'Belouizdad'],
    motto: 'Rouge et Blanc pour toujours',
    logo: '/images/groups/ultras-rouge-blanc.webp',
    coverImage: '/images/groups/ultras-rouge-blanc.webp',
    history: {
      en: "Ultras Rouge et Blanc supports CR Belouizdad, a historic club from the Belouizdad district of Algiers. Known for their red and white passion and strong local identity, they represent the working-class heart of the capital.",
      fr: "Ultras Rouge et Blanc soutient le CR Belouizdad, un club historique du quartier Belouizdad d'Alger. Connus pour leur passion rouge et blanc et leur forte identité locale.",
      ar: "ألتراس روج إي بلان تدعم شباب بلوزداد، نادي تاريخي من حي بلوزداد في الجزائر. معروفون بشغفهم الأحمر والأبيض وهويتهم المحلية القوية."
    },
    values: ['Local Pride', 'Working Class', 'Passion'],
    coordinates: { lat: 36.7538, lng: 3.0588 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Wafae',
    slug: 'ultras-wafae',
    club: 'ES Sétif',
    city: 'Sétif',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2007,
    membersEstimate: '45K+',
    stadium: 'Stade 8 Mai 1945',
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Eagle', 'ESS', 'Ain El Fouara'],
    motto: 'Wafae setifienne',
    logo: '/images/groups/ultras-wafae.webp',
    coverImage: '/images/groups/ultras-wafae.webp',
    history: {
      en: "Ultras Wafae represents ES Sétif, the most titled club in Algerian football. From the historic city of Sétif in the highlands, they are known for their loyalty (Wafae means loyalty in Arabic) and massive support for the Black Eagles.",
      fr: "Ultras Wafae représente l'ES Sétif, le club le plus titré du football algérien. De la ville historique de Sétif, ils sont connus pour leur loyauté et leur soutien massif aux Aigles Noirs.",
      ar: "ألتراس وفاء تمثل وفاق سطيف، النادي الأكثر تتويجًا في كرة القدم الجزائرية. من مدينة سطيف التاريخية، معروفون بوفائهم ودعمهم الهائل للنسور السوداء."
    },
    values: ['Loyalty', 'History', 'Pride', 'Success'],
    coordinates: { lat: 36.1898, lng: 5.4108 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Oran',
    slug: 'ultras-oran',
    club: 'MC Oran',
    city: 'Oran',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2006,
    membersEstimate: '40K+',
    stadium: 'Stade Ahmed Zabana',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['MCO', 'Oran', 'El Bahia'],
    motto: 'Oran El Bahia',
    logo: '/images/groups/ultras-oran.webp',
    coverImage: '/images/groups/ultras-oran.webp',
    history: {
      en: "Ultras Oran represents MC Oran from the western city of Oran, known as 'El Bahia' (The Radiant). With a unique Mediterranean identity and passionate fanbase, they bring the spirit of western Algeria to every match.",
      fr: "Ultras Oran représente le MC Oran de la ville occidentale d'Oran, connue sous le nom d'El Bahia. Avec une identité méditerranéenne unique et une base de fans passionnée.",
      ar: "ألتراس وهران تمثل مولودية وهران من المدينة الغربية وهران، المعروفة بالباهية. بهوية متوسطية فريدة وقاعدة جماهيرية شغوفة."
    },
    values: ['Mediterranean Identity', 'Passion', 'Pride'],
    coordinates: { lat: 35.6969, lng: -0.6331 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Fennecs',
    slug: 'ultras-fennecs',
    club: 'USM Oran',
    city: 'Oran',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2008,
    membersEstimate: '25K+',
    stadium: 'Stade Miloud Hadefi',
    colors: ['#FFD700', '#000000'], // Yellow and Black
    symbols: ['Fennec', 'USMO'],
    motto: 'Fennecs en force',
    logo: '/images/groups/ultras-fennecs.webp',
    coverImage: '/images/groups/ultras-fennecs.webp',
    history: {
      en: "Ultras Fennecs supports USM Oran, rivals of MC Oran in the Oran derby. Named after the Fennec fox, Algeria's national symbol, they represent the other side of Oran's passionate football culture.",
      fr: "Ultras Fennecs soutient l'USM Oran, rivaux du MC Oran dans le derby oranais. Nommés d'après le fennec, symbole national de l'Algérie.",
      ar: "ألتراس فينيكس تدعم اتحاد وهران، منافسي مولودية وهران في ديربي وهران. سُميت على اسم ثعلب الفنك، الرمز الوطني للجزائر."
    },
    values: ['Rivalry', 'Pride', 'Passion'],
    coordinates: { lat: 35.6969, lng: -0.6331 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Constantine',
    slug: 'ultras-constantine',
    club: 'CS Constantine',
    city: 'Constantine',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2009,
    membersEstimate: '35K+',
    stadium: 'Stade Mohamed Hamlaoui',
    colors: ['#006233', '#FFD700'], // Green and Yellow
    symbols: ['Bridges', 'CSC', 'Cirta'],
    motto: 'Constantine la majestueuse',
    logo: '/images/groups/ultras-constantine.webp',
    coverImage: '/images/groups/ultras-constantine.webp',
    history: {
      en: "Ultras Constantine supports CS Constantine from the ancient city of bridges. Known as Cirta in ancient times, Constantine's Ultras bring the majesty of eastern Algeria's biggest city to the terraces.",
      fr: "Ultras Constantine soutient le CS Constantine de l'ancienne ville des ponts. Connue sous le nom de Cirta dans l'antiquité, les Ultras de Constantine apportent la majesté de l'est algérien.",
      ar: "ألتراس قسنطينة تدعم شباب قسنطينة من مدينة الجسور العريقة. معروفة باسم سيرتا في العصور القديمة، يجلب ألتراس قسنطينة عظمة أكبر مدينة في شرق الجزائر."
    },
    values: ['History', 'Pride', 'Majesty'],
    coordinates: { lat: 36.3650, lng: 6.6147 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Annaba',
    slug: 'ultras-annaba',
    club: 'USM Annaba',
    city: 'Annaba',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2010,
    membersEstimate: '20K+',
    stadium: 'Stade 19 Mai 1956',
    colors: ['#FF0000', '#000000'], // Red and Black
    symbols: ['USMA', 'Mediterranean'],
    motto: 'Annaba dans le coeur',
    logo: '/images/groups/ultras-annaba.webp',
    coverImage: '/images/groups/ultras-annaba.webp',
    history: {
      en: "Ultras Annaba represents USM Annaba from the Mediterranean coastal city of Annaba (ancient Hippo Regius). They bring the passion of eastern Algeria to every match.",
      fr: "Ultras Annaba représente l'USM Annaba de la ville côtière méditerranéenne d'Annaba (ancienne Hippo Regius).",
      ar: "ألتراس عنابة تمثل اتحاد عنابة من المدينة الساحلية المتوسطية عنابة (هيبون القديمة). يجلبون شغف شرق الجزائر لكل مباراة."
    },
    values: ['Coastal Pride', 'Passion', 'History'],
    coordinates: { lat: 36.9000, lng: 7.7667 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    status: 'published'
  },
  {
    name: 'Ultras Blida',
    slug: 'ultras-blida',
    club: 'USM Blida',
    city: 'Blida',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2008,
    membersEstimate: '15K+',
    stadium: 'Stade Mustapha Tchaker',
    colors: ['#006233', '#FF0000'], // Green and Red
    symbols: ['Roses', 'USMB', 'Atlas'],
    motto: 'Blida ville des roses',
    logo: '/images/groups/ultras-blida.webp',
    coverImage: '/images/groups/ultras-blida.webp',
    history: {
      en: "Ultras Blida supports USM Blida from the city of roses at the foot of the Atlas Mountains. Their passion reflects the beauty of their historic city.",
      fr: "Ultras Blida soutient l'USM Blida de la ville des roses au pied des montagnes de l'Atlas.",
      ar: "ألتراس البليدة تدعم اتحاد البليدة من مدينة الورود عند سفح جبال الأطلس. شغفهم يعكس جمال مدينتهم التاريخية."
    },
    values: ['Beauty', 'Passion', 'Pride'],
    coordinates: { lat: 36.4700, lng: 2.8300 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    status: 'published'
  },
  {
    name: 'Ultras Béjaïa',
    slug: 'ultras-bejaia',
    club: 'JS Béjaïa',
    city: 'Béjaïa',
    country: 'Algeria',
    countryCode: 'DZ',
    yearFounded: 2010,
    membersEstimate: '20K+',
    stadium: 'Stade de l\'Unité Maghrébine',
    colors: ['#FFD700', '#000000'], // Yellow and Black
    symbols: ['Yemma Gouraya', 'JSB', 'Mediterranean'],
    motto: 'Béjaïa la perle',
    logo: '/images/groups/ultras-bejaia.webp',
    coverImage: '/images/groups/ultras-bejaia.webp',
    history: {
      en: "Ultras Béjaïa represents JS Béjaïa from the beautiful Mediterranean coastal city. With Amazigh heritage and stunning natural scenery, they bring the spirit of Kabylie's coast to the terraces.",
      fr: "Ultras Béjaïa représente la JSM Béjaïa de la belle ville côtière méditerranéenne. Avec un héritage amazigh et des paysages naturels époustouflants.",
      ar: "ألتراس بجاية تمثل شبيبة بجاية من المدينة الساحلية المتوسطية الجميلة. بتراث أمازيغي ومناظر طبيعية خلابة."
    },
    values: ['Amazigh Heritage', 'Beauty', 'Coastal Pride'],
    coordinates: { lat: 36.7500, lng: 5.0833 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    status: 'published'
  }
];

async function addAlgerianUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    for (const ultra of algerianUltras) {
      // Check if already exists
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      // Add timestamps
      ultra.createdAt = new Date();
      ultra.updatedAt = new Date();
      ultra.views = Math.floor(Math.random() * 70000) + 15000;
      ultra.likes = Math.floor(Math.random() * 12000) + 3000;

      await mongoose.connection.db.collection('ultragroups').insertOne(ultra);
      console.log(`[ADDED] ${ultra.name} - ${ultra.club} (${ultra.city})`);
    }

    // Count total
    const count = await mongoose.connection.db.collection('ultragroups').countDocuments();
    console.log(`\n=== Total groups in database: ${count} ===`);

    // List all Algerian groups
    const algerianGroups = await mongoose.connection.db.collection('ultragroups')
      .find({ countryCode: 'DZ' })
      .toArray();
    console.log(`\n🇩🇿 Algerian groups: ${algerianGroups.length}`);
    algerianGroups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Algeria Ultras added successfully! 🇩🇿');
  } catch (error) {
    console.error('Error:', error);
  }
}

addAlgerianUltras();

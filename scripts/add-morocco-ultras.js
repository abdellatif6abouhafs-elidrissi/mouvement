const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

const moroccanUltras = [
  {
    name: 'Winners 2005',
    slug: 'winners-2005',
    club: 'Wydad Athletic Club',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    membersEstimate: '70K+',
    stadium: 'Stade Mohammed V',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Eagle', 'W', 'Crown'],
    motto: 'Winners pour la vie',
    logo: '/images/groups/winners-2005.webp',
    coverImage: '/images/groups/winners-2005.webp',
    history: {
      en: "Winners 2005 is the FIRST Ultra group ever created in Morocco, founded in 2005. Supporting Wydad Athletic Club, they revolutionized fan culture in the country and across Africa. Known for their massive tifos, powerful chants, and continental influence, Winners set the standard for Moroccan Ultra culture.",
      fr: "Winners 2005 est le PREMIER groupe Ultra jamais créé au Maroc, fondé en 2005. Supportant le Wydad Athletic Club, ils ont révolutionné la culture des supporters au pays et à travers l'Afrique. Connus pour leurs tifos massifs et leurs chants puissants.",
      ar: "وينرز 2005 هي أول مجموعة ألتراس تم إنشاؤها في المغرب على الإطلاق، تأسست عام 2005. يدعمون نادي الوداد الرياضي، وقد أحدثوا ثورة في ثقافة المشجعين في البلاد وعبر أفريقيا. معروفون بتيفوهاتهم الضخمة وأهازيجهم القوية وتأثيرهم القاري."
    },
    values: ['Pioneer', 'Passion', 'Pride', 'Unity'],
    coordinates: { lat: 33.5731, lng: -7.5898 },
    socialLinks: {
      facebook: 'https://facebook.com/winners2005',
      instagram: 'https://instagram.com/winners2005',
      youtube: 'https://youtube.com/@winners2005'
    },
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Eagles 2006',
    slug: 'ultras-eagles',
    club: 'Raja Club Athletic',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2006,
    membersEstimate: '40K+',
    stadium: 'Stade Mohammed V',
    colors: ['#006233', '#FFFFFF'], // Green and White
    symbols: ['Eagle', 'Green'],
    motto: 'Eagles fly high',
    logo: '/images/groups/ultras-eagles.webp',
    coverImage: '/images/groups/ultras-eagles.webp',
    history: {
      en: "Ultras Eagles, founded in 2006, is the second major Ultra group supporting Raja Club Athletic alongside Green Boys 2005. Together they create one of the most spectacular atmospheres in African football, known for creative tifos and social messages.",
      fr: "Ultras Eagles, fondé en 2006, est le deuxième grand groupe Ultra soutenant le Raja Club Athletic aux côtés des Green Boys 2005. Ensemble, ils créent l'une des atmosphères les plus spectaculaires du football africain.",
      ar: "ألتراس إيجلز، تأسست عام 2006، هي ثاني أكبر مجموعة ألتراس تدعم نادي الرجاء الرياضي إلى جانب غرين بويز 2005. معًا يخلقون واحدة من أكثر الأجواء روعة في كرة القدم الأفريقية."
    },
    values: ['Creativity', 'Unity', 'Passion', 'Pride'],
    coordinates: { lat: 33.5731, lng: -7.5898 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Askary 2006',
    slug: 'ultras-askary',
    club: 'AS FAR',
    city: 'Rabat',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2006,
    membersEstimate: '25K+',
    stadium: 'Stade Prince Moulay Abdellah',
    colors: ['#FF0000', '#000000'], // Red and Black
    symbols: ['Military Star', 'FAR'],
    motto: 'Askary pour toujours',
    logo: '/images/groups/ultras-askary.webp',
    coverImage: '/images/groups/ultras-askary.webp',
    history: {
      en: "Ultras Askary, founded in 2006, supports AS FAR (Forces Armées Royales), the Royal Moroccan Army football club in Rabat. Known for their strong organization and military-inspired identity, they represent a unique Ultra culture tied to the institution.",
      fr: "Ultras Askary, fondé en 2006, soutient l'AS FAR (Forces Armées Royales), le club de football de l'armée royale marocaine à Rabat. Connus pour leur organisation forte et leur identité d'inspiration militaire.",
      ar: "ألتراس عسكري، تأسست عام 2006، تدعم الجيش الملكي، نادي كرة القدم التابع للقوات المسلحة الملكية في الرباط. معروفون بتنظيمهم القوي وهويتهم المستوحاة من المؤسسة العسكرية."
    },
    values: ['Discipline', 'Organization', 'Pride', 'Loyalty'],
    coordinates: { lat: 33.9716, lng: -6.8498 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Fatal Tigers 2006',
    slug: 'fatal-tigers',
    club: 'Maghreb Association Sportive de Fès',
    city: 'Fès',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2006,
    membersEstimate: '30K+',
    stadium: 'Stade de Fès',
    colors: ['#FFD700', '#000000'], // Yellow and Black
    symbols: ['Tiger', 'MAS'],
    motto: 'Fatal comme le tigre',
    logo: '/images/groups/fatal-tigers.webp',
    coverImage: '/images/groups/fatal-tigers.webp',
    history: {
      en: "Fatal Tigers, founded in 2006, is the main Ultra group of MAS Fès. Known for their loyal fanbase and continuous enthusiasm, they represent the ancient city of Fès with passion and pride. The tiger symbolizes their fierce dedication.",
      fr: "Fatal Tigers, fondé en 2006, est le principal groupe Ultra du MAS Fès. Connus pour leur base de fans fidèles et leur enthousiasme continu, ils représentent l'ancienne ville de Fès avec passion et fierté.",
      ar: "فاتال تايجرز، تأسست عام 2006، هي المجموعة الألتراس الرئيسية للمغرب الفاسي. معروفون بقاعدتهم الجماهيرية الوفية وحماسهم المستمر، يمثلون مدينة فاس العريقة بشغف وفخر."
    },
    values: ['Loyalty', 'Enthusiasm', 'Tradition', 'Pride'],
    coordinates: { lat: 34.0181, lng: -5.0078 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Hercules 2003',
    slug: 'ultras-hercules',
    club: 'Ittihad Riadhi de Tanger',
    city: 'Tanger',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2003,
    membersEstimate: '35K+',
    stadium: 'Grand Stade de Tanger',
    colors: ['#0000FF', '#FFFFFF'], // Blue and White
    symbols: ['Hercules', 'Mediterranean Sea', 'IRT'],
    motto: 'Hercules immortel',
    logo: '/images/groups/ultras-hercules.webp',
    coverImage: '/images/groups/ultras-hercules.webp',
    history: {
      en: "Ultras Hercules, founded in 2003, is one of the OLDEST Ultra groups in Morocco, even before Winners and Green Boys. Supporting IRT Tanger, they have a unique Mediterranean identity. Named after Hercules from Greek mythology, associated with the Strait of Gibraltar.",
      fr: "Ultras Hercules, fondé en 2003, est l'un des PLUS ANCIENS groupes Ultra au Maroc, avant même Winners et Green Boys. Soutenant l'IRT Tanger, ils ont une identité méditerranéenne unique.",
      ar: "ألتراس هرقل، تأسست عام 2003، هي واحدة من أقدم مجموعات الألتراس في المغرب، حتى قبل وينرز وغرين بويز. يدعمون اتحاد طنجة، ولديهم هوية متوسطية فريدة. سُميت على اسم هرقل من الأساطير اليونانية."
    },
    values: ['History', 'Mediterranean Identity', 'Pride', 'Passion'],
    coordinates: { lat: 35.7595, lng: -5.8340 },
    socialLinks: {},
    isFeatured: true,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Orange Boys',
    slug: 'orange-boys',
    club: 'Renaissance Sportive de Berkane',
    city: 'Berkane',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2010,
    membersEstimate: '20K+',
    stadium: 'Stade Municipal de Berkane',
    colors: ['#FF6600', '#000000'], // Orange and Black
    symbols: ['Orange', 'RSB'],
    motto: 'Orange power',
    logo: '/images/groups/orange-boys.webp',
    coverImage: '/images/groups/orange-boys.webp',
    history: {
      en: "Orange Boys represents Renaissance Sportive de Berkane, a club that has risen to prominence especially in African competitions. Their growing presence and passionate support have made Berkane a force in Moroccan and African football.",
      fr: "Orange Boys représente la Renaissance Sportive de Berkane, un club qui s'est fait un nom surtout dans les compétitions africaines. Leur présence croissante et leur soutien passionné ont fait de Berkane une force du football marocain et africain.",
      ar: "أورانج بويز تمثل نهضة بركان، نادي برز خاصة في المسابقات الأفريقية. حضورهم المتزايد ودعمهم الشغوف جعل بركان قوة في كرة القدم المغربية والأفريقية."
    },
    values: ['Growth', 'Passion', 'Pride', 'Unity'],
    coordinates: { lat: 34.9200, lng: -2.3200 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Imazighen',
    slug: 'ultras-imazighen',
    club: 'Hassania Union Sport Agadir',
    city: 'Agadir',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2007,
    membersEstimate: '25K+',
    stadium: 'Stade Adrar',
    colors: ['#FF0000', '#006233'], // Red and Green
    symbols: ['Amazigh Symbol', 'ⵣ', 'Mountains'],
    motto: 'Imazighen libres',
    logo: '/images/groups/ultras-imazighen.webp',
    coverImage: '/images/groups/ultras-imazighen.webp',
    history: {
      en: "Ultras Imazighen represents Hassania Agadir with a strong Amazigh (Berber) cultural identity. Their name and symbols celebrate the indigenous Amazigh heritage of the Souss region. They bring cultural pride and passionate support to every match.",
      fr: "Ultras Imazighen représente le Hassania Agadir avec une forte identité culturelle amazighe (berbère). Leur nom et leurs symboles célèbrent le patrimoine autochtone amazigh de la région du Souss.",
      ar: "ألتراس إيمازيغن تمثل حسنية أكادير بهوية ثقافية أمازيغية قوية. اسمهم ورموزهم تحتفي بالتراث الأمازيغي الأصلي لمنطقة سوس. يجلبون الفخر الثقافي والدعم الشغوف لكل مباراة."
    },
    values: ['Amazigh Identity', 'Culture', 'Pride', 'Freedom'],
    coordinates: { lat: 30.4278, lng: -9.5981 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Fatal Rabat',
    slug: 'ultras-fatal-rabat',
    club: 'Fath Union Sport',
    city: 'Rabat',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2008,
    membersEstimate: '15K+',
    stadium: 'Stade Prince Moulay Abdellah',
    colors: ['#800080', '#FFFFFF'], // Purple and White
    symbols: ['FUS', 'Capital'],
    motto: 'Fatal dans la capitale',
    logo: '/images/groups/ultras-fatal-rabat.webp',
    coverImage: '/images/groups/ultras-fatal-rabat.webp',
    history: {
      en: "Ultras Fatal Rabat supports Fath Union Sport, a club from the capital city Rabat. Known for their educated fanbase and focus on organization and meaningful messages, they represent a more intellectual approach to Ultra culture.",
      fr: "Ultras Fatal Rabat soutient le Fath Union Sport, un club de la capitale Rabat. Connus pour leur base de fans éduquée et leur accent sur l'organisation et les messages significatifs.",
      ar: "ألتراس فاتال الرباط تدعم الفتح الرباطي، نادي من العاصمة الرباط. معروفون بقاعدتهم الجماهيرية المثقفة وتركيزهم على التنظيم والرسائل الهادفة."
    },
    values: ['Intelligence', 'Organization', 'Messages', 'Pride'],
    coordinates: { lat: 33.9716, lng: -6.8498 },
    socialLinks: {},
    isFeatured: false,
    isVerified: true,
    status: 'published'
  },
  {
    name: 'Ultras Sharks',
    slug: 'ultras-sharks',
    club: 'Olympique Club de Safi',
    city: 'Safi',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2009,
    membersEstimate: '10K+',
    stadium: 'Stade El Massira',
    colors: ['#000000', '#FFFFFF'], // Black and White
    symbols: ['Shark', 'Ocean', 'OCS'],
    motto: 'Sharks de l\'Atlantique',
    logo: '/images/groups/ultras-sharks.webp',
    coverImage: '/images/groups/ultras-sharks.webp',
    history: {
      en: "Ultras Sharks represents Olympique Safi, a club from the Atlantic coastal city. Despite smaller numbers, they are known for their loud voice and passionate support, embodying the fighting spirit of sharks.",
      fr: "Ultras Sharks représente l'Olympique Safi, un club de la ville côtière atlantique. Malgré un nombre réduit, ils sont connus pour leur voix forte et leur soutien passionné.",
      ar: "ألتراس شاركس تمثل أولمبيك آسفي، نادي من المدينة الساحلية الأطلسية. على الرغم من قلة العدد، معروفون بصوتهم العالي ودعمهم الشغوف، يجسدون روح القرش المقاتلة."
    },
    values: ['Fighting Spirit', 'Loud Voice', 'Passion', 'Pride'],
    coordinates: { lat: 32.2994, lng: -9.2372 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    status: 'published'
  },
  {
    name: 'Ultras Red Angels',
    slug: 'ultras-red-angels',
    club: 'Sporting Club Chabab Mohammédia',
    city: 'Mohammédia',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2010,
    membersEstimate: '8K+',
    stadium: 'Stade El Bachir',
    colors: ['#FF0000', '#FFFFFF'], // Red and White
    symbols: ['Angel Wings', 'SCCM'],
    motto: 'Angels rouges',
    logo: '/images/groups/ultras-red-angels.webp',
    coverImage: '/images/groups/ultras-red-angels.webp',
    history: {
      en: "Ultras Red Angels represents SCCM Mohammédia with a strong local identity. This coastal city group brings authentic passion and community pride to their matches.",
      fr: "Ultras Red Angels représente le SCCM Mohammédia avec une forte identité locale. Ce groupe de la ville côtière apporte une passion authentique et une fierté communautaire à leurs matchs.",
      ar: "ألتراس ريد أنجلز تمثل شباب المحمدية بهوية محلية قوية. هذه المجموعة من المدينة الساحلية تجلب شغفًا أصيلًا وفخرًا مجتمعيًا لمبارياتهم."
    },
    values: ['Local Identity', 'Community', 'Passion', 'Pride'],
    coordinates: { lat: 33.6866, lng: -7.3827 },
    socialLinks: {},
    isFeatured: false,
    isVerified: false,
    status: 'published'
  }
];

async function addMoroccanUltras() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // First, update Green Boys if exists to ensure it has correct data
    const greenBoysUpdate = await mongoose.connection.db.collection('ultragroups').updateOne(
      { slug: 'green-boys-2005' },
      {
        $set: {
          isFeatured: true,
          isVerified: true,
          status: 'published'
        }
      }
    );
    if (greenBoysUpdate.modifiedCount > 0) {
      console.log('[UPDATED] Green Boys 2005 - Already exists, updated status');
    }

    // Update Winners if exists
    const winnersUpdate = await mongoose.connection.db.collection('ultragroups').updateOne(
      { slug: 'winners' },
      {
        $set: {
          name: 'Winners 2005',
          slug: 'winners-2005',
          yearFounded: 2005,
          isFeatured: true,
          isVerified: true
        }
      }
    );
    if (winnersUpdate.modifiedCount > 0) {
      console.log('[UPDATED] Winners -> Winners 2005');
    }

    for (const ultra of moroccanUltras) {
      // Check if already exists
      const existing = await mongoose.connection.db.collection('ultragroups').findOne({ slug: ultra.slug });

      if (existing) {
        console.log(`[SKIP] ${ultra.name} already exists`);
        continue;
      }

      // Add timestamps
      ultra.createdAt = new Date();
      ultra.updatedAt = new Date();
      ultra.views = Math.floor(Math.random() * 80000) + 20000;
      ultra.likes = Math.floor(Math.random() * 15000) + 5000;

      await mongoose.connection.db.collection('ultragroups').insertOne(ultra);
      console.log(`[ADDED] ${ultra.name} - ${ultra.club} (${ultra.city})`);
    }

    // Count total
    const count = await mongoose.connection.db.collection('ultragroups').countDocuments();
    console.log(`\n=== Total groups in database: ${count} ===`);

    // List all Moroccan groups
    const moroccanGroups = await mongoose.connection.db.collection('ultragroups')
      .find({ countryCode: 'MA' })
      .toArray();
    console.log(`\n🇲🇦 Moroccan groups: ${moroccanGroups.length}`);
    moroccanGroups.forEach(g => console.log(`   - ${g.name} (${g.club})`));

    await mongoose.disconnect();
    console.log('\n✅ Done! Morocco Ultras added successfully! 🇲🇦');
  } catch (error) {
    console.error('Error:', error);
  }
}

addMoroccanUltras();

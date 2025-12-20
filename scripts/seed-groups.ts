import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Ultra Groups Seed Data - Multilingual Content
export const ultraGroupsData = [
  // ==================== MOROCCO ====================
  {
    name: 'GREEN BOYS 2005',
    slug: 'green-boys-2005',
    club: 'Raja Club Athletic',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    isActive: true,
    history: {
      en: `GREEN BOYS 2005 was founded on September 13, 2005, in the Derb Sultan neighborhood of Casablanca. Born from the passion of young Raja supporters who wanted to create a new generation of organized support, they quickly became one of Africa's most influential Ultra groups. Their name combines the green color of Raja with the youthful energy of their founders. Known for spectacular tifos and powerful chants, they've revolutionized supporter culture in Morocco and across Africa.`,
      fr: `GREEN BOYS 2005 a été fondé le 13 septembre 2005 dans le quartier Derb Sultan de Casablanca. Né de la passion de jeunes supporters du Raja qui voulaient créer une nouvelle génération de support organisé, le groupe est rapidement devenu l'un des plus influents d'Afrique. Leur nom combine le vert du Raja avec l'énergie juvénile de leurs fondateurs. Connus pour leurs tifos spectaculaires et leurs chants puissants, ils ont révolutionné la culture du supportérisme au Maroc et en Afrique.`,
      ar: `تأسست مجموعة غرين بويز 2005 في 13 سبتمبر 2005 في حي درب السلطان بالدار البيضاء. ولدت من شغف شباب مشجعي الرجاء الذين أرادوا خلق جيل جديد من الدعم المنظم، وسرعان ما أصبحت واحدة من أكثر مجموعات الألتراس تأثيراً في أفريقيا. يجمع اسمها بين اللون الأخضر للرجاء والطاقة الشبابية لمؤسسيها.`,
      it: `GREEN BOYS 2005 è stato fondato il 13 settembre 2005 nel quartiere Derb Sultan di Casablanca. Nato dalla passione di giovani tifosi del Raja che volevano creare una nuova generazione di tifo organizzato, è rapidamente diventato uno dei gruppi Ultra più influenti in Africa. Il loro nome combina il verde del Raja con l'energia giovanile dei fondatori.`,
      es: `GREEN BOYS 2005 fue fundado el 13 de septiembre de 2005 en el barrio Derb Sultan de Casablanca. Nacido de la pasión de jóvenes aficionados del Raja que querían crear una nueva generación de apoyo organizado, rápidamente se convirtió en uno de los grupos Ultra más influyentes de África.`,
      'pt-br': `GREEN BOYS 2005 foi fundado em 13 de setembro de 2005 no bairro Derb Sultan de Casablanca. Nascido da paixão de jovens torcedores do Raja que queriam criar uma nova geração de apoio organizado, rapidamente se tornou um dos grupos Ultra mais influentes da África.`
    },
    values: ['Passion', 'Creativity', 'Unity', 'African Pride'],
    motto: 'Ultras Green Boys - Passion Without Limits',
    colors: ['#00A651', '#FFFFFF'],
    symbols: ['Eagle', 'Crown', 'Green Star'],
    membersEstimate: '60,000+',
    stadium: 'Stade Mohamed V',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    socialLinks: {
      instagram: 'greenboysofficiel',
      facebook: 'GreenBoys2005',
      youtube: 'GreenBoysTV'
    },
    tifos: [
      {
        title: 'African Champions 2022',
        description: {
          en: 'Massive tifo celebrating Raja\'s CAF Champions League victory',
          fr: 'Tifo massif célébrant la victoire du Raja en Ligue des Champions CAF',
          ar: 'تيفو ضخم احتفالاً بفوز الرجاء بدوري أبطال أفريقيا'
        },
        image: '/images/tifos/gb-champions-2022.jpg',
        date: new Date('2022-05-30'),
        match: 'Raja vs Al Ahly - CAF CL Final'
      }
    ],
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'Ultras Eagles',
    slug: 'ultras-eagles',
    club: 'Raja Club Athletic',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    isActive: true,
    history: {
      en: `Ultras Eagles, also known as "The Eagles of Casablanca," were founded in 2005 alongside their brothers Green Boys. Operating from the "Virage Sud" of Stade Mohamed V, they bring a unique blend of creativity and passion. Their choreographies are known for their artistic quality and the powerful messages they convey about Moroccan identity and Raja's glory.`,
      fr: `Ultras Eagles, également connus sous le nom de "Les Aigles de Casablanca", ont été fondés en 2005 aux côtés de leurs frères Green Boys. Opérant depuis le "Virage Sud" du Stade Mohamed V, ils apportent un mélange unique de créativité et de passion.`,
      ar: `ألتراس إيغلز، المعروفون أيضاً بـ"نسور الدار البيضاء"، تأسسوا في عام 2005 إلى جانب إخوتهم غرين بويز. يعملون من "المنعطف الجنوبي" لملعب محمد الخامس، ويجلبون مزيجاً فريداً من الإبداع والشغف.`
    },
    values: ['Brotherhood', 'Art', 'Loyalty', 'Casablanca Pride'],
    motto: 'Eagles Never Die',
    colors: ['#00A651', '#FFD700'],
    symbols: ['Eagle', 'Sun'],
    membersEstimate: '50,000+',
    stadium: 'Stade Mohamed V',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'Winners',
    slug: 'winners',
    club: 'Wydad Athletic Club',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    isActive: true,
    history: {
      en: `Winners were founded in 2005 as the main Ultra group supporting Wydad AC, Raja's eternal rival in Casablanca. Known for their red and white choreographies, they've built a reputation for passionate support and creative tifos. The Derby de Casablanca between Winners and Green Boys is considered one of the most intense atmospheres in world football.`,
      fr: `Les Winners ont été fondés en 2005 en tant que principal groupe Ultra soutenant le Wydad AC, rival éternel du Raja à Casablanca. Connus pour leurs chorégraphies rouge et blanc, ils ont bâti une réputation de support passionné et de tifos créatifs.`,
      ar: `تأسست مجموعة وينرز في عام 2005 كمجموعة ألتراس رئيسية تدعم الوداد الرياضي، الغريم الأزلي للرجاء في الدار البيضاء. معروفون بإبداعاتهم بالأحمر والأبيض.`
    },
    values: ['Victory', 'Honor', 'Tradition'],
    motto: 'Always Winners',
    colors: ['#E31B23', '#FFFFFF'],
    symbols: ['Lion', 'Crown'],
    membersEstimate: '45,000+',
    stadium: 'Stade Mohamed V',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    isFeatured: false,
    isVerified: true
  },

  // ==================== ITALY ====================
  {
    name: 'Curva Sud Milano',
    slug: 'curva-sud-milano',
    club: 'AC Milan',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1968,
    isActive: true,
    history: {
      en: `Curva Sud Milano is one of the oldest and most prestigious Ultra groups in the world. Founded in 1968, they occupy the south stand of San Siro and have been the heartbeat of AC Milan support for over five decades. They pioneered many elements of Ultra culture that spread across Europe and the world, including coordinated chanting, massive flags, and spectacular pyrotechnic displays.`,
      fr: `Curva Sud Milano est l'un des groupes Ultra les plus anciens et prestigieux au monde. Fondé en 1968, ils occupent la tribune sud de San Siro et sont le cœur battant du support milanais depuis plus de cinq décennies.`,
      it: `Curva Sud Milano è uno dei gruppi Ultra più antichi e prestigiosi al mondo. Fondato nel 1968, occupa la curva sud di San Siro ed è stato il cuore pulsante del tifo milanista per oltre cinque decenni. Hanno fatto da pionieri per molti elementi della cultura Ultra che si sono diffusi in Europa e nel mondo.`,
      ar: `كورفا سود ميلانو هي واحدة من أقدم وأعرق مجموعات الألتراس في العالم. تأسست عام 1968 وتحتل المدرج الجنوبي لملعب سان سيرو.`
    },
    values: ['Tradition', 'Passion', 'Milano', 'Glory'],
    motto: 'Siamo Noi, Siamo Noi, I Campioni Dell\'Italia Siamo Noi',
    colors: ['#E31B23', '#000000'],
    symbols: ['Devil', 'Cross of Milan'],
    membersEstimate: '100,000+',
    stadium: 'San Siro',
    coordinates: { lat: 45.4781, lng: 9.1240 },
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'Curva Nord Inter',
    slug: 'curva-nord-inter',
    club: 'FC Internazionale',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1969,
    isActive: true,
    history: {
      en: `Curva Nord Inter, founded in 1969, represents the passionate heart of Inter Milan supporters. Occupying the north stand of San Siro, they share the stadium with their eternal rivals but bring their own distinct blue and black identity. Known for their powerful vocals and unwavering support through victories and struggles alike.`,
      it: `Curva Nord Inter, fondata nel 1969, rappresenta il cuore pulsante dei tifosi dell'Inter. Occupando la curva nord di San Siro, condividono lo stadio con i rivali eterni ma portano la propria identità distintiva nerazzurra.`
    },
    values: ['Loyalty', 'Nerazzurri Pride', 'Unity'],
    motto: 'Pazza Inter Amala',
    colors: ['#0068A8', '#000000'],
    symbols: ['Biscione', 'Star'],
    membersEstimate: '90,000+',
    stadium: 'San Siro',
    coordinates: { lat: 45.4781, lng: 9.1240 },
    isFeatured: false,
    isVerified: true
  },
  {
    name: 'Curva A Napoli',
    slug: 'curva-a-napoli',
    club: 'SSC Napoli',
    city: 'Naples',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1972,
    isActive: true,
    history: {
      en: `Curva A represents the soul of Naples and its football. Founded in the early 1970s, they've made the Stadio Diego Armando Maradona one of the most intimidating venues in world football. Their passion reflects the city's character - intense, creative, and deeply emotional.`,
      it: `Curva A rappresenta l'anima di Napoli e del suo calcio. Fondata nei primi anni '70, ha reso lo Stadio Diego Armando Maradona uno dei luoghi più intimidatori del calcio mondiale.`
    },
    values: ['Naples', 'Passion', 'Maradona Legacy'],
    motto: 'Un Giorno All\'Improvviso',
    colors: ['#12A0D7', '#FFFFFF'],
    symbols: ['Volcano Vesuvius', 'D10S'],
    membersEstimate: '80,000+',
    stadium: 'Stadio Diego Armando Maradona',
    coordinates: { lat: 40.8280, lng: 14.1930 },
    isFeatured: true,
    isVerified: true
  },

  // ==================== GERMANY ====================
  {
    name: 'Yellow Wall',
    slug: 'yellow-wall',
    club: 'Borussia Dortmund',
    city: 'Dortmund',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1974,
    isActive: true,
    history: {
      en: `The Yellow Wall (Gelbe Wand) at Signal Iduna Park is the largest standing terrace in European football, holding 24,454 fans. This legendary stand has been the fortress of Borussia Dortmund support since the 1970s. The coordinated yellow and black creates an intimidating wall of color that has inspired supporters worldwide.`,
      fr: `Le Mur Jaune (Gelbe Wand) au Signal Iduna Park est la plus grande tribune debout du football européen, accueillant 24 454 fans. Cette tribune légendaire est le bastion du support du Borussia Dortmund depuis les années 1970.`,
      de: `Die Gelbe Wand im Signal Iduna Park ist die größte Stehplatztribüne im europäischen Fußball mit 24.454 Fans. Diese legendäre Tribüne ist seit den 1970er Jahren die Festung der Borussia Dortmund Unterstützung.`
    },
    values: ['Unity', 'Echte Liebe', 'Yellow Pride'],
    motto: 'Echte Liebe - True Love',
    colors: ['#FDE100', '#000000'],
    symbols: ['BVB Logo', 'Bee'],
    membersEstimate: '80,000+',
    stadium: 'Signal Iduna Park',
    coordinates: { lat: 51.4926, lng: 7.4518 },
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'Schickeria München',
    slug: 'schickeria-munchen',
    club: 'Bayern Munich',
    city: 'Munich',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 2002,
    isActive: true,
    history: {
      en: `Schickeria München was founded in 2002 as a response to the growing commercialization of football. They brought genuine Ultra culture to Bayern Munich, creating an authentic atmosphere in the Südkurve of Allianz Arena despite the club's corporate image.`,
      de: `Schickeria München wurde 2002 als Reaktion auf die zunehmende Kommerzialisierung des Fußballs gegründet. Sie brachten echte Ultra-Kultur zu Bayern München.`
    },
    values: ['Anti-commercialism', 'Tradition', 'Bavaria'],
    motto: 'Mia San Mia',
    colors: ['#DC052D', '#FFFFFF'],
    symbols: ['Bavarian Diamond', 'Lion'],
    membersEstimate: '25,000+',
    stadium: 'Allianz Arena',
    coordinates: { lat: 48.2188, lng: 11.6247 },
    isFeatured: false,
    isVerified: true
  },

  // ==================== ARGENTINA ====================
  {
    name: 'La 12',
    slug: 'la-12',
    club: 'Boca Juniors',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1925,
    isActive: true,
    history: {
      en: `La 12 is considered the heartbeat of Boca Juniors and one of the most famous barras bravas in the world. Named because they're considered the "12th player," they transform La Bombonera into a cauldron of passion. Their influence on South American supporter culture is immeasurable.`,
      es: `La 12 es considerada el latido del corazón de Boca Juniors y una de las barras bravas más famosas del mundo. Llamados así porque son considerados el "jugador número 12", transforman La Bombonera en un caldero de pasión.`,
      'pt-br': `La 12 é considerada o coração do Boca Juniors e uma das torcidas organizadas mais famosas do mundo. Chamados assim porque são considerados o "12º jogador", transformam La Bombonera em um caldeirão de paixão.`
    },
    values: ['Xeneize Pride', 'Passion', 'La Bombonera'],
    motto: 'Boca, Yo Te Amo',
    colors: ['#003DA5', '#FDBE10'],
    symbols: ['Half Sun', 'CABJ'],
    membersEstimate: '120,000+',
    stadium: 'La Bombonera',
    coordinates: { lat: -34.6356, lng: -58.3649 },
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'Los Borrachos del Tablón',
    slug: 'los-borrachos-del-tablon',
    club: 'River Plate',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1989,
    isActive: true,
    history: {
      en: `Los Borrachos del Tablón represent River Plate's passionate support base. Their name comes from the wooden planks of the old stands where they stood. They've created some of South America's most memorable tifo displays and chants.`,
      es: `Los Borrachos del Tablón representan la base de apoyo apasionado de River Plate. Su nombre proviene de los tablones de madera de las viejas tribunas donde se paraban.`
    },
    values: ['Millonario Pride', 'Creativity', 'Buenos Aires'],
    motto: 'River, Mi Buen Amigo',
    colors: ['#FFFFFF', '#E31B23'],
    symbols: ['Red Stripe', 'Monumental'],
    membersEstimate: '100,000+',
    stadium: 'Estadio Monumental',
    coordinates: { lat: -34.5453, lng: -58.4498 },
    isFeatured: false,
    isVerified: true
  },

  // ==================== EGYPT ====================
  {
    name: 'Ultras Ahlawy',
    slug: 'ultras-ahlawy',
    club: 'Al Ahly SC',
    city: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2007,
    isActive: true,
    history: {
      en: `Ultras Ahlawy, founded in 2007, revolutionized supporter culture in Egypt and the Arab world. Supporting Al Ahly, Africa's most successful club, they created unprecedented choreographies and brought European-style Ultra culture to the Middle East. Their influence extends beyond football into Egyptian civil society.`,
      ar: `ألتراس أهلاوي، تأسست عام 2007، أحدثت ثورة في ثقافة المشجعين في مصر والعالم العربي. يدعمون النادي الأهلي، أنجح نادٍ في أفريقيا، وأبدعوا عروضاً غير مسبوقة وجلبوا ثقافة الألتراس الأوروبية إلى الشرق الأوسط.`,
      fr: `Ultras Ahlawy, fondé en 2007, a révolutionné la culture du supportérisme en Égypte et dans le monde arabe. Soutenant Al Ahly, le club le plus titré d'Afrique.`
    },
    values: ['Red Devils', 'African Pride', 'Unity'],
    motto: 'Ya Ahly, Ya Ahly',
    colors: ['#E31B23', '#FFFFFF'],
    symbols: ['Eagle', 'Star'],
    membersEstimate: '70,000+',
    stadium: 'Cairo International Stadium',
    coordinates: { lat: 30.0690, lng: 31.3130 },
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'Ultras White Knights',
    slug: 'ultras-white-knights',
    club: 'Zamalek SC',
    city: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2007,
    isActive: true,
    history: {
      en: `Ultras White Knights, founded in 2007 alongside their rivals Ultras Ahlawy, support Zamalek SC. Together they transformed Egyptian football atmosphere and created some of the most memorable derby scenes in African football.`,
      ar: `ألتراس وايت نايتس، تأسست عام 2007 مع منافسيهم ألتراس أهلاوي، يدعمون نادي الزمالك. معاً حولوا أجواء كرة القدم المصرية وخلقوا بعض أكثر مشاهد الديربي إثارة في كرة القدم الأفريقية.`
    },
    values: ['White Pride', 'Cairo', 'Zamalek Glory'],
    motto: 'White Knights Forever',
    colors: ['#FFFFFF', '#E31B23'],
    symbols: ['Knight', 'Z'],
    membersEstimate: '55,000+',
    stadium: 'Cairo International Stadium',
    coordinates: { lat: 30.0690, lng: 31.3130 },
    isFeatured: false,
    isVerified: true
  },

  // ==================== TURKEY ====================
  {
    name: 'Carsi',
    slug: 'carsi',
    club: 'Besiktas JK',
    city: 'Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 1982,
    isActive: true,
    history: {
      en: `Çarşı is one of the world's most influential supporter groups, known for their anarchist symbolism and creative protests. Founded in 1982, they've turned Vodafone Park into a fortress of noise and color. Their influence extends beyond football, participating in social movements with the motto "Çarşı is against everything."`,
      tr: `Çarşı, anarşist sembolleri ve yaratıcı protestolarıyla tanınan dünyanın en etkili taraftar gruplarından biridir. 1982'de kurulan grup, Vodafone Park'ı ses ve renk kalesine dönüştürdü.`
    },
    values: ['Anti-establishment', 'Creativity', 'Besiktas'],
    motto: 'Çarşı Her Şeye Karşı',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Anarchy A', 'Eagle'],
    membersEstimate: '40,000+',
    stadium: 'Vodafone Park',
    coordinates: { lat: 41.0391, lng: 29.0070 },
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'ultrAslan',
    slug: 'ultraslan',
    club: 'Galatasaray SK',
    city: 'Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 2001,
    isActive: true,
    history: {
      en: `ultrAslan represents the organized support of Galatasaray, Turkey's most successful club. Founded in 2001, they've created memorable European nights that have made visiting teams tremble. Their coordinated displays at Rams Park showcase Turkish passion at its finest.`,
      tr: `ultrAslan, Türkiye'nin en başarılı kulübü Galatasaray'ın organize desteğini temsil eder. 2001'de kurulan grup, rakip takımları titretecek unutulmaz Avrupa geceleri yarattı.`
    },
    values: ['Lions Pride', 'Istanbul', 'Glory'],
    motto: 'Seni Sevmeyen Ölsün',
    colors: ['#FF6600', '#FFD700'],
    symbols: ['Lion', 'Star'],
    membersEstimate: '50,000+',
    stadium: 'Rams Park',
    coordinates: { lat: 41.1035, lng: 28.9915 },
    isFeatured: false,
    isVerified: true
  },

  // ==================== BRAZIL ====================
  {
    name: 'Gaviões da Fiel',
    slug: 'gavioes-da-fiel',
    club: 'SC Corinthians',
    city: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1969,
    isActive: true,
    history: {
      en: `Gaviões da Fiel (Hawks of the Faithful) is the world's largest organized supporter group, with over 100,000 registered members. Founded in 1969, they've influenced Brazilian fan culture immensely and are also a major samba school in São Paulo's Carnival.`,
      'pt-br': `Gaviões da Fiel é a maior torcida organizada do mundo, com mais de 100.000 membros registrados. Fundada em 1969, influenciou imensamente a cultura dos torcedores brasileiros e também é uma grande escola de samba no Carnaval de São Paulo.`,
      es: `Gaviões da Fiel (Halcones del Fiel) es el grupo de aficionados organizados más grande del mundo, con más de 100.000 miembros registrados.`
    },
    values: ['Fidelity', 'Samba', 'Corinthians'],
    motto: 'O Bando de Loucos',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Hawk', 'Ship'],
    membersEstimate: '120,000+',
    stadium: 'Neo Química Arena',
    coordinates: { lat: -23.5453, lng: -46.4742 },
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'Torcida Jovem do Flamengo',
    slug: 'torcida-jovem-flamengo',
    club: 'CR Flamengo',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1967,
    isActive: true,
    history: {
      en: `Torcida Jovem do Flamengo supports Brazil's most popular club with over 40 million fans. Their energy at Maracanã creates one of South America's most electric atmospheres.`,
      'pt-br': `Torcida Jovem do Flamengo apoia o clube mais popular do Brasil com mais de 40 milhões de torcedores. Sua energia no Maracanã cria uma das atmosferas mais elétricas da América do Sul.`
    },
    values: ['Mengão', 'Rio', 'Passion'],
    motto: 'Uma Vez Flamengo, Sempre Flamengo',
    colors: ['#E31B23', '#000000'],
    symbols: ['Vulture', 'CRF'],
    membersEstimate: '80,000+',
    stadium: 'Maracanã',
    coordinates: { lat: -22.9121, lng: -43.2302 },
    isFeatured: false,
    isVerified: true
  },

  // ==================== SPAIN ====================
  {
    name: 'Ultras Sur',
    slug: 'ultras-sur',
    club: 'Real Madrid CF',
    city: 'Madrid',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1980,
    isActive: false,
    history: {
      en: `Ultras Sur was Real Madrid's main Ultra group from 1980 until their dissolution in 2014. They occupied Fondo Sur of the Santiago Bernabéu and created memorable atmospheres during Madrid's European nights. Their legacy lives on in the culture they established.`,
      es: `Ultras Sur fue el principal grupo Ultra del Real Madrid desde 1980 hasta su disolución en 2014. Ocupaban el Fondo Sur del Santiago Bernabéu y crearon atmósferas memorables durante las noches europeas del Madrid.`
    },
    values: ['Madrid', 'Glory', 'Tradition'],
    motto: 'Hala Madrid',
    colors: ['#FFFFFF', '#000000'],
    symbols: ['Crown', 'Madrid Crest'],
    membersEstimate: '5,000+',
    stadium: 'Santiago Bernabéu',
    coordinates: { lat: 40.4530, lng: -3.6883 },
    isFeatured: false,
    isVerified: true
  },
  {
    name: 'Boixos Nois',
    slug: 'boixos-nois',
    club: 'FC Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1981,
    isActive: false,
    history: {
      en: `Boixos Nois (Crazy Boys in Catalan) were FC Barcelona's main Ultra group from 1981 until they were banned from Camp Nou in 2010. They combined Catalan identity with Ultra culture.`,
      es: `Boixos Nois (Chicos Locos en catalán) fueron el principal grupo Ultra del FC Barcelona desde 1981 hasta que fueron prohibidos del Camp Nou en 2010.`,
      ca: `Boixos Nois van ser el principal grup Ultra del FC Barcelona des de 1981 fins que van ser prohibits del Camp Nou el 2010.`
    },
    values: ['Catalonia', 'Barça', 'Independence'],
    motto: 'Més Que Un Club',
    colors: ['#004D98', '#A50044'],
    symbols: ['Catalan Flag', 'FCB'],
    membersEstimate: '3,000+',
    stadium: 'Spotify Camp Nou',
    coordinates: { lat: 41.3809, lng: 2.1228 },
    isFeatured: false,
    isVerified: true
  },

  // ==================== ENGLAND ====================
  {
    name: 'The Kop',
    slug: 'the-kop',
    club: 'Liverpool FC',
    city: 'Liverpool',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1906,
    isActive: true,
    history: {
      en: `The Kop at Anfield is perhaps the most famous stand in world football. Named after Spion Kop hill in South Africa, it has been the heartbeat of Liverpool support since 1906. "You'll Never Walk Alone" sung by The Kop is football's most iconic moment, creating goosebumps across generations.`,
      fr: `Le Kop à Anfield est peut-être la tribune la plus célèbre du football mondial. Nommé d'après la colline Spion Kop en Afrique du Sud, il est le cœur battant du soutien de Liverpool depuis 1906.`
    },
    values: ['Unity', 'Tradition', 'YNWA'],
    motto: 'You\'ll Never Walk Alone',
    colors: ['#C8102E', '#FFFFFF'],
    symbols: ['Liver Bird', 'Shankly Gates'],
    membersEstimate: '130,000+',
    stadium: 'Anfield',
    coordinates: { lat: 53.4308, lng: -2.9608 },
    isFeatured: true,
    isVerified: true
  },
  {
    name: 'Green Street Elite',
    slug: 'green-street-elite',
    club: 'West Ham United',
    city: 'London',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1970,
    isActive: true,
    history: {
      en: `The Inter City Firm and Green Street culture have been part of West Ham's identity since the 1970s. While the violent past is behind them, the passion and East London identity remain strong at the London Stadium.`
    },
    values: ['East London', 'Family', 'Working Class'],
    motto: 'Forever Blowing Bubbles',
    colors: ['#7A263A', '#1BB1E7'],
    symbols: ['Crossed Hammers', 'Castle'],
    membersEstimate: '40,000+',
    stadium: 'London Stadium',
    coordinates: { lat: 51.5387, lng: -0.0166 },
    isFeatured: false,
    isVerified: true
  }
];

// Connect to MongoDB and seed
async function seedGroups() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');

    // Import the model
    const UltraGroup = mongoose.models.UltraGroup ||
      (await import('../src/models/UltraGroup')).default;

    // Clear existing data
    await UltraGroup.deleteMany({});
    console.log('Cleared existing groups');

    // Create a default admin user ID for author field
    const User = mongoose.models.User ||
      (await import('../src/models/User')).default;

    let adminUser = await User.findOne({ role: 'admin' });
    if (!adminUser) {
      adminUser = await User.create({
        name: 'Admin',
        email: 'admin@mouvement.com',
        password: 'Admin123!@#',
        role: 'admin',
        isVerified: true
      });
    }

    // Process and insert groups
    const groupsToInsert = ultraGroupsData.map(group => ({
      ...group,
      // Use English history as default, store translations separately
      history: typeof group.history === 'object' ? group.history.en : group.history,
      author: adminUser._id,
      views: Math.floor(Math.random() * 50000) + 1000,
      likes: Math.floor(Math.random() * 10000) + 500
    }));

    await UltraGroup.insertMany(groupsToInsert);
    console.log(`Seeded ${groupsToInsert.length} Ultra groups`);

    await mongoose.disconnect();
    console.log('Done!');
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
}

// Run if executed directly
seedGroups();

/**
 * Content Seed Script - Timeline, Tifos, Chants, Glossary
 * Run with: npx ts-node scripts/seed-content.ts
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Models
const TimelineSchema = new mongoose.Schema({
  year: Number,
  region: String,
  translations: [{
    locale: String,
    title: String,
    description: String
  }],
  location: String,
  countryCode: String,
  group: String,
  groupSlug: String,
  image: String,
  isHighlight: Boolean,
  order: Number
}, { timestamps: true });

const TifoSchema = new mongoose.Schema({
  translations: [{
    locale: String,
    title: String,
    description: String
  }],
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
  translations: [{
    locale: String,
    title: String,
    lyrics: String,
    origin: String
  }],
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
  translations: [{
    locale: String,
    definition: String,
    example: String
  }],
  origin: String,
  category: String,
  relatedTerms: [String]
}, { timestamps: true });

// ==================== TIMELINE DATA ====================
const timelineEvents = [
  {
    year: 1968,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'Birth of the Ultras Movement', description: 'The first organized Ultra group, Fossa dei Leoni, is founded at AC Milan. Italian stadiums become the birthplace of modern supporter culture.' },
      { locale: 'fr', title: 'Naissance du Mouvement Ultra', description: 'Le premier groupe Ultra organisé, Fossa dei Leoni, est fondé à l\'AC Milan. Les stades italiens deviennent le berceau de la culture supporter moderne.' },
      { locale: 'ar', title: 'ولادة حركة الألتراس', description: 'تأسيس أول مجموعة ألتراس منظمة، فوسا دي ليوني، في نادي إي سي ميلان. أصبحت الملاعب الإيطالية مهد ثقافة المشجعين الحديثة.' },
      { locale: 'it', title: 'Nascita del Movimento Ultra', description: 'Il primo gruppo Ultra organizzato, Fossa dei Leoni, viene fondato all\'AC Milan. Gli stadi italiani diventano la culla della cultura del tifo moderno.' },
      { locale: 'es', title: 'Nacimiento del Movimiento Ultra', description: 'El primer grupo Ultra organizado, Fossa dei Leoni, se funda en el AC Milan. Los estadios italianos se convierten en la cuna de la cultura de aficionados moderna.' },
      { locale: 'pt-br', title: 'Nascimento do Movimento Ultra', description: 'O primeiro grupo Ultra organizado, Fossa dei Leoni, é fundado no AC Milan. Os estádios italianos se tornam o berço da cultura de torcedores moderna.' }
    ],
    location: 'Milan, Italy',
    countryCode: 'IT',
    group: 'Fossa dei Leoni',
    isHighlight: true,
    order: 1
  },
  {
    year: 1969,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'Curva Sud Milano Established', description: 'AC Milan fans create Curva Sud, establishing the template for organized Ultra groups worldwide.' },
      { locale: 'fr', title: 'Création de la Curva Sud Milano', description: 'Les supporters de l\'AC Milan créent la Curva Sud, établissant le modèle des groupes Ultra organisés dans le monde.' },
      { locale: 'ar', title: 'تأسيس كورفا سود ميلانو', description: 'مشجعو إي سي ميلان يؤسسون كورفا سود، وضعوا القالب لمجموعات الألتراس المنظمة في العالم.' },
      { locale: 'it', title: 'Nasce la Curva Sud Milano', description: 'I tifosi del Milan creano la Curva Sud, stabilendo il modello per i gruppi Ultra organizzati in tutto il mondo.' },
      { locale: 'es', title: 'Se Establece la Curva Sud Milano', description: 'Los aficionados del AC Milan crean la Curva Sud, estableciendo el modelo para grupos Ultra organizados en todo el mundo.' },
      { locale: 'pt-br', title: 'Curva Sud Milano é Estabelecida', description: 'Os torcedores do AC Milan criam a Curva Sud, estabelecendo o modelo para grupos Ultra organizados em todo o mundo.' }
    ],
    location: 'Milan, Italy',
    countryCode: 'IT',
    group: 'Curva Sud Milano',
    groupSlug: 'curva-sud-milano',
    isHighlight: false,
    order: 2
  },
  {
    year: 1969,
    region: 'southAmerica',
    translations: [
      { locale: 'en', title: 'Gaviões da Fiel Founded', description: 'Brazil\'s most iconic torcida organizada is born in São Paulo, supporting SC Corinthians with unprecedented passion.' },
      { locale: 'fr', title: 'Fondation des Gaviões da Fiel', description: 'La torcida organizada la plus emblématique du Brésil naît à São Paulo, soutenant le SC Corinthians avec une passion sans précédent.' },
      { locale: 'ar', title: 'تأسيس غافيويش دا فييل', description: 'ولادة أشهر تورسيدا أورغانيزادا في البرازيل بساو باولو، تدعم كورينثيانز بشغف غير مسبوق.' },
      { locale: 'it', title: 'Fondazione Gaviões da Fiel', description: 'La torcida organizada più iconica del Brasile nasce a San Paolo, supportando il SC Corinthians con passione senza precedenti.' },
      { locale: 'es', title: 'Fundación de Gaviões da Fiel', description: 'La torcida organizada más icónica de Brasil nace en São Paulo, apoyando al SC Corinthians con pasión sin precedentes.' },
      { locale: 'pt-br', title: 'Fundação da Gaviões da Fiel', description: 'A torcida organizada mais icônica do Brasil nasce em São Paulo, apoiando o SC Corinthians com paixão sem precedentes.' }
    ],
    location: 'São Paulo, Brazil',
    countryCode: 'BR',
    group: 'Gaviões da Fiel',
    groupSlug: 'gavioes-da-fiel',
    isHighlight: true,
    order: 3
  },
  {
    year: 1974,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'The Yellow Wall Takes Shape', description: 'Borussia Dortmund\'s Südtribüne begins its transformation into the legendary Yellow Wall, the largest standing terrace in European football.' },
      { locale: 'fr', title: 'Le Mur Jaune Prend Forme', description: 'La Südtribüne de Borussia Dortmund commence sa transformation en légendaire Mur Jaune, la plus grande tribune debout du football européen.' },
      { locale: 'ar', title: 'تشكّل الجدار الأصفر', description: 'بدأت مدرجات زودتريبون في دورتموند تحولها إلى الجدار الأصفر الأسطوري، أكبر مدرج وقوف في كرة القدم الأوروبية.' },
      { locale: 'it', title: 'Il Muro Giallo Prende Forma', description: 'La Südtribüne del Borussia Dortmund inizia la sua trasformazione nel leggendario Muro Giallo, la più grande curva in piedi del calcio europeo.' },
      { locale: 'es', title: 'El Muro Amarillo Toma Forma', description: 'La Südtribüne del Borussia Dortmund comienza su transformación en el legendario Muro Amarillo, la grada de pie más grande del fútbol europeo.' },
      { locale: 'pt-br', title: 'O Muro Amarelo Toma Forma', description: 'A Südtribüne do Borussia Dortmund começa sua transformação no lendário Muro Amarelo, a maior arquibancada em pé do futebol europeu.' }
    ],
    location: 'Dortmund, Germany',
    countryCode: 'DE',
    group: 'Yellow Wall',
    groupSlug: 'yellow-wall',
    isHighlight: false,
    order: 4
  },
  {
    year: 1982,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'Çarşı is Born', description: 'Beşiktaş JK supporters create Çarşı in Istanbul, known for their anarchist symbolism and the motto "Çarşı is against everything."' },
      { locale: 'fr', title: 'Naissance de Çarşı', description: 'Les supporters du Beşiktaş JK créent Çarşı à Istanbul, connus pour leur symbolisme anarchiste et leur devise "Çarşı est contre tout."' },
      { locale: 'ar', title: 'ولادة تشارشي', description: 'مشجعو بشكتاش يؤسسون تشارشي في إسطنبول، المعروفين برمزيتهم الأناركية وشعارهم "تشارشي ضد كل شيء."' },
      { locale: 'it', title: 'Nasce Çarşı', description: 'I tifosi del Beşiktaş JK creano Çarşı a Istanbul, noti per il loro simbolismo anarchico e il motto "Çarşı è contro tutto."' },
      { locale: 'es', title: 'Nace Çarşı', description: 'Los aficionados del Beşiktaş JK crean Çarşı en Estambul, conocidos por su simbolismo anarquista y el lema "Çarşı está contra todo."' },
      { locale: 'pt-br', title: 'Nasce Çarşı', description: 'Os torcedores do Beşiktaş JK criam Çarşı em Istambul, conhecidos por seu simbolismo anarquista e o lema "Çarşı é contra tudo."' }
    ],
    location: 'Istanbul, Turkey',
    countryCode: 'TR',
    group: 'Çarşı',
    groupSlug: 'carsi',
    isHighlight: false,
    order: 5
  },
  {
    year: 2005,
    region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'GREEN BOYS 2005 - African Ultra Revolution', description: 'On September 13, 2005, GREEN BOYS 2005 is founded in Derb Sultan, Casablanca. They become the first Ultra group in Morocco, revolutionizing African supporter culture.' },
      { locale: 'fr', title: 'GREEN BOYS 2005 - Révolution Ultra Africaine', description: 'Le 13 septembre 2005, GREEN BOYS 2005 est fondé à Derb Sultan, Casablanca. Ils deviennent le premier groupe Ultra au Maroc, révolutionnant la culture supporter africaine.' },
      { locale: 'ar', title: 'غرين بويز 2005 - ثورة الألتراس الأفريقية', description: 'في 13 سبتمبر 2005، تأسست غرين بويز 2005 في درب السلطان، الدار البيضاء. أصبحوا أول مجموعة ألتراس في المغرب، وأحدثوا ثورة في ثقافة المشجعين الأفريقية.' },
      { locale: 'it', title: 'GREEN BOYS 2005 - Rivoluzione Ultra Africana', description: 'Il 13 settembre 2005, GREEN BOYS 2005 viene fondato a Derb Sultan, Casablanca. Diventano il primo gruppo Ultra in Marocco, rivoluzionando la cultura ultras africana.' },
      { locale: 'es', title: 'GREEN BOYS 2005 - Revolución Ultra Africana', description: 'El 13 de septiembre de 2005, GREEN BOYS 2005 se funda en Derb Sultan, Casablanca. Se convierten en el primer grupo Ultra en Marruecos, revolucionando la cultura de aficionados africana.' },
      { locale: 'pt-br', title: 'GREEN BOYS 2005 - Revolução Ultra Africana', description: 'Em 13 de setembro de 2005, GREEN BOYS 2005 é fundado em Derb Sultan, Casablanca. Eles se tornam o primeiro grupo Ultra no Marrocos, revolucionando a cultura de torcedores africana.' }
    ],
    location: 'Casablanca, Morocco',
    countryCode: 'MA',
    group: 'GREEN BOYS 2005',
    groupSlug: 'green-boys-2005',
    isHighlight: true,
    order: 6
  },
  {
    year: 2007,
    region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'Ultras Ahlawy Founded', description: 'Egyptian football is transformed as Ultras Ahlawy is established, bringing organized Ultra culture to the Arab world\'s largest football nation.' },
      { locale: 'fr', title: 'Fondation d\'Ultras Ahlawy', description: 'Le football égyptien est transformé avec la création d\'Ultras Ahlawy, apportant la culture Ultra organisée à la plus grande nation de football du monde arabe.' },
      { locale: 'ar', title: 'تأسيس ألتراس أهلاوي', description: 'تحول كرة القدم المصرية مع تأسيس ألتراس أهلاوي، جالبين ثقافة الألتراس المنظمة إلى أكبر دولة كرة قدم في العالم العربي.' },
      { locale: 'it', title: 'Fondazione Ultras Ahlawy', description: 'Il calcio egiziano si trasforma con la fondazione di Ultras Ahlawy, portando la cultura Ultra organizzata nella più grande nazione calcistica del mondo arabo.' },
      { locale: 'es', title: 'Fundación de Ultras Ahlawy', description: 'El fútbol egipcio se transforma con la fundación de Ultras Ahlawy, llevando la cultura Ultra organizada a la mayor nación futbolística del mundo árabe.' },
      { locale: 'pt-br', title: 'Fundação do Ultras Ahlawy', description: 'O futebol egípcio se transforma com a fundação do Ultras Ahlawy, trazendo a cultura Ultra organizada para a maior nação futebolística do mundo árabe.' }
    ],
    location: 'Cairo, Egypt',
    countryCode: 'EG',
    group: 'Ultras Ahlawy',
    groupSlug: 'ultras-ahlawy',
    isHighlight: true,
    order: 7
  },
  {
    year: 2010,
    region: 'asia',
    translations: [
      { locale: 'en', title: 'Ultra Culture Reaches Asia', description: 'Indonesian supporters adopt Ultra traditions as The Jakmania grows to become one of Asia\'s largest organized supporter groups.' },
      { locale: 'fr', title: 'La Culture Ultra Atteint l\'Asie', description: 'Les supporters indonésiens adoptent les traditions Ultra alors que The Jakmania devient l\'un des plus grands groupes de supporters organisés d\'Asie.' },
      { locale: 'ar', title: 'ثقافة الألتراس تصل آسيا', description: 'المشجعون الإندونيسيون يتبنون تقاليد الألتراس مع نمو ذا جاكمانيا لتصبح واحدة من أكبر مجموعات المشجعين المنظمة في آسيا.' },
      { locale: 'it', title: 'La Cultura Ultra Raggiunge l\'Asia', description: 'I tifosi indonesiani adottano le tradizioni Ultra mentre The Jakmania diventa uno dei più grandi gruppi di tifosi organizzati in Asia.' },
      { locale: 'es', title: 'La Cultura Ultra Llega a Asia', description: 'Los aficionados indonesios adoptan las tradiciones Ultra mientras The Jakmania se convierte en uno de los grupos de aficionados organizados más grandes de Asia.' },
      { locale: 'pt-br', title: 'A Cultura Ultra Chega à Ásia', description: 'Os torcedores indonésios adotam as tradições Ultra enquanto The Jakmania se torna um dos maiores grupos de torcedores organizados da Ásia.' }
    ],
    location: 'Jakarta, Indonesia',
    countryCode: 'ID',
    group: 'The Jakmania',
    isHighlight: false,
    order: 8
  },
  {
    year: 2012,
    region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'Port Said Tragedy', description: 'A dark chapter in Ultra history as 74 people lose their lives at Port Said Stadium. The tragedy unites Ultra groups worldwide in solidarity.' },
      { locale: 'fr', title: 'Tragédie de Port-Saïd', description: 'Un chapitre sombre de l\'histoire Ultra alors que 74 personnes perdent la vie au stade de Port-Saïd. La tragédie unit les groupes Ultra du monde entier en solidarité.' },
      { locale: 'ar', title: 'مأساة بورسعيد', description: 'فصل مظلم في تاريخ الألتراس حيث فقد 74 شخصاً حياتهم في استاد بورسعيد. المأساة توحد مجموعات الألتراس حول العالم تضامناً.' },
      { locale: 'it', title: 'Tragedia di Port Said', description: 'Un capitolo oscuro nella storia Ultra quando 74 persone perdono la vita allo stadio di Port Said. La tragedia unisce i gruppi Ultra di tutto il mondo in solidarietà.' },
      { locale: 'es', title: 'Tragedia de Port Said', description: 'Un capítulo oscuro en la historia Ultra cuando 74 personas pierden la vida en el estadio de Port Said. La tragedia une a grupos Ultra de todo el mundo en solidaridad.' },
      { locale: 'pt-br', title: 'Tragédia de Port Said', description: 'Um capítulo sombrio na história Ultra quando 74 pessoas perdem suas vidas no estádio de Port Said. A tragédia une grupos Ultra de todo o mundo em solidariedade.' }
    ],
    location: 'Port Said, Egypt',
    countryCode: 'EG',
    group: 'Ultras Ahlawy',
    isHighlight: false,
    order: 9
  },
  {
    year: 2022,
    region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'Morocco\'s World Cup Miracle', description: 'Moroccan Ultras shine on the world stage as Morocco becomes the first African nation to reach the FIFA World Cup semi-finals. GREEN BOYS and Winners unite in Qatar.' },
      { locale: 'fr', title: 'Le Miracle Marocain en Coupe du Monde', description: 'Les Ultras marocains brillent sur la scène mondiale alors que le Maroc devient la première nation africaine à atteindre les demi-finales de la Coupe du Monde FIFA. GREEN BOYS et Winners s\'unissent au Qatar.' },
      { locale: 'ar', title: 'معجزة المغرب في كأس العالم', description: 'ألتراس المغرب يتألقون على المسرح العالمي مع وصول المغرب كأول دولة أفريقية إلى نصف نهائي كأس العالم. غرين بويز ووينرز يتحدون في قطر.' },
      { locale: 'it', title: 'Il Miracolo Marocchino ai Mondiali', description: 'Gli Ultra marocchini brillano sulla scena mondiale quando il Marocco diventa la prima nazione africana a raggiungere le semifinali della Coppa del Mondo FIFA. GREEN BOYS e Winners si uniscono in Qatar.' },
      { locale: 'es', title: 'El Milagro de Marruecos en el Mundial', description: 'Los Ultras marroquíes brillan en el escenario mundial cuando Marruecos se convierte en la primera nación africana en alcanzar las semifinales de la Copa Mundial de la FIFA. GREEN BOYS y Winners se unen en Qatar.' },
      { locale: 'pt-br', title: 'O Milagre de Marrocos na Copa do Mundo', description: 'Os Ultras marroquinos brilham no cenário mundial quando Marrocos se torna a primeira nação africana a alcançar as semifinais da Copa do Mundo FIFA. GREEN BOYS e Winners se unem no Catar.' }
    ],
    location: 'Qatar',
    countryCode: 'QA',
    group: 'Moroccan Ultras',
    isHighlight: true,
    order: 10
  }
];

// ==================== TIFO DATA ====================
const tifos = [
  {
    translations: [
      { locale: 'en', title: 'African Champions', description: 'A massive 3D tifo celebrating Raja Casablanca\'s CAF Champions League triumph, covering the entire North Stand with the iconic eagle.' },
      { locale: 'fr', title: 'Champions d\'Afrique', description: 'Un tifo 3D massif célébrant le triomphe du Raja Casablanca en Ligue des Champions CAF, couvrant toute la tribune Nord avec l\'aigle iconique.' },
      { locale: 'ar', title: 'أبطال أفريقيا', description: 'تيفو ثلاثي الأبعاد ضخم يحتفل بانتصار الرجاء البيضاوي في دوري أبطال أفريقيا، يغطي المدرج الشمالي بالكامل مع النسر الأيقوني.' },
      { locale: 'it', title: 'Campioni d\'Africa', description: 'Un enorme tifo 3D che celebra il trionfo del Raja Casablanca nella CAF Champions League, coprendo l\'intera tribuna Nord con l\'aquila iconica.' },
      { locale: 'es', title: 'Campeones de África', description: 'Un tifo 3D masivo celebrando el triunfo del Raja Casablanca en la Liga de Campeones CAF, cubriendo toda la grada Norte con el águila icónica.' },
      { locale: 'pt-br', title: 'Campeões da África', description: 'Um tifo 3D massivo celebrando o triunfo do Raja Casablanca na CAF Champions League, cobrindo toda a arquibancada Norte com a águia icônica.' }
    ],
    group: 'GREEN BOYS 2005',
    groupSlug: 'green-boys-2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    date: new Date('2023-12-15'),
    match: 'Raja vs Wydad - Casablanca Derby',
    stadium: 'Stade Mohammed V',
    views: 450000,
    likes: 125000,
    isFeatured: true,
    isSpotlight: true,
    participantsCount: 45000
  },
  {
    translations: [
      { locale: 'en', title: 'Champions League Nights', description: 'San Siro erupts as Curva Sud creates a sea of red and black flames for the Champions League knockout round.' },
      { locale: 'fr', title: 'Nuits de Ligue des Champions', description: 'San Siro explose alors que la Curva Sud crée une mer de flammes rouges et noires pour les phases éliminatoires de la Ligue des Champions.' },
      { locale: 'ar', title: 'ليالي دوري الأبطال', description: 'سان سيرو يشتعل مع إبداع كورفا سود بحراً من اللهب الأحمر والأسود لأدوار خروج المغلوب في دوري الأبطال.' },
      { locale: 'it', title: 'Notti di Champions League', description: 'San Siro esplode quando la Curva Sud crea un mare di fiamme rossonere per la fase a eliminazione diretta della Champions League.' },
      { locale: 'es', title: 'Noches de Champions League', description: 'San Siro estalla mientras la Curva Sud crea un mar de llamas rojas y negras para la ronda eliminatoria de la Champions League.' },
      { locale: 'pt-br', title: 'Noites de Champions League', description: 'San Siro explode enquanto a Curva Sud cria um mar de chamas vermelhas e pretas para a fase eliminatória da Champions League.' }
    ],
    group: 'Curva Sud Milano',
    groupSlug: 'curva-sud-milano',
    club: 'AC Milan',
    country: 'Italy',
    countryCode: 'IT',
    date: new Date('2023-02-14'),
    match: 'AC Milan vs Tottenham',
    stadium: 'San Siro',
    views: 890000,
    likes: 234000,
    isFeatured: true,
    isSpotlight: false,
    participantsCount: 25000
  },
  {
    translations: [
      { locale: 'en', title: 'Yellow Wall Symphony', description: 'The legendary Südtribüne creates a stunning card display spelling "ECHTE LIEBE" - True Love - before the Revierderby.' },
      { locale: 'fr', title: 'Symphonie du Mur Jaune', description: 'La légendaire Südtribüne crée un superbe affichage de cartes épelant "ECHTE LIEBE" - Vrai Amour - avant le Revierderby.' },
      { locale: 'ar', title: 'سيمفونية الجدار الأصفر', description: 'زودتريبون الأسطورية تبدع عرض بطاقات مذهل يكتب "ECHTE LIEBE" - الحب الحقيقي - قبل ديربي الرور.' },
      { locale: 'it', title: 'Sinfonia del Muro Giallo', description: 'La leggendaria Südtribüne crea una straordinaria coreografia che scrive "ECHTE LIEBE" - Vero Amore - prima del Revierderby.' },
      { locale: 'es', title: 'Sinfonía del Muro Amarillo', description: 'La legendaria Südtribüne crea una impresionante exhibición de tarjetas deletreando "ECHTE LIEBE" - Amor Verdadero - antes del Revierderby.' },
      { locale: 'pt-br', title: 'Sinfonia do Muro Amarelo', description: 'A lendária Südtribüne cria uma impressionante exibição de cartões soletrando "ECHTE LIEBE" - Amor Verdadeiro - antes do Revierderby.' }
    ],
    group: 'Yellow Wall',
    groupSlug: 'yellow-wall',
    club: 'Borussia Dortmund',
    country: 'Germany',
    countryCode: 'DE',
    date: new Date('2023-11-04'),
    match: 'Dortmund vs Schalke - Revierderby',
    stadium: 'Signal Iduna Park',
    views: 1200000,
    likes: 345000,
    isFeatured: true,
    isSpotlight: false,
    participantsCount: 24454
  },
  {
    translations: [
      { locale: 'en', title: 'La Bombonera Erupts', description: 'La 12 creates an unforgettable atmosphere as the entire stadium becomes a sea of blue and gold for the Superclásico.' },
      { locale: 'fr', title: 'La Bombonera Explose', description: 'La 12 crée une atmosphère inoubliable alors que tout le stade devient une mer de bleu et d\'or pour le Superclásico.' },
      { locale: 'ar', title: 'لا بومبونيرا تشتعل', description: 'لا 12 تخلق أجواءً لا تُنسى حيث يتحول الملعب بأكمله إلى بحر من الأزرق والذهبي للسوبركلاسيكو.' },
      { locale: 'it', title: 'La Bombonera Esplode', description: 'La 12 crea un\'atmosfera indimenticabile quando l\'intero stadio diventa un mare di blu e oro per il Superclásico.' },
      { locale: 'es', title: 'La Bombonera Estalla', description: 'La 12 crea una atmósfera inolvidable mientras todo el estadio se convierte en un mar de azul y oro para el Superclásico.' },
      { locale: 'pt-br', title: 'La Bombonera Explode', description: 'La 12 cria uma atmosfera inesquecível enquanto todo o estádio se torna um mar de azul e dourado para o Superclásico.' }
    ],
    group: 'La 12',
    groupSlug: 'la-12',
    club: 'Boca Juniors',
    country: 'Argentina',
    countryCode: 'AR',
    date: new Date('2023-09-24'),
    match: 'Boca Juniors vs River Plate - Superclásico',
    stadium: 'La Bombonera',
    views: 980000,
    likes: 287000,
    isFeatured: true,
    isSpotlight: false,
    participantsCount: 54000
  },
  {
    translations: [
      { locale: 'en', title: 'You\'ll Never Walk Alone', description: 'The Kop creates a spine-tingling mosaic as 28,000 fans hold up scarves singing the legendary anthem before a crucial European night.' },
      { locale: 'fr', title: 'You\'ll Never Walk Alone', description: 'Le Kop crée une mosaïque à donner des frissons alors que 28 000 fans lèvent leurs écharpes en chantant l\'hymne légendaire avant une nuit européenne cruciale.' },
      { locale: 'ar', title: 'لن تمشي وحيداً أبداً', description: 'الكوب يبدع لوحة مذهلة حيث يرفع 28,000 مشجع أوشحتهم وهم يغنون النشيد الأسطوري قبل ليلة أوروبية حاسمة.' },
      { locale: 'it', title: 'You\'ll Never Walk Alone', description: 'Il Kop crea un mosaico da brividi quando 28.000 tifosi alzano le sciarpe cantando l\'inno leggendario prima di una cruciale notte europea.' },
      { locale: 'es', title: 'You\'ll Never Walk Alone', description: 'El Kop crea un mosaico impresionante mientras 28.000 aficionados levantan bufandas cantando el himno legendario antes de una noche europea crucial.' },
      { locale: 'pt-br', title: 'You\'ll Never Walk Alone', description: 'O Kop cria um mosaico arrepiante enquanto 28.000 torcedores erguem cachecóis cantando o hino lendário antes de uma noite europeia crucial.' }
    ],
    group: 'The Kop',
    groupSlug: 'the-kop',
    club: 'Liverpool FC',
    country: 'England',
    countryCode: 'GB',
    date: new Date('2023-04-11'),
    match: 'Liverpool vs Real Madrid',
    stadium: 'Anfield',
    views: 2100000,
    likes: 567000,
    isFeatured: true,
    isSpotlight: false,
    participantsCount: 28000
  }
];

// ==================== CHANT DATA ====================
const chants = [
  {
    translations: [
      { locale: 'en', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nRaja dyalna, Raja dyalna\nNhabouk bezaf, nhabouk bezaf', origin: 'Created by GREEN BOYS 2005 in 2006, this became the signature chant of Raja Casablanca. The Darija lyrics express unconditional love for the club.' },
      { locale: 'fr', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nRaja dyalna, Raja dyalna\nNhabouk bezaf, nhabouk bezaf', origin: 'Créé par GREEN BOYS 2005 en 2006, c\'est devenu le chant signature du Raja Casablanca. Les paroles en darija expriment un amour inconditionnel pour le club.' },
      { locale: 'ar', title: 'ديما راجا', lyrics: 'ديما راجا، ديما راجا\nفي قلبي أنت، في قلبي أنت\nراجا ديالنا، راجا ديالنا\nنحبوك بزاف، نحبوك بزاف', origin: 'أنشأها غرين بويز 2005 في عام 2006، أصبحت هذه الأغنية الخاصة بنادي الرجاء البيضاوي. كلمات الدارجة تعبر عن حب غير مشروط للنادي.' },
      { locale: 'it', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nRaja dyalna, Raja dyalna\nNhabouk bezaf, nhabouk bezaf', origin: 'Creato da GREEN BOYS 2005 nel 2006, è diventato il coro simbolo del Raja Casablanca. Le parole in Darija esprimono amore incondizionato per il club.' },
      { locale: 'es', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nRaja dyalna, Raja dyalna\nNhabouk bezaf, nhabouk bezaf', origin: 'Creado por GREEN BOYS 2005 en 2006, se convirtió en el cántico distintivo del Raja Casablanca. La letra en Darija expresa amor incondicional por el club.' },
      { locale: 'pt-br', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nRaja dyalna, Raja dyalna\nNhabouk bezaf, nhabouk bezaf', origin: 'Criado pelo GREEN BOYS 2005 em 2006, tornou-se o canto característico do Raja Casablanca. A letra em Darija expressa amor incondicional pelo clube.' }
    ],
    group: 'GREEN BOYS 2005',
    groupSlug: 'green-boys-2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    duration: '3:45',
    views: 890000,
    likes: 234000,
    isFeatured: true,
    yearCreated: 2006
  },
  {
    translations: [
      { locale: 'en', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high\nAnd don\'t be afraid of the dark\nAt the end of the storm\nThere\'s a golden sky', origin: 'Originally from the 1945 Rodgers and Hammerstein musical "Carousel", adopted by Liverpool fans in the 1960s after Gerry and the Pacemakers\' cover topped the charts.' },
      { locale: 'fr', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high\nAnd don\'t be afraid of the dark\nAt the end of the storm\nThere\'s a golden sky', origin: 'À l\'origine de la comédie musicale "Carousel" de Rodgers et Hammerstein en 1945, adopté par les fans de Liverpool dans les années 1960 après que la reprise de Gerry and the Pacemakers soit en tête des charts.' },
      { locale: 'ar', title: 'لن تمشي وحيداً أبداً', lyrics: 'عندما تمشي خلال العاصفة\nارفع رأسك عالياً\nولا تخف من الظلام\nفي نهاية العاصفة\nهناك سماء ذهبية', origin: 'في الأصل من مسرحية "كاروسيل" لروجرز وهامرشتاين عام 1945، تبناها مشجعو ليفربول في الستينيات بعد أن تصدرت نسخة جيري آند ذا بيسميكرز قوائم الأغاني.' },
      { locale: 'it', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high\nAnd don\'t be afraid of the dark\nAt the end of the storm\nThere\'s a golden sky', origin: 'Originariamente dal musical "Carousel" di Rodgers e Hammerstein del 1945, adottato dai tifosi del Liverpool negli anni \'60 dopo che la cover di Gerry and the Pacemakers raggiunse la vetta delle classifiche.' },
      { locale: 'es', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high\nAnd don\'t be afraid of the dark\nAt the end of the storm\nThere\'s a golden sky', origin: 'Originalmente del musical "Carousel" de Rodgers y Hammerstein de 1945, adoptado por los aficionados del Liverpool en los años 60 después de que la versión de Gerry and the Pacemakers llegara al número uno.' },
      { locale: 'pt-br', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high\nAnd don\'t be afraid of the dark\nAt the end of the storm\nThere\'s a golden sky', origin: 'Originalmente do musical "Carousel" de Rodgers e Hammerstein de 1945, adotado pelos torcedores do Liverpool nos anos 60 após a versão de Gerry and the Pacemakers chegar ao topo das paradas.' }
    ],
    group: 'The Kop',
    groupSlug: 'the-kop',
    club: 'Liverpool FC',
    country: 'England',
    countryCode: 'GB',
    duration: '2:58',
    views: 5400000,
    likes: 1890000,
    isFeatured: true,
    yearCreated: 1963
  },
  {
    translations: [
      { locale: 'en', title: 'Dale Bo', lyrics: 'Dale Bo, dale Bo\nDale campeón, dale campeón\nQue esta noche tenemos que ganar\nDale Bo, dale Bo', origin: 'One of the most iconic chants of South American football, created by La 12 and sung at every Boca Juniors match at La Bombonera.' },
      { locale: 'fr', title: 'Dale Bo', lyrics: 'Dale Bo, dale Bo\nDale campeón, dale campeón\nQue esta noche tenemos que ganar\nDale Bo, dale Bo', origin: 'L\'un des chants les plus emblématiques du football sud-américain, créé par La 12 et chanté à chaque match de Boca Juniors à La Bombonera.' },
      { locale: 'ar', title: 'داليه بو', lyrics: 'داليه بو، داليه بو\nداليه كامبيون، داليه كامبيون\nكي إستا نوتشي تينيموس كي غانار\nداليه بو، داليه بو', origin: 'واحدة من أكثر الأغاني شهرة في كرة القدم الأمريكية الجنوبية، أنشأتها لا 12 وتُغنى في كل مباراة لبوكا جونيورز في لا بومبونيرا.' },
      { locale: 'it', title: 'Dale Bo', lyrics: 'Dale Bo, dale Bo\nDale campeón, dale campeón\nQue esta noche tenemos que ganar\nDale Bo, dale Bo', origin: 'Uno dei cori più iconici del calcio sudamericano, creato da La 12 e cantato ad ogni partita del Boca Juniors alla Bombonera.' },
      { locale: 'es', title: 'Dale Bo', lyrics: 'Dale Bo, dale Bo\nDale campeón, dale campeón\nQue esta noche tenemos que ganar\nDale Bo, dale Bo', origin: 'Uno de los cánticos más icónicos del fútbol sudamericano, creado por La 12 y cantado en cada partido del Boca Juniors en La Bombonera.' },
      { locale: 'pt-br', title: 'Dale Bo', lyrics: 'Dale Bo, dale Bo\nDale campeón, dale campeón\nQue esta noche tenemos que ganar\nDale Bo, dale Bo', origin: 'Um dos cantos mais icônicos do futebol sul-americano, criado pela La 12 e cantado em cada jogo do Boca Juniors na Bombonera.' }
    ],
    group: 'La 12',
    groupSlug: 'la-12',
    club: 'Boca Juniors',
    country: 'Argentina',
    countryCode: 'AR',
    duration: '2:30',
    views: 2340000,
    likes: 678000,
    isFeatured: true,
    yearCreated: 1970
  },
  {
    translations: [
      { locale: 'en', title: 'Siamo Noi', lyrics: 'Siamo noi, siamo noi\nI campioni dell\'Italia siamo noi\nSiamo noi, siamo noi\nI campioni dell\'Italia siamo noi', origin: 'The classic victory chant of AC Milan, sung by Curva Sud after every championship triumph since the 1970s.' },
      { locale: 'fr', title: 'Siamo Noi', lyrics: 'Siamo noi, siamo noi\nI campioni dell\'Italia siamo noi\nSiamo noi, siamo noi\nI campioni dell\'Italia siamo noi', origin: 'Le chant de victoire classique de l\'AC Milan, chanté par la Curva Sud après chaque triomphe en championnat depuis les années 1970.' },
      { locale: 'ar', title: 'سيامو نوي', lyrics: 'سيامو نوي، سيامو نوي\nإي كامبيوني ديل إيتاليا سيامو نوي\nسيامو نوي، سيامو نوي\nإي كامبيوني ديل إيتاليا سيامو نوي', origin: 'أغنية النصر الكلاسيكية لميلان، تُغنى من كورفا سود بعد كل انتصار في البطولة منذ السبعينيات.' },
      { locale: 'it', title: 'Siamo Noi', lyrics: 'Siamo noi, siamo noi\nI campioni dell\'Italia siamo noi\nSiamo noi, siamo noi\nI campioni dell\'Italia siamo noi', origin: 'Il classico coro di vittoria del Milan, cantato dalla Curva Sud dopo ogni trionfo in campionato dagli anni \'70.' },
      { locale: 'es', title: 'Siamo Noi', lyrics: 'Siamo noi, siamo noi\nI campioni dell\'Italia siamo noi\nSiamo noi, siamo noi\nI campioni dell\'Italia siamo noi', origin: 'El cántico de victoria clásico del AC Milan, cantado por la Curva Sud después de cada triunfo en el campeonato desde los años 70.' },
      { locale: 'pt-br', title: 'Siamo Noi', lyrics: 'Siamo noi, siamo noi\nI campioni dell\'Italia siamo noi\nSiamo noi, siamo noi\nI campioni dell\'Italia siamo noi', origin: 'O canto de vitória clássico do AC Milan, cantado pela Curva Sud após cada triunfo no campeonato desde os anos 70.' }
    ],
    group: 'Curva Sud Milano',
    groupSlug: 'curva-sud-milano',
    club: 'AC Milan',
    country: 'Italy',
    countryCode: 'IT',
    duration: '1:45',
    views: 1560000,
    likes: 456000,
    isFeatured: true,
    yearCreated: 1972
  }
];

// ==================== GLOSSARY DATA ====================
const glossaryTerms = [
  {
    term: 'Capo',
    translations: [
      { locale: 'en', definition: 'The leader who stands elevated, often on a podium, directing chanting, choreography, and atmosphere in the stands.', example: 'The capo raised his megaphone to lead the next chant.' },
      { locale: 'fr', definition: 'Le leader qui se tient en hauteur, souvent sur un podium, dirigeant les chants, la chorégraphie et l\'ambiance dans les tribunes.', example: 'Le capo a levé son mégaphone pour mener le prochain chant.' },
      { locale: 'ar', definition: 'القائد الذي يقف مرتفعاً، غالباً على منصة، يوجه الهتافات والتصميم الفني والأجواء في المدرجات.', example: 'رفع الكابو مكبر صوته لقيادة الهتاف التالي.' },
      { locale: 'it', definition: 'Il leader che sta in piedi in posizione elevata, spesso su un podio, dirigendo i cori, le coreografie e l\'atmosfera sugli spalti.', example: 'Il capo ha alzato il megafono per guidare il prossimo coro.' },
      { locale: 'es', definition: 'El líder que se para elevado, a menudo en un podio, dirigiendo los cánticos, coreografía y atmósfera en las gradas.', example: 'El capo levantó su megáfono para liderar el siguiente cántico.' },
      { locale: 'pt-br', definition: 'O líder que fica elevado, geralmente em um pódio, dirigindo os cantos, coreografia e atmosfera nas arquibancadas.', example: 'O capo levantou seu megafone para liderar o próximo canto.' }
    ],
    origin: 'Italian',
    category: 'organization',
    relatedTerms: ['Curva', 'Tifo']
  },
  {
    term: 'Curva',
    translations: [
      { locale: 'en', definition: 'The curved end sections of a stadium where organized Ultra groups traditionally gather, originating from Italian stadium architecture.', example: 'The Curva Sud of AC Milan is one of the most famous in world football.' },
      { locale: 'fr', definition: 'Les sections courbées aux extrémités d\'un stade où les groupes Ultra organisés se rassemblent traditionnellement, originaires de l\'architecture des stades italiens.', example: 'La Curva Sud de l\'AC Milan est l\'une des plus célèbres du football mondial.' },
      { locale: 'ar', definition: 'الأقسام المنحنية في نهايات الملعب حيث تتجمع مجموعات الألتراس المنظمة تقليدياً، نشأت من هندسة الملاعب الإيطالية.', example: 'كورفا سود ميلان واحدة من أشهر المدرجات في كرة القدم العالمية.' },
      { locale: 'it', definition: 'Le sezioni curve alle estremità di uno stadio dove tradizionalmente si radunano i gruppi Ultra organizzati, originarie dell\'architettura degli stadi italiani.', example: 'La Curva Sud del Milan è una delle più famose nel calcio mondiale.' },
      { locale: 'es', definition: 'Las secciones curvas en los extremos de un estadio donde tradicionalmente se reúnen los grupos Ultra organizados, originarias de la arquitectura de los estadios italianos.', example: 'La Curva Sud del AC Milan es una de las más famosas del fútbol mundial.' },
      { locale: 'pt-br', definition: 'As seções curvas nas extremidades de um estádio onde tradicionalmente se reúnem os grupos Ultra organizados, originárias da arquitetura dos estádios italianos.', example: 'A Curva Sud do AC Milan é uma das mais famosas do futebol mundial.' }
    ],
    origin: 'Italian',
    category: 'general',
    relatedTerms: ['Tifo', 'Capo', 'Striscione']
  },
  {
    term: 'Tifo',
    translations: [
      { locale: 'en', definition: 'A choreographed display using cards, banners, flags, and other materials to create large-scale visual art in the stands, often taking months to prepare.', example: 'The tifo displayed before the derby covered the entire north stand.' },
      { locale: 'fr', definition: 'Un affichage chorégraphié utilisant des cartes, des bannières, des drapeaux et d\'autres matériaux pour créer de l\'art visuel à grande échelle dans les tribunes, nécessitant souvent des mois de préparation.', example: 'Le tifo affiché avant le derby couvrait toute la tribune nord.' },
      { locale: 'ar', definition: 'عرض مُنسق باستخدام البطاقات واللافتات والأعلام ومواد أخرى لإنشاء فن بصري واسع النطاق في المدرجات، غالباً يستغرق أشهراً للتحضير.', example: 'التيفو المعروض قبل الديربي غطى المدرج الشمالي بالكامل.' },
      { locale: 'it', definition: 'Una coreografia che utilizza cartoncini, striscioni, bandiere e altri materiali per creare arte visiva su larga scala sugli spalti, spesso richiedendo mesi di preparazione.', example: 'Il tifo mostrato prima del derby copriva l\'intera curva nord.' },
      { locale: 'es', definition: 'Una exhibición coreografiada usando tarjetas, pancartas, banderas y otros materiales para crear arte visual a gran escala en las gradas, a menudo tomando meses de preparación.', example: 'El tifo mostrado antes del derby cubrió toda la grada norte.' },
      { locale: 'pt-br', definition: 'Uma exibição coreografada usando cartões, faixas, bandeiras e outros materiais para criar arte visual em grande escala nas arquibancadas, muitas vezes levando meses para preparar.', example: 'O tifo exibido antes do clássico cobriu toda a arquibancada norte.' }
    ],
    origin: 'Italian (tifoso = supporter)',
    category: 'tifo',
    relatedTerms: ['Curva', 'Striscione', 'Corteo']
  },
  {
    term: 'Corteo',
    translations: [
      { locale: 'en', definition: 'An organized march to the stadium before matches, featuring flags, banners, drums, and pyrotechnics, demonstrating group unity and passion.', example: 'The corteo started at 2pm from the city center, gathering thousands of supporters.' },
      { locale: 'fr', definition: 'Une marche organisée vers le stade avant les matchs, avec des drapeaux, des bannières, des tambours et des pyrotechniques, démontrant l\'unité et la passion du groupe.', example: 'Le corteo a commencé à 14h depuis le centre-ville, rassemblant des milliers de supporters.' },
      { locale: 'ar', definition: 'مسيرة منظمة إلى الملعب قبل المباريات، تضم أعلاماً ولافتات وطبولاً وألعاباً نارية، تُظهر وحدة المجموعة وشغفها.', example: 'بدأ الكورتيو في الساعة 2 ظهراً من وسط المدينة، وجمع آلاف المشجعين.' },
      { locale: 'it', definition: 'Una marcia organizzata verso lo stadio prima delle partite, con bandiere, striscioni, tamburi e fuochi d\'artificio, dimostrando unità di gruppo e passione.', example: 'Il corteo è partito alle 14 dal centro città, radunando migliaia di tifosi.' },
      { locale: 'es', definition: 'Una marcha organizada al estadio antes de los partidos, con banderas, pancartas, tambores y pirotecnia, demostrando unidad grupal y pasión.', example: 'El corteo comenzó a las 2pm desde el centro de la ciudad, reuniendo miles de aficionados.' },
      { locale: 'pt-br', definition: 'Uma marcha organizada até o estádio antes dos jogos, com bandeiras, faixas, tambores e pirotecnia, demonstrando unidade de grupo e paixão.', example: 'O corteo começou às 14h do centro da cidade, reunindo milhares de torcedores.' }
    ],
    origin: 'Italian (corteo = procession)',
    category: 'matchday',
    relatedTerms: ['Tifo', 'Curva', 'Pyro']
  },
  {
    term: 'Barra Brava',
    translations: [
      { locale: 'en', definition: 'South American equivalent of Ultra groups, known for their intense passion, rhythmic drumming, and continuous singing throughout matches.', example: 'La 12, Boca Juniors\' barra brava, is considered one of the most passionate in the world.' },
      { locale: 'fr', definition: 'Équivalent sud-américain des groupes Ultra, connus pour leur passion intense, leurs rythmes de tambour et leur chant continu tout au long des matchs.', example: 'La 12, la barra brava de Boca Juniors, est considérée comme l\'une des plus passionnées au monde.' },
      { locale: 'ar', definition: 'المعادل لمجموعات الألتراس في أمريكا الجنوبية، معروفة بشغفها الشديد وإيقاعات الطبول والغناء المستمر طوال المباريات.', example: 'لا 12، بارا برافا بوكا جونيورز، تُعتبر واحدة من أكثر المجموعات شغفاً في العالم.' },
      { locale: 'it', definition: 'Equivalente sudamericano dei gruppi Ultra, noti per la loro intensa passione, i ritmi dei tamburi e il canto continuo durante le partite.', example: 'La 12, la barra brava del Boca Juniors, è considerata una delle più appassionate al mondo.' },
      { locale: 'es', definition: 'Equivalente sudamericano de los grupos Ultra, conocidos por su intensa pasión, ritmos de tambor y canto continuo durante los partidos.', example: 'La 12, la barra brava de Boca Juniors, es considerada una de las más apasionadas del mundo.' },
      { locale: 'pt-br', definition: 'Equivalente sul-americano dos grupos Ultra, conhecidos por sua intensa paixão, batidas de tambor rítmicas e canto contínuo durante os jogos.', example: 'La 12, a barra brava do Boca Juniors, é considerada uma das mais apaixonadas do mundo.' }
    ],
    origin: 'Spanish (barra = group, brava = fierce)',
    category: 'organization',
    relatedTerms: ['Aguante', 'Hinchada']
  },
  {
    term: 'Pyro',
    translations: [
      { locale: 'en', definition: 'Pyrotechnics including flares, smoke bombs, and fireworks used to create atmospheric displays in the stands. While often banned, it remains a controversial part of Ultra culture.', example: 'Red pyro filled the air as the players entered the pitch.' },
      { locale: 'fr', definition: 'Pyrotechnie comprenant des fumigènes, des bombes fumigènes et des feux d\'artifice utilisés pour créer des affichages atmosphériques dans les tribunes. Bien que souvent interdite, elle reste une partie controversée de la culture Ultra.', example: 'La pyro rouge a rempli l\'air lorsque les joueurs sont entrés sur le terrain.' },
      { locale: 'ar', definition: 'الألعاب النارية بما في ذلك الشعلات والقنابل الدخانية والألعاب النارية المستخدمة لإنشاء عروض جوية في المدرجات. رغم حظرها غالباً، تظل جزءاً مثيراً للجدل من ثقافة الألتراس.', example: 'ملأت الألعاب النارية الحمراء الهواء عندما دخل اللاعبون الملعب.' },
      { locale: 'it', definition: 'Fuochi d\'artificio tra cui torce, fumogeni e razzi usati per creare effetti scenici sugli spalti. Sebbene spesso vietati, rimangono una parte controversa della cultura Ultra.', example: 'I fumogeni rossi hanno riempito l\'aria quando i giocatori sono entrati in campo.' },
      { locale: 'es', definition: 'Pirotecnia que incluye bengalas, bombas de humo y fuegos artificiales usados para crear exhibiciones atmosféricas en las gradas. Aunque a menudo prohibida, sigue siendo una parte controvertida de la cultura Ultra.', example: 'La pirotecnia roja llenó el aire cuando los jugadores entraron al campo.' },
      { locale: 'pt-br', definition: 'Pirotecnia incluindo sinalizadores, bombas de fumaça e fogos de artifício usados para criar exibições atmosféricas nas arquibancadas. Embora frequentemente proibida, continua sendo uma parte controversa da cultura Ultra.', example: 'A pirotecnia vermelha encheu o ar quando os jogadores entraram em campo.' }
    ],
    origin: 'Greek (pyr = fire)',
    category: 'tifo',
    relatedTerms: ['Tifo', 'Curva', 'Corteo']
  },
  {
    term: 'Striscione',
    translations: [
      { locale: 'en', definition: 'Large horizontal banners with messages, group names, or dedications, typically displayed at the front of the curva or carried during corteos.', example: 'The striscione honoring the club legend stretched across 50 meters.' },
      { locale: 'fr', definition: 'Grandes bannières horizontales avec des messages, des noms de groupes ou des dédicaces, généralement affichées à l\'avant de la curva ou portées pendant les corteos.', example: 'Le striscione honorant la légende du club s\'étendait sur 50 mètres.' },
      { locale: 'ar', definition: 'لافتات أفقية كبيرة تحمل رسائل أو أسماء مجموعات أو إهداءات، تُعرض عادةً في مقدمة الكورفا أو تُحمل خلال الكورتيو.', example: 'الستريشوني الذي يكرم أسطورة النادي امتد على 50 متراً.' },
      { locale: 'it', definition: 'Grandi striscioni orizzontali con messaggi, nomi di gruppi o dediche, tipicamente esposti in prima fila in curva o portati durante i cortei.', example: 'Lo striscione in onore della leggenda del club si estendeva per 50 metri.' },
      { locale: 'es', definition: 'Grandes pancartas horizontales con mensajes, nombres de grupos o dedicatorias, típicamente mostradas al frente de la curva o llevadas durante los corteos.', example: 'La pancarta que honraba a la leyenda del club se extendía por 50 metros.' },
      { locale: 'pt-br', definition: 'Grandes faixas horizontais com mensagens, nomes de grupos ou dedicatórias, tipicamente exibidas na frente da curva ou carregadas durante os cortejos.', example: 'A faixa homenageando a lenda do clube se estendia por 50 metros.' }
    ],
    origin: 'Italian (striscione = banner)',
    category: 'tifo',
    relatedTerms: ['Tifo', 'Curva', 'Corteo']
  },
  {
    term: 'Aguante',
    translations: [
      { locale: 'en', definition: 'A core South American concept meaning endurance, resilience, and unconditional support for the club regardless of results or circumstances.', example: 'The fans showed aguante by continuing to sing even when losing 3-0.' },
      { locale: 'fr', definition: 'Un concept sud-américain fondamental signifiant endurance, résilience et soutien inconditionnel au club quels que soient les résultats ou les circonstances.', example: 'Les fans ont montré l\'aguante en continuant à chanter même en perdant 3-0.' },
      { locale: 'ar', definition: 'مفهوم جوهري في أمريكا الجنوبية يعني التحمل والمرونة والدعم غير المشروط للنادي بغض النظر عن النتائج أو الظروف.', example: 'أظهر المشجعون الأغوانتي بالاستمرار في الغناء حتى عند الخسارة 3-0.' },
      { locale: 'it', definition: 'Un concetto fondamentale sudamericano che significa resistenza, resilienza e supporto incondizionato per il club indipendentemente dai risultati o dalle circostanze.', example: 'I tifosi hanno mostrato aguante continuando a cantare anche perdendo 3-0.' },
      { locale: 'es', definition: 'Un concepto fundamental sudamericano que significa resistencia, resiliencia y apoyo incondicional al club sin importar los resultados o las circunstancias.', example: 'Los aficionados mostraron aguante al seguir cantando incluso perdiendo 3-0.' },
      { locale: 'pt-br', definition: 'Um conceito sul-americano fundamental que significa resistência, resiliência e apoio incondicional ao clube independentemente dos resultados ou circunstâncias.', example: 'Os torcedores mostraram aguante ao continuar cantando mesmo perdendo de 3-0.' }
    ],
    origin: 'Spanish (aguantar = to endure)',
    category: 'general',
    relatedTerms: ['Barra Brava', 'Hinchada']
  }
];

// ==================== SEED FUNCTION ====================
async function seedContent() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected!');

    const Timeline = mongoose.models.Timeline || mongoose.model('Timeline', TimelineSchema);
    const Tifo = mongoose.models.Tifo || mongoose.model('Tifo', TifoSchema);
    const Chant = mongoose.models.Chant || mongoose.model('Chant', ChantSchema);
    const GlossaryTerm = mongoose.models.GlossaryTerm || mongoose.model('GlossaryTerm', GlossaryTermSchema);

    // Clear existing data
    console.log('Clearing existing content...');
    await Timeline.deleteMany({});
    await Tifo.deleteMany({});
    await Chant.deleteMany({});
    await GlossaryTerm.deleteMany({});

    // Seed Timeline
    console.log('Seeding Timeline events...');
    await Timeline.insertMany(timelineEvents);
    console.log(`Seeded ${timelineEvents.length} timeline events`);

    // Seed Tifos
    console.log('Seeding Tifos...');
    await Tifo.insertMany(tifos);
    console.log(`Seeded ${tifos.length} tifos`);

    // Seed Chants
    console.log('Seeding Chants...');
    await Chant.insertMany(chants);
    console.log(`Seeded ${chants.length} chants`);

    // Seed Glossary
    console.log('Seeding Glossary terms...');
    await GlossaryTerm.insertMany(glossaryTerms);
    console.log(`Seeded ${glossaryTerms.length} glossary terms`);

    console.log('\n✅ Content seeding complete!');
    console.log(`
Summary:
- Timeline Events: ${timelineEvents.length}
- Tifos: ${tifos.length}
- Chants: ${chants.length}
- Glossary Terms: ${glossaryTerms.length}
    `);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seedContent();

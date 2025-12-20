// Comprehensive Seed Data for MOUVEMENT Platform
// All content in 6 languages: AR, EN, FR, IT, ES, PT-BR

import mongoose from 'mongoose';

// ============================================
// ULTRA GROUPS DATA
// ============================================
export const ultraGroupsData = [
  // MOROCCO
  {
    name: 'GREEN BOYS 2005',
    slug: 'green-boys-2005',
    club: 'Raja Club Athletic',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    isActive: true,
    history: `GREEN BOYS 2005 est le premier groupe Ultras du Maroc et d'Afrique, fondé le 18 décembre 2005. Ils ont révolutionné la culture supporterisme au Maghreb en introduisant les tifos, les fumigènes et les chants organisés. Leur impact dépasse le football - ils représentent l'identité de Casablanca et la jeunesse marocaine. Connus pour leurs chorégraphies spectaculaires et leur créativité sans limites, ils ont inspiré des générations de supporters à travers le continent africain.`,
    values: ['Loyauté', 'Créativité', 'Indépendance', 'Fierté'],
    motto: 'Dima Raja - Pour Toujours Vert',
    colors: ['#00A550', '#FFFFFF'],
    symbols: ['Aigle', 'Couronne', 'Étoile Verte'],
    stadium: 'Stade Mohammed V',
    membersEstimate: '15,000+',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {
      instagram: 'greenboys2005_official',
      facebook: 'GreenBoys2005',
      youtube: 'GreenBoys2005TV'
    },
    image: '/images/groups/green-boys-2005.webp',
    tifos: [
      {
        title: 'African Glory',
        description: 'Tifo géant célébrant la victoire en Coupe de la CAF',
        image: '/images/tifos/tifo-1.webp',
        date: new Date('2023-05-15'),
        match: 'Raja vs Al Ahly'
      }
    ],
    gallery: [
      { type: 'image', url: '/images/gallery/gallery-1.webp', caption: 'Derby de Casablanca 2024' },
      { type: 'image', url: '/images/gallery/gallery-2.webp', caption: 'Tifo Record 2023' }
    ]
  },
  {
    name: 'WINNERS',
    slug: 'winners',
    club: 'Wydad Athletic Club',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    isActive: true,
    history: `Les WINNERS sont le groupe Ultra du Wydad AC, fondé en 2005. Rivaux directs des GREEN BOYS dans le Derby de Casablanca, ils représentent la passion rouge et blanche. Connus pour leur ferveur et leurs tifos impressionnants, ils font du Stade Mohammed V un chaudron lors des matchs du WAC.`,
    values: ['Passion', 'Unité', 'Fidélité', 'Respect'],
    motto: 'Wydad Jusqu\'à la Mort',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Lion', 'Couronne'],
    stadium: 'Stade Mohammed V',
    membersEstimate: '12,000+',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    isFeatured: false,
    isVerified: true,
    socialLinks: {
      instagram: 'winners_official',
      facebook: 'WinnersUltras'
    },
    image: '/images/groups/wydad-winners.webp',
    tifos: [],
    gallery: []
  },
  // ITALY
  {
    name: 'Curva Sud Milano',
    slug: 'curva-sud-milano',
    club: 'AC Milan',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1968,
    isActive: true,
    history: `La Curva Sud Milano est l'un des groupes Ultras les plus emblématiques et historiques du monde. Née en 1968, elle a été pionnière du mouvement Ultra en Italie. De Fossa dei Leoni aux groupes actuels, la Curva Sud a créé un modèle de supporterisme qui a inspiré le monde entier. Leur passion pour les Rossoneri est légendaire.`,
    values: ['Tradition', 'Honneur', 'Passion', 'Milan nel cuore'],
    motto: 'Noi Siamo la Curva Sud',
    colors: ['#FF0000', '#000000'],
    symbols: ['Diable', 'Croix de Saint-Georges'],
    stadium: 'San Siro',
    membersEstimate: '20,000+',
    coordinates: { lat: 45.4781, lng: 9.1240 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {
      instagram: 'curvasudmilano',
      twitter: 'CurvaSudMilano'
    },
    image: '/images/groups/curva-sud-milano.webp',
    tifos: [
      {
        title: 'Champions League Night',
        description: 'Chorégraphie complète pour le match de Ligue des Champions',
        image: '/images/tifos/tifo-2.webp',
        date: new Date('2023-04-11'),
        match: 'Milan vs Napoli'
      }
    ],
    gallery: []
  },
  {
    name: 'Curva Nord Inter',
    slug: 'curva-nord-inter',
    club: 'Inter Milan',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1969,
    isActive: true,
    history: `La Curva Nord est le fief des supporters de l'Inter Milan depuis 1969. Portant les couleurs nerazzurri avec fierté, ils ont créé certains des tifos les plus impressionnants de l'histoire du football italien. Leur rivalité avec la Curva Sud dans le Derby della Madonnina est légendaire.`,
    values: ['Fierté', 'Tradition', 'Nerazzurri per sempre'],
    motto: 'Pazza Inter Amala',
    colors: ['#0068A8', '#000000'],
    symbols: ['Biscione', 'Croix'],
    stadium: 'San Siro',
    membersEstimate: '18,000+',
    coordinates: { lat: 45.4781, lng: 9.1240 },
    isFeatured: false,
    isVerified: true,
    socialLinks: {},
    image: '/images/groups/brigata-curva-sud.webp',
    tifos: [],
    gallery: []
  },
  {
    name: 'Curva Sud Roma',
    slug: 'curva-sud-roma',
    club: 'AS Roma',
    city: 'Rome',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1973,
    isActive: true,
    history: `La Curva Sud de l'Olimpico est le cœur battant des Giallorossi. Depuis 1973, les Ultras romanisti créent une atmosphère unique dans la Ville Éternelle. Leur chant "Grazie Roma" résonne dans tous les stades d'Italie.`,
    values: ['Roma', 'Cuore', 'Passione', 'Romanità'],
    motto: 'Roma Non Si Discute, Si Ama',
    colors: ['#8E1F2F', '#F0BC42'],
    symbols: ['Louve', 'Romulus et Remus'],
    stadium: 'Stadio Olimpico',
    membersEstimate: '25,000+',
    coordinates: { lat: 41.9341, lng: 12.4547 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {},
    image: '/images/groups/brigata-curva-sud.webp',
    tifos: [],
    gallery: []
  },
  // GERMANY
  {
    name: 'Yellow Wall',
    slug: 'yellow-wall',
    club: 'Borussia Dortmund',
    city: 'Dortmund',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1974,
    isActive: true,
    history: `Le Südtribüne du Signal Iduna Park, connu comme le "Yellow Wall" (Mur Jaune), est la plus grande tribune debout d'Europe avec 25,000 places. Ce mur de supporters crée une atmosphère électrique qui fait trembler les adversaires. L'unité et la passion des fans du BVB sont un modèle mondial.`,
    values: ['Échte Liebe', 'Unité', 'Passion', 'Tradition'],
    motto: 'Echte Liebe - Amour Véritable',
    colors: ['#FDE100', '#000000'],
    symbols: ['Abeille', 'BVB 09'],
    stadium: 'Signal Iduna Park',
    membersEstimate: '25,000+',
    coordinates: { lat: 51.4926, lng: 7.4518 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {},
    image: '/images/groups/yellow-wall.webp',
    tifos: [
      {
        title: 'Yellow Wave',
        description: 'Vague jaune coordonnée de 25,000 personnes',
        image: '/images/tifos/tifo-3.webp',
        date: new Date('2023-03-18'),
        match: 'BVB vs Bayern'
      }
    ],
    gallery: []
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
    history: `Schickeria München est le principal groupe Ultra du Bayern Munich, fondé en 2002. Ils ont apporté la culture Ultra dans l'Allianz Arena et défendent les valeurs du supporterisme actif contre la commercialisation excessive du football.`,
    values: ['Anti-Commercial', 'Tradition', 'Identité'],
    motto: 'Mia San Mia',
    colors: ['#DC052D', '#FFFFFF'],
    symbols: ['Diamant', 'Bavière'],
    stadium: 'Allianz Arena',
    membersEstimate: '8,000+',
    coordinates: { lat: 48.2188, lng: 11.6247 },
    isFeatured: false,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  // ARGENTINA
  {
    name: 'La 12',
    slug: 'la-12',
    club: 'Boca Juniors',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1925,
    isActive: true,
    history: `La 12, la hinchada de Boca Juniors, est considérée comme l'une des plus passionnées au monde. Depuis La Bombonera, leur énergie fait littéralement trembler le stade. Leur influence sur le football argentin et mondial est immense.`,
    values: ['Pasión', 'Aguante', 'Boca hasta la muerte'],
    motto: 'Boca Yo Te Amo',
    colors: ['#0033A0', '#FECC00'],
    symbols: ['Xeneize', '12'],
    stadium: 'La Bombonera',
    membersEstimate: '50,000+',
    coordinates: { lat: -34.6355, lng: -58.3649 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {},
    image: '/images/groups/la-12.webp',
    tifos: [
      {
        title: 'La Bombonera Explodes',
        description: 'Tifo complet pour le Superclásico',
        image: '/images/tifos/tifo-4.webp',
        date: new Date('2023-09-24'),
        match: 'Boca vs River'
      }
    ],
    gallery: []
  },
  {
    name: 'Los Borrachos del Tablón',
    slug: 'los-borrachos-del-tablon',
    club: 'River Plate',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1986,
    isActive: true,
    history: `Los Borrachos del Tablón sont la barra brava de River Plate depuis 1986. Leur passion pour el Millonario se manifeste au Monumental dans une des atmosphères les plus intenses d'Amérique du Sud.`,
    values: ['Millonario', 'Pasión', 'Orgullo'],
    motto: 'River hasta morir',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Diagonal', 'Millonario'],
    stadium: 'Estadio Monumental',
    membersEstimate: '40,000+',
    coordinates: { lat: -34.5454, lng: -58.4498 },
    isFeatured: false,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  // EGYPT
  {
    name: 'Ultras Ahlawy',
    slug: 'ultras-ahlawy',
    club: 'Al Ahly SC',
    city: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    yearFounded: 2007,
    isActive: true,
    history: `Ultras Ahlawy, fondé en 2007, est devenu un symbole de la passion footballistique en Égypte et au Moyen-Orient. Leur influence dépasse le football - ils ont joué un rôle important dans la société égyptienne. Malgré les difficultés, leur esprit reste vivant.`,
    values: ['Ahly', 'Fierté', 'Sacrifice', 'Unité'],
    motto: 'Ahly Above All',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Aigle', 'Rouge'],
    stadium: 'Cairo International Stadium',
    membersEstimate: '30,000+',
    coordinates: { lat: 30.0692, lng: 31.3131 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {},
    image: '/images/groups/ultras-ahlawy.webp',
    tifos: [],
    gallery: []
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
    history: `Les White Knights sont les Ultras du Zamalek SC, formant une rivalité intense avec les Ultras Ahlawy dans le Derby du Caire. Leur créativité et leur passion ont marqué l'histoire du supporterisme égyptien.`,
    values: ['Zamalek', 'Blanc', 'Honneur', 'Passion'],
    motto: 'White Knights Forever',
    colors: ['#FFFFFF', '#000000'],
    symbols: ['Chevalier', 'Couronne'],
    stadium: 'Cairo International Stadium',
    membersEstimate: '25,000+',
    coordinates: { lat: 30.0692, lng: 31.3131 },
    isFeatured: false,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  // SPAIN
  {
    name: 'Biris Norte',
    slug: 'biris-norte',
    club: 'Sevilla FC',
    city: 'Seville',
    country: 'Spain',
    countryCode: 'ES',
    yearFounded: 1975,
    isActive: true,
    history: `Biris Norte est l'un des groupes Ultras les plus anciens et respectés d'Espagne. Depuis 1975, ils supportent le Sevilla FC avec une passion andalouse incomparable. Leur rivalité avec le Betis dans le Derby de Séville est l'une des plus chaudes d'Europe.`,
    values: ['Sevillismo', 'Pasión', 'Andalucía'],
    motto: 'Sevilla hasta la muerte',
    colors: ['#FF0000', '#FFFFFF'],
    symbols: ['Biris', 'Giralda'],
    stadium: 'Ramón Sánchez Pizjuán',
    membersEstimate: '8,000+',
    coordinates: { lat: 37.3840, lng: -5.9705 },
    isFeatured: false,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  // BRAZIL
  {
    name: 'Gaviões da Fiel',
    slug: 'gavioes-da-fiel',
    club: 'Corinthians',
    city: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1969,
    isActive: true,
    history: `Gaviões da Fiel (Les Faucons des Fidèles) est la plus grande torcida organisée du monde. Fondée en 1969, elle compte plus de 100,000 membres. Leur batucada (percussion) et leurs chants sont légendaires dans tout le Brésil.`,
    values: ['Fidelidade', 'Paixão', 'Corinthians'],
    motto: 'Fiel até morrer',
    colors: ['#000000', '#FFFFFF'],
    symbols: ['Faucon', 'Timão'],
    stadium: 'Neo Química Arena',
    membersEstimate: '120,000+',
    coordinates: { lat: -23.5453, lng: -46.4743 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  {
    name: 'Mancha Verde',
    slug: 'mancha-verde',
    club: 'Palmeiras',
    city: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    yearFounded: 1983,
    isActive: true,
    history: `Mancha Verde (Tache Verte) est la principale torcida organisée du Palmeiras. Fondée en 1983, elle est connue pour son organisation et sa passion pour le Verdão.`,
    values: ['Verde', 'Orgulho', 'Palmeiras'],
    motto: 'Palmeiras não tem mundial? Tem sim senhor!',
    colors: ['#006437', '#FFFFFF'],
    symbols: ['Palme', 'Porco'],
    stadium: 'Allianz Parque',
    membersEstimate: '50,000+',
    coordinates: { lat: -23.5275, lng: -46.6781 },
    isFeatured: false,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  // ENGLAND
  {
    name: 'The Kop',
    slug: 'the-kop',
    club: 'Liverpool FC',
    city: 'Liverpool',
    country: 'England',
    countryCode: 'GB',
    yearFounded: 1906,
    isActive: true,
    history: `Le Kop d'Anfield est l'une des tribunes les plus mythiques du football mondial. Depuis plus d'un siècle, les supporters de Liverpool créent une atmosphère unique avec "You'll Never Walk Alone". Leur passion a inspiré des générations de fans.`,
    values: ['YNWA', 'Tradition', 'Passion', 'Liverpool'],
    motto: "You'll Never Walk Alone",
    colors: ['#C8102E', '#FFFFFF'],
    symbols: ['Liver Bird', 'Shankly Gates'],
    stadium: 'Anfield',
    membersEstimate: '25,000+',
    coordinates: { lat: 53.4308, lng: -2.9608 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  // TURKEY
  {
    name: 'UltrAslan',
    slug: 'ultraslan',
    club: 'Galatasaray',
    city: 'Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    yearFounded: 2001,
    isActive: true,
    history: `UltrAslan est le groupe Ultra officiel de Galatasaray. Depuis 2001, ils transforment le Türk Telekom Stadium en enfer pour les visiteurs. Leur passion et leurs tifos sont reconnus dans toute l'Europe.`,
    values: ['Cimbom', 'Passion', 'Istanbul'],
    motto: 'Seni Seviyoruz Galatasaray',
    colors: ['#FF0000', '#FFA500'],
    symbols: ['Lion', 'Cimbom'],
    stadium: 'Türk Telekom Stadium',
    membersEstimate: '30,000+',
    coordinates: { lat: 41.1034, lng: 28.9917 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  // FRANCE
  {
    name: 'Virage Auteuil',
    slug: 'virage-auteuil',
    club: 'Paris Saint-Germain',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    yearFounded: 1991,
    isActive: true,
    history: `Le Virage Auteuil est le cœur des supporters parisiens au Parc des Princes. Malgré les années difficiles et les interdictions, les Ultras parisiens continuent de soutenir le PSG avec passion.`,
    values: ['Paris', 'Passion', 'Fidélité'],
    motto: 'Ici c\'est Paris',
    colors: ['#004170', '#FF0000'],
    symbols: ['Tour Eiffel', 'Fleur de Lys'],
    stadium: 'Parc des Princes',
    membersEstimate: '10,000+',
    coordinates: { lat: 48.8414, lng: 2.2530 },
    isFeatured: false,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  },
  {
    name: 'Winners Marseille',
    slug: 'winners-marseille',
    club: 'Olympique de Marseille',
    city: 'Marseille',
    country: 'France',
    countryCode: 'FR',
    yearFounded: 1987,
    isActive: true,
    history: `Les Winners sont le groupe Ultra historique de l'OM, fondé en 1987. Au Vélodrome, ils créent une atmosphère unique qui fait la fierté de Marseille. Leur rivalité avec Paris est légendaire.`,
    values: ['Marseille', 'Passion', 'Méditerranée'],
    motto: 'A Jamais les Premiers',
    colors: ['#2FAEE0', '#FFFFFF'],
    symbols: ['Droit au But', 'OM'],
    stadium: 'Orange Vélodrome',
    membersEstimate: '15,000+',
    coordinates: { lat: 43.2699, lng: 5.3959 },
    isFeatured: true,
    isVerified: true,
    socialLinks: {},
    tifos: [],
    gallery: []
  }
];

// ============================================
// TIMELINE DATA (avec traductions)
// ============================================
export const timelineData = [
  {
    year: 1968,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'Birth of the Ultras Movement', description: 'The first organized Ultra groups emerge in Italian football stadiums, establishing the foundations of modern supporter culture. Fossa dei Leoni in Milan becomes the pioneer, creating a new way to support football clubs.' },
      { locale: 'fr', title: 'Naissance du Mouvement Ultras', description: 'Les premiers groupes Ultras organisés émergent dans les stades italiens, établissant les fondements de la culture supporterisme moderne. Fossa dei Leoni à Milan devient le pionnier, créant une nouvelle façon de supporter les clubs.' },
      { locale: 'ar', title: 'ولادة حركة الألتراس', description: 'ظهور أولى مجموعات الألتراس المنظمة في الملاعب الإيطالية، مما يؤسس لثقافة المشجعين الحديثة. فوسا دي ليوني في ميلانو تصبح الرائدة.' },
      { locale: 'it', title: 'Nascita del Movimento Ultras', description: 'I primi gruppi Ultras organizzati emergono negli stadi italiani, stabilendo le basi della cultura del tifo moderno. Fossa dei Leoni a Milano diventa il pioniere.' },
      { locale: 'es', title: 'Nacimiento del Movimiento Ultra', description: 'Los primeros grupos Ultra organizados emergen en los estadios italianos, estableciendo los fundamentos de la cultura del aficionado moderno.' },
      { locale: 'pt-br', title: 'Nascimento do Movimento Ultras', description: 'Os primeiros grupos Ultras organizados surgem nos estádios italianos, estabelecendo as bases da cultura de torcida moderna.' }
    ],
    location: 'Milan, Italy',
    countryCode: 'IT',
    group: 'Fossa dei Leoni',
    groupSlug: 'fossa-dei-leoni',
    image: '/images/timeline/1968-milan.webp',
    isHighlight: true
  },
  {
    year: 1969,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'Curva Sud Milano Founded', description: 'AC Milan supporters form Curva Sud, one of the most influential Ultra groups in history. Their organization and choreographies set the standard for decades to come.' },
      { locale: 'fr', title: 'Fondation de la Curva Sud Milano', description: 'Les supporters de l\'AC Milan forment la Curva Sud, l\'un des groupes Ultras les plus influents de l\'histoire.' },
      { locale: 'ar', title: 'تأسيس كورفا سود ميلانو', description: 'مشجعو إيه سي ميلان يشكلون كورفا سود، واحدة من أكثر مجموعات الألتراس تأثيراً في التاريخ.' },
      { locale: 'it', title: 'Fondazione della Curva Sud Milano', description: 'I tifosi del Milan fondano la Curva Sud, uno dei gruppi Ultras più influenti della storia.' },
      { locale: 'es', title: 'Fundación de Curva Sud Milano', description: 'Los aficionados del AC Milan forman Curva Sud, uno de los grupos Ultra más influyentes de la historia.' },
      { locale: 'pt-br', title: 'Fundação da Curva Sud Milano', description: 'Os torcedores do AC Milan formam a Curva Sud, um dos grupos Ultras mais influentes da história.' }
    ],
    location: 'Milan, Italy',
    countryCode: 'IT',
    group: 'Curva Sud Milano',
    groupSlug: 'curva-sud-milano',
    image: '/images/timeline/1969-curva.webp',
    isHighlight: false
  },
  {
    year: 1973,
    region: 'southAmerica',
    translations: [
      { locale: 'en', title: 'Barra Bravas Take Shape', description: 'Argentine supporter groups evolve into organized Barra Bravas, developing their unique style of passion. La Bombonera becomes a temple of supporter culture in South America.' },
      { locale: 'fr', title: 'Émergence des Barra Bravas', description: 'Les groupes de supporters argentins évoluent en Barra Bravas organisés, développant leur style unique de passion.' },
      { locale: 'ar', title: 'تشكل البارا برافا', description: 'تتطور مجموعات المشجعين الأرجنتينية إلى بارا برافا منظمة، مع تطوير أسلوبها الفريد من الشغف.' },
      { locale: 'it', title: 'Le Barra Bravas Prendono Forma', description: 'I gruppi di tifosi argentini evolvono in Barra Bravas organizzate, sviluppando il loro stile unico di passione.' },
      { locale: 'es', title: 'Las Barras Bravas Toman Forma', description: 'Los grupos de hinchas argentinos evolucionan en Barras Bravas organizadas, desarrollando su estilo único de pasión.' },
      { locale: 'pt-br', title: 'As Barras Bravas Tomam Forma', description: 'Os grupos de torcedores argentinos evoluem para Barras Bravas organizadas, desenvolvendo seu estilo único de paixão.' }
    ],
    location: 'Buenos Aires, Argentina',
    countryCode: 'AR',
    group: 'La 12',
    groupSlug: 'la-12',
    image: '/images/timeline/1973-argentina.webp',
    isHighlight: true
  },
  {
    year: 1987,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'Winners Marseille Founded', description: 'The Winners become the first major Ultra group in France, bringing Italian-style supporter culture to the Vélodrome. Their influence shapes French Ultra culture.' },
      { locale: 'fr', title: 'Création des Winners Marseille', description: 'Les Winners deviennent le premier grand groupe Ultra en France, apportant la culture supporterisme à l\'italienne au Vélodrome.' },
      { locale: 'ar', title: 'تأسيس وينرز مارسيليا', description: 'وينرز تصبح أول مجموعة ألتراس رئيسية في فرنسا.' },
      { locale: 'it', title: 'Fondazione dei Winners Marsiglia', description: 'I Winners diventano il primo grande gruppo Ultra in Francia, portando la cultura del tifo all\'italiana al Vélodrome.' },
      { locale: 'es', title: 'Fundación de Winners Marsella', description: 'Los Winners se convierten en el primer gran grupo Ultra en Francia.' },
      { locale: 'pt-br', title: 'Fundação do Winners Marseille', description: 'Os Winners se tornam o primeiro grande grupo Ultras na França.' }
    ],
    location: 'Marseille, France',
    countryCode: 'FR',
    group: 'Winners Marseille',
    groupSlug: 'winners-marseille',
    image: '/images/timeline/1987-marseille.webp',
    isHighlight: false
  },
  {
    year: 1990,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'Yellow Wall Phenomenon', description: 'Borussia Dortmund\'s Südtribüne becomes the largest standing terrace in European football with 25,000 passionate fans. The Yellow Wall becomes a global icon of supporter culture.' },
      { locale: 'fr', title: 'Phénomène du Mur Jaune', description: 'La Südtribüne de Dortmund devient la plus grande tribune debout d\'Europe avec 25,000 fans passionnés.' },
      { locale: 'ar', title: 'ظاهرة الجدار الأصفر', description: 'تصبح سودتريبون دورتموند أكبر مدرج واقف في كرة القدم الأوروبية مع 25,000 مشجع.' },
      { locale: 'it', title: 'Fenomeno Yellow Wall', description: 'La Südtribüne del Borussia Dortmund diventa la più grande curva d\'Europa con 25.000 tifosi.' },
      { locale: 'es', title: 'Fenómeno del Muro Amarillo', description: 'La Südtribüne del Borussia Dortmund se convierte en la grada de pie más grande de Europa.' },
      { locale: 'pt-br', title: 'Fenômeno Yellow Wall', description: 'A Südtribüne do Borussia Dortmund se torna a maior arquibancada em pé da Europa.' }
    ],
    location: 'Dortmund, Germany',
    countryCode: 'DE',
    group: 'Yellow Wall',
    groupSlug: 'yellow-wall',
    image: '/images/timeline/1990-dortmund.webp',
    isHighlight: true
  },
  {
    year: 2001,
    region: 'europe',
    translations: [
      { locale: 'en', title: 'UltrAslan Emerges', description: 'Galatasaray fans create UltrAslan, bringing Ultra culture to Turkey. The group quickly becomes known for their passionate support and impressive choreographies at Türk Telekom Stadium.' },
      { locale: 'fr', title: 'Émergence d\'UltrAslan', description: 'Les fans de Galatasaray créent UltrAslan, apportant la culture Ultra en Turquie.' },
      { locale: 'ar', title: 'ظهور ألتراسلان', description: 'مشجعو غلطة سراي يؤسسون ألتراسلان، جالبين ثقافة الألتراس إلى تركيا.' },
      { locale: 'it', title: 'Nasce UltrAslan', description: 'I tifosi del Galatasaray creano UltrAslan, portando la cultura Ultra in Turchia.' },
      { locale: 'es', title: 'Surge UltrAslan', description: 'Los aficionados del Galatasaray crean UltrAslan, trayendo la cultura Ultra a Turquía.' },
      { locale: 'pt-br', title: 'Surge o UltrAslan', description: 'Os torcedores do Galatasaray criam o UltrAslan, trazendo a cultura Ultras para a Turquia.' }
    ],
    location: 'Istanbul, Turkey',
    countryCode: 'TR',
    group: 'UltrAslan',
    groupSlug: 'ultraslan',
    image: '/images/timeline/2001-istanbul.webp',
    isHighlight: false
  },
  {
    year: 2005,
    region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'GREEN BOYS 2005 - Africa\'s First Ultras', description: 'GREEN BOYS 2005 becomes the first Ultra group in Morocco and Africa, pioneering the North African Ultra movement for Raja Casablanca. They revolutionize supporter culture across the continent.' },
      { locale: 'fr', title: 'GREEN BOYS 2005 - Premiers Ultras d\'Afrique', description: 'GREEN BOYS 2005 devient le premier groupe Ultra au Maroc et en Afrique, pionnier du mouvement Ultra nord-africain pour Raja Casablanca. Ils révolutionnent la culture supporterisme sur le continent.' },
      { locale: 'ar', title: 'جرين بويز 2005 - أول ألتراس في أفريقيا', description: 'جرين بويز 2005 تصبح أول مجموعة ألتراس في المغرب وأفريقيا، رائدة حركة الألتراس في شمال أفريقيا لنادي الرجاء البيضاوي. أحدثوا ثورة في ثقافة التشجيع عبر القارة.' },
      { locale: 'it', title: 'GREEN BOYS 2005 - I Primi Ultras d\'Africa', description: 'I GREEN BOYS 2005 diventano il primo gruppo Ultra in Marocco e Africa, pionieri del movimento Ultra nordafricano per il Raja Casablanca.' },
      { locale: 'es', title: 'GREEN BOYS 2005 - Los Primeros Ultras de África', description: 'GREEN BOYS 2005 se convierte en el primer grupo Ultra en Marruecos y África, pionero del movimiento Ultra norteafricano para Raja Casablanca.' },
      { locale: 'pt-br', title: 'GREEN BOYS 2005 - Os Primeiros Ultras da África', description: 'O GREEN BOYS 2005 se torna o primeiro grupo Ultras no Marrocos e na África, pioneiro do movimento Ultras norte-africano para o Raja Casablanca.' }
    ],
    location: 'Casablanca, Morocco',
    countryCode: 'MA',
    group: 'GREEN BOYS 2005',
    groupSlug: 'green-boys-2005',
    image: '/images/timeline/2005-greenboys.webp',
    isHighlight: true
  },
  {
    year: 2007,
    region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'Egyptian Ultras Emerge', description: 'Ultras Ahlawy and White Knights are founded in Egypt, inspired by North African pioneers. They create some of the most passionate atmospheres in the Middle East.' },
      { locale: 'fr', title: 'Émergence des Ultras Égyptiens', description: 'Ultras Ahlawy et White Knights sont fondés en Égypte, inspirés par les pionniers nord-africains.' },
      { locale: 'ar', title: 'ظهور الألتراس المصري', description: 'تأسيس ألتراس أهلاوي ووايت نايتس في مصر، مستوحاة من رواد شمال أفريقيا.' },
      { locale: 'it', title: 'Nascono gli Ultras Egiziani', description: 'Ultras Ahlawy e White Knights vengono fondati in Egitto, ispirati dai pionieri nordafricani.' },
      { locale: 'es', title: 'Emergen los Ultras Egipcios', description: 'Ultras Ahlawy y White Knights se fundan en Egipto, inspirados por los pioneros norteafricanos.' },
      { locale: 'pt-br', title: 'Surgem os Ultras Egípcios', description: 'Ultras Ahlawy e White Knights são fundados no Egito, inspirados pelos pioneiros norte-africanos.' }
    ],
    location: 'Cairo, Egypt',
    countryCode: 'EG',
    group: 'Ultras Ahlawy',
    groupSlug: 'ultras-ahlawy',
    image: '/images/timeline/2007-egypt.webp',
    isHighlight: true
  },
  {
    year: 2010,
    region: 'asia',
    translations: [
      { locale: 'en', title: 'Ultra Culture Reaches Asia', description: 'Indonesian supporters adopt Ultra traditions, creating vibrant atmospheres in Southeast Asian stadiums. The Jakmania become a model for Asian supporter groups.' },
      { locale: 'fr', title: 'La Culture Ultra Atteint l\'Asie', description: 'Les supporters indonésiens adoptent les traditions Ultra, créant des atmosphères vibrantes dans les stades d\'Asie du Sud-Est.' },
      { locale: 'ar', title: 'ثقافة الألتراس تصل آسيا', description: 'المشجعون الإندونيسيون يتبنون تقاليد الألتراس، خالقين أجواء نابضة بالحياة في ملاعب جنوب شرق آسيا.' },
      { locale: 'it', title: 'La Cultura Ultra Raggiunge l\'Asia', description: 'I tifosi indonesiani adottano le tradizioni Ultra, creando atmosfere vibranti negli stadi del Sud-Est asiatico.' },
      { locale: 'es', title: 'La Cultura Ultra Llega a Asia', description: 'Los aficionados indonesios adoptan las tradiciones Ultra, creando atmósferas vibrantes en los estadios del sudeste asiático.' },
      { locale: 'pt-br', title: 'A Cultura Ultras Chega à Ásia', description: 'Os torcedores indonésios adotam as tradições Ultras, criando atmosferas vibrantes nos estádios do Sudeste Asiático.' }
    ],
    location: 'Jakarta, Indonesia',
    countryCode: 'ID',
    group: 'The Jakmania',
    groupSlug: 'the-jakmania',
    image: '/images/timeline/2010-indonesia.webp',
    isHighlight: false
  },
  {
    year: 2019,
    region: 'northAfrica',
    translations: [
      { locale: 'en', title: 'Raja Casablanca CAF Champions', description: 'Raja Casablanca wins CAF titles with GREEN BOYS 2005 creating spectacular tifos that captivate the world. African Ultra culture reaches new heights.' },
      { locale: 'fr', title: 'Raja Casablanca Champion CAF', description: 'Raja Casablanca remporte des titres CAF avec GREEN BOYS 2005 créant des tifos spectaculaires qui captivent le monde.' },
      { locale: 'ar', title: 'الرجاء البيضاوي بطل الكاف', description: 'الرجاء البيضاوي يفوز بألقاب الكاف مع جرين بويز 2005 الذين يصنعون تيفوهات مذهلة تأسر العالم.' },
      { locale: 'it', title: 'Raja Casablanca Campione CAF', description: 'Il Raja Casablanca vince titoli CAF con i GREEN BOYS 2005 che creano tifo spettacolari.' },
      { locale: 'es', title: 'Raja Casablanca Campeón CAF', description: 'Raja Casablanca gana títulos CAF con GREEN BOYS 2005 creando tifos espectaculares.' },
      { locale: 'pt-br', title: 'Raja Casablanca Campeão da CAF', description: 'Raja Casablanca conquista títulos da CAF com o GREEN BOYS 2005 criando tifos espetaculares.' }
    ],
    location: 'Casablanca, Morocco',
    countryCode: 'MA',
    group: 'GREEN BOYS 2005',
    groupSlug: 'green-boys-2005',
    image: '/images/timeline/2019-raja.webp',
    isHighlight: true
  }
];

// ============================================
// TIFOS DATA (avec traductions)
// ============================================
export const tifosData = [
  {
    translations: [
      { locale: 'en', title: 'African Glory', description: 'A massive coordinated display covering the entire North Stand, celebrating African football heritage and Raja\'s continental glory. This tifo required 3 months of preparation and involved over 500 volunteers.' },
      { locale: 'fr', title: 'Gloire Africaine', description: 'Un affichage coordonné massif couvrant toute la tribune Nord, célébrant l\'héritage du football africain et la gloire continentale du Raja. Ce tifo a nécessité 3 mois de préparation et impliqué plus de 500 bénévoles.' },
      { locale: 'ar', title: 'المجد الأفريقي', description: 'عرض منسق ضخم يغطي المدرج الشمالي بأكمله، احتفالاً بإرث كرة القدم الأفريقية ومجد الرجاء القاري. استلزم هذا التيفو 3 أشهر من التحضير وشارك فيه أكثر من 500 متطوع.' },
      { locale: 'it', title: 'Gloria Africana', description: 'Una coreografia coordinata massiva che copre l\'intera Curva Nord, celebrando l\'eredità del calcio africano e la gloria continentale del Raja.' },
      { locale: 'es', title: 'Gloria Africana', description: 'Una exhibición coordinada masiva que cubre toda la grada Norte, celebrando el patrimonio del fútbol africano y la gloria continental del Raja.' },
      { locale: 'pt-br', title: 'Glória Africana', description: 'Uma exibição coordenada massiva cobrindo toda a arquibancada Norte, celebrando o patrimônio do futebol africano e a glória continental do Raja.' }
    ],
    group: 'GREEN BOYS 2005',
    groupSlug: 'green-boys-2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    date: new Date('2023-05-15'),
    match: 'Raja vs Al Ahly - CAF Champions League',
    stadium: 'Stade Mohammed V',
    image: '/images/tifos/raja-african-glory.webp',
    views: 125000,
    likes: 45000,
    isFeatured: true,
    isSpotlight: true,
    dimensions: { width: 80, height: 40 },
    materials: ['Fabric', 'Cards', 'Smoke', 'Flags'],
    participantsCount: 15000
  },
  {
    translations: [
      { locale: 'en', title: 'Champions League Night', description: 'The Curva Sud illuminated San Siro with a breathtaking display of red and black, featuring the iconic Devil symbol and the words "Mai Soli" (Never Alone).' },
      { locale: 'fr', title: 'Nuit de Ligue des Champions', description: 'La Curva Sud a illuminé San Siro avec un affichage époustouflant de rouge et noir, avec le symbole emblématique du Diable et les mots "Mai Soli" (Jamais Seuls).' },
      { locale: 'ar', title: 'ليلة دوري أبطال أوروبا', description: 'كورفا سود أضاءت سان سيرو بعرض مذهل من الأحمر والأسود، يضم رمز الشيطان الأيقوني.' },
      { locale: 'it', title: 'Notte di Champions League', description: 'La Curva Sud ha illuminato San Siro con uno spettacolo mozzafiato di rosso e nero, con l\'iconico simbolo del Diavolo e le parole "Mai Soli".' },
      { locale: 'es', title: 'Noche de Champions League', description: 'La Curva Sud iluminó San Siro con una exhibición impresionante de rojo y negro.' },
      { locale: 'pt-br', title: 'Noite de Champions League', description: 'A Curva Sud iluminou o San Siro com uma exibição impressionante de vermelho e preto.' }
    ],
    group: 'Curva Sud Milano',
    groupSlug: 'curva-sud-milano',
    club: 'AC Milan',
    country: 'Italy',
    countryCode: 'IT',
    date: new Date('2023-04-11'),
    match: 'AC Milan vs Napoli',
    stadium: 'San Siro',
    image: '/images/tifos/milan-cl-night.webp',
    views: 189000,
    likes: 78000,
    isFeatured: true,
    isSpotlight: false,
    dimensions: { width: 100, height: 50 },
    materials: ['Cards', 'Banner', 'Smoke'],
    participantsCount: 20000
  },
  {
    translations: [
      { locale: 'en', title: 'Yellow Wave', description: 'The famous Südtribüne creates a stunning yellow wave with 25,000 synchronized fans, demonstrating the power and unity of the Yellow Wall.' },
      { locale: 'fr', title: 'Vague Jaune', description: 'La célèbre Südtribüne crée une vague jaune époustouflante avec 25,000 fans synchronisés, démontrant la puissance et l\'unité du Mur Jaune.' },
      { locale: 'ar', title: 'الموجة الصفراء', description: 'سودتريبون الشهيرة تخلق موجة صفراء مذهلة مع 25,000 مشجع متزامن.' },
      { locale: 'it', title: 'Onda Gialla', description: 'La famosa Südtribüne crea una straordinaria onda gialla con 25.000 tifosi sincronizzati.' },
      { locale: 'es', title: 'Ola Amarilla', description: 'La famosa Südtribüne crea una impresionante ola amarilla con 25.000 aficionados sincronizados.' },
      { locale: 'pt-br', title: 'Onda Amarela', description: 'A famosa Südtribüne cria uma impressionante onda amarela com 25.000 torcedores sincronizados.' }
    ],
    group: 'Yellow Wall',
    groupSlug: 'yellow-wall',
    club: 'Borussia Dortmund',
    country: 'Germany',
    countryCode: 'DE',
    date: new Date('2023-03-18'),
    match: 'BVB vs Bayern Munich',
    stadium: 'Signal Iduna Park',
    image: '/images/tifos/bvb-yellow-wave.webp',
    views: 256000,
    likes: 156000,
    isFeatured: true,
    isSpotlight: false,
    dimensions: { width: 120, height: 60 },
    materials: ['Cards', 'Flags', 'Banner'],
    participantsCount: 25000
  },
  {
    translations: [
      { locale: 'en', title: 'La Bombonera Explodes', description: 'La 12 transforms La Bombonera into a sea of blue and yellow for the Superclásico, with pyrotechnics and a massive banner reading "Boca es mi vida".' },
      { locale: 'fr', title: 'La Bombonera Explose', description: 'La 12 transforme La Bombonera en une mer de bleu et jaune pour le Superclásico, avec des fumigènes et une bannière massive.' },
      { locale: 'ar', title: 'لا بومبونيرا تنفجر', description: 'لا 12 تحول لا بومبونيرا إلى بحر من الأزرق والأصفر للسوبركلاسيكو.' },
      { locale: 'it', title: 'La Bombonera Esplode', description: 'La 12 trasforma La Bombonera in un mare di blu e giallo per il Superclásico.' },
      { locale: 'es', title: 'La Bombonera Explota', description: 'La 12 transforma La Bombonera en un mar de azul y amarillo para el Superclásico, con pirotecnia y un banner masivo que dice "Boca es mi vida".' },
      { locale: 'pt-br', title: 'La Bombonera Explode', description: 'La 12 transforma La Bombonera em um mar de azul e amarelo para o Superclásico.' }
    ],
    group: 'La 12',
    groupSlug: 'la-12',
    club: 'Boca Juniors',
    country: 'Argentina',
    countryCode: 'AR',
    date: new Date('2023-09-24'),
    match: 'Boca Juniors vs River Plate',
    stadium: 'La Bombonera',
    image: '/images/tifos/boca-superclasico.webp',
    views: 234000,
    likes: 134000,
    isFeatured: true,
    isSpotlight: false,
    dimensions: { width: 70, height: 35 },
    materials: ['Cards', 'Flags', 'Pyrotechnics', 'Banner'],
    participantsCount: 40000
  },
  {
    translations: [
      { locale: 'en', title: 'Derby della Madonnina', description: 'Inter fans create a spectacular nerazzurri display for the Milan Derby, featuring the Biscione and a message of city pride.' },
      { locale: 'fr', title: 'Derby della Madonnina', description: 'Les fans de l\'Inter créent un affichage nerazzurri spectaculaire pour le Derby de Milan.' },
      { locale: 'ar', title: 'ديربي ديلا مادونينا', description: 'مشجعو الإنتر يخلقون عرضاً نيراتزوري مذهلاً لديربي ميلانو.' },
      { locale: 'it', title: 'Derby della Madonnina', description: 'I tifosi dell\'Inter creano uno spettacolare display nerazzurro per il Derby di Milano, con il Biscione e un messaggio di orgoglio cittadino.' },
      { locale: 'es', title: 'Derby della Madonnina', description: 'Los aficionados del Inter crean una espectacular exhibición nerazzurri para el Derby de Milán.' },
      { locale: 'pt-br', title: 'Derby della Madonnina', description: 'Os torcedores da Inter criam uma exibição nerazzurri espetacular para o Derby de Milão.' }
    ],
    group: 'Curva Nord Inter',
    groupSlug: 'curva-nord-inter',
    club: 'Inter Milan',
    country: 'Italy',
    countryCode: 'IT',
    date: new Date('2023-09-16'),
    match: 'Inter vs AC Milan',
    stadium: 'San Siro',
    image: '/images/tifos/inter-derby.webp',
    views: 178000,
    likes: 89000,
    isFeatured: true,
    isSpotlight: false,
    dimensions: { width: 100, height: 45 },
    materials: ['Cards', 'Flags', 'Smoke'],
    participantsCount: 18000
  },
  {
    translations: [
      { locale: 'en', title: 'Cairo Derby', description: 'Ultras Ahlawy creates a massive red wall with the Eagle symbol, demonstrating the passion of Egyptian supporters in the Cairo Derby.' },
      { locale: 'fr', title: 'Derby du Caire', description: 'Ultras Ahlawy crée un mur rouge massif avec le symbole de l\'Aigle, démontrant la passion des supporters égyptiens.' },
      { locale: 'ar', title: 'ديربي القاهرة', description: 'ألتراس أهلاوي يخلق جداراً أحمر ضخماً برمز النسر، يُظهر شغف المشجعين المصريين في ديربي القاهرة.' },
      { locale: 'it', title: 'Derby del Cairo', description: 'Gli Ultras Ahlawy creano un enorme muro rosso con il simbolo dell\'Aquila.' },
      { locale: 'es', title: 'Derby de El Cairo', description: 'Ultras Ahlawy crea un enorme muro rojo con el símbolo del Águila.' },
      { locale: 'pt-br', title: 'Derby do Cairo', description: 'Ultras Ahlawy cria um enorme muro vermelho com o símbolo da Águia.' }
    ],
    group: 'Ultras Ahlawy',
    groupSlug: 'ultras-ahlawy',
    club: 'Al Ahly',
    country: 'Egypt',
    countryCode: 'EG',
    date: new Date('2023-05-21'),
    match: 'Al Ahly vs Zamalek',
    stadium: 'Cairo International Stadium',
    image: '/images/tifos/ahly-derby.webp',
    views: 145000,
    likes: 67000,
    isFeatured: true,
    isSpotlight: false,
    dimensions: { width: 90, height: 40 },
    materials: ['Cards', 'Flags', 'Smoke'],
    participantsCount: 30000
  },
  {
    translations: [
      { locale: 'en', title: 'Grazie Roma', description: 'The Curva Sud of Roma creates an emotional display dedicated to Francesco Totti\'s legacy, covering the entire stand with the number 10.' },
      { locale: 'fr', title: 'Grazie Roma', description: 'La Curva Sud de Roma crée un affichage émouvant dédié à l\'héritage de Francesco Totti.' },
      { locale: 'ar', title: 'شكراً روما', description: 'كورفا سود روما تخلق عرضاً مؤثراً مكرساً لإرث فرانشيسكو توتي.' },
      { locale: 'it', title: 'Grazie Roma', description: 'La Curva Sud della Roma crea un display emozionante dedicato all\'eredità di Francesco Totti, coprendo l\'intera curva con il numero 10.' },
      { locale: 'es', title: 'Grazie Roma', description: 'La Curva Sud de Roma crea una exhibición emotiva dedicada al legado de Francesco Totti.' },
      { locale: 'pt-br', title: 'Grazie Roma', description: 'A Curva Sud da Roma cria uma exibição emocionante dedicada ao legado de Francesco Totti.' }
    ],
    group: 'Curva Sud Roma',
    groupSlug: 'curva-sud-roma',
    club: 'AS Roma',
    country: 'Italy',
    countryCode: 'IT',
    date: new Date('2023-01-22'),
    match: 'AS Roma vs Fiorentina',
    stadium: 'Stadio Olimpico',
    image: '/images/tifos/roma-grazie.webp',
    views: 198000,
    likes: 112000,
    isFeatured: false,
    isSpotlight: false,
    dimensions: { width: 110, height: 55 },
    materials: ['Cards', 'Banner', 'Flags'],
    participantsCount: 25000
  },
  {
    translations: [
      { locale: 'en', title: 'Welcome to Hell', description: 'UltrAslan creates an infernal atmosphere at Türk Telekom Stadium, with flames, smoke, and a massive banner welcoming visiting teams to "Hell".' },
      { locale: 'fr', title: 'Bienvenue en Enfer', description: 'UltrAslan crée une atmosphère infernale au Türk Telekom Stadium, avec des flammes, de la fumée et une bannière massive.' },
      { locale: 'ar', title: 'مرحباً في الجحيم', description: 'ألتراسلان يخلق جواً جهنمياً في ملعب تورك تيليكوم.' },
      { locale: 'it', title: 'Benvenuti all\'Inferno', description: 'UltrAslan crea un\'atmosfera infernale al Türk Telekom Stadium.' },
      { locale: 'es', title: 'Bienvenidos al Infierno', description: 'UltrAslan crea una atmósfera infernal en el Türk Telekom Stadium.' },
      { locale: 'pt-br', title: 'Bem-vindos ao Inferno', description: 'UltrAslan cria uma atmosfera infernal no Türk Telekom Stadium.' }
    ],
    group: 'UltrAslan',
    groupSlug: 'ultraslan',
    club: 'Galatasaray',
    country: 'Turkey',
    countryCode: 'TR',
    date: new Date('2023-11-07'),
    match: 'Galatasaray vs Manchester United',
    stadium: 'Türk Telekom Stadium',
    image: '/images/tifos/gala-hell.webp',
    views: 212000,
    likes: 98000,
    isFeatured: true,
    isSpotlight: false,
    dimensions: { width: 85, height: 40 },
    materials: ['Pyrotechnics', 'Flags', 'Banner', 'Smoke'],
    participantsCount: 30000
  }
];

// ============================================
// CHANTS DATA (avec traductions)
// ============================================
export const chantsData = [
  {
    translations: [
      { locale: 'en', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nMa n\'khali makan\nBla rasmi khdra\nDima Raja, pour toujours vert', origin: 'Created in 2006, this chant became the anthem of GREEN BOYS 2005. It expresses unconditional love for Raja Casablanca and the green colors. Sung before every match, it unites all supporters in their passion.' },
      { locale: 'fr', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nMa n\'khali makan\nBla rasmi khdra\nDima Raja, pour toujours vert', origin: 'Créé en 2006, ce chant est devenu l\'hymne des GREEN BOYS 2005. Il exprime l\'amour inconditionnel pour Raja Casablanca et les couleurs vertes. Chanté avant chaque match, il unit tous les supporters dans leur passion.' },
      { locale: 'ar', title: 'ديما رجاء', lyrics: 'ديما رجاء، ديما رجاء\nفي قلبي أنت، في قلبي أنت\nما نخلي مكان\nبلا راسمي خضرا\nديما رجاء، للأبد أخضر', origin: 'أُنشئ في 2006، أصبح هذا النشيد شعار جرين بويز 2005. يعبر عن الحب غير المشروط لنادي الرجاء البيضاوي واللون الأخضر. يُغنى قبل كل مباراة، يوحد جميع المشجعين في شغفهم.' },
      { locale: 'it', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nMa n\'khali makan\nBla rasmi khdra\nDima Raja, per sempre verde', origin: 'Creato nel 2006, questo canto è diventato l\'inno dei GREEN BOYS 2005. Esprime l\'amore incondizionato per il Raja Casablanca.' },
      { locale: 'es', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nMa n\'khali makan\nBla rasmi khdra\nDima Raja, por siempre verde', origin: 'Creado en 2006, este canto se convirtió en el himno de GREEN BOYS 2005. Expresa el amor incondicional por Raja Casablanca.' },
      { locale: 'pt-br', title: 'Dima Raja', lyrics: 'Dima Raja, Dima Raja\nFi galbi anta, fi galbi anta\nMa n\'khali makan\nBla rasmi khdra\nDima Raja, para sempre verde', origin: 'Criado em 2006, este canto se tornou o hino do GREEN BOYS 2005. Expressa o amor incondicional pelo Raja Casablanca.' }
    ],
    group: 'GREEN BOYS 2005',
    groupSlug: 'green-boys-2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    duration: '3:45',
    audio: '/audio/dima-raja.mp3',
    views: 89000,
    likes: 45000,
    isFeatured: true,
    yearCreated: 2006,
    originalMelody: 'Original composition by GREEN BOYS 2005'
  },
  {
    translations: [
      { locale: 'en', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high\nAnd don\'t be afraid of the dark\nAt the end of the storm\nThere\'s a golden sky\nAnd the sweet silver song of a lark\nWalk on through the wind\nWalk on through the rain\nThough your dreams be tossed and blown\nWalk on, walk on with hope in your heart\nAnd you\'ll never walk alone\nYou\'ll never walk alone', origin: 'Adopted from the 1945 Rodgers and Hammerstein musical "Carousel", this song became Liverpool\'s anthem in the 1960s. It represents hope, solidarity, and the unbreakable bond between fans and their club.' },
      { locale: 'fr', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high\nAnd don\'t be afraid of the dark...', origin: 'Adopté du musical "Carousel" de 1945, ce chant est devenu l\'hymne de Liverpool dans les années 60. Il représente l\'espoir, la solidarité et le lien incassable entre les fans et leur club.' },
      { locale: 'ar', title: 'لن تمشي وحيداً أبداً', lyrics: 'عندما تمشي في عاصفة\nارفع رأسك عالياً\nولا تخف من الظلام...', origin: 'مقتبس من مسرحية "كاروسيل" الموسيقية عام 1945، أصبح هذا النشيد شعار ليفربول في الستينيات.' },
      { locale: 'it', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high...', origin: 'Adottato dal musical "Carousel" del 1945, questa canzone è diventata l\'inno del Liverpool negli anni \'60.' },
      { locale: 'es', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high...', origin: 'Adoptado del musical "Carousel" de 1945, esta canción se convirtió en el himno del Liverpool en los años 60.' },
      { locale: 'pt-br', title: 'You\'ll Never Walk Alone', lyrics: 'When you walk through a storm\nHold your head up high...', origin: 'Adotado do musical "Carousel" de 1945, esta canção se tornou o hino do Liverpool nos anos 60.' }
    ],
    group: 'The Kop',
    groupSlug: 'the-kop',
    club: 'Liverpool FC',
    country: 'England',
    countryCode: 'GB',
    duration: '2:58',
    audio: '/audio/ynwa.mp3',
    views: 456000,
    likes: 234000,
    isFeatured: true,
    yearCreated: 1963,
    originalMelody: 'Rodgers and Hammerstein - Carousel (1945)'
  },
  {
    translations: [
      { locale: 'en', title: 'Grazie Roma', lyrics: 'Grazie Roma, che ci fai sognare\nGrazie Roma, che ci fai esultare\nGrazie Roma, grazie Roma, grazie!\nChe ci fai piangere\nChe ci fai gioire\nGrazie Roma, Grazie!', origin: 'Written by Antonello Venditti in 1983, this song captures the emotional relationship between the city of Rome and its football club. It has become the most beloved anthem of AS Roma supporters.' },
      { locale: 'fr', title: 'Grazie Roma', lyrics: 'Grazie Roma, che ci fai sognare\nGrazie Roma, che ci fai esultare...', origin: 'Écrit par Antonello Venditti en 1983, ce chant capture la relation émotionnelle entre la ville de Rome et son club de football.' },
      { locale: 'ar', title: 'شكراً روما', lyrics: 'شكراً روما، لأنك تجعلنا نحلم\nشكراً روما، لأنك تجعلنا نفرح...', origin: 'كتبها أنطونيلو فينديتي في 1983، هذه الأغنية تلتقط العلاقة العاطفية بين مدينة روما ونادي كرة القدم.' },
      { locale: 'it', title: 'Grazie Roma', lyrics: 'Grazie Roma, che ci fai sognare\nGrazie Roma, che ci fai esultare\nGrazie Roma, grazie Roma, grazie!\nChe ci fai piangere\nChe ci fai gioire\nGrazie Roma, Grazie!', origin: 'Scritta da Antonello Venditti nel 1983, questa canzone cattura il rapporto emotivo tra la città di Roma e la sua squadra di calcio. È diventata l\'inno più amato dei tifosi della Roma.' },
      { locale: 'es', title: 'Grazie Roma', lyrics: 'Grazie Roma, che ci fai sognare...', origin: 'Escrita por Antonello Venditti en 1983, esta canción captura la relación emocional entre la ciudad de Roma y su club de fútbol.' },
      { locale: 'pt-br', title: 'Grazie Roma', lyrics: 'Grazie Roma, che ci fai sognare...', origin: 'Escrita por Antonello Venditti em 1983, esta canção captura a relação emocional entre a cidade de Roma e seu clube de futebol.' }
    ],
    group: 'Curva Sud Roma',
    groupSlug: 'curva-sud-roma',
    club: 'AS Roma',
    country: 'Italy',
    countryCode: 'IT',
    duration: '4:12',
    audio: '/audio/grazie-roma.mp3',
    views: 189000,
    likes: 89000,
    isFeatured: true,
    yearCreated: 1983,
    originalMelody: 'Antonello Venditti'
  },
  {
    translations: [
      { locale: 'en', title: 'Dale Boca', lyrics: 'Dale Bo, Dale Bo, Dale Bo\nDale Boca, Dale Bo\nEsta es la hinchada\nQue deja la vida\nPor los colores\nAzul y oro', origin: 'A classic Barra Brava chant that echoes through La Bombonera. It represents the passion and sacrifice of Boca fans who give everything for their team.' },
      { locale: 'fr', title: 'Dale Boca', lyrics: 'Dale Bo, Dale Bo, Dale Bo\nDale Boca, Dale Bo...', origin: 'Un chant classique de Barra Brava qui résonne à La Bombonera. Il représente la passion et le sacrifice des fans de Boca.' },
      { locale: 'ar', title: 'دالي بوكا', lyrics: 'دالي بو، دالي بو، دالي بو\nدالي بوكا، دالي بو...', origin: 'نشيد كلاسيكي من بارا برافا يتردد في لا بومبونيرا. يمثل شغف وتضحية مشجعي بوكا.' },
      { locale: 'it', title: 'Dale Boca', lyrics: 'Dale Bo, Dale Bo, Dale Bo...', origin: 'Un classico canto della Barra Brava che risuona alla Bombonera.' },
      { locale: 'es', title: 'Dale Boca', lyrics: 'Dale Bo, Dale Bo, Dale Bo\nDale Boca, Dale Bo\nEsta es la hinchada\nQue deja la vida\nPor los colores\nAzul y oro', origin: 'Un clásico canto de Barra Brava que resuena en La Bombonera. Representa la pasión y el sacrificio de los hinchas de Boca que lo dan todo por su equipo.' },
      { locale: 'pt-br', title: 'Dale Boca', lyrics: 'Dale Bo, Dale Bo, Dale Bo...', origin: 'Um clássico canto da Barra Brava que ecoa pela La Bombonera.' }
    ],
    group: 'La 12',
    groupSlug: 'la-12',
    club: 'Boca Juniors',
    country: 'Argentina',
    countryCode: 'AR',
    duration: '2:30',
    audio: '/audio/dale-boca.mp3',
    views: 234000,
    likes: 156000,
    isFeatured: true,
    yearCreated: 1985,
    originalMelody: 'Traditional Argentine football melody'
  },
  {
    translations: [
      { locale: 'en', title: 'Hala Madrid', lyrics: 'Hala Madrid y nada más\nY nada más\nHala Madrid\nSomos la gente\nQue sigue y sigue\nHasta el final', origin: 'The official anthem adopted by Real Madrid supporters worldwide. It represents the fighting spirit and global reach of the club.' },
      { locale: 'fr', title: 'Hala Madrid', lyrics: 'Hala Madrid y nada más...', origin: 'L\'hymne officiel adopté par les supporters du Real Madrid dans le monde entier.' },
      { locale: 'ar', title: 'هلا مدريد', lyrics: 'هلا مدريد ولا شيء آخر\nولا شيء آخر\nهلا مدريد...', origin: 'النشيد الرسمي المعتمد من مشجعي ريال مدريد في جميع أنحاء العالم.' },
      { locale: 'it', title: 'Hala Madrid', lyrics: 'Hala Madrid y nada más...', origin: 'L\'inno ufficiale adottato dai tifosi del Real Madrid in tutto il mondo.' },
      { locale: 'es', title: 'Hala Madrid', lyrics: 'Hala Madrid y nada más\nY nada más\nHala Madrid\nSomos la gente\nQue sigue y sigue\nHasta el final', origin: 'El himno oficial adoptado por los aficionados del Real Madrid en todo el mundo. Representa el espíritu luchador y el alcance global del club.' },
      { locale: 'pt-br', title: 'Hala Madrid', lyrics: 'Hala Madrid y nada más...', origin: 'O hino oficial adotado pelos torcedores do Real Madrid no mundo todo.' }
    ],
    group: 'Grada Fans',
    groupSlug: 'grada-fans',
    club: 'Real Madrid',
    country: 'Spain',
    countryCode: 'ES',
    duration: '3:15',
    audio: '/audio/hala-madrid.mp3',
    views: 345000,
    likes: 178000,
    isFeatured: true,
    yearCreated: 2014,
    originalMelody: 'RedOne - Official composition'
  },
  {
    translations: [
      { locale: 'en', title: 'Fiel Torcedor', lyrics: 'Sou Corinthiano\nE tenho raça e coração\nEu sou fiel\nMinha paixão não tem razão\nE onde o Timão estiver\nEu vou estar', origin: 'The anthem of Gaviões da Fiel, expressing the unconditional love and loyalty of Corinthians fans. It emphasizes that their passion has no logic - it\'s pure devotion.' },
      { locale: 'fr', title: 'Fiel Torcedor', lyrics: 'Sou Corinthiano\nE tenho raça e coração...', origin: 'L\'hymne de Gaviões da Fiel, exprimant l\'amour inconditionnel et la loyauté des fans de Corinthians.' },
      { locale: 'ar', title: 'المشجع المخلص', lyrics: 'أنا كورينثياني\nولدي العزيمة والقلب...', origin: 'نشيد غافيويس دا فيل، يعبر عن الحب غير المشروط والولاء لمشجعي كورينثيانز.' },
      { locale: 'it', title: 'Fiel Torcedor', lyrics: 'Sou Corinthiano...', origin: 'L\'inno dei Gaviões da Fiel, che esprime l\'amore incondizionato dei tifosi del Corinthians.' },
      { locale: 'es', title: 'Fiel Torcedor', lyrics: 'Sou Corinthiano...', origin: 'El himno de Gaviões da Fiel, expresando el amor incondicional de los aficionados del Corinthians.' },
      { locale: 'pt-br', title: 'Fiel Torcedor', lyrics: 'Sou Corinthiano\nE tenho raça e coração\nEu sou fiel\nMinha paixão não tem razão\nE onde o Timão estiver\nEu vou estar', origin: 'O hino dos Gaviões da Fiel, expressando o amor incondicional e a lealdade dos torcedores do Corinthians. Enfatiza que sua paixão não tem lógica - é pura devoção.' }
    ],
    group: 'Gaviões da Fiel',
    groupSlug: 'gavioes-da-fiel',
    club: 'Corinthians',
    country: 'Brazil',
    countryCode: 'BR',
    duration: '3:30',
    audio: '/audio/fiel-torcedor.mp3',
    views: 278000,
    likes: 145000,
    isFeatured: true,
    yearCreated: 1975,
    originalMelody: 'Traditional Brazilian samba rhythm'
  },
  {
    translations: [
      { locale: 'en', title: 'Cimbom', lyrics: 'Cimbom Cimbom Cimbom\nSarı kırmızı renklerin\nYanımızda olsun\nGalatasaray aşkına\nSonsuza dek', origin: 'The battle cry of UltrAslan, Cimbom is the affectionate nickname for Galatasaray. This chant unites all fans in their love for the yellow and red colors.' },
      { locale: 'fr', title: 'Cimbom', lyrics: 'Cimbom Cimbom Cimbom...', origin: 'Le cri de guerre d\'UltrAslan. Cimbom est le surnom affectueux de Galatasaray.' },
      { locale: 'ar', title: 'جيمبوم', lyrics: 'جيمبوم جيمبوم جيمبوم...', origin: 'صرخة الحرب لألتراسلان. جيمبوم هو اللقب الحنون لغلطة سراي.' },
      { locale: 'it', title: 'Cimbom', lyrics: 'Cimbom Cimbom Cimbom...', origin: 'Il grido di battaglia di UltrAslan. Cimbom è il soprannome affettuoso del Galatasaray.' },
      { locale: 'es', title: 'Cimbom', lyrics: 'Cimbom Cimbom Cimbom...', origin: 'El grito de guerra de UltrAslan. Cimbom es el apodo cariñoso del Galatasaray.' },
      { locale: 'pt-br', title: 'Cimbom', lyrics: 'Cimbom Cimbom Cimbom...', origin: 'O grito de guerra do UltrAslan. Cimbom é o apelido carinhoso do Galatasaray.' }
    ],
    group: 'UltrAslan',
    groupSlug: 'ultraslan',
    club: 'Galatasaray',
    country: 'Turkey',
    countryCode: 'TR',
    duration: '2:45',
    audio: '/audio/cimbom.mp3',
    views: 156000,
    likes: 78000,
    isFeatured: false,
    yearCreated: 2001,
    originalMelody: 'Traditional Turkish melody'
  },
  {
    translations: [
      { locale: 'en', title: 'Allez l\'OM', lyrics: 'Aux armes, nous sommes les Marseillais\nEt nous allons gagner\nAllez l\'OM, Allez l\'OM\nÀ jamais les premiers\nAllez l\'OM, Allez l\'OM', origin: 'The anthem of Olympique de Marseille, sung with passion at the Vélodrome. It celebrates the fighting spirit of the city and its eternal rivalry with Paris.' },
      { locale: 'fr', title: 'Allez l\'OM', lyrics: 'Aux armes, nous sommes les Marseillais\nEt nous allons gagner\nAllez l\'OM, Allez l\'OM\nÀ jamais les premiers\nAllez l\'OM, Allez l\'OM', origin: 'L\'hymne de l\'Olympique de Marseille, chanté avec passion au Vélodrome. Il célèbre l\'esprit combatif de la ville et sa rivalité éternelle avec Paris.' },
      { locale: 'ar', title: 'أليه أوم', lyrics: 'إلى السلاح، نحن المارسيليون\nوسنفوز...', origin: 'نشيد أولمبيك مارسيليا، يُغنى بشغف في الفيلودروم.' },
      { locale: 'it', title: 'Allez l\'OM', lyrics: 'Aux armes, nous sommes les Marseillais...', origin: 'L\'inno dell\'Olympique de Marseille, cantato con passione al Vélodrome.' },
      { locale: 'es', title: 'Allez l\'OM', lyrics: 'Aux armes, nous sommes les Marseillais...', origin: 'El himno del Olympique de Marseille, cantado con pasión en el Vélodrome.' },
      { locale: 'pt-br', title: 'Allez l\'OM', lyrics: 'Aux armes, nous sommes les Marseillais...', origin: 'O hino do Olympique de Marseille, cantado com paixão no Vélodrome.' }
    ],
    group: 'Winners Marseille',
    groupSlug: 'winners-marseille',
    club: 'Olympique de Marseille',
    country: 'France',
    countryCode: 'FR',
    duration: '3:00',
    audio: '/audio/allez-om.mp3',
    views: 145000,
    likes: 67000,
    isFeatured: true,
    yearCreated: 1987,
    originalMelody: 'Original composition inspired by La Marseillaise'
  }
];

// ============================================
// ARTICLES DATA (avec traductions)
// ============================================
export const articlesData = [
  {
    title: 'The Birth of Ultra Culture: From Milan to the World',
    slug: 'birth-of-ultra-culture',
    excerpt: 'Discover how the Ultra movement began in Italy in 1968 and spread across the globe, transforming football supporter culture forever.',
    content: `
# The Birth of Ultra Culture: From Milan to the World

In 1968, a revolution began in the terraces of Italian football stadiums. What started as a desire for more organized, passionate support would become a global phenomenon that transformed how fans experience football.

## The Italian Origins

The first Ultra groups emerged in Milan, with Fossa dei Leoni (Inter) and the early formations of what would become Curva Sud Milano (AC Milan). These pioneers introduced:

- **Organized choreographies**: Planned displays using flags, banners, and cards
- **Continuous chanting**: 90 minutes of coordinated singing
- **Visual identity**: Specific colors, symbols, and logos for each group
- **Independence**: Self-funded and self-organized, free from club control

## The Philosophy

Being an Ultra means more than just attending matches. It's a lifestyle built on:

1. **Unconditional support**: Supporting the team regardless of results
2. **Active participation**: Being the 12th player, not a passive spectator
3. **Anti-commercialism**: Opposing excessive commercialization of football
4. **Loyalty**: Standing by the group and its principles

## Global Expansion

Throughout the 1970s and 1980s, Ultra culture spread across Europe:

- **Germany**: Groups like Schickeria München brought Ultra values to the Bundesliga
- **France**: Winners Marseille (1987) pioneered French Ultra culture
- **Spain**: Biris Norte and other groups added Spanish passion to the movement

## The African Revolution

In 2005, GREEN BOYS 2005 became the first Ultra group in Morocco and Africa, bringing European Ultra traditions to Casablanca. Their success inspired:

- **Egypt**: Ultras Ahlawy and White Knights (2007)
- **Tunisia**: Various groups in the early 2010s
- **Algeria**: Multiple Ultra formations

## Modern Ultra Culture

Today, Ultra culture exists on every continent. From La Bombonera in Buenos Aires to Signal Iduna Park in Dortmund, millions of fans embrace the Ultra mentality.

The core values remain unchanged:
- Passion over profit
- Community over individualism
- Tradition over trends
- Art over consumption

Ultra culture is not just about football—it's about belonging, identity, and the pure expression of human passion.
    `,
    coverImage: '/images/articles/ultra-culture-birth.webp',
    category: 'history',
    tags: ['history', 'origins', 'italy', 'global'],
    status: 'published',
    isFeatured: true,
    readTime: 8,
    seo: {
      metaTitle: 'The Birth of Ultra Culture - From Milan to the World | MOUVEMENT',
      metaDescription: 'Discover how the Ultra movement began in Italy in 1968 and spread across the globe.',
      keywords: ['ultra culture', 'football supporters', 'tifo', 'curva']
    }
  },
  {
    title: 'GREEN BOYS 2005: Pioneers of African Ultra Culture',
    slug: 'green-boys-2005-pioneers',
    excerpt: 'The story of how Morocco\'s GREEN BOYS 2005 became the first Ultra group in Africa and revolutionized supporter culture across the continent.',
    content: `
# GREEN BOYS 2005: Pioneers of African Ultra Culture

On December 18, 2005, a group of passionate Raja Casablanca supporters made history. They founded GREEN BOYS 2005, the first organized Ultra group in Morocco and the entire African continent.

## The Beginning

Inspired by European Ultra culture, particularly Italian groups, these young Moroccan fans wanted to bring the same energy and organization to the Stade Mohammed V. They faced skepticism:

- Could Ultra culture work in Africa?
- Would Moroccan fans embrace these new traditions?
- How would authorities react?

The answer came quickly and decisively.

## Revolutionary Changes

GREEN BOYS 2005 introduced several firsts to Moroccan football:

### Tifos
Large-scale choreographed displays became their signature. Using fabric, cards, and creativity, they transformed the North Stand into a canvas of green and white art.

### Organized Chanting
Instead of random singing, they created structured chants with designated capos (leaders) to coordinate thousands of voices.

### Visual Identity
A consistent brand with logos, colors, and symbols that supporters could identify with and wear proudly.

## Cultural Impact

The influence of GREEN BOYS 2005 extends beyond the stadium:

1. **Youth movement**: They gave young Moroccans a sense of belonging and purpose
2. **Artistic expression**: Their tifos are recognized as genuine works of art
3. **Social impact**: Creating a community that transcends social classes
4. **Continental inspiration**: Inspiring similar movements across Africa

## The Derby

No discussion of GREEN BOYS 2005 is complete without mentioning the Casablanca Derby against Wydad AC and their WINNERS group. This rivalry, born in 2005, has become one of the most passionate in world football.

The derby matches are spectacular:
- Coordinated tifos covering entire stands
- 90 minutes of non-stop singing
- Smoke, flags, and pure passion
- Attendances regularly exceeding 45,000

## Legacy

Today, GREEN BOYS 2005 is recognized globally. They have:

- Won "Best Tifo" awards internationally
- Inspired Ultra groups across Africa
- Maintained their independence and values
- Grown to over 15,000 active members

Their motto, "Dima Raja" (Forever Raja), embodies the eternal commitment of Ultra culture.
    `,
    coverImage: '/images/articles/green-boys-pioneers.webp',
    category: 'culture',
    tags: ['green-boys', 'morocco', 'africa', 'pioneers'],
    status: 'published',
    isFeatured: true,
    readTime: 7,
    seo: {
      metaTitle: 'GREEN BOYS 2005 - African Ultra Pioneers | MOUVEMENT',
      metaDescription: 'The story of Morocco\'s GREEN BOYS 2005, the first Ultra group in Africa.',
      keywords: ['green boys 2005', 'raja casablanca', 'moroccan ultras', 'african ultras']
    }
  },
  {
    title: 'The Art of the Tifo: Creating Stadium Masterpieces',
    slug: 'art-of-tifo',
    excerpt: 'Behind every breathtaking tifo display are months of planning, hundreds of volunteers, and a deep passion for visual art. Learn how ultras create these stadium masterpieces.',
    content: `
# The Art of the Tifo: Creating Stadium Masterpieces

A tifo (from the Italian "tifare" - to support) is more than just a display—it's a statement of identity, passion, and artistic expression. These choreographed masterpieces can cover entire stadium sections and involve thousands of participants.

## The Planning Phase

Creating a tifo starts months before the match:

### Concept Development
- **Theme selection**: Usually related to a special match, anniversary, or message
- **Design sketching**: Artists create detailed drawings
- **Color planning**: Every shade must be precise and visible from distance

### Logistics
- **Size calculation**: Measuring the exact dimensions of the stand
- **Material selection**: Fabric, cards, flags, or combinations
- **Volunteer coordination**: Assigning sections and roles

## Materials and Techniques

### Types of Tifos

1. **Card tifos**: Thousands of colored cards held up simultaneously
2. **Banner tifos**: Large painted fabric unfurled across the stand
3. **Flag tifos**: Coordinated flag waving in patterns
4. **Combination tifos**: Mixing multiple techniques

### The Painting Process
For banner tifos, groups often:
- Rent large warehouses or parking lots
- Project the design onto the fabric
- Paint in teams over weeks or months
- Store sections carefully until matchday

## Famous Tifos in History

### Curva Sud Milano - "Forever Milan"
A 50-meter banner with the Devil symbol, accompanied by 20,000 red and black cards.

### Yellow Wall - "Echte Liebe"
25,000 yellow cards creating a wave effect, visible from space.

### GREEN BOYS 2005 - "African Glory"
Three-dimensional tifo celebrating Raja's continental success, involving 500 volunteers.

### La 12 - "Boca es mi vida"
La Bombonera covered in blue and yellow, with pyrotechnics and massive banners.

## The Execution

On matchday, everything must work perfectly:

1. **Pre-match setup**: Distributing cards, positioning banners
2. **Timing signals**: Capos coordinate the exact moment
3. **The reveal**: Thousands act as one, creating the image
4. **Duration**: Some displays last seconds, others the entire match

## The Future of Tifo Art

Modern technology is influencing tifo design:
- LED lights for night games
- More sophisticated color gradients
- Interactive elements with sound
- Environmental consciousness in materials

But the core remains unchanged: **thousands of people, united in passion, creating art**.
    `,
    coverImage: '/images/articles/art-of-tifo.webp',
    category: 'tifo',
    tags: ['tifo', 'art', 'choreography', 'tutorial'],
    status: 'published',
    isFeatured: true,
    readTime: 6,
    seo: {
      metaTitle: 'The Art of the Tifo - Creating Stadium Masterpieces | MOUVEMENT',
      metaDescription: 'Learn how ultras create breathtaking tifo displays that transform stadiums into works of art.',
      keywords: ['tifo', 'choreography', 'stadium art', 'ultras']
    }
  },
  {
    title: 'Ultras Glossary: The Language of the Curva',
    slug: 'ultras-glossary',
    excerpt: 'From Capo to Corteo, learn the essential vocabulary used by Ultra groups worldwide.',
    content: `
# Ultras Glossary: The Language of the Curva

Every culture has its own language, and Ultra culture is no different. Here's your guide to the terms, expressions, and vocabulary you'll hear in stadiums around the world.

## Essential Terms

### Capo
**Definition**: The leader who directs chanting and choreography in the stands.
**Origin**: Italian for "head" or "chief"
**Role**: Stands in front of the group, uses megaphone and hand signals to coordinate.

### Curva
**Definition**: The curved end sections of a stadium where ultras gather.
**Origin**: Italian stadium architecture
**Example**: Curva Sud (South Curve), Curva Nord (North Curve)

### Tifo
**Definition**: A choreographed display using cards, banners, and flags.
**Origin**: From Italian "tifare" (to support)
**Types**: Card tifo, banner tifo, flag tifo

### Corteo
**Definition**: An organized march to the stadium before matches.
**Origin**: Italian for "procession"
**Elements**: Flags, chanting, smoke, drums

### Striscione
**Definition**: Large horizontal banners with messages or group names.
**Origin**: Italian for "banner"
**Placement**: Usually at the front of the curva

### Ultras Mentalità
**Definition**: The Ultra mentality - unconditional support regardless of results.
**Core values**: Loyalty, passion, independence

## Regional Variations

### South American Terms

**Barra Brava**: The organized supporter groups in Argentina and South America.
**Hinchada**: The entire supporter base of a team.
**Aguante**: The concept of endurance and unconditional support.
**La Banda**: "The gang" - another term for the organized group.

### North African Terms

**Virage**: French term for the curved end (used in Morocco, Algeria, Tunisia).
**Dima**: "Forever" in Darija (Moroccan Arabic) - used in mottos.

### English Terms

**Kop**: Famous standing section, originated at Liverpool.
**Firm**: Term for organized supporter groups in England.
**Terrace**: The standing areas in traditional stadiums.

## Tifo-Specific Vocabulary

**Colpo**: The big reveal moment of a tifo.
**Coreografia**: Italian term for the overall choreographed display.
**Bandierone**: An extra-large flag, often the size of the entire section.
**Fumogeni**: Smoke bombs and flares.
**Sciarpa**: Scarf - an essential Ultra accessory.

## Behavioral Terms

**Supporto**: Active, vocal support throughout the match.
**Trasferta**: An away game - following your team on the road.
**Derby**: A match against a local rival.
**Gemellaggio**: A twinning or friendship between Ultra groups.
**Rivalità**: Rivalry between groups.

## Understanding Context

These terms aren't just vocabulary—they represent a philosophy. When an Ultra talks about "mentalità," they're speaking about a way of life. When they organize a "corteo," they're creating a moving artwork.

The language of the curva continues to evolve, with each generation adding new terms while preserving the essential vocabulary that connects Ultra groups worldwide.
    `,
    coverImage: '/images/articles/ultras-glossary.webp',
    category: 'culture',
    tags: ['glossary', 'vocabulary', 'culture', 'education'],
    status: 'published',
    isFeatured: false,
    readTime: 5,
    seo: {
      metaTitle: 'Ultras Glossary - The Language of the Curva | MOUVEMENT',
      metaDescription: 'Learn the essential vocabulary used by Ultra groups worldwide.',
      keywords: ['ultras glossary', 'tifo terms', 'curva vocabulary']
    }
  },
  {
    title: 'The Casablanca Derby: Africa\'s Most Passionate Rivalry',
    slug: 'casablanca-derby',
    excerpt: 'When GREEN BOYS 2005 face WINNERS, Casablanca becomes the center of the Ultra universe. Explore the history and passion of Africa\'s greatest derby.',
    content: `
# The Casablanca Derby: Africa's Most Passionate Rivalry

In the heart of Morocco's largest city, two giants clash. The Casablanca Derby between Raja Club Athletic and Wydad Athletic Club is more than a football match—it's a cultural event that divides families, unites communities, and showcases the best of African Ultra culture.

## Historical Context

The rivalry dates back to 1937 when Wydad was founded. Raja, established in 1949, quickly became the working-class alternative. The social dynamics shaped the rivalry:

**Raja Casablanca**: Representing the popular neighborhoods, the common people, the green-collar workers.

**Wydad AC**: Initially associated with the nationalist movement, later developing its own identity.

## The Ultra Revolution

In 2005, everything changed. GREEN BOYS 2005 (Raja) and WINNERS (Wydad) were founded within months of each other, creating the most organized and visual Ultra scene in Africa.

### GREEN BOYS 2005
- **Founded**: December 18, 2005
- **Colors**: Green and White
- **Location**: North Stand (Virage Nord)
- **Signature**: Creativity, innovative tifos, organized chanting

### WINNERS
- **Founded**: 2005
- **Colors**: Red and White
- **Location**: South Stand
- **Signature**: Passionate support, impressive numbers

## Derby Day Experience

### Before the Match
The city divides. Green and red dominate streets. Corteos from both groups march toward the stadium. Police presence is heavy. Tension is palpable.

### Inside the Stadium
- **Capacity**: 45,000+ for derby matches
- **Atmosphere**: 90 minutes of non-stop noise
- **Visual displays**: Competing tifos on opposite ends
- **Sound level**: Regularly measured above 100 decibels

### Iconic Moments
1. **2018 CAF Final**: GREEN BOYS' tifo seen around the world
2. **2019 Derby**: 360-degree choreography covering the entire stadium
3. **2023 League decider**: Record attendance and atmosphere

## Cultural Significance

The derby represents:

- **City identity**: Casablanca's passion for football
- **Youth expression**: A channel for energy and creativity
- **Artistic competition**: Each group tries to outdo the other
- **Social cohesion**: Bringing people together despite differences

## International Recognition

The Casablanca Derby has been featured in:
- International football documentaries
- Global tifo rankings
- Academic studies on supporter culture
- FIFA and CAF promotional materials

## The Future

As African football grows, the Casablanca Derby remains its crown jewel. The rivalry between GREEN BOYS 2005 and WINNERS continues to set the standard for what Ultra culture can achieve on the continent.

For 90 minutes, twice a year, Casablanca becomes the center of the football universe.
    `,
    coverImage: '/images/articles/casablanca-derby.webp',
    category: 'culture',
    tags: ['derby', 'casablanca', 'raja', 'wydad', 'morocco'],
    status: 'published',
    isFeatured: true,
    readTime: 7,
    seo: {
      metaTitle: 'The Casablanca Derby - Africa\'s Most Passionate Rivalry | MOUVEMENT',
      metaDescription: 'Explore the history and passion of the Casablanca Derby between Raja and Wydad.',
      keywords: ['casablanca derby', 'raja wydad', 'moroccan football', 'african derby']
    }
  }
];

// ============================================
// GLOSSARY TERMS DATA (avec traductions)
// ============================================
export const glossaryData = [
  {
    translations: [
      { locale: 'en', term: 'Capo', definition: 'The leader who directs chanting and choreography in the stands. Uses megaphone and hand signals to coordinate thousands of supporters.' },
      { locale: 'fr', term: 'Capo', definition: 'Le leader qui dirige les chants et la chorégraphie dans les tribunes. Utilise un mégaphone et des signaux de la main pour coordonner des milliers de supporters.' },
      { locale: 'ar', term: 'كابو', definition: 'القائد الذي يوجه الأناشيد والتصميم في المدرجات. يستخدم مكبر الصوت وإشارات اليد لتنسيق آلاف المشجعين.' },
      { locale: 'it', term: 'Capo', definition: 'Il leader che dirige i canti e le coreografie in curva. Usa megafono e segnali manuali per coordinare migliaia di tifosi.' },
      { locale: 'es', term: 'Capo', definition: 'El líder que dirige los cánticos y la coreografía en las gradas. Usa megáfono y señales manuales para coordinar a miles de aficionados.' },
      { locale: 'pt-br', term: 'Capo', definition: 'O líder que dirige os cânticos e a coreografia nas arquibancadas. Usa megafone e sinais manuais para coordenar milhares de torcedores.' }
    ]
  },
  {
    translations: [
      { locale: 'en', term: 'Curva', definition: 'Italian term for the curved end sections of a stadium where ultras gather. Examples: Curva Sud, Curva Nord.' },
      { locale: 'fr', term: 'Curva', definition: 'Terme italien pour les sections courbes du stade où se rassemblent les ultras. Exemples: Curva Sud, Curva Nord.' },
      { locale: 'ar', term: 'كورفا', definition: 'مصطلح إيطالي للأقسام المنحنية من الملعب حيث يتجمع الألتراس. أمثلة: كورفا سود، كورفا نورد.' },
      { locale: 'it', term: 'Curva', definition: 'Le sezioni curve dello stadio dove si radunano gli ultras. Esempi: Curva Sud, Curva Nord.' },
      { locale: 'es', term: 'Curva', definition: 'Término italiano para las secciones curvas del estadio donde se reúnen los ultras.' },
      { locale: 'pt-br', term: 'Curva', definition: 'Termo italiano para as seções curvas do estádio onde os ultras se reúnem.' }
    ]
  },
  {
    translations: [
      { locale: 'en', term: 'Tifo', definition: 'A choreographed display using cards, banners, and flags to create visual art in the stadium. From Italian "tifare" (to support).' },
      { locale: 'fr', term: 'Tifo', definition: 'Un affichage chorégraphié utilisant des cartes, bannières et drapeaux pour créer de l\'art visuel dans le stade.' },
      { locale: 'ar', term: 'تيفو', definition: 'عرض منسق باستخدام البطاقات واللافتات والأعلام لإنشاء فن بصري في الملعب.' },
      { locale: 'it', term: 'Tifo', definition: 'Una coreografia usando cartoncini, striscioni e bandiere per creare arte visiva nello stadio.' },
      { locale: 'es', term: 'Tifo', definition: 'Una exhibición coreografiada usando tarjetas, pancartas y banderas para crear arte visual en el estadio.' },
      { locale: 'pt-br', term: 'Tifo', definition: 'Uma exibição coreografada usando cartões, faixas e bandeiras para criar arte visual no estádio.' }
    ]
  },
  {
    translations: [
      { locale: 'en', term: 'Corteo', definition: 'An organized march to the stadium before matches. Features flags, chanting, drums, and smoke.' },
      { locale: 'fr', term: 'Corteo', definition: 'Une marche organisée vers le stade avant les matchs. Comprend des drapeaux, des chants, des tambours et des fumigènes.' },
      { locale: 'ar', term: 'كورتيو', definition: 'مسيرة منظمة إلى الملعب قبل المباريات. تضم الأعلام والأناشيد والطبول والدخان.' },
      { locale: 'it', term: 'Corteo', definition: 'Una marcia organizzata verso lo stadio prima delle partite. Include bandiere, cori, tamburi e fumogeni.' },
      { locale: 'es', term: 'Corteo', definition: 'Una marcha organizada hacia el estadio antes de los partidos.' },
      { locale: 'pt-br', term: 'Corteo', definition: 'Uma marcha organizada para o estádio antes das partidas.' }
    ]
  },
  {
    translations: [
      { locale: 'en', term: 'Barra Brava', definition: 'South American equivalent of Ultra groups, known for intense passion and organized support.' },
      { locale: 'fr', term: 'Barra Brava', definition: 'Équivalent sud-américain des groupes Ultras, connus pour leur passion intense et leur soutien organisé.' },
      { locale: 'ar', term: 'بارا برافا', definition: 'ما يعادل مجموعات الألتراس في أمريكا الجنوبية، معروفة بشغفها الشديد ودعمها المنظم.' },
      { locale: 'it', term: 'Barra Brava', definition: 'Equivalente sudamericano dei gruppi Ultra, noti per la passione intensa e il supporto organizzato.' },
      { locale: 'es', term: 'Barra Brava', definition: 'Grupos de hinchas organizados en Sudamérica, conocidos por su pasión intensa y apoyo organizado.' },
      { locale: 'pt-br', term: 'Barra Brava', definition: 'Equivalente sul-americano dos grupos Ultras, conhecidos pela paixão intensa e apoio organizado.' }
    ]
  },
  {
    translations: [
      { locale: 'en', term: 'Pyro', definition: 'Pyrotechnics including flares, smoke bombs, and fireworks used in displays.' },
      { locale: 'fr', term: 'Pyro', definition: 'Pyrotechnies incluant fusées éclairantes, fumigènes et feux d\'artifice utilisés dans les affichages.' },
      { locale: 'ar', term: 'بايرو', definition: 'الألعاب النارية بما في ذلك الشعلات وقنابل الدخان والألعاب النارية المستخدمة في العروض.' },
      { locale: 'it', term: 'Pyro', definition: 'Pirotecnica inclusi fumogeni, torce e fuochi d\'artificio usati nelle coreografie.' },
      { locale: 'es', term: 'Pyro', definition: 'Pirotecnia incluyendo bengalas, bombas de humo y fuegos artificiales.' },
      { locale: 'pt-br', term: 'Pyro', definition: 'Pirotecnia incluindo sinalizadores, bombas de fumaça e fogos de artifício.' }
    ]
  },
  {
    translations: [
      { locale: 'en', term: 'Striscione', definition: 'Large horizontal banners with messages or group names displayed at the front of the curva.' },
      { locale: 'fr', term: 'Striscione', definition: 'Grandes bannières horizontales avec des messages ou des noms de groupe affichées à l\'avant de la curva.' },
      { locale: 'ar', term: 'ستريشونه', definition: 'لافتات أفقية كبيرة بها رسائل أو أسماء المجموعات معروضة في مقدمة الكورفا.' },
      { locale: 'it', term: 'Striscione', definition: 'Grandi striscioni orizzontali con messaggi o nomi di gruppo esposti davanti alla curva.' },
      { locale: 'es', term: 'Striscione', definition: 'Grandes pancartas horizontales con mensajes o nombres de grupos.' },
      { locale: 'pt-br', term: 'Striscione', definition: 'Grandes faixas horizontais com mensagens ou nomes de grupos.' }
    ]
  },
  {
    translations: [
      { locale: 'en', term: 'Ultras Mentalità', definition: 'The Ultra mentality - unconditional support regardless of results, prioritizing passion over outcomes.' },
      { locale: 'fr', term: 'Ultras Mentalità', definition: 'La mentalité Ultra - soutien inconditionnel quel que soit le résultat, privilégiant la passion aux résultats.' },
      { locale: 'ar', term: 'عقلية الألتراس', definition: 'عقلية الألتراس - الدعم غير المشروط بغض النظر عن النتائج، إعطاء الأولوية للشغف على النتائج.' },
      { locale: 'it', term: 'Ultras Mentalità', definition: 'La mentalità Ultra - supporto incondizionato indipendentemente dai risultati, dando priorità alla passione.' },
      { locale: 'es', term: 'Ultras Mentalità', definition: 'La mentalidad Ultra - apoyo incondicional independientemente de los resultados.' },
      { locale: 'pt-br', term: 'Ultras Mentalità', definition: 'A mentalidade Ultra - apoio incondicional independentemente dos resultados.' }
    ]
  }
];

export default {
  ultraGroupsData,
  timelineData,
  tifosData,
  chantsData,
  articlesData,
  glossaryData
};

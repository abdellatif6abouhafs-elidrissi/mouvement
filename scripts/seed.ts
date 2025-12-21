import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Models
import User from '../src/models/User';
import UltraGroup from '../src/models/UltraGroup';
import Article from '../src/models/Article';
import Tifo from '../src/models/Tifo';
import Timeline from '../src/models/Timeline';
import GlossaryTerm from '../src/models/GlossaryTerm';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mouvement';

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    console.log('Clearing existing data...');
    await Promise.all([
      User.deleteMany({}),
      UltraGroup.deleteMany({}),
      Article.deleteMany({}),
      Tifo.deleteMany({}),
      Timeline.deleteMany({}),
      GlossaryTerm.deleteMany({}),
    ]);

    // Create admin user
    console.log('Creating admin user...');
    const hashedPassword = await bcrypt.hash('admin123', 12);
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@mouvement.com',
      password: hashedPassword,
      role: 'admin',
      isVerified: true,
      bio: 'Platform administrator and Ultra culture enthusiast.',
      image: '/images/gallery/gallery-1.webp',
    });

    // Create contributor user
    const contributorUser = await User.create({
      name: 'Ahmed Contributor',
      email: 'contributor@mouvement.com',
      password: hashedPassword,
      role: 'contributor',
      isVerified: true,
      bio: 'Football culture writer specializing in African Ultra movements.',
      image: '/images/gallery/gallery-2.webp',
    });

    console.log('Users created');

    // Create Ultra Groups
    console.log('Creating Ultra groups...');
    const groups = await UltraGroup.create([
      {
        name: 'GREEN BOYS 2005',
        slug: 'green-boys-2005',
        club: 'Raja Casablanca',
        city: 'Casablanca',
        country: 'Morocco',
        countryCode: 'MA',
        yearFounded: 2005,
        history: `GREEN BOYS 2005 est le premier groupe Ultra au Maroc, fondé en 2005 par des supporters passionnés du Raja Club Athletic de Casablanca. Depuis sa création, le groupe a révolutionné la culture supporter en Afrique du Nord, introduisant les tifos spectaculaires, les chants coordonnés et l'ambiance européenne dans les stades marocains.

Le groupe tire son nom de la couleur verte emblématique du Raja Casablanca, et le "2005" marque l'année de fondation. Avec plus de 60 000 membres actifs, GREEN BOYS 2005 est considéré comme l'un des groupes Ultra les plus influents du continent africain.

Leur philosophie repose sur trois piliers : la passion inconditionnelle pour le club, le respect des traditions Ultra, et l'engagement communautaire.`,
        values: ['Passion', 'Loyalty', 'Creativity', 'Unity', 'Respect'],
        motto: 'Verdi per sempre, mai arrendersi',
        colors: ['Green', 'White'],
        symbols: ['Eagle', 'Crown', 'Stars'],
        logo: '/images/groups/green-boys-2005.webp',
        coverImage: '/images/heroes/hero-1.webp',
        membersEstimate: '60K+',
        stadium: 'Stade Mohammed V',
        socialLinks: {
          facebook: 'https://facebook.com/greenboys2005',
          instagram: 'https://instagram.com/greenboys2005',
          twitter: 'https://twitter.com/greenboys2005',
          youtube: 'https://youtube.com/@greenboys2005',
        },
        tifos: [
          {
            title: 'Derby Day 2024',
            description: 'Massive display covering the entire North Stand',
            image: '/images/tifos/tifo-1.webp',
            date: new Date('2024-12-01'),
            match: 'Raja vs Wydad',
          },
        ],
        gallery: [
          { type: 'image', url: '/images/gallery/gallery-1.webp', caption: 'Match atmosphere' },
          { type: 'image', url: '/images/gallery/gallery-2.webp', caption: 'Tifo preparation' },
        ],
        coordinates: { lat: 33.5731, lng: -7.5898 },
        views: 125000,
        likes: 45000,
        isVerified: true,
        isFeatured: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Curva Sud Milano',
        slug: 'curva-sud-milano',
        club: 'AC Milan',
        city: 'Milan',
        country: 'Italy',
        countryCode: 'IT',
        yearFounded: 1968,
        history: `Curva Sud Milano is one of the oldest and most respected Ultra groups in the world. Founded in 1968, they have been the heart and soul of AC Milan support for over five decades.

The group is known for their spectacular tifos, passionate chants, and unwavering loyalty to the Rossoneri. They occupy the south end of San Siro stadium and have created some of the most memorable atmospheres in European football.`,
        values: ['Tradition', 'Passion', 'Honor', 'Loyalty'],
        motto: 'Forza Milan, sempre!',
        colors: ['Red', 'Black'],
        symbols: ['Devil', 'Cross of Saint George'],
        logo: '/images/groups/curva-sud-milano.webp',
        coverImage: '/images/heroes/hero-2.webp',
        membersEstimate: '100K+',
        stadium: 'San Siro',
        socialLinks: {
          facebook: 'https://facebook.com/curvasudmilano',
          instagram: 'https://instagram.com/curvasudmilano',
        },
        tifos: [
          {
            title: 'Champions League Night',
            description: 'European nights tifo display',
            image: '/images/tifos/tifo-2.webp',
            date: new Date('2023-09-15'),
          },
        ],
        gallery: [
          { type: 'image', url: '/images/gallery/gallery-3.webp', caption: 'San Siro atmosphere' },
        ],
        coordinates: { lat: 45.4781, lng: 9.1239 },
        views: 98000,
        likes: 38000,
        isVerified: true,
        isFeatured: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Yellow Wall',
        slug: 'yellow-wall',
        club: 'Borussia Dortmund',
        city: 'Dortmund',
        country: 'Germany',
        countryCode: 'DE',
        yearFounded: 1974,
        history: `The Yellow Wall (Gelbe Wand) is the famous standing terrace at Borussia Dortmund's Signal Iduna Park. With a capacity of 25,000, it is the largest standing terrace in European football.

The atmosphere created by the Yellow Wall is legendary in world football, with coordinated displays of scarves, flags, and banners creating a sea of yellow and black that intimidates opponents and inspires the team.`,
        values: ['Unity', 'Passion', 'Community', 'Tradition'],
        motto: 'Echte Liebe',
        colors: ['Yellow', 'Black'],
        symbols: ['Bee', 'BVB'],
        logo: '/images/groups/yellow-wall.webp',
        coverImage: '/images/heroes/hero-3.webp',
        membersEstimate: '80K+',
        stadium: 'Signal Iduna Park',
        socialLinks: {
          twitter: 'https://twitter.com/yellowwall',
        },
        tifos: [],
        gallery: [
          { type: 'image', url: '/images/gallery/gallery-4.webp', caption: 'Yellow sea' },
        ],
        coordinates: { lat: 51.4927, lng: 7.4518 },
        views: 87000,
        likes: 32000,
        isVerified: true,
        isFeatured: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'La 12',
        slug: 'la-12',
        club: 'Boca Juniors',
        city: 'Buenos Aires',
        country: 'Argentina',
        countryCode: 'AR',
        yearFounded: 1968,
        history: `La 12 is the legendary Barra Brava of Boca Juniors, one of the most passionate supporter groups in world football. Named after the "12th player", they represent the constant support that fans give to the team.

La Bombonera, their home stadium, is known as one of the most intimidating venues in world football, largely thanks to the atmosphere created by La 12.`,
        values: ['Passion', 'Pride', 'Identity', 'Never Give Up'],
        motto: 'Boca, yo te amo',
        colors: ['Blue', 'Yellow'],
        symbols: ['Xeneize'],
        logo: '/images/groups/la-12.webp',
        coverImage: '/images/heroes/hero-4.webp',
        membersEstimate: '70K+',
        stadium: 'La Bombonera',
        socialLinks: {},
        tifos: [],
        gallery: [],
        coordinates: { lat: -34.6357, lng: -58.3647 },
        views: 76000,
        likes: 28000,
        isVerified: true,
        isFeatured: false,
        author: adminUser._id,
        isActive: true,
      },
      // More Ultra Groups from around the world
      {
        name: 'Ultras Ahlawy',
        slug: 'ultras-ahlawy',
        club: 'Al Ahly SC',
        city: 'Cairo',
        country: 'Egypt',
        countryCode: 'EG',
        yearFounded: 2007,
        history: `Ultras Ahlawy is one of the most influential Ultra groups in Africa and the Arab world. Founded in 2007, they brought European-style Ultra culture to Egyptian football.

The group became internationally known not only for their passionate support but also for their role in the Egyptian Revolution of 2011. The Port Said Stadium disaster in 2012 marked a tragic chapter in their history.

Despite challenges, Ultras Ahlawy remains a symbol of passionate support and has inspired countless Ultra groups across the Middle East and Africa.`,
        values: ['Loyalty', 'Brotherhood', 'Passion', 'Resistance'],
        motto: 'We will always be there',
        colors: ['Red', 'White'],
        symbols: ['Eagle', 'Devil'],
        logo: '/images/groups/ultras-ahlawy.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '80K+',
        stadium: 'Cairo International Stadium',
        socialLinks: {
          facebook: 'https://facebook.com/ultrasahlawy',
          twitter: 'https://twitter.com/ultrasahlawy',
        },
        tifos: [],
        gallery: [],
        coordinates: { lat: 30.0688, lng: 31.3130 },
        views: 89000,
        likes: 34000,
        isVerified: true,
        isFeatured: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'The Kop',
        slug: 'the-kop',
        club: 'Liverpool FC',
        city: 'Liverpool',
        country: 'England',
        countryCode: 'GB',
        yearFounded: 1906,
        history: `The Kop at Anfield is one of the most famous stands in world football. Named after Spion Kop, a famous battle hill in South Africa, it has been the heart of Liverpool support for over a century.

Known for their rendition of "You'll Never Walk Alone", The Kop has created some of the most iconic moments in football history. The atmosphere on European nights at Anfield is legendary.`,
        values: ['Unity', 'Tradition', 'Passion', 'Never Give Up'],
        motto: "You'll Never Walk Alone",
        colors: ['Red'],
        symbols: ['Liver Bird', 'Shankly Gates'],
        logo: '/images/groups/the-kop.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '50K+',
        stadium: 'Anfield',
        socialLinks: {
          twitter: 'https://twitter.com/LFC',
        },
        tifos: [],
        gallery: [],
        coordinates: { lat: 53.4308, lng: -2.9608 },
        views: 95000,
        likes: 41000,
        isVerified: true,
        isFeatured: false,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'UltrAslan',
        slug: 'ultraslan',
        club: 'Galatasaray',
        city: 'Istanbul',
        country: 'Turkey',
        countryCode: 'TR',
        yearFounded: 2001,
        history: `UltrAslan is the largest and most influential Ultra group supporting Galatasaray. Founded in 2001, they have transformed the atmosphere at Türk Telekom Stadium into one of the most intimidating in Europe.

Known for their incredible choreographies, non-stop chanting, and passionate displays, UltrAslan has set numerous records including the loudest crowd noise in football history.`,
        values: ['Passion', 'Loyalty', 'Pride', 'Never Surrender'],
        motto: 'Aslan gibi yüksel',
        colors: ['Red', 'Yellow'],
        symbols: ['Lion'],
        logo: '/images/groups/ultraslan.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '120K+',
        stadium: 'Türk Telekom Stadium',
        socialLinks: {
          instagram: 'https://instagram.com/ultraslan',
          twitter: 'https://twitter.com/ultraslan',
        },
        tifos: [],
        gallery: [],
        coordinates: { lat: 41.1033, lng: 28.9919 },
        views: 110000,
        likes: 52000,
        isVerified: true,
        isFeatured: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Gaviões da Fiel',
        slug: 'gavioes-da-fiel',
        club: 'Corinthians',
        city: 'São Paulo',
        country: 'Brazil',
        countryCode: 'BR',
        yearFounded: 1969,
        history: `Gaviões da Fiel (Hawks of the Faithful) is one of the largest organized supporter groups in the world. Founded in 1969, they are known for their massive fan base and their own samba school.

The group has played a crucial role in Corinthians' identity and has been instrumental in numerous achievements both on and off the pitch, including the construction of Arena Corinthians.`,
        values: ['Loyalty', 'Democracy', 'Passion', 'Unity'],
        motto: 'Fiel até morrer',
        colors: ['Black', 'White'],
        symbols: ['Hawk'],
        logo: '/images/groups/gavioes-da-fiel.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '150K+',
        stadium: 'Arena Corinthians',
        socialLinks: {
          instagram: 'https://instagram.com/gavioesoficial',
        },
        tifos: [],
        gallery: [],
        coordinates: { lat: -23.5453, lng: -46.4742 },
        views: 130000,
        likes: 58000,
        isVerified: true,
        isFeatured: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Winners',
        slug: 'winners-wydad',
        club: 'Wydad Casablanca',
        city: 'Casablanca',
        country: 'Morocco',
        countryCode: 'MA',
        yearFounded: 2005,
        history: `Winners is the main Ultra group supporting Wydad Athletic Club, founded in 2005. Along with GREEN BOYS 2005, they pioneered the Ultra movement in Morocco.

Known for their creative tifos, passionate chants in Darija (Moroccan Arabic), and intense rivalry with GREEN BOYS in the Casablanca Derby, Winners has become one of the most recognized Ultra groups in Africa.`,
        values: ['Passion', 'Creativity', 'Pride', 'Unity'],
        motto: 'Winners never die',
        colors: ['Red', 'White'],
        symbols: ['Eagle'],
        logo: '/images/groups/wydad-winners.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '55K+',
        stadium: 'Stade Mohammed V',
        socialLinks: {
          facebook: 'https://facebook.com/winnersofficiel',
          instagram: 'https://instagram.com/winners_officiel',
        },
        tifos: [],
        gallery: [],
        coordinates: { lat: 33.5731, lng: -7.5898 },
        views: 72000,
        likes: 31000,
        isVerified: true,
        isFeatured: false,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Sur Oscura',
        slug: 'sur-oscura',
        club: 'Barcelona SC',
        city: 'Guayaquil',
        country: 'Ecuador',
        countryCode: 'EC',
        yearFounded: 1995,
        history: `Sur Oscura (Dark South) is the main Barra Brava of Barcelona Sporting Club from Ecuador. Founded in 1995, they occupy the south end of Estadio Monumental.

They are known for their passionate support, massive banners, and the famous "Marea Amarilla" (Yellow Tide) that fills the stadium on match days.`,
        values: ['Passion', 'Loyalty', 'Brotherhood'],
        motto: 'Idolo del Ecuador',
        colors: ['Yellow', 'Black'],
        symbols: ['Bull'],
        logo: '/images/groups/sur-oscura.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '40K+',
        stadium: 'Estadio Monumental',
        socialLinks: {},
        tifos: [],
        gallery: [],
        coordinates: { lat: -2.1527, lng: -79.8772 },
        views: 45000,
        likes: 18000,
        isVerified: true,
        isFeatured: false,
        author: adminUser._id,
        isActive: true,
      },
      // ASIA
      {
        name: 'Ultras Malaya',
        slug: 'ultras-malaya',
        club: 'Malaysia National Team',
        city: 'Kuala Lumpur',
        country: 'Malaysia',
        countryCode: 'MY',
        yearFounded: 2007,
        history: `Ultras Malaya is the largest and most organized Ultra group in Southeast Asia, founded in 2007 to support the Malaysian national football team.

Known for their incredible atmosphere at Bukit Jalil National Stadium, they have transformed Malaysian football support into a spectacular display of national pride and passion. Their iconic tiger mascot and coordinated yellow sea of supporters have made them famous across Asia.`,
        values: ['Patriotism', 'Unity', 'Passion'],
        motto: 'Harimau Malaya',
        colors: ['Yellow', 'Black'],
        logo: '/images/groups/ultraslan.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '30K+',
        stadium: 'Bukit Jalil National Stadium',
        coordinates: { lat: 3.0546, lng: 101.6913 },
        views: 35000,
        likes: 12000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Jakmania',
        slug: 'jakmania',
        club: 'Persija Jakarta',
        city: 'Jakarta',
        country: 'Indonesia',
        countryCode: 'ID',
        yearFounded: 1997,
        history: `Jakmania is one of the largest football supporter groups in Asia, founded in 1997 with over 60,000 registered members supporting Persija Jakarta.

They are known for their orange-colored displays and passionate chanting that fills Jakarta International Stadium. Jakmania has become a cultural phenomenon in Indonesia, representing the identity and pride of the capital city.`,
        values: ['Brotherhood', 'Loyalty', 'Spirit'],
        motto: 'Persija Satu',
        colors: ['Orange', 'Blue'],
        logo: '/images/groups/gavioes-da-fiel.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '60K+',
        stadium: 'Jakarta International Stadium',
        coordinates: { lat: -6.1211, lng: 106.8168 },
        views: 52000,
        likes: 21000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Urawa Boys',
        slug: 'urawa-boys',
        club: 'Urawa Red Diamonds',
        city: 'Saitama',
        country: 'Japan',
        countryCode: 'JP',
        yearFounded: 1996,
        history: `Urawa Boys are known for creating the most intense atmosphere in Japanese football, founded in 1996 to support Urawa Red Diamonds.

Famous for their coordinated chanting, impressive displays, and unwavering support, they have helped make Saitama Stadium one of the most intimidating venues in Asia. Their dedication has inspired supporter culture across Japan and Asia.`,
        values: ['Discipline', 'Passion', 'Unity'],
        motto: 'We Are Reds',
        colors: ['Red', 'White'],
        logo: '/images/groups/curva-sud-milano.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '25K+',
        stadium: 'Saitama Stadium',
        coordinates: { lat: 35.8656, lng: 139.6375 },
        views: 38000,
        likes: 15000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      // MORE EUROPE
      {
        name: 'Torcida Split',
        slug: 'torcida-split',
        club: 'Hajduk Split',
        city: 'Split',
        country: 'Croatia',
        countryCode: 'HR',
        yearFounded: 1950,
        history: `Torcida Split is recognized as the oldest fan group in Europe and possibly the world, founded on October 28, 1950, inspired by Brazilian fans.

Named after the Brazilian torcidas, they set the template for organized football support worldwide. Their incredible displays at Stadion Poljud and unwavering dedication to Hajduk Split have made them legends of supporter culture.`,
        values: ['Tradition', 'Pride', 'Brotherhood'],
        motto: 'Hajduk zivi vjecno',
        colors: ['White', 'Blue'],
        logo: '/images/groups/the-kop.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '40K+',
        stadium: 'Stadion Poljud',
        coordinates: { lat: 43.5239, lng: 16.4378 },
        views: 42000,
        likes: 18000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Delije',
        slug: 'delije',
        club: 'Red Star Belgrade',
        city: 'Belgrade',
        country: 'Serbia',
        countryCode: 'RS',
        yearFounded: 1989,
        history: `Delije (Heroes) are the legendary ultras of Red Star Belgrade, founded in 1989 and known for their intense atmosphere and spectacular pyrotechnic displays.

Their support at Marakana stadium is legendary in European football, creating one of the most intimidating atmospheres in the world. They played a crucial role in Red Star's 1991 European Cup victory.`,
        values: ['Honor', 'Courage', 'Loyalty'],
        motto: 'Only the stars in the sky know how much I love you',
        colors: ['Red', 'White'],
        logo: '/images/groups/curva-sud-milano.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '50K+',
        stadium: 'Marakana',
        coordinates: { lat: 44.7833, lng: 20.4619 },
        views: 55000,
        likes: 24000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Gate 13',
        slug: 'gate-13',
        club: 'Panathinaikos',
        city: 'Athens',
        country: 'Greece',
        countryCode: 'GR',
        yearFounded: 1966,
        history: `Gate 13 (Thyra 13) is one of the oldest Ultra groups in the world, founded in 1966 to support Panathinaikos FC.

Named after the gate they occupy at the stadium, they are known for their iconic green flares, passionate chanting, and incredible atmosphere at OAKA Stadium. Gate 13 has influenced supporter culture across the Balkans and Mediterranean.`,
        values: ['Passion', 'History', 'Green Pride'],
        motto: 'Panathinaikos is my religion',
        colors: ['Green', 'White'],
        logo: '/images/groups/green-boys-2005.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '45K+',
        stadium: 'OAKA Stadium',
        coordinates: { lat: 38.0365, lng: 23.7878 },
        views: 48000,
        likes: 20000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Legia Warsaw Ultras',
        slug: 'legia-ultras',
        club: 'Legia Warsaw',
        city: 'Warsaw',
        country: 'Poland',
        countryCode: 'PL',
        yearFounded: 1995,
        history: `Legia Warsaw Ultras are famous for their massive tifos and choreographies that have won multiple international tifo awards.

Founded in 1995, they have transformed Polish Army Stadium into one of the most visually spectacular venues in European football. Their creativity and organization in creating stadium-wide displays has earned them respect worldwide.`,
        values: ['Pride', 'Creativity', 'Unity'],
        motto: 'My tylko Legia',
        colors: ['Green', 'White', 'Red'],
        logo: '/images/groups/green-boys-2005.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '35K+',
        stadium: 'Polish Army Stadium',
        coordinates: { lat: 52.2396, lng: 21.0454 },
        views: 41000,
        likes: 17000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Ultras Sur',
        slug: 'ultras-sur',
        club: 'Real Madrid',
        city: 'Madrid',
        country: 'Spain',
        countryCode: 'ES',
        yearFounded: 1980,
        history: `Ultras Sur was the main Ultra group of Real Madrid, founded in 1980 and occupying the south end of Santiago Bernabéu stadium.

For decades, they created an intimidating atmosphere that helped Real Madrid dominate Spanish and European football. Their chants, displays, and unwavering support made them one of the most recognized Ultra groups in Spain.`,
        values: ['Madridismo', 'Passion', 'Honor'],
        motto: 'Hala Madrid',
        colors: ['White', 'Purple'],
        logo: '/images/groups/the-kop.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '30K+',
        stadium: 'Santiago Bernabéu',
        coordinates: { lat: 40.4530, lng: -3.6883 },
        views: 62000,
        likes: 28000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Boixos Nois',
        slug: 'boixos-nois',
        club: 'FC Barcelona',
        city: 'Barcelona',
        country: 'Spain',
        countryCode: 'ES',
        yearFounded: 1981,
        history: `Boixos Nois (Crazy Boys in Catalan) were the Ultra group of FC Barcelona, founded in 1981 and known for their strong Catalan identity.

They occupied the Gol Nord section of Camp Nou and became synonymous with the passionate, political side of Barcelona support. Their presence transformed the atmosphere at one of the world's largest stadiums.`,
        values: ['Catalanism', 'Passion', 'Pride'],
        motto: 'Més que un club',
        colors: ['Blue', 'Red'],
        logo: '/images/groups/curva-sud-milano.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '25K+',
        stadium: 'Camp Nou',
        coordinates: { lat: 41.3809, lng: 2.1228 },
        views: 58000,
        likes: 25000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Collectif Ultras Paris',
        slug: 'cup-paris',
        club: 'Paris Saint-Germain',
        city: 'Paris',
        country: 'France',
        countryCode: 'FR',
        yearFounded: 2016,
        history: `Collectif Ultras Paris (CUP) was formed in 2016 after the dissolution of previous PSG Ultra groups, bringing back authentic Ultra culture to Parc des Princes.

They have successfully revived the passionate atmosphere that had been missing from PSG home games, creating impressive tifos and coordinated chanting that honors the traditions of Parisian football support.`,
        values: ['Unity', 'Passion', 'Paris Pride'],
        motto: 'Ici c\'est Paris',
        colors: ['Blue', 'Red', 'White'],
        logo: '/images/groups/brigata-curva-sud.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '20K+',
        stadium: 'Parc des Princes',
        coordinates: { lat: 48.8414, lng: 2.2530 },
        views: 47000,
        likes: 19000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      // MORE AFRICA
      {
        name: 'Ultras Eagles',
        slug: 'ultras-eagles',
        club: 'Al Ahli Cairo',
        city: 'Cairo',
        country: 'Egypt',
        countryCode: 'EG',
        yearFounded: 2012,
        history: `Ultras Eagles emerged as a major force in Egyptian football in 2012, known for their unwavering dedication to Al Ahli club.

Despite challenges facing Egyptian Ultra culture, they continue to represent the passionate side of Egyptian football support. Their creative displays, chants, and coordinated support have made them one of the most respected groups in the country.`,
        values: ['Eagle Spirit', 'Unity', 'Passion'],
        motto: 'Fly High Eagles',
        colors: ['Red', 'Gold'],
        logo: '/images/groups/ultras-ahlawy.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '40K+',
        stadium: 'Al Ahly Stadium',
        coordinates: { lat: 30.0444, lng: 31.2357 },
        views: 38000,
        likes: 16000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Mkachkhines',
        slug: 'mkachkhines-esperance',
        club: 'Espérance de Tunis',
        city: 'Tunis',
        country: 'Tunisia',
        countryCode: 'TN',
        yearFounded: 2002,
        history: `Mkachkhines is one of the most passionate Ultra groups in North Africa, founded in 2002 to support Espérance de Tunis.

Known for their intense "Blood and Gold" displays and incredible atmosphere at Stade Olympique de Radès, they have become one of the leading forces in African Ultra culture, inspiring supporter groups across the continent.`,
        values: ['Blood and Gold', 'Victory', 'Passion'],
        motto: 'Esperance Toujours',
        colors: ['Yellow', 'Red'],
        logo: '/images/groups/yellow-wall.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '35K+',
        stadium: 'Stade Olympique de Radès',
        coordinates: { lat: 36.7461, lng: 10.2792 },
        views: 32000,
        likes: 14000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Kaizer Chiefs Ultras',
        slug: 'kaizer-chiefs-ultras',
        club: 'Kaizer Chiefs',
        city: 'Johannesburg',
        country: 'South Africa',
        countryCode: 'ZA',
        yearFounded: 2005,
        history: `Kaizer Chiefs Ultras are the most organized Ultra group in South African football, founded in 2005 to bring European-style support to the Premier Soccer League.

Their passion for "Amakhosi" (The Chiefs) is legendary, creating incredible atmospheres at FNB Stadium. They have helped transform South African football culture with their organized displays and chanting.`,
        values: ['Amakhosi Pride', 'Unity', 'Passion'],
        motto: 'Love and Peace',
        colors: ['Gold', 'Black'],
        logo: '/images/groups/yellow-wall.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '50K+',
        stadium: 'FNB Stadium',
        coordinates: { lat: -26.2328, lng: 27.9825 },
        views: 44000,
        likes: 20000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      // MORE SOUTH AMERICA
      {
        name: 'Garra Blanca',
        slug: 'garra-blanca',
        club: 'Colo-Colo',
        city: 'Santiago',
        country: 'Chile',
        countryCode: 'CL',
        yearFounded: 1986,
        history: `Garra Blanca (White Claw) is the largest and most famous Barra Brava in Chile, founded in 1986 to support Colo-Colo, the most popular club in the country.

Their passionate support at Estadio Monumental David Arellano is legendary in South American football. Known for their incredible displays, non-stop chanting, and unwavering loyalty, they represent the heart and soul of Chilean football culture.`,
        values: ['White Claw', 'Passion', 'Unity'],
        motto: 'Colo-Colo Popular',
        colors: ['White', 'Black'],
        logo: '/images/groups/the-kop.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '45K+',
        stadium: 'Estadio Monumental',
        coordinates: { lat: -33.5028, lng: -70.6061 },
        views: 39000,
        likes: 17000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Comando SVR',
        slug: 'comando-svr',
        club: 'Universitario de Deportes',
        city: 'Lima',
        country: 'Peru',
        countryCode: 'PE',
        yearFounded: 1988,
        history: `Comando SVR is one of the oldest and most passionate Barras in Peru, founded in 1988 to support Universitario de Deportes.

They are known for creating an incredible atmosphere at Estadio Monumental, with their distinctive cream and red colors filling the stadium. Their dedication and organized support have made them one of the most respected supporter groups in South America.`,
        values: ['Cream Pride', 'Passion', 'Loyalty'],
        motto: 'La U Siempre',
        colors: ['Cream', 'Red'],
        logo: '/images/groups/curva-sud-milano.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '30K+',
        stadium: 'Estadio Monumental U',
        coordinates: { lat: -12.0564, lng: -76.9366 },
        views: 28000,
        likes: 12000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Los del Sur',
        slug: 'los-del-sur',
        club: 'Atlético Nacional',
        city: 'Medellín',
        country: 'Colombia',
        countryCode: 'CO',
        yearFounded: 1997,
        history: `Los del Sur is the main Barra Brava of Atlético Nacional, founded in 1997 and recognized as one of the most passionate supporter groups in Colombia.

Their green and white displays at Estadio Atanasio Girardot have become legendary in Colombian football. They are known for their creative tifos, powerful chants, and unwavering dedication to the club from Medellín.`,
        values: ['Green Pride', 'Passion', 'Unity'],
        motto: 'Nacional mi amor',
        colors: ['Green', 'White'],
        logo: '/images/groups/green-boys-2005.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '40K+',
        stadium: 'Estadio Atanasio Girardot',
        coordinates: { lat: 6.2571, lng: -75.5903 },
        views: 36000,
        likes: 15000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      // MIDDLE EAST
      {
        name: 'Ultras Yellow Dragons',
        slug: 'ultras-yellow-dragons',
        club: 'Al-Ittihad',
        city: 'Jeddah',
        country: 'Saudi Arabia',
        countryCode: 'SA',
        yearFounded: 2010,
        history: `Ultras Yellow Dragons are the main Ultra group supporting Al-Ittihad FC, founded in 2010 and bringing European Ultra culture to Saudi Arabia.

Their yellow and black displays at King Abdullah Sports City have transformed the matchday experience in Saudi football. They are pioneers of the Ultra movement in the Arabian Peninsula, inspiring similar groups across the Gulf region.`,
        values: ['Dragon Spirit', 'Unity', 'Passion'],
        motto: 'Forever Yellow',
        colors: ['Yellow', 'Black'],
        logo: '/images/groups/yellow-wall.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '25K+',
        stadium: 'King Abdullah Sports City',
        coordinates: { lat: 21.7183, lng: 39.1560 },
        views: 29000,
        likes: 11000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Ultras Persepolis',
        slug: 'ultras-persepolis',
        club: 'Persepolis FC',
        city: 'Tehran',
        country: 'Iran',
        countryCode: 'IR',
        yearFounded: 2006,
        history: `Ultras Persepolis bring incredible atmosphere to Azadi Stadium, founded in 2006 to support the most popular club in Iran.

Azadi Stadium, with a capacity of over 78,000, becomes a sea of red when Persepolis plays. Their passion, coordinated chanting, and massive displays have made them one of the largest and most influential Ultra groups in Asia.`,
        values: ['Red Army', 'Passion', 'Pride'],
        motto: 'Red is the color of life',
        colors: ['Red', 'White'],
        logo: '/images/groups/curva-sud-milano.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '60K+',
        stadium: 'Azadi Stadium',
        coordinates: { lat: 35.7281, lng: 51.2778 },
        views: 52000,
        likes: 23000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      // OCEANIA
      {
        name: 'The Cove',
        slug: 'the-cove',
        club: 'Sydney FC',
        city: 'Sydney',
        country: 'Australia',
        countryCode: 'AU',
        yearFounded: 2005,
        history: `The Cove is the main active supporter group of Sydney FC, founded in 2005 when the A-League began.

Known for their creative displays, coordinated chanting, and passionate support at Allianz Stadium, they have helped establish supporter culture in Australian football. They represent the most organized form of fan support in Oceania.`,
        values: ['Sky Blue Pride', 'Passion', 'Unity'],
        motto: 'Sydney is Sky Blue',
        colors: ['Sky Blue', 'Navy'],
        logo: '/images/groups/brigata-curva-sud.webp',
        coverImage: '/images/heroes/hero-stadium.webp',
        membersEstimate: '8K+',
        stadium: 'Allianz Stadium',
        coordinates: { lat: -33.8911, lng: 151.2247 },
        views: 18000,
        likes: 7000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      // NORTH AMERICA
      {
        name: 'Libres y Lokos',
        slug: 'libres-y-lokos',
        club: 'Tigres UANL',
        city: 'Monterrey',
        country: 'Mexico',
        countryCode: 'MX',
        yearFounded: 1996,
        history: `Libres y Lokos (Free and Crazy) is one of the most passionate supporter groups in Liga MX, founded in 1996 to support Tigres UANL.

Their incredible atmosphere at Estadio Universitario "El Volcán" is legendary in Mexican football. Known for their yellow displays, powerful chanting, and unwavering dedication to the team from Monterrey.`,
        values: ['Freedom', 'Madness', 'Passion'],
        motto: 'Soy Tigre',
        colors: ['Yellow', 'Blue'],
        logo: '/images/groups/yellow-wall.webp',
        coverImage: '/images/heroes/hero-crowd.webp',
        membersEstimate: '35K+',
        stadium: 'Estadio Universitario',
        coordinates: { lat: 25.7220, lng: -100.3139 },
        views: 42000,
        likes: 18000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
      {
        name: 'Barra Brava DC',
        slug: 'barra-brava-dc',
        club: 'D.C. United',
        city: 'Washington DC',
        country: 'United States',
        countryCode: 'US',
        yearFounded: 1996,
        history: `Barra Brava is the largest and oldest supporter group for D.C. United, founded in 1996 when MLS began.

They have been instrumental in bringing Latin American passion and supporter culture to Major League Soccer. Their chants, drums, and coordinated displays at Audi Field have made them pioneers of the supporter movement in the United States.`,
        values: ['Passion', 'Unity', 'Pride'],
        motto: 'Vamos United',
        colors: ['Black', 'Red'],
        logo: '/images/groups/curva-sud-milano.webp',
        coverImage: '/images/heroes/hero-flares.webp',
        membersEstimate: '5K+',
        stadium: 'Audi Field',
        coordinates: { lat: 38.8685, lng: -77.0128 },
        views: 15000,
        likes: 6000,
        isVerified: true,
        author: adminUser._id,
        isActive: true,
      },
    ]);

    console.log(`Created ${groups.length} Ultra groups`);

    // Create Articles
    console.log('Creating articles...');
    const articles = await Article.create([
      {
        title: 'GREEN BOYS 2005: Pioneers of Moroccan Ultra Culture',
        slug: 'green-boys-2005-pioneers',
        excerpt: 'How a group of young Raja supporters changed the landscape of football fandom in North Africa forever.',
        content: `## The Birth of a Movement

In 2005, something extraordinary happened in the stands of Stade Mohammed V in Casablanca. A group of passionate young Raja supporters decided to revolutionize the way football was experienced in Morocco.

## European Inspiration, African Soul

The founders of GREEN BOYS had witnessed the incredible atmospheres created by Italian Ultra groups during Champions League broadcasts. They were mesmerized by the coordinated chants, the spectacular tifos, and the unwavering dedication of these supporters.

## Legacy and Future

Today, GREEN BOYS 2005 remains at the forefront of African Ultra culture. They continue to innovate, to inspire, and to show the world that the passion for football knows no boundaries.`,
        coverImage: '/images/articles/article-1.webp',
        category: 'history',
        tags: ['Morocco', 'Raja Casablanca', 'GREEN BOYS 2005', 'North Africa', 'Pioneers'],
        author: contributorUser._id,
        relatedGroups: [groups[0]._id],
        status: 'published',
        publishedAt: new Date('2024-12-15'),
        views: 15420,
        likes: 2340,
        readTime: 12,
        isFeatured: true,
      },
      {
        title: 'The Art of Tifo: A Visual Revolution',
        slug: 'art-of-tifo',
        excerpt: 'From simple banners to stadium-wide masterpieces, how Ultras transformed football into visual art.',
        content: `## What is Tifo?

Tifo, derived from the Italian word for "typhoid fever" (describing the infectious passion of supporters), has evolved into an art form that transforms stadiums into living canvases.

## The Evolution of Tifo

From the early days of simple banners and flags, tifo has evolved into complex choreographies involving thousands of participants, months of preparation, and significant artistic skill.

## Modern Masterpieces

Today's tifos are engineering marvels, requiring precise coordination, weather considerations, and split-second timing to create maximum visual impact.`,
        coverImage: '/images/articles/article-2.webp',
        category: 'culture',
        tags: ['Tifo', 'Art', 'Visual Culture', 'Choreography'],
        author: contributorUser._id,
        relatedGroups: [],
        status: 'published',
        publishedAt: new Date('2024-12-10'),
        views: 12300,
        likes: 1890,
        readTime: 8,
        isFeatured: false,
      },
      {
        title: 'South American Passion: Barra Bravas History',
        slug: 'barra-bravas-history',
        excerpt: 'The origins and evolution of organized supporter groups in Argentina, Brazil, and beyond.',
        content: `## Origins in Argentina

The Barra Brava phenomenon began in Argentina in the 1950s and 1960s, evolving from informal supporter groups into highly organized factions.

## Spreading Across the Continent

The Barra Brava model spread throughout South America, adapting to local cultures while maintaining core elements of passionate, organized support.

## Cultural Impact

Beyond football, Barras have influenced music, fashion, and social movements across Latin America.`,
        coverImage: '/images/articles/article-3.webp',
        category: 'history',
        tags: ['South America', 'Argentina', 'Brazil', 'Barra Brava'],
        author: adminUser._id,
        relatedGroups: [groups[3]._id],
        status: 'published',
        publishedAt: new Date('2024-11-20'),
        views: 9800,
        likes: 1450,
        readTime: 15,
        isFeatured: false,
      },
    ]);

    console.log(`Created ${articles.length} articles`);

    // Create Timeline Events
    console.log('Creating timeline events...');
    const timelineEvents = await Timeline.create([
      {
        year: 1968,
        translations: [
          { locale: 'en', title: 'Birth of the Ultras Movement', description: 'The first organized Ultra groups emerge in Italian football stadiums.' },
          { locale: 'fr', title: 'Naissance du Mouvement Ultra', description: 'Les premiers groupes Ultra organisés émergent dans les stades italiens.' },
          { locale: 'ar', title: 'ولادة حركة الألتراس', description: 'ظهور أول مجموعات ألتراس منظمة في الملاعب الإيطالية.' },
        ],
        region: 'europe',
        location: 'Milan, Italy',
        countryCode: 'IT',
        group: 'Fossa dei Leoni',
        image: '/images/timeline/1968-milan.webp',
        isHighlight: true,
        order: 1,
      },
      {
        year: 2005,
        translations: [
          { locale: 'en', title: 'GREEN BOYS 2005 Founded', description: 'The first Ultra group in Morocco is founded, pioneering the movement in North Africa.' },
          { locale: 'fr', title: 'Fondation de GREEN BOYS 2005', description: 'Le premier groupe Ultra au Maroc est fondé, pionnier du mouvement en Afrique du Nord.' },
          { locale: 'ar', title: 'تأسيس GREEN BOYS 2005', description: 'تأسيس أول مجموعة ألتراس في المغرب، رائدة الحركة في شمال أفريقيا.' },
        ],
        region: 'northAfrica',
        location: 'Casablanca, Morocco',
        countryCode: 'MA',
        group: 'GREEN BOYS 2005',
        groupSlug: 'green-boys-2005',
        image: '/images/timeline/2000-africa.webp',
        isHighlight: true,
        order: 2,
      },
      {
        year: 2007,
        translations: [
          { locale: 'en', title: 'Egyptian Ultras Emerge', description: 'Ultras Ahlawy is founded, marking the expansion of Ultra culture in North Africa.' },
          { locale: 'fr', title: 'Émergence des Ultras Égyptiens', description: 'Ultras Ahlawy est fondé, marquant l\'expansion de la culture Ultra en Afrique du Nord.' },
          { locale: 'ar', title: 'ظهور الألتراس المصريين', description: 'تأسيس ألتراس أهلاوي، مما يمثل توسع ثقافة الألتراس في شمال أفريقيا.' },
        ],
        region: 'northAfrica',
        location: 'Cairo, Egypt',
        countryCode: 'EG',
        group: 'Ultras Ahlawy',
        image: '/images/timeline/2000-africa.webp',
        isHighlight: true,
        order: 3,
      },
    ]);

    console.log(`Created ${timelineEvents.length} timeline events`);

    // Create Glossary Terms
    console.log('Creating glossary terms...');
    const glossaryTerms = await GlossaryTerm.create([
      {
        translations: [
          { locale: 'en', term: 'Tifo', definition: 'A coordinated display by supporters, typically involving large banners, flags, and choreographed actions.' },
          { locale: 'fr', term: 'Tifo', definition: 'Un affichage coordonné par les supporters, impliquant généralement de grandes banderoles, drapeaux et actions chorégraphiées.' },
          { locale: 'ar', term: 'تيفو', definition: 'عرض منسق من قبل المشجعين، يتضمن عادةً لافتات كبيرة وأعلام وأعمال استعراضية.' },
        ],
        origin: 'Italian',
        category: 'tifo',
      },
      {
        translations: [
          { locale: 'en', term: 'Curva', definition: 'The curved end section of a stadium, traditionally occupied by the most passionate supporters.' },
          { locale: 'fr', term: 'Curva', definition: 'La section courbe en bout de stade, traditionnellement occupée par les supporters les plus passionnés.' },
          { locale: 'ar', term: 'كورفا', definition: 'القسم المنحني في نهاية الملعب، يحتله تقليديًا المشجعون الأكثر شغفًا.' },
        ],
        origin: 'Italian',
        category: 'general',
      },
      {
        translations: [
          { locale: 'en', term: 'Barra Brava', definition: 'Organized supporter groups in South American football, known for their passionate and vocal support.' },
          { locale: 'fr', term: 'Barra Brava', definition: 'Groupes de supporters organisés dans le football sud-américain, connus pour leur soutien passionné et vocal.' },
          { locale: 'ar', term: 'بارا برافا', definition: 'مجموعات مشجعين منظمة في كرة القدم بأمريكا الجنوبية، معروفة بدعمها الحماسي والصوتي.' },
        ],
        origin: 'Spanish',
        category: 'organization',
      },
      {
        translations: [
          { locale: 'en', term: 'Capo', definition: 'The leader who directs chants and coordinates supporter activities during matches.' },
          { locale: 'fr', term: 'Capo', definition: 'Le leader qui dirige les chants et coordonne les activités des supporters pendant les matchs.' },
          { locale: 'ar', term: 'كابو', definition: 'القائد الذي يوجه الهتافات وينسق أنشطة المشجعين خلال المباريات.' },
        ],
        origin: 'Italian',
        category: 'organization',
      },
      {
        translations: [
          { locale: 'en', term: 'Ultras', definition: 'Organized and passionate supporter groups known for their elaborate displays and intense support.' },
          { locale: 'fr', term: 'Ultras', definition: 'Groupes de supporters organisés et passionnés, connus pour leurs affichages élaborés et leur soutien intense.' },
          { locale: 'ar', term: 'ألتراس', definition: 'مجموعات مشجعين منظمة وشغوفة معروفة بعروضها المتقنة ودعمها المكثف.' },
        ],
        origin: 'Latin',
        category: 'general',
      },
    ]);

    console.log(`Created ${glossaryTerms.length} glossary terms`);

    console.log('\n✅ Database seeded successfully!');
    console.log('\nCreated:');
    console.log(`- 2 users (admin@mouvement.com / contributor@mouvement.com)`);
    console.log(`- ${groups.length} Ultra groups`);
    console.log(`- ${articles.length} articles`);
    console.log(`- ${timelineEvents.length} timeline events`);
    console.log(`- ${glossaryTerms.length} glossary terms`);
    console.log('\nAdmin login: admin@mouvement.com / admin123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Articles Seed Data - Multilingual Cultural Content
export const articlesData = [
  // ==================== CULTURE ARTICLES ====================
  {
    slug: 'art-of-tifo-visual-revolution',
    category: 'culture',
    status: 'published',
    isFeatured: true,
    title: {
      en: 'The Art of Tifo: A Visual Revolution in Football Stadiums',
      fr: 'L\'Art du Tifo : Une Révolution Visuelle dans les Stades',
      ar: 'فن التيفو: ثورة بصرية في ملاعب كرة القدم',
      it: 'L\'Arte del Tifo: Una Rivoluzione Visiva negli Stadi',
      es: 'El Arte del Tifo: Una Revolución Visual en los Estadios',
      'pt-br': 'A Arte do Tifo: Uma Revolução Visual nos Estádios'
    },
    excerpt: {
      en: 'Exploring how massive choreographed displays transformed football terraces into open-air galleries.',
      fr: 'Découvrir comment les affichages chorégraphiés massifs ont transformé les tribunes en galeries à ciel ouvert.',
      ar: 'استكشاف كيف حولت العروض المنسقة الضخمة مدرجات كرة القدم إلى معارض في الهواء الطلق.',
      it: 'Esplorando come le coreografie di massa hanno trasformato le curve in gallerie a cielo aperto.',
      es: 'Explorando cómo las coreografías masivas transformaron las gradas en galerías al aire libre.',
      'pt-br': 'Explorando como as coreografias massivas transformaram as arquibancadas em galerias a céu aberto.'
    },
    content: {
      en: `
# The Art of Tifo: A Visual Revolution

## Origins: From Italy to the World

The word "tifo" comes from the Italian word for "typhus fever," describing the passionate delirium of supporters. What started in Italian stadiums in the 1970s has evolved into one of the most spectacular art forms in sports.

## The Making of a Tifo

Creating a tifo is a monumental undertaking that requires:

### Planning
- Months of design work
- Coordination with the group leadership
- Material sourcing and funding

### Materials
- Massive fabric sheets (sometimes covering entire stands)
- Thousands of colored cards
- Pyrotechnics (where legal)
- Poles and structural supports

### Execution
- Hundreds of volunteers
- Precise timing and coordination
- Rehearsals and dry runs

## Famous Tifos in History

### "La Bombonera Late" - Boca Juniors
The entire stadium pulsating as one, with choreographed cards creating a wave effect.

### Green Boys' African Champions Display
A 3D tifo celebrating Raja's continental triumph, featuring the CAF trophy emerging from green flames.

### Curva Sud's Champions League Night
The famous "Milan, Solo Con Te" display that lit up San Siro.

## The Cultural Impact

Tifos have transcended sport to become:
- A form of political expression (where appropriate)
- A celebration of local identity
- A way to honor legends and history
- A global art movement

## The Future of Tifo Art

With LED technology, drone displays, and projection mapping, the tifo continues to evolve while staying true to its grassroots origins.
      `,
      fr: `
# L'Art du Tifo : Une Révolution Visuelle

## Origines : De l'Italie au Monde

Le mot "tifo" vient de l'italien signifiant "fièvre typhoïde", décrivant le délire passionné des supporters. Ce qui a commencé dans les stades italiens dans les années 1970 est devenu l'une des formes d'art les plus spectaculaires du sport.

## La Création d'un Tifo

Créer un tifo est une entreprise monumentale qui nécessite :

### Planification
- Des mois de travail de conception
- Coordination avec les dirigeants du groupe
- Approvisionnement en matériaux et financement

### Matériaux
- D'immenses draps en tissu
- Des milliers de cartons colorés
- Pyrotechnie (là où c'est légal)
- Poteaux et supports structurels

### Exécution
- Des centaines de bénévoles
- Timing et coordination précis
- Répétitions

## Impact Culturel

Les tifos sont devenus :
- Une forme d'expression culturelle
- Une célébration de l'identité locale
- Un hommage aux légendes et à l'histoire
      `,
      ar: `
# فن التيفو: ثورة بصرية

## الأصول: من إيطاليا إلى العالم

تأتي كلمة "تيفو" من الكلمة الإيطالية التي تعني "حمى التيفوس"، واصفة الهذيان العاطفي للمشجعين. ما بدأ في الملاعب الإيطالية في السبعينيات تطور ليصبح أحد أكثر أشكال الفن إثارة في الرياضة.

## صنع التيفو

إنشاء تيفو هو مهمة ضخمة تتطلب:

### التخطيط
- أشهر من أعمال التصميم
- التنسيق مع قيادة المجموعة
- توفير المواد والتمويل

### المواد
- ألواح قماشية ضخمة
- آلاف البطاقات الملونة
- الألعاب النارية (حيث يكون قانونياً)

## التأثير الثقافي

أصبحت التيفوهات:
- شكلاً من أشكال التعبير الثقافي
- احتفالاً بالهوية المحلية
- طريقة لتكريم الأساطير والتاريخ
      `
    },
    readTime: 8,
    tags: ['tifo', 'art', 'choreography', 'culture'],
    publishedAt: new Date('2024-01-15')
  },

  {
    slug: 'history-of-ultra-movement',
    category: 'history',
    status: 'published',
    isFeatured: true,
    title: {
      en: 'The History of the Ultra Movement: From Milan to the World',
      fr: 'L\'Histoire du Mouvement Ultra : De Milan au Monde',
      ar: 'تاريخ حركة الألتراس: من ميلان إلى العالم',
      it: 'La Storia del Movimento Ultras: Da Milano al Mondo',
      es: 'La Historia del Movimiento Ultra: De Milán al Mundo',
      'pt-br': 'A História do Movimento Ultra: De Milão ao Mundo'
    },
    excerpt: {
      en: 'Tracing the origins of organized supporter culture from 1960s Italy to a global phenomenon.',
      fr: 'Retracer les origines de la culture des supporters organisés depuis l\'Italie des années 1960.',
      ar: 'تتبع أصول ثقافة المشجعين المنظمين من إيطاليا في الستينيات.',
      it: 'Tracciando le origini della cultura ultras dall\'Italia degli anni \'60 a fenomeno globale.',
      es: 'Trazando los orígenes de la cultura del aficionado organizado desde Italia en los años 60.',
      'pt-br': 'Traçando as origens da cultura de torcedores organizados desde a Itália dos anos 60.'
    },
    content: {
      en: `
# The History of the Ultra Movement

## The Birth (1960s - 1970s)

The Ultra movement was born in Italy during the late 1960s. The term "ultras" first appeared at AC Milan's Curva Sud in 1968, when young supporters wanted to create a more organized, passionate form of support.

### Key Milestones

**1968** - Formation of Fossa dei Leoni (AC Milan)
**1969** - Birth of Curva Nord Inter
**1971** - Hellas Verona creates first organized Ultra group outside major cities
**1972** - Curva A Napoli established
**1973** - Sampdoria's Ultras Tito Cucchiaroni formed

## The Italian Model

Italian Ultras established the blueprint:
- Organized groups with clear structure
- Choreographed support (tifo)
- Flags, banners, and symbols
- Call-and-response chanting
- Territory (the "curva")

## Spread Across Europe (1980s)

### Germany
The Bundesliga adopted Ultra culture in the early 1980s, with groups like:
- Fortuna Eagles (Fortuna Düsseldorf)
- Ultras Gelsenkirchen (Schalke 04)

### Spain
Spanish clubs embraced the model:
- Ultras Sur (Real Madrid) - 1980
- Boixos Nois (Barcelona) - 1981

### France
PSG and Marseille led the French Ultra scene.

## Global Expansion (1990s - 2000s)

### North Africa
Morocco and Egypt became Ultra hotbeds:
- GREEN BOYS 2005 and Winners (Morocco)
- Ultras Ahlawy and White Knights (Egypt)

### South America
While South America had its own "barra brava" tradition, European Ultra elements merged with local culture.

### Turkey
Turkish supporters created a unique blend of Ultra culture with incredible passion.

## The Digital Age (2010s - Present)

Social media transformed Ultra culture:
- Global connections between groups
- Instant sharing of tifos
- Documentation of history
- New challenges for tradition

## Core Values That Remain

1. **Unconditional Support** - Through wins and losses
2. **Independence** - From club management
3. **Creativity** - Always innovating
4. **Community** - Brotherhood and sisterhood
5. **Identity** - Representing the city and culture
      `,
      it: `
# La Storia del Movimento Ultras

## La Nascita (1960-1970)

Il movimento Ultras nasce in Italia alla fine degli anni '60. Il termine "ultras" appare per la prima volta alla Curva Sud dell'AC Milan nel 1968, quando giovani tifosi vollero creare una forma di tifo più organizzata e passionale.

### Tappe Fondamentali

**1968** - Formazione della Fossa dei Leoni (AC Milan)
**1969** - Nascita della Curva Nord Inter
**1972** - Nasce la Curva A Napoli
**1973** - Formazione degli Ultras Tito Cucchiaroni (Sampdoria)

## Il Modello Italiano

Gli Ultras italiani stabilirono il modello:
- Gruppi organizzati con struttura chiara
- Tifo coreografato
- Bandiere, striscioni e simboli
- Cori a risposta
- Il territorio (la "curva")

## Valori Fondamentali

1. **Supporto Incondizionato** - Nelle vittorie e nelle sconfitte
2. **Indipendenza** - Dalla dirigenza del club
3. **Creatività** - Sempre innovando
4. **Comunità** - Fratellanza
5. **Identità** - Rappresentare la città e la cultura
      `
    },
    readTime: 12,
    tags: ['history', 'italy', 'origins', 'ultra'],
    publishedAt: new Date('2024-01-10')
  },

  {
    slug: 'casablanca-derby-tale-two-colors',
    category: 'rivalry',
    status: 'published',
    isFeatured: true,
    title: {
      en: 'The Casablanca Derby: A Tale of Two Colors',
      fr: 'Le Derby de Casablanca : L\'Histoire de Deux Couleurs',
      ar: 'ديربي الدار البيضاء: حكاية لونين',
      it: 'Il Derby di Casablanca: Una Storia di Due Colori',
      es: 'El Derby de Casablanca: Una Historia de Dos Colores',
      'pt-br': 'O Derby de Casablanca: Uma História de Duas Cores'
    },
    excerpt: {
      en: 'Inside Africa\'s most intense football rivalry between Raja and Wydad.',
      fr: 'Au cœur de la rivalité footballistique la plus intense d\'Afrique.',
      ar: 'داخل أعنف منافسة كروية في أفريقيا بين الرجاء والوداد.',
      it: 'All\'interno della rivalità calcistica più intensa d\'Africa.',
      es: 'Dentro de la rivalidad futbolística más intensa de África.',
      'pt-br': 'Dentro da rivalidade futebolística mais intensa da África.'
    },
    content: {
      en: `
# The Casablanca Derby: A Tale of Two Colors

## Green vs Red: More Than Football

In the heart of Morocco's economic capital, two giants share the same stadium but exist in completely different worlds. The Derby de Casablanca between Raja Club Athletic (green) and Wydad Athletic Club (red) is considered one of the most passionate derbies in world football.

## The Origins

### Raja Club Athletic (Founded 1949)
- Colors: Green and White
- Nickname: "The Eagles"
- Ultras: GREEN BOYS 2005, Ultras Eagles
- Identity: Working-class, rebellious spirit

### Wydad Athletic Club (Founded 1937)
- Colors: Red and White
- Nickname: "The Lions"
- Ultras: Winners
- Identity: Historic, establishment roots

## The Atmosphere

When these two meet at Stade Mohamed V:
- 80,000+ spectators
- Both ends of the stadium become seas of color
- Elaborate tifo displays planned months in advance
- Non-stop singing for 90+ minutes

## Famous Derby Moments

### The Green Tsunami (2019)
GREEN BOYS unveiled a massive tifo covering their entire stand, depicting an eagle rising from emerald flames.

### Winners' Response (2019)
A counter-tifo showing a roaring lion with "Kings of Casablanca" written in Arabic.

## The Cultural Significance

This derby represents:
- The struggle between different parts of Moroccan society
- A creative competition between Ultra groups
- A source of pride for the entire African continent
- Proof that passion knows no bounds

## Mutual Respect

Despite the intense rivalry, there are unwritten rules:
- No violence between organized groups
- Competition through creativity, not destruction
- Shared love for the city of Casablanca
      `,
      ar: `
# ديربي الدار البيضاء: حكاية لونين

## الأخضر ضد الأحمر: أكثر من مجرد كرة قدم

في قلب العاصمة الاقتصادية للمغرب، يتقاسم عملاقان نفس الملعب لكنهما يعيشان في عالمين مختلفين تماماً. يعتبر ديربي الدار البيضاء بين نادي الرجاء الرياضي (الأخضر) والوداد الرياضي (الأحمر) من أكثر الديربيات حماساً في كرة القدم العالمية.

## الأصول

### نادي الرجاء الرياضي (تأسس 1949)
- الألوان: الأخضر والأبيض
- اللقب: "النسور"
- الألتراس: غرين بويز 2005، ألتراس إيغلز
- الهوية: الطبقة العاملة، روح التمرد

### الوداد الرياضي (تأسس 1937)
- الألوان: الأحمر والأبيض
- اللقب: "الأسود"
- الألتراس: وينرز
- الهوية: تاريخية، جذور راسخة

## الأجواء

عندما يلتقي الفريقان في ملعب محمد الخامس:
- أكثر من 80,000 متفرج
- طرفا الملعب يتحولان إلى بحور من الألوان
- عروض تيفو مخططة قبل أشهر
- غناء متواصل لأكثر من 90 دقيقة
      `,
      fr: `
# Le Derby de Casablanca : L'Histoire de Deux Couleurs

## Vert contre Rouge : Plus que du Football

Au cœur de la capitale économique du Maroc, deux géants partagent le même stade mais vivent dans des mondes complètement différents. Le Derby de Casablanca entre le Raja Club Athletic (vert) et le Wydad Athletic Club (rouge) est considéré comme l'un des derbys les plus passionnés du football mondial.

## Les Origines

### Raja Club Athletic (Fondé en 1949)
- Couleurs : Vert et Blanc
- Surnom : "Les Aigles"
- Ultras : GREEN BOYS 2005, Ultras Eagles
- Identité : Classe ouvrière, esprit rebelle

### Wydad Athletic Club (Fondé en 1937)
- Couleurs : Rouge et Blanc
- Surnom : "Les Lions"
- Ultras : Winners
- Identité : Historique, racines établies

## L'Atmosphère

Quand ces deux équipes se rencontrent au Stade Mohamed V :
- Plus de 80 000 spectateurs
- Les deux tribunes deviennent des océans de couleurs
- Des tifos élaborés préparés des mois à l'avance
- Chants non-stop pendant plus de 90 minutes
      `
    },
    readTime: 10,
    tags: ['derby', 'morocco', 'raja', 'wydad', 'casablanca'],
    publishedAt: new Date('2024-01-20')
  },

  {
    slug: 'south-american-passion-barra-bravas',
    category: 'history',
    status: 'published',
    isFeatured: false,
    title: {
      en: 'South American Passion: The History of Barras Bravas',
      fr: 'Passion Sud-Américaine : L\'Histoire des Barras Bravas',
      ar: 'الشغف الأمريكي الجنوبي: تاريخ الباراس برافاس',
      it: 'Passione Sudamericana: La Storia delle Barras Bravas',
      es: 'Pasión Sudamericana: La Historia de las Barras Bravas',
      'pt-br': 'Paixão Sul-Americana: A História das Torcidas Organizadas'
    },
    content: {
      en: `
# South American Passion: The History of Barras Bravas

## A Different Tradition

While Europe developed the Ultra movement, South America created its own unique supporter culture: the Barras Bravas.

## Origins in Argentina

The term "barra brava" (fierce gang) originated in Argentina in the 1950s and 60s:
- La 12 (Boca Juniors) - The most famous
- Los Borrachos del Tablón (River Plate)
- La Guardia Imperial (Racing Club)

## Key Characteristics

### The Aguante
Central to barra culture is "aguante" - the ability to endure, to keep singing, to never abandon your team regardless of results.

### The Trapos
Flags (trapos) are sacred. Losing a flag to a rival is the ultimate humiliation.

### Position in Stadium
The barra occupies the "popular" end - the cheapest tickets, the standing areas, the heart of support.

## Brazil's Torcidas Organizadas

Brazilian supporter culture developed slightly differently:
- Gaviões da Fiel (Corinthians) - World's largest
- Mancha Verde (Palmeiras)
- Torcida Jovem (Flamengo)

These groups also run carnival schools, making them cultural institutions.

## The Influence

South American passion has influenced:
- European Ultra movements (chanting style)
- Supporter movements in Asia
- The global understanding of what "passion" means in football
      `,
      es: `
# Pasión Sudamericana: La Historia de las Barras Bravas

## Una Tradición Diferente

Mientras Europa desarrollaba el movimiento Ultra, Sudamérica creó su propia cultura de aficionados: las Barras Bravas.

## Orígenes en Argentina

El término "barra brava" se originó en Argentina en los años 50 y 60:
- La 12 (Boca Juniors) - La más famosa
- Los Borrachos del Tablón (River Plate)
- La Guardia Imperial (Racing Club)

## Características Clave

### El Aguante
Central en la cultura barra es el "aguante" - la capacidad de soportar, seguir cantando, nunca abandonar a tu equipo sin importar los resultados.

### Los Trapos
Las banderas (trapos) son sagradas. Perder una bandera ante un rival es la humillación máxima.
      `,
      'pt-br': `
# Paixão Sul-Americana: A História das Torcidas Organizadas

## Uma Tradição Diferente

Enquanto a Europa desenvolvia o movimento Ultra, a América do Sul criou sua própria cultura de torcedores: as Barras Bravas e Torcidas Organizadas.

## Origens na Argentina

O termo "barra brava" originou-se na Argentina nos anos 50 e 60:
- La 12 (Boca Juniors) - A mais famosa
- Los Borrachos del Tablón (River Plate)

## As Torcidas Organizadas do Brasil

A cultura de torcedores brasileiros desenvolveu-se de forma ligeiramente diferente:
- Gaviões da Fiel (Corinthians) - A maior do mundo
- Mancha Verde (Palmeiras)
- Torcida Jovem (Flamengo)

Esses grupos também administram escolas de samba, tornando-os instituições culturais.
      `
    },
    readTime: 15,
    tags: ['south-america', 'argentina', 'brazil', 'barra-brava'],
    publishedAt: new Date('2024-01-08')
  },

  {
    slug: 'interview-green-boys-leaders',
    category: 'interview',
    status: 'published',
    isFeatured: false,
    title: {
      en: 'Interview: The Capos of GREEN BOYS 2005',
      fr: 'Interview : Les Capos de GREEN BOYS 2005',
      ar: 'مقابلة: قادة غرين بويز 2005',
      it: 'Intervista: I Capo di GREEN BOYS 2005',
      es: 'Entrevista: Los Capos de GREEN BOYS 2005',
      'pt-br': 'Entrevista: Os Capos do GREEN BOYS 2005'
    },
    content: {
      en: `
# Interview: The Capos of GREEN BOYS 2005

*An exclusive conversation with the leadership of Africa's most influential Ultra group*

## On the Founding

**Q: How did GREEN BOYS start?**

"We were young, passionate about Raja, and frustrated with the state of supporter culture in 2005. We saw what was happening in Italy, in Germany, and we thought: Morocco deserves this too. So on September 13, 2005, in Derb Sultan, we created GREEN BOYS."

## On Creating Tifos

**Q: Walk us through creating your famous tifos.**

"It starts months before. Someone has an idea - maybe inspired by a Raja legend, a historical moment, or just pure creativity. Then the artists sketch it out. We source materials - sometimes from Europe, sometimes we make them ourselves. Finally, on match day, we have hundreds of members executing perfectly."

## On What Ultra Means

**Q: What does being an Ultra mean to you?**

"It's not just about football. It's about identity, about creativity, about pushing boundaries. When we create a tifo, we're artists. When we chant for 90 minutes, we're musicians. When we travel across Africa, we're ambassadors. Ultra is a lifestyle."

## On the Future

**Q: Where do you see Ultra culture going?**

"The core will never change - passion, creativity, supporting your team unconditionally. But we'll keep innovating. New technologies, new forms of expression. We want to inspire the next generation while respecting our traditions."
      `,
      fr: `
# Interview : Les Capos de GREEN BOYS 2005

*Une conversation exclusive avec la direction du groupe Ultra le plus influent d'Afrique*

## Sur la Fondation

**Q : Comment GREEN BOYS a-t-il commencé ?**

"Nous étions jeunes, passionnés par le Raja, et frustrés par l'état de la culture supporter en 2005. Nous avons vu ce qui se passait en Italie, en Allemagne, et nous avons pensé : le Maroc mérite ça aussi. Alors le 13 septembre 2005, à Derb Sultan, nous avons créé GREEN BOYS."

## Sur la Création des Tifos

**Q : Expliquez-nous comment vous créez vos fameux tifos.**

"Ça commence des mois avant. Quelqu'un a une idée - peut-être inspirée par une légende du Raja, un moment historique, ou juste de la pure créativité. Ensuite, les artistes font les esquisses. Nous trouvons les matériaux - parfois d'Europe, parfois nous les fabriquons nous-mêmes. Finalement, le jour du match, des centaines de membres exécutent parfaitement."
      `
    },
    readTime: 8,
    tags: ['interview', 'morocco', 'green-boys', 'leadership'],
    publishedAt: new Date('2024-02-01')
  }
];

// Timeline data for the history section
export const timelineData = [
  {
    year: 1968,
    region: 'europe',
    title: {
      en: 'Birth of Ultra Movement',
      fr: 'Naissance du Mouvement Ultra',
      ar: 'ولادة حركة الألتراس',
      it: 'Nascita del Movimento Ultras'
    },
    description: {
      en: 'Fossa dei Leoni forms at AC Milan, marking the beginning of organized Ultra support in Italy.',
      fr: 'Fossa dei Leoni se forme à l\'AC Milan, marquant le début du soutien Ultra organisé en Italie.',
      it: 'Fossa dei Leoni si forma all\'AC Milan, segnando l\'inizio del tifo Ultra organizzato in Italia.'
    },
    location: 'Milan, Italy',
    image: '/images/timeline/1968-milan.jpg'
  },
  {
    year: 1969,
    region: 'south-america',
    title: {
      en: 'Gaviões da Fiel Founded',
      fr: 'Fondation de Gaviões da Fiel',
      'pt-br': 'Fundação da Gaviões da Fiel'
    },
    description: {
      en: 'Brazil\'s most influential torcida organizada is founded in São Paulo.',
      'pt-br': 'A torcida organizada mais influente do Brasil é fundada em São Paulo.'
    },
    location: 'São Paulo, Brazil',
    image: '/images/timeline/1969-gavioes.jpg'
  },
  {
    year: 1974,
    region: 'europe',
    title: {
      en: 'Yellow Wall Emerges',
      fr: 'Émergence du Mur Jaune',
      de: 'Die Gelbe Wand entsteht'
    },
    description: {
      en: 'Borussia Dortmund\'s famous Südtribüne becomes the Yellow Wall.',
      fr: 'La célèbre Südtribüne du Borussia Dortmund devient le Mur Jaune.'
    },
    location: 'Dortmund, Germany',
    image: '/images/timeline/1974-dortmund.jpg'
  },
  {
    year: 1982,
    region: 'europe',
    title: {
      en: 'Çarşı Founded',
      tr: 'Çarşı Kuruldu'
    },
    description: {
      en: 'The legendary Besiktas supporter group Çarşı is established in Istanbul.'
    },
    location: 'Istanbul, Turkey',
    image: '/images/timeline/1982-carsi.jpg'
  },
  {
    year: 2005,
    region: 'north-africa',
    title: {
      en: 'North African Ultra Revolution',
      fr: 'Révolution Ultra en Afrique du Nord',
      ar: 'ثورة الألتراس في شمال أفريقيا'
    },
    description: {
      en: 'GREEN BOYS 2005, Winners, and Ultras Ahlawy all form, transforming African supporter culture.',
      ar: 'تأسيس غرين بويز 2005 ووينرز وألتراس أهلاوي، مما أحدث تحولاً في ثقافة المشجعين الأفريقية.'
    },
    location: 'Morocco & Egypt',
    image: '/images/timeline/2005-africa.jpg'
  },
  {
    year: 2012,
    region: 'north-africa',
    title: {
      en: 'Port Said Tragedy',
      ar: 'مأساة بورسعيد'
    },
    description: {
      en: 'A dark moment in Ultra history that changed Egyptian football forever.',
      ar: 'لحظة مظلمة في تاريخ الألتراس غيرت كرة القدم المصرية إلى الأبد.'
    },
    location: 'Port Said, Egypt',
    image: '/images/timeline/2012-portsaid.jpg'
  },
  {
    year: 2022,
    region: 'north-africa',
    title: {
      en: 'African Glory',
      ar: 'المجد الأفريقي'
    },
    description: {
      en: 'Raja Casablanca wins CAF Champions League, GREEN BOYS celebrate with record-breaking tifo.',
      ar: 'الرجاء البيضاوي يفوز بدوري أبطال أفريقيا، غرين بويز يحتفلون بتيفو يحطم الأرقام القياسية.'
    },
    location: 'Casablanca, Morocco',
    image: '/images/timeline/2022-raja.jpg'
  }
];

async function seedArticles() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');

    const Article = mongoose.models.Article ||
      (await import('../src/models/Article')).default;
    const User = mongoose.models.User ||
      (await import('../src/models/User')).default;

    await Article.deleteMany({});
    console.log('Cleared existing articles');

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

    const articlesToInsert = articlesData.map(article => ({
      ...article,
      title: typeof article.title === 'object' ? article.title.en : article.title,
      excerpt: typeof article.excerpt === 'object' ? article.excerpt.en : article.excerpt,
      content: typeof article.content === 'object' ? article.content.en : article.content,
      author: adminUser._id,
      views: Math.floor(Math.random() * 20000) + 500,
      likes: Math.floor(Math.random() * 2000) + 100
    }));

    await Article.insertMany(articlesToInsert);
    console.log(`Seeded ${articlesToInsert.length} articles`);

    await mongoose.disconnect();
    console.log('Done!');
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
}

seedArticles();

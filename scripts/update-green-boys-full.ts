import mongoose from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables from .env.local
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0 && !key.startsWith('#')) {
        let value = valueParts.join('=').trim();
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        process.env[key.trim()] = value;
      }
    });
  }
}

loadEnv();
const MONGODB_URI = process.env.MONGODB_URI || '';

const greenBoysData = {
  historyTranslations: {
    ar: `التأسيس والنشأة
أُسس فصيل "غرين بويز" لمشجعي نادي الرجاء الرياضي في 21 يونيو 2005، بعد أن اجتمع عشرات الشباب في ملعب محمد الخامس بالدار البيضاء واتفقوا على تنظيم أنفسهم كأول مجموعة أولتراس رسمية بالمغرب. قبل ذلك كانت هناك نواة أولية عُرفت باسم "لاكليك سلتيك"، حيث كان بعض الشباب يرتدون زي نادي سلتيك الأسكتلندي ذي الألوان الخضراء والبيضاء التي تشبه ألوان الرجاء. اختير اسم "غرين بويز" (الأولاد الخضر) باعتباره إنجليزي الدلالة على لون الفريق، مع تبني شعار لمخلوق فضائي يرمز إلى الذكاء والابتكار.

الأنشطة الثقافية والفنية
يمتاز فصيل الغرين بويز بإبداعات جماهيرية لافتة في المدرجات. فهم ينظمون عروضاً استعراضية تتضمن الألعاب النارية والشماريخ الخضراء إلى جانب تيفوات ضخمة تغطي أسطح المدرجات. أغانيهم وهتافاتهم المكتوبة خصيصاً ترتبط بأفكارهم؛ فقد ألّف أعضاء الفصيل كلمات تندّد بالظلم والفساد، مثل أنشودة «في بلادي الظلموني» التي أصبحت رمزاً لهم ولجماهير الرجاء عموماً.

التأثير على الألتراس الأخرى
كونه أول مجموعة أولتراس في المغرب، شكل "غرين بويز" نقطة انطلاق لتشكيل ثقافة الألتراس في الكرة المغربية. فقد وجدت المجموعات المماثلة أرضيتها بعد نجاحهم، فمثلاً سرعان ما انضم عدد من مشجعي الوداد في السنين اللاحقة لتشكيل مجموعة "الوينرز" على غرار غرين بويز. اليوم تضم الدوري المغربي ألتراس عدة أندية ولكل منها سمات مقتبسة من نموذج الغرين بويز.`,

    en: `History and Founding
GREEN BOYS was founded on June 21, 2005, when dozens of young fans gathered at Mohammed V Stadium in Casablanca and agreed to organize themselves as the first official Ultras group in Morocco. Before that, there was an initial nucleus known as "La Clique Celtic", where some young people wore the Scottish Celtic club jersey with green and white colors similar to Raja's colors. The name "Green Boys" was chosen as an English reference to the team's color, with the adoption of an alien logo symbolizing the intelligence and innovation the group strives for.

Cultural and Artistic Activities
The Green Boys faction is distinguished by remarkable creative fan displays in the stands. They organize spectacular shows that include fireworks and green flares alongside massive tifos covering the stands. Their specially written songs and chants are connected to their ideas; the faction members have composed lyrics denouncing injustice and corruption, such as the anthem "Fi Bladi Dalamoni" (In My Country They Wronged Me) which has become a symbol for them and Raja fans in general.

Influence on Other Ultras
Being the first Ultras group in Morocco, Green Boys served as a launching point for forming Ultras culture in Moroccan football. Similar groups found their footing after their success - for example, Wydad fans soon formed the "Winners" group following the Green Boys model. Today, the Moroccan league includes Ultras from several clubs, each with characteristics borrowed from the Green Boys model.`,

    fr: `Histoire et Fondation
GREEN BOYS a été fondé le 21 juin 2005, lorsque des dizaines de jeunes supporters se sont réunis au Stade Mohammed V de Casablanca et ont décidé de s'organiser en tant que premier groupe Ultras officiel au Maroc. Avant cela, il existait un noyau initial connu sous le nom de "La Clique Celtic", où certains jeunes portaient le maillot du Celtic écossais aux couleurs vertes et blanches similaires à celles du Raja. Le nom "Green Boys" a été choisi comme référence anglaise à la couleur de l'équipe, avec l'adoption d'un logo extraterrestre symbolisant l'intelligence et l'innovation que le groupe recherche.

Activités Culturelles et Artistiques
La faction Green Boys se distingue par des créations remarquables dans les tribunes. Ils organisent des spectacles comprenant des feux d'artifice et des fumigènes verts ainsi que des tifos massifs couvrant les gradins. Leurs chansons et chants spécialement écrits sont liés à leurs idées; les membres ont composé des paroles dénonçant l'injustice et la corruption, comme l'hymne "Fi Bladi Dalamoni" (Dans Mon Pays Ils M'ont Fait du Tort) devenu un symbole pour eux et les fans du Raja.

Influence sur les Autres Ultras
Étant le premier groupe Ultras au Maroc, Green Boys a servi de point de départ pour former la culture Ultras dans le football marocain. Des groupes similaires ont trouvé leur place après leur succès - par exemple, les fans du Wydad ont rapidement formé le groupe "Winners" sur le modèle des Green Boys.`,

    es: `Historia y Fundación
GREEN BOYS fue fundado el 21 de junio de 2005, cuando decenas de jóvenes aficionados se reunieron en el Estadio Mohammed V de Casablanca y acordaron organizarse como el primer grupo Ultras oficial de Marruecos. Antes de eso, existía un núcleo inicial conocido como "La Clique Celtic", donde algunos jóvenes vestían la camiseta del Celtic escocés con colores verdes y blancos similares a los del Raja. El nombre "Green Boys" fue elegido como referencia en inglés al color del equipo, con la adopción de un logo alienígena que simboliza la inteligencia e innovación que busca el grupo.

Actividades Culturales y Artísticas
La facción Green Boys se distingue por notables creaciones en las gradas. Organizan espectáculos que incluyen fuegos artificiales y bengalas verdes junto con tifos masivos que cubren las gradas. Sus canciones y cánticos especialmente escritos están conectados con sus ideas; los miembros han compuesto letras denunciando la injusticia y la corrupción, como el himno "Fi Bladi Dalamoni" que se ha convertido en un símbolo para ellos y los fans del Raja.

Influencia en Otros Ultras
Siendo el primer grupo Ultras en Marruecos, Green Boys sirvió como punto de partida para formar la cultura Ultras en el fútbol marroquí. Grupos similares encontraron su lugar después de su éxito - por ejemplo, los fans del Wydad pronto formaron el grupo "Winners" siguiendo el modelo de Green Boys.`,

    it: `Storia e Fondazione
GREEN BOYS è stato fondato il 21 giugno 2005, quando decine di giovani tifosi si sono riuniti allo Stadio Mohammed V di Casablanca e hanno deciso di organizzarsi come primo gruppo Ultras ufficiale in Marocco. Prima di ciò, esisteva un nucleo iniziale noto come "La Clique Celtic", dove alcuni giovani indossavano la maglia del Celtic scozzese con colori verdi e bianchi simili a quelli del Raja. Il nome "Green Boys" è stato scelto come riferimento inglese al colore della squadra, con l'adozione di un logo alieno che simboleggia l'intelligenza e l'innovazione che il gruppo persegue.

Attività Culturali e Artistiche
La fazione Green Boys si distingue per notevoli creazioni nelle tribune. Organizzano spettacoli che includono fuochi d'artificio e fumogeni verdi insieme a tifo massicci che coprono le gradinate. Le loro canzoni e cori appositamente scritti sono collegati alle loro idee; i membri hanno composto testi che denunciano l'ingiustizia e la corruzione, come l'inno "Fi Bladi Dalamoni" diventato un simbolo per loro e i tifosi del Raja.

Influenza su Altri Ultras
Essendo il primo gruppo Ultras in Marocco, Green Boys ha servito come punto di partenza per formare la cultura Ultras nel calcio marocchino. Gruppi simili hanno trovato il loro spazio dopo il loro successo - ad esempio, i tifosi del Wydad hanno presto formato il gruppo "Winners" seguendo il modello dei Green Boys.`,

    'pt-br': `História e Fundação
GREEN BOYS foi fundado em 21 de junho de 2005, quando dezenas de jovens torcedores se reuniram no Estádio Mohammed V em Casablanca e concordaram em se organizar como o primeiro grupo Ultras oficial do Marrocos. Antes disso, existia um núcleo inicial conhecido como "La Clique Celtic", onde alguns jovens vestiam a camisa do Celtic escocês com cores verdes e brancas semelhantes às do Raja. O nome "Green Boys" foi escolhido como referência em inglês à cor do time, com a adoção de um logo alienígena simbolizando a inteligência e inovação que o grupo busca.

Atividades Culturais e Artísticas
A facção Green Boys se distingue por notáveis criações nas arquibancadas. Eles organizam espetáculos que incluem fogos de artifício e sinalizadores verdes junto com tifos massivos cobrindo as arquibancadas. Suas músicas e cantos especialmente escritos estão conectados às suas ideias; os membros compuseram letras denunciando a injustiça e a corrupção, como o hino "Fi Bladi Dalamoni" que se tornou um símbolo para eles e os torcedores do Raja.

Influência em Outros Ultras
Sendo o primeiro grupo Ultras no Marrocos, Green Boys serviu como ponto de partida para formar a cultura Ultras no futebol marroquino. Grupos similares encontraram seu lugar após seu sucesso - por exemplo, os torcedores do Wydad logo formaram o grupo "Winners" seguindo o modelo dos Green Boys.`
  },

  valuesTranslations: {
    ar: ['الولاء المطلق للنادي', 'التضحية والتضامن', 'الإبداع والتميز الفني', 'رفض العنف', 'الهوية الجماعية'],
    en: ['Absolute Loyalty to the Club', 'Sacrifice and Solidarity', 'Creativity and Artistic Excellence', 'Rejection of Violence', 'Collective Identity'],
    fr: ['Loyauté Absolue au Club', 'Sacrifice et Solidarité', 'Créativité et Excellence Artistique', 'Rejet de la Violence', 'Identité Collective'],
    es: ['Lealtad Absoluta al Club', 'Sacrificio y Solidaridad', 'Creatividad y Excelencia Artística', 'Rechazo de la Violencia', 'Identidad Colectiva'],
    it: ['Lealtà Assoluta al Club', 'Sacrificio e Solidarietà', 'Creatività ed Eccellenza Artistica', 'Rifiuto della Violenza', 'Identità Collettiva'],
    'pt-br': ['Lealdade Absoluta ao Clube', 'Sacrifício e Solidariedade', 'Criatividade e Excelência Artística', 'Rejeição da Violência', 'Identidade Coletiva']
  },

  mottoTranslations: {
    ar: 'ديما راجا - في بلادي ظلموني',
    en: 'Dima Raja - In My Country They Wronged Me',
    fr: 'Dima Raja - Dans Mon Pays Ils M\'ont Fait du Tort',
    es: 'Dima Raja - En Mi País Me Hicieron Daño',
    it: 'Dima Raja - Nel Mio Paese Mi Hanno Fatto Torto',
    'pt-br': 'Dima Raja - No Meu País Me Prejudicaram'
  },

  // Update other fields
  yearFounded: 2005,
  foundingDate: '2005-06-21',
  membersEstimate: '50,000+',
  stadium: 'Stade Mohammed V (Curva Sud)',
  symbols: ['Alien Logo', 'Green Eagle', 'Celtic Cross', 'Che Guevara'],
  colors: ['#00A550', '#FFFFFF'],
  famousSongs: ['Fi Bladi Dalamoni', 'Dima Raja', 'Verde Para Siempre'],
};

async function updateGreenBoys() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    const result = await UltraGroup.updateOne(
      { slug: 'green-boys-2005' },
      {
        $set: {
          historyTranslations: greenBoysData.historyTranslations,
          valuesTranslations: greenBoysData.valuesTranslations,
          mottoTranslations: greenBoysData.mottoTranslations,
          yearFounded: greenBoysData.yearFounded,
          membersEstimate: greenBoysData.membersEstimate,
          stadium: greenBoysData.stadium,
          symbols: greenBoysData.symbols,
          colors: greenBoysData.colors,
          // Keep the original history as fallback
          history: greenBoysData.historyTranslations.en,
          values: greenBoysData.valuesTranslations.en,
          motto: greenBoysData.mottoTranslations.en,
        }
      }
    );

    if (result.matchedCount > 0) {
      console.log('GREEN BOYS 2005 updated successfully with comprehensive information!');
    } else {
      console.log('Group not found: green-boys-2005');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateGreenBoys();

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
        // Remove surrounding quotes if present
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

// Translations for all Ultra groups
const groupTranslations: Record<string, {
  historyTranslations: { en: string; ar: string; fr: string; es: string; it: string; 'pt-br': string };
  valuesTranslations: { en: string[]; ar: string[]; fr: string[]; es: string[]; it: string[]; 'pt-br': string[] };
  mottoTranslations: { en: string; ar: string; fr: string; es: string; it: string; 'pt-br': string };
}> = {
  'green-boys-2005': {
    historyTranslations: {
      en: `GREEN BOYS 2005 is the first Ultra group in Morocco and Africa, founded on December 18, 2005. They revolutionized supporter culture in the Maghreb by introducing tifos, flares, and organized chants. Their impact goes beyond football - they represent the identity of Casablanca and Moroccan youth. Known for their spectacular choreographies and limitless creativity, they have inspired generations of supporters across the African continent.`,
      ar: `غرين بويز 2005 هي أول مجموعة ألتراس في المغرب وأفريقيا، تأسست في 18 ديسمبر 2005. أحدثوا ثورة في ثقافة المشجعين في المغرب العربي من خلال تقديم التيفوهات والشماريخ والأناشيد المنظمة. تأثيرهم يتجاوز كرة القدم - فهم يمثلون هوية الدار البيضاء والشباب المغربي. معروفون بعروضهم المذهلة وإبداعهم اللامحدود، ألهموا أجيالاً من المشجعين في جميع أنحاء القارة الأفريقية.`,
      fr: `GREEN BOYS 2005 est le premier groupe Ultras du Maroc et d'Afrique, fondé le 18 décembre 2005. Ils ont révolutionné la culture supporterisme au Maghreb en introduisant les tifos, les fumigènes et les chants organisés. Leur impact dépasse le football - ils représentent l'identité de Casablanca et la jeunesse marocaine. Connus pour leurs chorégraphies spectaculaires et leur créativité sans limites, ils ont inspiré des générations de supporters à travers le continent africain.`,
      es: `GREEN BOYS 2005 es el primer grupo Ultra de Marruecos y África, fundado el 18 de diciembre de 2005. Revolucionaron la cultura del hincha en el Magreb introduciendo tifos, bengalas y cánticos organizados. Su impacto va más allá del fútbol - representan la identidad de Casablanca y la juventud marroquí. Conocidos por sus coreografías espectaculares y creatividad ilimitada, han inspirado a generaciones de hinchas en todo el continente africano.`,
      it: `GREEN BOYS 2005 è il primo gruppo Ultra del Marocco e dell'Africa, fondato il 18 dicembre 2005. Hanno rivoluzionato la cultura del tifo nel Maghreb introducendo tifo, fumogeni e cori organizzati. Il loro impatto va oltre il calcio - rappresentano l'identità di Casablanca e della gioventù marocchina. Conosciuti per le loro coreografie spettacolari e creatività illimitata, hanno ispirato generazioni di tifosi in tutto il continente africano.`,
      'pt-br': `GREEN BOYS 2005 é o primeiro grupo Ultra do Marrocos e da África, fundado em 18 de dezembro de 2005. Eles revolucionaram a cultura torcedora no Magrebe introduzindo tifos, sinalizadores e cantos organizados. Seu impacto vai além do futebol - eles representam a identidade de Casablanca e da juventude marroquina. Conhecidos por suas coreografias espetaculares e criatividade ilimitada, inspiraram gerações de torcedores em todo o continente africano.`
    },
    valuesTranslations: {
      en: ['Loyalty', 'Creativity', 'Independence', 'Pride'],
      ar: ['الولاء', 'الإبداع', 'الاستقلالية', 'الفخر'],
      fr: ['Loyauté', 'Créativité', 'Indépendance', 'Fierté'],
      es: ['Lealtad', 'Creatividad', 'Independencia', 'Orgullo'],
      it: ['Lealtà', 'Creatività', 'Indipendenza', 'Orgoglio'],
      'pt-br': ['Lealdade', 'Criatividade', 'Independência', 'Orgulho']
    },
    mottoTranslations: {
      en: 'Dima Raja - Forever Green',
      ar: 'ديما راجا - أخضر للأبد',
      fr: 'Dima Raja - Pour Toujours Vert',
      es: 'Dima Raja - Verde Para Siempre',
      it: 'Dima Raja - Verde Per Sempre',
      'pt-br': 'Dima Raja - Verde Para Sempre'
    }
  },
  'winners': {
    historyTranslations: {
      en: `WINNERS is the Ultra group of Wydad AC, founded in 2005. Direct rivals of GREEN BOYS in the Casablanca Derby, they represent the red and white passion. Known for their fervor and impressive tifos, they make the Mohammed V Stadium a cauldron during WAC matches.`,
      ar: `وينرز هي مجموعة ألتراس الوداد الرياضي، تأسست في 2005. المنافسون المباشرون لغرين بويز في ديربي الدار البيضاء، يمثلون الشغف الأحمر والأبيض. معروفون بحماسهم وتيفوهاتهم المذهلة، يحولون ملعب محمد الخامس إلى بركان خلال مباريات الوداد.`,
      fr: `Les WINNERS sont le groupe Ultra du Wydad AC, fondé en 2005. Rivaux directs des GREEN BOYS dans le Derby de Casablanca, ils représentent la passion rouge et blanche. Connus pour leur ferveur et leurs tifos impressionnants, ils font du Stade Mohammed V un chaudron lors des matchs du WAC.`,
      es: `WINNERS es el grupo Ultra del Wydad AC, fundado en 2005. Rivales directos de GREEN BOYS en el Derby de Casablanca, representan la pasión roja y blanca. Conocidos por su fervor y tifos impresionantes, convierten el Estadio Mohammed V en un caldero durante los partidos del WAC.`,
      it: `WINNERS è il gruppo Ultra del Wydad AC, fondato nel 2005. Rivali diretti dei GREEN BOYS nel Derby di Casablanca, rappresentano la passione rosso e bianca. Conosciuti per il loro fervore e tifo impressionanti, rendono lo Stadio Mohammed V un calderone durante le partite del WAC.`,
      'pt-br': `WINNERS é o grupo Ultra do Wydad AC, fundado em 2005. Rivais diretos dos GREEN BOYS no Derby de Casablanca, representam a paixão vermelha e branca. Conhecidos por seu fervor e tifos impressionantes, transformam o Estádio Mohammed V em um caldeirão durante os jogos do WAC.`
    },
    valuesTranslations: {
      en: ['Passion', 'Unity', 'Loyalty', 'Respect'],
      ar: ['الشغف', 'الوحدة', 'الولاء', 'الاحترام'],
      fr: ['Passion', 'Unité', 'Fidélité', 'Respect'],
      es: ['Pasión', 'Unidad', 'Lealtad', 'Respeto'],
      it: ['Passione', 'Unità', 'Lealtà', 'Rispetto'],
      'pt-br': ['Paixão', 'Unidade', 'Lealdade', 'Respeito']
    },
    mottoTranslations: {
      en: 'Wydad Until Death',
      ar: 'الوداد حتى الموت',
      fr: 'Wydad Jusqu\'à la Mort',
      es: 'Wydad Hasta la Muerte',
      it: 'Wydad Fino alla Morte',
      'pt-br': 'Wydad Até a Morte'
    }
  },
  'curva-sud-milano': {
    historyTranslations: {
      en: `Curva Sud Milano is one of the most iconic and historic Ultra groups in the world. Born in 1968, they were pioneers of the Ultra movement in Italy. From Fossa dei Leoni to current groups, Curva Sud created a supporter model that inspired the whole world. Their passion for the Rossoneri is legendary.`,
      ar: `كورفا سود ميلانو هي واحدة من أكثر مجموعات الألتراس شهرة وتاريخاً في العالم. ولدت عام 1968، وكانوا رواد حركة الألتراس في إيطاليا. من فوسا دي ليوني إلى المجموعات الحالية، أنشأت كورفا سود نموذجاً للمشجعين ألهم العالم بأسره. شغفهم بالروسونيري أسطوري.`,
      fr: `La Curva Sud Milano est l'un des groupes Ultras les plus emblématiques et historiques du monde. Née en 1968, elle a été pionnière du mouvement Ultra en Italie. De Fossa dei Leoni aux groupes actuels, la Curva Sud a créé un modèle de supporterisme qui a inspiré le monde entier. Leur passion pour les Rossoneri est légendaire.`,
      es: `Curva Sud Milano es uno de los grupos Ultra más icónicos e históricos del mundo. Nacida en 1968, fueron pioneros del movimiento Ultra en Italia. Desde Fossa dei Leoni hasta los grupos actuales, Curva Sud creó un modelo de hinchada que inspiró al mundo entero. Su pasión por los Rossoneri es legendaria.`,
      it: `La Curva Sud Milano è uno dei gruppi Ultra più iconici e storici del mondo. Nata nel 1968, è stata pioniera del movimento Ultra in Italia. Dalla Fossa dei Leoni ai gruppi attuali, la Curva Sud ha creato un modello di tifo che ha ispirato il mondo intero. La loro passione per i Rossoneri è leggendaria.`,
      'pt-br': `Curva Sud Milano é um dos grupos Ultra mais icônicos e históricos do mundo. Nascida em 1968, foram pioneiros do movimento Ultra na Itália. Da Fossa dei Leoni aos grupos atuais, a Curva Sud criou um modelo de torcida que inspirou o mundo inteiro. Sua paixão pelos Rossoneri é lendária.`
    },
    valuesTranslations: {
      en: ['Tradition', 'Honor', 'Passion', 'Milan in the heart'],
      ar: ['التقليد', 'الشرف', 'الشغف', 'ميلان في القلب'],
      fr: ['Tradition', 'Honneur', 'Passion', 'Milan nel cuore'],
      es: ['Tradición', 'Honor', 'Pasión', 'Milán en el corazón'],
      it: ['Tradizione', 'Onore', 'Passione', 'Milan nel cuore'],
      'pt-br': ['Tradição', 'Honra', 'Paixão', 'Milan no coração']
    },
    mottoTranslations: {
      en: 'We Are the Curva Sud',
      ar: 'نحن كورفا سود',
      fr: 'Noi Siamo la Curva Sud',
      es: 'Nosotros Somos la Curva Sud',
      it: 'Noi Siamo la Curva Sud',
      'pt-br': 'Nós Somos a Curva Sud'
    }
  },
  'curva-nord-inter': {
    historyTranslations: {
      en: `Curva Nord is the stronghold of Inter Milan supporters since 1969. Wearing the nerazzurri colors with pride, they have created some of the most impressive tifos in Italian football history. Their rivalry with Curva Sud in the Derby della Madonnina is legendary.`,
      ar: `كورفا نورد هو معقل مشجعي إنتر ميلان منذ 1969. يرتدون ألوان النيراتزوري بفخر، وقد أنشأوا بعض أروع التيفوهات في تاريخ كرة القدم الإيطالية. منافستهم مع كورفا سود في ديربي ديلا مادونينا أسطورية.`,
      fr: `La Curva Nord est le fief des supporters de l'Inter Milan depuis 1969. Portant les couleurs nerazzurri avec fierté, ils ont créé certains des tifos les plus impressionnants de l'histoire du football italien. Leur rivalité avec la Curva Sud dans le Derby della Madonnina est légendaire.`,
      es: `Curva Nord es el bastión de los hinchas del Inter de Milán desde 1969. Portando los colores nerazzurri con orgullo, han creado algunos de los tifos más impresionantes de la historia del fútbol italiano. Su rivalidad con Curva Sud en el Derby della Madonnina es legendaria.`,
      it: `La Curva Nord è il baluardo dei tifosi dell'Inter Milan dal 1969. Portando i colori nerazzurri con orgoglio, hanno creato alcuni dei tifo più impressionanti della storia del calcio italiano. La loro rivalità con la Curva Sud nel Derby della Madonnina è leggendaria.`,
      'pt-br': `Curva Nord é o reduto dos torcedores do Inter de Milão desde 1969. Vestindo as cores nerazzurri com orgulho, criaram alguns dos tifos mais impressionantes da história do futebol italiano. Sua rivalidade com a Curva Sud no Derby della Madonnina é lendária.`
    },
    valuesTranslations: {
      en: ['Pride', 'Tradition', 'Nerazzurri forever'],
      ar: ['الفخر', 'التقليد', 'نيراتزوري للأبد'],
      fr: ['Fierté', 'Tradition', 'Nerazzurri per sempre'],
      es: ['Orgullo', 'Tradición', 'Nerazzurri para siempre'],
      it: ['Fierezza', 'Tradizione', 'Nerazzurri per sempre'],
      'pt-br': ['Orgulho', 'Tradição', 'Nerazzurri para sempre']
    },
    mottoTranslations: {
      en: 'Crazy Inter Love It',
      ar: 'إنتر المجنون أحبه',
      fr: 'Pazza Inter Amala',
      es: 'Loco Inter Ámalo',
      it: 'Pazza Inter Amala',
      'pt-br': 'Inter Louca Ame-a'
    }
  },
  'curva-sud-roma': {
    historyTranslations: {
      en: `The Curva Sud of the Olimpico is the beating heart of the Giallorossi. Since 1973, the romanisti Ultras have created a unique atmosphere in the Eternal City. Their chant "Grazie Roma" echoes in every stadium in Italy.`,
      ar: `كورفا سود أولمبيكو هي القلب النابض للجيالوروسي. منذ 1973، أنشأ ألتراس رومانيستي جواً فريداً في المدينة الأبدية. أغنيتهم "غراتسيه روما" تتردد في كل ملعب في إيطاليا.`,
      fr: `La Curva Sud de l'Olimpico est le cœur battant des Giallorossi. Depuis 1973, les Ultras romanisti créent une atmosphère unique dans la Ville Éternelle. Leur chant "Grazie Roma" résonne dans tous les stades d'Italie.`,
      es: `La Curva Sud del Olímpico es el corazón latiente de los Giallorossi. Desde 1973, los Ultras romanisti crean una atmósfera única en la Ciudad Eterna. Su cántico "Grazie Roma" resuena en todos los estadios de Italia.`,
      it: `La Curva Sud dell'Olimpico è il cuore pulsante dei Giallorossi. Dal 1973, gli Ultras romanisti creano un'atmosfera unica nella Città Eterna. Il loro coro "Grazie Roma" risuona in tutti gli stadi d'Italia.`,
      'pt-br': `A Curva Sud do Olímpico é o coração pulsante dos Giallorossi. Desde 1973, os Ultras romanisti criam uma atmosfera única na Cidade Eterna. Seu canto "Grazie Roma" ecoa em todos os estádios da Itália.`
    },
    valuesTranslations: {
      en: ['Roma', 'Heart', 'Passion', 'Romanità'],
      ar: ['روما', 'القلب', 'الشغف', 'رومانيتا'],
      fr: ['Roma', 'Cuore', 'Passione', 'Romanità'],
      es: ['Roma', 'Corazón', 'Pasión', 'Romanità'],
      it: ['Roma', 'Cuore', 'Passione', 'Romanità'],
      'pt-br': ['Roma', 'Coração', 'Paixão', 'Romanità']
    },
    mottoTranslations: {
      en: 'Roma Is Not Discussed, It Is Loved',
      ar: 'روما لا تناقش، بل تُحب',
      fr: 'Roma Non Si Discute, Si Ama',
      es: 'Roma No Se Discute, Se Ama',
      it: 'Roma Non Si Discute, Si Ama',
      'pt-br': 'Roma Não Se Discute, Se Ama'
    }
  },
  'ultras-ahlawy': {
    historyTranslations: {
      en: `Ultras Ahlawy is the largest and most passionate Ultra group in Egypt and Africa, founded in 2007. Supporting Al Ahly SC, they have become a symbol of resistance and youth culture in Egypt. Their role during the Egyptian revolution and the Port Said tragedy made them national icons. Known for their incredible tifos and unwavering loyalty.`,
      ar: `ألتراس أهلاوي هي أكبر وأكثر مجموعات الألتراس شغفاً في مصر وأفريقيا، تأسست عام 2007. يدعمون النادي الأهلي، وأصبحوا رمزاً للمقاومة وثقافة الشباب في مصر. دورهم خلال الثورة المصرية ومأساة بورسعيد جعلهم أيقونات وطنية. معروفون بتيفوهاتهم المذهلة وولائهم الثابت.`,
      fr: `Ultras Ahlawy est le groupe Ultra le plus grand et le plus passionné d'Égypte et d'Afrique, fondé en 2007. Supportant Al Ahly SC, ils sont devenus un symbole de résistance et de culture jeune en Égypte. Leur rôle pendant la révolution égyptienne et la tragédie de Port-Saïd les a rendus icônes nationales. Connus pour leurs tifos incroyables et leur loyauté indéfectible.`,
      es: `Ultras Ahlawy es el grupo Ultra más grande y apasionado de Egipto y África, fundado en 2007. Apoyando al Al Ahly SC, se han convertido en símbolo de resistencia y cultura juvenil en Egipto. Su papel durante la revolución egipcia y la tragedia de Port Said los convirtió en íconos nacionales. Conocidos por sus increíbles tifos y lealtad inquebrantable.`,
      it: `Ultras Ahlawy è il gruppo Ultra più grande e appassionato d'Egitto e d'Africa, fondato nel 2007. Sostenendo l'Al Ahly SC, sono diventati un simbolo di resistenza e cultura giovanile in Egitto. Il loro ruolo durante la rivoluzione egiziana e la tragedia di Port Said li ha resi icone nazionali. Conosciuti per i loro incredibili tifo e lealtà incrollabile.`,
      'pt-br': `Ultras Ahlawy é o maior e mais apaixonado grupo Ultra do Egito e da África, fundado em 2007. Apoiando o Al Ahly SC, tornaram-se símbolo de resistência e cultura jovem no Egito. Seu papel durante a revolução egípcia e a tragédia de Port Said os tornou ícones nacionais. Conhecidos por seus incríveis tifos e lealdade inabalável.`
    },
    valuesTranslations: {
      en: ['Loyalty', 'Resistance', 'Brotherhood', 'Sacrifice'],
      ar: ['الولاء', 'المقاومة', 'الأخوة', 'التضحية'],
      fr: ['Loyauté', 'Résistance', 'Fraternité', 'Sacrifice'],
      es: ['Lealtad', 'Resistencia', 'Hermandad', 'Sacrificio'],
      it: ['Lealtà', 'Resistenza', 'Fratellanza', 'Sacrificio'],
      'pt-br': ['Lealdade', 'Resistência', 'Fraternidade', 'Sacrifício']
    },
    mottoTranslations: {
      en: 'Ahly Above All',
      ar: 'الأهلي فوق الجميع',
      fr: 'Ahly Au-Dessus de Tout',
      es: 'Ahly Por Encima de Todo',
      it: 'Ahly Sopra Tutto',
      'pt-br': 'Ahly Acima de Tudo'
    }
  },
  'la-12': {
    historyTranslations: {
      en: `La 12 is the legendary Barra Brava of Boca Juniors, named after being the "12th player" on the field. Founded in the 1980s, they are considered one of the most passionate and intense supporter groups in world football. La Bombonera trembles when they sing, creating an atmosphere that has intimidated teams from around the world.`,
      ar: `لا 12 هي البارا برافا الأسطورية لبوكا جونيورز، سميت بهذا الاسم لكونها "اللاعب الثاني عشر" في الملعب. تأسست في الثمانينات، تعتبر واحدة من أكثر مجموعات المشجعين شغفاً وحماساً في كرة القدم العالمية. لا بومبونيرا ترتجف عندما يغنون، مما يخلق جواً أرعب الفرق من جميع أنحاء العالم.`,
      fr: `La 12 est la légendaire Barra Brava de Boca Juniors, nommée ainsi pour être le "12ème joueur" sur le terrain. Fondée dans les années 1980, elle est considérée comme l'un des groupes de supporters les plus passionnés et intenses du football mondial. La Bombonera tremble quand ils chantent, créant une atmosphère qui a intimidé des équipes du monde entier.`,
      es: `La 12 es la legendaria Barra Brava de Boca Juniors, nombrada por ser el "jugador número 12" en el campo. Fundada en los años 80, se considera uno de los grupos de hinchas más apasionados e intensos del fútbol mundial. La Bombonera tiembla cuando cantan, creando una atmósfera que ha intimidado a equipos de todo el mundo.`,
      it: `La 12 è la leggendaria Barra Brava del Boca Juniors, chiamata così per essere il "12° giocatore" in campo. Fondata negli anni '80, è considerata uno dei gruppi di tifosi più appassionati e intensi del calcio mondiale. La Bombonera trema quando cantano, creando un'atmosfera che ha intimidito squadre di tutto il mondo.`,
      'pt-br': `La 12 é a lendária Barra Brava do Boca Juniors, nomeada por ser o "12º jogador" em campo. Fundada nos anos 80, é considerada um dos grupos de torcedores mais apaixonados e intensos do futebol mundial. La Bombonera treme quando cantam, criando uma atmosfera que intimidou equipes de todo o mundo.`
    },
    valuesTranslations: {
      en: ['Passion', 'Loyalty', 'Sacrifice', 'Boca or Nothing'],
      ar: ['الشغف', 'الولاء', 'التضحية', 'بوكا أو لا شيء'],
      fr: ['Passion', 'Loyauté', 'Sacrifice', 'Boca ou Rien'],
      es: ['Pasión', 'Lealtad', 'Sacrificio', 'Boca o Nada'],
      it: ['Passione', 'Lealtà', 'Sacrificio', 'Boca o Niente'],
      'pt-br': ['Paixão', 'Lealdade', 'Sacrifício', 'Boca ou Nada']
    },
    mottoTranslations: {
      en: 'Boca My Good Father',
      ar: 'بوكا يا أبي العزيز',
      fr: 'Boca Mi Buen Padre',
      es: 'Boca Mi Buen Padre',
      it: 'Boca Mio Buon Padre',
      'pt-br': 'Boca Meu Bom Pai'
    }
  },
  'brigade-oujda': {
    historyTranslations: {
      en: `Brigade Oujda is the Ultra group of Mouloudia Oujda, founded in 2007. They represent the passion of Eastern Morocco and have become a symbol of identity for the city of Oujda. Known for their orange and black colors, they create an incredible atmosphere at every match, rivaling the atmosphere of the biggest groups in the country.`,
      ar: `بريغاد وجدة هي مجموعة ألتراس مولودية وجدة، تأسست عام 2007. يمثلون شغف شرق المغرب وأصبحوا رمزاً لهوية مدينة وجدة. معروفون بألوانهم البرتقالية والسوداء، يخلقون جواً مذهلاً في كل مباراة، منافسين لأجواء أكبر المجموعات في البلاد.`,
      fr: `Brigade Oujda est le groupe Ultra de Mouloudia Oujda, fondé en 2007. Ils représentent la passion de l'Est marocain et sont devenus un symbole d'identité pour la ville d'Oujda. Connus pour leurs couleurs orange et noir, ils créent une atmosphère incroyable à chaque match, rivalisant avec l'ambiance des plus grands groupes du pays.`,
      es: `Brigade Oujda es el grupo Ultra de Mouloudia Oujda, fundado en 2007. Representan la pasión del Este de Marruecos y se han convertido en símbolo de identidad para la ciudad de Oujda. Conocidos por sus colores naranja y negro, crean una atmósfera increíble en cada partido, rivalizando con el ambiente de los grupos más grandes del país.`,
      it: `Brigade Oujda è il gruppo Ultra del Mouloudia Oujda, fondato nel 2007. Rappresentano la passione del Marocco orientale e sono diventati un simbolo di identità per la città di Oujda. Conosciuti per i loro colori arancione e nero, creano un'atmosfera incredibile ad ogni partita, rivaleggiando con l'atmosfera dei più grandi gruppi del paese.`,
      'pt-br': `Brigade Oujda é o grupo Ultra do Mouloudia Oujda, fundado em 2007. Eles representam a paixão do Leste do Marrocos e se tornaram símbolo de identidade para a cidade de Oujda. Conhecidos por suas cores laranja e preto, criam uma atmosfera incrível em cada jogo, rivalizando com a atmosfera dos maiores grupos do país.`
    },
    valuesTranslations: {
      en: ['Pride', 'Eastern Identity', 'Passion', 'Brotherhood'],
      ar: ['الفخر', 'هوية الشرق', 'الشغف', 'الأخوة'],
      fr: ['Fierté', 'Identité orientale', 'Passion', 'Fraternité'],
      es: ['Orgullo', 'Identidad oriental', 'Pasión', 'Hermandad'],
      it: ['Orgoglio', 'Identità orientale', 'Passione', 'Fratellanza'],
      'pt-br': ['Orgulho', 'Identidade oriental', 'Paixão', 'Fraternidade']
    },
    mottoTranslations: {
      en: 'Oujda Forever',
      ar: 'وجدة للأبد',
      fr: 'Oujda Pour Toujours',
      es: 'Oujda Para Siempre',
      it: 'Oujda Per Sempre',
      'pt-br': 'Oujda Para Sempre'
    }
  }
};

async function addTranslations() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    for (const [slug, translations] of Object.entries(groupTranslations)) {
      console.log(`Updating translations for: ${slug}`);

      const result = await UltraGroup.updateOne(
        { slug },
        {
          $set: {
            historyTranslations: translations.historyTranslations,
            valuesTranslations: translations.valuesTranslations,
            mottoTranslations: translations.mottoTranslations
          }
        }
      );

      if (result.matchedCount > 0) {
        console.log(`  Updated ${slug}`);
      } else {
        console.log(`  Group not found: ${slug}`);
      }
    }

    console.log('All translations added successfully!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

addTranslations();

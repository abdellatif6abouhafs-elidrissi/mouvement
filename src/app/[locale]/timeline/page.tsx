'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, MapPin, Flag, Calendar, Filter } from 'lucide-react';
import Button from '@/components/ui/Button';

const timelineEvents = [
  {
    id: 1,
    year: 1950,
    region: 'southAmerica',
    title: {
      en: 'Origins of Organized Fan Gangs in South America',
      ar: 'أصول حركة المشجعين المنظمين في أمريكا الجنوبية'
    },
    location: {
      en: 'Brazil & Argentina',
      ar: 'البرازيل والأرجنتين'
    },
    description: {
      en: "Origins of organized fan gangs in South America (Brazil's first torcida and Argentina's barras bravas). Impact: Influential fan-support style globally.",
      ar: 'أصول حركة المشجعين المنظمين في أمريكا الجنوبية، مع تأسيس أول توريـسـيـدا برازيلية وأول بارّاس برفاس أرجنتينية. تأثير: مدرسة دعم جماهيري مؤثرة عالمياً.'
    },
    image: '/images/timeline/1950-southamerica.jpg',
    group: 'Torcida / Barras Bravas',
  },
  {
    id: 2,
    year: 1960,
    region: 'europe',
    title: {
      en: 'First Ultras Groups Formed in Italy',
      ar: 'ولادة أول مجموعات الألتراس في إيطاليا'
    },
    location: {
      en: 'Milan, Italy',
      ar: 'ميلانو، إيطاليا'
    },
    description: {
      en: "First ultras groups formed in Italy (e.g. Milan's Fossa dei Leoni in 1968). Spawned the modern ultras style in world football.",
      ar: 'ولدت مجموعات الألتراس الأولى في الملاعب الإيطالية (مثلاً "فوسا دي ليوني" بميلان 1968). أثرت هذه الحركة على تشكيل نمط ألتراس جديد عالمياً.'
    },
    image: '/images/timeline/1960-italy.jpg',
    group: 'Fossa dei Leoni',
    highlight: true,
  },
  {
    id: 3,
    year: 1984,
    region: 'europe',
    title: {
      en: "Formation of Marseille's First Ultras Group",
      ar: 'تشكيل أول مجموعة ألتراس في مارسيليا'
    },
    location: {
      en: 'Marseille, France',
      ar: 'مارسيليا، فرنسا'
    },
    description: {
      en: "Formation of Marseille's first ultras group (Commando Ultra '84). Helped spread ultras culture beyond Italy.",
      ar: 'تشكلت أول مجموعة ألتراس في نادي مارسيليا الفرنسي باسم "Commando Ultra \'84". ساعد ذلك في انتشار ثقافة الألتراس في أوروبا الغربية.'
    },
    image: '/images/timeline/1984-france.jpg',
    group: "Commando Ultra '84",
  },
  {
    id: 4,
    year: 1985,
    region: 'europe',
    title: {
      en: 'First German Ultras Group',
      ar: 'أول فرع للألتراس الألمانية'
    },
    location: {
      en: 'Saarbrücken, Germany',
      ar: 'ساربروكن، ألمانيا'
    },
    description: {
      en: 'First German ultras group (Ultras 85 of 1. FC Saarbrücken). Marked the start of organized ultras in Germany.',
      ar: 'تأسس أول فرع للألتراس الألمانية باسم "Ultras 85" مع فريق 1. FC Saarbrücken. بداية حركة ألتراس منظمة في ألمانيا.'
    },
    image: '/images/timeline/1985-germany.jpg',
    group: 'Ultras 85',
  },
  {
    id: 5,
    year: 1990,
    region: 'europe',
    title: {
      en: 'Ultras Culture in the Balkans',
      ar: 'انتشار ثقافة الألتراس في البلقان'
    },
    location: {
      en: 'Split, Croatia',
      ar: 'سبليت، كرواتيا'
    },
    description: {
      en: "Ultras culture was present in the Balkans as well (e.g. Hajduk Split's Torcida founded in 1950). Continuation of organized fan culture in the region.",
      ar: 'انتشرت ثقافة الألتراس في البلقان أيضاً؛ فمثلاً تأسست تورسيدا سبلت بكرواتيا في 1950 (أقدم مجموعة مشجعين في أوروبا). استمرت ثقافة المشجعين المنظمين وتطورت هناك.'
    },
    image: '/images/timeline/1990-balkans.jpg',
    group: 'Torcida Split',
  },
  {
    id: 6,
    year: 2000,
    region: 'northAfrica',
    title: {
      en: 'Ultras Begin Forming in North Africa',
      ar: 'بداية ظهور مجموعات ألتراس شمال إفريقيا'
    },
    location: {
      en: 'Tunisia & Morocco',
      ar: 'تونس والمغرب'
    },
    description: {
      en: 'Ultras began forming in North Africa (Tunisia, Morocco) around 2000. Created new charged atmospheres in stadiums.',
      ar: 'بدأت مجموعات ألتراس شمال إفريقيا تظهر بوضوح في تونس والمغرب مع مطلع الألفية الجديدة. خلق ذلك أجواء مدرجية حماسية جديدة.'
    },
    image: '/images/timeline/2000-northafrica.jpg',
    group: 'North African Ultras',
  },
  {
    id: 7,
    year: 2005,
    region: 'northAfrica',
    title: {
      en: "Morocco's First Ultras - GREEN BOYS 2005",
      ar: 'تأسيس أول فرقة ألتراس مغربية - الجرين بويز'
    },
    location: {
      en: 'Casablanca, Morocco',
      ar: 'الدار البيضاء، المغرب'
    },
    description: {
      en: "Formation of Morocco's first ultras (Green Boys of Raja Casablanca in 2005). Official launch of ultras culture in Morocco.",
      ar: 'تأسست أول فرقة ألتراس مغربية باسم "الجرين بويز" مع نادي الرجاء البيضاوي. انطلاقة رسمية لثقافة الألتراس في المغرب.'
    },
    image: '/images/timeline/2005-morocco.jpg',
    group: 'GREEN BOYS 2005',
    highlight: true,
  },
  {
    id: 8,
    year: 2011,
    region: 'northAfrica',
    title: {
      en: 'Arab Spring - Ultras as Socio-Political Actors',
      ar: 'ثورات الربيع العربي - الألتراس كقوة اجتماعية'
    },
    location: {
      en: 'Egypt & Tunisia',
      ar: 'مصر وتونس'
    },
    description: {
      en: "Ultras groups played key roles in Egypt's Jan 25 Revolution and Tunisian protests (2011). Cementing their role as socio-political actors.",
      ar: 'شارك ألتراس بشكل بارز في ثورات مصر وتونس (ثورة 25 يناير 2011) واحتجاجات المجتمع المدني في المنطقة. حازوا على مصداقية كقوة ضغط اجتماعية وسياسية.'
    },
    image: '/images/timeline/2011-arabspring.jpg',
    group: 'Ultras Ahlawy / Winners',
    highlight: true,
  },
  {
    id: 9,
    year: 2016,
    region: 'northAfrica',
    title: {
      en: 'Hirak Rif - Ultras Lead Protests',
      ar: 'حراك الريف - الألتراس يقودون الاحتجاجات'
    },
    location: {
      en: 'Al Hoceima, Morocco',
      ar: 'الحسيمة، المغرب'
    },
    description: {
      en: 'Ultras (Chabab Rif Al Hoceima) helped lead the Hirak Rif protests for local rights. Leveraged their social capital for local rights.',
      ar: 'أدّت مجموعة "شباب الريف" الألتراس دوراً قيادياً في احتجاجات حراك الريف المطالبة بالحقوق المدنية. استغلوا رأس مالهم الاجتماعي للمطالبة بحقوق شعبهم.'
    },
    image: '/images/timeline/2016-hirak.jpg',
    group: 'Chabab Rif',
  },
  {
    id: 10,
    year: 2020,
    region: 'global',
    title: {
      en: 'Cultural Shift - Community & Art Initiatives',
      ar: 'التّحول الثقافي - المبادرات المجتمعية والفنية'
    },
    location: {
      en: 'Worldwide',
      ar: 'حول العالم'
    },
    description: {
      en: 'Some ultras engage in community/art initiatives (food drives, murals, online networks). Shift from violence to civic and artistic expression.',
      ar: 'اتجهت بعض مجموعات الألتراس نحو مبادرات مجتمعية وفنية (حملات غذاء، جداريات، تنظيم إلكتروني). تغيّرت صورتهم من العنف إلى التعبير المدني والإبداعي.'
    },
    image: '/images/timeline/2020-cultural.jpg',
    group: 'Global Ultras',
  },
];

export default function TimelinePage() {
  const t = useTranslations('timeline');
  const locale = useLocale();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = [
    { key: 'all', label: locale === 'ar' ? 'جميع المناطق' : 'All Regions' },
    { key: 'europe', label: locale === 'ar' ? 'أوروبا' : 'Europe' },
    { key: 'southAmerica', label: locale === 'ar' ? 'أمريكا الجنوبية' : 'South America' },
    { key: 'northAfrica', label: locale === 'ar' ? 'شمال إفريقيا' : 'North Africa' },
    { key: 'global', label: locale === 'ar' ? 'عالمي' : 'Global' },
  ];

  const getLocalizedText = (obj: { en: string; ar: string } | string): string => {
    if (typeof obj === 'string') return obj;
    return locale === 'ar' ? obj.ar : obj.en;
  };

  const filteredEvents = selectedRegion === 'all'
    ? timelineEvents
    : timelineEvents.filter(event => event.region === selectedRegion);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-500 text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <Filter className="h-5 w-5" />
              <span>{t('filterByRegion')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region.key}
                  onClick={() => setSelectedRegion(region.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedRegion === region.key
                      ? 'bg-green-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 md:-translate-x-0.5" />

            {/* Events */}
            <div className="space-y-12">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 md:-translate-x-2 rounded-full bg-green-600 border-4 border-zinc-950 z-10" />

                  {/* Year Badge */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -top-2 md:-top-8 px-3 py-1 rounded-full bg-zinc-800 text-white text-sm font-bold">
                    {event.year}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className={`p-6 rounded-2xl border ${
                      event.highlight
                        ? 'bg-green-600/10 border-green-600/30'
                        : 'bg-zinc-900 border-zinc-800'
                    }`}>
                      {/* Image */}
                      <div className="relative h-48 rounded-xl bg-zinc-800 mb-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-10" />
                        <img
                          src={event.image}
                          alt={getLocalizedText(event.title)}
                          className="w-full h-full object-cover"
                        />
                        {event.highlight && (
                          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-green-600 text-white text-xs font-bold">
                            Pioneer
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {getLocalizedText(event.location)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.year}
                        </span>
                      </div>

                      <h3 className={`text-xl font-bold mb-2 ${event.highlight ? 'text-green-500' : 'text-white'}`}>
                        {getLocalizedText(event.title)}
                      </h3>
                      <p className="text-zinc-400 mb-4">{getLocalizedText(event.description)}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 text-sm">
                        <Flag className="h-3.5 w-3.5" />
                        {event.group}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

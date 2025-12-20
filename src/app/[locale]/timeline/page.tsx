'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, MapPin, Flag, Calendar, Filter } from 'lucide-react';
import Button from '@/components/ui/Button';

const timelineEvents = [
  {
    id: 1,
    year: 1968,
    region: 'europe',
    title: 'Birth of the Ultras Movement',
    titleKey: 'birth',
    location: 'Milan, Italy',
    description: 'The first organized Ultra groups emerge in Italian football stadiums, establishing the foundations of modern supporter culture.',
    image: '/images/timeline/1968-milan.jpg',
    group: 'Fossa dei Leoni',
  },
  {
    id: 2,
    year: 1969,
    region: 'europe',
    title: 'Curva Sud Milano Founded',
    location: 'Milan, Italy',
    description: 'AC Milan supporters form Curva Sud, one of the most influential Ultra groups in history.',
    image: '/images/timeline/1969-curva.jpg',
    group: 'Curva Sud Milano',
  },
  {
    id: 3,
    year: 1973,
    region: 'southAmerica',
    title: 'Barra Bravas Take Shape',
    location: 'Buenos Aires, Argentina',
    description: 'Argentine supporter groups evolve into organized Barra Bravas, developing their unique style of passion.',
    image: '/images/timeline/1973-argentina.jpg',
    group: 'La 12',
  },
  {
    id: 4,
    year: 1990,
    region: 'europe',
    title: 'Yellow Wall Phenomenon',
    location: 'Dortmund, Germany',
    description: 'Borussia Dortmund\'s Südtribüne becomes the largest standing terrace in European football.',
    image: '/images/timeline/1990-dortmund.jpg',
    group: 'Yellow Wall',
  },
  {
    id: 5,
    year: 2005,
    region: 'northAfrica',
    title: 'GREEN BOYS 2005 - Morocco\'s First Ultras',
    location: 'Casablanca, Morocco',
    description: 'GREEN BOYS 2005 becomes the first Ultra group in Morocco, pioneering the North African Ultra movement for Raja Casablanca.',
    image: '/images/timeline/2005-greenboys.jpg',
    group: 'GREEN BOYS 2005',
    highlight: true,
  },
  {
    id: 6,
    year: 2007,
    region: 'northAfrica',
    title: 'Ultras Movement Spreads in Africa',
    location: 'Cairo, Egypt',
    description: 'Egyptian Ultras emerge, inspired by North African pioneers, creating some of the most passionate supporter groups.',
    image: '/images/timeline/2007-egypt.jpg',
    group: 'Ultras Ahlawy',
  },
  {
    id: 7,
    year: 2010,
    region: 'asia',
    title: 'Ultra Culture Reaches Asia',
    location: 'Jakarta, Indonesia',
    description: 'Indonesian supporters adopt Ultra traditions, creating vibrant atmospheres in Southeast Asian stadiums.',
    image: '/images/timeline/2010-indonesia.jpg',
    group: 'The Jakmania',
  },
];

export default function TimelinePage() {
  const t = useTranslations('timeline');
  const locale = useLocale();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = [
    { key: 'all', label: t('allRegions') },
    { key: 'europe', label: t('europe') },
    { key: 'southAmerica', label: t('southAmerica') },
    { key: 'northAfrica', label: t('northAfrica') },
    { key: 'asia', label: t('asia') },
  ];

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
                        <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                          <Flag className="h-12 w-12 text-zinc-600" />
                        </div>
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
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.year}
                        </span>
                      </div>

                      <h3 className={`text-xl font-bold mb-2 ${event.highlight ? 'text-green-500' : 'text-white'}`}>
                        {event.title}
                      </h3>
                      <p className="text-zinc-400 mb-4">{event.description}</p>
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

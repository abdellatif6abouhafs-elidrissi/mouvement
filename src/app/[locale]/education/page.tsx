'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  History,
  Heart,
  Palette,
  Globe,
  Book,
  ChevronRight,
  Play,
  CheckCircle,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const educationSections = [
  {
    id: 'what-is-ultra',
    icon: BookOpen,
    titleKey: 'whatIsUltra',
    description: 'Understanding the Ultra identity and what sets them apart from regular supporters.',
    articles: 5,
    image: '/images/education/ultra-identity.jpg',
  },
  {
    id: 'history',
    icon: History,
    titleKey: 'history',
    description: 'From Italian stadiums in the 1960s to a global phenomenon - trace the evolution.',
    articles: 12,
    image: '/images/education/history.jpg',
  },
  {
    id: 'values',
    icon: Heart,
    titleKey: 'values',
    description: 'Loyalty, passion, independence - the core principles that guide Ultra groups.',
    articles: 8,
    image: '/images/education/values.jpg',
  },
  {
    id: 'art-forms',
    icon: Palette,
    titleKey: 'artForms',
    description: 'Tifos, choreographies, banners, and pyrotechnics - the visual language of ultras.',
    articles: 15,
    image: '/images/education/art.jpg',
  },
  {
    id: 'global-movement',
    icon: Globe,
    titleKey: 'globalMovement',
    description: 'How Ultra culture spread across continents and adapted to local traditions.',
    articles: 10,
    image: '/images/education/global.jpg',
  },
  {
    id: 'glossary',
    icon: Book,
    titleKey: 'glossary',
    description: 'Key terms, expressions, and vocabulary used in Ultra culture worldwide.',
    articles: 1,
    image: '/images/education/glossary.jpg',
  },
];

const glossaryTerms = [
  { term: 'Capo', definition: 'The leader who directs chanting and choreography in the stands.' },
  { term: 'Curva', definition: 'Italian term for the curved end sections of a stadium where ultras gather.' },
  { term: 'Tifo', definition: 'A choreographed display using cards, banners, and flags to create visual art.' },
  { term: 'Corteo', definition: 'An organized march to the stadium before matches.' },
  { term: 'Barra Brava', definition: 'South American equivalent of Ultra groups, known for intense passion.' },
  { term: 'Pyro', definition: 'Pyrotechnics including flares, smoke bombs, and fireworks used in displays.' },
  { term: 'Striscione', definition: 'Large horizontal banners with messages or group names.' },
  { term: 'Ultras Mentalità', definition: 'The Ultra mentality - unconditional support regardless of results.' },
];

const quickFacts = [
  { label: 'Origin', value: '1968, Italy' },
  { label: 'First Groups', value: 'Milan, Inter' },
  { label: 'Global Reach', value: '100+ countries' },
  { label: 'Core Value', value: 'Unconditional Support' },
];

export default function EducationPage() {
  const t = useTranslations('education');
  const locale = useLocale();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
              <GraduationCap className="h-4 w-4" />
              Learn
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

      {/* Quick Facts */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                <p className="text-zinc-500 text-sm mb-1">{fact.label}</p>
                <p className="text-white font-bold">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverable className="h-full group">
                  {/* Image */}
                  <div className="relative h-40 bg-zinc-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                      <section.icon className="h-12 w-12 text-zinc-600" />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/20 transition-colors z-10" />
                  </div>

                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-green-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{t(section.titleKey)}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm mb-4">{section.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-500">{section.articles} articles</span>
                      <ChevronRight className="h-5 w-5 text-zinc-600 group-hover:text-green-500 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Book className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">{t('glossary')}</h2>
            </div>
            <Button variant="ghost" rightIcon={<ChevronRight className="h-4 w-4" />}>
              View All
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {glossaryTerms.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800"
              >
                <h4 className="text-green-500 font-bold mb-1">{item.term}</h4>
                <p className="text-zinc-400 text-sm">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            <div className="relative h-80 bg-zinc-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
              <button className="relative z-20 w-24 h-24 rounded-full bg-green-600 flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-green-600/30">
                <Play className="h-10 w-10 text-white ml-2" />
              </button>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Introduction to Ultra Culture</h3>
              <p className="text-zinc-400 mb-6">
                A 15-minute documentary exploring the origins, evolution, and global impact of the Ultra movement.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Subtitles in 6 languages
                </span>
                <span>15 min duration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Palette, Trophy, Play, Upload, Heart, Eye, Calendar, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const spotlightTifo = {
  id: 'tifo-week',
  title: 'Raja Casablanca - Derby Day',
  group: 'GREEN BOYS 2005',
  date: 'December 2024',
  location: 'Stade Mohammed V, Casablanca',
  description: 'A massive coordinated display covering the entire North Stand, celebrating 18 years of Ultra passion.',
  views: '125K',
  likes: '45K',
  image: '/images/tifos/spotlight.jpg',
};

const tifoGallery = [
  {
    id: 1,
    title: 'Champions League Night',
    group: 'Curva Sud Milano',
    club: 'AC Milan',
    date: '2023',
    likes: '89K',
    image: '/images/tifos/milan-cl.jpg',
  },
  {
    id: 2,
    title: 'Derby della Madonnina',
    group: 'Curva Nord',
    club: 'Inter Milan',
    date: '2023',
    likes: '78K',
    image: '/images/tifos/inter-derby.jpg',
  },
  {
    id: 3,
    title: 'Südtribüne Yellow Wave',
    group: 'Yellow Wall',
    club: 'Borussia Dortmund',
    date: '2023',
    likes: '156K',
    image: '/images/tifos/dortmund-wave.jpg',
  },
  {
    id: 4,
    title: 'African Glory',
    group: 'GREEN BOYS 2005',
    club: 'Raja Casablanca',
    date: '2023',
    likes: '92K',
    image: '/images/tifos/raja-glory.jpg',
  },
  {
    id: 5,
    title: 'La Bombonera Explodes',
    group: 'La 12',
    club: 'Boca Juniors',
    date: '2023',
    likes: '134K',
    image: '/images/tifos/boca-bombonera.jpg',
  },
  {
    id: 6,
    title: 'Cairo Derby',
    group: 'Ultras Ahlawy',
    club: 'Al Ahly',
    date: '2023',
    likes: '67K',
    image: '/images/tifos/ahly-derby.jpg',
  },
];

const howItsMade = [
  {
    step: 1,
    title: 'Concept & Design',
    description: 'Artists create detailed sketches and color plans, often months before the display.',
  },
  {
    step: 2,
    title: 'Material Preparation',
    description: 'Hundreds of volunteers cut, paint, and prepare fabric, flags, and card sections.',
  },
  {
    step: 3,
    title: 'Coordination',
    description: 'Each section leader receives instructions for precise timing and positioning.',
  },
  {
    step: 4,
    title: 'The Display',
    description: 'Thousands unite in perfect synchronization to create a breathtaking visual spectacle.',
  },
];

export default function TifosPage() {
  const t = useTranslations('tifos');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<'gallery' | 'howItsMade'>('gallery');

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-medium mb-6">
              <Palette className="h-4 w-4" />
              Visual Art
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

      {/* Spotlight Tifo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-6 w-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-white">{t('spotlight')}</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-auto bg-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/80 z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 lg:hidden" />
                <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-zinc-800 flex items-center justify-center">
                  <Palette className="h-24 w-24 text-zinc-700" />
                </div>
                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center z-20 group">
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {spotlightTifo.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {spotlightTifo.location}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{spotlightTifo.title}</h3>
                <p className="text-red-500 font-medium mb-4">{spotlightTifo.group}</p>
                <p className="text-zinc-400 mb-6">{spotlightTifo.description}</p>
                <div className="flex items-center gap-6 text-zinc-400">
                  <span className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    {spotlightTifo.views}
                  </span>
                  <span className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    {spotlightTifo.likes}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex gap-4">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'gallery'
                ? 'bg-red-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            {t('gallery')}
          </button>
          <button
            onClick={() => setActiveTab('howItsMade')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'howItsMade'
                ? 'bg-red-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            {t('howItsMade')}
          </button>
        </div>
      </section>

      {/* Gallery */}
      {activeTab === 'gallery' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tifoGallery.map((tifo, index) => (
                <motion.div
                  key={tifo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hoverable className="group overflow-hidden">
                    <div className="relative h-64 bg-zinc-800">
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <Palette className="h-16 w-16 text-zinc-600" />
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors z-10" />
                    </div>
                    <CardContent>
                      <h3 className="text-lg font-semibold text-white mb-1">{tifo.title}</h3>
                      <p className="text-red-500 text-sm mb-2">{tifo.group}</p>
                      <div className="flex items-center justify-between text-sm text-zinc-500">
                        <span>{tifo.club}</span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {tifo.likes}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Submit CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                <Upload className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{t('submit')}</h3>
                <p className="text-zinc-400 mb-6 max-w-md">
                  Share your group&apos;s tifo masterpiece with the global Ultra community
                </p>
                <Button>Upload Tifo</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It's Made */}
      {activeTab === 'howItsMade' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {howItsMade.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Video CTA */}
            <div className="mt-16 relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <div className="relative h-64 bg-zinc-800 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Watch the Documentary</h3>
                <p className="text-zinc-400">Behind the scenes: How ultras create stadium masterpieces</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

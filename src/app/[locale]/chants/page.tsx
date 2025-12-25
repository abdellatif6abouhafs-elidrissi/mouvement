'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Music, Play, Pause, Heart, Clock, Upload, Flag, Volume2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const chants = [
  {
    id: 1,
    title: 'Dima Raja',
    group: 'GREEN BOYS 2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    duration: '3:45',
    likes: '45K',
    lyrics: 'Dima Raja, Dima Raja...\nFi galbi anta, fi galbi anta...',
    origin: 'Created in 2006, this chant became the anthem of GREEN BOYS 2005, sung before every match.',
    audio: '/audio/dima-raja.mp3',
    featured: true,
  },
  {
    id: 2,
    title: 'You\'ll Never Walk Alone',
    group: 'The Kop',
    club: 'Liverpool FC',
    country: 'England',
    duration: '2:58',
    likes: '234K',
    lyrics: 'When you walk through a storm...',
    origin: 'Adopted from the 1945 Rodgers and Hammerstein musical Carousel.',
    audio: '/audio/ynwa.mp3',
  },
  {
    id: 3,
    title: 'Grazie Roma',
    group: 'Curva Sud',
    club: 'AS Roma',
    country: 'Italy',
    duration: '4:12',
    likes: '89K',
    lyrics: 'Grazie Roma, che ci fai sognare...',
    origin: 'Written by Antonello Venditti in 1983.',
    audio: '/audio/grazie-roma.mp3',
  },
  {
    id: 4,
    title: 'Dale Bo',
    group: 'La 12',
    club: 'Boca Juniors',
    country: 'Argentina',
    duration: '2:30',
    likes: '156K',
    lyrics: 'Dale Bo, dale Bo...',
    origin: 'A classic Barra Brava chant that echoes through La Bombonera.',
    audio: '/audio/dale-bo.mp3',
  },
  {
    id: 5,
    title: 'Hala Madrid',
    group: 'Ultras Sur',
    club: 'Real Madrid',
    country: 'Spain',
    duration: '3:15',
    likes: '178K',
    lyrics: 'Hala Madrid y nada más...',
    origin: 'The official anthem adopted by supporters worldwide.',
    audio: '/audio/hala-madrid.mp3',
  },
  {
    id: 6,
    title: 'Forza Lazio',
    group: 'Irriducibili',
    club: 'SS Lazio',
    country: 'Italy',
    duration: '3:30',
    likes: '67K',
    lyrics: 'Forza Lazio, forza aquile...',
    origin: 'A traditional Roman supporter chant.',
    audio: '/audio/forza-lazio.mp3',
  },
];

export default function ChantsPage() {
  const t = useTranslations('chants');
  const locale = useLocale();
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [selectedChant, setSelectedChant] = useState<typeof chants[0] | null>(null);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  const featuredChant = chants.find(c => c.featured);

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
              <Music className="h-4 w-4" />
              Heritage
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

      {/* Featured Chant */}
      {featuredChant && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Volume2 className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">Featured Chant</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-600/20 to-zinc-900 border border-green-600/30 p-8"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Play Button */}
                <button
                  onClick={() => togglePlay(featuredChant.id)}
                  className="flex-shrink-0 w-32 h-32 rounded-full bg-green-600 flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-green-600/30"
                >
                  {playingId === featuredChant.id ? (
                    <Pause className="h-12 w-12 text-white" />
                  ) : (
                    <Play className="h-12 w-12 text-white ml-2" />
                  )}
                </button>

                {/* Info */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">{featuredChant.title}</h3>
                  <p className="text-green-400 font-medium mb-4">{featuredChant.group} - {featuredChant.club}</p>

                  {/* Waveform placeholder */}
                  <div className="h-16 bg-zinc-800/50 rounded-xl mb-4 flex items-center px-4 gap-1">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all ${playingId === featuredChant.id ? 'bg-green-500 animate-pulse' : 'bg-zinc-600'
                          }`}
                        style={{ height: `${(Math.sin(i * 0.5) * 0.5 + 0.5) * 40 + 20}%` }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-6 text-zinc-400">
                    <span className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      {featuredChant.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      {featuredChant.likes}
                    </span>
                    <span className="flex items-center gap-2">
                      <Flag className="h-5 w-5" />
                      {featuredChant.country}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Chants Library */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">{t('listen')}</h2>

          <div className="grid gap-4">
            {chants.filter(c => !c.featured).map((chant, index) => (
              <motion.div
                key={chant.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group p-4 rounded-xl border transition-colors cursor-pointer ${selectedChant?.id === chant.id
                    ? 'bg-green-600/10 border-green-600/30'
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                  }`}
                onClick={() => setSelectedChant(selectedChant?.id === chant.id ? null : chant)}
              >
                <div className="flex items-center gap-4">
                  {/* Play Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay(chant.id);
                    }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 group-hover:bg-green-600 flex items-center justify-center transition-colors"
                  >
                    {playingId === chant.id ? (
                      <Pause className="h-5 w-5 text-white" />
                    ) : (
                      <Play className="h-5 w-5 text-white ml-0.5" />
                    )}
                  </button>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate">{chant.title}</h3>
                    <p className="text-sm text-zinc-400 truncate">{chant.group} - {chant.club}</p>
                  </div>

                  {/* Meta */}
                  <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Flag className="h-4 w-4" />
                      {chant.country}
                    </span>
                    <span>{chant.duration}</span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {chant.likes}
                    </span>
                  </div>
                </div>

                {/* Expanded Content */}
                {selectedChant?.id === chant.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-zinc-800"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-400 uppercase mb-2">{t('lyrics')}</h4>
                        <pre className="text-white whitespace-pre-wrap font-sans">{chant.lyrics}</pre>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-400 uppercase mb-2">{t('origin')}</h4>
                        <p className="text-zinc-400">{chant.origin}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Submit CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
              <Upload className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t('submit')}</h3>
              <p className="text-zinc-400 mb-6 max-w-md">
                Share your group&apos;s chants and preserve the heritage for future generations
              </p>
              <Button>Submit a Chant</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

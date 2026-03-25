'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette, Trophy, Play, Upload, Heart, Eye, Calendar, MapPin,
  X, ChevronLeft, ChevronRight, ZoomIn, Share2, Download
} from 'lucide-react';
import Button from '@/components/ui/Button';

const spotlightTifo = {
  id: 'tifo-week',
  title: 'Raja Casablanca - Derby Day',
  group: 'GREEN BOYS 2005',
  date: 'December 2024',
  location: 'Stade Mohammed V, Casablanca',
  description: 'A massive coordinated display covering the entire North Stand, celebrating 18 years of Ultra passion.',
  views: '125K',
  likes: '45K',
  image: '/images/tifos/tifo-1.webp',
};

const tifoGallery = [
  { id: 1, title: 'Champions League Night', group: 'Curva Sud Milano', club: 'AC Milan', country: 'Italy', date: '2023', likes: 89000, image: '/images/tifos/tifo-2.webp', size: 'large' },
  { id: 2, title: 'Derby della Madonnina', group: 'Curva Nord', club: 'Inter Milan', country: 'Italy', date: '2023', likes: 78000, image: '/images/tifos/tifo-3.webp', size: 'small' },
  { id: 3, title: 'Südtribüne Yellow Wave', group: 'Yellow Wall', club: 'Borussia Dortmund', country: 'Germany', date: '2023', likes: 156000, image: '/images/tifos/tifo-4.webp', size: 'small' },
  { id: 4, title: 'African Glory', group: 'GREEN BOYS 2005', club: 'Raja Casablanca', country: 'Morocco', date: '2023', likes: 92000, image: '/images/tifos/tifo-1.webp', size: 'large' },
  { id: 5, title: 'La Bombonera Explodes', group: 'La 12', club: 'Boca Juniors', country: 'Argentina', date: '2023', likes: 134000, image: '/images/tifos/tifo-2.webp', size: 'small' },
  { id: 6, title: 'Cairo Derby', group: 'Ultras Ahlawy', club: 'Al Ahly', country: 'Egypt', date: '2023', likes: 67000, image: '/images/tifos/tifo-3.webp', size: 'small' },
  { id: 7, title: 'El Clasico Nights', group: 'Boixos Nois', club: 'FC Barcelona', country: 'Spain', date: '2023', likes: 201000, image: '/images/tifos/tifo-4.webp', size: 'large' },
  { id: 8, title: 'Green Storm', group: 'GREEN BOYS 2005', club: 'Raja Casablanca', country: 'Morocco', date: '2024', likes: 112000, image: '/images/tifos/tifo-1.webp', size: 'small' },
];

const howItsMade = [
  { step: 1, title: 'Concept & Design', description: 'Artists create detailed sketches and color plans, often months before the display.', icon: '🎨' },
  { step: 2, title: 'Material Preparation', description: 'Hundreds of volunteers cut, paint, and prepare fabric, flags, and card sections.', icon: '✂️' },
  { step: 3, title: 'Coordination', description: 'Each section leader receives instructions for precise timing and positioning.', icon: '📋' },
  { step: 4, title: 'The Display', description: 'Thousands unite in perfect synchronization to create a breathtaking visual spectacle.', icon: '🔥' },
];

const regions = ['All', 'Morocco', 'Italy', 'Germany', 'Argentina', 'Egypt', 'Spain'];

function formatLikes(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

export default function TifosPage() {
  const t = useTranslations('tifos');
  const [activeTab, setActiveTab] = useState<'gallery' | 'howItsMade'>('gallery');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [likedTifos, setLikedTifos] = useState<Set<number>>(new Set());
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredTifos = selectedRegion === 'All'
    ? tifoGallery
    : tifoGallery.filter(t => t.country === selectedRegion);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedTifos(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevTifo = () => setLightboxIndex(i => i !== null ? (i - 1 + filteredTifos.length) % filteredTifos.length : null);
  const nextTifo = () => setLightboxIndex(i => i !== null ? (i + 1) % filteredTifos.length : null);

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #16a34a33 0%, transparent 50%), radial-gradient(circle at 80% 20%, #16a34a22 0%, transparent 40%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-500 text-sm font-medium mb-6">
              <Palette className="h-4 w-4" />
              Visual Art
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              {t('subtitle')}
            </p>

            {/* Stats Bar */}
            <div className="inline-flex gap-8 px-8 py-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm">
              {[
                { value: '2,400+', label: 'Tifos Archived' },
                { value: '340+', label: 'Groups' },
                { value: '58', label: 'Countries' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
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
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto bg-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/80 z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 lg:hidden" />
                <img src={spotlightTifo.image} alt={spotlightTifo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <button className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-20 h-20 rounded-full bg-green-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-green-600/30">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </motion.div>
                </button>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{spotlightTifo.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{spotlightTifo.location}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{spotlightTifo.title}</h3>
                <p className="text-green-500 font-medium mb-4">{spotlightTifo.group}</p>
                <p className="text-zinc-400 mb-8">{spotlightTifo.description}</p>
                <div className="flex items-center gap-6 text-zinc-400">
                  <span className="flex items-center gap-2"><Eye className="h-5 w-5" />{spotlightTifo.views}</span>
                  <span className="flex items-center gap-2 text-red-400"><Heart className="h-5 w-5 fill-red-400" />{spotlightTifo.likes}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex gap-4">
          {(['gallery', 'howItsMade'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === tab ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
            >
              {t(tab)}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Tab */}
      {activeTab === 'gallery' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Region Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedRegion === region ? 'bg-green-600 text-white scale-105' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Masonry-style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
              {filteredTifos.map((tifo, index) => {
                const isLiked = likedTifos.has(tifo.id);
                const likeCount = tifo.likes + (isLiked ? 1 : 0);
                const isLarge = tifo.size === 'large';

                return (
                  <motion.div
                    key={tifo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer ${isLarge ? 'md:row-span-2' : ''}`}
                    onClick={() => openLightbox(index)}
                  >
                    {/* Image */}
                    <div className={`relative bg-zinc-800 overflow-hidden ${isLarge ? 'h-80 md:h-full md:min-h-[400px]' : 'h-56'}`}>
                      <img
                        src={tifo.image}
                        alt={tifo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="opacity-0 group-hover:opacity-100 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-opacity"
                        >
                          <ZoomIn className="h-6 w-6 text-white" />
                        </motion.div>
                      </div>

                      {/* Like Button */}
                      <button
                        onClick={(e) => toggleLike(tifo.id, e)}
                        className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white text-xs font-medium hover:bg-black/60 transition-colors"
                      >
                        <motion.div animate={isLiked ? { scale: [1, 1.4, 1] } : {}} transition={{ duration: 0.3 }}>
                          <Heart className={`h-3.5 w-3.5 transition-colors ${isLiked ? 'fill-red-400 text-red-400' : 'text-white'}`} />
                        </motion.div>
                        {formatLikes(likeCount)}
                      </button>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-white font-bold text-lg leading-tight">{tifo.title}</h3>
                        <p className="text-green-400 text-sm">{tifo.group}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-zinc-400">
                          <span>{tifo.club}</span>
                          <span>·</span>
                          <span>{tifo.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Submit CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600/20 via-zinc-900 to-zinc-900 border border-green-600/30 p-10 text-center"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #16a34a 0%, transparent 70%)' }} />
              <Upload className="h-12 w-12 text-green-500 mx-auto mb-4 relative z-10" />
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{t('submit')}</h3>
              <p className="text-zinc-400 mb-6 max-w-md mx-auto relative z-10">
                Share your group&apos;s tifo masterpiece with the global Ultra community
              </p>
              <Button className="relative z-10">Upload Tifo</Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* How It's Made Tab */}
      {activeTab === 'howItsMade' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {howItsMade.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-600/30 transition-colors group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-600/10 border border-green-600/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Step {step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Video CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-12 relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer group"
            >
              <div className="relative h-72 bg-zinc-800 flex items-center justify-center">
                <img src="/images/tifos/tifo-4.webp" alt="Documentary" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                <motion.button whileHover={{ scale: 1.1 }} className="relative z-10 w-20 h-20 rounded-full bg-green-600 flex items-center justify-center shadow-xl shadow-green-600/40">
                  <Play className="h-8 w-8 text-white ml-1" />
                </motion.button>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Watch the Documentary</h3>
                <p className="text-zinc-400">Behind the scenes: How ultras create stadium masterpieces</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Nav Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevTifo(); }}
              className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Nav Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextTifo(); }}
              className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredTifos[lightboxIndex]?.image || spotlightTifo.image}
                alt={filteredTifos[lightboxIndex]?.title || spotlightTifo.title}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />

              {/* Info Bar */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl">{filteredTifos[lightboxIndex]?.title || spotlightTifo.title}</h3>
                  <p className="text-green-400">{filteredTifos[lightboxIndex]?.group || spotlightTifo.group}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
                    <Share2 className="h-4 w-4" /> Share
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
                    <Download className="h-4 w-4" /> Save
                  </button>
                </div>
              </div>

              {/* Counter */}
              <div className="mt-3 text-center text-zinc-500 text-sm">
                {lightboxIndex + 1} / {filteredTifos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

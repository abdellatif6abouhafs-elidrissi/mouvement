'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, BookOpen, History, Heart, Palette, Globe,
  Book, ChevronRight, Play, CheckCircle, Search, ArrowRight,
  Clock, Users, Star, Flame, Shield, Music,
} from 'lucide-react';
import Button from '@/components/ui/Button';

/* ─── DATA ─────────────────────────────────────────────────────────── */

const learningPath = [
  { step: 1, title: 'Origins', desc: 'Italy 1968 — where it all started', icon: History, color: 'from-yellow-600 to-orange-600' },
  { step: 2, title: 'Identity', desc: 'What makes an Ultra different', icon: Shield, color: 'from-blue-600 to-indigo-600' },
  { step: 3, title: 'Art & Tifo', desc: 'Visual language of the stands', icon: Palette, color: 'from-pink-600 to-rose-600' },
  { step: 4, title: 'Chants', desc: 'The sound that moves stadiums', icon: Music, color: 'from-purple-600 to-violet-600' },
  { step: 5, title: 'Global Spread', desc: 'From Italy to every continent', icon: Globe, color: 'from-green-600 to-emerald-600' },
  { step: 6, title: 'Modern Era', desc: 'Community, art & social impact', icon: Flame, color: 'from-red-600 to-orange-600' },
];

const educationModules = [
  {
    id: 'what-is-ultra',
    icon: BookOpen,
    title: 'What is an Ultra?',
    description: 'Understanding the Ultra identity — the philosophy, the commitment, and what truly sets them apart from regular football supporters.',
    articles: 5,
    duration: '25 min',
    level: 'Beginner',
    image: '/images/gallery/gallery-1.webp',
    color: 'green',
    topics: ['Identity', 'Philosophy', 'Mentality'],
  },
  {
    id: 'history',
    icon: History,
    title: 'History of the Movement',
    description: 'From the first Ultras groups in Italy in the 1960s to a global cultural phenomenon — trace the full evolution across decades.',
    articles: 12,
    duration: '60 min',
    level: 'Intermediate',
    image: '/images/tifos/tifo-2.webp',
    color: 'yellow',
    topics: ['1960s Italy', 'Expansion', 'Modern era'],
  },
  {
    id: 'values',
    icon: Heart,
    title: 'Values & Code',
    description: 'Loyalty, passion, independence, anti-commercialism — the core principles and unwritten code that guide every authentic Ultra group.',
    articles: 8,
    duration: '40 min',
    level: 'Beginner',
    image: '/images/gallery/gallery-2.webp',
    color: 'red',
    topics: ['Loyalty', 'Code of honor', 'Brotherhood'],
  },
  {
    id: 'art-forms',
    icon: Palette,
    title: 'Art Forms & Tifo',
    description: 'Tifos, choreographies, banners, pyrotechnics, murals — the rich visual and artistic language that Ultras have developed.',
    articles: 15,
    duration: '55 min',
    level: 'Intermediate',
    image: '/images/tifos/tifo-1.webp',
    color: 'pink',
    topics: ['Tifo making', 'Choreos', 'Pyro'],
  },
  {
    id: 'global-movement',
    icon: Globe,
    title: 'Global Spread',
    description: 'How Ultra culture crossed borders from Italy to France, the Balkans, North Africa, South America, and beyond.',
    articles: 10,
    duration: '45 min',
    level: 'Advanced',
    image: '/images/gallery/gallery-3.webp',
    color: 'blue',
    topics: ['Africa', 'Americas', 'Asia'],
  },
  {
    id: 'social-impact',
    icon: Users,
    title: 'Social & Political Impact',
    description: 'Ultras as socio-political actors — community projects, protests, the Arab Spring, and how fan groups shape society.',
    articles: 7,
    duration: '35 min',
    level: 'Advanced',
    image: '/images/gallery/gallery-4.webp',
    color: 'orange',
    topics: ['Arab Spring', 'Community', 'Protests'],
  },
];

const glossaryTerms = [
  { term: 'Capo', origin: 'Italian', definition: 'The leader who directs chanting and choreography in the stands using a megaphone.' },
  { term: 'Curva', origin: 'Italian', definition: 'The curved end sections of a stadium where Ultra groups traditionally gather.' },
  { term: 'Tifo', origin: 'Italian', definition: 'A choreographed display using cards, banners, and flags to create large-scale visual art.' },
  { term: 'Corteo', origin: 'Italian', definition: 'An organized, ritualized march to the stadium before matches, often with drums and flares.' },
  { term: 'Barra Brava', origin: 'Spanish', definition: 'South American equivalent of Ultra groups, known for intense atmosphere and organized support.' },
  { term: 'Pyro', origin: 'English', definition: 'Pyrotechnics including flares, smoke bombs, and fireworks used in visual displays.' },
  { term: 'Striscione', origin: 'Italian', definition: 'Large horizontal banners carrying messages, dedications, or group names.' },
  { term: 'Ultras Mentalità', origin: 'Italian', definition: 'The Ultra mentality — unconditional support regardless of match results.' },
  { term: 'Viraje', origin: 'Spanish', definition: 'The standing section behind the goal — the Spanish equivalent of the Curva.' },
  { term: 'Kop', origin: 'English', definition: 'A steep terraced section in English stadiums, named after Spion Kop in South Africa.' },
  { term: 'Direttivo', origin: 'Italian', definition: 'The governing board or leadership committee of an Ultra group.' },
  { term: 'Trasferta', origin: 'Italian', definition: 'An away match or away trip, considered the ultimate test of Ultra dedication.' },
];

const featuredRead = {
  title: 'The Birth of Ultra Culture: Italy 1968',
  excerpt: 'In the autumn of 1968, inside the San Siro stadium, a group of young AC Milan fans created something that would change football culture forever. This is the story of how a few passionate supporters invented the Ultra movement...',
  readTime: '15 min',
  category: 'History',
  image: '/images/tifos/tifo-3.webp',
};

const levelColors: Record<string, string> = {
  Beginner: 'text-green-400 bg-green-400/10 border-green-400/20',
  Intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Advanced: 'text-red-400 bg-red-400/10 border-red-400/20',
};

/* ─── COMPONENT ─────────────────────────────────────────────────────── */

export default function EducationPage() {
  const t = useTranslations('education');
  const locale = useLocale();
  const [glossarySearch, setGlossarySearch] = useState('');
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const filteredGlossary = glossaryTerms.filter(
    (g) =>
      g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      g.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 60%, #16a34a18 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, #16a34a10 0%, transparent 50%)' }} />
        {/* Decorative blurred circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-500 text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              Education Hub
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              {t('subtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Start Learning
              </Button>
              <Button variant="outline" size="lg" leftIcon={<Play className="h-5 w-5" />}>
                Watch Intro
              </Button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: '6', label: 'Modules', icon: BookOpen },
              { value: '57', label: 'Articles', icon: Star },
              { value: '15+', label: 'Hours of content', icon: Clock },
              { value: '6', label: 'Languages', icon: Globe },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm text-center">
                <stat.icon className="h-5 w-5 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Learning Path ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Your Learning Path</h2>
            <p className="text-zinc-400">Follow the journey from origins to the modern movement</p>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-zinc-700 to-transparent hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {learningPath.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-7 w-7 text-white" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-xs font-bold text-white">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-tight">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Modules Grid ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Education Modules</h2>
              <p className="text-zinc-400">Deep-dive courses covering every aspect of Ultra culture</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationModules.map((mod, index) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
              >
                <div className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-green-600/40 transition-all hover:shadow-xl hover:shadow-green-600/5 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-44 bg-zinc-800 overflow-hidden flex-shrink-0">
                    <img src={mod.image} alt={mod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <mod.icon className="h-5 w-5 text-green-400" />
                    </div>
                    {/* Level badge */}
                    <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium border ${levelColors[mod.level]}`}>
                      {mod.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{mod.title}</h3>
                    <p className="text-zinc-400 text-sm mb-4 flex-1 leading-relaxed">{mod.description}</p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {mod.topics.map(topic => (
                        <span key={topic} className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs">{topic}</span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                      <div className="flex items-center gap-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />{mod.articles} articles</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{mod.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                        Start <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Read ── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 lg:h-auto min-h-[280px] bg-zinc-800 overflow-hidden">
                <img src={featuredRead.image} alt={featuredRead.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent lg:to-zinc-900/90 bg-gradient-to-t to-zinc-900/80" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-green-600 text-white text-xs font-bold">
                    ⭐ Featured Read
                  </span>
                </div>
              </div>
              {/* Text side */}
              <div className="bg-zinc-900 border border-zinc-800 p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold text-green-500 uppercase tracking-widest mb-3">{featuredRead.category}</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors leading-snug">
                  {featuredRead.title}
                </h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{featuredRead.excerpt}</p>
                <div className="flex items-center gap-4">
                  <Button rightIcon={<ArrowRight className="h-4 w-4" />}>Read Article</Button>
                  <span className="flex items-center gap-1.5 text-zinc-500 text-sm">
                    <Clock className="h-4 w-4" />{featuredRead.readTime} read
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Glossary ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Book className="h-6 w-6 text-green-500" />
              <div>
                <h2 className="text-2xl font-bold text-white">{t('glossary')}</h2>
                <p className="text-zinc-500 text-sm">Essential Ultra vocabulary</p>
              </div>
            </div>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search terms..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-green-600 w-52"
              />
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <div className="grid sm:grid-cols-2 gap-3">
              {filteredGlossary.map((item, index) => (
                <motion.div
                  key={item.term}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.03 }}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-green-600/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h4 className="text-green-400 font-bold text-lg">{item.term}</h4>
                    <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded-full flex-shrink-0">{item.origin}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.definition}</p>
                </motion.div>
              ))}
              {filteredGlossary.length === 0 && (
                <div className="col-span-2 text-center py-10 text-zinc-500">
                  No terms found for &quot;{glossarySearch}&quot;
                </div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Video Intro ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group cursor-pointer"
          >
            <div className="relative h-80 bg-zinc-800 flex items-center justify-center overflow-hidden">
              <img src="/images/tifos/tifo-4.webp" alt="Documentary" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-24 h-24 rounded-full bg-green-600 flex items-center justify-center shadow-2xl shadow-green-600/40"
              >
                <Play className="h-10 w-10 text-white ml-2" />
              </motion.button>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Introduction to Ultra Culture</h3>
              <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                A 15-minute documentary exploring the origins, evolution, and global impact of the Ultra movement — from Milan to Casablanca.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
                <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" />Subtitles in 6 languages</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-green-500" />15 min duration</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-green-500" />48K+ views</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-10 bg-gradient-to-br from-green-600/20 via-zinc-900 to-zinc-900 border border-green-600/20"
          >
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at center, #16a34a 0%, transparent 70%)' }} />
            <GraduationCap className="h-14 w-14 text-green-500 mx-auto mb-4 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Ready to go deeper?</h3>
            <p className="text-zinc-400 mb-6 relative z-10">
              Join the community, contribute your knowledge, and explore the full archive of Ultra culture.
            </p>
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              <Link href={`/${locale}/register`}>
                <Button size="lg">Create Account</Button>
              </Link>
              <Link href={`/${locale}/articles`}>
                <Button variant="outline" size="lg">Browse Articles</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

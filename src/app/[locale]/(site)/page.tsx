'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  BookOpen,
  Users,
  ArrowRight,
  Play,
  Heart,
  Flag,
  Flame,
  MapPin,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { GroupOfWeek, TifoSpotlight, CulturalPoll } from '@/components/editorial';
import CountUp from '@/components/ui/CountUp';

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
  '/images/hero/hero-5.jpg',
];

const featuredGroups = [
  {
    id: 'green-boys-2005',
    name: 'GREEN BOYS 2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    countryKey: 'morocco',
    image: '/images/groups/green-boys-2005.webp',
    logo: '/images/logos/green-boys-2005-10.webp',
    members: '60K+',
    color: 'from-green-600 to-green-800',
  },
  {
    id: 'curva-sud-milano',
    name: 'Curva Sud Milano',
    club: 'AC Milan',
    country: 'Italy',
    countryKey: 'italy',
    image: '/images/groups/curva-sud-milano.webp',
    logo: '/images/logos/curva-sud-milano-6.webp',
    members: '100K+',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 'curva-nord-inter',
    name: 'Curva Nord Inter',
    club: 'Inter Milan',
    country: 'Italy',
    countryKey: 'italy',
    image: '/images/groups/curva-nord-inter-14.webp',
    logo: '/images/logos/curva-nord-inter-4.webp',
    members: '90K+',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'la-12',
    name: 'La 12',
    club: 'Boca Juniors',
    country: 'Argentina',
    countryKey: 'argentina',
    image: '/images/groups/la-12.webp',
    logo: '/images/groups/la-12.webp',
    members: '50K+',
    color: 'from-yellow-500 to-blue-700',
  },
  {
    id: 'brigade-oujda',
    name: 'Brigade Oujda',
    club: 'Mouloudia Oujda',
    country: 'Morocco',
    countryKey: 'morocco',
    image: '/images/groups/brigade-oujda-3.webp',
    logo: '/images/groups/brigade-oujda-3.webp',
    members: '25K+',
    color: 'from-orange-600 to-orange-800',
  },
  {
    id: 'ultras-ahlawy',
    name: 'Ultras Ahlawy',
    club: 'Al Ahly',
    country: 'Egypt',
    countryKey: 'egypt',
    image: '/images/groups/ultras-ahlawy.webp',
    logo: '/images/groups/ultras-ahlawy.webp',
    members: '80K+',
    color: 'from-red-700 to-red-900',
  },
];

export default function HomePage() {
  const t = useTranslations('home');
  const tStats = useTranslations('home.stats');
  const locale = useLocale();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: 500, suffix: '+', label: tStats('groups'), icon: Users },
    { value: 50, suffix: '+', label: tStats('countries'), icon: Globe },
    { value: 1000, suffix: '+', label: tStats('articles'), icon: BookOpen },
    { value: 100, suffix: 'K+', label: tStats('community'), icon: Heart },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt="Ultra supporters"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50 z-10" />
        </div>

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse z-20" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse z-20" style={{ animationDelay: '200ms' }} />

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-600 dark:text-green-500 text-sm font-medium mb-8">
              <Flame className="h-4 w-4" />
              {t('badge')}
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              {t('title')}{' '}
              <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/ultras`}>
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  {t('exploreButton')}
                </Button>
              </Link>
              <Link href={`/${locale}/articles`}>
                <Button variant="outline" size="lg" leftIcon={<Play className="h-5 w-5" />}>
                  {t('watchButton')}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm dark:shadow-none"
              >
                <stat.icon className="h-6 w-6 text-green-600 dark:text-green-500 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2500} />
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="w-6 h-10 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Groups Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
                {t('featuredGroups')}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
                {t('featuredGroupsSubtitle')}
              </p>
            </div>
            <Link href={`/${locale}/ultras`} className="mt-4 sm:mt-0">
              <Button variant="ghost" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {t('viewAllGroups')}
              </Button>
            </Link>
          </div>

          {/* Groups Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGroups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${locale}/ultras/${group.id}`}>
                  <Card hoverable className="group overflow-hidden">
                    {/* Image with gradient overlay */}
                    <div className="relative h-52 bg-zinc-200 dark:bg-zinc-800">
                      <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-40 z-10`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <Image
                        src={group.image}
                        alt={`${group.name} - ${group.club} Ultra supporters from ${group.country}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Floating badge */}
                      <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                        <span className="text-xs font-medium text-white">{group.members}</span>
                      </div>
                    </div>

                    <CardContent className="relative z-20 -mt-10">
                      {/* Country flag indicator */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg`}>
                          <Flag className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-zinc-400">
                          <MapPin className="h-3 w-3" />
                          {group.country}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {group.name}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{group.club}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-green-600 dark:text-green-500 font-medium">
                          View Group
                        </span>
                        <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-zinc-50 dark:bg-transparent">
        <div className="absolute inset-0 section-gradient" />
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg dark:shadow-none">
            <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-5" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-600/10 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600/10 border border-green-600/20 text-green-600 dark:text-green-500 text-xs font-medium mb-6">
                  <Globe className="h-3.5 w-3.5" />
                  {t('interactiveMap')}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  {t('mapTitle')} <span className="gradient-text">{t('mapTitleHighlight')}</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
                  {t('mapSubtitle')}
                </p>
                <Link href={`/${locale}/map`}>
                  <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                    {t('openMap')}
                  </Button>
                </Link>
              </div>

              {/* Map Preview */}
              <div className="flex-1 relative">
                <div className="aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                  <img
                    src="/images/map-bg.png"
                    alt="Interactive Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating markers */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '200ms' }} />
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '400ms' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
                {t('latestArticles')}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
                {t('articlesSubtitle')}
              </p>
            </div>
            <Link href={`/${locale}/articles`} className="mt-4 sm:mt-0">
              <Button variant="ghost" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {t('allArticles')}
              </Button>
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'The Art of Tifo: A Visual Revolution',
                category: 'Culture',
                readTime: '8 min',
                image: '/images/articles/article-1.jpg',
              },
              {
                title: 'South American Passion: Barra Bravas History',
                category: 'History',
                readTime: '12 min',
                image: '/images/articles/article-2.jpg',
              },
              {
                title: 'Interview: Leaders of the Curva Nord',
                category: 'Interview',
                readTime: '15 min',
                image: '/images/articles/article-3.jpg',
              },
            ].map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card hoverable className="h-full">
                  {/* Image */}
                  <div className="relative h-56 bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent z-10" />
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-green-600/90 text-white text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <CardContent>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      <span>{article.readTime} read</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-100 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Group of Week - takes 2 columns */}
            <div className="lg:col-span-2">
              <GroupOfWeek />
            </div>
            {/* Cultural Poll */}
            <div className="lg:col-span-1">
              <CulturalPoll />
            </div>
          </div>

          {/* Tifo Spotlight - full width */}
          <div className="mt-8">
            <TifoSpotlight />
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              {t('joinTitle')} <span className="gradient-text">{t('joinHighlight')}</span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
              {t('joinSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/register`}>
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  {t('createAccount')}
                </Button>
              </Link>
              <Link href={`/${locale}/about`}>
                <Button variant="outline" size="lg">
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

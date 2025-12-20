'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
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

const featuredGroups = [
  {
    id: 'green-boys',
    name: 'GREEN BOYS 2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    countryKey: 'morocco',
    image: '/images/groups/green-boys.jpg',
    members: '60K+',
  },
  {
    id: 'ultras-eagles',
    name: 'Ultras Eagles',
    club: 'Raja Casablanca',
    country: 'Morocco',
    countryKey: 'morocco',
    image: '/images/groups/ultras-eagles.jpg',
    members: '50K+',
  },
  {
    id: 'curva-sud',
    name: 'Curva Sud Milano',
    club: 'AC Milan',
    country: 'Italy',
    countryKey: 'italy',
    image: '/images/groups/curva-sud.jpg',
    members: '100K+',
  },
  {
    id: 'yellow-wall',
    name: 'Yellow Wall',
    club: 'Borussia Dortmund',
    country: 'Germany',
    countryKey: 'germany',
    image: '/images/groups/yellow-wall.jpg',
    members: '80K+',
  },
];

export default function HomePage() {
  const t = useTranslations('home');
  const tStats = useTranslations('home.stats');
  const locale = useLocale();

  const stats = [
    { value: '500+', label: tStats('groups'), icon: Users },
    { value: '50+', label: tStats('countries'), icon: Globe },
    { value: '1000+', label: tStats('articles'), icon: BookOpen },
    { value: '100K+', label: tStats('community'), icon: Heart },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '200ms' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-500 text-sm font-medium mb-8">
              <Flame className="h-4 w-4" />
              {t('badge')}
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              {t('title')}{' '}
              <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
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
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm"
              >
                <stat.icon className="h-6 w-6 text-green-500 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Groups Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                {t('featuredGroups')}
              </h2>
              <p className="text-zinc-400 max-w-lg">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    {/* Image */}
                    <div className="relative h-48 bg-zinc-800">
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                        <Flag className="h-12 w-12 text-zinc-700" />
                      </div>
                    </div>

                    <CardContent className="relative z-20 -mt-8">
                      <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                        <MapPin className="h-3 w-3" />
                        {group.country}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {group.name}
                      </h3>
                      <p className="text-sm text-zinc-400">{group.club}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          {group.members} members
                        </span>
                        <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-green-500 transition-colors" />
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 section-gradient" />
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-5" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-600/10 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600/10 border border-green-600/20 text-green-500 text-xs font-medium mb-6">
                  <Globe className="h-3.5 w-3.5" />
                  {t('interactiveMap')}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {t('mapTitle')} <span className="gradient-text">{t('mapTitleHighlight')}</span>
                </h2>
                <p className="text-zinc-400 mb-8 max-w-lg">
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
                <div className="aspect-video rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                  <Globe className="h-24 w-24 text-zinc-700" />
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                {t('latestArticles')}
              </h2>
              <p className="text-zinc-400 max-w-lg">
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
              },
              {
                title: 'South American Passion: Barra Bravas History',
                category: 'History',
                readTime: '12 min',
              },
              {
                title: 'Interview: Leaders of the Curva Nord',
                category: 'Interview',
                readTime: '15 min',
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
                  <div className="relative h-56 bg-zinc-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-zinc-700" />
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-green-600/90 text-white text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <CardContent>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-500 transition-colors">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t('joinTitle')} <span className="gradient-text">{t('joinHighlight')}</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
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

'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Heart,
  Eye,
  Share2,
  Flag,
  ExternalLink,
  Play,
  ChevronRight,
  Shield,
  Trophy,
  Music,
  Palette,
  Globe,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { useGroup } from '@/hooks/useApi';

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default function UltraGroupPage({ params }: PageProps) {
  const { slug } = use(params);
  const t = useTranslations('ultras');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<'history' | 'tifos' | 'gallery' | 'chants'>('history');
  const [liked, setLiked] = useState(false);

  const { data, isLoading, error } = useGroup(slug);
  const group = data?.group;

  // Fallback data for demo when API returns nothing
  const fallbackGroup = {
    name: 'GREEN BOYS 2005',
    slug: 'green-boys-2005',
    club: 'Raja Casablanca',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    history: `GREEN BOYS 2005 est le premier groupe Ultra au Maroc, fondé en 2005 par des supporters passionnés du Raja Club Athletic de Casablanca. Depuis sa création, le groupe a révolutionné la culture supporter en Afrique du Nord, introduisant les tifos spectaculaires, les chants coordonnés et l'ambiance européenne dans les stades marocains.

Le groupe tire son nom de la couleur verte emblématique du Raja Casablanca, et le "2005" marque l'année de fondation. Avec plus de 60 000 membres actifs, GREEN BOYS 2005 est considéré comme l'un des groupes Ultra les plus influents du continent africain.

Leur philosophie repose sur trois piliers : la passion inconditionnelle pour le club, le respect des traditions Ultra, et l'engagement communautaire. Le groupe est connu pour ses chorégraphies élaborées, ses déplacements massifs et son atmosphère électrique lors des matchs à domicile au Stade Mohammed V.`,
    values: ['Passion', 'Loyalty', 'Creativity', 'Unity', 'Respect'],
    motto: 'Verdi per sempre, mai arrendersi',
    colors: ['Green', 'White'],
    symbols: ['Eagle', 'Crown', 'Stars'],
    logo: '/images/groups/green-boys-2005.webp',
    coverImage: '/images/heroes/hero-1.webp',
    membersEstimate: '60K+',
    stadium: 'Stade Mohammed V',
    socialLinks: {
      facebook: 'https://facebook.com/greenboys2005',
      instagram: 'https://instagram.com/greenboys2005',
      twitter: 'https://twitter.com/greenboys2005',
      youtube: 'https://youtube.com/@greenboys2005',
    },
    tifos: [
      {
        title: 'Derby Day 2024',
        description: 'Massive display covering the entire North Stand',
        image: '/images/tifos/tifo-1.webp',
        date: new Date('2024-12-01'),
        match: 'Raja vs Wydad',
      },
      {
        title: 'African Champions',
        description: 'Celebrating the CAF Champions League victory',
        image: '/images/tifos/tifo-2.webp',
        date: new Date('2023-07-15'),
        match: 'Raja vs Al Ahly',
      },
      {
        title: '18 Years Anniversary',
        description: 'Commemorating 18 years of Ultra passion',
        image: '/images/tifos/tifo-3.webp',
        date: new Date('2023-09-01'),
        match: 'Raja vs FUS Rabat',
      },
    ],
    gallery: [
      { type: 'image' as const, url: '/images/gallery/gallery-1.webp', caption: 'Match atmosphere' },
      { type: 'image' as const, url: '/images/gallery/gallery-2.webp', caption: 'Tifo preparation' },
      { type: 'image' as const, url: '/images/gallery/gallery-3.webp', caption: 'Away trip' },
      { type: 'image' as const, url: '/images/gallery/gallery-4.webp', caption: 'Celebration' },
      { type: 'image' as const, url: '/images/gallery/gallery-5.webp', caption: 'Flag display' },
      { type: 'image' as const, url: '/images/gallery/gallery-6.webp', caption: 'Night match' },
    ],
    coordinates: { lat: 33.5731, lng: -7.5898 },
    views: 125000,
    likes: 45000,
    isVerified: true,
    isFeatured: true,
  };

  const displayGroup = group || fallbackGroup;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={displayGroup.coverImage || displayGroup.logo}
            alt={displayGroup.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          {/* Back Button */}
          <Link href={`/${locale}/ultras`} className="absolute top-8 left-4 sm:left-8">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              {t('backToGroups')}
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              {displayGroup.isVerified && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-600/30 text-blue-400 text-sm font-medium">
                  <Shield className="h-3.5 w-3.5" />
                  Verified
                </span>
              )}
              {displayGroup.isFeatured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-600/20 border border-yellow-600/30 text-yellow-400 text-sm font-medium">
                  <Trophy className="h-3.5 w-3.5" />
                  Featured
                </span>
              )}
            </div>

            {/* Group Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {displayGroup.name}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-zinc-300 mb-6">
              <span className="flex items-center gap-2">
                <Flag className="h-5 w-5 text-green-500" />
                {displayGroup.club}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {displayGroup.city}, {displayGroup.country}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Founded {displayGroup.yearFounded}
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {displayGroup.membersEstimate} members
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant={liked ? 'primary' : 'outline'}
                leftIcon={<Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />}
                onClick={() => setLiked(!liked)}
              >
                {liked ? 'Liked' : 'Like'} ({(displayGroup.likes / 1000).toFixed(0)}K)
              </Button>
              <Button variant="outline" leftIcon={<Share2 className="h-5 w-5" />}>
                Share
              </Button>
              <div className="flex items-center gap-2 text-zinc-400 ml-auto">
                <Eye className="h-5 w-5" />
                <span>{(displayGroup.views / 1000).toFixed(0)}K views</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-2 mb-8 border-b border-zinc-800 pb-4 overflow-x-auto">
                {[
                  { key: 'history', icon: Flag, label: 'History' },
                  { key: 'tifos', icon: Palette, label: 'Tifos' },
                  { key: 'gallery', icon: Play, label: 'Gallery' },
                  { key: 'chants', icon: Music, label: 'Chants' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as typeof activeTab)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.key
                        ? 'bg-green-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* History Tab */}
              {activeTab === 'history' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {/* Motto */}
                  {displayGroup.motto && (
                    <blockquote className="border-l-4 border-green-500 pl-6 py-4 bg-zinc-900/50 rounded-r-lg">
                      <p className="text-xl italic text-zinc-300">&ldquo;{displayGroup.motto}&rdquo;</p>
                    </blockquote>
                  )}

                  {/* History Text */}
                  <div className="prose prose-invert prose-green max-w-none">
                    {displayGroup.history.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-zinc-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Values */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
                    <div className="flex flex-wrap gap-3">
                      {displayGroup.values.map((value) => (
                        <span
                          key={value}
                          className="px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-400"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Colors & Symbols */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Colors</h3>
                      <div className="flex gap-2">
                        {displayGroup.colors.map((color) => (
                          <span
                            key={color}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Symbols</h3>
                      <div className="flex gap-2">
                        {displayGroup.symbols.map((symbol) => (
                          <span
                            key={symbol}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300"
                          >
                            {symbol}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tifos Tab */}
              {activeTab === 'tifos' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid sm:grid-cols-2 gap-6"
                >
                  {displayGroup.tifos.map((tifo, index) => (
                    <Card key={index} hoverable className="overflow-hidden group">
                      <div className="relative h-48 bg-zinc-800">
                        <img
                          src={tifo.image}
                          alt={tifo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                      </div>
                      <CardContent>
                        <h3 className="text-lg font-bold text-white mb-1">{tifo.title}</h3>
                        <p className="text-zinc-400 text-sm mb-2">{tifo.description}</p>
                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                          {tifo.match && <span>{tifo.match}</span>}
                          {tifo.date && (
                            <span>{new Date(tifo.date).toLocaleDateString()}</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              )}

              {/* Gallery Tab */}
              {activeTab === 'gallery' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {displayGroup.gallery.map((item, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden bg-zinc-800 group cursor-pointer"
                    >
                      <img
                        src={item.url}
                        alt={item.caption || `Gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        {item.type === 'video' && (
                          <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                      {item.caption && (
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white text-sm">{item.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Chants Tab */}
              {activeTab === 'chants' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="text-center py-12 text-zinc-400">
                    <Music className="h-16 w-16 mx-auto mb-4 text-zinc-700" />
                    <h3 className="text-xl font-bold text-white mb-2">Chants Coming Soon</h3>
                    <p>We&apos;re working on adding audio chants for this group.</p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Club</span>
                    <span className="text-white font-medium">{displayGroup.club}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Stadium</span>
                    <span className="text-white font-medium">{displayGroup.stadium}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Founded</span>
                    <span className="text-white font-medium">{displayGroup.yearFounded}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Members</span>
                    <span className="text-white font-medium">{displayGroup.membersEstimate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Country</span>
                    <span className="text-white font-medium flex items-center gap-2">
                      <span className={`fi fi-${displayGroup.countryCode.toLowerCase()}`} />
                      {displayGroup.country}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
                <div className="space-y-3">
                  {displayGroup.socialLinks.facebook && (
                    <a
                      href={displayGroup.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group"
                    >
                      <Facebook className="h-5 w-5 text-blue-500" />
                      <span className="text-zinc-300">Facebook</span>
                      <ExternalLink className="h-4 w-4 text-zinc-600 ml-auto group-hover:text-zinc-400" />
                    </a>
                  )}
                  {displayGroup.socialLinks.instagram && (
                    <a
                      href={displayGroup.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group"
                    >
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <span className="text-zinc-300">Instagram</span>
                      <ExternalLink className="h-4 w-4 text-zinc-600 ml-auto group-hover:text-zinc-400" />
                    </a>
                  )}
                  {displayGroup.socialLinks.twitter && (
                    <a
                      href={displayGroup.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group"
                    >
                      <Twitter className="h-5 w-5 text-sky-500" />
                      <span className="text-zinc-300">Twitter</span>
                      <ExternalLink className="h-4 w-4 text-zinc-600 ml-auto group-hover:text-zinc-400" />
                    </a>
                  )}
                  {displayGroup.socialLinks.youtube && (
                    <a
                      href={displayGroup.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group"
                    >
                      <Youtube className="h-5 w-5 text-red-500" />
                      <span className="text-zinc-300">YouTube</span>
                      <ExternalLink className="h-4 w-4 text-zinc-600 ml-auto group-hover:text-zinc-400" />
                    </a>
                  )}
                </div>
              </Card>

              {/* Location Card */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Location</h3>
                <div className="aspect-video rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <Globe className="h-12 w-12 text-zinc-700" />
                </div>
                <p className="text-zinc-400 text-sm">
                  {displayGroup.stadium}, {displayGroup.city}
                </p>
                <Link href={`/${locale}/map?group=${displayGroup.slug}`}>
                  <Button variant="outline" size="sm" className="w-full mt-4" rightIcon={<ChevronRight className="h-4 w-4" />}>
                    View on Map
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  MapPin,
  Users,
  Calendar,
  Grid3X3,
  Map,
  Flag,
  ChevronDown,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import Input from '@/components/ui/Input';

const countryFlags: Record<string, string> = {
  MA: '🇲🇦', IT: '🇮🇹', DE: '🇩🇪', AR: '🇦🇷', BR: '🇧🇷', ES: '🇪🇸', FR: '🇫🇷', TR: '🇹🇷',
  EG: '🇪🇬', GB: '🇬🇧', EC: '🇪🇨', MY: '🇲🇾', ID: '🇮🇩', JP: '🇯🇵', HR: '🇭🇷', RS: '🇷🇸',
  GR: '🇬🇷', PL: '🇵🇱', TN: '🇹🇳', ZA: '🇿🇦', CL: '🇨🇱', PE: '🇵🇪', CO: '🇨🇴', SA: '🇸🇦',
  IR: '🇮🇷', AU: '🇦🇺', MX: '🇲🇽', US: '🇺🇸', DZ: '🇩🇿', LY: '🇱🇾',
};

interface UltraGroup {
  _id: string;
  name: string;
  slug: string;
  club: string;
  city: string;
  country: string;
  countryCode: string;
  yearFounded: number;
  membersEstimate?: string;
  history: string;
  logo?: string;
  coverImage?: string;
  isFeatured?: boolean;
}

type ViewMode = 'grid' | 'map';

export default function UltrasPage() {
  const t = useTranslations('ultras');
  const locale = useLocale();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [groups, setGroups] = useState<UltraGroup[]>([]);
  const [countries, setCountries] = useState<{ code: string; name: string; count: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('/api/groups?limit=250');
        const data = await response.json();
        if (data.groups) {
          setGroups(data.groups);
          // Extract unique countries with counts
          const countryCounts: Record<string, { name: string; count: number }> = {};
          data.groups.forEach((g: UltraGroup) => {
            if (!countryCounts[g.countryCode]) {
              countryCounts[g.countryCode] = { name: g.country, count: 0 };
            }
            countryCounts[g.countryCode].count++;
          });
          setCountries(
            Object.entries(countryCounts).map(([code, data]) => ({
              code,
              name: data.name,
              count: data.count
            }))
          );
        }
      } catch (error) {
        console.error('Error fetching groups:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGroups();
  }, []);

  const filteredGroups = groups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = !selectedCountry || group.countryCode === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 hero-gradient stadium-atmosphere overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 stadium-lights" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '200ms' }} />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-500 text-sm font-medium mb-6">
              <Flag className="h-4 w-4" />
              {groups.length}+ {t('titleHighlight')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t('title')} <span className="gradient-text neon-glow">{t('titleHighlight')}</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            {/* Search */}
            <div className="flex-1">
              <Input
                placeholder={t('search')}
                leftIcon={<Search className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-lg bg-zinc-900 border border-zinc-800 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-green-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'map'
                      ? 'bg-green-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Map className="h-5 w-5" />
                </button>
              </div>

              <Button
                variant="outline"
                leftIcon={<Filter className="h-4 w-4" />}
                rightIcon={
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      showFilters ? 'rotate-180' : ''
                    }`}
                  />
                }
                onClick={() => setShowFilters(!showFilters)}
              >
                {t('filters')}
              </Button>
            </div>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4 border-t border-zinc-800 mt-4"
              >
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      !selectedCountry
                        ? 'bg-green-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {t('allCountries')}
                  </button>
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => setSelectedCountry(country.code)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        selectedCountry === country.code
                          ? 'bg-green-600 text-white'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span>{countryFlags[country.code] || '🏳️'}</span>
                      {country.name}
                      <span className="text-xs opacity-60">({country.count})</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 text-green-500 animate-spin" />
            </div>
          ) : viewMode === 'grid' ? (
            <>
              {/* Results count */}
              <p className="text-zinc-400 mb-6">
                {t('showing', { count: filteredGroups.length })}
                {selectedCountry && ` in ${countries.find((c) => c.code === selectedCountry)?.name}`}
              </p>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGroups.map((group, index) => (
                  <motion.div
                    key={group._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/${locale}/ultras/${group.slug}`}>
                      <Card hoverable className={`h-full group ${group.isFeatured ? 'ring-2 ring-green-600' : ''}`}>
                        {/* Group Image */}
                        <div className="relative h-52 bg-zinc-800 card-shine">
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10" />
                          <div className="absolute inset-0 bg-green-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                          {(group.coverImage || group.logo) ? (
                            <Image
                              src={group.coverImage || group.logo || '/images/groups/green-boys-2005.webp'}
                              alt={`${group.name} - ${group.club} Ultra supporters`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center stadium-atmosphere">
                              <Users className="h-16 w-16 text-zinc-600" />
                            </div>
                          )}
                          {/* Country badge */}
                          <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                            <span className="text-lg">
                              {countryFlags[group.countryCode] || '🏳️'}
                            </span>
                          </div>
                          {/* Members badge */}
                          {group.membersEstimate && (
                            <div className="absolute bottom-3 right-3 z-20 px-2 py-1 rounded-lg bg-green-600/90 backdrop-blur-sm">
                              <span className="text-xs font-medium text-white">{group.membersEstimate}</span>
                            </div>
                          )}
                          {group.isFeatured && (
                            <div className="absolute top-3 left-3 z-20 px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-bold shadow-lg">
                              Featured
                            </div>
                          )}
                        </div>

                        <CardContent className="-mt-6 relative z-20">
                          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                            <MapPin className="h-3 w-3 text-green-500" />
                            {group.city}, {group.country}
                          </div>
                          <h3 className={`text-xl font-bold mb-1 group-hover:text-green-400 transition-colors ${group.isFeatured ? 'text-green-400' : 'text-white'}`}>
                            {group.name}
                          </h3>
                          <p className="text-sm text-zinc-400 mb-3 font-medium">{group.club}</p>
                          <p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                            {group.history?.substring(0, 100)}...
                          </p>

                          <div className="flex items-center justify-between text-xs pt-4 border-t border-zinc-800/50">
                            <span className="flex items-center gap-1.5 text-zinc-400">
                              <Calendar className="h-3.5 w-3.5 text-green-500" />
                              {t('founded')} {group.yearFounded}
                            </span>
                            <div className="flex items-center gap-1 text-green-500 font-medium">
                              <span>View</span>
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Empty state */}
              {filteredGroups.length === 0 && (
                <div className="text-center py-20">
                  <Flag className="h-16 w-16 text-zinc-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t('noGroups')}
                  </h3>
                  <p className="text-zinc-400">
                    {t('adjustFilters')}
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Map View */
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="text-center">
                <Map className="h-16 w-16 text-zinc-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Interactive Map
                </h3>
                <p className="text-zinc-400 mb-6">
                  Coming soon - Explore Ultra groups on an interactive world map
                </p>
                <Button variant="outline" onClick={() => setViewMode('grid')}>
                  Switch to Grid View
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

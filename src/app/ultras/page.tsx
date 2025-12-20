'use client';

import { useState } from 'react';
import Link from 'next/link';
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
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import Input from '@/components/ui/Input';

const countries = [
  { code: 'MA', name: 'Morocco', flag: '🇲🇦', count: 25 },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', count: 45 },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', count: 38 },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', count: 32 },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', count: 28 },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', count: 22 },
  { code: 'FR', name: 'France', flag: '🇫🇷', count: 20 },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷', count: 35 },
];

const ultraGroups = [
  {
    id: '0',
    name: 'GREEN BOYS 2005',
    slug: 'green-boys',
    club: 'Raja Casablanca',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    members: '60K+',
    description: 'The FIRST Ultra group in Morocco - Pioneers of the North African Ultra movement.',
  },
  {
    id: '1',
    name: 'Ultras Eagles',
    slug: 'ultras-eagles',
    club: 'Raja Casablanca',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    members: '50K+',
    description: 'One of the most passionate Ultra groups in Africa, known for spectacular tifos.',
  },
  {
    id: '2',
    name: 'Winners',
    slug: 'winners',
    club: 'Wydad AC',
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
    yearFounded: 2005,
    members: '45K+',
    description: 'Iconic group representing the Red tradition of Wydad Athletic Club.',
  },
  {
    id: '3',
    name: 'Curva Sud Milano',
    slug: 'curva-sud-milano',
    club: 'AC Milan',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    yearFounded: 1968,
    members: '100K+',
    description: 'Historic curve supporting AC Milan with decades of Ultra tradition.',
  },
  {
    id: '4',
    name: 'Yellow Wall',
    slug: 'yellow-wall',
    club: 'Borussia Dortmund',
    city: 'Dortmund',
    country: 'Germany',
    countryCode: 'DE',
    yearFounded: 1974,
    members: '80K+',
    description: 'The famous Südtribüne, largest standing terrace in Europe.',
  },
  {
    id: '5',
    name: 'La Doce',
    slug: 'la-doce',
    club: 'Boca Juniors',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    yearFounded: 1925,
    members: '70K+',
    description: 'The legendary Barra Brava of La Bombonera.',
  },
  {
    id: '6',
    name: 'Gate 7',
    slug: 'gate-7',
    club: 'Olympiacos',
    city: 'Piraeus',
    country: 'Greece',
    countryCode: 'GR',
    yearFounded: 1966,
    members: '60K+',
    description: 'One of the oldest and most organized Ultra groups in Europe.',
  },
];

type ViewMode = 'grid' | 'map';

export default function UltrasPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredGroups = ultraGroups.filter((group) => {
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ultras <span className="gradient-text">World</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Explore Ultra groups from every corner of the globe. Discover their
              history, traditions, and passion.
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
                placeholder="Search groups, clubs, cities..."
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
                      ? 'bg-red-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'map'
                      ? 'bg-red-600 text-white'
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
                Filters
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
                        ? 'bg-red-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    All Countries
                  </button>
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => setSelectedCountry(country.code)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        selectedCountry === country.code
                          ? 'bg-red-600 text-white'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span>{country.flag}</span>
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
          {viewMode === 'grid' ? (
            <>
              {/* Results count */}
              <p className="text-zinc-400 mb-6">
                Showing {filteredGroups.length} groups
                {selectedCountry && ` in ${countries.find((c) => c.code === selectedCountry)?.name}`}
              </p>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGroups.map((group, index) => (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/ultras/${group.slug}`}>
                      <Card hoverable className="h-full group">
                        {/* Image placeholder */}
                        <div className="relative h-48 bg-zinc-800">
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                          <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                            <Flag className="h-16 w-16 text-zinc-700" />
                          </div>
                          {/* Country badge */}
                          <div className="absolute top-4 right-4 z-20">
                            <span className="text-2xl">
                              {countries.find((c) => c.code === group.countryCode)?.flag}
                            </span>
                          </div>
                        </div>

                        <CardContent>
                          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                            <MapPin className="h-3 w-3" />
                            {group.city}, {group.country}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-red-500 transition-colors">
                            {group.name}
                          </h3>
                          <p className="text-sm text-zinc-400 mb-3">{group.club}</p>
                          <p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                            {group.description}
                          </p>

                          <div className="flex items-center justify-between text-xs text-zinc-500 pt-4 border-t border-zinc-800">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Users className="h-3.5 w-3.5" />
                                {group.members}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {group.yearFounded}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-red-500 transition-colors" />
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
                    No groups found
                  </h3>
                  <p className="text-zinc-400">
                    Try adjusting your search or filters
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Map View */
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 h-[600px] flex items-center justify-center">
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

'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Filter, Search, MapPin, Users, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const InteractiveMap = dynamic(() => import('@/components/map/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] rounded-2xl bg-zinc-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-zinc-400">Loading map...</span>
      </div>
    </div>
  ),
});

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
  colors: string[];
  logo?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default function MapPage() {
  const t = useTranslations('ultras');
  const locale = useLocale();
  const [groups, setGroups] = useState<UltraGroup[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<UltraGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get('group');

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('/api/groups?limit=200');
        const data = await response.json();
        if (data.groups) {
          // Filter groups that have coordinates
          const groupsWithCoordinates = data.groups.filter(
            (g: UltraGroup) => g.coordinates?.lat && g.coordinates?.lng
          );
          setGroups(groupsWithCoordinates);
          setFilteredGroups(groupsWithCoordinates);
        }
      } catch (error) {
        console.error('Error fetching groups:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGroups();
  }, []);

  useEffect(() => {
    let filtered = groups;

    if (searchQuery) {
      filtered = filtered.filter(
        (g) =>
          g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCountry !== 'all') {
      filtered = filtered.filter((g) => g.country === selectedCountry);
    }

    setFilteredGroups(filtered);
  }, [searchQuery, selectedCountry, groups]);

  const countries = [...new Set(groups.map((g) => g.country))].sort();

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href={`/${locale}`}>
                <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  {locale === 'ar' ? 'الرئيسية' : 'Home'}
                </Button>
              </Link>
              <div className="h-6 w-px bg-zinc-800" />
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-500" />
                <h1 className="text-xl font-bold text-white">
                  {locale === 'ar' ? 'الخريطة التفاعلية' : 'Interactive Map'}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>{filteredGroups.length} {locale === 'ar' ? 'مجموعة' : 'groups'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder={locale === 'ar' ? 'البحث عن مجموعة...' : 'Search groups...'}
                leftIcon={<Search className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="sm:w-48">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">{locale === 'ar' ? 'كل البلدان' : 'All Countries'}</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {isLoading ? (
            <div className="w-full h-[600px] rounded-2xl bg-zinc-900 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-zinc-400">
                  {locale === 'ar' ? 'جاري التحميل...' : 'Loading map...'}
                </span>
              </div>
            </div>
          ) : (
            <InteractiveMap groups={filteredGroups} selectedSlug={selectedSlug} className="rounded-2xl overflow-hidden" />
          )}
        </motion.div>

        {/* Groups List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" />
            {locale === 'ar' ? 'المجموعات على الخريطة' : 'Groups on Map'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGroups.map((group) => (
              <Link key={group._id} href={`/${locale}/ultras/${group.slug}`}>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-green-600/50 transition-colors group cursor-pointer">
                  <div className="flex items-start gap-3">
                    {group.logo ? (
                      <img
                        src={group.logo}
                        alt={group.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center">
                        <Users className="h-6 w-6 text-zinc-600" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white truncate group-hover:text-green-500 transition-colors">
                        {group.name}
                      </h3>
                      <p className="text-sm text-green-500 truncate">{group.club}</p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {group.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {group.yearFounded}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredGroups.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <Globe className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-400">
                {locale === 'ar' ? 'لم يتم العثور على مجموعات' : 'No groups found'}
              </p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

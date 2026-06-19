'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Flag, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

interface FeaturedGroup {
  _id: string;
  slug: string;
  name: string;
  club: string;
  country: string;
  coverImage?: string;
  logo?: string;
  membersEstimate?: string;
  colors?: string[];
}

interface FeaturedGroupsSectionProps {
  groups: FeaturedGroup[];
}

export default function FeaturedGroupsSection({ groups }: FeaturedGroupsSectionProps) {
  const t = useTranslations('home');
  const locale = useLocale();

  // Map colors array to gradient - use first color or default
  const getColorGradient = (colors?: string[]) => {
    if (!colors || colors.length === 0) return 'from-blue-600 to-blue-800';
    const color = colors[0].toLowerCase().replace(/\s+/g, '-');
    const colorMap: { [key: string]: string } = {
      'green': 'from-green-600 to-green-800',
      'red': 'from-red-600 to-red-800',
      'blue': 'from-blue-600 to-blue-800',
      'yellow': 'from-yellow-500 to-yellow-700',
      'orange': 'from-orange-600 to-orange-800',
      'white': 'from-gray-600 to-gray-800',
      'black': 'from-zinc-600 to-zinc-800',
    };
    return colorMap[color] || 'from-blue-600 to-blue-800';
  };

  return (
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
          {groups.map((group, index) => (
            <motion.div
              key={group._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/${locale}/ultras/${group.slug}`}>
                <Card hoverable className="group overflow-hidden">
                  {/* Image with gradient overlay */}
                  <div className="relative h-52 bg-zinc-200 dark:bg-zinc-800">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorGradient(group.colors)} opacity-40 z-10`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    {group.coverImage && (
                      <Image
                        src={group.coverImage}
                        alt={`${group.name} - ${group.club} Ultra supporters from ${group.country}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    {/* Floating badge */}
                    {group.membersEstimate && (
                      <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                        <span className="text-xs font-medium text-white">{group.membersEstimate}</span>
                      </div>
                    )}
                  </div>

                  <CardContent className="relative z-20 -mt-10">
                    {/* Country flag indicator */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getColorGradient(group.colors)} flex items-center justify-center shadow-lg`}>
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
  );
}

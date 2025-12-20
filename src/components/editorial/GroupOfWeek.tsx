'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Trophy, MapPin, Users, ArrowRight, Flag } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

interface GroupOfWeekProps {
  group?: {
    id: string;
    name: string;
    slug: string;
    club: string;
    country: string;
    countryFlag: string;
    members: string;
    yearFounded: number;
    description: string;
    image?: string;
  };
}

const defaultGroup = {
  id: '1',
  name: 'GREEN BOYS 2005',
  slug: 'green-boys',
  club: 'Raja Casablanca',
  country: 'Morocco',
  countryFlag: '🇲🇦',
  members: '60K+',
  yearFounded: 2005,
  description: 'The pioneers of Moroccan Ultra culture, GREEN BOYS 2005 revolutionized the supporter scene in North Africa with their spectacular tifos and unwavering passion.',
  image: '/images/groups/green-boys-featured.jpg',
};

export default function GroupOfWeek({ group = defaultGroup }: GroupOfWeekProps) {
  const t = useTranslations('editorial');
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Card className="overflow-hidden border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-zinc-900">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500 text-zinc-900 text-sm font-bold">
          <Trophy className="h-4 w-4" />
          {t('groupOfWeek')}
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 lg:h-auto bg-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/80 z-10 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 lg:hidden" />
            <div className="w-full h-full bg-gradient-to-br from-yellow-600/20 to-zinc-800 flex items-center justify-center">
              <Flag className="h-24 w-24 text-zinc-700" />
            </div>
            {/* Country Flag */}
            <div className="absolute bottom-4 left-4 z-20 text-4xl">
              {group.countryFlag}
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-8 lg:p-10">
            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {group.country}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {group.members}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">{group.name}</h3>
            <p className="text-yellow-500 font-medium mb-4">{group.club}</p>
            <p className="text-zinc-400 mb-6">{group.description}</p>

            <div className="flex items-center gap-4">
              <Link href={`/${locale}/ultras/${group.slug}`}>
                <Button rightIcon={<ArrowRight className="h-5 w-5" />}>
                  View Profile
                </Button>
              </Link>
              <span className="text-sm text-zinc-500">Est. {group.yearFounded}</span>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

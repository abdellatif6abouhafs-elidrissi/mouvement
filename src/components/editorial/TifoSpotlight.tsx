'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Palette, Calendar, MapPin, Heart, Eye, Play } from 'lucide-react';
import Card, { CardContent } from '@/components/ui/Card';

interface TifoSpotlightProps {
  tifo?: {
    id: string;
    title: string;
    group: string;
    club: string;
    country: string;
    date: string;
    location: string;
    description: string;
    views: string;
    likes: string;
    image?: string;
    videoUrl?: string;
  };
}

const defaultTifo = {
  id: '1',
  title: 'Green Storm - Derby Edition',
  group: 'GREEN BOYS 2005',
  club: 'Raja Casablanca',
  country: 'Morocco',
  date: 'December 2024',
  location: 'Stade Mohammed V, Casablanca',
  description: 'A spectacular tifo covering the entire North Stand, featuring a massive eagle emerging from green flames - celebrating 18 years of Ultra passion.',
  views: '245K',
  likes: '89K',
  image: '/images/tifos/tifo-1.webp',
  videoUrl: '/videos/tifo-spotlight.mp4',
};

export default function TifoSpotlight({ tifo = defaultTifo }: TifoSpotlightProps) {
  const t = useTranslations('editorial');
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Card className="overflow-hidden border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-zinc-900">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600 text-white text-sm font-bold">
          <Palette className="h-4 w-4" />
          {t('tifoSpotlight')}
        </div>

        {/* Image/Video */}
        <div className="relative h-80 bg-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10" />
          <div className="w-full h-full bg-gradient-to-br from-green-600/20 to-zinc-800 flex items-center justify-center">
            <Palette className="h-24 w-24 text-zinc-700" />
          </div>

          {/* Play Button */}
          {tifo.videoUrl && (
            <button className="absolute inset-0 flex items-center justify-center z-20 group">
              <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-600/30">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            </button>
          )}

          {/* Stats Overlay */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-4">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 text-white text-sm">
              <Eye className="h-4 w-4" />
              {tifo.views}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 text-white text-sm">
              <Heart className="h-4 w-4 text-green-500" />
              {tifo.likes}
            </span>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {tifo.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {tifo.location}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{tifo.title}</h3>
          <p className="text-green-500 font-medium mb-4">{tifo.group} - {tifo.club}</p>
          <p className="text-zinc-400">{tifo.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

'use client';

import { useChants } from '@/hooks/useChants';
import { motion } from 'framer-motion';
import { Music, Volume2, Eye } from 'lucide-react';
import Card, { CardContent } from '@/components/ui/Card';

interface ChantsTabProps {
  groupSlug: string;
}

export default function ChantsTab({ groupSlug }: ChantsTabProps) {
  const { chants, isLoading } = useChants(groupSlug);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center py-12"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </motion.div>
    );
  }

  // Empty state
  if (chants.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 mb-4">
          <Music className="h-8 w-8 text-zinc-600" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No Chants Yet</h3>
        <p className="text-zinc-400 max-w-md mx-auto">
          This group doesn't have any chants documented yet. Help build the archive by contributing!
        </p>
      </motion.div>
    );
  }

  // Get language from locale string in translations
  const getLanguageLabel = (locale: string): string => {
    const languageMap: Record<string, string> = {
      en: 'English',
      ar: 'Arabic',
      fr: 'French',
      es: 'Spanish',
      it: 'Italian',
      'pt-br': 'Portuguese (BR)',
    };
    return languageMap[locale] || locale.toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {chants.map((chant, index) => {
        // Get the locale from the chant object
        const chantLocale = chant.locale || 'en';

        // Truncate lyrics for preview (first 150 characters)
        const lyricsPreview = chant.lyrics
          ? chant.lyrics.substring(0, 150) + (chant.lyrics.length > 150 ? '...' : '')
          : 'No lyrics available';

        return (
          <motion.div
            key={chant._id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Card hoverable className="group overflow-hidden">
              <CardContent className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title and Language Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2">
                      {chant.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-600/10 border border-green-600/20 text-green-400 text-xs font-medium whitespace-nowrap flex-shrink-0">
                      <Music className="h-3 w-3" />
                      {getLanguageLabel(chantLocale)}
                    </span>
                  </div>

                  {/* Origin */}
                  {chant.origin && (
                    <p className="text-xs text-zinc-400 mb-2 line-clamp-1">
                      {chant.origin}
                    </p>
                  )}

                  {/* Lyrics Preview */}
                  <p className="text-sm text-zinc-300 leading-relaxed line-clamp-2 mb-4">
                    {lyricsPreview}
                  </p>

                  {/* Stats Footer */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-zinc-500">
                    {chant.audio && (
                      <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-300">
                        <Volume2 className="h-3.5 w-3.5" />
                        Listen
                      </button>
                    )}
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {chant.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Music className="h-3.5 w-3.5" />
                      {chant.likes.toLocaleString()} likes
                    </span>
                    {chant.yearCreated && (
                      <span className="text-zinc-600">
                        Created: {chant.yearCreated}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

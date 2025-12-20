'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Users,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ChevronRight,
  PenSquare,
  Calendar,
  MapPin,
  Flag,
  Quote,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const featuredStories = [
  {
    id: 1,
    title: 'My First Derby Experience',
    author: 'Ahmed B.',
    group: 'GREEN BOYS 2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    date: 'December 2024',
    excerpt: 'The moment I walked into Stade Mohammed V for my first derby, I knew my life would never be the same. The smoke, the chants, the unity...',
    likes: 234,
    comments: 45,
    image: '/images/stories/derby.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Following My Team Across Europe',
    author: 'Marco R.',
    group: 'Curva Sud Milano',
    club: 'AC Milan',
    country: 'Italy',
    date: 'November 2024',
    excerpt: 'After 15 years as an Ultra, I\'ve traveled to over 100 away matches. Each journey strengthens the bond with my brothers.',
    likes: 189,
    comments: 32,
    image: '/images/stories/travel.jpg',
  },
  {
    id: 3,
    title: 'The Tifo That Changed Everything',
    author: 'Carlos M.',
    group: 'La 12',
    club: 'Boca Juniors',
    country: 'Argentina',
    date: 'November 2024',
    excerpt: 'Three months of preparation, 500 volunteers, one magical night. How we created the biggest tifo in La Bombonera history.',
    likes: 456,
    comments: 89,
    image: '/images/stories/tifo.jpg',
  },
  {
    id: 4,
    title: 'Three Generations of Passion',
    author: 'Hans W.',
    group: 'Yellow Wall',
    club: 'Borussia Dortmund',
    country: 'Germany',
    date: 'October 2024',
    excerpt: 'My grandfather started it, my father continued it, and now I carry the torch. The Südtribüne runs in our blood.',
    likes: 312,
    comments: 67,
    image: '/images/stories/generations.jpg',
  },
];

const testimonials = [
  {
    quote: 'Being an Ultra is not about violence. It\'s about art, culture, and unconditional love for your colors.',
    author: 'Anonymous Capo',
    group: 'GREEN BOYS 2005',
  },
  {
    quote: 'The curva is the only place where a doctor stands next to a worker, equals in passion.',
    author: 'Marco, 25 years',
    group: 'Curva Sud Milano',
  },
  {
    quote: 'We don\'t support our team because they win. We support because they are ours.',
    author: 'Pablo, 30 years',
    group: 'La 12',
  },
];

export default function CommunityPage() {
  const t = useTranslations('community');
  const locale = useLocale();

  const mainStory = featuredStories[0];
  const otherStories = featuredStories.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Stories
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
              {t('subtitle')}
            </p>
            <Button leftIcon={<PenSquare className="h-5 w-5" />}>
              {t('submit')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">{t('featured')}</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-auto bg-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/80 z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 lg:hidden" />
                <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-zinc-800 flex items-center justify-center">
                  <Users className="h-24 w-24 text-zinc-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Flag className="h-4 w-4" />
                    {mainStory.group}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {mainStory.country}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {mainStory.date}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{mainStory.title}</h3>
                <p className="text-zinc-400 mb-6">{mainStory.excerpt}</p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                    {mainStory.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{mainStory.author}</p>
                    <p className="text-zinc-500 text-sm">{mainStory.club}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                    {mainStory.likes}
                  </button>
                  <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    {mainStory.comments}
                  </button>
                  <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <Share2 className="h-5 w-5" />
                    Share
                  </button>
                  <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors ml-auto">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverable className="h-full group">
                  {/* Image */}
                  <div className="relative h-48 bg-zinc-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                      <Users className="h-12 w-12 text-zinc-600" />
                    </div>
                  </div>

                  <CardContent>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                      <span>{story.group}</span>
                      <span>-</span>
                      <span>{story.country}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{story.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-bold">
                          {story.author.charAt(0)}
                        </div>
                        <span className="text-sm text-zinc-400">{story.author}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {story.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {story.comments}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={`/${locale}/community/archive`}>
              <Button variant="outline" rightIcon={<ChevronRight className="h-4 w-4" />}>
                {t('archives')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Words from the Curva</h2>
          <div className="space-y-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800"
              >
                <Quote className="absolute top-6 left-6 h-8 w-8 text-red-600/30" />
                <blockquote className="relative z-10 text-xl text-white italic mb-4 pl-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="pl-6 flex items-center gap-2 text-zinc-400">
                  <span className="font-medium">{item.author}</span>
                  <span>-</span>
                  <span className="text-red-500">{item.group}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Story CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-r from-red-600/20 to-zinc-900 border border-red-600/30"
          >
            <PenSquare className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">{t('submit')}</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              Every Ultra has a story. Share your experiences, memories, and passion with the global community.
            </p>
            <Button size="lg">Submit Your Story</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

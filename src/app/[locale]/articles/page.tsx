'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, BookOpen, Clock, Tag, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import Input from '@/components/ui/Input';

const articles = [
  {
    id: '1',
    slug: 'green-boys-2005-pioneers',
    title: 'GREEN BOYS 2005: Pioneers of Moroccan Ultra Culture',
    excerpt: 'How a group of young Raja supporters changed the landscape of football fandom in North Africa forever.',
    category: 'History',
    author: 'Ahmed K.',
    date: 'December 2024',
    readTime: '12 min',
    featured: true,
    image: '/images/articles/article-1.webp',
  },
  {
    id: '2',
    slug: 'art-of-tifo',
    title: 'The Art of Tifo: A Visual Revolution',
    excerpt: 'From simple banners to stadium-wide masterpieces, how Ultras transformed football into visual art.',
    category: 'Culture',
    author: 'Marco R.',
    date: 'December 2024',
    readTime: '8 min',
    image: '/images/articles/article-2.webp',
  },
  {
    id: '3',
    slug: 'barra-bravas-history',
    title: 'South American Passion: Barra Bravas History',
    excerpt: 'The origins and evolution of organized supporter groups in Argentina, Brazil, and beyond.',
    category: 'History',
    author: 'Carlos M.',
    date: 'November 2024',
    readTime: '15 min',
    image: '/images/articles/article-3.webp',
  },
  {
    id: '4',
    slug: 'curva-nord-interview',
    title: 'Interview: Leaders of the Curva Nord',
    excerpt: 'An exclusive conversation with the capos who organize one of Italy\'s most famous curves.',
    category: 'Interview',
    author: 'Marco R.',
    date: 'November 2024',
    readTime: '18 min',
    image: '/images/articles/article-4.webp',
  },
  {
    id: '5',
    slug: 'african-ultra-renaissance',
    title: 'The African Ultra Renaissance',
    excerpt: 'How Ultra culture spread across Africa and adapted to local traditions and passions.',
    category: 'Global',
    author: 'Ahmed K.',
    date: 'October 2024',
    readTime: '10 min',
    image: '/images/articles/article-5.webp',
  },
  {
    id: '6',
    slug: 'chants-heritage',
    title: 'Chants & Heritage: Songs That Echo Through Generations',
    excerpt: 'The musical traditions passed down through decades of supporter culture.',
    category: 'Culture',
    author: 'Carlos M.',
    date: 'October 2024',
    readTime: '9 min',
    image: '/images/articles/article-1.webp',
  },
];

const categories = ['All', 'History', 'Culture', 'Interview', 'Global'];

export default function ArticlesPage() {
  const t = useTranslations('articles');
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = filteredArticles.filter((a) => !a.featured);

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
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="max-w-md flex-1">
              <Input
                placeholder={t('search')}
                leftIcon={<Search className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'All' && !searchQuery && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Tag className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-green-500">{t('featured')}</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href={`/${locale}/articles/${featuredArticle.slug}`}>
                <Card hoverable className="overflow-hidden group">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-80 lg:h-auto bg-zinc-800">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/50 z-10" />
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-6 left-6 z-20">
                        <span className="px-3 py-1 rounded-full bg-green-600 text-white text-sm font-medium">
                          {featuredArticle.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-green-500 transition-colors">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-zinc-400 mb-6">{featuredArticle.excerpt}</p>
                      <div className="flex items-center gap-6 text-sm text-zinc-500">
                        <span>{featuredArticle.author}</span>
                        <span>{featuredArticle.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredArticle.readTime} {t('readTime')}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">{t('allArticles')}</h2>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="h-16 w-16 text-zinc-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('noArticles')}</h3>
              <p className="text-zinc-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === 'All' && !searchQuery ? otherArticles : filteredArticles).map(
                (article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/${locale}/articles/${article.slug}`}>
                      <Card hoverable className="h-full group">
                        {/* Image */}
                        <div className="relative h-48 bg-zinc-800">
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 rounded-full bg-green-600/90 text-white text-xs font-medium">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        <CardContent>
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-500 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-zinc-500">
                            <span>{article.author}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {article.readTime}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          )}

          {/* Load More */}
          {filteredArticles.length > 0 && (
            <div className="mt-12 text-center">
              <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {t('loadMore')}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

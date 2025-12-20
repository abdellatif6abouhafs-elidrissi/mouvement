'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Clock,
  User,
  Tag,
  BookOpen,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import Input from '@/components/ui/Input';

const categories = [
  { id: 'all', name: 'All', count: 156 },
  { id: 'history', name: 'History', count: 45 },
  { id: 'culture', name: 'Culture', count: 38 },
  { id: 'tifo', name: 'Tifo', count: 28 },
  { id: 'interview', name: 'Interview', count: 22 },
  { id: 'documentary', name: 'Documentary', count: 15 },
  { id: 'analysis', name: 'Analysis', count: 8 },
];

const articles = [
  {
    id: '1',
    title: 'The Art of Tifo: A Visual Revolution in Football Stadiums',
    slug: 'art-of-tifo-visual-revolution',
    excerpt: 'Exploring how Ultra groups transformed stadium experiences through spectacular visual displays and coordinated choreographies.',
    category: 'culture',
    author: 'Ahmed Benali',
    readTime: '8 min',
    publishedAt: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    title: 'South American Passion: The History of Barra Bravas',
    slug: 'south-american-passion-barra-bravas',
    excerpt: 'A deep dive into the origins and evolution of supporter culture in South America, from Argentina to Brazil.',
    category: 'history',
    author: 'Carlos Rodriguez',
    readTime: '12 min',
    publishedAt: '2024-01-10',
    featured: true,
  },
  {
    id: '3',
    title: 'Interview: The Leaders of Curva Nord',
    slug: 'interview-curva-nord-leaders',
    excerpt: 'An exclusive conversation with the capos of one of Italy\'s most historic curves.',
    category: 'interview',
    author: 'Marco Rossi',
    readTime: '15 min',
    publishedAt: '2024-01-08',
    featured: false,
  },
  {
    id: '4',
    title: 'The Casablanca Derby: A Tale of Two Colors',
    slug: 'casablanca-derby-tale-two-colors',
    excerpt: 'The intense rivalry between Raja and Wydad, and how their Ultra groups shape the North African football landscape.',
    category: 'analysis',
    author: 'Youssef El Amrani',
    readTime: '10 min',
    publishedAt: '2024-01-05',
    featured: false,
  },
  {
    id: '5',
    title: 'Documentary: Yellow Wall - The Südtribüne Story',
    slug: 'documentary-yellow-wall-sudtribune',
    excerpt: 'Behind the scenes of Europe\'s largest standing terrace and the community that makes it legendary.',
    category: 'documentary',
    author: 'Hans Müller',
    readTime: '20 min',
    publishedAt: '2024-01-01',
    featured: true,
  },
  {
    id: '6',
    title: 'Creating the Perfect Tifo: A Step-by-Step Guide',
    slug: 'creating-perfect-tifo-guide',
    excerpt: 'From concept to execution, learn how Ultra groups plan and create their stunning visual displays.',
    category: 'tifo',
    author: 'Paolo Bianchi',
    readTime: '18 min',
    publishedAt: '2023-12-28',
    featured: false,
  },
];

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

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
              Articles & <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Deep dives into Ultra culture, interviews with leaders, historical
              analyses, and exclusive documentaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-16 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <Input
                placeholder="Search articles..."
                leftIcon={<Search className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {category.name}
                  <span className="ml-1 text-xs opacity-60">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="h-5 w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-white">Featured</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/articles/${article.slug}`}>
                      <Card hoverable className="h-full group">
                        {/* Image */}
                        <div className="relative h-64 bg-zinc-800">
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                            <BookOpen className="h-16 w-16 text-zinc-700" />
                          </div>
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-medium capitalize">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        <CardContent>
                          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-zinc-400 mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-sm text-zinc-500">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <User className="h-3.5 w-3.5" />
                                {article.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {article.readTime}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 group-hover:text-red-500 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* All Articles */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/articles/${article.slug}`}>
                    <Card hoverable className="h-full group">
                      {/* Image */}
                      <div className="relative h-48 bg-zinc-800">
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                        <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                          <BookOpen className="h-12 w-12 text-zinc-700" />
                        </div>
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                          <Tag className="h-3 w-3 text-red-500" />
                          <span className="text-xs text-red-400 capitalize">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <CardContent>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Empty state */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 text-zinc-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No articles found
                </h3>
                <p className="text-zinc-400">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>

          {/* Load More */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

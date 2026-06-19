'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

interface Article {
  _id: string;
  slug: string;
  title: string;
  coverImage: string;
  category: string;
  readTime: number;
}

interface LatestArticlesSectionProps {
  articles: Article[];
}

export default function LatestArticlesSection({ articles }: LatestArticlesSectionProps) {
  const t = useTranslations('home');
  const locale = useLocale();

  const categoryMap: { [key: string]: string } = {
    history: 'History',
    culture: 'Culture',
    tifo: 'Tifo',
    interview: 'Interview',
    documentary: 'Documentary',
    event: 'Event',
    analysis: 'Analysis',
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
              {t('latestArticles')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
              {t('articlesSubtitle')}
            </p>
          </div>
          <Link href={`/${locale}/articles`} className="mt-4 sm:mt-0">
            <Button variant="ghost" rightIcon={<ArrowRight className="h-4 w-4" />}>
              {t('allArticles')}
            </Button>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/${locale}/articles/${article.slug}`}>
                <Card hoverable className="h-full">
                  {/* Image */}
                  <div className="relative h-56 bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent z-10" />
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-green-600/90 text-white text-xs font-medium">
                        {categoryMap[article.category] || article.category}
                      </span>
                    </div>
                  </div>

                  <CardContent>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      <span>{article.readTime} min read</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

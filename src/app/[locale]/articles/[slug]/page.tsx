'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Eye,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  ChevronRight,
  Tag,
  User,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { CommentSection } from '@/components/comments';
import { useArticle } from '@/hooks/useApi';

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default function ArticlePage({ params }: PageProps) {
  const { slug } = use(params);
  const t = useTranslations('articles');
  const locale = useLocale();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const { data, isLoading, error } = useArticle(slug);
  const article = data?.article;

  // Fallback data for demo
  const fallbackArticle = {
    title: 'GREEN BOYS 2005: Pioneers of Moroccan Ultra Culture',
    slug: 'green-boys-2005-pioneers',
    excerpt: 'How a group of young Raja supporters changed the landscape of football fandom in North Africa forever.',
    content: `
## The Birth of a Movement

In 2005, something extraordinary happened in the stands of Stade Mohammed V in Casablanca. A group of passionate young Raja supporters decided to revolutionize the way football was experienced in Morocco. They called themselves GREEN BOYS 2005, and they would become the pioneers of Ultra culture in North Africa.

## European Inspiration, African Soul

The founders of GREEN BOYS had witnessed the incredible atmospheres created by Italian Ultra groups during Champions League broadcasts. They were mesmerized by the coordinated chants, the spectacular tifos, and the unwavering dedication of these supporters. But they didn't want to simply copy what they saw – they wanted to create something uniquely Moroccan.

> "We took the structure and discipline from European Ultras, but the passion and soul came from our own hearts, from our love for Raja." – Founding member interview

## The Early Days

The first years were challenging. Many people didn't understand what they were trying to do. Stadium authorities were suspicious of their organization. Other supporters thought they were just showing off. But GREEN BOYS persisted, slowly building their reputation through:

- **Consistent presence** at every home and away match
- **Creative choreos** that surprised and delighted fans
- **Original chants** that mixed traditional Moroccan music with Ultra rhythms
- **Community work** that showed their commitment went beyond the stadium

## Breaking Boundaries

What made GREEN BOYS truly special was their ability to transcend the typical boundaries of supporter groups. They weren't just about creating noise – they were about creating art, building community, and representing a new generation of Moroccan youth.

Their tifos became legendary. The "Eagle Rising" display in 2010 is still considered one of the greatest tifos ever produced in Africa. It required months of preparation, thousands of volunteers, and an incredible amount of coordination. When it was revealed before a crucial derby match, even rival supporters couldn't help but applaud.

## The Spread of Ultra Culture

The success of GREEN BOYS inspired countless other groups across Morocco and beyond. In Egypt, Tunisia, Algeria, and throughout Africa, young supporters looked to Casablanca for inspiration. GREEN BOYS had proven that Ultra culture wasn't just for Europeans – it was a universal language of passion that could be spoken anywhere.

## Legacy and Future

Today, GREEN BOYS 2005 remains at the forefront of African Ultra culture. They continue to innovate, to inspire, and to show the world that the passion for football knows no boundaries. As they celebrate nearly two decades of existence, their influence continues to grow.

The story of GREEN BOYS is not just about football – it's about youth, creativity, community, and the power of collective passion. It's a story that continues to be written with every match, every tifo, and every chant that echoes through Stade Mohammed V.

---

*This article is part of our ongoing series exploring Ultra groups around the world.*
    `,
    coverImage: '/images/articles/article-1.webp',
    category: 'history' as const,
    tags: ['Morocco', 'Raja Casablanca', 'GREEN BOYS 2005', 'North Africa', 'Pioneers'],
    author: {
      name: 'Ahmed K.',
      image: '/images/gallery/gallery-1.webp',
      bio: 'Football culture writer specializing in Ultra movements across Africa and the Middle East.',
    },
    publishedAt: new Date('2024-12-15'),
    views: 15420,
    likes: 2340,
    readTime: 12,
    isFeatured: true,
  };

  const displayArticle = article || fallbackArticle;

  // Related articles mock
  const relatedArticles = [
    {
      slug: 'art-of-tifo',
      title: 'The Art of Tifo: A Visual Revolution',
      excerpt: 'From simple banners to stadium-wide masterpieces.',
      image: '/images/articles/article-2.webp',
      category: 'Culture',
      readTime: 8,
    },
    {
      slug: 'african-ultra-renaissance',
      title: 'The African Ultra Renaissance',
      excerpt: 'How Ultra culture spread across the continent.',
      image: '/images/articles/article-5.webp',
      category: 'Global',
      readTime: 10,
    },
    {
      slug: 'barra-bravas-history',
      title: 'South American Passion: Barra Bravas History',
      excerpt: 'The origins of organized supporter groups.',
      image: '/images/articles/article-3.webp',
      category: 'History',
      readTime: 15,
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  // Simple markdown-like rendering for paragraphs and headers
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inBlockquote = false;
    let blockquoteContent = '';

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle blockquotes
      if (trimmedLine.startsWith('>')) {
        if (!inBlockquote) {
          inBlockquote = true;
          blockquoteContent = trimmedLine.substring(1).trim();
        } else {
          blockquoteContent += ' ' + trimmedLine.substring(1).trim();
        }
        return;
      } else if (inBlockquote) {
        elements.push(
          <blockquote key={`bq-${index}`} className="border-l-4 border-green-500 pl-6 py-4 my-6 bg-zinc-900/50 rounded-r-lg">
            <p className="text-lg italic text-zinc-300">{blockquoteContent}</p>
          </blockquote>
        );
        inBlockquote = false;
        blockquoteContent = '';
      }

      if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-bold text-white mt-8 mb-3">
            {trimmedLine.substring(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith('- **')) {
        const match = trimmedLine.match(/- \*\*(.+?)\*\*(.+)/);
        if (match) {
          elements.push(
            <li key={index} className="text-zinc-300 ml-6 mb-2">
              <strong className="text-white">{match[1]}</strong>{match[2]}
            </li>
          );
        }
      } else if (trimmedLine.startsWith('---')) {
        elements.push(<hr key={index} className="my-8 border-zinc-800" />);
      } else if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*')) {
        elements.push(
          <p key={index} className="text-zinc-400 italic my-4">
            {trimmedLine.slice(1, -1)}
          </p>
        );
      } else if (trimmedLine.length > 0) {
        elements.push(
          <p key={index} className="text-zinc-300 leading-relaxed mb-4">
            {trimmedLine}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={displayArticle.coverImage}
            alt={displayArticle.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          {/* Back Button */}
          <Link href={`/${locale}/articles`} className="absolute top-8 left-4 sm:left-8">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              {t('backToArticles')}
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-green-600 text-white text-sm font-medium capitalize">
                {displayArticle.category}
              </span>
              {displayArticle.isFeatured && (
                <span className="px-3 py-1 rounded-full bg-yellow-600/20 border border-yellow-600/30 text-yellow-400 text-sm font-medium">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {displayArticle.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-zinc-400">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {typeof displayArticle.author === 'object' && 'name' in displayArticle.author ? displayArticle.author.name : 'Unknown Author'}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {displayArticle.publishedAt && new Date(displayArticle.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {displayArticle.readTime} min read
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {(displayArticle.views / 1000).toFixed(1)}K views
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Excerpt */}
              <p className="text-xl text-zinc-300 mb-8 font-medium leading-relaxed border-l-4 border-green-500 pl-6">
                {displayArticle.excerpt}
              </p>

              {/* Content */}
              <div className="prose prose-invert prose-green max-w-none">
                {renderContent(displayArticle.content)}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-zinc-800">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-zinc-400" />
                  <span className="text-zinc-400 font-medium">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {displayArticle.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/${locale}/articles?tag=${tag}`}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  variant={liked ? 'primary' : 'outline'}
                  leftIcon={<Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />}
                  onClick={() => setLiked(!liked)}
                >
                  {liked ? 'Liked' : 'Like'} ({displayArticle.likes})
                </Button>
                <Button
                  variant={bookmarked ? 'primary' : 'outline'}
                  leftIcon={<Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-current' : ''}`} />}
                  onClick={() => setBookmarked(!bookmarked)}
                >
                  {bookmarked ? 'Saved' : 'Save'}
                </Button>
                <Button variant="outline" leftIcon={<Share2 className="h-5 w-5" />}>
                  Share
                </Button>
                <Button variant="outline" leftIcon={<MessageCircle className="h-5 w-5" />}>
                  Comment
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Author Card */}
              {typeof displayArticle.author === 'object' && 'name' in displayArticle.author && (
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">About the Author</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0">
                      {'image' in displayArticle.author && displayArticle.author.image ? (
                        <img
                          src={displayArticle.author.image}
                          alt={displayArticle.author.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="h-8 w-8 text-zinc-600" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{displayArticle.author.name}</h4>
                      <p className="text-zinc-400 text-sm mt-1">{'bio' in displayArticle.author ? displayArticle.author.bio : ''}</p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Related Articles */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/${locale}/articles/${related.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div className="w-20 h-16 rounded-lg bg-zinc-800 overflow-hidden flex-shrink-0">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-white text-sm group-hover:text-green-500 transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
                            <span>{related.category}</span>
                            <span>•</span>
                            <span>{related.readTime} min</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href={`/${locale}/articles`}>
                  <Button variant="outline" size="sm" className="w-full mt-4" rightIcon={<ChevronRight className="h-4 w-4" />}>
                    View All Articles
                  </Button>
                </Link>
              </Card>

              {/* Newsletter Card */}
              <Card className="p-6 bg-gradient-to-br from-green-600/10 to-transparent border-green-600/20">
                <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Get the latest Ultra culture stories delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 mb-3 focus:outline-none focus:border-green-500"
                />
                <Button className="w-full">Subscribe</Button>
              </Card>
            </aside>
          </div>

          {/* Comments Section */}
          <CommentSection
            targetType="article"
            targetId={slug}
            className="mt-12"
          />
        </div>
      </section>
    </div>
  );
}

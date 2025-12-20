'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Heart,
  Share2,
  MessageSquare,
  BookOpen,
  Tag,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

// Mock data
const articlesData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: { name: string; bio: string };
  readTime: string;
  publishedAt: string;
  tags: string[];
}> = {
  'art-of-tifo-visual-revolution': {
    title: 'The Art of Tifo: A Visual Revolution in Football Stadiums',
    excerpt: 'Exploring how Ultra groups transformed stadium experiences through spectacular visual displays and coordinated choreographies.',
    content: `
The art of tifo has evolved from simple banners to breathtaking displays that transform entire stadium sections into canvases of passion and creativity. This visual revolution has redefined what it means to support a football club.

## Origins of Tifo Culture

The word "tifo" comes from the Italian word for "typhoid fever" – a reference to the infectious passion that spreads through stadium crowds. What began in Italian stadiums in the 1970s has since become a global phenomenon.

## The Creative Process

Creating a tifo is a massive undertaking that requires months of planning, hundreds of volunteers, and significant financial resources. Ultra groups often spend thousands of hours designing, painting, and coordinating these displays.

### Key Elements of Great Tifos

1. **Scale** - The best tifos utilize entire stadium sections
2. **Coordination** - Thousands of fans must act in unison
3. **Message** - Every tifo tells a story or conveys a message
4. **Timing** - The reveal moment is carefully choreographed

## Impact on Football Culture

Tifos have become an integral part of football's visual identity. They create moments that transcend the sport itself, becoming cultural artifacts that represent the creativity and dedication of supporter communities.

The influence of tifo culture continues to spread, inspiring new generations of Ultra groups to push the boundaries of what's possible in stadium displays.
    `,
    category: 'culture',
    author: {
      name: 'Ahmed Benali',
      bio: 'Football culture journalist with 15 years of experience covering Ultra movements worldwide.',
    },
    readTime: '8 min',
    publishedAt: 'January 15, 2024',
    tags: ['Tifo', 'Culture', 'Art', 'Ultras'],
  },
  'south-american-passion-barra-bravas': {
    title: 'South American Passion: The History of Barra Bravas',
    excerpt: 'A deep dive into the origins and evolution of supporter culture in South America.',
    content: `
South American football is inseparable from the phenomenon of the barra brava. These organized supporter groups have shaped the continent's football culture for over a century.

## The Birth of Barras

The first organized supporter groups in South America emerged in Argentina in the early 20th century. These groups were different from their European counterparts – they were born from the working-class neighborhoods surrounding the stadiums.

## Cultural Significance

In South America, being part of a barra brava is often a family tradition passed down through generations. The stadium becomes a space for community, identity, and expression.

### Defining Characteristics

1. **Aguante** - The concept of endurance and unwavering support
2. **Territorial Identity** - Strong connection to local neighborhoods
3. **Musical Traditions** - Continuous singing and drumming throughout matches
4. **Visual Displays** - Flags, banners, and coordinated celebrations

## La Bombonera and Beyond

Buenos Aires alone hosts some of the world's most passionate supporter cultures. La Bombonera, home of Boca Juniors, is famous for literally shaking when La Doce leads their chants.

The influence of South American supporter culture has spread globally, inspiring Ultra movements across every continent.
    `,
    category: 'history',
    author: {
      name: 'Carlos Rodriguez',
      bio: 'Buenos Aires-based writer specializing in South American football culture and history.',
    },
    readTime: '12 min',
    publishedAt: 'January 10, 2024',
    tags: ['Barra Brava', 'Argentina', 'History', 'South America'],
  },
};

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = articlesData[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-zinc-700 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Article Not Found</h1>
          <p className="text-zinc-400 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/articles">
            <Button>Back to Articles</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-sm font-medium capitalize">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime} read
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.publishedAt}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-zinc-400 mb-8">
              {article.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                <span className="text-white font-medium">
                  {article.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-white font-medium">{article.author.name}</p>
                <p className="text-sm text-zinc-400">{article.author.bio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-invert prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('1. ')) {
                    const items = paragraph.split('\n');
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 text-zinc-300 my-4">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace(/^\d+\.\s\*\*/, '').replace(/\*\*.*$/, '')}</li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-zinc-300 leading-relaxed my-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-zinc-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-zinc-400" />
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex items-center gap-4">
                <Button leftIcon={<Heart className="h-4 w-4" />} variant="outline">
                  Like
                </Button>
                <Button leftIcon={<Share2 className="h-4 w-4" />} variant="ghost">
                  Share
                </Button>
                <Button leftIcon={<MessageSquare className="h-4 w-4" />} variant="ghost">
                  Comment
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                      About the Author
                    </h4>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {article.author.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-white font-medium">{article.author.name}</p>
                    </div>
                    <p className="text-sm text-zinc-400">{article.author.bio}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

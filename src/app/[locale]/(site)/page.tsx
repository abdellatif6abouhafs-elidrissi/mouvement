import { Suspense } from 'react';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowRight, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';
import { GroupOfWeek, TifoSpotlight, CulturalPoll } from '@/components/editorial';
import HeroSection from '@/components/home/HeroSection';
import FeaturedGroupsSection from '@/components/home/FeaturedGroupsSection';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import CommunityCTASection from '@/components/home/CommunityCTASection';
import { getGroups } from '@/actions/getGroups';
import { getArticles } from '@/actions/getArticles';

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations('home');

  // Fetch featured groups (limit to 6) with error handling
  let groups: any[] = [];
  try {
    const groupsResponse = await getGroups({
      limit: 6,
      featured: true
    }).catch(() => ({ groups: [] }));
    groups = (groupsResponse?.groups || []).slice(0, 6);
  } catch (error) {
    console.error('Error fetching groups:', error);
    groups = [];
  }

  // Fetch latest articles (limit to 3) with error handling
  let articles: any[] = [];
  try {
    const articlesResponse = await getArticles({
      limit: 3,
      status: 'published'
    }).catch(() => ({ articles: [] }));
    articles = (articlesResponse?.articles || []).slice(0, 3);
  } catch (error) {
    console.error('Error fetching articles:', error);
    articles = [];
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <Suspense fallback={<div className="min-h-[90vh] bg-zinc-900" />}>
        <HeroSection />
      </Suspense>

      {/* Featured Groups Section */}
      {groups.length > 0 ? (
        <Suspense fallback={<div className="min-h-[400px] bg-white dark:bg-transparent" />}>
          <FeaturedGroupsSection groups={groups} />
        </Suspense>
      ) : null}

      {/* Interactive Map CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-zinc-50 dark:bg-transparent">
        <div className="absolute inset-0 section-gradient" />
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg dark:shadow-none">
            <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-5" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-600/10 to-transparent" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600/10 border border-green-600/20 text-green-600 dark:text-green-500 text-xs font-medium mb-6">
                  <Globe className="h-3.5 w-3.5" />
                  {t('interactiveMap')}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  {t('mapTitle')} <span className="gradient-text">{t('mapTitleHighlight')}</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
                  {t('mapSubtitle')}
                </p>
                <Link href={`/${locale}/map`}>
                  <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                    {t('openMap')}
                  </Button>
                </Link>
              </div>

              {/* Map Preview */}
              <div className="flex-1 relative">
                <div className="aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                  <img
                    src="/images/map-bg.png"
                    alt="Interactive Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating markers */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '200ms' }} />
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '400ms' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      {articles.length > 0 ? (
        <Suspense fallback={<div className="min-h-[400px] bg-white dark:bg-transparent" />}>
          <LatestArticlesSection articles={articles} />
        </Suspense>
      ) : null}

      {/* Editorial Section */}
      <Suspense fallback={<div className="min-h-[500px] bg-zinc-100 dark:bg-zinc-900/30" />}>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-100 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Group of Week - takes 2 columns */}
              <div className="lg:col-span-2">
                <GroupOfWeek />
              </div>
              {/* Cultural Poll */}
              <div className="lg:col-span-1">
                <CulturalPoll />
              </div>
            </div>

            {/* Tifo Spotlight - full width */}
            <div className="mt-8">
              <TifoSpotlight />
            </div>
          </div>
        </section>
      </Suspense>

      {/* Community CTA Section */}
      <Suspense fallback={<div className="min-h-[300px] bg-white dark:bg-transparent" />}>
        <CommunityCTASection />
      </Suspense>
    </div>
  );
}

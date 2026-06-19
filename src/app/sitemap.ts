import { MetadataRoute } from 'next';
import { connectDB } from '@/lib/db';
import UltraGroup from '@/models/UltraGroup';
import Article from '@/models/Article';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://mouvement-liart.vercel.app';
const locales = ['en', 'fr', 'ar', 'it', 'es', 'pt-br'];

// Static pages
const staticPages = [
  '',
  '/about',
  '/articles',
  '/ultras',
  '/tifos',
  '/chants',
  '/timeline',
  '/education',
  '/community',
  '/contact',
  '/login',
  '/register'
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  // Add static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: locales.reduce((acc, loc) => {
            acc[loc === 'pt-br' ? 'pt-BR' : loc] = `${BASE_URL}/${loc}${page}`;
            return acc;
          }, {} as Record<string, string>)
        }
      });
    }
  }

  // Try to fetch dynamic content from database
  try {
    await connectDB();

    // Fetch Ultra Groups from database
    try {
      const groups = await UltraGroup.find({})
        .select('slug updatedAt')
        .limit(200)
        .lean();

      if (groups && groups.length > 0) {
        for (const group of groups) {
          for (const locale of locales) {
            entries.push({
              url: `${BASE_URL}/${locale}/ultras/${group.slug}`,
              lastModified: new Date(group.updatedAt || Date.now()),
              changeFrequency: 'weekly',
              priority: 0.7,
              alternates: {
                languages: locales.reduce((acc, loc) => {
                  acc[loc === 'pt-br' ? 'pt-BR' : loc] = `${BASE_URL}/${loc}/ultras/${group.slug}`;
                  return acc;
                }, {} as Record<string, string>)
              }
            });
          }
        }
      }
    } catch (groupError) {
      console.error('Error fetching groups from database for sitemap:', groupError);
    }

    // Fetch Articles from database
    try {
      const articles = await Article.find({ status: 'published' })
        .select('slug updatedAt')
        .limit(200)
        .lean();

      if (articles && articles.length > 0) {
        for (const article of articles) {
          for (const locale of locales) {
            entries.push({
              url: `${BASE_URL}/${locale}/articles/${article.slug}`,
              lastModified: new Date(article.updatedAt || Date.now()),
              changeFrequency: 'monthly',
              priority: 0.6,
              alternates: {
                languages: locales.reduce((acc, loc) => {
                  acc[loc === 'pt-br' ? 'pt-BR' : loc] = `${BASE_URL}/${loc}/articles/${article.slug}`;
                  return acc;
                }, {} as Record<string, string>)
              }
            });
          }
        }
      }
    } catch (articleError) {
      console.error('Error fetching articles from database for sitemap:', articleError);
    }
  } catch (dbError) {
    console.error('Error connecting to database for sitemap:', dbError);
    console.warn('Sitemap will include only static pages. Dynamic content unavailable.');
  }

  return entries;
}

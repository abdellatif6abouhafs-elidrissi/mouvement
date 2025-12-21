import { MetadataRoute } from 'next';

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

  // Try to fetch dynamic content from API
  try {
    // Fetch Ultra Groups
    const groupsRes = await fetch(`${BASE_URL}/api/groups?limit=100`, {
      next: { revalidate: 3600 }
    });
    if (groupsRes.ok) {
      const groupsData = await groupsRes.json();
      if (groupsData.groups) {
        for (const group of groupsData.groups) {
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
    }
  } catch (error) {
    console.error('Error fetching groups for sitemap:', error);
  }

  try {
    // Fetch Articles
    const articlesRes = await fetch(`${BASE_URL}/api/articles?limit=100&status=published`, {
      next: { revalidate: 3600 }
    });
    if (articlesRes.ok) {
      const articlesData = await articlesRes.json();
      if (articlesData.articles) {
        for (const article of articlesData.articles) {
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
    }
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error);
  }

  return entries;
}

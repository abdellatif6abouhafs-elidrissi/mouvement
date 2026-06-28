import { MetadataRoute } from 'next';

const BASE_URL = 'https://mouvement-liart.vercel.app';
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

  // Fetch Ultra Groups from API
  let groups: Array<{ slug: string; updatedAt?: string }> = [];
  try {
    const res = await fetch(`${BASE_URL}/api/groups?limit=200`);
    if (res.ok) {
      const data = await res.json();
      groups = data.groups || [];
    }
  } catch {}

  if (groups && groups.length > 0) {
    for (const group of groups) {
      for (const locale of locales) {
        entries.push({
          url: `${BASE_URL}/${locale}/ultras/${group.slug}`,
          lastModified: group.updatedAt ? new Date(group.updatedAt) : new Date(),
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

  // Fetch Articles from API
  let articles: Array<{ slug: string; updatedAt?: string }> = [];
  try {
    const res = await fetch(`${BASE_URL}/api/articles?limit=200&status=published`);
    if (res.ok) {
      const data = await res.json();
      articles = data.articles || [];
    }
  } catch {}

  if (articles && articles.length > 0) {
    for (const article of articles) {
      for (const locale of locales) {
        entries.push({
          url: `${BASE_URL}/${locale}/articles/${article.slug}`,
          lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(),
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

  return entries;
}

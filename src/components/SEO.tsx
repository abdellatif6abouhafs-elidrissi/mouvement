'use client';

import { useLocale } from 'next-intl';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mouvement.vercel.app';

const localeToHreflang: Record<string, string> = {
  en: 'en',
  fr: 'fr',
  ar: 'ar',
  it: 'it',
  es: 'es',
  'pt-br': 'pt-BR'
};

export default function SEO({
  title = 'MOUVEMENT - The Culture of Passion',
  description = 'Discover the art, history, and spirit of Ultra culture worldwide. Explore groups, tifos, chants, and the global movement.',
  keywords = ['ultras', 'tifo', 'football supporters', 'curva', 'supporter culture'],
  image = '/images/og-image.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false
}: SEOProps) {
  const locale = useLocale();

  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const allLocales = ['en', 'fr', 'ar', 'it', 'es', 'pt-br'];

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content={localeToHreflang[locale] || 'en'} />
      <meta property="og:site_name" content="MOUVEMENT" />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Hreflang tags for multilingual SEO */}
      {allLocales.map((loc) => {
        const hreflang = localeToHreflang[loc];
        const localePath = url?.replace(`/${locale}`, `/${loc}`) || `/${loc}`;
        return (
          <link
            key={loc}
            rel="alternate"
            hrefLang={hreflang}
            href={`${BASE_URL}${localePath}`}
          />
        );
      })}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en`} />

      {/* Additional SEO */}
      <meta name="author" content="MOUVEMENT" />
      <meta name="theme-color" content="#22c55e" />
      <meta name="msapplication-TileColor" content="#22c55e" />
    </>
  );
}

// Generate metadata for pages (App Router)
export function generateSEOMetadata({
  title = 'MOUVEMENT - The Culture of Passion',
  description = 'Discover the art, history, and spirit of Ultra culture worldwide.',
  keywords = ['ultras', 'tifo', 'football supporters'],
  image = '/images/og-image.jpg',
  locale = 'en'
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  locale?: string;
}) {
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'MOUVEMENT' }],
    openGraph: {
      title,
      description,
      images: [{ url: fullImage }],
      locale: localeToHreflang[locale] || 'en',
      type: 'website',
      siteName: 'MOUVEMENT'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage]
    },
    alternates: {
      canonical: BASE_URL,
      languages: {
        'en': `${BASE_URL}/en`,
        'fr': `${BASE_URL}/fr`,
        'ar': `${BASE_URL}/ar`,
        'it': `${BASE_URL}/it`,
        'es': `${BASE_URL}/es`,
        'pt-BR': `${BASE_URL}/pt-br`
      }
    }
  };
}

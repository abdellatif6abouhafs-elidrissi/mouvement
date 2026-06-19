import { Metadata } from 'next';
import ArticleClient from './ArticleClient';

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const baseUrl = 'https://mouvement-liart.vercel.app';

  try {
    const res = await fetch(`${baseUrl}/api/articles/${slug}`, {
      next: { revalidate: 3600 }
    }).catch(() => null);

    if (!res || !res.ok) {
      return {
        title: 'Article | Mouvement',
        description: 'Discover stories about Ultra culture'
      };
    }

    const data = await res.json().catch(() => null);
    if (!data) {
      return {
        title: 'Article | Mouvement',
        description: 'Discover stories about Ultra culture'
      };
    }
    const article = data?.article;

    if (!article) {
      return {
        title: 'Article | Mouvement',
        description: 'Discover stories about Ultra culture'
      };
    }

    const description = (article.excerpt || article.content || '').replace(/\n/g, ' ').slice(0, 160);
    const image = article.coverImage || '';
    const base = 'https://mouvement-liart.vercel.app';
    const locales = ['en', 'fr', 'ar', 'it', 'es', 'pt-br'];

    return {
      title: `${article.title} - Mouvement`,
      description: description || 'Discover stories about Ultra culture',
      openGraph: {
        title: article.title,
        description: description || 'Discover stories about Ultra culture',
        images: image ? [image] : [],
        url: `${base}/${locale}/articles/${slug}`,
        type: 'article',
        authors: article.author?.name ? [article.author.name] : [],
        publishedTime: article.publishedAt,
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: description || 'Discover stories about Ultra culture',
        images: image ? [image] : [],
      },
      alternates: {
        canonical: `${base}/${locale}/articles/${slug}`,
        languages: Object.fromEntries(
          locales.map(l => [
            l === 'pt-br' ? 'pt-BR' : l,
            `${base}/${l}/articles/${slug}`
          ])
        )
      }
    };
  } catch (error) {
    console.error('Error generating metadata for article:', error);
    return {
      title: 'Article | Mouvement',
      description: 'Discover stories about Ultra culture'
    };
  }
}

export default function ArticlePage({ params }: PageProps) {
  return <ArticleClient params={params} />;
}

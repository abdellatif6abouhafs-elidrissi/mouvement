import { Metadata } from 'next';
import UltraGroupClient from './UltraGroupClient';

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const baseUrl = 'https://mouvement.vercel.app';

  try {
    const res = await fetch(`${baseUrl}/api/groups/${slug}`, {
      next: { revalidate: 3600 }
    }).catch(() => null);

    if (!res || !res.ok) {
      return {
        title: 'Ultra Group | Mouvement',
        description: 'Explore Ultra culture groups from around the world'
      };
    }

    const data = await res.json().catch(() => null);
    if (!data) {
      return {
        title: 'Ultra Group | Mouvement',
        description: 'Explore Ultra culture groups from around the world'
      };
    }
    const group = data?.group;

    if (!group) {
      return {
        title: 'Ultra Group | Mouvement',
        description: 'Explore Ultra culture groups from around the world'
      };
    }

    const description = (group.history || '').replace(/\n/g, ' ').slice(0, 160);
    const image = group.coverImage || group.logo || '';
    const base = 'https://mouvement.vercel.app';
    const locales = ['en', 'fr', 'ar', 'it', 'es', 'pt-br'];

    return {
      title: `${group.name} | ${group.club} Ultras - Mouvement`,
      description: description || `Learn about ${group.name}, the ${group.club} ultra supporters from ${group.country}`,
      openGraph: {
        title: group.name,
        description: description || `Learn about ${group.name}`,
        images: image ? [image] : [],
        url: `${base}/${locale}/ultras/${slug}`,
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: group.name,
        description: description || `Learn about ${group.name}`,
        images: image ? [image] : [],
      },
      alternates: {
        canonical: `${base}/${locale}/ultras/${slug}`,
        languages: Object.fromEntries(
          locales.map(l => [
            l === 'pt-br' ? 'pt-BR' : l,
            `${base}/${l}/ultras/${slug}`
          ])
        )
      }
    };
  } catch (error) {
    console.error('Error generating metadata for group:', error);
    return {
      title: 'Ultra Group | Mouvement',
      description: 'Explore Ultra culture groups from around the world'
    };
  }
}

export default function UltraGroupPage({ params }: PageProps) {
  return <UltraGroupClient params={params} />;
}

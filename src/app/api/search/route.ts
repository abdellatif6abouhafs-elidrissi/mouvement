import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import UltraGroup from '@/models/UltraGroup';
import Article from '@/models/Article';
import Tifo from '@/models/Tifo';
import Chant from '@/models/Chant';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q') || '';
    const locale = searchParams.get('locale') || 'en';
    const limit = parseInt(searchParams.get('limit') || '10');

    if (!query.trim()) {
      return NextResponse.json({
        success: true,
        results: []
      });
    }

    await connectDB();

    const searchRegex = new RegExp(query, 'i');

    // Search Ultra Groups
    const groups = await UltraGroup.find({
      $or: [
        { name: searchRegex },
        { club: searchRegex },
        { city: searchRegex },
        { country: searchRegex }
      ]
    })
      .select('name slug club city country')
      .limit(limit)
      .lean();

    // Search Articles
    const articles = await Article.find({
      status: 'published',
      $or: [
        { title: searchRegex },
        { excerpt: searchRegex },
        { tags: searchRegex }
      ]
    })
      .select('title slug excerpt category')
      .limit(limit)
      .lean();

    // Search Tifos (by translation title)
    const tifos = await Tifo.find({
      'translations.title': searchRegex
    })
      .select('translations group club groupSlug')
      .limit(limit)
      .lean();

    // Search Chants (by translation title)
    const chants = await Chant.find({
      'translations.title': searchRegex
    })
      .select('translations group club groupSlug')
      .limit(limit)
      .lean();

    // Format results
    const results = [
      ...groups.map((group) => ({
        id: group._id.toString(),
        type: 'group' as const,
        title: group.name,
        subtitle: `${group.club} - ${group.city}, ${group.country}`,
        slug: group.slug
      })),
      ...articles.map((article) => ({
        id: article._id.toString(),
        type: 'article' as const,
        title: article.title,
        subtitle: article.excerpt.substring(0, 80) + '...',
        slug: article.slug
      })),
      ...tifos.map((tifo) => {
        const translation = tifo.translations.find((t: { locale: string }) => t.locale === locale)
          || tifo.translations[0];
        return {
          id: tifo._id.toString(),
          type: 'tifo' as const,
          title: translation?.title || 'Untitled',
          subtitle: `${tifo.group} - ${tifo.club}`,
          slug: tifo.groupSlug || tifo._id.toString()
        };
      }),
      ...chants.map((chant) => {
        const translation = chant.translations.find((t: { locale: string }) => t.locale === locale)
          || chant.translations[0];
        return {
          id: chant._id.toString(),
          type: 'chant' as const,
          title: translation?.title || 'Untitled',
          subtitle: `${chant.group} - ${chant.club}`,
          slug: chant.groupSlug || chant._id.toString()
        };
      })
    ];

    // Sort by relevance (exact matches first)
    results.sort((a, b) => {
      const aExact = a.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0;
      const bExact = b.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0;
      return bExact - aExact;
    });

    return NextResponse.json({
      success: true,
      results: results.slice(0, limit * 2),
      query
    });

  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { success: false, error: 'Search failed' },
      { status: 500 }
    );
  }
}

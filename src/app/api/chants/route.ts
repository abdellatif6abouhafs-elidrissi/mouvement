import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Chant from '@/models/Chant';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const featured = searchParams.get('featured');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    const query: Record<string, unknown> = {};

    if (featured === 'true') {
      query.isFeatured = true;
    }

    const skip = (page - 1) * limit;

    const [chants, total] = await Promise.all([
      Chant.find(query)
        .sort({ likes: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Chant.countDocuments(query),
    ]);

    // Transform chants to include localized content
    const localizedChants = chants.map((chant: any) => {
      const translation = chant.translations?.find((t: any) => t.locale === locale)
        || chant.translations?.find((t: any) => t.locale === 'en')
        || chant.translations?.[0];

      return {
        _id: chant._id,
        title: translation?.title || '',
        lyrics: translation?.lyrics || '',
        origin: translation?.origin || '',
        group: chant.group,
        groupSlug: chant.groupSlug,
        club: chant.club,
        country: chant.country,
        countryCode: chant.countryCode,
        duration: chant.duration,
        audio: chant.audio,
        video: chant.video,
        views: chant.views,
        likes: chant.likes,
        isFeatured: chant.isFeatured,
        yearCreated: chant.yearCreated,
      };
    });

    // Get featured chant separately
    let featuredChant = null;
    const featuredDoc = await Chant.findOne({ isFeatured: true }).sort({ likes: -1 }).lean();
    if (featuredDoc) {
      const translation = (featuredDoc as any).translations?.find((t: any) => t.locale === locale)
        || (featuredDoc as any).translations?.find((t: any) => t.locale === 'en')
        || (featuredDoc as any).translations?.[0];

      featuredChant = {
        _id: (featuredDoc as any)._id,
        title: translation?.title || '',
        lyrics: translation?.lyrics || '',
        origin: translation?.origin || '',
        group: (featuredDoc as any).group,
        club: (featuredDoc as any).club,
        country: (featuredDoc as any).country,
        duration: (featuredDoc as any).duration,
        views: (featuredDoc as any).views,
        likes: (featuredDoc as any).likes,
      };
    }

    return NextResponse.json({
      chants: localizedChants,
      featured: featuredChant,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching chants:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chants' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Tifo from '@/models/Tifo';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const featured = searchParams.get('featured');
    const spotlight = searchParams.get('spotlight');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    const query: Record<string, unknown> = {};

    if (featured === 'true') {
      query.isFeatured = true;
    }

    if (spotlight === 'true') {
      query.isSpotlight = true;
    }

    const skip = (page - 1) * limit;

    const [tifos, total] = await Promise.all([
      Tifo.find(query)
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Tifo.countDocuments(query),
    ]);

    // Transform tifos to include localized content
    const localizedTifos = tifos.map((tifo: any) => {
      const translation = tifo.translations?.find((t: any) => t.locale === locale)
        || tifo.translations?.find((t: any) => t.locale === 'en')
        || tifo.translations?.[0];

      return {
        _id: tifo._id,
        title: translation?.title || '',
        description: translation?.description || '',
        group: tifo.group,
        groupSlug: tifo.groupSlug,
        club: tifo.club,
        country: tifo.country,
        countryCode: tifo.countryCode,
        date: tifo.date,
        match: tifo.match,
        stadium: tifo.stadium,
        image: tifo.image,
        video: tifo.video,
        views: tifo.views,
        likes: tifo.likes,
        isFeatured: tifo.isFeatured,
        isSpotlight: tifo.isSpotlight,
        participantsCount: tifo.participantsCount,
      };
    });

    // Get spotlight tifo separately if needed
    let spotlightTifo = null;
    if (!spotlight) {
      const spotlightDoc = await Tifo.findOne({ isSpotlight: true }).lean();
      if (spotlightDoc) {
        const translation = (spotlightDoc as any).translations?.find((t: any) => t.locale === locale)
          || (spotlightDoc as any).translations?.find((t: any) => t.locale === 'en')
          || (spotlightDoc as any).translations?.[0];

        spotlightTifo = {
          _id: (spotlightDoc as any)._id,
          title: translation?.title || '',
          description: translation?.description || '',
          group: (spotlightDoc as any).group,
          club: (spotlightDoc as any).club,
          date: (spotlightDoc as any).date,
          stadium: (spotlightDoc as any).stadium,
          image: (spotlightDoc as any).image,
          views: (spotlightDoc as any).views,
          likes: (spotlightDoc as any).likes,
        };
      }
    }

    return NextResponse.json({
      tifos: localizedTifos,
      spotlight: spotlightTifo,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching tifos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tifos' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Timeline from '@/models/Timeline';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region');
    const locale = searchParams.get('locale') || 'en';

    const query: Record<string, unknown> = {};

    if (region && region !== 'all') {
      query.region = region;
    }

    const events = await Timeline.find(query)
      .sort({ year: 1, order: 1 })
      .lean();

    // Transform events to include localized content
    const localizedEvents = events.map((event: any) => {
      const translation = event.translations?.find((t: any) => t.locale === locale)
        || event.translations?.find((t: any) => t.locale === 'en')
        || event.translations?.[0];

      return {
        _id: event._id,
        year: event.year,
        region: event.region,
        title: translation?.title || '',
        description: translation?.description || '',
        location: event.location,
        countryCode: event.countryCode,
        group: event.group,
        groupSlug: event.groupSlug,
        image: event.image,
        isHighlight: event.isHighlight,
      };
    });

    return NextResponse.json({ events: localizedEvents });
  } catch (error) {
    console.error('Error fetching timeline:', error);
    return NextResponse.json(
      { error: 'Failed to fetch timeline' },
      { status: 500 }
    );
  }
}

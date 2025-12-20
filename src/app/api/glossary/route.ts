import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import GlossaryTerm from '@/models/GlossaryTerm';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');

    const query: Record<string, unknown> = {};

    if (category && category !== 'all') {
      query.category = category;
    }

    const terms = await GlossaryTerm.find(query)
      .sort({ term: 1 })
      .limit(limit)
      .lean();

    // Transform terms to include localized content
    const localizedTerms = terms.map((term: any) => {
      const translation = term.translations?.find((t: any) => t.locale === locale)
        || term.translations?.find((t: any) => t.locale === 'en')
        || term.translations?.[0];

      return {
        _id: term._id,
        term: term.term,
        definition: translation?.definition || '',
        example: translation?.example || '',
        origin: term.origin,
        category: term.category,
        relatedTerms: term.relatedTerms,
      };
    });

    // Group by category for easy display
    const categories = ['general', 'tifo', 'chant', 'organization', 'matchday'];
    const grouped = categories.reduce((acc, cat) => {
      acc[cat] = localizedTerms.filter((t: any) => t.category === cat);
      return acc;
    }, {} as Record<string, any[]>);

    return NextResponse.json({
      terms: localizedTerms,
      grouped,
      total: localizedTerms.length,
    });
  } catch (error) {
    console.error('Error fetching glossary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch glossary' },
      { status: 500 }
    );
  }
}

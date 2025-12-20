import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import Article from '@/models/Article';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// GET single article by slug
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();

    const { slug } = await params;

    const article = await Article.findOne({ slug })
      .populate('author', 'name image bio')
      .lean();

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // Increment view count
    await Article.findByIdAndUpdate(article._id, { $inc: { views: 1 } });

    return NextResponse.json({ article });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}

// PUT update article (admin or article author)
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { slug } = await params;
    const body = await request.json();

    const existingArticle = await Article.findOne({ slug });

    if (!existingArticle) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // Check if user is admin or the article author
    if (
      session.user.role !== 'admin' &&
      existingArticle.author.toString() !== session.user.id
    ) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Contributors can only save as draft or pending
    if (session.user.role !== 'admin' && body.status === 'published') {
      body.status = 'pending';
    }

    const article = await Article.findOneAndUpdate(
      { slug },
      { ...body, updatedAt: new Date() },
      { new: true }
    ).populate('author', 'name image');

    return NextResponse.json({ article });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE article (admin only)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { slug } = await params;

    const article = await Article.findOneAndDelete({ slug });

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}

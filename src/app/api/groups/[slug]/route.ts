import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import UltraGroup from '@/models/UltraGroup';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// GET single group by slug
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();

    const { slug } = await params;

    const group = await UltraGroup.findOne({ slug }).lean();

    if (!group) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 });
    }

    // Increment view count
    await UltraGroup.findByIdAndUpdate(group._id, { $inc: { views: 1 } });

    return NextResponse.json({ group });
  } catch (error) {
    console.error('Error fetching group:', error);
    return NextResponse.json(
      { error: 'Failed to fetch group' },
      { status: 500 }
    );
  }
}

// PUT update group (admin only)
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { slug } = await params;
    const body = await request.json();

    const group = await UltraGroup.findOneAndUpdate(
      { slug },
      { ...body, updatedAt: new Date() },
      { new: true }
    );

    if (!group) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 });
    }

    return NextResponse.json({ group });
  } catch (error) {
    console.error('Error updating group:', error);
    return NextResponse.json(
      { error: 'Failed to update group' },
      { status: 500 }
    );
  }
}

// DELETE group (admin only)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { slug } = await params;

    const group = await UltraGroup.findOneAndDelete({ slug });

    if (!group) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Group deleted successfully' });
  } catch (error) {
    console.error('Error deleting group:', error);
    return NextResponse.json(
      { error: 'Failed to delete group' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import Comment from '@/models/Comment';
import { createCommentSchema, validateRequest } from '@/lib/validations';

// GET comments for a specific target (article or group)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const targetType = searchParams.get('targetType');
    const targetId = searchParams.get('targetId');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    if (!targetType || !targetId) {
      return NextResponse.json(
        { error: 'targetType and targetId are required' },
        { status: 400 }
      );
    }

    const query = {
      'target.type': targetType,
      'target.id': targetId,
      status: 'approved',
      parentComment: null, // Only get top-level comments
    };

    const skip = (page - 1) * limit;

    const [comments, total] = await Promise.all([
      Comment.find(query)
        .populate('author', 'name image')
        .populate({
          path: 'replies',
          match: { status: 'approved' },
          populate: { path: 'author', select: 'name image' },
        })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Comment.countDocuments(query),
    ]);

    return NextResponse.json({
      comments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST create new comment (authenticated users)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const body = await request.json();

    // Zod Validation
    const validation = validateRequest(createCommentSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { content, targetType, targetId, parentComment } = validation.data;

    const comment = new Comment({
      content,
      target: {
        type: targetType,
        id: targetId,
      },
      parentComment: parentComment || undefined,
      author: session.user.id,
      status: 'pending', // All comments go through moderation
    });

    await comment.save();

    const populatedComment = await Comment.findById(comment._id)
      .populate('author', 'name image')
      .lean();

    return NextResponse.json({ comment: populatedComment }, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}

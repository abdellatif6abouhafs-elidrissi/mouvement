'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Heart, Reply, MoreHorizontal, Flag, Trash2, User, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useComments, useCreateComment } from '@/hooks/useApi';

interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    image?: string;
  };
  createdAt: string;
  likes: number;
  isLiked?: boolean;
  replies?: Comment[];
}

interface CommentSectionProps {
  targetType: 'article' | 'group' | 'tifo';
  targetId: string;
  className?: string;
}

const mockComments: Comment[] = [
  {
    id: '1',
    content: 'Amazing article! GREEN BOYS 2005 truly revolutionized Ultra culture in Africa. I was there in 2008 when they did the massive tifo for the Derby. Unforgettable!',
    author: { name: 'Ahmed M.', image: '/images/gallery/gallery-1.webp' },
    createdAt: '2024-12-18T10:30:00Z',
    likes: 24,
    isLiked: false,
    replies: [
      {
        id: '1-1',
        content: 'I was there too! That tifo was absolutely spectacular. Still gives me chills thinking about it.',
        author: { name: 'Youssef K.' },
        createdAt: '2024-12-18T11:15:00Z',
        likes: 8,
      },
    ],
  },
  {
    id: '2',
    content: 'Great read! Would love to see more content about the early days of the movement. The founders\' vision was truly ahead of its time.',
    author: { name: 'Marco R.', image: '/images/gallery/gallery-2.webp' },
    createdAt: '2024-12-17T15:45:00Z',
    likes: 18,
    isLiked: true,
  },
  {
    id: '3',
    content: 'This is exactly the kind of content we need. Documenting Ultra history is so important for future generations.',
    author: { name: 'Carlos M.' },
    createdAt: '2024-12-16T09:20:00Z',
    likes: 12,
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

function CommentItem({
  comment,
  onReply,
  depth = 0,
}: {
  comment: Comment;
  onReply: (parentId: string) => void;
  depth?: number;
}) {
  const [isLiked, setIsLiked] = useState(comment.isLiked || false);
  const [likes, setLikes] = useState(comment.likes);
  const [showReplies, setShowReplies] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={depth > 0 ? 'ml-8 pl-4 border-l-2 border-zinc-800' : ''}
    >
      <div className="flex gap-3 py-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
            {comment.author.image ? (
              <img
                src={comment.author.image}
                alt={comment.author.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="h-5 w-5 text-zinc-600" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-white">{comment.author.name}</span>
            <span className="text-zinc-500 text-sm">{formatDate(comment.createdAt)}</span>
          </div>
          <p className="text-zinc-300 mb-3">{comment.content}</p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 text-sm transition-colors ${
                isLiked ? 'text-red-500' : 'text-zinc-500 hover:text-red-500'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              {likes}
            </button>
            <button
              onClick={() => onReply(comment.id)}
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-green-500 transition-colors"
            >
              <Reply className="h-4 w-4" />
              Reply
            </button>
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
              {showMenu && (
                <div className="absolute right-0 top-full mt-1 w-40 rounded-lg bg-zinc-800 border border-zinc-700 shadow-xl z-10">
                  <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700 transition-colors">
                    <Flag className="h-4 w-4" />
                    Report
                  </button>
                  <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-400 hover:bg-zinc-700 transition-colors">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="flex items-center gap-1 text-sm text-green-500 hover:text-green-400"
              >
                {showReplies ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
                {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </button>
              <AnimatePresence>
                {showReplies && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {comment.replies.map((reply) => (
                      <CommentItem key={reply.id} comment={reply} onReply={onReply} depth={depth + 1} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function CommentSection({ targetType, targetId, className = '' }: CommentSectionProps) {
  const { data: session } = useSession();
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');

  // Use mock data for demo
  const comments = mockComments;
  const isLoading = false;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    // In production, call createComment mutation
    console.log('Submitting comment:', {
      targetType,
      targetId,
      content: newComment,
      parentId: replyingTo,
    });

    setNewComment('');
    setReplyingTo(null);
  };

  const handleReply = (parentId: string) => {
    setReplyingTo(parentId);
    // Scroll to comment input
    document.getElementById('comment-input')?.focus();
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.likes - a.likes;
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className={className}>
      <Card className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-500" />
            <h3 className="text-lg font-bold text-white">Comments</h3>
            <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-sm">
              {comments.length}
            </span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm"
          >
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          {replyingTo && (
            <div className="flex items-center gap-2 mb-2 text-sm">
              <span className="text-zinc-400">Replying to comment</span>
              <button
                type="button"
                onClick={() => setReplyingTo(null)}
                className="text-green-500 hover:text-green-400"
              >
                Cancel
              </button>
            </div>
          )}
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0">
              {session?.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="h-5 w-5 text-zinc-600" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <textarea
                id="comment-input"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={session ? 'Write a comment...' : 'Sign in to comment'}
                disabled={!session}
                className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 resize-none focus:outline-none focus:border-green-500 disabled:opacity-50"
                rows={3}
              />
              <div className="flex justify-end mt-2">
                <Button
                  type="submit"
                  disabled={!session || !newComment.trim()}
                  leftIcon={<Send className="h-4 w-4" />}
                >
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        </form>

        {/* Comments List */}
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : sortedComments.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-zinc-700 mx-auto mb-3" />
            <h4 className="text-white font-medium mb-1">No comments yet</h4>
            <p className="text-zinc-400 text-sm">Be the first to share your thoughts!</p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800">
            {sortedComments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} onReply={handleReply} />
            ))}
          </div>
        )}

        {/* Load More */}
        {comments.length >= 5 && (
          <div className="mt-6 text-center">
            <Button variant="outline">Load More Comments</Button>
          </div>
        )}
      </Card>
    </div>
  );
}

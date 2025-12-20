'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  CheckCircle,
  XCircle,
  AlertTriangle,
  MessageSquare,
  User,
  Clock,
  ExternalLink,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card, { CardContent } from '@/components/ui/Card';

const comments = [
  {
    id: '1',
    content:
      'Amazing article! The history of Ultras Eagles is so inspiring. Keep up the great work!',
    author: 'Mohammed A.',
    targetTitle: 'The Art of Tifo: A Visual Revolution',
    targetType: 'article',
    status: 'pending',
    createdAt: '2024-01-15 14:30',
  },
  {
    id: '2',
    content:
      'This documentary brought back so many memories. The Yellow Wall is something special.',
    author: 'Hans M.',
    targetTitle: 'Documentary: Yellow Wall Story',
    targetType: 'article',
    status: 'approved',
    createdAt: '2024-01-15 12:15',
  },
  {
    id: '3',
    content:
      'Visit my website for cheap jerseys at...',
    author: 'spam_user',
    targetTitle: 'Ultras Eagles',
    targetType: 'group',
    status: 'spam',
    createdAt: '2024-01-15 10:00',
  },
  {
    id: '4',
    content:
      'Great interview! Would love to see more content about Italian curves.',
    author: 'Paolo B.',
    targetTitle: 'Interview: Leaders of Curva Nord',
    targetType: 'article',
    status: 'pending',
    createdAt: '2024-01-14 18:45',
  },
  {
    id: '5',
    content:
      'The rivalry between Raja and Wydad is unmatched. This article captures it perfectly.',
    author: 'Youssef E.',
    targetTitle: 'The Casablanca Derby',
    targetType: 'article',
    status: 'approved',
    createdAt: '2024-01-14 16:20',
  },
];

export default function CommentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('pending');

  const filteredComments = comments.filter((comment) => {
    const matchesSearch =
      comment.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comment.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === 'all' || comment.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-600/10 text-green-500 border-green-600/20';
      case 'pending':
        return 'bg-yellow-600/10 text-yellow-500 border-yellow-600/20';
      case 'rejected':
        return 'bg-red-600/10 text-red-500 border-red-600/20';
      case 'spam':
        return 'bg-orange-600/10 text-orange-500 border-orange-600/20';
      default:
        return 'bg-zinc-600/10 text-zinc-400 border-zinc-600/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'spam':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default:
        return null;
    }
  };

  const pendingCount = comments.filter((c) => c.status === 'pending').length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Comments</h1>
          <p className="text-zinc-400 mt-1">
            Review and moderate user comments
          </p>
        </div>
        {pendingCount > 0 && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-600/10 border border-yellow-600/20">
            <Clock className="h-4 w-4 text-yellow-500" />
            <span className="text-yellow-500 font-medium">
              {pendingCount} pending review
            </span>
          </div>
        )}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search comments..."
                leftIcon={<Search className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {['pending', 'approved', 'rejected', 'spam', 'all'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize whitespace-nowrap transition-colors ${
                    selectedStatus === status
                      ? 'bg-red-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {status}
                  {status === 'pending' && pendingCount > 0 && (
                    <span className="ml-2 px-1.5 py-0.5 rounded-full bg-yellow-600/20 text-yellow-500 text-xs">
                      {pendingCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {filteredComments.map((comment, index) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="hover:border-zinc-700 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Author */}
                  <div className="flex items-center gap-3 lg:w-48 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                      <User className="h-5 w-5 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{comment.author}</p>
                      <p className="text-xs text-zinc-500">{comment.createdAt}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-zinc-300 leading-relaxed">
                      {comment.content}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span className="text-zinc-500">On:</span>
                      <a
                        href="#"
                        className="text-red-500 hover:text-red-400 flex items-center gap-1"
                      >
                        {comment.targetTitle}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <span
                        className={`ml-2 px-2 py-0.5 rounded text-xs ${
                          comment.targetType === 'article'
                            ? 'bg-blue-600/10 text-blue-400'
                            : 'bg-purple-600/10 text-purple-400'
                        }`}
                      >
                        {comment.targetType}
                      </span>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex items-center gap-3 lg:flex-col lg:items-end">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border capitalize ${getStatusColor(
                        comment.status
                      )}`}
                    >
                      {getStatusIcon(comment.status)}
                      {comment.status}
                    </span>

                    {comment.status === 'pending' && (
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-green-500 hover:bg-green-600/10">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-600/10">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {filteredComments.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-400">No comments found</p>
          </div>
        )}
      </div>
    </div>
  );
}

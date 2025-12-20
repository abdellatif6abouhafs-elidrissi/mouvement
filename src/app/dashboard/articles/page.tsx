'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  BookOpen,
  User,
  Clock,
  Tag,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card, { CardContent } from '@/components/ui/Card';
const articles = [
  {
    id: '1',
    title: 'The Art of Tifo: A Visual Revolution',
    slug: 'art-of-tifo-visual-revolution',
    category: 'culture',
    author: 'Ahmed Benali',
    status: 'published',
    views: 12500,
    publishedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'South American Passion: Barra Bravas History',
    slug: 'south-american-passion-barra-bravas',
    category: 'history',
    author: 'Carlos Rodriguez',
    status: 'published',
    views: 8900,
    publishedAt: '2024-01-10',
  },
  {
    id: '3',
    title: 'Interview: Leaders of Curva Nord',
    slug: 'interview-curva-nord-leaders',
    category: 'interview',
    author: 'Marco Rossi',
    status: 'pending',
    views: 0,
    publishedAt: null,
  },
  {
    id: '4',
    title: 'The Casablanca Derby: Tale of Two Colors',
    slug: 'casablanca-derby-tale-two-colors',
    category: 'analysis',
    author: 'Youssef El Amrani',
    status: 'draft',
    views: 0,
    publishedAt: null,
  },
  {
    id: '5',
    title: 'Documentary: Yellow Wall Story',
    slug: 'documentary-yellow-wall-story',
    category: 'documentary',
    author: 'Hans Müller',
    status: 'published',
    views: 15600,
    publishedAt: '2024-01-01',
  },
];
export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === 'all' || article.status === selectedStatus;
    const matchesCategory =
      selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-600/10 text-green-500 border-green-600/20';
      case 'pending':
        return 'bg-yellow-600/10 text-yellow-500 border-yellow-600/20';
      case 'draft':
        return 'bg-zinc-600/10 text-zinc-400 border-zinc-600/20';
      default:
        return 'bg-zinc-600/10 text-zinc-400 border-zinc-600/20';
    }
  };
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      history: 'bg-blue-600/10 text-blue-400',
      culture: 'bg-purple-600/10 text-purple-400',
      tifo: 'bg-orange-600/10 text-orange-400',
      interview: 'bg-green-600/10 text-green-400',
      documentary: 'bg-emerald-600/10 text-emerald-400',
      analysis: 'bg-cyan-600/10 text-cyan-400',
    };
    return colors[category] || 'bg-zinc-600/10 text-zinc-400';
  };
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Articles</h1>
          <p className="text-zinc-400 mt-1">
            Manage all articles and content
          </p>
        </div>
        <Link href="/dashboard/articles/new">
          <Button leftIcon={<Plus className="h-4 w-4" />}>New Article</Button>
        </Link>
      </div>
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search articles..."
                leftIcon={<Search className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'published', 'pending', 'draft'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                    selectedStatus === status
                      ? 'bg-green-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Articles Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Article
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {filteredArticles.map((article, index) => (
                  <motion.tr
                    key={article.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-zinc-800/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-zinc-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium max-w-xs truncate">
                            {article.title}
                          </p>
                          {article.publishedAt && (
                            <p className="text-sm text-zinc-500 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.publishedAt}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${getCategoryColor(
                          article.category
                        )}`}
                      >
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border capitalize ${getStatusColor(
                          article.status
                        )}`}
                      >
                        {article.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">
                      {article.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/articles/${article.slug}`}>
                          <button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                        </Link>
                        <Link href={`/dashboard/articles/${article.id}/edit`}>
                          <button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                        </Link>
                        <button className="p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-600/10 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-400">No articles found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

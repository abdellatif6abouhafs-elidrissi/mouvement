'use client';

import { useState, useCallback, useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AdminTable, { Column } from '@/components/admin/ui/AdminTable';
import Button from '@/components/ui/Button';
import { Search, Plus, MoreHorizontal, Eye, MessageSquare, Calendar, Tag, FileText } from 'lucide-react';

interface Article {
    _id: string;
    title: string;
    slug: string;
    coverImage: string;
    category: string;
    status: 'draft' | 'pending' | 'published' | 'archived';
    views: number;
    likes: number;
    author: {
        _id: string;
        name: string;
    };
    createdAt: string;
}

interface ArticlesClientProps {
    initialArticles: Article[];
    total: number;
    totalPages: number;
    currentPage: number;
}

export default function ArticlesClient({
    initialArticles,
    totalPages,
    currentPage,
}: ArticlesClientProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            if (name === 'search') params.set('page', '1');
            return params.toString();
        },
        [searchParams]
    );

    const handleSearch = (term: string) => {
        startTransition(() => {
            router.push(`${pathname}?${createQueryString('search', term)}`);
        });
    };

    const handlePageChange = (page: number) => {
        startTransition(() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', page.toString());
            router.push(`${pathname}?${params.toString()}`);
        });
    };

    const columns: Column<Article>[] = [
        {
            header: 'Article',
            accessorKey: 'title',
            cell: (article) => (
                <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
                        {article.coverImage ? (
                            <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
                        ) : (
                            <FileText className="w-4 h-4 text-zinc-600" />
                        )}
                    </div>
                    <div className="max-w-[300px]">
                        <div className="font-medium text-white truncate" title={article.title}>{article.title}</div>
                        <div className="text-xs text-zinc-500">By {article.author?.name || 'Unknown'}</div>
                    </div>
                </div>
            ),
        },
        {
            header: 'Category',
            accessorKey: 'category',
            cell: (article) => (
                <span className="inline-flex items-center gap-1 text-xs text-zinc-400 capitalize">
                    <Tag className="w-3 h-3" />
                    {article.category}
                </span>
            ),
        },
        {
            header: 'Stats',
            cell: (article) => (
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-zinc-500" />
                        {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-zinc-500" />
                        {article.likes}
                    </span>
                </div>
            ),
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: (article) => {
                const statusColors = {
                    published: 'bg-green-500/10 text-green-500 border-green-500/20',
                    draft: 'bg-zinc-800 text-zinc-400 border-zinc-700',
                    pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
                    archived: 'bg-red-500/10 text-red-500 border-red-500/20',
                };
                return (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border uppercase ${statusColors[article.status]}`}>
                        {article.status}
                    </span>
                );
            },
        },
        {
            header: 'Date',
            accessorKey: 'createdAt',
            cell: (article) => (
                <span className="text-zinc-500 text-xs">
                    {new Date(article.createdAt).toLocaleDateString()}
                </span>
            ),
        },
        {
            header: 'Actions',
            className: 'text-right',
            cell: () => (
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Articles</h1>
                <Button leftIcon={<Plus className="w-4 h-4" />}>
                    Create Article
                </Button>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                        defaultValue={searchParams.get('search') || ''}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch((e.currentTarget as HTMLInputElement).value);
                            }
                        }}
                    />
                </div>
            </div>

            <AdminTable
                columns={columns}
                data={initialArticles}
                isLoading={isPending}
                page={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

'use client';

import { useState, useCallback, useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AdminTable, { Column } from '@/components/admin/ui/AdminTable';
import Button from '@/components/ui/Button';
import { Search, Plus, MoreHorizontal, Music } from 'lucide-react';

interface Chant {
    _id: string;
    translations: { title: string }[];
    group: string;
    club: string;
}

interface ChantsClientProps {
    initialChants: Chant[];
    totalPages: number;
    currentPage: number;
}

export default function ChantsClient({ initialChants, totalPages, currentPage }: ChantsClientProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const handlePageChange = (page: number) => {
        startTransition(() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', page.toString());
            router.push(`${pathname}?${params.toString()}`);
        });
    };

    const columns: Column<Chant>[] = [
        {
            header: 'Chant',
            cell: (chant) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700">
                        <Music className="w-5 h-5 text-zinc-500" />
                    </div>
                    <div>
                        <div className="font-medium text-white">{chant.translations[0]?.title || 'Untitled'}</div>
                        <div className="text-xs text-zinc-500">{chant.group} - {chant.club}</div>
                    </div>
                </div>
            )
        },
        {
            header: 'Actions',
            className: 'text-right',
            cell: () => (
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
            )
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Chants</h1>
                <Button leftIcon={<Plus className="w-4 h-4" />}>Add Chant</Button>
            </div>
            <AdminTable columns={columns} data={initialChants} isLoading={isPending} page={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

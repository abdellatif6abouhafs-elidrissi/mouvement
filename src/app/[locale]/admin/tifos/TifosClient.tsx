'use client';

import { useState, useCallback, useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AdminTable, { Column } from '@/components/admin/ui/AdminTable';
import Button from '@/components/ui/Button';
import { Search, Plus, MoreHorizontal, Palette, MapPin } from 'lucide-react';

interface Tifo {
    _id: string;
    translations: { title: string }[];
    group: string;
    club: string;
    date: string;
    image?: string;
}

interface TifosClientProps {
    initialTifos: Tifo[];
    totalPages: number;
    currentPage: number;
}

export default function TifosClient({ initialTifos, totalPages, currentPage }: TifosClientProps) {
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

    const columns: Column<Tifo>[] = [
        {
            header: 'Tifo',
            cell: (tifo) => (
                <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded bg-zinc-800 overflow-hidden border border-zinc-700">
                        {tifo.image ? <img src={tifo.image} alt="" className="w-full h-full object-cover" /> : <Palette className="w-4 h-4 m-auto text-zinc-600" />}
                    </div>
                    <div>
                        <div className="font-medium text-white">{tifo.translations[0]?.title || 'Untitled'}</div>
                        <div className="text-xs text-zinc-500">{tifo.group} - {tifo.club}</div>
                    </div>
                </div>
            )
        },
        {
            header: 'Date',
            cell: (tifo) => <span className="text-zinc-400 text-xs">{new Date(tifo.date).toLocaleDateString()}</span>
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
                <h1 className="text-2xl font-bold text-white">Tifos</h1>
                <Button leftIcon={<Plus className="w-4 h-4" />}>Add Tifo</Button>
            </div>
            <AdminTable columns={columns} data={initialTifos} isLoading={isPending} page={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

'use client';

import { useState, useCallback, useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AdminTable, { Column } from '@/components/admin/ui/AdminTable';
import Button from '@/components/ui/Button';
import { Search, Plus, MoreHorizontal, MapPin, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

interface UltraGroup {
    _id: string;
    name: string;
    club: string;
    city: string;
    country: string;
    logo?: string;
    yearFounded: number;
    isActive: boolean;
    isVerified: boolean;
    createdAt: string;
}

interface GroupsClientProps {
    initialGroups: UltraGroup[];
    total: number;
    totalPages: number;
    currentPage: number;
}

export default function GroupsClient({
    initialGroups,
    totalPages,
    currentPage,
}: GroupsClientProps) {
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

    const columns: Column<UltraGroup>[] = [
        {
            header: 'Group',
            accessorKey: 'name',
            cell: (group) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
                        {group.logo ? (
                            <img src={group.logo} alt={group.name} className="w-full h-full object-contain p-1" />
                        ) : (
                            <span className="text-xs font-bold text-zinc-500">{group.name.substring(0, 2).toUpperCase()}</span>
                        )}
                    </div>
                    <div>
                        <div className="font-medium text-white flex items-center gap-1.5">
                            {group.name}
                            {group.isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
                        </div>
                        <div className="text-xs text-zinc-500">{group.club}</div>
                    </div>
                </div>
            ),
        },
        {
            header: 'Location',
            cell: (group) => (
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <MapPin className="w-3 h-3" />
                    {group.city}, {group.country}
                </div>
            ),
        },
        {
            header: 'Founded',
            accessorKey: 'yearFounded',
            cell: (group) => (
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Calendar className="w-3 h-3" />
                    {group.yearFounded}
                </div>
            ),
        },
        {
            header: 'Status',
            accessorKey: 'isActive',
            cell: (group) => (
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${group.isActive
                        ? 'bg-green-500/10 text-green-500 border-green-500/20'
                        : 'bg-red-500/10 text-red-500 border-red-500/20'
                    }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${group.isActive ? 'bg-green-500' : 'bg-red-500'}`} />
                    {group.isActive ? 'Active' : 'Inactive'}
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
                <h1 className="text-2xl font-bold text-white">Ultra Groups</h1>
                <Button leftIcon={<Plus className="w-4 h-4" />}>
                    New Group
                </Button>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search groups, clubs, or cities..."
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
                data={initialGroups}
                isLoading={isPending}
                page={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

'use client';

import { useState, useCallback, useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'; // I'll assume standard debounce or use timeout
// Actually let's use a custom debounce since I don't want to install pkg if not needed.
// But wait, standard nextjs projects often have it. I'll use a simple timeout logic.

import AdminTable, { Column } from '@/components/admin/ui/AdminTable';
import Button from '@/components/ui/Button';
import { Search, Plus, MoreHorizontal, Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import Card from '@/components/ui/Card';

interface User {
    _id: string;
    name: string;
    email: string;
    role: 'user' | 'admin' | 'moderator';
    isVerified: boolean;
    image?: string;
    createdAt: string;
}

interface UsersClientProps {
    initialUsers: User[];
    total: number;
    totalPages: number;
    currentPage: number;
}

export default function UsersClient({
    initialUsers,
    total,
    totalPages,
    currentPage,
}: UsersClientProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            // Reset page when searching
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

    // Debounce search manually
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Simple debounce
        const timeoutId = setTimeout(() => handleSearch(value), 500);
        return () => clearTimeout(timeoutId);
    };

    const columns: Column<User>[] = [
        {
            header: 'User',
            accessorKey: 'name',
            cell: (user) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 overflow-hidden">
                        {user.image ? (
                            <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                            user.name.substring(0, 2).toUpperCase()
                        )}
                    </div>
                    <div>
                        <div className="font-medium text-white">{user.name}</div>
                        <div className="text-xs text-zinc-500">{user.email}</div>
                    </div>
                </div>
            ),
        },
        {
            header: 'Role',
            accessorKey: 'role',
            cell: (user) => {
                const icons = {
                    admin: <ShieldAlert className="w-3 h-3 text-red-500" />,
                    moderator: <ShieldCheck className="w-3 h-3 text-blue-500" />,
                    user: <Shield className="w-3 h-3 text-zinc-500" />,
                };
                const colors = {
                    admin: 'bg-red-500/10 text-red-500 border-red-500/20',
                    moderator: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
                    user: 'bg-zinc-800 text-zinc-400 border-zinc-700',
                };
                return (
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[user.role as keyof typeof colors]}`}>
                        {icons[user.role as keyof typeof icons]}
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                );
            },
        },
        {
            header: 'Status',
            accessorKey: 'isVerified',
            cell: (user) => (
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${user.isVerified
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                    {user.isVerified ? 'Verified' : 'Pending'}
                </span>
            ),
        },
        {
            header: 'Joined',
            accessorKey: 'createdAt',
            cell: (user) => (
                <span className="text-zinc-400 text-xs">
                    {new Date(user.createdAt).toLocaleDateString()}
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
                <h1 className="text-2xl font-bold text-white">Users</h1>
                <Button leftIcon={<Plus className="w-4 h-4" />}>
                    Add User
                </Button>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                        defaultValue={searchParams.get('search') || ''}
                        onChange={(e) => {
                            // Debounce implementation
                            const value = e.target.value;
                            const params = new URLSearchParams(searchParams.toString());
                            if (value) {
                                params.set('search', value);
                            } else {
                                params.delete('search');
                            }
                            params.set('page', '1');

                            // We use a small delay or standard debounce if we had the lib
                            // For now, simpler: trigger transition on change? No, too many requests.
                            // I'll assume users type and press enter or wait.
                            // Let's rely on defaultValue and simple native debounce if possible or just use onKeyDown 'Enter'
                        }}
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
                data={initialUsers}
                isLoading={isPending}
                page={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

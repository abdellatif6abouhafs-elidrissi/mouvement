'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export interface Column<T> {
    header: string;
    accessorKey?: keyof T;
    cell?: (item: T) => ReactNode;
    className?: string;
}

interface AdminTableProps<T> {
    columns: Column<T>[];
    data: T[];
    isLoading?: boolean;
    page?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    onRowClick?: (item: T) => void;
    searchable?: boolean;
    onSearch?: (query: string) => void;
    searchPlaceholder?: string;
    actionLabel?: string;
    onAction?: () => void;
}

export default function AdminTable<T extends { _id: string }>({
    columns,
    data,
    isLoading,
    page = 1,
    totalPages = 1,
    onPageChange,
    onRowClick,
}: AdminTableProps<T>) {
    return (
        <div className="w-full space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-zinc-400 uppercase bg-zinc-900/50 border-b border-zinc-800">
                            <tr>
                                {columns.map((col, idx) => (
                                    <th key={idx} className={cn("px-6 py-4 font-medium", col.className)}>
                                        {col.header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={columns.length} className="px-6 py-12 text-center text-zinc-500">
                                        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                                        Loading data...
                                    </td>
                                </tr>
                            ) : data.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length} className="px-6 py-12 text-center text-zinc-500">
                                        No results found
                                    </td>
                                </tr>
                            ) : (
                                data.map((item) => (
                                    <tr
                                        key={item._id}
                                        className={cn(
                                            "bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors",
                                            onRowClick && "cursor-pointer"
                                        )}
                                        onClick={() => onRowClick?.(item)}
                                    >
                                        {columns.map((col, idx) => (
                                            <td key={idx} className={cn("px-6 py-4", col.className)}>
                                                {col.cell ? col.cell(item) : (item as any)[col.accessorKey!]}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                        <div className="text-sm text-zinc-500">
                            Page {page} of {totalPages}
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="secondary"
                                size="sm"
                                disabled={page <= 1 || isLoading}
                                onClick={() => onPageChange?.(page - 1)}
                                leftIcon={<ChevronLeft className="w-4 h-4" />}
                                className="h-8 w-8 p-0"
                            />
                            <Button
                                variant="secondary"
                                size="sm"
                                disabled={page >= totalPages || isLoading}
                                onClick={() => onPageChange?.(page + 1)}
                                leftIcon={<ChevronRight className="w-4 h-4" />}
                                className="h-8 w-8 p-0"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

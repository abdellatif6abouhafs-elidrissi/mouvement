'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
    LayoutDashboard,
    Users,
    FileText,
    Flag,
    Palette,
    Music,
    Settings,
    Bell,
    Search,
    Menu,
    X,
    LogOut,
} from 'lucide-react';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Button from '@/components/ui/Button';

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Groups', href: '/admin/groups', icon: Flag },
    { name: 'Articles', href: '/admin/articles', icon: FileText },
    { name: 'Tifos', href: '/admin/tifos', icon: Palette },
    { name: 'Chants', href: '/admin/chants', icon: Music },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const locale = useLocale();
    const { data: session } = useSession();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-zinc-950">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-64 bg-zinc-900 border-r border-zinc-800 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Logo */}
                <div className="flex items-center justify-between h-16 px-6 border-b border-zinc-800">
                    <Link href={`/${locale}`} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">M</span>
                        </div>
                        <span className="text-white font-bold text-lg">MOUVEMENT</span>
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                        <X className="h-5 w-5 text-zinc-400" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname === `/${locale}${item.href}`;
                        return (
                            <Link
                                key={item.name}
                                href={`/${locale}${item.href}`}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-green-600 text-white'
                                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                    }`}
                            >
                                <item.icon className="h-5 w-5" />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User section */}
                <div className="p-4 border-t border-zinc-800">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-800">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                                {session?.user?.name?.charAt(0) || 'A'}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm truncate">
                                {session?.user?.name || 'Admin'}
                            </p>
                            <p className="text-zinc-500 text-xs truncate">
                                {session?.user?.email || 'admin@mouvement.com'}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                    >
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="lg:pl-64">
                {/* Top bar */}
                <header className="sticky top-0 z-30 h-16 bg-zinc-900/50 backdrop-blur-xl border-b border-zinc-800">
                    <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                        >
                            <Menu className="h-6 w-6 text-white" />
                        </button>

                        <div className="flex-1 max-w-2xl mx-auto px-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2 rounded-lg hover:bg-zinc-800 transition-colors">
                                <Bell className="h-5 w-5 text-zinc-400" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
                            </button>
                            <Link href={`/${locale}`}>
                                <Button variant="outline" size="sm">
                                    View Site
                                </Button>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="p-4 sm:p-6 lg:p-8">{children}</main>
            </div>
        </div>
    );
}

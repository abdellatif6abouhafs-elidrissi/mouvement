'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
        </div>
    );
}

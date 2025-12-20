import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Mouvement - Ultra Culture Platform',
    template: '%s | Mouvement',
  },
  description:
    'A cultural platform dedicated to documenting and celebrating Ultra culture as an artistic, social, and historical phenomenon.',
  keywords: [
    'ultras',
    'football',
    'culture',
    'tifo',
    'supporters',
    'movement',
    'football fans',
  ],
  authors: [{ name: 'Mouvement Team' }],
  creator: 'Mouvement',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mouvement.com',
    siteName: 'Mouvement',
    title: 'Mouvement - Ultra Culture Platform',
    description:
      'A cultural platform dedicated to documenting and celebrating Ultra culture.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mouvement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouvement - Ultra Culture Platform',
    description:
      'A cultural platform dedicated to documenting and celebrating Ultra culture.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

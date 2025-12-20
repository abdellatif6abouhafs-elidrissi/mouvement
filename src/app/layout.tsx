import type { Metadata } from 'next';
import './globals.css';

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
  return children;
}

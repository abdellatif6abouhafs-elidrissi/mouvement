import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales, isRTL, type Locale } from '@/i18n/config';
import Providers from '@/components/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata, Viewport } from 'next';
import '../globals.css';
import '../../styles/rtl.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
});

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://mouvement-liart.vercel.app';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Mouvement - Ultra Culture Platform',
    template: '%s | Mouvement',
  },
  description:
    'A cultural platform dedicated to documenting and celebrating Ultra culture as an artistic, social, and historical phenomenon. Explore tifos, chants, and the passion of football supporters worldwide.',
  keywords: [
    'ultras',
    'football',
    'culture',
    'tifo',
    'supporters',
    'movement',
    'football fans',
    'curva',
    'choreo',
    'stadium atmosphere',
    'fan culture',
    'green boys',
    'raja casablanca',
  ],
  authors: [{ name: 'Mouvement Team' }],
  creator: 'Mouvement',
  publisher: 'Mouvement',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'ar_SA', 'es_ES', 'it_IT', 'pt_BR'],
    url: BASE_URL,
    siteName: 'Mouvement',
    title: 'Mouvement - Ultra Culture Platform',
    description: 'Documenting and celebrating Ultra culture as an artistic, social, and historical phenomenon.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mouvement - Ultra Culture Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouvement - Ultra Culture Platform',
    description: 'Documenting and celebrating Ultra culture worldwide.',
    images: ['/images/og-image.jpg'],
    creator: '@mouvement',
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  category: 'sports',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const rtl = isRTL(locale as Locale);

  return (
    <html
      lang={locale}
      dir={rtl ? 'rtl' : 'ltr'}
      className="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = JSON.parse(localStorage.getItem('mouvement-theme') || '{}');
                  var resolved = theme.state?.resolvedTheme || 'dark';
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(resolved);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoArabic.variable} ${rtl ? 'font-noto-arabic' : 'font-inter'} antialiased transition-colors duration-300`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
              <Header />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales, isRTL, type Locale } from '@/i18n/config';
import Providers from '@/components/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
});

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

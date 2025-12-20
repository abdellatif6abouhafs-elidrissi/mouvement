import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: [
    '/',
    '/(ar|en|fr|it|es|pt-br)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};

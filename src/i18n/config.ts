export const locales = ['ar', 'en', 'fr', 'it', 'es', 'pt-br'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
  es: 'Español',
  'pt-br': 'Português (Brasil)',
};

export const localeFlags: Record<Locale, string> = {
  ar: '🇲🇦',
  en: '🇬🇧',
  fr: '🇫🇷',
  it: '🇮🇹',
  es: '🇪🇸',
  'pt-br': '🇧🇷',
};

export const rtlLocales: Locale[] = ['ar'];

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

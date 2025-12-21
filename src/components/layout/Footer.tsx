'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  MapPin,
  Heart
} from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'Facebook', href: '#', icon: Facebook },
];

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const footerLinks = {
    explore: [
      { name: tNav('ultras'), href: `/${locale}/ultras` },
      { name: tNav('articles'), href: `/${locale}/articles` },
      { name: tNav('timeline'), href: `/${locale}/timeline` },
      { name: tNav('tifos'), href: `/${locale}/tifos` },
      { name: tNav('chants'), href: `/${locale}/chants` },
    ],
    about: [
      { name: tNav('about'), href: `/${locale}/about` },
      { name: tNav('education'), href: `/${locale}/education` },
      { name: tNav('community'), href: `/${locale}/community` },
      { name: tNav('contact'), href: `/${locale}/contact` },
    ],
    legal: [
      { name: t('terms'), href: `/${locale}/terms` },
      { name: t('privacy'), href: `/${locale}/privacy` },
      { name: t('cookies'), href: `/${locale}/cookies` },
    ],
  };

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2" aria-label="Mouvement - Home">
              <Image
                src="/logo.jpg"
                alt="Mouvement Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-zinc-900 dark:text-white">Mouvement</span>
            </Link>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {t('description')}
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-green-500 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              {t('explore')}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              {t('about')}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              {tNav('contact')}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:contact@mouvement.com"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  contact@mouvement.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
                  <MapPin className="h-4 w-4" />
                  {t('worldwide')}
                </span>
              </li>
            </ul>
            {/* Legal Links */}
            <h4 className="mt-6 text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              {t('legal')}
            </h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Mouvement. {t('rights')}
          </p>
          <p className="flex items-center gap-1 text-zinc-500 text-sm">
            {t('madeWith')} <Heart className="h-4 w-4 text-green-500 fill-green-500" /> {t('forUltraCulture')}
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  User,
  LogOut,
  Settings,
  LayoutDashboard,
  Globe,
  BookOpen,
  Info,
  Mail,
  Clock,
  Palette,
  Music,
  GraduationCap,
  Users,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import SearchModal from '@/components/search/SearchModal';
import { cn } from '@/lib/utils';
import { isRTL, type Locale } from '@/i18n/config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const rtl = isRTL(locale as Locale);

  const navigation = [
    { name: t('home'), href: `/${locale}`, icon: null },
    { name: t('ultras'), href: `/${locale}/ultras`, icon: Globe },
    { name: t('articles'), href: `/${locale}/articles`, icon: BookOpen },
    { name: t('timeline'), href: `/${locale}/timeline`, icon: Clock },
    { name: t('tifos'), href: `/${locale}/tifos`, icon: Palette },
    { name: t('chants'), href: `/${locale}/chants`, icon: Music },
    { name: t('education'), href: `/${locale}/education`, icon: GraduationCap },
    { name: t('community'), href: `/${locale}/community`, icon: Users },
    { name: t('about'), href: `/${locale}/about`, icon: Info },
    { name: t('contact'), href: `/${locale}/contact`, icon: Mail },
  ];

  // Main nav items (subset for desktop)
  const mainNav = navigation.slice(0, 5);

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2"
            aria-label="Mouvement - Go to homepage"
          >
            <Image
              src="/logo.svg"
              alt="Mouvement Logo - Ultra Culture Platform"
              width={40}
              height={40}
              priority
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-zinc-900 dark:text-white hidden sm:block">
              Mouvement
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  isActive(item.href)
                    ? 'text-green-600 dark:text-green-500'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-48 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
                  {navigation.slice(5).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 text-sm transition-colors',
                        isActive(item.href)
                          ? 'bg-green-600/10 text-green-600 dark:text-green-500'
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      )}
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className={cn("flex items-center gap-3", rtl && "flex-row-reverse")}>
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label={tCommon('search')}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Auth */}
            {status === 'loading' ? (
              <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
            ) : session ? (
              <div className="relative group">
                <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                  {session.user.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name || ''}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {session.user.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <p className="font-medium text-zinc-900 dark:text-white">{session.user.name}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{session.user.email}</p>
                  </div>
                  <div className="p-2">
                    {session.user.role === 'admin' && (
                      <Link
                        href={`/${locale}/dashboard`}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        {t('dashboard')}
                      </Link>
                    )}
                    <Link
                      href={`/${locale}/profile`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <User className="h-4 w-4" />
                      {t('profile')}
                    </Link>
                    <Link
                      href={`/${locale}/settings`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      {t('settings')}
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 dark:text-red-400 hover:bg-red-600/10 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      {t('signOut')}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href={`/${locale}/login`}>
                  <Button variant="ghost" size="sm">
                    {t('signIn')}
                  </Button>
                </Link>
                <Link href={`/${locale}/register`} className="hidden sm:block">
                  <Button size="sm">{t('join')}</Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-zinc-200 dark:border-zinc-800"
            >
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                      isActive(item.href)
                        ? 'bg-green-600/10 text-green-600 dark:text-green-500'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    )}
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

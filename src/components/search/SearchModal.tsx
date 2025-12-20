'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  Users,
  FileText,
  Palette,
  Music,
  Clock,
  ArrowRight,
  Loader2
} from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'group' | 'article' | 'tifo' | 'chant';
  title: string;
  subtitle: string;
  slug: string;
  image?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('common');

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recentSearches');
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    }
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Debounced search
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&locale=${locale}`);
      const data = await response.json();

      if (data.success) {
        setResults(data.results);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [locale]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, performSearch]);

  const handleResultClick = (result: SearchResult) => {
    // Save to recent searches
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    // Navigate based on type
    const paths: Record<string, string> = {
      group: `/ultras/${result.slug}`,
      article: `/articles/${result.slug}`,
      tifo: `/tifos/${result.slug}`,
      chant: `/chants/${result.slug}`
    };

    router.push(`/${locale}${paths[result.type]}`);
    onClose();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'group':
        return <Users className="h-5 w-5" />;
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'tifo':
        return <Palette className="h-5 w-5" />;
      case 'chant':
        return <Music className="h-5 w-5" />;
      default:
        return <Search className="h-5 w-5" />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      group: 'Ultra Group',
      article: 'Article',
      tifo: 'Tifo',
      chant: 'Chant'
    };
    return labels[type] || type;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center gap-4 p-4 border-b border-zinc-800">
            <Search className="h-5 w-5 text-zinc-500" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="flex-1 bg-transparent text-white text-lg placeholder:text-zinc-500 focus:outline-none"
            />
            {isLoading ? (
              <Loader2 className="h-5 w-5 text-zinc-500 animate-spin" />
            ) : query ? (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <X className="h-4 w-4 text-zinc-500" />
              </button>
            ) : null}
            <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-500">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {/* Recent Searches */}
            {!query && recentSearches.length > 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Recent Searches</span>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(search)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition-colors text-left"
                    >
                      <Search className="h-4 w-4 text-zinc-500" />
                      <span className="text-zinc-300">{search}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {query && results.length > 0 && (
              <div className="p-4 space-y-1">
                {results.map((result) => (
                  <button
                    key={`${result.type}-${result.id}`}
                    onClick={() => handleResultClick(result)}
                    className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-800 transition-colors text-left group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-green-500">
                      {getIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate group-hover:text-green-500 transition-colors">
                        {result.title}
                      </p>
                      <p className="text-sm text-zinc-500 truncate">
                        {result.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
                        {getTypeLabel(result.type)}
                      </span>
                      <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-green-500 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* No Results */}
            {query && !isLoading && results.length === 0 && (
              <div className="p-8 text-center">
                <Search className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
                <p className="text-zinc-400">{t('noResults')}</p>
                <p className="text-sm text-zinc-600 mt-1">
                  Try searching for a group name, club, or country
                </p>
              </div>
            )}

            {/* Quick Links */}
            {!query && recentSearches.length === 0 && (
              <div className="p-4">
                <p className="text-xs text-zinc-500 mb-3">Quick Links</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Ultra Groups', href: `/${locale}/ultras`, icon: Users },
                    { label: 'Articles', href: `/${locale}/articles`, icon: FileText },
                    { label: 'Tifos Gallery', href: `/${locale}/tifos`, icon: Palette },
                    { label: 'Chants', href: `/${locale}/chants`, icon: Music },
                  ].map((link) => (
                    <button
                      key={link.href}
                      onClick={() => {
                        router.push(link.href);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition-colors"
                    >
                      <link.icon className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-300">{link.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

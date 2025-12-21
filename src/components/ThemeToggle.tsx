'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useThemeStore } from '@/lib/theme';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export default function ThemeToggle({ showLabel = false, className = '' }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Only render after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-zinc-800 ${className}`} />
    );
  }

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ] as const;

  const CurrentIcon = resolvedTheme === 'dark' ? Moon : Sun;

  return (
    <div className={`relative ${className}`}>
      {/* Simple Toggle Button */}
      <button
        onClick={toggleTheme}
        className="relative p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors group"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={resolvedTheme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CurrentIcon className="h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors" />
          </motion.div>
        </AnimatePresence>
      </button>

      {showLabel && (
        <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
          {resolvedTheme === 'dark' ? 'Dark' : 'Light'} Mode
        </span>
      )}
    </div>
  );
}

// Full Theme Selector with dropdown
export function ThemeSelector({ className = '' }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`w-32 h-10 rounded-xl bg-zinc-800 ${className}`} />;
  }

  const themes = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'system' as const, label: 'System', icon: Monitor },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[1];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors"
      >
        <CurrentIcon className="h-4 w-4 text-zinc-400" />
        <span className="text-sm text-zinc-300">{currentTheme.label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 w-36 rounded-xl bg-zinc-800 border border-zinc-700 shadow-xl z-50 overflow-hidden"
            >
              {themes.map((themeOption) => (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 hover:bg-zinc-700 transition-colors ${
                    theme === themeOption.value ? 'text-green-500' : 'text-zinc-300'
                  }`}
                >
                  <themeOption.icon className="h-4 w-4" />
                  <span className="text-sm">{themeOption.label}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

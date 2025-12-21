'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useThemeStore } from '@/lib/theme';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
            retry: false, // Don't retry failed queries in dev
          },
        },
      })
  );

  const { resolvedTheme } = useThemeStore();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  // Suppress next-auth fetch errors in development (Turbopack issue)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const originalError = console.error;
      console.error = (...args) => {
        if (args[0]?.includes?.('[next-auth]') || args[0]?.includes?.('CLIENT_FETCH_ERROR')) {
          return; // Suppress next-auth errors in dev
        }
        originalError.apply(console, args);
      };
      return () => {
        console.error = originalError;
      };
    }
  }, []);

  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </SessionProvider>
  );
}

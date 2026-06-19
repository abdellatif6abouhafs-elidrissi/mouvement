import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

export interface Chant {
  _id: string;
  title: string;
  lyrics: string;
  origin: string;
  locale: string;
  group: string;
  groupSlug: string;
  club: string;
  country: string;
  countryCode: string;
  duration?: string;
  audio?: string;
  video?: string;
  views: number;
  likes: number;
  isFeatured: boolean;
  yearCreated?: number;
}

interface UseChangtsReturn {
  chants: Chant[];
  isLoading: boolean;
  error: string | null;
}

export function useChants(groupSlug: string): UseChangtsReturn {
  const locale = useLocale();
  const [chants, setChants] = useState<Chant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChants = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `/api/chants?group=${groupSlug}&locale=${locale}&limit=50`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch chants');
        }

        const data = await response.json();
        setChants(data.chants || []);
      } catch (err) {
        console.error('Error fetching chants:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    if (groupSlug) {
      fetchChants();
    }
  }, [groupSlug, locale]);

  return { chants, isLoading, error };
}

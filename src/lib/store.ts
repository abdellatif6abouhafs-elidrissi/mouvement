import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: string;
}

interface AppState {
  // Theme
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  toggleTheme: () => void;

  // Sidebar (for dashboard)
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchFilters: {
    country?: string;
    category?: string;
  };
  setSearchFilters: (filters: { country?: string; category?: string }) => void;

  // Favorites (local storage)
  favoriteGroups: string[];
  addFavorite: (groupId: string) => void;
  removeFavorite: (groupId: string) => void;
  isFavorite: (groupId: string) => boolean;

  // Recent views
  recentlyViewed: string[];
  addRecentlyViewed: (groupId: string) => void;
  clearRecentlyViewed: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),

      // Sidebar
      sidebarOpen: true,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      // Search
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      searchFilters: {},
      setSearchFilters: (filters) => set({ searchFilters: filters }),

      // Favorites
      favoriteGroups: [],
      addFavorite: (groupId) =>
        set((state) => ({
          favoriteGroups: [...state.favoriteGroups, groupId],
        })),
      removeFavorite: (groupId) =>
        set((state) => ({
          favoriteGroups: state.favoriteGroups.filter((id) => id !== groupId),
        })),
      isFavorite: (groupId) => get().favoriteGroups.includes(groupId),

      // Recently viewed
      recentlyViewed: [],
      addRecentlyViewed: (groupId) =>
        set((state) => {
          const filtered = state.recentlyViewed.filter((id) => id !== groupId);
          return { recentlyViewed: [groupId, ...filtered].slice(0, 10) };
        }),
      clearRecentlyViewed: () => set({ recentlyViewed: [] }),
    }),
    {
      name: 'mouvement-storage',
      partialize: (state) => ({
        theme: state.theme,
        favoriteGroups: state.favoriteGroups,
        recentlyViewed: state.recentlyViewed,
      }),
    }
  )
);

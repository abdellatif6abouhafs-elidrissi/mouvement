import { IUltraGroup } from '@/models/UltraGroup';
import { IArticle } from '@/models/Article';

const API_BASE = '/api';

// Types
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface ApiError {
  error: string;
  status: number;
}

// Helper function for API calls
async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'An error occurred');
  }

  return response.json();
}

// Groups API
export const groupsApi = {
  getAll: async (params?: {
    page?: number;
    limit?: number;
    country?: string;
    search?: string;
    featured?: boolean;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.country) searchParams.set('country', params.country);
    if (params?.search) searchParams.set('search', params.search);
    if (params?.featured) searchParams.set('featured', 'true');

    const query = searchParams.toString();
    return fetchApi<{ groups: IUltraGroup[]; pagination: PaginatedResponse<IUltraGroup>['pagination'] }>(
      `/groups${query ? `?${query}` : ''}`
    );
  },

  getBySlug: async (slug: string) => {
    return fetchApi<{ group: IUltraGroup }>(`/groups/${slug}`);
  },

  create: async (data: Partial<IUltraGroup>) => {
    return fetchApi<{ group: IUltraGroup }>('/groups', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  update: async (slug: string, data: Partial<IUltraGroup>) => {
    return fetchApi<{ group: IUltraGroup }>(`/groups/${slug}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete: async (slug: string) => {
    return fetchApi<{ message: string }>(`/groups/${slug}`, {
      method: 'DELETE',
    });
  },
};

// Articles API
export const articlesApi = {
  getAll: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    featured?: boolean;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.category) searchParams.set('category', params.category);
    if (params?.search) searchParams.set('search', params.search);
    if (params?.featured) searchParams.set('featured', 'true');

    const query = searchParams.toString();
    return fetchApi<{ articles: IArticle[]; pagination: PaginatedResponse<IArticle>['pagination'] }>(
      `/articles${query ? `?${query}` : ''}`
    );
  },

  getBySlug: async (slug: string) => {
    return fetchApi<{ article: IArticle }>(`/articles/${slug}`);
  },

  create: async (data: Partial<IArticle>) => {
    return fetchApi<{ article: IArticle }>('/articles', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  update: async (slug: string, data: Partial<IArticle>) => {
    return fetchApi<{ article: IArticle }>(`/articles/${slug}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete: async (slug: string) => {
    return fetchApi<{ message: string }>(`/articles/${slug}`, {
      method: 'DELETE',
    });
  },
};

// Timeline API
export const timelineApi = {
  getAll: async () => {
    return fetchApi<{ events: unknown[] }>('/timeline');
  },
};

// Tifos API
export const tifosApi = {
  getAll: async (params?: { page?: number; limit?: number; group?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.group) searchParams.set('group', params.group);

    const query = searchParams.toString();
    return fetchApi<{ tifos: unknown[]; pagination: unknown }>(`/tifos${query ? `?${query}` : ''}`);
  },
};

// Chants API
export const chantsApi = {
  getAll: async (params?: { page?: number; limit?: number; group?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.group) searchParams.set('group', params.group);

    const query = searchParams.toString();
    return fetchApi<{ chants: unknown[]; pagination: unknown }>(`/chants${query ? `?${query}` : ''}`);
  },
};

// Comments API
export const commentsApi = {
  getByTarget: async (targetType: string, targetId: string) => {
    return fetchApi<{ comments: unknown[] }>(`/comments?targetType=${targetType}&targetId=${targetId}`);
  },

  create: async (data: { targetType: string; targetId: string; content: string }) => {
    return fetchApi<{ comment: unknown }>('/comments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// Search API
export const searchApi = {
  search: async (query: string) => {
    return fetchApi<{ results: unknown[] }>(`/search?q=${encodeURIComponent(query)}`);
  },
};

// Glossary API
export const glossaryApi = {
  getAll: async () => {
    return fetchApi<{ terms: unknown[] }>('/glossary');
  },
};

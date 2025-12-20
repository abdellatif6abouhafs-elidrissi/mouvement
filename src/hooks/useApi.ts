'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { groupsApi, articlesApi, commentsApi, searchApi } from '@/lib/api';
import { IUltraGroup } from '@/models/UltraGroup';
import { IArticle } from '@/models/Article';

// Query Keys
export const queryKeys = {
  groups: {
    all: ['groups'] as const,
    lists: () => [...queryKeys.groups.all, 'list'] as const,
    list: (filters: Record<string, unknown>) => [...queryKeys.groups.lists(), filters] as const,
    details: () => [...queryKeys.groups.all, 'detail'] as const,
    detail: (slug: string) => [...queryKeys.groups.details(), slug] as const,
  },
  articles: {
    all: ['articles'] as const,
    lists: () => [...queryKeys.articles.all, 'list'] as const,
    list: (filters: Record<string, unknown>) => [...queryKeys.articles.lists(), filters] as const,
    details: () => [...queryKeys.articles.all, 'detail'] as const,
    detail: (slug: string) => [...queryKeys.articles.details(), slug] as const,
  },
  comments: {
    all: ['comments'] as const,
    byTarget: (targetType: string, targetId: string) => [...queryKeys.comments.all, targetType, targetId] as const,
  },
  search: {
    all: ['search'] as const,
    query: (q: string) => [...queryKeys.search.all, q] as const,
  },
};

// Groups Hooks
export function useGroups(params?: {
  page?: number;
  limit?: number;
  country?: string;
  search?: string;
  featured?: boolean;
}) {
  return useQuery({
    queryKey: queryKeys.groups.list(params || {}),
    queryFn: () => groupsApi.getAll(params),
  });
}

export function useGroup(slug: string) {
  return useQuery({
    queryKey: queryKeys.groups.detail(slug),
    queryFn: () => groupsApi.getBySlug(slug),
    enabled: !!slug,
  });
}

export function useCreateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<IUltraGroup>) => groupsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.groups.all });
    },
  });
}

export function useUpdateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: Partial<IUltraGroup> }) =>
      groupsApi.update(slug, data),
    onSuccess: (_, { slug }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.groups.detail(slug) });
      queryClient.invalidateQueries({ queryKey: queryKeys.groups.lists() });
    },
  });
}

export function useDeleteGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => groupsApi.delete(slug),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.groups.all });
    },
  });
}

// Articles Hooks
export function useArticles(params?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  featured?: boolean;
}) {
  return useQuery({
    queryKey: queryKeys.articles.list(params || {}),
    queryFn: () => articlesApi.getAll(params),
  });
}

export function useArticle(slug: string) {
  return useQuery({
    queryKey: queryKeys.articles.detail(slug),
    queryFn: () => articlesApi.getBySlug(slug),
    enabled: !!slug,
  });
}

export function useCreateArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<IArticle>) => articlesApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.articles.all });
    },
  });
}

export function useUpdateArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: Partial<IArticle> }) =>
      articlesApi.update(slug, data),
    onSuccess: (_, { slug }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.articles.detail(slug) });
      queryClient.invalidateQueries({ queryKey: queryKeys.articles.lists() });
    },
  });
}

export function useDeleteArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => articlesApi.delete(slug),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.articles.all });
    },
  });
}

// Comments Hooks
export function useComments(targetType: string, targetId: string) {
  return useQuery({
    queryKey: queryKeys.comments.byTarget(targetType, targetId),
    queryFn: () => commentsApi.getByTarget(targetType, targetId),
    enabled: !!targetType && !!targetId,
  });
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { targetType: string; targetId: string; content: string }) =>
      commentsApi.create(data),
    onSuccess: (_, { targetType, targetId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.comments.byTarget(targetType, targetId) });
    },
  });
}

// Search Hook
export function useSearch(query: string) {
  return useQuery({
    queryKey: queryKeys.search.query(query),
    queryFn: () => searchApi.search(query),
    enabled: query.length >= 2,
  });
}

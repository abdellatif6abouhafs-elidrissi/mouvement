import { z } from 'zod';

// ============ AUTH VALIDATIONS ============

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .trim(),
  email: z
    .string()
    .email('Invalid email address')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  country: z.string().max(100).optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address').toLowerCase().trim(),
  password: z.string().min(1, 'Password is required'),
});

// ============ ARTICLE VALIDATIONS ============

export const createArticleSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters')
    .trim(),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens')
    .optional(),
  excerpt: z
    .string()
    .min(10, 'Excerpt must be at least 10 characters')
    .max(500, 'Excerpt must be less than 500 characters')
    .trim(),
  content: z
    .string()
    .min(100, 'Content must be at least 100 characters'),
  coverImage: z.string().url('Invalid cover image URL').optional(),
  category: z.enum([
    'history',
    'culture',
    'tifo',
    'interview',
    'documentary',
    'event',
    'analysis',
  ]),
  tags: z.array(z.string().trim()).optional().default([]),
  relatedGroups: z.array(z.string()).optional().default([]),
  status: z.enum(['draft', 'pending', 'published', 'archived']).optional(),
  isFeatured: z.boolean().optional().default(false),
  seo: z
    .object({
      metaTitle: z.string().max(60).optional(),
      metaDescription: z.string().max(160).optional(),
      keywords: z.array(z.string()).optional(),
    })
    .optional(),
});

export const updateArticleSchema = createArticleSchema.partial();

// ============ GROUP VALIDATIONS ============

export const createGroupSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens')
    .optional(),
  club: z
    .string()
    .min(2, 'Club name must be at least 2 characters')
    .max(100, 'Club name must be less than 100 characters')
    .trim(),
  city: z.string().min(2).max(100).trim(),
  country: z.string().min(2).max(100).trim(),
  countryCode: z.string().length(2, 'Country code must be 2 characters').toUpperCase(),
  yearFounded: z
    .number()
    .int()
    .min(1900, 'Year must be after 1900')
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
  history: z.string().min(100, 'History must be at least 100 characters'),
  values: z.array(z.string()).optional().default([]),
  motto: z.string().max(200).optional(),
  colors: z.array(z.string()).optional().default([]),
  symbols: z.array(z.string()).optional().default([]),
  logo: z.string().url('Invalid logo URL').optional(),
  coverImage: z.string().url('Invalid cover image URL').optional(),
  membersEstimate: z.string().optional(),
  stadium: z.string().optional(),
  socialLinks: z
    .object({
      website: z.string().url().optional().nullable(),
      facebook: z.string().url().optional().nullable(),
      instagram: z.string().url().optional().nullable(),
      twitter: z.string().url().optional().nullable(),
      youtube: z.string().url().optional().nullable(),
    })
    .optional(),
  coordinates: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
  }),
  isFeatured: z.boolean().optional().default(false),
});

export const updateGroupSchema = createGroupSchema.partial();

// ============ COMMENT VALIDATIONS ============

export const createCommentSchema = z.object({
  content: z
    .string()
    .min(1, 'Comment cannot be empty')
    .max(2000, 'Comment must be less than 2000 characters')
    .trim(),
  targetType: z.enum(['article', 'group']),
  targetId: z.string().min(1, 'Target ID is required'),
  parentComment: z.string().optional(),
});

// ============ USER VALIDATIONS ============

export const updateUserSchema = z.object({
  name: z.string().min(2).max(50).trim().optional(),
  bio: z.string().max(500).optional(),
  country: z.string().max(100).optional(),
  image: z.string().url('Invalid image URL').optional(),
  favoriteGroups: z.array(z.string()).optional(),
});

export const updateUserRoleSchema = z.object({
  role: z.enum(['user', 'contributor', 'admin']),
});

// ============ HELPER FUNCTION ============

export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    return { success: false, error: errors.join(', ') };
  }

  return { success: true, data: result.data };
}

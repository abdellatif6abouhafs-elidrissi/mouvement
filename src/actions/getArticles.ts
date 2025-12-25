'use server';

import { connectDB } from '@/lib/db';
import Article from '@/models/Article';

interface GetArticlesParams {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    status?: string;
}

export async function getArticles({
    page = 1,
    limit = 10,
    search = '',
    category,
    status
}: GetArticlesParams) {
    try {
        await connectDB();

        const query: any = {};

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
            ];
        }

        if (category && category !== 'all') {
            query.category = category;
        }

        if (status && status !== 'all') {
            query.status = status;
        }

        const skip = (page - 1) * limit;

        const [articles, total] = await Promise.all([
            Article.find(query)
                .populate('author', 'name email')
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            Article.countDocuments(query),
        ]);

        const totalPages = Math.ceil(total / limit);

        // Serialize MongoDB objects
        const serializedArticles = articles.map((article: any) => ({
            ...article,
            _id: article._id.toString(),
            author: article.author ? {
                ...article.author,
                _id: article.author._id.toString(),
            } : null,
            relatedGroups: article.relatedGroups?.map((id: any) => id.toString()) || [],
            publishedAt: article.publishedAt?.toISOString(),
            createdAt: article.createdAt?.toISOString(),
            updatedAt: article.updatedAt?.toISOString(),
        }));

        return {
            articles: serializedArticles,
            total,
            totalPages,
            currentPage: page,
        };
    } catch (error: any) {
        console.error('Error fetching articles:', error);
        throw new Error(error.message || 'Failed to fetch articles');
    }
}

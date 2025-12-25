'use server';

import { connectDB } from '@/lib/db';
import Chant from '@/models/Chant';

interface GetChantsParams {
    page?: number;
    limit?: number;
    search?: string;
}

export async function getChants({ page = 1, limit = 10, search = '' }: GetChantsParams) {
    try {
        await connectDB();

        const query: any = {};

        if (search) {
            query.$or = [
                { group: { $regex: search, $options: 'i' } },
                { club: { $regex: search, $options: 'i' } },
                { 'translations.title': { $regex: search, $options: 'i' } },
            ];
        }

        const skip = (page - 1) * limit;

        const [chants, total] = await Promise.all([
            Chant.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            Chant.countDocuments(query),
        ]);

        const totalPages = Math.ceil(total / limit);

        return {
            chants: chants.map((c: any) => ({ ...c, _id: c._id.toString(), createdAt: c.createdAt?.toISOString() })),
            total,
            totalPages,
            currentPage: page,
        };
    } catch (error: any) {
        console.error('Error fetching chants:', error);
        throw new Error('Failed to fetch chants');
    }
}

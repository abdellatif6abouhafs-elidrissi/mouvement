'use server';

import { connectDB } from '@/lib/db';
import Tifo from '@/models/Tifo';

interface GetTifosParams {
    page?: number;
    limit?: number;
    search?: string;
}

export async function getTifos({ page = 1, limit = 10, search = '' }: GetTifosParams) {
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

        const [tifos, total] = await Promise.all([
            Tifo.find(query)
                .sort({ date: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            Tifo.countDocuments(query),
        ]);

        const totalPages = Math.ceil(total / limit);

        return {
            tifos: tifos.map((t: any) => ({ ...t, _id: t._id.toString(), date: t.date?.toISOString() })),
            total,
            totalPages,
            currentPage: page,
        };
    } catch (error: any) {
        console.error('Error fetching tifos:', error);
        throw new Error('Failed to fetch tifos');
    }
}

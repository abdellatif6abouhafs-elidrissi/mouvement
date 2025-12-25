'use server';

import { connectDB } from '@/lib/db';
import UltraGroup from '@/models/UltraGroup';

interface GetGroupsParams {
    page?: number;
    limit?: number;
    search?: string;
}

export async function getGroups({ page = 1, limit = 10, search = '' }: GetGroupsParams) {
    try {
        await connectDB();

        const query: any = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { club: { $regex: search, $options: 'i' } },
                { city: { $regex: search, $options: 'i' } },
            ];
        }

        const skip = (page - 1) * limit;

        const [groups, total] = await Promise.all([
            UltraGroup.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            UltraGroup.countDocuments(query),
        ]);

        const totalPages = Math.ceil(total / limit);

        // Serialize MongoDB objects
        const serializedGroups = groups.map((group: any) => ({
            ...group,
            _id: group._id.toString(),
            author: group.author?.toString(),
            rivals: group.rivals?.map((id: any) => id.toString()) || [],
            friends: group.friends?.map((id: any) => id.toString()) || [],
            createdAt: group.createdAt?.toISOString(),
            updatedAt: group.updatedAt?.toISOString(),
            tifos: group.tifos?.map((tifo: any) => ({ ...tifo, _id: tifo._id?.toString() })) || [],
            gallery: group.gallery?.map((item: any) => ({ ...item, _id: item._id?.toString() })) || [],
        }));

        return {
            groups: serializedGroups,
            total,
            totalPages,
            currentPage: page,
        };
    } catch (error: any) {
        console.error('Error fetching groups:', error);
        throw new Error(error.message || 'Failed to fetch groups');
    }
}

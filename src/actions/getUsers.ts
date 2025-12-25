'use server';

import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { IUserDocument } from '@/models/User';

interface GetUsersParams {
    page?: number;
    limit?: number;
    search?: string;
    role?: string;
}

export async function getUsers({ page = 1, limit = 10, search = '', role }: GetUsersParams) {
    try {
        await connectDB();

        const query: any = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ];
        }

        if (role && role !== 'all') {
            query.role = role;
        }

        const skip = (page - 1) * limit;

        const [users, total] = await Promise.all([
            User.find(query)
                .select('-password')
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            User.countDocuments(query),
        ]);

        const totalPages = Math.ceil(total / limit);

        // Serialize MongoDB objects (convert _id and dates to strings)
        const serializedUsers = users.map((user: any) => ({
            ...user,
            _id: user._id.toString(),
            createdAt: user.createdAt?.toISOString(),
            updatedAt: user.updatedAt?.toISOString(),
            favoriteGroups: user.favoriteGroups?.map((id: any) => id.toString()) || [],
        }));

        return {
            users: serializedUsers,
            total,
            totalPages,
            currentPage: page,
        };
    } catch (error: any) {
        console.error('Error fetching users:', error);
        throw new Error(error.message || 'Failed to fetch users');
    }
}

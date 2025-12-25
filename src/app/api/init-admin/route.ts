import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST() {
    try {
        await dbConnect();

        // Check if admin exists
        const existingAdmin = await User.findOne({ email: 'admin@mouvement.com' });
        if (existingAdmin) {
            return NextResponse.json({
                message: 'Admin already exists',
                credentials: {
                    email: 'admin@mouvement.com',
                    password: 'admin123'
                }
            });
        }

        // Create admin
        const hashedPassword = await bcrypt.hash('admin123', 12);
        await User.create({
            name: 'Admin User',
            email: 'admin@mouvement.com',
            password: hashedPassword,
            role: 'admin',
            isVerified: true,
            bio: 'Platform administrator',
        });

        return NextResponse.json({
            success: true,
            message: 'Admin user created!',
            credentials: {
                email: 'admin@mouvement.com',
                password: 'admin123'
            }
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './src/models/User.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mouvement';

async function createAdmin() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('Connected!');

        // Check if admin exists
        const existingAdmin = await User.findOne({ email: 'admin@mouvement.com' });
        if (existingAdmin) {
            console.log('Admin user already exists!');
            console.log('Email: admin@mouvement.com');
            console.log('Password: admin123');
            process.exit(0);
        }

        // Create admin
        const hashedPassword = await bcrypt.hash('admin123', 12);
        const admin = await User.create({
            name: 'Admin User',
            email: 'admin@mouvement.com',
            password: hashedPassword,
            role: 'admin',
            isVerified: true,
            bio: 'Platform administrator',
        });

        console.log('✅ Admin user created successfully!');
        console.log('Email: admin@mouvement.com');
        console.log('Password: admin123');

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

createAdmin();

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'mouvement';

async function createAdmin() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        const db = client.db(dbName);
        const users = db.collection('users');

        // Check if admin exists
        const existing = await users.findOne({ email: 'admin@mouvement.com' });
        if (existing) {
            console.log('⚠️  Admin already exists!');
            console.log('📧 Email: admin@mouvement.com');
            console.log('🔑 Password: admin123');
            return;
        }

        // Insert admin user with pre-hashed password (bcrypt hash of "admin123")
        await users.insertOne({
            name: 'Admin User',
            email: 'admin@mouvement.com',
            password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYILSBL9tBC',
            role: 'admin',
            isVerified: true,
            bio: 'Platform administrator',
            createdAt: new Date(),
            updatedAt: new Date()
        });

        console.log('✅ Admin user created successfully!');
        console.log('📧 Email: admin@mouvement.com');
        console.log('🔑 Password: admin123');
        console.log('\n🚀 You can now login at: http://localhost:3000/fr/login');

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await client.close();
    }
}

createAdmin();

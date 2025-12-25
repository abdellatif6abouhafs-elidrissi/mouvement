const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/?appName=Cluster0';

async function createAdminProduction() {
    const client = new MongoClient(uri);

    try {
        console.log('🔗 Connecting to MongoDB Atlas...');
        await client.connect();
        console.log('✅ Connected to production database!');

        const db = client.db('mouvement');
        const users = db.collection('users');

        // Check if admin exists
        const existing = await users.findOne({ email: 'admin@mouvement.com' });
        if (existing) {
            console.log('⚠️  Admin user already exists in production!');
            console.log('📧 Email: admin@mouvement.com');
            console.log('🔑 Password: admin123');
            console.log('\n🚀 You can login at your Vercel URL!');
            return;
        }

        // Generate hash for "admin123"
        const hashedPassword = await bcrypt.hash('admin123', 12);

        // Insert admin user
        await users.insertOne({
            name: 'Admin User',
            email: 'admin@mouvement.com',
            password: hashedPassword,
            role: 'admin',
            isVerified: true,
            bio: 'Platform administrator',
            createdAt: new Date(),
            updatedAt: new Date()
        });

        console.log('✅ Admin user created in PRODUCTION database!');
        console.log('📧 Email: admin@mouvement.com');
        console.log('🔑 Password: admin123');
        console.log('\n🚀 You can now login at your Vercel deployment!');

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await client.close();
    }
}

createAdminProduction();

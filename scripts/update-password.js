const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

async function updatePassword() {
    const client = new MongoClient('mongodb://localhost:27017');

    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        const db = client.db('mouvement');
        const users = db.collection('users');

        // Generate new hash for "admin123"
        const newHash = await bcrypt.hash('admin123', 12);
        console.log('Generated new hash:', newHash);

        // Update password
        const result = await users.updateOne(
            { email: 'admin@mouvement.com' },
            { $set: { password: newHash } }
        );

        if (result.modifiedCount > 0) {
            console.log('✅ Password updated successfully!');
            console.log('📧 Email: admin@mouvement.com');
            console.log('🔑 Password: admin123');
            console.log('\n🚀 Try logging in now!');
        } else {
            console.log('⚠️  No user found or password already correct');
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await client.close();
    }
}

updatePassword();

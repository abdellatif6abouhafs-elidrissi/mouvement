const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

// Production URI
const uri = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority';

async function verifyProductionUser() {
    const client = new MongoClient(uri);

    try {
        console.log('🔗 Connecting to MongoDB Atlas...');
        await client.connect();
        console.log('✅ Connected!');

        const db = client.db('mouvement');
        const users = db.collection('users');

        // 1. Check if user exists
        const admin = await users.findOne({ email: 'admin@mouvement.com' });

        if (!admin) {
            console.log('❌ Admin user NOT FOUND in users collection!');

            // Check if maybe collection name is different?
            const collections = await db.listCollections().toArray();
            console.log('Available collections:', collections.map(c => c.name));
            return;
        }

        console.log('✅ Admin user FOUND!');
        console.log('ID:', admin._id);
        console.log('Role:', admin.role);
        console.log('Verified:', admin.isVerified);

        // 2. Verify Password
        console.log('\n🔐 Verifying password "admin123"...');
        const isValid = await bcrypt.compare('admin123', admin.password);

        if (isValid) {
            console.log('✅ Password matches! Credentials are correct.');
        } else {
            console.log('❌ Password mismatch! Updating to correct hash...');
            const newHash = await bcrypt.hash('admin123', 12);
            await users.updateOne(
                { _id: admin._id },
                { $set: { password: newHash } }
            );
            console.log('✅ Password updated to "admin123"');
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await client.close();
    }
}

verifyProductionUser();

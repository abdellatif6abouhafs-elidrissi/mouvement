const bcrypt = require('bcryptjs');

// Test if password "admin123" matches the hash in database
const password = 'admin123';
const hash = '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYILSBL9tBC';

bcrypt.compare(password, hash, (err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Password matches hash:', result);
        if (result) {
            console.log('✅ Hash is correct for password "admin123"');
        } else {
            console.log('❌ Hash does NOT match password "admin123"');
            console.log('Generating new hash...');
            bcrypt.hash(password, 12, (err, newHash) => {
                console.log('New hash for "admin123":', newHash);
            });
        }
    }
});

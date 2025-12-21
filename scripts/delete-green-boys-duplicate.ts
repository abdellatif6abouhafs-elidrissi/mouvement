import mongoose from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';

function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0 && !key.startsWith('#')) {
        let value = valueParts.join('=').trim();
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        process.env[key.trim()] = value;
      }
    });
  }
}

loadEnv();
const MONGODB_URI = process.env.MONGODB_URI || '';

async function deleteDuplicate() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    // Find and show the duplicate
    const duplicate = await UltraGroup.findOne({ slug: 'green-boys' });
    if (duplicate) {
      console.log('Found duplicate:', duplicate.name, '- slug:', duplicate.slug);
      
      // Delete it
      const result = await UltraGroup.deleteOne({ slug: 'green-boys' });
      console.log('Deleted:', result.deletedCount, 'document');
    } else {
      console.log('No duplicate found with slug "green-boys"');
    }

    // Verify green-boys-2005 still exists
    const correct = await UltraGroup.findOne({ slug: 'green-boys-2005' });
    console.log('\ngreen-boys-2005 exists:', correct ? 'Yes' : 'No');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

deleteDuplicate();

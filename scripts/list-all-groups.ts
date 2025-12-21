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

async function listGroups() {
  try {
    await mongoose.connect(MONGODB_URI);
    const UltraGroup = mongoose.connection.collection('ultragroups');
    
    const groups = await UltraGroup.find({}).toArray();
    console.log('All Ultra groups in database:\n');
    groups.forEach(g => {
      console.log(`- ${g.name} | slug: ${g.slug}`);
    });
    console.log(`\nTotal: ${groups.length} groups`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

listGroups();

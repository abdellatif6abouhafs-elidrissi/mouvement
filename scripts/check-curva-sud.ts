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

async function checkCurvaSud() {
  try {
    await mongoose.connect(MONGODB_URI);
    const UltraGroup = mongoose.connection.collection('ultragroups');
    
    // Search for Curva Sud Milano
    const group = await UltraGroup.findOne({ 
      $or: [
        { name: /curva sud/i },
        { slug: /curva-sud/i },
        { name: /milano/i }
      ]
    });
    
    if (group) {
      console.log('Found group:');
      console.log('Name:', group.name);
      console.log('Slug:', group.slug);
      console.log('Club:', group.club);
      console.log('Country:', group.country);
      console.log('History:', group.history?.substring(0, 200) + '...');
    } else {
      console.log('Curva Sud Milano not found. Listing all groups:');
      const allGroups = await UltraGroup.find({}).toArray();
      allGroups.forEach(g => console.log('-', g.name, '|', g.slug));
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

checkCurvaSud();

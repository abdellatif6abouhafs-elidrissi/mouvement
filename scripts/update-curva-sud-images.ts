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

async function updateImages() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    const result = await UltraGroup.updateOne(
      { slug: 'curva-sud-milano' },
      {
        $set: {
          logo: '/images/ultras/curva-sud-milano/logo.jpg',
          coverImage: '/images/ultras/curva-sud-milano/cover.jpg',
          images: [
            '/images/ultras/curva-sud-milano/tifo-1.jpg',
            '/images/ultras/curva-sud-milano/tifo-2.jpg',
            '/images/ultras/curva-sud-milano/tifo-3.jpg',
            '/images/ultras/curva-sud-milano/tifo-4.jpg',
            '/images/ultras/curva-sud-milano/tifo-5.jpg',
            '/images/ultras/curva-sud-milano/tifo-6.jpg',
            '/images/ultras/curva-sud-milano/tifo-7.jpg',
            '/images/ultras/curva-sud-milano/tifo-8.jpg',
            '/images/ultras/curva-sud-milano/tifo-9.jpg',
            '/images/ultras/curva-sud-milano/tifo-10.jpg',
            '/images/ultras/curva-sud-milano/tifo-11.jpg',
            '/images/ultras/curva-sud-milano/tifo-12.jpg',
            '/images/ultras/curva-sud-milano/tifo-13.jpg',
            '/images/ultras/curva-sud-milano/tifo-14.jpg',
            '/images/ultras/curva-sud-milano/tifo-15.jpg',
            '/images/ultras/curva-sud-milano/tifo-16.jpg',
            '/images/ultras/curva-sud-milano/tifo-17.jpg',
            '/images/ultras/curva-sud-milano/fans-1.jpg',
            '/images/ultras/curva-sud-milano/fans-2.jpg',
          ],
        }
      }
    );

    if (result.matchedCount > 0) {
      console.log('Curva Sud Milano images updated!');
      console.log('Logo, cover, and 19 gallery images added.');
    } else {
      console.log('Group not found');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateImages();

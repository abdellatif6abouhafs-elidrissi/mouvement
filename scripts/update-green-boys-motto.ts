import mongoose from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables
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

async function updateMotto() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    const result = await UltraGroup.updateOne(
      { slug: 'green-boys-2005' },
      {
        $set: {
          motto: 'Simply The Best',
          'mottoTranslations.en': 'Simply The Best',
          'mottoTranslations.ar': 'ببساطة الأفضل',
          'mottoTranslations.fr': 'Simplement Les Meilleurs',
          'mottoTranslations.es': 'Simplemente Los Mejores',
          'mottoTranslations.it': 'Semplicemente I Migliori',
          'mottoTranslations.pt-br': 'Simplesmente Os Melhores',
        }
      }
    );

    if (result.matchedCount > 0) {
      console.log('GREEN BOYS 2005 motto updated to "Simply The Best"!');
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

updateMotto();

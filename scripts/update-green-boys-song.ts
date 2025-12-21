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

async function updateSong() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    // Get current document
    const group = await UltraGroup.findOne({ slug: 'green-boys-2005' });
    
    if (group && group.historyTranslations?.ar) {
      // Replace the song name in Arabic content
      let arabicContent = group.historyTranslations.ar;
      arabicContent = arabicContent.replace(/في بلادي الظلموني/g, 'كازا');
      arabicContent = arabicContent.replace(/«في بلادي الظلموني»/g, '«كازا»');
      arabicContent = arabicContent.replace(/"في بلادي الظلموني"/g, '"كازا"');
      
      // Also update English content
      let englishContent = group.historyTranslations?.en || group.history || '';
      englishContent = englishContent.replace(/F'Bladi Dalmouni/g, 'Casa');
      englishContent = englishContent.replace(/Fi Bladi Dalamoni/g, 'Casa');
      englishContent = englishContent.replace(/"In My Country They Wronged Me"/g, '"Casa"');
      englishContent = englishContent.replace(/In My Country They Wronged Me/g, 'Casa');

      const result = await UltraGroup.updateOne(
        { slug: 'green-boys-2005' },
        {
          $set: {
            'historyTranslations.ar': arabicContent,
            'historyTranslations.en': englishContent,
            'history': englishContent,
            'famousSongs': ['Casa', 'Dima Raja', 'Verde Para Siempre'],
          }
        }
      );

      console.log('Song references updated to "Casa"!');
    } else {
      console.log('Group not found or no Arabic content');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateSong();

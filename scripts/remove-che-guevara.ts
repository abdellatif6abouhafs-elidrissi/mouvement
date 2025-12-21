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

async function removeCheGuevara() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');
    const group = await UltraGroup.findOne({ slug: 'green-boys-2005' });
    
    if (group && group.historyTranslations?.ar) {
      let arabicContent = group.historyTranslations.ar;
      
      // Remove the Che Guevara line
      arabicContent = arabicContent.replace(/، مثل صورة الزعيم الثوري تشي غيفارا مع شعار «متمردون مثله»/g, '');
      arabicContent = arabicContent.replace(/مثل صورة الزعيم الثوري تشي غيفارا مع شعار «متمردون مثله»/g, '');
      
      // Also remove from English if present
      let englishContent = group.historyTranslations?.en || group.history || '';
      englishContent = englishContent.replace(/One iconic tifo featured Che Guevara, accompanied by the message "Rebels Like Him," highlighting themes of resistance, dignity, and rebellion\./g, '');
      englishContent = englishContent.replace(/\(مثل وجه تشي غيفارا باللونين الأخضر والأسود\) إشارة إلى روح التمرد، أو/g, '');
      
      // Update symbols array to remove Che Guevara
      const result = await UltraGroup.updateOne(
        { slug: 'green-boys-2005' },
        {
          $set: {
            'historyTranslations.ar': arabicContent,
            'historyTranslations.en': englishContent,
            'history': englishContent,
            'symbols': ['Alien Logo', 'Green Eagle', 'Celtic Cross'],
          }
        }
      );

      console.log('Che Guevara references removed!');
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

removeCheGuevara();

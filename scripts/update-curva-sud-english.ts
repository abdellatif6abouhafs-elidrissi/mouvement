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

const englishHistory = `Introduction

Curva Sud Milano is the southern stand of the San Siro Stadium (Stadio Giuseppe Meazza) and the historic stronghold of AC Milan's Ultras. It is not a single group, but a unified entity that brings together multiple Ultras factions under one identity, one loyalty, and one voice.

Renowned worldwide for its passion, discipline, and breathtaking visual displays, Curva Sud has transformed the stadium into a space of cultural and collective expression.

History and Origins

Ultras culture in Curva Sud dates back to the late 1960s and early 1970s with legendary groups such as:

Fossa dei Leoni (1968)

Brigate Rossonere

Commandos Tigre

Ultras Milano

Over time, despite dissolutions and transformations, the spirit of Curva Sud endured and eventually unified under the name Curva Sud Milano, representing a modern, collective Ultras identity.

Culture and Visual Art

Curva Sud Milano is famous for:

Massive, meticulously designed tifo displays

Strong red-and-black visual identity

Powerful banners and choreographies

Messages rooted in history, pride, and loyalty

Each tifo is the result of weeks of collective work, reflecting AC Milan's legacy and European stature.

Iconic Matches

Curva Sud's power is most visible during:

Derby della Madonnina against Inter Milan

UEFA Champions League matches

Finals and decisive matches

On these occasions, San Siro becomes a legendary arena where the fans play the role of the 12th player, sometimes even the most important one.

Core Values and Organization

Curva Sud is built on:

Unconditional loyalty to AC Milan

Unity and collective discipline

Independence from club management

Respect for tradition and history

Leadership is coordinated by the Capo, who guides chants and synchronizes the stand.

Global Influence

Curva Sud Milano is considered a true school in Ultras culture, inspiring groups across:

Europe

North Africa

Latin America

Their tifos and images circulate worldwide, and their style is studied within modern terrace culture.

Conclusion

Curva Sud Milano is more than a stand—it is a living cultural institution. It embodies passion, memory, and resistance, making it one of the most iconic Ultras strongholds in world football.`;

async function updateCurvaSudEnglish() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    const result = await UltraGroup.updateOne(
      { slug: 'curva-sud-milano' },
      {
        $set: {
          'historyTranslations.en': englishHistory,
          'history': englishHistory,
          'mottoTranslations.en': 'The Beating Heart of AC Milan',
        }
      }
    );

    if (result.matchedCount > 0) {
      console.log('Curva Sud Milano English content updated!');
      console.log('Content length:', englishHistory.length, 'characters');
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

updateCurvaSudEnglish();

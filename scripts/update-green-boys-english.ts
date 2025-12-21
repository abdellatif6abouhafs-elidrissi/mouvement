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

const englishHistory = `History and Foundation

Ultras Green Boys were founded on June 21, 2005, as part of Raja Club Athletic supporters in Casablanca, Morocco. The group emerged when dozens of young supporters gathered at Stade Mohammed V with the goal of organizing themselves into a structured and independent supporters' movement. This initiative marked the birth of the first official Ultras group in Morocco.

Before adopting the name Green Boys, an early core of supporters was known as "La Clique Celtic", inspired by Celtic FC's green-and-white colors, which closely resemble Raja's identity. The name Green Boys was chosen to symbolize loyalty to the club's colors and a modern, international vision of supporter culture. Their emblem, featuring an alien figure, represents intelligence, creativity, and difference—values that define the group's philosophy.

Since their foundation, Green Boys have become a symbol of Ultras culture in Morocco and Africa, inspiring generations of supporters and shaping a new era of stadium culture.

Cultural and Artistic Activities

Ultras Green Boys are internationally recognized for their artistic and cultural contributions inside football stadiums. Their work goes far beyond chanting; it transforms the stadium into a cultural and visual space.

They are especially known for:
• Massive and complex tifo displays
• Coordinated use of colors, banners, flags, and pyrotechnics
• Strong visual storytelling with historical, social, and political symbolism

Their tifos often cover entire stands and require weeks of preparation, reflecting discipline, creativity, and collective effort. Many of their creations have been featured in international media and Ultras archives worldwide.

Green Boys are also known for powerful chants written by their own members. One of the most famous chants, "F'Bladi Dalmouni" (In My Country They Wronged Me), became an anthem expressing social frustration, injustice, and belonging. The chant transcended football and resonated across Moroccan society and beyond.

Their visual language frequently incorporates global cultural references. One iconic tifo featured Che Guevara, accompanied by the message "Rebels Like Him," highlighting themes of resistance, dignity, and rebellion.

Memorable Matches and Iconic Moments

Green Boys' tifos and choreographies are especially prominent during major matches, particularly the Casablanca Derby against Wydad AC. During these games, the stadium becomes a stage where supporters compete artistically as much as players compete on the pitch.

In several derby matches, Green Boys displayed legendary tifos that covered large sections of the stadium, delivering strong collective messages about unity, pride, and resistance. These moments are often remembered as historic not only for the match result, but for the atmosphere created by the supporters.

Organization and Structure

Green Boys operate as an independent and self-managed group, separate from the club's administration. Their funding relies mainly on membership contributions and sale of supporter merchandise (scarves, shirts, stickers).

The group follows a structured internal organization. A central Capo leads chants and coordinates movement in the stand, supported by trusted members responsible for logistics, visuals, and communication. They primarily occupy the Curva Sud of Stade Mohammed V, where they maintain strict organization and visual unity.

Influence on Ultras Culture

As the first Ultras group in Morocco, Green Boys played a crucial role in spreading Ultras culture nationwide. Their success inspired the creation of many other groups, including Winners 2005 (Wydad AC) and numerous Ultras movements across Moroccan clubs.

Their influence extended beyond Morocco, contributing to the recognition of African Ultras culture on a global scale. Raja's supporters became widely respected in Africa and internationally for their atmosphere, visuals, and commitment.

Ultras Green Boys are not simply supporters of Raja Club Athletic. They are a cultural movement, a collective voice, and a symbol of Moroccan Ultras identity.`;

async function updateGreenBoysEnglish() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    const result = await UltraGroup.updateOne(
      { slug: 'green-boys-2005' },
      {
        $set: {
          'historyTranslations.en': englishHistory,
          history: englishHistory,
        }
      }
    );

    if (result.matchedCount > 0) {
      console.log('GREEN BOYS 2005 English content updated successfully!');
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

updateGreenBoysEnglish();

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

async function updateArticles() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const Article = mongoose.connection.collection('articles');

    // Update article 1: The Art of Tifo
    const r1 = await Article.updateOne(
      { title: { $regex: /Art of Tifo/i } },
      { $set: { image: '/images/articles/article-1.jpg', coverImage: '/images/articles/article-1.jpg' } }
    );
    console.log('Art of Tifo:', r1.matchedCount > 0 ? 'Updated' : 'Not found');

    // Update article 2: South American Passion / Barra Bravas
    const r2 = await Article.updateOne(
      { title: { $regex: /Barra Brava|South American/i } },
      { $set: { image: '/images/articles/article-2.jpg', coverImage: '/images/articles/article-2.jpg' } }
    );
    console.log('Barra Bravas:', r2.matchedCount > 0 ? 'Updated' : 'Not found');

    // Update article 3: Interview Curva Nord
    const r3 = await Article.updateOne(
      { title: { $regex: /Curva Nord|Interview/i } },
      { $set: { image: '/images/articles/article-3.jpg', coverImage: '/images/articles/article-3.jpg' } }
    );
    console.log('Curva Nord Interview:', r3.matchedCount > 0 ? 'Updated' : 'Not found');

    // List all articles to check
    const articles = await Article.find({}).toArray();
    console.log('\nAll articles in database:');
    articles.forEach(a => console.log('-', a.title));

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  }
}

updateArticles();

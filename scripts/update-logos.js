const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0';

async function updateLogos() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const updates = [
      {
        slug: 'green-boys-2005',
        logo: '/images/logos/green-boys-2005-10.webp',
        coverImage: '/images/groups/green-boys-2005.webp'
      },
      {
        slug: 'curva-sud-milano',
        logo: '/images/logos/curva-sud-milano-6.webp',
        coverImage: '/images/groups/curva-sud-milano.webp'
      },
      {
        slug: 'curva-nord-inter',
        logo: '/images/logos/curva-nord-inter-4.webp',
        coverImage: '/images/groups/curva-nord-inter-14.webp'
      },
      {
        slug: 'yellow-wall',
        logo: '/images/groups/yellow-wall.webp',
        coverImage: '/images/groups/yellow-wall.webp'
      },
      {
        slug: 'la-12',
        logo: '/images/groups/la-12.webp',
        coverImage: '/images/groups/la-12.webp'
      },
      {
        slug: 'ultras-ahlawy',
        logo: '/images/groups/ultras-ahlawy.webp',
        coverImage: '/images/groups/ultras-ahlawy.webp'
      },
      {
        slug: 'the-kop',
        logo: '/images/groups/the-kop.webp',
        coverImage: '/images/groups/the-kop.webp'
      },
      {
        slug: 'gavioes-da-fiel',
        logo: '/images/groups/gavioes-da-fiel.webp',
        coverImage: '/images/groups/gavioes-da-fiel.webp'
      },
      {
        slug: 'winners',
        logo: '/images/groups/wydad-winners.webp',
        coverImage: '/images/groups/wydad-winners.webp'
      }
    ];

    for (const update of updates) {
      const result = await mongoose.connection.db.collection('ultragroups').updateOne(
        { slug: update.slug },
        { $set: { logo: update.logo, coverImage: update.coverImage } }
      );
      console.log(`${update.slug}: ${result.modifiedCount ? 'Updated' : 'Not found or no change'}`);
    }

    // Show all groups with their logos
    const groups = await mongoose.connection.db.collection('ultragroups').find({}).toArray();
    console.log('\n--- All Groups ---');
    groups.forEach(g => {
      console.log(`${g.name}: logo=${g.logo || 'NONE'}`);
    });

    await mongoose.disconnect();
    console.log('\nDone!');
  } catch (error) {
    console.error('Error:', error);
  }
}

updateLogos();

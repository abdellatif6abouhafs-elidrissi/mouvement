const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://abouhafs05:Rajalove2001@cluster0.vhmlghp.mongodb.net/mouvement?retryWrites=true&w=majority&appName=Cluster0";

async function updateGreenBoysImages() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // New images from gb05 folder
    const newImages = [
      '/images/groups/green-boys-logo.jpg',
      '/images/groups/green-boys-tifo-1.jpg',
      '/images/groups/green-boys-tifo-2.jpg',
      '/images/groups/green-boys-tifo-3.jpg',
      '/images/groups/green-boys-tifo-4.jpg',
      '/images/groups/green-boys-banner.jpg'
    ];

    const newTifos = [
      {
        title: 'Tifo Spectacular 2024',
        description: 'Magnificent display by Green Boys 2005',
        image: '/images/tifos/green-boys-tifo-1.jpg',
        date: new Date('2024-12-01'),
        match: 'Raja vs WAC - Derby Casablanca'
      },
      {
        title: 'Green Pride',
        description: 'Another stunning tifo creation',
        image: '/images/tifos/green-boys-tifo-2.jpg',
        date: new Date('2024-11-15'),
        match: 'Raja vs FAR Rabat'
      },
      {
        title: 'Champions Display',
        description: 'Celebrating Raja glory',
        image: '/images/tifos/green-boys-tifo-3.jpg',
        date: new Date('2024-10-20'),
        match: 'Raja vs AS FAR'
      }
    ];

    // Update Green Boys 2005 group
    const result = await mongoose.connection.db.collection('ultragroups').updateOne(
      { slug: 'green-boys-2005' },
      {
        $set: {
          logo: '/images/groups/green-boys-logo.jpg',
          coverImage: '/images/groups/green-boys-banner.jpg',
          gallery: newImages
        },
        $push: {
          tifos: { $each: newTifos }
        }
      }
    );

    if (result.modifiedCount > 0) {
      console.log('[SUCCESS] Green Boys 2005 images updated!');
      console.log('- New logo: green-boys-logo.jpg');
      console.log('- New cover: green-boys-banner.jpg');
      console.log('- Added 6 gallery images');
      console.log('- Added 3 new tifos');
    } else {
      console.log('[INFO] No changes made - Green Boys 2005 may not exist or already has these images');
    }

    // Also add tifos to the tifos collection if it exists
    const tifoCollection = mongoose.connection.db.collection('tifos');
    for (const tifo of newTifos) {
      await tifoCollection.insertOne({
        ...tifo,
        group: 'GREEN BOYS 2005',
        groupSlug: 'green-boys-2005',
        club: 'Raja Casablanca',
        country: 'Morocco',
        countryCode: 'MA',
        stadium: 'Stade Mohamed V',
        views: Math.floor(Math.random() * 50000) + 10000,
        likes: Math.floor(Math.random() * 10000) + 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    console.log('[SUCCESS] Added tifos to tifos collection');

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateGreenBoysImages();

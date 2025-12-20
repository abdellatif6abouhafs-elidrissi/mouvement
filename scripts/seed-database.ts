// Database Seeding Script for MOUVEMENT
// Run with: npx ts-node scripts/seed-database.ts

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env.local') });

// Import models
import UltraGroup from '../src/models/UltraGroup';
import Article from '../src/models/Article';
import Tifo from '../src/models/Tifo';
import Chant from '../src/models/Chant';
import Timeline from '../src/models/Timeline';
import GlossaryTerm from '../src/models/GlossaryTerm';
import User from '../src/models/User';

// Import seed data
import {
  ultraGroupsData,
  timelineData,
  tifosData,
  chantsData,
  articlesData,
  glossaryData
} from './seed-data';

const MONGODB_URI = process.env.MONGODB_URI || '';

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

async function getOrCreateAdminUser() {
  let admin = await User.findOne({ email: 'admin@mouvement.com' });

  if (!admin) {
    admin = await User.create({
      name: 'MOUVEMENT Admin',
      email: 'admin@mouvement.com',
      password: 'admin123456', // Will be hashed by the model
      role: 'admin',
      isVerified: true
    });
    console.log('Created admin user');
  }

  return admin;
}

async function seedUltraGroups(authorId: mongoose.Types.ObjectId) {
  console.log('\nSeeding Ultra Groups...');

  // Clear existing data
  await UltraGroup.deleteMany({});

  const groupsWithAuthor = ultraGroupsData.map(group => ({
    ...group,
    author: authorId,
    views: Math.floor(Math.random() * 50000) + 5000,
    likes: Math.floor(Math.random() * 10000) + 1000
  }));

  const groups = await UltraGroup.insertMany(groupsWithAuthor);
  console.log(`Inserted ${groups.length} Ultra Groups`);

  return groups;
}

async function seedTimeline() {
  console.log('\nSeeding Timeline...');

  await Timeline.deleteMany({});

  const timelineWithOrder = timelineData.map((event, index) => ({
    ...event,
    order: index
  }));

  const timeline = await Timeline.insertMany(timelineWithOrder);
  console.log(`Inserted ${timeline.length} Timeline Events`);

  return timeline;
}

async function seedTifos() {
  console.log('\nSeeding Tifos...');

  await Tifo.deleteMany({});

  const tifos = await Tifo.insertMany(tifosData);
  console.log(`Inserted ${tifos.length} Tifos`);

  return tifos;
}

async function seedChants() {
  console.log('\nSeeding Chants...');

  await Chant.deleteMany({});

  const chants = await Chant.insertMany(chantsData);
  console.log(`Inserted ${chants.length} Chants`);

  return chants;
}

async function seedArticles(authorId: mongoose.Types.ObjectId) {
  console.log('\nSeeding Articles...');

  await Article.deleteMany({});

  const articlesWithAuthor = articlesData.map(article => ({
    ...article,
    author: authorId,
    publishedAt: new Date(),
    views: Math.floor(Math.random() * 20000) + 2000,
    likes: Math.floor(Math.random() * 5000) + 500
  }));

  const articles = await Article.insertMany(articlesWithAuthor);
  console.log(`Inserted ${articles.length} Articles`);

  return articles;
}

async function seedGlossary() {
  console.log('\nSeeding Glossary...');

  await GlossaryTerm.deleteMany({});

  const glossary = await GlossaryTerm.insertMany(glossaryData);
  console.log(`Inserted ${glossary.length} Glossary Terms`);

  return glossary;
}

async function main() {
  console.log('='.repeat(50));
  console.log('MOUVEMENT Database Seeding');
  console.log('='.repeat(50));

  await connectDB();

  try {
    const admin = await getOrCreateAdminUser();

    await seedUltraGroups(admin._id as mongoose.Types.ObjectId);
    await seedTimeline();
    await seedTifos();
    await seedChants();
    await seedArticles(admin._id as mongoose.Types.ObjectId);
    await seedGlossary();

    console.log('\n' + '='.repeat(50));
    console.log('Database seeding completed successfully!');
    console.log('='.repeat(50));

  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  }
}

main();

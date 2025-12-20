'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Heart,
  Share2,
  Flag,
  Trophy,
  Palette,
  Image as ImageIcon,
  BookOpen,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

// Mock data - in production this would come from API
const groupsData: Record<string, {
  name: string;
  club: string;
  city: string;
  country: string;
  yearFounded: number;
  description: string;
  history: string;
  values: string[];
  colors: string[];
  achievements: string[];
  members: string;
}> = {
  'green-boys': {
    name: 'GREEN BOYS 2005',
    club: 'Raja Casablanca',
    city: 'Casablanca',
    country: 'Morocco',
    yearFounded: 2005,
    description: 'The first Ultra group in Morocco and pioneers of the Moroccan Ultra movement. Known for their incredible atmosphere and historic tifos.',
    history: 'GREEN BOYS 2005 is the pioneer of Ultra culture in Morocco, founded in 2005. They revolutionized supporter culture in North Africa, introducing organized choreographies, tifos, and the true Ultra mentality to Moroccan football. Their influence spread across the entire continent, inspiring countless other groups.',
    values: ['Pioneer Spirit', 'Creativity', 'Loyalty', 'Brotherhood', 'Green Pride'],
    colors: ['Green', 'White'],
    achievements: [
      'First Ultra group in Morocco (2005)',
      'Pioneers of North African Ultra movement',
      'Multiple international tifo awards',
      'Legendary choreographies in African competitions',
      'Cultural ambassadors of Moroccan supporter culture',
    ],
    members: '60K+',
  },
  'ultras-eagles': {
    name: 'Ultras Eagles',
    club: 'Raja Casablanca',
    city: 'Casablanca',
    country: 'Morocco',
    yearFounded: 2005,
    description: 'One of the most passionate Ultra groups in Africa, known for spectacular tifos and unwavering support.',
    history: 'Founded in 2005, Ultras Eagles quickly became one of the most influential supporter groups in North Africa. Known for their spectacular choreographies and passionate support, they have set new standards for organized support in the region.',
    values: ['Loyalty', 'Passion', 'Unity', 'Creativity'],
    colors: ['Green', 'White'],
    achievements: [
      'Best Tifo - CAF Champions League 2011',
      'Record attendance - Derby 2018',
      'International recognition for supporter culture',
    ],
    members: '50K+',
  },
  'winners': {
    name: 'Winners',
    club: 'Wydad AC',
    city: 'Casablanca',
    country: 'Morocco',
    yearFounded: 2005,
    description: 'Iconic group representing the Red tradition of Wydad Athletic Club.',
    history: 'Winners was established in 2005 and has since become synonymous with the red passion of Wydad AC. Their creative tifos and powerful chants echo through stadiums across Africa.',
    values: ['Pride', 'Tradition', 'Brotherhood', 'Excellence'],
    colors: ['Red', 'White'],
    achievements: [
      'CAF Champions League supporter award 2017',
      'Best choreography - North Africa 2019',
    ],
    members: '45K+',
  },
  'curva-sud-milano': {
    name: 'Curva Sud Milano',
    club: 'AC Milan',
    city: 'Milan',
    country: 'Italy',
    yearFounded: 1968,
    description: 'Historic curve supporting AC Milan with decades of Ultra tradition.',
    history: 'One of the oldest and most respected Ultra groups in football history. Curva Sud Milano has been the heart of AC Milan support since 1968, setting the standard for Italian Ultra culture.',
    values: ['History', 'Honor', 'Dedication', 'Mentalità'],
    colors: ['Red', 'Black'],
    achievements: [
      'Pioneers of Italian Ultra movement',
      'Legendary tifos in European finals',
      'Cultural influence on global supporter movements',
    ],
    members: '100K+',
  },
  'yellow-wall': {
    name: 'Yellow Wall',
    club: 'Borussia Dortmund',
    city: 'Dortmund',
    country: 'Germany',
    yearFounded: 1974,
    description: 'The famous Südtribüne, largest standing terrace in Europe.',
    history: 'The Südtribüne, known as the Yellow Wall, holds 25,000 standing fans and is the largest terrace in European football. It represents the soul of Borussia Dortmund and German supporter culture.',
    values: ['Echte Liebe', 'Community', 'Atmosphere', 'Tradition'],
    colors: ['Yellow', 'Black'],
    achievements: [
      'Largest standing terrace in Europe',
      'Famous for pre-match choreographies',
      'Symbol of German football culture',
    ],
    members: '80K+',
  },
  'la-doce': {
    name: 'La Doce',
    club: 'Boca Juniors',
    city: 'Buenos Aires',
    country: 'Argentina',
    yearFounded: 1925,
    description: 'The legendary Barra Brava of La Bombonera.',
    history: 'La Doce (The 12th Player) is one of the most famous barras bravas in the world. Based at La Bombonera, they create an atmosphere that has become legendary in world football.',
    values: ['Pasión', 'Aguante', 'Fidelidad', 'Boca hasta la muerte'],
    colors: ['Blue', 'Gold'],
    achievements: [
      'Most passionate supporters in South America',
      'La Bombonera - one of the most intimidating stadiums',
      'Cultural icon of Argentine football',
    ],
    members: '70K+',
  },
};

export default function GroupDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const group = groupsData[slug];

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Flag className="h-16 w-16 text-zinc-700 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Group Not Found</h1>
          <p className="text-zinc-400 mb-6">The group you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/ultras">
            <Button>Back to Ultras World</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950">
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href="/ultras"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ultras World
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-zinc-400 mb-4">
              <MapPin className="h-4 w-4" />
              <span>{group.city}, {group.country}</span>
              <span className="mx-2">•</span>
              <Calendar className="h-4 w-4" />
              <span>Founded {group.yearFounded}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {group.name}
            </h1>
            <p className="text-xl text-red-500 mb-6">{group.club}</p>

            <div className="flex flex-wrap gap-4">
              <Button leftIcon={<Heart className="h-4 w-4" />} variant="outline">
                Follow
              </Button>
              <Button leftIcon={<Share2 className="h-4 w-4" />} variant="ghost">
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-red-500" />
                    About
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    {group.description}
                  </p>
                  <h4 className="text-white font-semibold mb-3">History</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    {group.history}
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {group.values.map((value) => (
                      <span
                        key={value}
                        className="px-4 py-2 rounded-lg bg-red-600/10 border border-red-600/20 text-red-400"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-red-500" />
                    Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-zinc-800 flex items-center justify-center"
                      >
                        <ImageIcon className="h-8 w-8 text-zinc-700" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{group.members}</p>
                      <p className="text-sm text-zinc-400">Members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{new Date().getFullYear() - group.yearFounded}</p>
                      <p className="text-sm text-zinc-400">Years Active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Colors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Palette className="h-4 w-4 text-red-500" />
                    Colors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    {group.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Trophy className="h-4 w-4 text-red-500" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {group.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-zinc-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

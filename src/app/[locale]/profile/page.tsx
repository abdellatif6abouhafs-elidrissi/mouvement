'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Edit,
  Camera,
  Heart,
  BookOpen,
  Flag,
  MessageSquare,
  Settings,
  Shield,
  Loader2,
  Save,
  X,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import Input from '@/components/ui/Input';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  location: string;
  image: string;
  favoriteGroups: string[];
  joinedAt: string;
  stats: {
    articles: number;
    comments: number;
    likes: number;
  };
}

export default function ProfilePage() {
  const t = useTranslations('profile');
  const locale = useLocale();
  const { data: session, status } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    bio: '',
    location: '',
    image: '/images/gallery/gallery-1.webp',
    favoriteGroups: [],
    joinedAt: new Date().toISOString(),
    stats: { articles: 0, comments: 0, likes: 0 },
  });
  const [editForm, setEditForm] = useState({
    name: '',
    bio: '',
    location: '',
  });

  useEffect(() => {
    if (session?.user) {
      const userData = {
        name: session.user.name || 'Anonymous',
        email: session.user.email || '',
        bio: 'Ultra culture enthusiast and passionate football supporter.',
        location: 'Casablanca, Morocco',
        image: session.user.image || '/images/gallery/gallery-1.webp',
        favoriteGroups: ['GREEN BOYS 2005', 'Curva Sud Milano'],
        joinedAt: new Date().toISOString(),
        stats: { articles: 0, comments: 12, likes: 45 },
      };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProfile(userData);
      setEditForm({
        name: userData.name,
        bio: userData.bio,
        location: userData.location,
      });
    }
  }, [session]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!session) {
    redirect(`/${locale}/login?callbackUrl=/${locale}/profile`);
  }

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProfile(prev => ({
      ...prev,
      name: editForm.name,
      bio: editForm.bio,
      location: editForm.location,
    }));
    setIsEditing(false);
    setIsSaving(false);
  };

  const stats = [
    { label: 'Articles', value: profile.stats.articles, icon: BookOpen, color: 'text-blue-500' },
    { label: 'Comments', value: profile.stats.comments, icon: MessageSquare, color: 'text-green-500' },
    { label: 'Likes Given', value: profile.stats.likes, icon: Heart, color: 'text-red-500' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-green-600 to-green-800 relative">
              <div className="absolute inset-0 bg-[url('/images/heroes/hero-stadium.webp')] bg-cover bg-center opacity-30" />
            </div>

            {/* Profile Info */}
            <div className="px-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 relative z-10">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl border-4 border-zinc-900 bg-zinc-800 overflow-hidden">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-2 right-2 p-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors">
                    <Camera className="h-4 w-4 text-white" />
                  </button>
                </div>

                {/* Name & Role */}
                <div className="flex-1 sm:pb-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
                    {session.user.role === 'admin' && (
                      <span className="px-2 py-0.5 rounded-full bg-green-600/20 text-green-400 text-xs font-medium flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Admin
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400">{profile.email}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(false)}
                        leftIcon={<X className="h-4 w-4" />}
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleSave}
                        disabled={isSaving}
                        leftIcon={isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                      >
                        {isSaving ? 'Saving...' : 'Save'}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(true)}
                        leftIcon={<Edit className="h-4 w-4" />}
                      >
                        Edit Profile
                      </Button>
                      <Link href={`/${locale}/profile/settings`}>
                        <Button variant="ghost" size="sm" leftIcon={<Settings className="h-4 w-4" />}>
                          Settings
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="mt-6 space-y-4">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                      <Input
                        value={editForm.name}
                        onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                        leftIcon={<User className="h-5 w-5" />}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Bio</label>
                      <textarea
                        value={editForm.bio}
                        onChange={(e) => setEditForm(prev => ({ ...prev, bio: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        rows={3}
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Location</label>
                      <Input
                        value={editForm.location}
                        onChange={(e) => setEditForm(prev => ({ ...prev, location: e.target.value }))}
                        leftIcon={<MapPin className="h-5 w-5" />}
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-zinc-300">{profile.bio}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {profile.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Joined {new Date(profile.joinedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mt-6"
        >
          {stats.map((stat) => (
            <Card key={stat.label} className="p-4 text-center">
              <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Favorite Groups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Flag className="h-5 w-5 text-green-500" />
                Favorite Groups
              </h2>
              <Link href={`/${locale}/ultras`}>
                <Button variant="ghost" size="sm">Browse All</Button>
              </Link>
            </div>

            {profile.favoriteGroups.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {profile.favoriteGroups.map((group) => (
                  <span
                    key={group}
                    className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 text-sm flex items-center gap-2"
                  >
                    <Heart className="h-3 w-3 text-red-500" />
                    {group}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-zinc-500 text-center py-8">
                You haven&apos;t added any favorite groups yet.
              </p>
            )}
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50">
                <div className="p-2 rounded-lg bg-green-600/20">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-white">Commented on &quot;GREEN BOYS 2005: Pioneers&quot;</p>
                  <p className="text-zinc-500 text-sm">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50">
                <div className="p-2 rounded-lg bg-red-600/20">
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="text-white">Liked &quot;Yellow Wall Derby Tifo&quot;</p>
                  <p className="text-zinc-500 text-sm">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50">
                <div className="p-2 rounded-lg bg-blue-600/20">
                  <Flag className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-white">Added Curva Sud Milano to favorites</p>
                  <p className="text-zinc-500 text-sm">3 days ago</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Save,
  Flag,
  MapPin,
  Users,
  Calendar,
  Palette,
  Link as LinkIcon,
  Image,
  FileText,
  Loader2,
  X,
  Plus,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

export default function NewGroupPage() {
  const locale = useLocale();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    club: '',
    city: '',
    country: '',
    countryCode: '',
    yearFounded: '',
    membersEstimate: '',
    stadium: '',
    history: '',
    motto: '',
    colors: [''],
    values: [''],
    logo: '',
    coverImage: '',
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    lat: '',
    lng: '',
  });

  // Auth check
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!session) {
    redirect(`/${locale}/login?callbackUrl=/${locale}/admin/groups/new`);
  }

  if (session.user.role !== 'admin' && session.user.role !== 'moderator') {
    redirect(`/${locale}?error=unauthorized`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field: 'colors' | 'values', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item),
    }));
  };

  const addArrayItem = (field: 'colors' | 'values') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const removeArrayItem = (field: 'colors' | 'values', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          yearFounded: parseInt(formData.yearFounded),
          colors: formData.colors.filter(c => c.trim()),
          values: formData.values.filter(v => v.trim()),
          coordinates: formData.lat && formData.lng ? {
            lat: parseFloat(formData.lat),
            lng: parseFloat(formData.lng),
          } : undefined,
          socialLinks: {
            facebook: formData.facebook || undefined,
            instagram: formData.instagram || undefined,
            twitter: formData.twitter || undefined,
            youtube: formData.youtube || undefined,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create group');
      }

      router.push(`/${locale}/admin/groups`);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href={`/${locale}/admin/groups`}>
                <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  Back
                </Button>
              </Link>
              <div className="h-6 w-px bg-zinc-800" />
              <h1 className="text-xl font-bold text-white">Add New Group</h1>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              leftIcon={isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            >
              {isSubmitting ? 'Saving...' : 'Save Group'}
            </Button>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-red-600/10 border border-red-600/20 text-red-500"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Flag className="h-5 w-5 text-green-500" />
              Basic Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Group Name *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., GREEN BOYS 2005"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Club *</label>
                <Input
                  name="club"
                  value={formData.club}
                  onChange={handleChange}
                  placeholder="e.g., Raja Casablanca"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">City *</label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  leftIcon={<MapPin className="h-5 w-5" />}
                  placeholder="e.g., Casablanca"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Country *</label>
                <Input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g., Morocco"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Country Code *</label>
                <Input
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  placeholder="e.g., MA"
                  maxLength={2}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Year Founded *</label>
                <Input
                  name="yearFounded"
                  type="number"
                  value={formData.yearFounded}
                  onChange={handleChange}
                  leftIcon={<Calendar className="h-5 w-5" />}
                  placeholder="e.g., 2005"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Members Estimate</label>
                <Input
                  name="membersEstimate"
                  value={formData.membersEstimate}
                  onChange={handleChange}
                  leftIcon={<Users className="h-5 w-5" />}
                  placeholder="e.g., 60K+"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Stadium</label>
                <Input
                  name="stadium"
                  value={formData.stadium}
                  onChange={handleChange}
                  placeholder="e.g., Stade Mohammed V"
                />
              </div>
            </div>
          </Card>

          {/* History & Description */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-500" />
              History & Description
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">History *</label>
                <textarea
                  name="history"
                  value={formData.history}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  rows={6}
                  placeholder="Write the group's history..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Motto</label>
                <Input
                  name="motto"
                  value={formData.motto}
                  onChange={handleChange}
                  placeholder="e.g., Verdi per sempre"
                />
              </div>
            </div>
          </Card>

          {/* Colors & Values */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Palette className="h-5 w-5 text-green-500" />
              Colors & Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Colors</label>
                <div className="space-y-2">
                  {formData.colors.map((color, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={color}
                        onChange={(e) => handleArrayChange('colors', index, e.target.value)}
                        placeholder="e.g., Green"
                      />
                      {formData.colors.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('colors', index)}
                          className="p-2 rounded-lg bg-zinc-800 hover:bg-red-600/20 text-zinc-400 hover:text-red-500 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('colors')}
                    className="flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Add Color
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Values</label>
                <div className="space-y-2">
                  {formData.values.map((value, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={value}
                        onChange={(e) => handleArrayChange('values', index, e.target.value)}
                        placeholder="e.g., Passion"
                      />
                      {formData.values.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('values', index)}
                          className="p-2 rounded-lg bg-zinc-800 hover:bg-red-600/20 text-zinc-400 hover:text-red-500 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('values')}
                    className="flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Add Value
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Images */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Image className="h-5 w-5 text-green-500" />
              Images
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Logo URL</label>
                <Input
                  name="logo"
                  value={formData.logo}
                  onChange={handleChange}
                  placeholder="/images/groups/group-logo.webp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Cover Image URL</label>
                <Input
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  placeholder="/images/heroes/hero-1.webp"
                />
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-green-500" />
              Social Links
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Facebook</label>
                <Input
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="https://facebook.com/..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Instagram</label>
                <Input
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com/..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Twitter</label>
                <Input
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="https://twitter.com/..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">YouTube</label>
                <Input
                  name="youtube"
                  value={formData.youtube}
                  onChange={handleChange}
                  placeholder="https://youtube.com/..."
                />
              </div>
            </div>
          </Card>

          {/* Location */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-500" />
              Map Coordinates
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Latitude</label>
                <Input
                  name="lat"
                  type="number"
                  step="any"
                  value={formData.lat}
                  onChange={handleChange}
                  placeholder="e.g., 33.5731"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Longitude</label>
                <Input
                  name="lng"
                  type="number"
                  step="any"
                  value={formData.lng}
                  onChange={handleChange}
                  placeholder="e.g., -7.5898"
                />
              </div>
            </div>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Link href={`/${locale}/admin/groups`}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button
              type="submit"
              disabled={isSubmitting}
              leftIcon={isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            >
              {isSubmitting ? 'Saving...' : 'Save Group'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

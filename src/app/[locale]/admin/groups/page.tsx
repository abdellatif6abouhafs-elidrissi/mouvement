'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Flag,
  MapPin,
  Users,
  Calendar,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

const mockGroups = [
  {
    id: '1',
    name: 'GREEN BOYS 2005',
    slug: 'green-boys-2005',
    club: 'Raja Casablanca',
    country: 'Morocco',
    yearFounded: 2005,
    members: '60K+',
    status: 'verified',
    views: 125000,
    image: '/images/groups/green-boys-2005.webp',
  },
  {
    id: '2',
    name: 'Curva Sud Milano',
    slug: 'curva-sud-milano',
    club: 'AC Milan',
    country: 'Italy',
    yearFounded: 1968,
    members: '100K+',
    status: 'verified',
    views: 98000,
    image: '/images/groups/curva-sud-milano.webp',
  },
  {
    id: '3',
    name: 'Yellow Wall',
    slug: 'yellow-wall',
    club: 'Borussia Dortmund',
    country: 'Germany',
    yearFounded: 1974,
    members: '80K+',
    status: 'verified',
    views: 87000,
    image: '/images/groups/yellow-wall.webp',
  },
  {
    id: '4',
    name: 'New Submission',
    slug: 'new-submission',
    club: 'Test FC',
    country: 'Spain',
    yearFounded: 2020,
    members: '5K+',
    status: 'pending',
    views: 1200,
    image: '/images/gallery/gallery-1.webp',
  },
];

export default function AdminGroupsPage() {
  const locale = useLocale();
  const { data: session, status } = useSession();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'verified' | 'pending'>('all');
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  // Auth check
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!session) {
    redirect(`/${locale}/login?callbackUrl=/${locale}/admin/groups`);
  }

  if (session.user.role !== 'admin' && session.user.role !== 'moderator') {
    redirect(`/${locale}?error=unauthorized`);
  }

  const filteredGroups = mockGroups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.club.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || group.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleSelect = (id: string) => {
    setSelectedGroups((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedGroups.length === filteredGroups.length) {
      setSelectedGroups([]);
    } else {
      setSelectedGroups(filteredGroups.map((g) => g.id));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href={`/${locale}/admin`}>
                <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                  Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-zinc-800" />
              <h1 className="text-xl font-bold text-white">Manage Groups</h1>
            </div>
            <Link href={`/${locale}/admin/groups/new`}>
              <Button leftIcon={<Plus className="h-4 w-4" />}>Add Group</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search groups..."
              leftIcon={<Search className="h-5 w-5" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {['all', 'verified', 'pending'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status as typeof statusFilter)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                  statusFilter === status
                    ? 'bg-green-600 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedGroups.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 p-4 mb-6 rounded-lg bg-zinc-800 border border-zinc-700"
          >
            <span className="text-white">{selectedGroups.length} selected</span>
            <div className="flex gap-2 ml-auto">
              <Button variant="outline" size="sm" leftIcon={<CheckCircle className="h-4 w-4" />}>
                Verify
              </Button>
              <Button variant="outline" size="sm" leftIcon={<Trash2 className="h-4 w-4 text-red-400" />}>
                Delete
              </Button>
            </div>
          </motion.div>
        )}

        {/* Groups Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800/50">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedGroups.length === filteredGroups.length}
                      onChange={toggleSelectAll}
                      className="rounded border-zinc-700 bg-zinc-800 text-green-600 focus:ring-green-500"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Group</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Club</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Country</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Members</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Views</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-zinc-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {filteredGroups.map((group) => (
                  <tr key={group.id} className="hover:bg-zinc-800/50 transition-colors">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedGroups.includes(group.id)}
                        onChange={() => toggleSelect(group.id)}
                        className="rounded border-zinc-700 bg-zinc-800 text-green-600 focus:ring-green-500"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-zinc-800 overflow-hidden">
                          <img
                            src={group.image}
                            alt={group.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white font-medium">{group.name}</p>
                          <p className="text-zinc-500 text-sm flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Founded {group.yearFounded}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-zinc-300">{group.club}</td>
                    <td className="px-4 py-4">
                      <span className="flex items-center gap-1 text-zinc-300">
                        <MapPin className="h-4 w-4 text-zinc-500" />
                        {group.country}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="flex items-center gap-1 text-zinc-300">
                        <Users className="h-4 w-4 text-zinc-500" />
                        {group.members}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          group.status === 'verified'
                            ? 'bg-green-600/20 text-green-400'
                            : 'bg-yellow-600/20 text-yellow-400'
                        }`}
                      >
                        {group.status === 'verified' ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : (
                          <XCircle className="h-3 w-3" />
                        )}
                        {group.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="flex items-center gap-1 text-zinc-300">
                        <Eye className="h-4 w-4 text-zinc-500" />
                        {(group.views / 1000).toFixed(1)}K
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/${locale}/ultras/${group.slug}`}>
                          <button className="p-2 rounded-lg hover:bg-zinc-700 transition-colors">
                            <Eye className="h-4 w-4 text-zinc-400" />
                          </button>
                        </Link>
                        <Link href={`/${locale}/admin/groups/${group.slug}/edit`}>
                          <button className="p-2 rounded-lg hover:bg-zinc-700 transition-colors">
                            <Edit className="h-4 w-4 text-zinc-400" />
                          </button>
                        </Link>
                        <button className="p-2 rounded-lg hover:bg-zinc-700 transition-colors">
                          <Trash2 className="h-4 w-4 text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-4 border-t border-zinc-800">
            <p className="text-zinc-400 text-sm">
              Showing {filteredGroups.length} of {mockGroups.length} groups
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

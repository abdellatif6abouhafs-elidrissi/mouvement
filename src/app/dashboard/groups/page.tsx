'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Flag,
  MapPin,
  Calendar,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
const groups = [
  {
    id: '1',
    name: 'Ultras Eagles',
    slug: 'ultras-eagles',
    club: 'Raja Casablanca',
    country: 'Morocco',
    yearFounded: 2005,
    status: 'published',
    views: 45200,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Winners',
    slug: 'winners',
    club: 'Wydad AC',
    country: 'Morocco',
    yearFounded: 2005,
    status: 'published',
    views: 28400,
    createdAt: '2024-01-14',
  },
  {
    id: '3',
    name: 'Curva Sud Milano',
    slug: 'curva-sud-milano',
    club: 'AC Milan',
    country: 'Italy',
    yearFounded: 1968,
    status: 'published',
    views: 38900,
    createdAt: '2024-01-12',
  },
  {
    id: '4',
    name: 'Yellow Wall',
    slug: 'yellow-wall',
    club: 'Borussia Dortmund',
    country: 'Germany',
    yearFounded: 1974,
    status: 'draft',
    views: 0,
    createdAt: '2024-01-10',
  },
  {
    id: '5',
    name: 'La Doce',
    slug: 'la-doce',
    club: 'Boca Juniors',
    country: 'Argentina',
    yearFounded: 1925,
    status: 'pending',
    views: 0,
    createdAt: '2024-01-08',
  },
];
export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const filteredGroups = groups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.club.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === 'all' || group.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-600/10 text-green-500 border-green-600/20';
      case 'pending':
        return 'bg-yellow-600/10 text-yellow-500 border-yellow-600/20';
      case 'draft':
        return 'bg-zinc-600/10 text-zinc-400 border-zinc-600/20';
      default:
        return 'bg-zinc-600/10 text-zinc-400 border-zinc-600/20';
    }
  };
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Ultra Groups</h1>
          <p className="text-zinc-400 mt-1">
            Manage all Ultra groups in the database
          </p>
        </div>
        <Link href="/dashboard/groups/new">
          <Button leftIcon={<Plus className="h-4 w-4" />}>Add Group</Button>
        </Link>
      </div>
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search groups..."
                leftIcon={<Search className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {['all', 'published', 'pending', 'draft'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                    selectedStatus === status
                      ? 'bg-red-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Groups Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Group
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Founded
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {filteredGroups.map((group, index) => (
                  <motion.tr
                    key={group.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-zinc-800/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                          <Flag className="h-5 w-5 text-zinc-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{group.name}</p>
                          <p className="text-sm text-zinc-400">{group.club}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-zinc-400">
                        <MapPin className="h-4 w-4" />
                        <span>{group.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-zinc-400">
                        <Calendar className="h-4 w-4" />
                        <span>{group.yearFounded}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border capitalize ${getStatusColor(
                          group.status
                        )}`}
                      >
                        {group.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">
                      {group.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/ultras/${group.slug}`}>
                          <button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                        </Link>
                        <Link href={`/dashboard/groups/${group.id}/edit`}>
                          <button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                        </Link>
                        <button className="p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-600/10 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredGroups.length === 0 && (
            <div className="text-center py-12">
              <Flag className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-400">No groups found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

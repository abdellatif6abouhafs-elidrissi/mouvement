'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Edit,
  Trash2,
  Users,
  Mail,
  Shield,
  MoreVertical,
  UserPlus,
  Ban,
  CheckCircle,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card, { CardContent } from '@/components/ui/Card';

const users = [
  {
    id: '1',
    name: 'Ahmed Benali',
    email: 'ahmed@example.com',
    role: 'admin',
    status: 'active',
    articles: 12,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sofia Martinez',
    email: 'sofia@example.com',
    role: 'contributor',
    status: 'active',
    articles: 28,
    createdAt: '2024-01-10',
  },
  {
    id: '3',
    name: 'Marco Rossi',
    email: 'marco@example.com',
    role: 'contributor',
    status: 'active',
    articles: 15,
    createdAt: '2024-01-08',
  },
  {
    id: '4',
    name: 'Yuki Tanaka',
    email: 'yuki@example.com',
    role: 'user',
    status: 'active',
    articles: 0,
    createdAt: '2024-01-05',
  },
  {
    id: '5',
    name: 'Hans Müller',
    email: 'hans@example.com',
    role: 'contributor',
    status: 'suspended',
    articles: 8,
    createdAt: '2024-01-01',
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-600/10 text-red-500 border-red-600/20';
      case 'contributor':
        return 'bg-blue-600/10 text-blue-400 border-blue-600/20';
      case 'user':
        return 'bg-zinc-600/10 text-zinc-400 border-zinc-600/20';
      default:
        return 'bg-zinc-600/10 text-zinc-400 border-zinc-600/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'suspended':
        return 'text-red-500';
      default:
        return 'text-zinc-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Users</h1>
          <p className="text-zinc-400 mt-1">
            Manage user accounts and permissions
          </p>
        </div>
        <Button leftIcon={<UserPlus className="h-4 w-4" />}>Invite User</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
              <Users className="h-5 w-5 text-zinc-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {users.length}
              </p>
              <p className="text-xs text-zinc-400">Total Users</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {users.filter((u) => u.role === 'admin').length}
              </p>
              <p className="text-xs text-zinc-400">Admins</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
              <Edit className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {users.filter((u) => u.role === 'contributor').length}
              </p>
              <p className="text-xs text-zinc-400">Contributors</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {users.filter((u) => u.status === 'active').length}
              </p>
              <p className="text-xs text-zinc-400">Active</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search users..."
                leftIcon={<Search className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {['all', 'admin', 'contributor', 'user'].map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                    selectedRole === role
                      ? 'bg-red-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {role === 'all' ? 'All Roles' : role}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Articles
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-zinc-800/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                          <span className="text-white font-medium">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-sm text-zinc-500 flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border capitalize ${getRoleColor(
                          user.role
                        )}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`flex items-center gap-1 text-sm capitalize ${getStatusColor(
                          user.status
                        )}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            user.status === 'active'
                              ? 'bg-green-500'
                              : 'bg-red-500'
                          }`}
                        />
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{user.articles}</td>
                    <td className="px-6 py-4 text-zinc-400">{user.createdAt}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg text-zinc-400 hover:text-yellow-500 hover:bg-yellow-600/10 transition-colors">
                          <Ban className="h-4 w-4" />
                        </button>
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

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-400">No users found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

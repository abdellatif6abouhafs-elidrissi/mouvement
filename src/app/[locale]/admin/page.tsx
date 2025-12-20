'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  FileText,
  Flag,
  Palette,
  Music,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Eye,
  Heart,
  Clock,
  Plus,
  ArrowUpRight,
  Settings,
  Bell,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const stats = [
  { label: 'Total Groups', value: '156', change: '+12%', icon: Flag, color: 'text-green-500' },
  { label: 'Published Articles', value: '324', change: '+8%', icon: FileText, color: 'text-blue-500' },
  { label: 'Active Users', value: '12.5K', change: '+23%', icon: Users, color: 'text-purple-500' },
  { label: 'Total Views', value: '1.2M', change: '+45%', icon: Eye, color: 'text-orange-500' },
];

const recentActivity = [
  { type: 'article', title: 'New article published', user: 'Ahmed K.', time: '2 hours ago' },
  { type: 'group', title: 'Group verified', user: 'Admin', time: '4 hours ago' },
  { type: 'user', title: 'New user registered', user: 'System', time: '5 hours ago' },
  { type: 'comment', title: 'Comment moderated', user: 'Moderator', time: '6 hours ago' },
  { type: 'tifo', title: 'Tifo submission', user: 'Marco R.', time: '1 day ago' },
];

const quickActions = [
  { label: 'Add Group', href: '/admin/groups/new', icon: Flag, color: 'bg-green-600' },
  { label: 'Write Article', href: '/admin/articles/new', icon: FileText, color: 'bg-blue-600' },
  { label: 'Manage Users', href: '/admin/users', icon: Users, color: 'bg-purple-600' },
  { label: 'Settings', href: '/admin/settings', icon: Settings, color: 'bg-zinc-600' },
];

export default function AdminDashboard() {
  const locale = useLocale();
  const { data: session, status } = useSession();

  // Redirect if not admin
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  // For demo purposes, allow access without session check
  // In production, uncomment the following:
  // if (!session || session.user.role !== 'admin') {
  //   redirect(`/${locale}/login`);
  // }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <LayoutDashboard className="h-6 w-6 text-green-500" />
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors">
                <Bell className="h-5 w-5 text-zinc-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              </button>
              <Link href={`/${locale}`}>
                <Button variant="outline" size="sm">
                  View Site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome back, {session?.user?.name || 'Admin'}
          </h2>
          <p className="text-zinc-400">Here&apos;s what&apos;s happening with MOUVEMENT today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-zinc-800 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="flex items-center gap-1 text-sm text-green-500">
                    <TrendingUp className="h-4 w-4" />
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    href={`/${locale}${action.href}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group"
                  >
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium flex-1">{action.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/50"
                  >
                    <div className="p-2 rounded-lg bg-zinc-700">
                      {activity.type === 'article' && <FileText className="h-4 w-4 text-blue-400" />}
                      {activity.type === 'group' && <Flag className="h-4 w-4 text-green-400" />}
                      {activity.type === 'user' && <Users className="h-4 w-4 text-purple-400" />}
                      {activity.type === 'comment' && <MessageSquare className="h-4 w-4 text-orange-400" />}
                      {activity.type === 'tifo' && <Palette className="h-4 w-4 text-pink-400" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.title}</p>
                      <p className="text-zinc-500 text-sm">by {activity.user}</p>
                    </div>
                    <span className="text-zinc-500 text-sm flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Content Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Content Management</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Groups', count: 156, pending: 12, icon: Flag, href: '/admin/groups', color: 'border-green-600' },
              { label: 'Articles', count: 324, pending: 8, icon: FileText, href: '/admin/articles', color: 'border-blue-600' },
              { label: 'Tifos', count: 892, pending: 23, icon: Palette, href: '/admin/tifos', color: 'border-pink-600' },
              { label: 'Chants', count: 156, pending: 5, icon: Music, href: '/admin/chants', color: 'border-purple-600' },
            ].map((item) => (
              <Link key={item.label} href={`/${locale}${item.href}`}>
                <Card hoverable className={`p-6 border-l-4 ${item.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="h-8 w-8 text-zinc-400" />
                    <Button variant="ghost" size="sm" leftIcon={<Plus className="h-4 w-4" />}>
                      Add
                    </Button>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">{item.count}</h4>
                  <p className="text-zinc-400">{item.label}</p>
                  {item.pending > 0 && (
                    <p className="text-sm text-orange-400 mt-2">
                      {item.pending} pending review
                    </p>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 grid lg:grid-cols-2 gap-8"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Traffic Overview</h3>
              <select className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-64 flex items-center justify-center bg-zinc-800/50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-zinc-600 mx-auto mb-3" />
                <p className="text-zinc-500">Chart visualization coming soon</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Top Performing Content</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'GREEN BOYS 2005: Pioneers', views: '15.2K', likes: '2.3K', type: 'article' },
                { title: 'Yellow Wall Derby Tifo', views: '12.8K', likes: '1.9K', type: 'tifo' },
                { title: 'Curva Sud Milano', views: '10.5K', likes: '1.6K', type: 'group' },
                { title: 'History of Barra Bravas', views: '9.2K', likes: '1.4K', type: 'article' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                  <span className="text-2xl font-bold text-zinc-600">#{index + 1}</span>
                  <div className="flex-1">
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-zinc-500 text-sm capitalize">{item.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white flex items-center gap-1">
                      <Eye className="h-4 w-4 text-zinc-400" />
                      {item.views}
                    </p>
                    <p className="text-zinc-400 flex items-center gap-1 text-sm">
                      <Heart className="h-3 w-3" />
                      {item.likes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}

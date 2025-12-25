'use client';

import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import {
  Users,
  FileText,
  Flag,
  Eye,
  TrendingUp,
  Clock,
  Plus,
  ArrowUpRight,
  Palette,
  Music,
  MessageSquare,
  Heart,
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const stats = [
  { label: 'Total Groups', value: '156', change: '+12%', icon: Flag, color: 'text-green-500', bgColor: 'bg-green-500/10' },
  { label: 'Published Articles', value: '324', change: '+8%', icon: FileText, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { label: 'Active Users', value: '12.5K', change: '+23%', icon: Users, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  { label: 'Total Views', value: '1.2M', change: '+45%', icon: Eye, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
];

const trafficData = [
  { name: 'Mon', views: 4000, users: 2400 },
  { name: 'Tue', views: 3000, users: 1398 },
  { name: 'Wed', views: 2000, users: 9800 },
  { name: 'Thu', views: 2780, users: 3908 },
  { name: 'Fri', views: 1890, users: 4800 },
  { name: 'Sat', views: 2390, users: 3800 },
  { name: 'Sun', views: 3490, users: 4300 },
];

const contentData = [
  { name: 'Groups', value: 156, color: '#22c55e' },
  { name: 'Articles', value: 324, color: '#3b82f6' },
  { name: 'Tifos', value: 892, color: '#ec4899' },
  { name: 'Chants', value: 156, color: '#a855f7' },
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
];

export default function AdminDashboard() {
  const locale = useLocale();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!session) {
    redirect(`/${locale}/login?callbackUrl=/${locale}/admin`);
  }

  if (session.user.role !== 'admin' && session.user.role !== 'moderator') {
    redirect(`/${locale}?error=unauthorized`);
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-bold text-white mb-2">
          Welcome back, {session?.user?.name || 'Admin'}
        </h2>
        <p className="text-zinc-400">Here's what's happening with MOUVEMENT today.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
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

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-6">Traffic Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="name" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                  labelStyle={{ color: '#fafafa' }}
                />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#22c55e" strokeWidth={2} />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Content Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-6">Content Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={contentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {contentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
          transition={{ delay: 0.7 }}
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
    </div>
  );
}

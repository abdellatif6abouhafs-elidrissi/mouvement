'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Flag,
  BookOpen,
  MessageSquare,
  TrendingUp,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const stats = [
  {
    name: 'Total Groups',
    value: '156',
    change: '+12',
    trend: 'up',
    icon: Flag,
  },
  {
    name: 'Articles',
    value: '1,024',
    change: '+48',
    trend: 'up',
    icon: BookOpen,
  },
  {
    name: 'Users',
    value: '12,847',
    change: '+156',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Comments',
    value: '8,492',
    change: '-23',
    trend: 'down',
    icon: MessageSquare,
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'article',
    title: 'New article submitted',
    description: 'The Art of Tifo: A Visual Revolution',
    user: 'Ahmed B.',
    time: '5 min ago',
  },
  {
    id: 2,
    type: 'group',
    title: 'Group updated',
    description: 'Ultras Eagles - New tifo images added',
    user: 'Admin',
    time: '12 min ago',
  },
  {
    id: 3,
    type: 'comment',
    title: 'Comment pending review',
    description: 'On: The History of Curva Sud',
    user: 'Marco R.',
    time: '25 min ago',
  },
  {
    id: 4,
    type: 'user',
    title: 'New user registered',
    description: 'yuki.tanaka@email.com',
    user: 'System',
    time: '1 hour ago',
  },
  {
    id: 5,
    type: 'article',
    title: 'Article published',
    description: 'Interview: Leaders of Barra Bravas',
    user: 'Sofia M.',
    time: '2 hours ago',
  },
];

const topGroups = [
  { name: 'Ultras Eagles', views: 45200, country: 'Morocco' },
  { name: 'Curva Sud Milano', views: 38900, country: 'Italy' },
  { name: 'Yellow Wall', views: 35600, country: 'Germany' },
  { name: 'La Doce', views: 32100, country: 'Argentina' },
  { name: 'Winners', views: 28400, country: 'Morocco' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-zinc-400 mt-1">
          Welcome back! Here&apos;s what&apos;s happening with Mouvement.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {stat.change}
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-zinc-400">{stat.name}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-red-500" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-zinc-800">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="px-6 py-4 hover:bg-zinc-800/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-white font-medium">{activity.title}</p>
                        <p className="text-sm text-zinc-400 mt-0.5">
                          {activity.description}
                        </p>
                      </div>
                      <span className="text-xs text-zinc-500">{activity.time}</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-2">by {activity.user}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Groups */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-red-500" />
                Top Groups
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-zinc-800">
                {topGroups.map((group, index) => (
                  <div
                    key={group.name}
                    className="px-6 py-4 flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-white font-medium text-sm">
                          {group.name}
                        </p>
                        <p className="text-xs text-zinc-500">{group.country}</p>
                      </div>
                    </div>
                    <span className="text-sm text-zinc-400">
                      {(group.views / 1000).toFixed(1)}K
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

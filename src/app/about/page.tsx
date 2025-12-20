'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
  Globe,
  Users,
  BookOpen,
  Target,
  Shield,
  Flame,
  ArrowRight,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We celebrate the raw emotion and dedication that defines Ultra culture worldwide.',
  },
  {
    icon: Shield,
    title: 'Preservation',
    description: 'Documenting and protecting the traditions, stories, and art forms of supporter movements.',
  },
  {
    icon: Globe,
    title: 'Unity',
    description: 'Connecting Ultra communities across borders while respecting local identities and rivalries.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Sharing knowledge about the history, culture, and significance of the Ultra movement.',
  },
];

const team = [
  {
    name: 'Ahmed Benali',
    role: 'Founder & Editor',
    bio: 'Former Ultra with 15 years of experience documenting supporter culture.',
  },
  {
    name: 'Sofia Martinez',
    role: 'Head of Content',
    bio: 'Journalist specializing in football culture and grassroots movements.',
  },
  {
    name: 'Marco Rossi',
    role: 'Community Manager',
    bio: 'Connecting Ultra groups and facilitating cultural exchanges.',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Visual Director',
    bio: 'Photographer and filmmaker capturing the beauty of tifo art.',
  },
];

const stats = [
  { value: '500+', label: 'Ultra Groups Documented' },
  { value: '50+', label: 'Countries Covered' },
  { value: '1000+', label: 'Articles Published' },
  { value: '100K+', label: 'Community Members' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-medium mb-8">
              <Flame className="h-4 w-4" />
              Our Story
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Mouvement</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              A cultural platform dedicated to documenting, celebrating, and
              preserving Ultra culture as an artistic, social, and historical
              phenomenon that transcends football.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-medium mb-6">
                <Target className="h-3.5 w-3.5" />
                Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Preserving the Art of{' '}
                <span className="gradient-text">Supporter Culture</span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Mouvement was born from a simple observation: Ultra culture is
                  one of the most significant grassroots movements in modern sports,
                  yet it remains largely undocumented and misunderstood.
                </p>
                <p>
                  From the spectacular tifos of Italian curves to the passionate
                  chants of South American barras bravas, from the organized
                  choreographies of German terraces to the colorful displays of
                  North African ultras – this is a global phenomenon that deserves
                  recognition and preservation.
                </p>
                <p>
                  We believe in capturing these moments, telling these stories, and
                  building bridges between communities united by their love for the
                  beautiful game and the art of support.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              The principles that guide our work and define our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center p-8">
                  <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-7 w-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Passionate individuals dedicated to documenting and celebrating
              Ultra culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverable className="h-full">
                  {/* Avatar placeholder */}
                  <div className="h-48 bg-zinc-800 flex items-center justify-center">
                    <Users className="h-16 w-16 text-zinc-700" />
                  </div>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-red-500 text-sm mb-3">{member.role}</p>
                    <p className="text-zinc-400 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-red-600/20 to-red-600/5 border border-red-600/20 p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join the Movement
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Be part of our global community. Share your stories, connect with
              fellow ultras, and help preserve this beautiful culture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Create Account
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

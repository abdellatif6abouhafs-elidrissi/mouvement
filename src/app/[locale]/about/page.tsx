'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, GraduationCap, Globe, BookOpen } from 'lucide-react';
import Card, { CardContent } from '@/components/ui/Card';

const teamMembers = [
  { name: 'Ahmed K.', role: 'Founder', location: 'Morocco' },
  { name: 'Marco R.', role: 'Content Lead', location: 'Italy' },
  { name: 'Carlos M.', role: 'Community Manager', location: 'Argentina' },
  { name: 'Hans W.', role: 'Technical Lead', location: 'Germany' },
];

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();

  const values = [
    {
      icon: Heart,
      title: t('passion'),
      description: t('passionDesc'),
    },
    {
      icon: Shield,
      title: t('preservation'),
      description: t('preservationDesc'),
    },
    {
      icon: Users,
      title: t('unity'),
      description: t('unityDesc'),
    },
    {
      icon: GraduationCap,
      title: t('educationValue'),
      description: t('educationDesc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{t('mission')}</h2>
            <h3 className="text-2xl font-bold mb-6">
              {t('missionTitle')} <span className="gradient-text">{t('missionHighlight')}</span>
            </h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Mouvement was born from a deep love for Ultra culture and a desire to document,
              preserve, and share this unique form of artistic expression. We believe that Ultra
              culture represents one of the most authentic forms of collective art and community
              in modern society.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '2024', label: 'Founded' },
              { value: '6', label: 'Languages' },
              { value: '50+', label: 'Countries' },
              { value: '100K+', label: 'Community' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-center"
              >
                <div className="text-3xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">{t('values')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-zinc-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">{t('team')}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-red-500 text-sm mb-1">{member.role}</p>
                <p className="text-zinc-500 text-sm">{member.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">{t('ourStory')}</h2>
            <div className="prose prose-invert prose-lg mx-auto">
              <p className="text-zinc-400 leading-relaxed mb-6">
                What started as a personal passion for documenting Ultra culture has evolved into
                a global platform connecting supporters across continents. Our founder, a former
                member of GREEN BOYS 2005, recognized the need for a dedicated space to celebrate
                and preserve the rich heritage of Ultra movements worldwide.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Today, Mouvement serves as a digital museum, educational resource, and community
                hub for Ultra enthusiasts. We work closely with groups from Morocco to Argentina,
                Italy to Indonesia, ensuring authentic representation and cultural respect.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Our commitment is clear: to document without politics, to celebrate without
                violence, and to preserve the artistic and cultural legacy of Ultra movements
                for future generations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

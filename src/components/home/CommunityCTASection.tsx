'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CommunityCTASection() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            {t('joinTitle')} <span className="gradient-text">{t('joinHighlight')}</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            {t('joinSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/register`}>
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                {t('createAccount')}
              </Button>
            </Link>
            <Link href={`/${locale}/about`}>
              <Button variant="outline" size="lg">
                {t('learnMore')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

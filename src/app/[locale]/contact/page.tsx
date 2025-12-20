'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, MessageCircle, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const faqs = [
  {
    question: 'How can I submit my group to the platform?',
    answer: 'Register an account and use our group submission form. Our team will review and verify the information before publishing.',
  },
  {
    question: 'Can I contribute articles or content?',
    answer: 'Yes! We welcome contributions from Ultra community members. Create an account and apply for contributor status.',
  },
  {
    question: 'Is the platform available in my language?',
    answer: 'We currently support 6 languages: Arabic, English, French, Italian, Spanish, and Portuguese (Brazil). More coming soon!',
  },
  {
    question: 'How do you verify group information?',
    answer: 'We work with local contacts and community members to verify all information. Accuracy and authenticity are our priorities.',
  },
];

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

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

      {/* Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{t('email')}</h3>
                    <a href="mailto:contact@mouvement.com" className="text-zinc-400 hover:text-green-500 transition-colors">
                      contact@mouvement.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{t('location')}</h3>
                    <p className="text-zinc-400">{t('worldwide')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{t('social')}</h3>
                    <div className="flex gap-4 mt-2">
                      {['Instagram', 'Twitter', 'YouTube'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-zinc-400 hover:text-green-500 transition-colors"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-green-500" />
                  {t('commonQuestions')}
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full p-4 text-left flex items-center justify-between"
                      >
                        <span className="font-medium text-white">{faq.question}</span>
                        <span className={`text-zinc-400 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 pb-4 text-zinc-400">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t('messageSent')}</h3>
                    <p className="text-zinc-400 mb-6">{t('thankYou')}</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      {t('sendAnother')}
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('sendMessage')}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          {t('yourName')}
                        </label>
                        <Input
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          {t('emailAddress')}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          {t('subject')}
                        </label>
                        <Input
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                          {t('message')}
                        </label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-green-500 resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full" rightIcon={<Send className="h-5 w-5" />}>
                        {t('send')}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

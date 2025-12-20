'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Instagram,
  Twitter,
  Youtube,
  CheckCircle2,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@mouvement.com',
    href: 'mailto:contact@mouvement.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Worldwide Community',
    href: null,
  },
  {
    icon: MessageSquare,
    title: 'Social',
    value: '@mouvement',
    href: '#',
  },
];

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
];

const faqs = [
  {
    question: 'How can I contribute to Mouvement?',
    answer: 'You can contribute by creating an account and submitting articles, sharing photos, or helping document local Ultra groups. Contact us for contributor access.',
  },
  {
    question: 'Can I request to add my Ultra group?',
    answer: 'Yes! We welcome all Ultra groups to be documented. Fill out the contact form with details about your group, and our team will reach out.',
  },
  {
    question: 'Do you offer collaborations for documentary projects?',
    answer: 'We are always open to collaborations with filmmakers, journalists, and researchers interested in Ultra culture. Contact us with your project proposal.',
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-zinc-400">
              Have questions, suggestions, or want to collaborate? We&apos;d love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <p className="text-sm text-zinc-400">{info.title}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-white hover:text-red-500 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-600 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Preview */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-4">
                        <h4 className="text-white font-medium mb-2 text-sm">
                          {faq.question}
                        </h4>
                        <p className="text-zinc-400 text-sm">{faq.answer}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-600/10 border border-green-600/20 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-zinc-400 mb-6">
                          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <Input
                            label="Your Name"
                            placeholder="John Doe"
                            error={errors.name?.message}
                            {...register('name')}
                          />
                          <Input
                            label="Email Address"
                            type="email"
                            placeholder="your@email.com"
                            error={errors.email?.message}
                            {...register('email')}
                          />
                        </div>

                        <Input
                          label="Subject"
                          placeholder="How can we help?"
                          error={errors.subject?.message}
                          {...register('subject')}
                        />

                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-300">
                            Message
                          </label>
                          <textarea
                            placeholder="Tell us more about your inquiry..."
                            rows={6}
                            className={`w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5
                              text-white placeholder:text-zinc-500
                              transition-colors duration-200
                              focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20
                              resize-none
                              ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                            {...register('message')}
                          />
                          {errors.message && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.message.message}
                            </p>
                          )}
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          isLoading={isLoading}
                          rightIcon={<Send className="h-4 w-4" />}
                          className="w-full md:w-auto"
                        >
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

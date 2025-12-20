'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, Loader2, Check, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function RegisterPage() {
  const t = useTranslations('auth');
  const tReq = useTranslations('auth.passwordRequirements');
  const locale = useLocale();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const passwordRequirements = [
    { key: 'length', check: (p: string) => p.length >= 8 },
    { key: 'uppercase', check: (p: string) => /[A-Z]/.test(p) },
    { key: 'lowercase', check: (p: string) => /[a-z]/.test(p) },
    { key: 'number', check: (p: string) => /[0-9]/.test(p) },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!formData.agreeTerms) {
      setError('Please agree to the terms of service');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Registration failed');
      }

      router.push(`/${locale}/login?registered=true`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 mb-8">
            <img src="/logo.svg" alt="Mouvement" className="w-12 h-12" />
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">{t('joinMouvement')}</h1>
          <p className="text-zinc-400">{t('createAccountSubtitle')}</p>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-lg bg-red-600/10 border border-red-600/20 text-red-500 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                {t('fullName')}
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                leftIcon={<User className="h-5 w-5" />}
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                {t('email')}
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                leftIcon={<Mail className="h-5 w-5" />}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                {t('password')}
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  leftIcon={<Lock className="h-5 w-5" />}
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Password Requirements */}
              {formData.password && (
                <div className="mt-3 space-y-2">
                  {passwordRequirements.map((req) => {
                    const passed = req.check(formData.password);
                    return (
                      <div
                        key={req.key}
                        className={`flex items-center gap-2 text-sm ${
                          passed ? 'text-green-500' : 'text-zinc-500'
                        }`}
                      >
                        {passed ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                        {tReq(req.key)}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                {t('confirmPassword')}
              </label>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                leftIcon={<Lock className="h-5 w-5" />}
                placeholder="Confirm your password"
                required
              />
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1 rounded border-zinc-700 bg-zinc-800 text-green-600 focus:ring-green-600"
                />
                <span className="text-sm text-zinc-400">
                  {t('agreeTerms')}{' '}
                  <Link href={`/${locale}/terms`} className="text-green-500 hover:text-green-400">
                    {t('termsOfService')}
                  </Link>{' '}
                  {t('and')}{' '}
                  <Link href={`/${locale}/privacy`} className="text-green-500 hover:text-green-400">
                    {t('privacyPolicy')}
                  </Link>
                </span>
              </label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Creating account...
                </>
              ) : (
                t('createAccount')
              )}
            </Button>
          </form>
        </div>

        {/* Sign In Link */}
        <p className="mt-8 text-center text-zinc-400">
          {t('haveAccount')}{' '}
          <Link href={`/${locale}/login`} className="text-green-500 hover:text-green-400 font-medium">
            {t('signInLink')}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

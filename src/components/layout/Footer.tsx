'use client';

import Link from 'next/link';
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  MapPin,
  Heart
} from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'Ultras World', href: '/ultras' },
    { name: 'Articles', href: '/articles' },
    { name: 'Groups', href: '/groups' },
    { name: 'Interactive Map', href: '/map' },
  ],
  about: [
    { name: 'Our Mission', href: '/about' },
    { name: 'Team', href: '/about#team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Contribute', href: '/contribute' },
  ],
  legal: [
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookies', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'Facebook', href: '#', icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-white">Mouvement</span>
            </Link>
            <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
              A cultural platform dedicated to documenting and celebrating Ultra culture
              as an artistic, social, and historical phenomenon.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              About
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:contact@mouvement.com"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  contact@mouvement.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <MapPin className="h-4 w-4" />
                  Worldwide Community
                </span>
              </li>
            </ul>
            {/* Legal Links */}
            <ul className="mt-6 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Mouvement. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-zinc-500 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for Ultra culture
          </p>
        </div>
      </div>
    </footer>
  );
}

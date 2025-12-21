import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/index.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
  serverExternalPackages: ['mongoose', 'bcryptjs'],
};

export default withNextIntl(nextConfig);

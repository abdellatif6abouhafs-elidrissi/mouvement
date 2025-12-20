import NextAuth from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import { checkRateLimit, rateLimiters, getClientIdentifier } from '@/lib/rate-limit';

const handler = NextAuth(authOptions);

// Wrap POST handler with rate limiting for login attempts
async function rateLimitedPost(request: NextRequest, context: { params: Promise<{ nextauth: string[] }> }) {
  const params = await context.params;
  const action = params.nextauth?.[0];

  // Only rate limit signin/callback actions
  if (action === 'signin' || action === 'callback') {
    const clientId = getClientIdentifier(request);
    const rateLimit = checkRateLimit(`auth:${clientId}`, rateLimiters.auth);

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          }
        }
      );
    }
  }

  return handler(request, context);
}

export { handler as GET, rateLimitedPost as POST };

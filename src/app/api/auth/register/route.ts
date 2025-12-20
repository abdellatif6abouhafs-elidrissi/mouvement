import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import crypto from 'crypto';
import { registerSchema, validateRequest } from '@/lib/validations';
import { checkRateLimit, rateLimiters, getClientIdentifier } from '@/lib/rate-limit';
import { sendVerificationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientId = getClientIdentifier(request);
    const rateLimit = checkRateLimit(`register:${clientId}`, rateLimiters.auth);

    if (!rateLimit.success) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          }
        }
      );
    }

    await connectDB();

    const body = await request.json();

    // Zod Validation
    const validation = validateRequest(registerSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    const { name, email, password, country } = validation.data;

    // Check if user exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      country,
      verificationToken,
      verificationTokenExpiry,
      isVerified: false,
    });

    // Send verification email
    const emailResult = await sendVerificationEmail(user.email, user.name, verificationToken);

    if (!emailResult.success) {
      console.warn('Failed to send verification email:', emailResult.error);
      // Don't fail registration if email fails, user can request new verification email
    }

    return NextResponse.json({
      success: true,
      message: 'Account created. Please check your email to verify your account.',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error('Registration error:', error);

    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || 'Registration failed' },
      { status: 500 }
    );
  }
}

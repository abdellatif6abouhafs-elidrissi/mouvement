import { Resend } from 'resend';

const FROM_EMAIL = process.env.FROM_EMAIL || 'MOUVEMENT <onboarding@resend.dev>';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// Lazy initialization to avoid errors if API key is missing
let resend: Resend | null = null;

function getResend(): Resend | null {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function sendVerificationEmail(
  email: string,
  name: string,
  token: string
): Promise<{ success: boolean; error?: string }> {
  const verificationUrl = `${APP_URL}/api/auth/verify-email?token=${token}`;

  const client = getResend();
  if (!client) {
    console.warn('Resend API key not configured, skipping email');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const { error } = await client.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Verify your MOUVEMENT account',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #09090b; color: #fafafa; margin: 0; padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #18181b; border-radius: 12px; border: 1px solid #27272a; overflow: hidden;">
              <div style="background: linear-gradient(135deg, #16a34a 0%, #84cc16 100%); padding: 30px; text-align: center;">
                <h1 style="margin: 0; color: #000; font-size: 28px; font-weight: bold;">MOUVEMENT</h1>
              </div>
              <div style="padding: 40px 30px;">
                <h2 style="margin: 0 0 20px; color: #fafafa; font-size: 24px;">Welcome, ${name}!</h2>
                <p style="color: #a1a1aa; line-height: 1.6; margin: 0 0 30px;">
                  Thank you for joining MOUVEMENT, the ultimate platform for Ultra football fan culture.
                  Please verify your email address to complete your registration.
                </p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${verificationUrl}"
                     style="display: inline-block; background: linear-gradient(135deg, #16a34a 0%, #84cc16 100%);
                            color: #000; text-decoration: none; padding: 14px 40px; border-radius: 8px;
                            font-weight: bold; font-size: 16px;">
                    Verify Email
                  </a>
                </div>
                <p style="color: #71717a; font-size: 14px; line-height: 1.6; margin: 30px 0 0;">
                  Or copy and paste this link into your browser:<br>
                  <a href="${verificationUrl}" style="color: #22c55e; word-break: break-all;">${verificationUrl}</a>
                </p>
                <p style="color: #71717a; font-size: 14px; line-height: 1.6; margin: 30px 0 0;">
                  This link will expire in 24 hours.
                </p>
              </div>
              <div style="background-color: #0a0a0a; padding: 20px 30px; text-align: center; border-top: 1px solid #27272a;">
                <p style="color: #52525b; font-size: 12px; margin: 0;">
                  If you didn't create an account with MOUVEMENT, you can safely ignore this email.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Email send error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Email service error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

export async function sendPasswordResetEmail(
  email: string,
  name: string,
  token: string
): Promise<{ success: boolean; error?: string }> {
  const resetUrl = `${APP_URL}/reset-password?token=${token}`;

  const client = getResend();
  if (!client) {
    console.warn('Resend API key not configured, skipping email');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const { error } = await client.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Reset your MOUVEMENT password',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #09090b; color: #fafafa; margin: 0; padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #18181b; border-radius: 12px; border: 1px solid #27272a; overflow: hidden;">
              <div style="background: linear-gradient(135deg, #16a34a 0%, #84cc16 100%); padding: 30px; text-align: center;">
                <h1 style="margin: 0; color: #000; font-size: 28px; font-weight: bold;">MOUVEMENT</h1>
              </div>
              <div style="padding: 40px 30px;">
                <h2 style="margin: 0 0 20px; color: #fafafa; font-size: 24px;">Password Reset Request</h2>
                <p style="color: #a1a1aa; line-height: 1.6; margin: 0 0 30px;">
                  Hi ${name}, we received a request to reset your password. Click the button below to create a new password.
                </p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${resetUrl}"
                     style="display: inline-block; background: linear-gradient(135deg, #16a34a 0%, #84cc16 100%);
                            color: #000; text-decoration: none; padding: 14px 40px; border-radius: 8px;
                            font-weight: bold; font-size: 16px;">
                    Reset Password
                  </a>
                </div>
                <p style="color: #71717a; font-size: 14px; line-height: 1.6; margin: 30px 0 0;">
                  This link will expire in 1 hour.
                </p>
              </div>
              <div style="background-color: #0a0a0a; padding: 20px 30px; text-align: center; border-top: 1px solid #27272a;">
                <p style="color: #52525b; font-size: 12px; margin: 0;">
                  If you didn't request a password reset, you can safely ignore this email.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Email send error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Email service error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

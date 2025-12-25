'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function SetupPage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const createAdmin = async () => {
        setStatus('loading');
        try {
            const res = await fetch('/api/init-admin', { method: 'POST' });
            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage(`Admin created! Email: ${data.credentials.email}, Password: ${data.credentials.password}`);
            } else {
                setStatus('error');
                setMessage(data.error || 'Failed to create admin');
            }
        } catch (error: any) {
            setStatus('error');
            setMessage(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
            <Card className="max-w-md w-full p-8">
                <h1 className="text-2xl font-bold text-white mb-4">Setup Admin User</h1>
                <p className="text-zinc-400 mb-6">
                    Click the button below to create the admin user for the platform.
                </p>

                <Button
                    onClick={createAdmin}
                    disabled={status === 'loading'}
                    className="w-full mb-4"
                >
                    {status === 'loading' ? 'Creating...' : 'Create Admin User'}
                </Button>

                {message && (
                    <div className={`p-4 rounded-lg ${status === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                        }`}>
                        {message}
                    </div>
                )}

                {status === 'success' && (
                    <div className="mt-4 p-4 bg-zinc-800 rounded-lg">
                        <p className="text-white font-semibold mb-2">Login Credentials:</p>
                        <p className="text-zinc-300 text-sm">Email: admin@mouvement.com</p>
                        <p className="text-zinc-300 text-sm">Password: admin123</p>
                        <a href="/fr/login" className="text-green-500 hover:underline text-sm mt-2 block">
                            Go to Login →
                        </a>
                    </div>
                )}
            </Card>
        </div>
    );
}

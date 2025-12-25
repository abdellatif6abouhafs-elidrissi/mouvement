'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Save, Globe, Shield, Share2, Search, RefreshCw, Bell } from 'lucide-react';

export default function SettingsClient() {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General', icon: Globe },
        { id: 'seo', label: 'SEO & Meta', icon: Search },
        { id: 'social', label: 'Social Media', icon: Share2 },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Settings</h1>
                    <p className="text-zinc-400 text-sm">Manage your platform configuration and site-wide preferences.</p>
                </div>
                <Button leftIcon={<Save className="w-4 h-4" />}>Save Changes</Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Tabs */}
                <aside className="lg:w-64 space-y-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id
                                        ? 'bg-green-600/10 text-green-500 border border-green-500/20'
                                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </aside>

                {/* Settings Content */}
                <div className="flex-1 space-y-6">
                    {activeTab === 'general' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Site Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-400">Site Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-green-500"
                                            defaultValue="MOUVEMENT"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-zinc-400">Site URL</label>
                                        <input
                                            type="text"
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-green-500"
                                            defaultValue="https://mouvement-liart.vercel.app"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-400">Maintenance Mode</label>
                                    <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                                        <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-green-600 focus:ring-green-600 focus:ring-offset-zinc-900" />
                                        <div>
                                            <p className="text-sm text-white font-medium">Enable Maintenance Mode</p>
                                            <p className="text-xs text-zinc-500">Only administrators will be able to access the site.</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === 'seo' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>SEO Configuration</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-400">Meta Title</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-green-500"
                                        placeholder="MOUVEMENT - Ultra Culture Platform"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-400">Meta Description</label>
                                    <textarea
                                        className="w-full h-24 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-green-500 resize-none"
                                        placeholder="The ultimate platform for Ultra culture, groups, tifo gallery, and chants history."
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>System Actions</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                                                <RefreshCw className="w-5 h-5 text-blue-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white font-medium">Clear System Cache</p>
                                                <p className="text-xs text-zinc-500">Purge all cached data, images, and API responses.</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm">Purge Cache</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="flex items-center gap-2 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                        <AlertCircle className="w-5 h-5 text-orange-500 shrink-0" />
                        <p className="text-xs text-orange-200/80">Settings are currently for demonstration. Integration with backend storage is pending API finalization.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AlertCircle(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    );
}

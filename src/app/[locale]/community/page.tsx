import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import {
  Users,
  MessageCircle,
  TrendingUp,
  FileText,
  ChevronRight,
  PenSquare,
  Clock,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

const BASE_URL = 'https://mouvement-liart.vercel.app';

async function fetchGroups() {
  try {
    const res = await fetch(`${BASE_URL}/api/groups?limit=6&sort=views`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const data = await res.json();
      return data.groups || [];
    }
  } catch (error) {
    console.error('Failed to fetch groups:', error);
  }
  return [];
}

async function fetchArticles() {
  try {
    const res = await fetch(`${BASE_URL}/api/articles?limit=3&status=published`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const data = await res.json();
      return data.articles || [];
    }
  } catch (error) {
    console.error('Failed to fetch articles:', error);
  }
  return [];
}

async function fetchComments() {
  try {
    const res = await fetch(`${BASE_URL}/api/comments?limit=5`, {
      next: { revalidate: 1800 }
    });
    if (res.ok) {
      const data = await res.json();
      return data.comments || [];
    }
  } catch (error) {
    console.error('Failed to fetch comments:', error);
  }
  return [];
}

export default async function CommunityPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('community');
  const [groups, articles, comments] = await Promise.all([
    fetchGroups(),
    fetchArticles(),
    fetchComments()
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-500 text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Community Hub
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Connect with the Global Ultra Community
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            Discover stories, discussions, and insights from Ultra groups around the world
          </p>
          <Link href={`/${locale}/community/submit`}>
            <Button leftIcon={<PenSquare className="h-5 w-5" />}>
              Share Your Story
            </Button>
          </Link>
        </div>
      </section>

      {/* Most Viewed Groups */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold text-white">Trending Ultra Groups This Week</h2>
          </div>

          {groups.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group: any) => (
                <Link key={group._id} href={`/${locale}/ultras/${group.slug}`}>
                  <Card hoverable className="h-full group">
                    <CardContent>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-green-500 transition-colors">
                            {group.name}
                          </h3>
                          <p className="text-sm text-zinc-500 mt-1">
                            {group.club} • {group.country}
                          </p>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{group.description || 'No description'}</p>
                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {group.members || 0} members
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {group.views || 0} views
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-zinc-400">
              <Users className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
              <p>No groups available at the moment</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href={`/${locale}/ultras`}>
              <Button variant="outline" rightIcon={<ChevronRight className="h-4 w-4" />}>
                View All Groups
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
          </div>

          {articles.length > 0 ? (
            <div className="grid gap-6">
              {articles.map((article: any) => (
                <Link key={article._id} href={`/${locale}/articles/${article.slug}`}>
                  <Card hoverable className="group">
                    <CardContent>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white group-hover:text-green-500 transition-colors mb-2">
                            {article.title}
                          </h3>
                          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                            {article.excerpt || article.content?.substring(0, 100)}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-zinc-500">
                            {article.category && (
                              <span className="px-2 py-1 rounded-full bg-green-600/10 text-green-500">
                                {article.category}
                              </span>
                            )}
                            {article.createdAt && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {new Date(article.createdAt).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-zinc-400">
              <FileText className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
              <p>No articles available at the moment</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href={`/${locale}/articles`}>
              <Button variant="outline" rightIcon={<ChevronRight className="h-4 w-4" />}>
                Read More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Discussions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold text-white">Latest Discussions</h2>
          </div>

          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment: any) => (
                <div
                  key={comment._id}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-green-600/30 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {comment.author?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white">
                        {comment.author || 'Anonymous'}
                      </p>
                      <p className="text-sm text-zinc-500">
                        {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : 'Recently'}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-300 line-clamp-2">{comment.content || comment.text || ''}</p>
                  {(comment.likes || 0) > 0 && (
                    <div className="mt-2 text-xs text-zinc-500 flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {comment.likes} people liked this
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-zinc-400">
              <MessageCircle className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
              <p>No discussions yet. Start the conversation!</p>
            </div>
          )}
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-green-600/20 to-zinc-900 border border-green-600/30">
            <Users className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the Global Ultra Community
            </h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              Share your stories, connect with other Ultra groups, and celebrate the culture that unites us all.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}/register`}>
                <Button size="lg">Join Now</Button>
              </Link>
              <Link href={`/${locale}/about`}>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

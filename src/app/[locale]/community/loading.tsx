export default function CommunityLoading() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section Skeleton */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 animate-pulse">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="h-12 bg-zinc-800 rounded w-1/3 mx-auto animate-pulse" />
            <div className="h-16 bg-zinc-800 rounded w-2/3 mx-auto animate-pulse" />
            <div className="h-6 bg-zinc-800 rounded w-1/2 mx-auto animate-pulse" />
            <div className="h-10 bg-zinc-800 rounded w-32 mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-8">
            <div className="h-8 bg-zinc-800 rounded w-1/3 animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-3 bg-zinc-900 p-4 rounded-lg">
                <div className="h-6 bg-zinc-800 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-zinc-800 rounded w-full animate-pulse" />
                <div className="h-4 bg-zinc-800 rounded w-2/3 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Sections Skeleton */}
      {[...Array(2)].map((_, section) => (
        <section key={section} className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="h-8 bg-zinc-800 rounded w-1/3 mb-8 animate-pulse" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-20 bg-zinc-800 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

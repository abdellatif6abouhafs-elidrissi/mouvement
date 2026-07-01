export default function UltrasLoading() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section Skeleton */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[350px] overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 animate-pulse">
        <div className="absolute inset-0" />
      </section>

      {/* Content Skeleton */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters Skeleton */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-zinc-800 rounded-lg animate-pulse" />
            ))}
          </div>

          {/* Grid Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="aspect-video bg-zinc-800 rounded-lg animate-pulse" />
                <div className="h-6 bg-zinc-800 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-zinc-800 rounded w-full animate-pulse" />
                <div className="h-4 bg-zinc-800 rounded w-2/3 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

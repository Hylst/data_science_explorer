import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the BlogList component
const BlogList = React.lazy(() => import("../blog/BlogList"));

/**
 * Loading skeleton for BlogList
 * @returns JSX element with loading skeleton
 */
const BlogListSkeleton = () => (
  <div className="space-y-6">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="border rounded-lg p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-7 w-3/4" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
        <Skeleton className="h-20 w-full" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-12" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

/**
 * Lazy-loaded BlogList component with loading fallback
 * @returns JSX element with suspense wrapper
 */
const LazyBlogList: React.FC = () => {
  return (
    <Suspense fallback={<BlogListSkeleton />}>
      <BlogList />
    </Suspense>
  );
};

export default LazyBlogList;
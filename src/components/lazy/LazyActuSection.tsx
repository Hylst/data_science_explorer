import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the ActuSection component
const ActuSection = React.lazy(() => import("../community/ActuSection"));

/**
 * Loading skeleton for ActuSection
 * @returns JSX element with loading skeleton
 */
const ActuSectionSkeleton = () => (
  <div className="space-y-6">
    <div className="flex gap-4">
      <Skeleton className="h-10 flex-1" />
      <Skeleton className="h-10 w-32" />
      <Skeleton className="h-10 w-24" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-6 w-16" />
      <Skeleton className="h-6 w-12" />
      <Skeleton className="h-6 w-20" />
      <Skeleton className="h-6 w-24" />
    </div>
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <div className="flex gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-16 w-full" />
          <div className="flex justify-end">
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Lazy-loaded ActuSection component with loading fallback
 * @returns JSX element with suspense wrapper
 */
const LazyActuSection: React.FC = () => {
  return (
    <Suspense fallback={<ActuSectionSkeleton />}>
      <ActuSection />
    </Suspense>
  );
};

export default LazyActuSection;
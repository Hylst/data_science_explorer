import React, { useState, useRef, useEffect, memo } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  placeholder?: string;
  lazy?: boolean;
  threshold?: number;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized image component with lazy loading and intersection observer
 * Provides better performance for pages with many images
 */
const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/img/placeholder.jpg',
  placeholder,
  lazy = true,
  threshold = 0.1,
  className,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(lazy ? placeholder || '' : src);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /**
   * Set up intersection observer for lazy loading
   */
  useEffect(() => {
    if (!lazy || isInView) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          setCurrentSrc(src);
          observerRef.current?.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [lazy, isInView, src, threshold]);

  /**
   * Handle image load success
   */
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  /**
   * Handle image load error with fallback
   */
  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setIsLoaded(true); // Stop loading state even on error
    }
    onError?.();
  };

  /**
   * Update src when isInView changes
   */
  useEffect(() => {
    if (isInView && currentSrc !== src) {
      setCurrentSrc(src);
    }
  }, [isInView, src, currentSrc]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading={lazy ? 'lazy' : 'eager'}
        {...props}
      />
      
      {/* Error state */}
      {hasError && isLoaded && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image non disponible</p>
          </div>
        </div>
      )}
    </div>
  );
});

export default OptimizedImage;
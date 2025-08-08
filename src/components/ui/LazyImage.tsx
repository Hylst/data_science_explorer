import React, { useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * LazyImage component that loads images only when they enter the viewport
 * Includes loading states and error handling
 * @param props - Component props including image source and dimensions
 * @returns JSX element with lazy-loaded image
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Handle successful image load
   */
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  /**
   * Handle image load error
   */
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  /**
   * Set up intersection observer to detect when image enters viewport
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px" // Start loading 50px before the image is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /**
   * Default placeholder component
   */
  const defaultPlaceholder = (
    <Skeleton 
      className={`${className}`}
      style={{ width: width || "100%", height: height || "200px" }}
    />
  );

  /**
   * Error state component
   */
  const errorPlaceholder = (
    <div 
      className={`bg-gray-100 flex items-center justify-center text-gray-400 ${className}`}
      style={{ width: width || "100%", height: height || "200px" }}
    >
      <div className="text-center">
        <svg 
          className="mx-auto h-8 w-8 mb-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <p className="text-xs">Image non disponible</p>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative">
      {!isInView && (placeholder || defaultPlaceholder)}
      
      {isInView && !hasError && (
        <>
          {!isLoaded && (placeholder || defaultPlaceholder)}
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            style={{
              position: isLoaded ? 'static' : 'absolute',
              top: isLoaded ? 'auto' : 0,
              left: isLoaded ? 'auto' : 0
            }}
          />
        </>
      )}
      
      {hasError && errorPlaceholder}
    </div>
  );
};

export default React.memo(LazyImage);
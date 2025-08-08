import { memo, useMemo, ReactNode, useCallback, useState, useEffect } from "react";

// Performance-optimized component wrapper
export const withPerformanceOptimization = <T extends object>(
  Component: React.ComponentType<T>,
  displayName?: string
) => {
  const MemoizedComponent = memo(Component);
  if (displayName) {
    MemoizedComponent.displayName = displayName;
  }
  return MemoizedComponent;
};

// Lazy loading wrapper for images
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: ReactNode;
  onLoad?: () => void;
}

export const LazyImage = memo(({ 
  src, 
  alt, 
  className = "", 
  placeholder,
  onLoad 
}: LazyImageProps) => {
  const handleLoad = useCallback(() => {
    onLoad?.();
  }, [onLoad]);

  return (
    <img
      src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${className}`}
      loading="lazy"
      onLoad={handleLoad}
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '300px 200px'
      }}
    />
  );
});

LazyImage.displayName = "LazyImage";

// Optimized scroll handler
const debounce = (func: Function, wait: number, options: { leading?: boolean; trailing?: boolean } = {}) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      if (options.trailing !== false) func(...args);
    };
    const callNow = options.leading && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

export const useOptimizedScroll = (callback: () => void, delay = 100) => {
  return useMemo(
    () => debounce(callback, delay, { leading: true, trailing: true }),
    [callback, delay]
  );
};

// Performance metrics hook
export const usePerformanceMetrics = () => {
  const measureRender = useCallback((componentName: string) => {
    if (typeof performance !== 'undefined') {
      performance.mark(`${componentName}-start`);
      
      return () => {
        performance.mark(`${componentName}-end`);
        performance.measure(
          `${componentName}-render`,
          `${componentName}-start`,
          `${componentName}-end`
        );
      };
    }
    return () => {};
  }, []);

  const getMetrics = useCallback(() => {
    if (typeof performance !== 'undefined') {
      return performance.getEntriesByType('measure');
    }
    return [];
  }, []);

  return { measureRender, getMetrics };
};

// Viewport observer for animations
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};

// Resource preloader
export const preloadResource = (href: string, as: string) => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }
};

// Critical CSS inliner (for above-the-fold content)
export const inlineCriticalCSS = (css: string) => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }
};
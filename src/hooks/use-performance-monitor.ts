import React, { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  renderCount: number;
  averageRenderTime: number;
  lastRenderTime: number;
}

interface UsePerformanceMonitorOptions {
  componentName: string;
  logThreshold?: number; // Log if render time exceeds this threshold (ms)
  enabled?: boolean;
}

/**
 * Hook to monitor component performance and render times
 * Helps identify performance bottlenecks in development
 */
export function usePerformanceMonitor({
  componentName,
  logThreshold = 16, // 16ms = 60fps threshold
  enabled = process.env.NODE_ENV === 'development'
}: UsePerformanceMonitorOptions) {
  const metricsRef = useRef<PerformanceMetrics>({
    renderTime: 0,
    renderCount: 0,
    averageRenderTime: 0,
    lastRenderTime: 0
  });
  const renderStartRef = useRef<number>(0);

  /**
   * Mark the start of a render cycle
   */
  const markRenderStart = useCallback(() => {
    if (!enabled) return;
    renderStartRef.current = performance.now();
  }, [enabled]);

  /**
   * Mark the end of a render cycle and calculate metrics
   */
  const markRenderEnd = useCallback(() => {
    if (!enabled || renderStartRef.current === 0) return;
    
    const renderTime = performance.now() - renderStartRef.current;
    const metrics = metricsRef.current;
    
    metrics.lastRenderTime = renderTime;
    metrics.renderCount += 1;
    metrics.renderTime += renderTime;
    metrics.averageRenderTime = metrics.renderTime / metrics.renderCount;
    
    // Log slow renders
    if (renderTime > logThreshold) {
      console.warn(
        `🐌 Slow render detected in ${componentName}:`,
        {
          renderTime: `${renderTime.toFixed(2)}ms`,
          threshold: `${logThreshold}ms`,
          renderCount: metrics.renderCount,
          averageRenderTime: `${metrics.averageRenderTime.toFixed(2)}ms`
        }
      );
    }
    
    renderStartRef.current = 0;
  }, [enabled, componentName, logThreshold]);

  /**
   * Get current performance metrics
   */
  const getMetrics = useCallback((): PerformanceMetrics => {
    return { ...metricsRef.current };
  }, []);

  /**
   * Reset performance metrics
   */
  const resetMetrics = useCallback(() => {
    metricsRef.current = {
      renderTime: 0,
      renderCount: 0,
      averageRenderTime: 0,
      lastRenderTime: 0
    };
  }, []);

  /**
   * Log performance summary
   */
  const logSummary = useCallback(() => {
    if (!enabled) return;
    
    const metrics = metricsRef.current;
    console.log(
      `📊 Performance summary for ${componentName}:`,
      {
        totalRenders: metrics.renderCount,
        totalRenderTime: `${metrics.renderTime.toFixed(2)}ms`,
        averageRenderTime: `${metrics.averageRenderTime.toFixed(2)}ms`,
        lastRenderTime: `${metrics.lastRenderTime.toFixed(2)}ms`
      }
    );
  }, [enabled, componentName]);

  // Auto-mark render start on every render
  useEffect(() => {
    markRenderStart();
  });

  // Auto-mark render end after render completes
  useEffect(() => {
    markRenderEnd();
  });

  return {
    markRenderStart,
    markRenderEnd,
    getMetrics,
    resetMetrics,
    logSummary
  };
}

/**
 * Higher-order component to automatically monitor performance
 */
export function withPerformanceMonitoring<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  componentName: string,
  options?: Omit<UsePerformanceMonitorOptions, 'componentName'>
): React.ComponentType<P> {
  return function PerformanceMonitoredComponent(props: P) {
    const { logSummary } = usePerformanceMonitor({
      componentName,
      ...options
    });

    // Log summary on unmount in development
    useEffect(() => {
      return () => {
        if (process.env.NODE_ENV === 'development') {
          logSummary();
        }
      };
    }, [logSummary]);

    return <Component {...props} />;
  };
}
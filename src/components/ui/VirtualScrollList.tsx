import React, { useState, useRef, useMemo } from "react";

interface VirtualScrollListProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
  className?: string;
}

/**
 * VirtualScrollList component for efficiently rendering large lists
 * Only renders visible items plus a small buffer to improve performance
 * @param props - Component props including items, dimensions, and render function
 * @returns JSX element with virtualized list
 */
function VirtualScrollList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5,
  className = ""
}: VirtualScrollListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  /**
   * Handle scroll events to update visible range
   * @param e - Scroll event
   */
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  /**
   * Calculate which items should be rendered based on scroll position
   */
  const visibleRange = useMemo(() => {
    const visibleStart = Math.floor(scrollTop / itemHeight);
    const visibleEnd = Math.min(
      visibleStart + Math.ceil(containerHeight / itemHeight),
      items.length - 1
    );

    const start = Math.max(0, visibleStart - overscan);
    const end = Math.min(items.length - 1, visibleEnd + overscan);

    return { start, end };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  /**
   * Get the items that should be rendered
   */
  const visibleItems = useMemo(() => {
    const result = [];
    for (let i = visibleRange.start; i <= visibleRange.end; i++) {
      result.push({
        index: i,
        item: items[i]
      });
    }
    return result;
  }, [items, visibleRange]);

  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  return (
    <div
      ref={scrollElementRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0
          }}
        >
          {visibleItems.map(({ item, index }) => (
            <div
              key={index}
              style={{
                height: itemHeight,
                overflow: "hidden"
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(VirtualScrollList) as <T>(
  props: VirtualScrollListProps<T>
) => JSX.Element;
import React from 'react';
import { cn } from '@/lib/utils';

interface TouchTargetProps {
  children: React.ReactNode;
  className?: string;
  minTouchTarget?: boolean;
}

/**
 * TouchTarget component ensures proper touch target sizes for mobile devices
 * Follows WCAG guidelines for minimum 44px touch targets
 */
export const TouchTarget: React.FC<TouchTargetProps> = ({ 
  children, 
  className, 
  minTouchTarget = true 
}) => {
  return (
    <div 
      className={cn(
        minTouchTarget && 'min-h-[44px] min-w-[44px] flex items-center justify-center',
        'touch-manipulation', // Improves touch responsiveness
        className
      )}
    >
      {children}
    </div>
  );
};

interface HoverTouchProps {
  children: React.ReactNode;
  onHover?: () => void;
  onLeave?: () => void;
  onTouch?: () => void;
  className?: string;
  disabled?: boolean;
}

/**
 * HoverTouch component provides unified hover and touch interactions
 * Handles both desktop hover states and mobile touch interactions
 */
export const HoverTouch: React.FC<HoverTouchProps> = ({
  children,
  onHover,
  onLeave,
  onTouch,
  className,
  disabled = false
}) => {
  const [isTouched, setIsTouched] = React.useState(false);

  const handleMouseEnter = () => {
    if (!disabled && !isTouched) {
      onHover?.();
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !isTouched) {
      onLeave?.();
    }
  };

  const handleTouchStart = () => {
    if (!disabled) {
      setIsTouched(true);
      onTouch?.();
      // Reset touch state after a delay
      setTimeout(() => setIsTouched(false), 300);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent click if it's a touch device to avoid double activation
    if (isTouched) {
      e.preventDefault();
    }
  };

  return (
    <div
      className={cn(
        'touch-manipulation cursor-pointer',
        disabled && 'pointer-events-none opacity-50',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

/**
 * Hook to detect if the user is on a touch device
 */
export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      );
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  return isTouchDevice;
};

/**
 * Mobile-first responsive breakpoint utilities
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

/**
 * Hook to get current breakpoint
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = React.useState<keyof typeof breakpoints>('sm');

  React.useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBreakpoint('2xl');
      else if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else setBreakpoint('sm');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};
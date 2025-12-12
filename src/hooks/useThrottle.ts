import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to throttle function calls
 * @param callback - Function to throttle
 * @param delay - Delay in milliseconds (default: 16ms for 60fps)
 */
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 16
): T {
  const lastRun = useRef(Date.now());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttledFunction = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      const timeSinceLastRun = now - lastRun.current;

      if (timeSinceLastRun >= delay) {
        callback(...args);
        lastRun.current = now;
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(
          () => {
            callback(...args);
            lastRun.current = Date.now();
          },
          delay - timeSinceLastRun
        );
      }
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledFunction as T;
}

/**
 * Custom hook for throttled scroll events using requestAnimationFrame
 * @param callback - Function to call on scroll
 */
export function useThrottledScroll(callback: () => void) {
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous frame if it hasn't executed yet
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      // Schedule callback for next frame
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        // Only call callback if scroll position actually changed
        if (currentScrollY !== lastScrollY.current) {
          lastScrollY.current = currentScrollY;
          callback();
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [callback]);
}

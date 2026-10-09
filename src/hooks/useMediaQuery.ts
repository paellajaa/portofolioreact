// src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

/**
 * Custom hook that detects if the screen width is below a given breakpoint.
 * @param {number} breakpoint - The pixel width breakpoint (default: 768)
 * @returns {boolean} - True if screen width is below the breakpoint (mobile), false if desktop
 */
export function useMediaQuery(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}
export default useMediaQuery;

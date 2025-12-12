import React, { useState, useCallback } from "react";
import { useThrottledScroll } from "../../hooks/useThrottle";

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useThrottledScroll(handleScroll);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-500 to-purple-500 origin-left z-50"
      style={{ 
        transform: `scaleX(${scrollProgress / 100})`,
        willChange: 'transform'
      }}
    />
  );
};

export default React.memo(ScrollProgress);

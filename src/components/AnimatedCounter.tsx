import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export const AnimatedCounter = ({
  end,
  start = 0,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(start);
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, start, end, duration]);

  const formatNumber = (num: number) => {
    return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
  };

  return (
    <div ref={ref} className={`${className} ${isVisible ? 'animate-scale-in' : ''}`}>
      <span className="font-bold text-4xl md:text-6xl">
        {prefix}{formatNumber(count)}{suffix}
      </span>
    </div>
  );
};

export default AnimatedCounter;
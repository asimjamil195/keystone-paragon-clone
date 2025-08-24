import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);

        if (isIntersecting && freezeOnceVisible) {
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [ref, isVisible];
};

// Hook for multiple elements with staggered animations
export const useStaggeredAnimation = (count: number, delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  useEffect(() => {
    if (isVisible) {
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          setVisibleItems(prev => new Set(prev).add(i));
        }, i * delay);
      }
    }
  }, [isVisible, count, delay]);

  return [ref, visibleItems] as const;
};
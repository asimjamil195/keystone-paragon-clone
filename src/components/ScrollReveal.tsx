import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'block-up' | 'gentle-rise' | 'subtle-lift';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  animation = 'block-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}: ScrollRevealProps) => {
  const [ref, isVisible] = useIntersectionObserver({ 
    threshold, 
    freezeOnceVisible: true 
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className} ${
        isVisible 
          ? `animate-${animation}` 
          : 'opacity-0 transform translate-y-8'
      }`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
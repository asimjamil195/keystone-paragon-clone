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
      className={`${className} ${
        isVisible 
          ? 'animate__animated animate__fadeInUp' 
          : 'opacity-0'
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
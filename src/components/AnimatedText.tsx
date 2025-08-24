import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
}

export const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  speed = 50,
  showCursor = true,
}: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTypeCursor, setShowTypeCursor] = useState(showCursor);
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setTimeout(() => setShowTypeCursor(false), 1000);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [isVisible, currentIndex, text, delay, speed]);

  return (
    <div ref={ref} className={className}>
      <span>
        {displayText}
        {showTypeCursor && (
          <span className="animate-blink border-r-2 border-current ml-1"></span>
        )}
      </span>
    </div>
  );
};

export default AnimatedText;
import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverAnimation?: 'scale' | 'float' | 'glow' | 'wobble' | 'rotate';
  clickAnimation?: 'shake' | 'bounce' | 'pulse';
}

export const AnimatedCard = ({
  children,
  className = '',
  hoverAnimation = 'scale',
  clickAnimation = 'bounce',
}: AnimatedCardProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (clickAnimation) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 500);
    }
  };

  const getHoverClasses = () => {
    switch (hoverAnimation) {
      case 'scale':
        return 'hover:scale-105 hover:shadow-lg';
      case 'float':
        return 'hover:animate-float';
      case 'glow':
        return 'hover:animate-pulse-glow';
      case 'wobble':
        return 'hover:animate-wobble';
      case 'rotate':
        return 'hover:rotate-2';
      default:
        return '';
    }
  };

  const getClickClasses = () => {
    if (!isClicked) return '';
    
    switch (clickAnimation) {
      case 'shake':
        return 'animate-shake';
      case 'bounce':
        return 'animate-bounce-in';
      case 'pulse':
        return 'animate-pulse';
      default:
        return '';
    }
  };

  return (
    <Card
      className={`
        transition-all duration-300 cursor-pointer
        ${getHoverClasses()}
        ${getClickClasses()}
        ${className}
      `}
      onClick={handleClick}
    >
      {children}
    </Card>
  );
};

export default AnimatedCard;
import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverAnimation?: 'scale' | 'lift';
  clickAnimation?: 'none';
}

export const AnimatedCard = ({
  children,
  className = '',
  hoverAnimation = 'scale',
  clickAnimation = 'none',
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
        return 'hover:scale-[1.02] hover:shadow-lg';
      case 'lift':
        return 'hover:-translate-y-1 hover:shadow-lg';
      default:
        return '';
    }
  };

  const getClickClasses = () => {
    return '';
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
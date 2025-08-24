import { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  backgroundImage?: string;
}

export const ParallaxSection = ({
  children,
  speed = 0.5,
  className = '',
  backgroundImage,
}: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transform: `translateY(${offsetY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
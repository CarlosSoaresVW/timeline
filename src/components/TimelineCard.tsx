import { useEffect, useRef, useState } from 'react';
import { Star, Heart, Flower2 } from 'lucide-react';

interface TimelineCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  side: 'left' | 'right';
  icon?: 'star' | 'heart' | 'flower';
}

export default function TimelineCard({ title, description, imageUrl, side, icon }: TimelineCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const IconComponent = icon === 'star' ? Star : icon === 'heart' ? Heart : icon === 'flower' ? Flower2 : null;

  return (
    <div
      ref={cardRef}
      className={`flex items-center mb-16 md:mb-24 ${
        side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col md:gap-8`}
    >
      <div
        className={`w-full md:w-5/12 transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : side === 'left'
            ? 'opacity-0 translate-x-12'
            : 'opacity-0 -translate-x-12'
        }`}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-[#E7B872]/10 border border-[#E7B872]/20 hover:shadow-[#E7B872]/20 hover:border-[#E7B872]/40 transition-all duration-300">
          {imageUrl && (
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-4">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-3 mb-3">
            {IconComponent && (
              <IconComponent size={20} className="text-[#E7B872]" fill="#E7B872" />
            )}
            <h3 className="text-xl md:text-2xl font-bold text-[#F2F2F2]">{title}</h3>
          </div>

          <p className="text-[#F2F2F2]/80 text-base md:text-lg italic font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="hidden md:flex w-2/12 justify-center relative">
        <div className="w-6 h-6 rounded-full bg-[#E7B872] border-4 border-[#0C1A2B] shadow-lg shadow-[#E7B872]/50 z-10" />
      </div>

      <div className="w-full md:w-5/12" />
    </div>
  );
}

'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Section, SectionHeader } from '@/components/ui/containers/Section';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { Testimonial } from '@/types';
import { SectionProps, ColorProps } from '@/types';
import { useEffect, useRef, useState } from 'react';

interface TestimonialsProps extends SectionProps, ColorProps {
  title: string;
  testimonials: Testimonial[];
}

/**
 * Testimonials section component
 *
 * @param title - Section title
 * @param testimonials - Array of testimonial data
 * @param className - Additional CSS classes
 * @param bgColor - Background color class
 * @param textColor - Text color class
 */
export function Testimonials({
  title,
  testimonials,
  className,
  bgColor = 'bg-secondary',
  textColor = 'text-white',
}: TestimonialsProps) {
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const desktopCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize refs arrays
  useEffect(() => {
    desktopCardsRef.current = desktopCardsRef.current.slice(0, Math.min(3, testimonials.length));
    mobileCardsRef.current = mobileCardsRef.current.slice(0, testimonials.length);
  }, [testimonials.length]);

  // Equalize card heights
  useEffect(() => {
    const calculateMaxHeight = () => {
      // Reset heights
      [...desktopCardsRef.current, ...mobileCardsRef.current].forEach(card => {
        if (card) card.style.height = 'auto';
      });
      
      // Calculate max heights separately for desktop and mobile
      setTimeout(() => {
        // Desktop cards
        if (desktopCardsRef.current.length) {
          const desktopHeights = desktopCardsRef.current.map(card => card?.offsetHeight || 0);
          const maxDesktopHeight = Math.max(...desktopHeights);
          
          if (maxDesktopHeight > 0) {
            desktopCardsRef.current.forEach(card => {
              if (card) card.style.height = `${maxDesktopHeight}px`;
            });
          }
        }
        
        // Mobile cards
        if (mobileCardsRef.current.length) {
          const mobileHeights = mobileCardsRef.current.map(card => card?.offsetHeight || 0);
          const maxMobileHeight = Math.max(...mobileHeights);
          
          if (maxMobileHeight > 0) {
            setCardHeight(maxMobileHeight);
            mobileCardsRef.current.forEach(card => {
              if (card) card.style.height = `${maxMobileHeight}px`;
            });
          }
        }
      }, 100);
    };

    calculateMaxHeight();

    // Recalculate on window resize
    window.addEventListener('resize', calculateMaxHeight);
    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, [testimonials]);

  return (
    <Section bgColor={bgColor} textColor={textColor} className={className}>
      <SectionHeader title={title} />

      {/* Desktop view: Display 3 cards at once in a grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div 
            key={index}
            ref={el => {
              desktopCardsRef.current[index] = el;
            }}
          >
            <TestimonialCard testimonial={testimonial} textColor={textColor} />
          </div>
        ))}
      </div>

      {/* Mobile view: Carousel */}
      <Carousel className="md:hidden w-full mx-auto">
        <CarouselContent className="h-full">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="mx-2 h-full">
                <div
                  ref={el => {
                    mobileCardsRef.current[index] = el;
                  }}
                  style={cardHeight ? { height: `${cardHeight}px` } : undefined}
                >
                  <TestimonialCard testimonial={testimonial} textColor={textColor} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-2">
          <CarouselPrevious className="relative static bg-white/10 hover:bg-white/20 text-white h-10 w-10" />
          <CarouselNext className="relative static bg-white/10 hover:bg-white/20 text-white h-10 w-10" />
        </div>
      </Carousel>
    </Section>
  );
}

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState, useRef } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { RooferCard } from '@/components/cards/RooferCard';
import { Section, SectionHeader } from '@/components/ui/containers/Section';
import { Roofer } from '@/types';

interface FeaturedRoofersProps {
  title: string;
  roofers: Roofer[];
  viewAllLink: string;
  viewAllText?: string;
  className?: string;
}

/**
 * Featured roofers section component
 *
 * @param title - Section title
 * @param roofers - Array of roofer data
 * @param viewAllLink - Link to view all roofers
 * @param viewAllText - Text for view all button
 * @param className - Additional CSS classes
 */
export function FeaturedRoofers({
  title,
  roofers,
  viewAllLink,
  viewAllText = 'View All Roofing Professionals',
  className,
}: FeaturedRoofersProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize cardsRef array
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, isLoading ? 3 : roofers.length);
  }, [isLoading, roofers.length]);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Equalize card heights
  useEffect(() => {
    const calculateMaxHeight = () => {
      if (isLoading || !cardsRef.current.length) return;
      
      // Reset heights
      cardsRef.current.forEach(card => {
        if (card) card.style.height = 'auto';
      });
      
      // Calculate max height
      setTimeout(() => {
        const heights = cardsRef.current.map(card => card?.offsetHeight || 0);
        const maxHeight = Math.max(...heights);
        
        if (maxHeight > 0) {
          setCardHeight(maxHeight);
          cardsRef.current.forEach(card => {
            if (card) card.style.height = `${maxHeight}px`;
          });
        }
      }, 100);
    };

    calculateMaxHeight();

    // Recalculate on window resize
    window.addEventListener('resize', calculateMaxHeight);
    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, [isLoading, roofers]);

  return (
    <Section bgColor="bg-muted" className={className}>
      <SectionHeader title={title} />

      <Carousel className="w-full mx-auto">
        <CarouselContent className="h-full">
          {isLoading
            ? // Skeleton loading UI
              Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem
                  key={`skeleton-${index}`}
                  className="basis-full md:basis-1/2 lg:basis-1/3 h-full"
                >
                  <div className="p-1 h-full w-full">
                    <div
                      ref={el => {
                        cardsRef.current[index] = el;
                      }}
                      style={cardHeight ? { height: `${cardHeight}px` } : undefined}
                      className="w-full"
                    >
                      <Card className="overflow-hidden border-0 shadow-md h-full flex flex-col">
                        <Skeleton className="h-48 w-full" />
                        <CardContent className="p-6">
                          <Skeleton className="h-6 w-3/4 mb-4" />
                          <Skeleton className="h-4 w-1/2 mb-3" />
                          <div className="flex gap-2 mb-4">
                            <Skeleton className="h-6 w-16 rounded-full" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                            <Skeleton className="h-6 w-14 rounded-full" />
                          </div>
                          <Skeleton className="h-9 w-full mt-4" />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CarouselItem>
              ))
            : // Actual content
              roofers.map((roofer, index) => (
                <CarouselItem key={roofer.id} className="basis-full md:basis-1/2 lg:basis-1/3 h-full">
                  <div className="p-1 h-full w-full">
                    <div 
                      ref={el => {
                        cardsRef.current[index] = el;
                      }}
                      style={cardHeight ? { height: `${cardHeight}px` } : undefined}
                      className="w-full"
                    >
                      <RooferCard roofer={roofer} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2 translate-x-0 translate-y-0" />
          <CarouselNext className="relative static translate-x-0 translate-y-0" />
        </div>
      </Carousel>

      <div className="text-center mt-10">
        <Button
          variant="outline"
          className="mx-auto border-primary text-primary hover:bg-primary/10"
          asChild
        >
          <Link href={viewAllLink}>{viewAllText}</Link>
        </Button>
      </div>
    </Section>
  );
}

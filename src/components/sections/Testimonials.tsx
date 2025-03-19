"use client";

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Section, SectionHeader } from "@/components/ui/containers/Section";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Testimonial } from "@/types";
import { SectionProps, ColorProps } from "@/types";

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
  bgColor = "bg-secondary",
  textColor = "text-white",
}: TestimonialsProps) {
  return (
    <Section 
      bgColor={bgColor} 
      textColor={textColor} 
      className={className}
    >
      <SectionHeader title={title} />
      
      {/* Desktop view: Display 3 cards at once in a grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            testimonial={testimonial} 
            textColor={textColor}
          />
        ))}
      </div>
      
      {/* Mobile view: Carousel */}
      <Carousel className="md:hidden w-full mx-auto">
        <CarouselContent className="h-full">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="mx-2 h-full">
                <TestimonialCard 
                  testimonial={testimonial} 
                  textColor={textColor}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-2">
          <CarouselPrevious className="relative static bg-white/10 hover:bg-white/20 text-white" />
          <CarouselNext className="relative static bg-white/10 hover:bg-white/20 text-white" />
        </div>
      </Carousel>
    </Section>
  );
}

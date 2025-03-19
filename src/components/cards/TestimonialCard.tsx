"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  textColor?: string;
}

/**
 * Card component for displaying testimonials
 * 
 * @param testimonial - Testimonial data to display
 * @param className - Additional CSS classes
 * @param textColor - Text color class
 */
export function TestimonialCard({ 
  testimonial, 
  className,
  textColor = "text-white"
}: TestimonialCardProps) {
  return (
    <div className={cn(
      "bg-white/10 p-6 rounded-lg backdrop-blur-sm h-full flex flex-col",
      className
    )}>
      <QuoteIcon className={`h-6 w-6 text-primary mb-4 flex-shrink-0`} />
      <p className={cn("mb-4 text-base flex-grow", textColor)}>
        {testimonial.quote}
      </p>
      <div className="flex items-center mt-auto">
        <Avatar className="h-10 w-10 mr-3 border-2 border-white/20 flex-shrink-0">
          {testimonial.image ? (
            <img src={testimonial.image} alt={testimonial.author} />
          ) : (
            <AvatarFallback className="bg-primary/20 text-primary">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <p className={cn("font-semibold", textColor)}>{testimonial.author}</p>
          <p className={cn("text-sm opacity-80", textColor)}>{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Quote icon component
 */
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

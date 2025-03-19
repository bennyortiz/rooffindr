'use client';

import { Step } from '@/types';
import { cn } from '@/lib/utils';

interface StepCardProps {
  step: Step;
  className?: string;
}

/**
 * Card component for displaying process steps
 *
 * @param step - Step data to display
 * @param className - Additional CSS classes
 */
export function StepCard({ step, className }: StepCardProps) {
  return (
    <div 
      className={cn(
        'bg-white p-6 md:p-8 rounded-xl shadow-sm border border-muted/20 h-full flex flex-col items-center text-center transition-shadow hover:shadow-md',
        className
      )}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 flex-shrink-0">
        {step.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
      <p className="text-muted-foreground">{step.description}</p>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

/**
 * Progress bar component for multi-step forms
 * 
 * @param currentStep - Current step number (1-based)
 * @param totalSteps - Total number of steps
 * @param className - Additional CSS classes
 */
export function FormProgress({
  currentStep,
  totalSteps,
  className,
}: FormProgressProps) {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className={cn("h-1 bg-muted rounded-full mb-6 overflow-hidden", className)}>
      <div 
        className="h-full bg-primary transition-all duration-500 rounded-full" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

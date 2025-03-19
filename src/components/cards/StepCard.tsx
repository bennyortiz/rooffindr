"use client";

import { Step } from "@/types";
import { cn } from "@/lib/utils";

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
    <div className={cn("text-center", className)}>
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        {step.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-muted-foreground">{step.description}</p>
    </div>
  );
}

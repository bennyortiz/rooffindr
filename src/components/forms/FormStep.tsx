"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormStepProps {
  children: ReactNode;
  title: string;
  description?: string;
  isActive: boolean;
  isTransitioning: boolean;
  className?: string;
}

/**
 * Form step component for multi-step forms
 * 
 * @param children - Form step content
 * @param title - Step title
 * @param description - Step description
 * @param isActive - Whether the step is currently active
 * @param isTransitioning - Whether the form is transitioning between steps
 * @param className - Additional CSS classes
 */
export function FormStep({
  children,
  title,
  description,
  isActive,
  isTransitioning,
  className,
}: FormStepProps) {
  if (!isActive) return null;
  
  return (
    <div className={cn(
      "transition-opacity duration-300",
      isTransitioning ? "opacity-0" : "opacity-100",
      className
    )}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

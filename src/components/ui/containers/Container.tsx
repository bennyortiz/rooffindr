"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

/**
 * Container component for consistent content width and padding
 * 
 * @param children - Content to be contained
 * @param className - Additional CSS classes
 * @param narrow - Whether to use a narrower max-width
 */
export function Container({ 
  children, 
  className, 
  narrow = false 
}: ContainerProps) {
  return (
    <div className={cn(
      "container mx-auto px-4 sm:px-6", 
      narrow && "max-w-5xl", 
      className
    )}>
      {children}
    </div>
  );
}

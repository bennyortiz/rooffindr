import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const pillVariants = cva(
  'inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        outline: 'border border-primary text-primary',
        accent: 'bg-accent/10 text-accent',
        subtle: 'bg-muted text-muted-foreground',
      },
      size: {
        default: 'text-xs px-3 py-1',
        sm: 'text-xs px-2 py-0.5',
        lg: 'text-sm px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {
  text: string;
}

export function Pill({ text, className, variant, size, ...props }: PillProps) {
  return (
    <div className={cn(pillVariants({ variant, size }), className)} {...props}>
      {text}
    </div>
  );
} 
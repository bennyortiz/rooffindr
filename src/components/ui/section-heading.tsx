import React from 'react';
import { cn } from '@/lib/utils';
import { Pill } from './pill';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  pill?: string;
  pillVariant?: 'default' | 'secondary' | 'outline' | 'accent' | 'subtle';
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  pill,
  pillVariant = 'default',
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? 'text-center' : '', 'space-y-3 mb-8', className)}>
      {pill && (
        <div className="mb-2">
          <Pill text={pill} variant={pillVariant} />
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-3xl">{subtitle}</p>}
    </div>
  );
} 
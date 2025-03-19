'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Container } from './Container';
import { SectionProps, ColorProps } from '@/types';
import { Pill } from '@/components/ui/pill';

interface BaseSectionProps extends SectionProps, ColorProps {
  children: ReactNode;
  id?: string;
  containerClassName?: string;
  useNarrowContainer?: boolean;
}

/**
 * Base section component for consistent section styling
 *
 * @param children - Section content
 * @param id - Optional ID for anchor links
 * @param className - Additional CSS classes for the section element
 * @param containerClassName - Additional CSS classes for the container
 * @param bgColor - Background color class
 * @param textColor - Text color class
 * @param useNarrowContainer - Whether to use a narrow container
 */
export function Section({
  children,
  id,
  className,
  containerClassName,
  bgColor = 'bg-white',
  textColor,
  useNarrowContainer = true,
}: BaseSectionProps) {
  return (
    <section id={id} className={cn('py-16', bgColor, textColor, className)}>
      <Container narrow={useNarrowContainer} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

/**
 * Section header component for consistent section headings
 */
interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  pill?: string;
  pillVariant?: 'default' | 'secondary' | 'outline' | 'accent' | 'subtle';
}

export function SectionHeader({
  title,
  description,
  className,
  align = 'center',
  pill,
  pillVariant = 'default',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {pill && (
        <div className={cn('mb-3', align === 'center' && 'flex justify-center')}>
          <Pill text={pill} variant={pillVariant} />
        </div>
      )}
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}

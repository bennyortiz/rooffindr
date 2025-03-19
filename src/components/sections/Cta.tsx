'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/containers/Section';
import { SectionProps, ColorProps } from '@/types';

interface CtaProps extends SectionProps, ColorProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
  buttonClassName?: string;
}

/**
 * Call to action section component
 *
 * @param title - Section title
 * @param description - Section description
 * @param buttonText - CTA button text
 * @param buttonLink - CTA button link
 * @param className - Additional CSS classes
 * @param bgColor - Background color class
 * @param textColor - Text color class
 * @param buttonVariant - Button variant
 * @param buttonSize - Button size
 * @param buttonClassName - Additional button CSS classes
 */
export function Cta({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  buttonVariant = 'default',
  buttonSize = 'lg',
  buttonClassName = 'bg-white text-primary hover:bg-white/90',
}: CtaProps) {
  return (
    <Section
      bgColor={bgColor}
      textColor={textColor}
      className={className}
      containerClassName="text-center"
    >
      <SectionHeader title={title} description={description} />

      <Button variant={buttonVariant} size={buttonSize} className={buttonClassName} asChild>
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </Section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { Container } from '@/components/ui/containers/Container';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  trustBadgeText?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Hero section component
 *
 * @param title - Hero title
 * @param description - Hero description
 * @param imageSrc - Background image source
 * @param primaryButtonText - Primary CTA button text
 * @param primaryButtonLink - Primary CTA button link
 * @param secondaryButtonText - Secondary CTA button text
 * @param secondaryButtonLink - Secondary CTA button link
 * @param trustBadgeText - Trust badge text
 * @param children - Additional content (typically a form)
 * @param className - Additional CSS classes
 */
export function Hero({
  title,
  description,
  imageSrc,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  trustBadgeText,
  children,
  className,
}: HeroProps) {
  return (
    <section className={cn('relative min-h-[80vh] flex items-center', className)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Darker base overlay - increased darkness for better contrast */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Adjusted orange gradient overlay - less opacity for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20 mix-blend-multiply z-20" />
        <Image
          src={imageSrc}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Hero Content */}
      <Container narrow className="relative z-10 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white space-y-4 sm:space-y-6">
            {/* Added text shadow for better text visibility */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-shadow-lg drop-shadow-md">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-lg drop-shadow-sm">{description}</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button size="lg" className="text-sm sm:text-base" asChild>
                <Link href={primaryButtonLink}>{primaryButtonText}</Link>
              </Button>

              {secondaryButtonText && secondaryButtonLink && (
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-sm sm:text-base"
                  asChild
                >
                  <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>

            {trustBadgeText && (
              <div className="pt-2 sm:pt-4">
                <p className="text-xs sm:text-sm opacity-90 flex items-center drop-shadow-sm">
                  <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  {trustBadgeText}
                </p>
              </div>
            )}
          </div>

          {/* Right Side Content - Form or Custom Content */}
          {children && (
            <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 mt-6 lg:mt-0">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

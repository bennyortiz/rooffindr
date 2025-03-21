'use client';

import { Step } from '@/types';
import { Section, SectionHeader } from '@/components/ui/containers/Section';
import { StepCard } from '@/components/cards/StepCard';

interface HowItWorksProps {
  title: string;
  description?: string;
  steps: Step[];
  className?: string;
  pill?: string;
}

/**
 * How it works section component
 *
 * @param title - Section title
 * @param description - Section description
 * @param steps - Array of step data
 * @param className - Additional CSS classes
 * @param pill - Optional pill text to display above the section title
 */
export function HowItWorks({ title, description, steps, className, pill = "HOW IT WORKS" }: HowItWorksProps) {
  return (
    <Section className={className} bgColor="bg-muted/30">
      <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
        <SectionHeader 
          title={title} 
          description={description} 
          pill={pill}
          pillVariant="default"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </Section>
  );
}

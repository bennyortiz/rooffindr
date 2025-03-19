'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface HelpItem {
  question: string;
  answer: string;
}

interface FormHelpProps {
  items: HelpItem[];
  className?: string;
}

/**
 * Help accordion component for forms
 *
 * @param items - Array of help items with questions and answers
 * @param className - Additional CSS classes
 */
export function FormHelp({ items, className }: FormHelpProps) {
  if (!items.length) return null;

  return (
    <Accordion type="single" collapsible className={cn('mt-8 border-t pt-4', className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-sm font-medium">{item.question}</AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

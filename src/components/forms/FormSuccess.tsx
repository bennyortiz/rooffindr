'use client';

import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormSuccessProps {
  title: string;
  message: string;
  secondaryMessage?: string;
  className?: string;
}

/**
 * Success message component for forms
 *
 * @param title - Success message title
 * @param message - Success message content
 * @param secondaryMessage - Additional success message content
 * @param className - Additional CSS classes
 */
export function FormSuccess({ title, message, secondaryMessage, className }: FormSuccessProps) {
  return (
    <div className={cn('text-center space-y-6 py-6', className)}>
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckIcon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{message}</p>
      {secondaryMessage && <p className="text-muted-foreground">{secondaryMessage}</p>}
    </div>
  );
}

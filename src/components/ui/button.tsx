import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// The cn utility is causing hydration mismatches due to inconsistent class ordering
// Let's use direct string concatenation for stable class order

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-[hsl(var(--background))] text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-white shadow-xs hover:bg-secondary/80',
        ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        red: 'bg-red-600 text-white shadow-xs hover:bg-red-700',
        green: 'bg-green-600 text-white shadow-xs hover:bg-green-700',
        blue: 'bg-blue-600 text-white shadow-xs hover:bg-blue-700',
        amber: 'bg-amber-500 text-gray-900 shadow-xs hover:bg-amber-600',
        gray: 'bg-gray-600 text-white shadow-xs hover:bg-gray-700',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  // Get the variant classes and ensure they have stable ordering
  const buttonClasses = buttonVariants({ variant, size });
  
  // Combine with custom classes if provided
  const combinedClasses = className ? twMerge(buttonClasses, className) : buttonClasses;

  return (
    <Comp
      data-slot="button"
      className={combinedClasses}
      {...props}
    />
  );
}

export { Button, buttonVariants };

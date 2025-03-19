'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import ClientOnly from '@/components/ClientOnly';

import { cn } from '@/lib/utils';

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  const baseClass = 'relative flex size-8 shrink-0 overflow-hidden rounded-full';
  
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={className ? `${baseClass} ${className}` : baseClass}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  const baseClass = 'aspect-square size-full';
  
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={className ? `${baseClass} ${className}` : baseClass}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  const baseClass = 'flex size-full items-center justify-center rounded-full bg-primary';
  
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={className ? `${baseClass} ${className}` : baseClass}
      {...props}
    >
      <ClientOnly>
        {children}
      </ClientOnly>
    </AvatarPrimitive.Fallback>
  );
}

export { Avatar, AvatarImage, AvatarFallback };

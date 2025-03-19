import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Re-export all utility functions for backward compatibility
 * @deprecated Use individual imports from utils directory
 */

export * from './utils/styling';
export * from './utils/dates';
export * from './utils/validation';
export * from './utils/icons';

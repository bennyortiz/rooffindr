import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names with Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines if text should be light or dark based on background color
 * for optimal contrast. Returns 'text-white' or 'text-gray-900' classes.
 * 
 * @param bgColorClass - Tailwind background color class (e.g., 'bg-primary', 'bg-red-500')
 * @returns Text color class for optimal contrast
 */
export function getContrastText(bgColorClass: string): string {
  // Map of known background colors to their appropriate text colors
  const colorMap: Record<string, string> = {
    // Primary colors
    'bg-primary': 'text-white',
    'bg-secondary': 'text-white',
    'bg-accent': 'text-gray-900',
    'bg-destructive': 'text-white',
    
    // Common colors
    'bg-red-500': 'text-white',
    'bg-red-600': 'text-white',
    'bg-red-700': 'text-white',
    'bg-blue-500': 'text-white',
    'bg-blue-600': 'text-white',
    'bg-blue-700': 'text-white',
    'bg-green-500': 'text-white',
    'bg-green-600': 'text-white',
    'bg-green-700': 'text-white',
    'bg-yellow-500': 'text-gray-900',
    'bg-yellow-600': 'text-white',
    'bg-gray-100': 'text-gray-900',
    'bg-gray-200': 'text-gray-900',
    'bg-gray-300': 'text-gray-900',
    'bg-gray-400': 'text-gray-900',
    'bg-gray-500': 'text-white',
    'bg-gray-600': 'text-white',
    'bg-gray-700': 'text-white',
    'bg-gray-800': 'text-white',
    'bg-gray-900': 'text-white',
    'bg-white': 'text-gray-900',
    'bg-black': 'text-white',
  };

  // Default to white text for unknown colors (errs on the side of dark backgrounds)
  return colorMap[bgColorClass] || 'text-white';
} 
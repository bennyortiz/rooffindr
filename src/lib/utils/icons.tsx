import React from 'react';

/**
 * Step icons used in the How It Works section
 */
export const stepIcons = [
  <span key="icon-1" className="text-2xl">
    📝
  </span>,
  <span key="icon-2" className="text-2xl">
    🤝
  </span>,
  <span key="icon-3" className="text-2xl">
    ⭐
  </span>,
  <span key="icon-4" className="text-2xl">
    🏠
  </span>,
];

/**
 * Default fallback icon
 */
export const defaultIcon = <span className="text-2xl">📋</span>;

/**
 * Get a step icon by index with fallback
 */
export function getStepIcon(index: number): React.ReactNode {
  return stepIcons[index] || defaultIcon;
} 
import React from 'react';

interface StructuredDataProps {
  type: string;
  data: Record<string, any>;
}

/**
 * Component for adding structured data to a page
 * 
 * @param type - Type of structured data (e.g., 'Organization', 'LocalBusiness')
 * @param data - Structured data object
 * @returns Script element with JSON-LD structured data
 */
export function StructuredData({ type, data }: StructuredDataProps): React.ReactElement {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

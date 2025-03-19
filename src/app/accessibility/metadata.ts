import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { accessibilityPageSeo } from '@/lib/seo/page-configs';

/**
 * Generate metadata for the Accessibility Statement page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(accessibilityPageSeo);
} 
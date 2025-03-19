import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { contactPageSeo } from '@/lib/seo/page-configs';

/**
 * Generate metadata for the contact page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(contactPageSeo);
} 
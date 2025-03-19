import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { termsPageSeo } from '@/lib/seo/page-configs';

/**
 * Generate metadata for the Terms of Service page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(termsPageSeo);
} 
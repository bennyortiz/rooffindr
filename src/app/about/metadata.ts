import { Metadata } from 'next';
import { generatePageMetadata, aboutPageSeo } from '@/lib/seo';

/**
 * Generate metadata for the about page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(aboutPageSeo);
}

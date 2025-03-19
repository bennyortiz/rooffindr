import { Metadata } from 'next';
import { generatePageMetadata, homePageSeo } from '@/lib/seo';

/**
 * Generate metadata for the home page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(homePageSeo);
}

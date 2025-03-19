import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { roofersPageSeo } from '@/lib/seo/page-configs';

/**
 * Generate metadata for the roofers index page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(roofersPageSeo);
}

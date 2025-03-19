import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { citiesPageSeo } from '@/lib/seo/page-configs';

/**
 * Generate metadata for the cities index page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(citiesPageSeo);
}

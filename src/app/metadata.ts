import { Metadata, Viewport } from 'next';
import { generatePageMetadata, generateViewport, homePageSeo } from '@/lib/seo';

/**
 * Generate metadata for the home page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(homePageSeo);
}

/**
 * Generate viewport settings for the home page
 */
export function viewport(): Viewport {
  return generateViewport();
}

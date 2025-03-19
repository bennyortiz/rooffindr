import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { privacyPageSeo } from '@/lib/seo/page-configs';

/**
 * Generate metadata for the privacy policy page
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata(privacyPageSeo);
} 
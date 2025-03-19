import { Metadata } from 'next';
import { roofersPageSeo } from '@/lib/seo';

/**
 * Generate metadata for the roofers index page
 */
export function generateMetadata(): Metadata {
  return {
    title: roofersPageSeo.title,
    description: roofersPageSeo.description,
    keywords: roofersPageSeo.keywords?.join(', '),
    openGraph: {
      title: roofersPageSeo.title,
      description: roofersPageSeo.description,
      url: `https://rooffindr.com${roofersPageSeo.path}`,
      type: roofersPageSeo.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: roofersPageSeo.title,
      description: roofersPageSeo.description,
    },
  };
}

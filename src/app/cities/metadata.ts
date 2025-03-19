import { Metadata } from 'next';
import { citiesPageSeo } from '@/lib/seo';

/**
 * Generate metadata for the cities index page
 */
export function generateMetadata(): Metadata {
  return {
    title: citiesPageSeo.title,
    description: citiesPageSeo.description,
    keywords: citiesPageSeo.keywords?.join(', '),
    openGraph: {
      title: citiesPageSeo.title,
      description: citiesPageSeo.description,
      url: `https://rooffindr.com${citiesPageSeo.path}`,
      type: citiesPageSeo.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: citiesPageSeo.title,
      description: citiesPageSeo.description,
    },
  };
}

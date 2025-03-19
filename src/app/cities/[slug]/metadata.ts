import { Metadata } from 'next';
import { getCityBySlug } from '@/data/cities';
import { generateCityPageSeo, generatePageMetadata } from '@/lib/seo';

/**
 * Generate metadata for a city page
 *
 * @param params - Route parameters
 * @returns Metadata object for Next.js
 */
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return {
      title: 'City Not Found',
      description: 'The requested city page could not be found.',
    };
  }

  return generatePageMetadata(generateCityPageSeo(city.name, city.slug));
}

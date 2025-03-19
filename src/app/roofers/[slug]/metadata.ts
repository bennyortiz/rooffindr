import { Metadata } from 'next';
import { getRooferBySlug } from '@/data/roofers';
import { generateRooferPageSeo, generatePageMetadata } from '@/lib/seo';

/**
 * Generate metadata for a roofer page
 *
 * @param params - Route parameters
 * @returns Metadata object for Next.js
 */
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const roofer = getRooferBySlug(params.slug);

  if (!roofer) {
    return {
      title: 'Roofer Not Found',
      description: 'The requested roofer profile could not be found.',
    };
  }

  const location = roofer.address?.city || roofer.cities[0];
  return generatePageMetadata(generateRooferPageSeo(roofer.name, roofer.slug, location, roofer.services));
}

import { Metadata } from 'next';
import { getRooferBySlug } from '@/data/roofers';
import { generateRooferPageSeo } from '@/lib/seo';

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
  
  // Use the roofer's metadata or generate it from the roofer data
  const metaDescription = roofer.metaDescription || `${roofer.name} provides professional roofing services in ${roofer.address?.city || roofer.cities[0]}, Texas. Specializing in ${roofer.services.slice(0, 3).join(', ')}, and more.`;
  const metaKeywords = roofer.metaKeywords || [
    `${roofer.name}`,
    `${roofer.address?.city || roofer.cities[0]} roofer`,
    `${roofer.address?.city || roofer.cities[0]} roofing contractor`,
    ...roofer.services.map(service => `${service.toLowerCase()} roofing`),
    'Texas roofing services',
  ];
  
  return {
    title: `${roofer.name} | ${roofer.address?.city || roofer.cities[0]} Roofing Services`,
    description: metaDescription,
    keywords: metaKeywords.join(', '),
    openGraph: {
      title: `${roofer.name} | ${roofer.address?.city || roofer.cities[0]} Roofing Services`,
      description: metaDescription,
      url: `https://rooffindr.com/roofers/${roofer.slug}`,
      images: [{ url: roofer.image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${roofer.name} | ${roofer.address?.city || roofer.cities[0]} Roofing Services`,
      description: metaDescription,
      images: [roofer.image],
    },
  };
}

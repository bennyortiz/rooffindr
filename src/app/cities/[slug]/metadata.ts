import { Metadata } from 'next';
import { getCityBySlug } from '@/data/cities';
import { generateCityPageSeo } from '@/lib/seo';

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
  
  // Use the city's metadata or generate it from the city data
  const metaDescription = city.metaDescription || `Find the best roofing professionals in ${city.name}, Texas. Connect with local roofers who understand ${city.name}'s unique weather challenges and building requirements.`;
  const metaKeywords = city.metaKeywords || [
    `${city.name} roofers`,
    `${city.name} roofing contractors`,
    `${city.name} roof repair`,
    `${city.name} roof replacement`,
    'local roofing professionals',
    'Texas roofing services',
  ];
  
  return {
    title: `${city.name} Roofing Professionals | Top Local Roofers`,
    description: metaDescription,
    keywords: metaKeywords.join(', '),
    openGraph: {
      title: `${city.name} Roofing Professionals | Top Local Roofers`,
      description: metaDescription,
      url: `https://rooffindr.com/cities/${city.slug}`,
      images: [{ url: city.image || '/images/default-city.jpg' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Roofing Professionals | Top Local Roofers`,
      description: metaDescription,
      images: [city.image || '/images/default-city.jpg'],
    },
  };
}

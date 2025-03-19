import { PageSeoConfig } from './types';
import { siteConfig } from './config';

/**
 * Home page SEO configuration
 */
export const homePageSeo: PageSeoConfig = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  keywords: siteConfig.defaultKeywords,
  path: '/',
  type: 'website',
};

/**
 * About page SEO configuration
 */
export const aboutPageSeo: PageSeoConfig = {
  title: 'About RoofFindr | Our Mission and Values',
  description: 'Learn about RoofFindr\'s mission to connect Texas homeowners with trusted roofing professionals. Discover our story, values, and commitment to quality service.',
  keywords: [
    'about RoofFindr',
    'roofing directory mission',
    'Texas roofing platform',
    'trusted roofing professionals',
    'quality roofing services',
  ],
  path: '/about',
  type: 'website',
};

/**
 * Contact page SEO configuration
 */
export const contactPageSeo: PageSeoConfig = {
  title: 'Contact RoofFindr | Get in Touch with Our Team',
  description: 'Have questions about RoofFindr? Contact our team for support, partnership opportunities, or to learn more about our services for Texas homeowners and roofing professionals.',
  keywords: [
    'contact RoofFindr',
    'roofing directory support',
    'Texas roofing help',
    'roofing professional partnership',
    'roofing service questions',
  ],
  path: '/contact',
  type: 'website',
};

/**
 * Cities page SEO configuration
 */
export const citiesPageSeo: PageSeoConfig = {
  title: 'Texas Cities | Find Local Roofing Professionals',
  description: 'Browse roofing professionals by city across Texas. Find local roofers who understand your area\'s specific weather challenges and building codes.',
  keywords: [
    'Texas city roofers',
    'local roofing professionals',
    'city-specific roofing',
    'Texas roofing by location',
    'find roofers near me',
  ],
  path: '/cities',
  type: 'website',
};

/**
 * Roofers page SEO configuration
 */
export const roofersPageSeo: PageSeoConfig = {
  title: 'Browse Roofing Professionals | Texas Roofer Directory',
  description: 'Explore our directory of verified roofing professionals across Texas. Compare services, specialties, and reviews to find the perfect match for your roofing project.',
  keywords: [
    'Texas roofing professionals',
    'roofing contractors directory',
    'compare roofers',
    'verified roofing services',
    'Texas roofer reviews',
  ],
  path: '/roofers',
  type: 'website',
};

/**
 * Generate SEO config for a city page
 * 
 * @param cityName - Name of the city
 * @param citySlug - URL slug for the city
 * @returns Page SEO configuration
 */
export function generateCityPageSeo(cityName: string, citySlug: string): PageSeoConfig {
  return {
    title: `${cityName} Roofing Professionals | Top Local Roofers`,
    description: `Find the best roofing professionals in ${cityName}, Texas. Connect with local roofers who understand ${cityName}'s unique weather challenges and building requirements.`,
    keywords: [
      `${cityName} roofers`,
      `${cityName} roofing contractors`,
      `${cityName} roof repair`,
      `${cityName} roof replacement`,
      'local roofing professionals',
      'Texas roofing services',
    ],
    path: `/cities/${citySlug}`,
    type: 'website',
  };
}

/**
 * Generate SEO config for a roofer profile page
 * 
 * @param rooferName - Name of the roofing company
 * @param rooferSlug - URL slug for the roofer
 * @param location - Location of the roofer
 * @param services - Services offered by the roofer
 * @returns Page SEO configuration
 */
export function generateRooferPageSeo(
  rooferName: string,
  rooferSlug: string,
  location: string,
  services: string[]
): PageSeoConfig {
  return {
    title: `${rooferName} | ${location} Roofing Services`,
    description: `${rooferName} provides professional roofing services in ${location}, Texas. Specializing in ${services.slice(0, 3).join(', ')}, and more.`,
    keywords: [
      `${rooferName}`,
      `${location} roofer`,
      `${location} roofing contractor`,
      ...services.map(service => `${service.toLowerCase()} roofing`),
      'Texas roofing services',
    ],
    path: `/roofers/${rooferSlug}`,
    type: 'website',
  };
}

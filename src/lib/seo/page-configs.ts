import { PageSeoConfig } from './types';
import { siteConfig } from '@/lib/config/site';

/**
 * Home page SEO configuration
 */
export const homePageSeo: PageSeoConfig = {
  title: 'RoofFindr | Texas Roofing Directory',
  description:
    'Connect with trusted local roofing professionals across Texas. Find verified roofers, compare services, and make confident decisions for your roofing project.',
  keywords: [
    'roofing',
    'Texas roofers',
    'roof repair',
    'roofing contractors',
    'roofing directory',
    'find roofers',
    'Texas roofing professionals',
  ],
  url: siteConfig.url,
  og: {
    title: 'RoofFindr | Texas Roofing Directory',
    description: 'Connect with trusted local roofing professionals across Texas',
    type: 'website',
  },
};

/**
 * About page SEO configuration
 */
export const aboutPageSeo: PageSeoConfig = {
  title: 'About RoofFindr | Our Mission & Team',
  description:
    'Learn about RoofFindr\'s mission to connect Texas homeowners with qualified, trusted roofing professionals. Meet our team and discover our commitment to quality.',
  keywords: [
    'about RoofFindr',
    'roofing directory mission',
    'Texas roofing platform',
    'trusted roofer network',
    'roofing professionals Texas',
  ],
  url: `${siteConfig.url}/about`,
  og: {
    title: 'About RoofFindr | Our Mission & Team',
    description: 'Learn about our mission to connect Texas homeowners with trusted roofing professionals',
    type: 'website',
  },
};

/**
 * Contact page SEO configuration
 */
export const contactPageSeo: PageSeoConfig = {
  title: 'Contact RoofFindr | Get in Touch with Our Team',
  description:
    'Have questions about RoofFindr? Contact our team for support, partnership opportunities, or to learn more about our services for Texas homeowners and roofing professionals.',
  keywords: [
    'contact RoofFindr',
    'roofing directory support',
    'Texas roofing help',
    'roofing professional partnership',
    'roofing service questions',
  ],
  url: `${siteConfig.url}/contact`,
  og: {
    title: 'Contact RoofFindr | Get in Touch with Our Team',
    description: 'Contact our team for support or partnership opportunities',
    type: 'website',
  },
};

/**
 * Cities page SEO configuration
 */
export const citiesPageSeo: PageSeoConfig = {
  title: 'Texas Cities | Find Local Roofing Professionals',
  description:
    "Browse roofing professionals by city across Texas. Find local roofers who understand your area's specific weather challenges and building codes.",
  keywords: [
    'Texas city roofers',
    'local roofing professionals',
    'city-specific roofing',
    'Texas roofing by location',
    'find roofers near me',
  ],
  url: `${siteConfig.url}/cities`,
  og: {
    title: 'Texas Cities | Find Local Roofing Professionals',
    description: 'Browse roofing professionals by city across Texas',
    type: 'website',
  },
};

/**
 * Roofers page SEO configuration
 */
export const roofersPageSeo: PageSeoConfig = {
  title: 'Browse Roofing Professionals | Texas Roofer Directory',
  description:
    'Explore our directory of verified roofing professionals across Texas. Compare services, specialties, and reviews to find the perfect match for your roofing project.',
  keywords: [
    'Texas roofing professionals',
    'roofing contractors directory',
    'compare roofers',
    'verified roofing services',
    'Texas roofer reviews',
  ],
  url: `${siteConfig.url}/roofers`,
  og: {
    title: 'Browse Roofing Professionals | Texas Roofer Directory',
    description: 'Explore our directory of verified roofing professionals across Texas',
    type: 'website',
  },
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
    url: `${siteConfig.url}/cities/${citySlug}`,
    og: {
      title: `${cityName} Roofing Professionals | Top Local Roofers`,
      description: `Find the best roofing professionals in ${cityName}, Texas`,
      type: 'website',
    },
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
      ...services.map((service) => `${service.toLowerCase()} roofing`),
      'Texas roofing services',
    ],
    url: `${siteConfig.url}/roofers/${rooferSlug}`,
    og: {
      title: `${rooferName} | ${location} Roofing Services`,
      description: `Professional roofing services in ${location}, Texas`,
      type: 'website',
    },
  };
}

// Privacy Policy page SEO config
export const privacyPageSeo: PageSeoConfig = {
  title: 'Privacy Policy | RoofFindr',
  description:
    'Read RoofFindr\'s privacy policy to understand how we collect, use, and protect your personal information when you use our roofing professional directory services.',
  keywords: [
    'RoofFindr privacy policy',
    'roofing directory privacy',
    'personal data protection',
    'privacy terms',
    'data collection policy',
  ],
  url: `${siteConfig.url}/privacy`,
  og: {
    title: 'Privacy Policy | RoofFindr',
    description: 'Our commitment to protecting your privacy and personal information',
    type: 'website',
  },
};

// Terms of Service page SEO config
export const termsPageSeo: PageSeoConfig = {
  title: 'Terms of Service | RoofFindr',
  description:
    'Review RoofFindr\'s terms of service outlining the conditions for using our platform to connect with roofing professionals in Texas.',
  keywords: [
    'RoofFindr terms of service',
    'roofing directory terms',
    'service conditions',
    'user agreement',
    'legal terms',
  ],
  url: `${siteConfig.url}/terms`,
  og: {
    title: 'Terms of Service | RoofFindr',
    description: 'Terms and conditions for using the RoofFindr platform',
    type: 'website',
  },
};

// Accessibility page SEO config
export const accessibilityPageSeo: PageSeoConfig = {
  title: 'Accessibility Statement | RoofFindr',
  description:
    'RoofFindr is committed to digital accessibility. Learn about our efforts to make our platform accessible to all users, including those with disabilities.',
  keywords: [
    'RoofFindr accessibility',
    'web accessibility',
    'accessible roofing directory',
    'disability access',
    'WCAG compliance',
  ],
  url: `${siteConfig.url}/accessibility`,
  og: {
    title: 'Accessibility Statement | RoofFindr',
    description: 'Our commitment to making RoofFindr accessible to all users',
    type: 'website',
  },
};

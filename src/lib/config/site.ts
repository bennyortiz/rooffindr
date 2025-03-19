/**
 * Site configuration settings
 */
export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  keywords: string[];
  author: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

/**
 * Site-wide configuration
 */
export const siteConfig: SiteConfig = {
  name: 'RoofFindr',
  url: 'https://rooffindr.com',
  description: 'Connect with trusted local roofing professionals across Texas.',
  keywords: [
    'roofing',
    'Texas roofers',
    'roof repair',
    'roofing contractors',
    'roofing directory',
    'find roofers',
    'Texas roofing professionals',
  ],
  author: 'RoofFindr Team',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/rooffindr',
    github: 'https://github.com/rooffindr',
    linkedin: 'https://linkedin.com/company/rooffindr',
    facebook: 'https://facebook.com/rooffindr',
    instagram: 'https://instagram.com/rooffindr',
  },
  contact: {
    email: 'info@rooffindr.com',
    phone: '+1-555-123-4567',
    address: 'Austin, TX',
  },
}; 
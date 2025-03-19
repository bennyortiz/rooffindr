/**
 * Base SEO configuration interface
 */
export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Open Graph metadata
 */
export interface OgConfig {
  title: string;
  description: string;
  type: 'website' | 'article' | 'profile';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

/**
 * Page-specific SEO configuration
 */
export interface PageSeoConfig extends SeoConfig {
  url: string;
  og: OgConfig;
}

/**
 * Site-wide SEO configuration
 */
export interface SiteSeoConfig {
  siteName: string;
  siteUrl: string;
  twitterHandle?: string;
  twitterCardType?: 'summary' | 'summary_large_image';
  facebookAppId?: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  defaultOgImage: string;
}

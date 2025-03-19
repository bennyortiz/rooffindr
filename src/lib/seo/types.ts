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
 * Page-specific SEO configuration
 */
export interface PageSeoConfig extends SeoConfig {
  path: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
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

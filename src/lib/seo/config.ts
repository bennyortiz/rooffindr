import { SiteSeoConfig } from './types';
import { siteConfig as mainSiteConfig } from '@/lib/config/site';

/**
 * Site-wide SEO configuration
 * @deprecated Use siteConfig from @/lib/config/site instead
 */
export const siteConfig: SiteSeoConfig = {
  siteName: mainSiteConfig.name,
  siteUrl: mainSiteConfig.url,
  twitterHandle: '@rooffindr',
  twitterCardType: 'summary_large_image',
  defaultTitle: 'RoofFindr | Texas Roofing Directory',
  defaultDescription: mainSiteConfig.description,
  defaultKeywords: mainSiteConfig.keywords,
  defaultOgImage: mainSiteConfig.ogImage,
};

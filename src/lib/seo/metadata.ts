import { Metadata, Viewport } from 'next';
import { siteConfig } from './config';
import { PageSeoConfig, SeoConfig } from './types';

/**
 * Generate basic SEO metadata from configuration
 *
 * @param config - SEO configuration
 * @returns Metadata object for Next.js
 */
export function generateMetadata(config: SeoConfig): Metadata {
  const title = config.title || siteConfig.defaultTitle;
  const description = config.description || siteConfig.defaultDescription;
  const keywords = config.keywords || siteConfig.defaultKeywords;
  const ogImage = config.ogImage || siteConfig.defaultOgImage;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
      siteName: siteConfig.siteName,
    },
    twitter: {
      card: siteConfig.twitterCardType || 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: !config.noIndex,
      follow: !config.noIndex,
    },
  };
}

/**
 * Generate responsive viewport metadata
 *
 * @returns Viewport object for Next.js
 */
export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#18181b' },
    ],
  };
}

/**
 * Generate page-specific SEO metadata
 *
 * @param config - Page-specific SEO configuration
 * @returns Metadata object for Next.js
 */
export function generatePageMetadata(config: PageSeoConfig): Metadata {
  const baseMetadata = generateMetadata(config);
  const url = config.url;

  return {
    ...baseMetadata,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url,
      type: config.og.type,
      ...(config.og.type === 'article' && {
        article: {
          publishedTime: config.og.publishedTime,
          modifiedTime: config.og.modifiedTime,
          authors: config.og.authors,
          section: config.og.section,
          tags: config.og.tags,
        },
      }),
    },
  };
}

/**
 * Generate structured data JSON string for SEO
 *
 * @param type - Type of structured data
 * @param data - Structured data object
 * @returns JSON string for use in script tag
 */
export function generateStructuredDataString(type: string, data: Record<string, any>): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return JSON.stringify(structuredData);
}

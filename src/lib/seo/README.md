# SEO System for RoofFindr

This directory contains a modular and reusable SEO system for the RoofFindr application. It provides utilities for generating metadata, structured data, and other SEO-related features.

## Overview

The SEO system consists of several components:

- **Types**: TypeScript interfaces for SEO configurations
- **Config**: Site-wide SEO configuration
- **Metadata**: Utilities for generating Next.js metadata
- **Page Configs**: Predefined SEO configurations for different page types
- **Components**: React components for adding structured data to pages

## Usage

### Basic Metadata

To add metadata to a page, create a `metadata.ts` file in the page directory:

```typescript
// src/app/some-page/metadata.ts
import { Metadata } from 'next';
import { generatePageMetadata, somePageSeo } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return generatePageMetadata(somePageSeo);
}
```

### Dynamic Metadata

For dynamic pages, you can generate metadata based on route parameters:

```typescript
// src/app/cities/[slug]/metadata.ts
import { Metadata } from 'next';
import { generatePageMetadata, generateCityPageSeo } from '@/lib/seo';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cityName = params.slug.replace(/-/g, ' ');
  const citySlug = params.slug;

  return generatePageMetadata(generateCityPageSeo(cityName, citySlug));
}
```

### Structured Data

To add structured data to a page, use the `StructuredData` component:

```tsx
// src/app/some-page/page.tsx
import { StructuredData } from '@/components/seo';
import { siteConfig } from '@/lib/seo';

export default function SomePage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          name: 'Page Title',
          description: 'Page description',
          url: `${siteConfig.siteUrl}/some-page`,
          // ...other properties
        }}
      />

      {/* Page content */}
    </>
  );
}
```

## Files

- `types.ts`: TypeScript interfaces for SEO configurations
- `config.ts`: Site-wide SEO configuration
- `metadata.ts`: Utilities for generating Next.js metadata
- `page-configs.ts`: Predefined SEO configurations for different page types
- `index.ts`: Barrel file exporting all SEO utilities

## Components

- `StructuredData`: React component for adding structured data to pages

## Best Practices

1. **Use predefined configurations**: Use the predefined SEO configurations in `page-configs.ts` whenever possible.
2. **Add structured data**: Include relevant structured data on each page to improve search engine understanding.
3. **Keep metadata consistent**: Ensure that metadata is consistent across the site.
4. **Update site-wide config**: Update the site-wide configuration in `config.ts` when necessary.
5. **Follow the pattern**: Follow the established pattern for adding metadata to new pages.

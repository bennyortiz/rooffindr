import { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Roofing in Texas | RoofFindr',
  description: 'Everything Texas homeowners need to know about roofing materials, maintenance, and finding the right professional for your roofing project.',
  openGraph: {
    title: 'The Ultimate Guide to Roofing in Texas | RoofFindr',
    description: 'Everything Texas homeowners need to know about roofing materials, maintenance, and finding the right professional.',
    url: `${siteConfig.url}/blog/roofing-guide`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'article',
    publishedTime: '2023-10-15T00:00:00Z',
    authors: ['Michael Rodriguez'],
    tags: ['Guide', 'Maintenance', 'Materials', 'Texas'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Roofing in Texas | RoofFindr',
    description: 'Everything Texas homeowners need to know about roofing materials, maintenance, and finding the right professional.',
  },
}; 
import { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'Roofing Resources & Blog | RoofFindr',
  description: 'Explore our roofing resources, guides, and tips to help you maintain your roof and make informed decisions about your roofing projects.',
  openGraph: {
    title: 'Roofing Resources & Blog | RoofFindr',
    description: 'Explore our roofing resources, guides, and tips to help you maintain your roof and make informed decisions.',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Resources & Blog | RoofFindr',
    description: 'Explore our roofing resources, guides, and tips to help you maintain your roof and make informed decisions.',
  },
}; 
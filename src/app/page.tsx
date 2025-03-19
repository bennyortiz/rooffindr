'use client';

import { RoofingForm } from '@/components/common/RoofingForm';
import { Hero } from '@/components/sections/Hero';
import { FeaturedRoofers } from '@/components/sections/FeaturedRoofers';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { Cta } from '@/components/sections/Cta';
import { Faq } from '@/components/sections/Faq';
import { StructuredData } from '@/components/seo';
import {
  featuredRoofers,
  howItWorksSteps,
  testimonials,
  heroData,
  ctaData,
  faqItems,
} from '@/data/home-page';
import { Step } from '@/types';
import { siteConfig } from '@/lib/config/site';
import { getStepIcon } from '@/lib/utils/icons';

/**
 * Home page component
 */
export default function Home() {
  // Add icons to the steps data
  const stepsWithIcons: Step[] = howItWorksSteps.map((step, index) => ({
    ...step,
    icon: getStepIcon(index),
  }));

  return (
    <>
      {/* Organization Structured Data */}
      <StructuredData
        type="Organization"
        data={{
          name: siteConfig.name,
          url: siteConfig.url,
          logo: `${siteConfig.url}/logo.png`,
          sameAs: [
            'https://twitter.com/rooffindr',
            'https://facebook.com/rooffindr',
            'https://instagram.com/rooffindr',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-123-4567',
            contactType: 'customer service',
            areaServed: 'TX',
            availableLanguage: 'English',
          },
        }}
      />

      {/* FAQ Structured Data */}
      <StructuredData
        type="FAQPage"
        data={{
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />
      {/* Hero Section */}
      <Hero {...heroData}>
        <RoofingForm />
      </Hero>

      {/* Featured Roofers Section */}
      <FeaturedRoofers
        title="Featured Roofing Professionals"
        roofers={featuredRoofers}
        viewAllLink="/roofers"
      />

      {/* How It Works Section */}
      <HowItWorks
        title="How RoofFindr Works"
        description="We make it easy to find and connect with trusted roofing professionals in your area."
        steps={stepsWithIcons}
      />

      {/* Testimonials Section */}
      <Testimonials title="What Texas Homeowners Say" testimonials={testimonials} />

      {/* FAQ Section */}
      <Faq
        title="Frequently Asked Questions"
        description="Find answers to common questions about RoofFindr and our services."
        items={faqItems}
        bgColor="bg-muted"
      />

      {/* CTA Section */}
      <Cta {...ctaData} />
    </>
  );
}

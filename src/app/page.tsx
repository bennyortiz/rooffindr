"use client";

import { RoofingForm } from "@/components/common/RoofingForm";
import { Hero } from "@/components/sections/Hero";
import { FeaturedRoofers } from "@/components/sections/FeaturedRoofers";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Cta } from "@/components/sections/Cta";
import { Faq } from "@/components/sections/Faq";
import { 
  featuredRoofers, 
  howItWorksSteps, 
  testimonials, 
  heroData, 
  ctaData,
  faqItems
} from "@/data/home-page";
import { Step } from "@/types";

/**
 * Home page component
 */
export default function Home() {
  // Add icons to the steps data
  const stepsWithIcons: Step[] = howItWorksSteps.map((step, index) => {
    const icons = [
      <span key="icon-1" className="text-2xl">📝</span>,
      <span key="icon-2" className="text-2xl">🤝</span>,
      <span key="icon-3" className="text-2xl">⭐</span>,
      <span key="icon-4" className="text-2xl">🏠</span>,
    ];
    
    return {
      ...step,
      icon: icons[index] || <span className="text-2xl">📋</span>,
    };
  });

  return (
    <>
      {/* Hero Section */}
      <Hero
        {...heroData}
      >
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
      <Testimonials
        title="What Texas Homeowners Say"
        testimonials={testimonials}
      />

      {/* FAQ Section */}
      <Faq
        title="Frequently Asked Questions"
        description="Find answers to common questions about RoofFindr and our services."
        items={faqItems}
        bgColor="bg-muted"
      />

      {/* CTA Section */}
      <Cta
        {...ctaData}
      />
    </>
  );
}

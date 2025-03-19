"use client";

import { StructuredData } from "@/components/seo";
import { Section } from "@/components/ui/containers/Section";
import { Container } from "@/components/ui/containers/Container";
import { siteConfig } from "@/lib/seo";

/**
 * About page component
 */
export default function AboutPage() {
  return (
    <>
      {/* About Page Structured Data */}
      <StructuredData 
        type="WebPage"
        data={{
          name: "About RoofFindr",
          description: "Learn about RoofFindr's mission to connect Texas homeowners with trusted roofing professionals.",
          url: `${siteConfig.siteUrl}/about`,
          publisher: {
            "@type": "Organization",
            name: siteConfig.siteName,
            logo: `${siteConfig.siteUrl}/logo.png`
          }
        }}
      />
      
      <Section bgColor="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About RoofFindr</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                RoofFindr connects Texas homeowners with trusted local roofing professionals. 
                Our mission is to simplify the process of finding quality roofing services.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                At RoofFindr, we believe that finding a reliable roofing professional shouldn't be complicated. 
                Our platform is designed to make it easy for homeowners to connect with verified roofing experts 
                who understand the unique challenges of Texas weather and building requirements.
              </p>
              
              <h2>Why Choose RoofFindr</h2>
              <ul>
                <li><strong>Verified Professionals:</strong> All roofing contractors in our network are thoroughly vetted.</li>
                <li><strong>Local Expertise:</strong> Find roofers who understand your area's specific needs.</li>
                <li><strong>Transparent Process:</strong> Compare services, reviews, and quotes easily.</li>
                <li><strong>No Obligations:</strong> Our service is completely free for homeowners.</li>
              </ul>
              
              <h2>Our Story</h2>
              <p>
                RoofFindr was founded in 2023 after our founder experienced the frustration of trying to find 
                a reliable roofer after a major storm. What started as a simple directory has grown into a 
                comprehensive platform that serves homeowners across Texas.
              </p>
              
              <h2>Our Values</h2>
              <ul>
                <li><strong>Quality:</strong> We only partner with professionals who deliver exceptional work.</li>
                <li><strong>Integrity:</strong> Honest, transparent business practices are non-negotiable.</li>
                <li><strong>Community:</strong> We're committed to supporting local businesses and communities.</li>
                <li><strong>Innovation:</strong> We continuously improve our platform to better serve our users.</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

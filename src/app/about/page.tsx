'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StructuredData } from '@/components/seo';
import { Section } from '@/components/ui/containers/Section';
import { Container } from '@/components/ui/containers/Container';
import { siteConfig } from '@/lib/config/site';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { CheckIcon, Users, Shield, Home, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * About page component with enhanced visual design
 */
export default function AboutPage() {
  // Use client-side only rendering for images to prevent hydration mismatches
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* About Page Structured Data */}
      <StructuredData
        type="WebPage"
        data={{
          name: 'About RoofFindr',
          description:
            "Learn about RoofFindr's mission to connect Texas homeowners with trusted roofing professionals.",
          url: `${siteConfig.url}/about`,
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: `${siteConfig.url}/logo.png`,
          },
        }}
      />

      {/* Hero Section */}
      <Section bgColor="bg-primary" textColor="text-white" className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">About RoofFindr</h1>
              <p className="text-xl opacity-90 max-w-xl mx-auto lg:mx-0">
                We connect Texas homeowners with trusted local roofing professionals. Our
                mission is to simplify the process of finding quality roofing services.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl mx-auto lg:mx-0 max-w-md lg:max-w-none w-full">
              {isMounted && (
                <Image
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
                  alt="RoofFindr Team" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section bgColor="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At RoofFindr, we believe that finding a reliable roofing professional shouldn't be
              complicated. Our platform is designed to make it easy for homeowners to connect with
              verified roofing experts who understand the unique challenges of Texas weather and
              building requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Value Cards */}
            <Card className="border-t-4 border-t-primary hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We only partner with professionals who deliver exceptional work.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Honest, transparent business practices are non-negotiable.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We're committed to supporting local businesses and communities.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We continuously improve our platform to better serve our users.</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
      
      {/* Story Section with Image */}
      <Section bgColor="bg-muted">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              {isMounted && (
                <Image
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop"
                  alt="Texas Roofing"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              )}
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                RoofFindr was founded in 2023 after our founder experienced the frustration of
                trying to find a reliable roofer after a major storm. What started as a simple
                directory has grown into a comprehensive platform that serves homeowners across
                Texas.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're proud to be the most trusted resource for connecting homeowners
                with quality roofing professionals throughout the state.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section bgColor="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose RoofFindr</h2>
            <p className="text-lg text-muted-foreground">
              Our platform offers unique advantages for Texas homeowners looking for reliable
              roofing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 mt-1 flex-shrink-0">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
                <p className="text-muted-foreground">
                  All roofing contractors in our network are thoroughly vetted to ensure quality workmanship.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 mt-1 flex-shrink-0">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Find roofers who understand your area's specific needs and weather challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 mt-1 flex-shrink-0">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
                <p className="text-muted-foreground">
                  Compare services, reviews, and quotes easily to make an informed decision.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-full p-2 mt-1 flex-shrink-0">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">No Obligations</h3>
                <p className="text-muted-foreground">
                  Our service is completely free for homeowners with no hidden fees or commitments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-primary" textColor="text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Roofing Professional?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of Texas homeowners who have found reliable roofing services through RoofFindr.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Get Started Today
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

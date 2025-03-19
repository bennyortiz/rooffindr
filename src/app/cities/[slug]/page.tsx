'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { StructuredData } from '@/components/seo';
import { Section } from '@/components/ui/containers/Section';
import { Container } from '@/components/ui/containers/Container';
import { RooferCard } from '@/components/cards/RooferCard';
import { getCityBySlug } from '@/data/cities';
import { getRoofersByCity } from '@/data/roofers';
import { City, Roofer } from '@/types';
import { siteConfig } from '@/lib/seo';

/**
 * City page component
 */
export default function CityPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [city, setCity] = useState<City | null>(null);
  const [roofers, setRoofers] = useState<Roofer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const cityData = getCityBySlug(slug);
      if (cityData) {
        setCity(cityData);
        const cityRoofers = getRoofersByCity(cityData.name);
        setRoofers(cityRoofers);
      }
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <Section bgColor="bg-white">
        <Container>
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse text-xl">Loading...</div>
          </div>
        </Container>
      </Section>
    );
  }

  if (!city) {
    return (
      <Section bgColor="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">City Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The city you're looking for could not be found. Please check the URL and try again.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* City Page Structured Data */}
      <StructuredData
        type="Place"
        data={{
          name: city.name,
          description: city.description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: 'TX',
            addressCountry: 'US',
          },
        }}
      />

      {/* Hero Section */}
      <Section bgColor="bg-primary/10" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Top Roofing Professionals in {city.name}, TX
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Connect with trusted local roofers who understand {city.name}'s unique weather
                challenges and building requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                  Get Free Quotes
                </button>
                <button className="btn btn-outline px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <img
                src={
                  city.image ||
                  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop'
                }
                alt={`${city.name}, Texas`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* City Description */}
      {city.description && (
        <Section bgColor="bg-white" className="py-12">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">About {city.name}</h2>
              <div className="prose prose-lg max-w-none">
                <p>{city.description}</p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Roofers Section */}
      <Section bgColor="bg-muted/30" className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {roofers.length > 0
                ? `${roofers.length} Roofing Professionals in ${city.name}`
                : `Roofing Professionals in ${city.name}`}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our directory of verified roofing professionals serving {city.name}. Compare
              services, specialties, and reviews to find the perfect match for your roofing project.
            </p>
          </div>

          {roofers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roofers.map((roofer) => (
                <RooferCard key={roofer.id} roofer={roofer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg shadow-sm">
              <p className="text-lg mb-4">We're currently expanding our network in {city.name}.</p>
              <p className="text-muted-foreground">
                Check back soon or submit your information to be notified when roofers are available
                in your area.
              </p>
              <button className="mt-6 px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                Get Notified
              </button>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-primary/10" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Roofing Professional in {city.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out our simple form to get connected with trusted local roofers who can help with
              your project.
            </p>
            <button className="px-8 py-4 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              Find a Roofer Now
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
}

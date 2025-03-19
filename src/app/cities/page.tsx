'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StructuredData } from '@/components/seo';
import { Section } from '@/components/ui/containers/Section';
import { Container } from '@/components/ui/containers/Container';
import { cities } from '@/data/cities';
import { siteConfig } from '@/lib/config/site';

/**
 * Cities index page component
 */
export default function CitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter cities based on search term
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Cities Page Structured Data */}
      <StructuredData
        type="ItemList"
        data={{
          itemListElement: cities.map((city, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Place',
              name: city.name,
              url: `${siteConfig.url}/cities/${city.slug}`,
            },
          })),
        }}
      />

      {/* Hero Section */}
      <Section bgColor="bg-primary/10" className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Find Roofing Professionals by City
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our directory of roofing professionals by city across Texas. Find local roofers
              who understand your area's specific weather challenges and building codes.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for a city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cities Grid Section */}
      <Section bgColor="bg-white" className="py-16">
        <Container>
          {filteredCities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.map((city) => (
                <Link key={city.id} href={`/cities/${city.slug}`} className="group block">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="aspect-video w-full relative">
                      <img
                        src={
                          city.image ||
                          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop'
                        }
                        alt={`${city.name}, Texas`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                        {city.name}, TX
                      </h2>
                    </div>
                    <div className="p-4">
                      <p className="text-muted-foreground line-clamp-2">
                        {city.description?.substring(0, 120)}...
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-primary font-medium">View Roofers</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-primary transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No Cities Found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any cities matching your search. Please try a different search
                term.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-primary/10" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your City?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're constantly expanding our network of roofing professionals across Texas. Submit
              your information and we'll notify you when we add roofers in your area.
            </p>
            <button className="px-8 py-4 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              Request Your City
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
}

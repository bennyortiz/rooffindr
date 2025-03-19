"use client";

import { useState } from "react";
import { StructuredData } from "@/components/seo";
import { Section } from "@/components/ui/containers/Section";
import { Container } from "@/components/ui/containers/Container";
import { RooferCard } from "@/components/cards/RooferCard";
import { roofers } from "@/data/roofers";
import { cities } from "@/data/cities";
import { siteConfig } from "@/lib/seo";

/**
 * Roofers index page component
 */
export default function RoofersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedService, setSelectedService] = useState("");
  
  // Get unique services from all roofers
  const allServices = Array.from(
    new Set(
      roofers.flatMap(roofer => roofer.services)
    )
  ).sort();
  
  // Filter roofers based on search term, city, and service
  const filteredRoofers = roofers.filter(roofer => {
    const matchesSearch = searchTerm === "" || 
      roofer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      roofer.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCity = selectedCity === "" || 
      roofer.cities.includes(selectedCity);
    
    const matchesService = selectedService === "" || 
      roofer.services.some(service => 
        service.toLowerCase().includes(selectedService.toLowerCase())
      );
    
    return matchesSearch && matchesCity && matchesService;
  });
  
  return (
    <>
      {/* Roofers Page Structured Data */}
      <StructuredData 
        type="ItemList"
        data={{
          itemListElement: roofers.map((roofer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "LocalBusiness",
              name: roofer.name,
              image: roofer.image,
              url: `${siteConfig.siteUrl}/roofers/${roofer.slug}`,
              telephone: roofer.contact?.phone,
              address: roofer.address ? {
                "@type": "PostalAddress",
                addressLocality: roofer.address.city,
                addressRegion: roofer.address.state,
              } : undefined,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: roofer.rating,
                reviewCount: roofer.reviews
              }
            }
          }))
        }}
      />
      
      {/* Hero Section */}
      <Section bgColor="bg-primary/10" className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Browse Roofing Professionals
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our directory of verified roofing professionals across Texas. Compare services, specialties, and reviews to find the perfect match for your roofing project.
            </p>
          </div>
        </Container>
      </Section>
      
      {/* Filters Section */}
      <Section bgColor="bg-white" className="py-8 border-b">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Filter */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* City Filter */}
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              >
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Service Filter */}
            <div>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              >
                <option value="">All Services</option>
                {allServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Filter Tags */}
          {(searchTerm || selectedCity || selectedService) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <div className="flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  <span>Search: {searchTerm}</span>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="ml-2 text-primary hover:text-primary/70"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              
              {selectedCity && (
                <div className="flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  <span>City: {selectedCity}</span>
                  <button 
                    onClick={() => setSelectedCity("")}
                    className="ml-2 text-primary hover:text-primary/70"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              
              {selectedService && (
                <div className="flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  <span>Service: {selectedService}</span>
                  <button 
                    onClick={() => setSelectedService("")}
                    className="ml-2 text-primary hover:text-primary/70"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              
              {(searchTerm || selectedCity || selectedService) && (
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCity("");
                    setSelectedService("");
                  }}
                  className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-300"
                >
                  Clear All
                </button>
              )}
            </div>
          )}
        </Container>
      </Section>
      
      {/* Roofers Grid Section */}
      <Section bgColor="bg-gray-50" className="py-16">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {filteredRoofers.length} Roofing Professionals Found
            </h2>
          </div>
          
          {filteredRoofers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoofers.map((roofer) => (
                <RooferCard key={roofer.id} roofer={roofer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">No Roofers Found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any roofing professionals matching your filters. Please try different search criteria.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCity("");
                  setSelectedService("");
                }}
                className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Clear Filters
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
              Need Help Finding the Right Roofer?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out our simple form and we'll match you with the best roofing professionals for your specific project.
            </p>
            <button className="px-8 py-4 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              Get Matched Now
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
}

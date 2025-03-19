"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { StructuredData } from "@/components/seo";
import { Section } from "@/components/ui/containers/Section";
import { Container } from "@/components/ui/containers/Container";
import { getRooferBySlug } from "@/data/roofers";
import { Roofer } from "@/types";
import { siteConfig } from "@/lib/seo";

/**
 * Roofer page component
 */
export default function RooferPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [roofer, setRoofer] = useState<Roofer | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (slug) {
      const rooferData = getRooferBySlug(slug);
      if (rooferData) {
        setRoofer(rooferData);
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
  
  if (!roofer) {
    return (
      <Section bgColor="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Roofer Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The roofing professional you're looking for could not be found. Please check the URL and try again.
            </p>
          </div>
        </Container>
      </Section>
    );
  }
  
  // Format business hours for display
  const formatBusinessHours = () => {
    if (!roofer.businessHours) return null;
    
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return days.map(day => {
      const hours = roofer.businessHours?.[day as keyof typeof roofer.businessHours];
      return hours ? (
        <div key={day} className="flex justify-between py-1 border-b border-gray-100 last:border-0">
          <span className="capitalize">{day}</span>
          <span>{hours}</span>
        </div>
      ) : null;
    });
  };
  
  return (
    <>
      {/* Roofer Page Structured Data */}
      <StructuredData 
        type="LocalBusiness"
        data={{
          "@id": `https://rooffindr.com/roofers/${roofer.slug}`,
          name: roofer.name,
          image: roofer.image,
          description: roofer.description,
          url: `https://rooffindr.com/roofers/${roofer.slug}`,
          telephone: roofer.contact?.phone,
          email: roofer.contact?.email,
          address: roofer.address ? {
            "@type": "PostalAddress",
            streetAddress: roofer.address.street,
            addressLocality: roofer.address.city,
            addressRegion: roofer.address.state,
            postalCode: roofer.address.zipCode,
            addressCountry: "US"
          } : undefined,
          geo: {
            "@type": "GeoCoordinates",
            latitude: "29.7604",
            longitude: "-95.3698"
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: roofer.rating,
            reviewCount: roofer.reviews
          },
          priceRange: "$$",
          openingHoursSpecification: roofer.businessHours ? [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Monday",
              opens: roofer.businessHours.monday?.split(" - ")[0] || "8:00 AM",
              closes: roofer.businessHours.monday?.split(" - ")[1] || "5:00 PM"
            },
            // Additional days would be added here
          ] : undefined,
          sameAs: [
            roofer.socialMedia?.facebook,
            roofer.socialMedia?.twitter,
            roofer.socialMedia?.instagram,
            roofer.socialMedia?.linkedin,
            roofer.socialMedia?.youtube,
          ].filter(Boolean)
        }}
      />
      
      {/* Hero Section */}
      <Section bgColor="bg-primary/5" className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">{roofer.name}</h1>
                {roofer.yearsInBusiness && (
                  <span className="ml-4 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {roofer.yearsInBusiness} Years in Business
                  </span>
                )}
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${i < Math.floor(roofer.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-medium">{roofer.rating}</span>
                  <span className="ml-1 text-muted-foreground">({roofer.reviews} reviews)</span>
                </div>
              </div>
              
              {roofer.description && (
                <div className="prose prose-lg max-w-none mb-8">
                  <p>{roofer.description}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Services */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Services</h3>
                  <ul className="space-y-2">
                    {roofer.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary mr-2">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Service Areas */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
                  <ul className="space-y-2">
                    {roofer.cities.map((city, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary mr-2">
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        {city}, TX
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {roofer.certifications && roofer.certifications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Certifications & Credentials</h3>
                  <div className="flex flex-wrap gap-3">
                    {roofer.certifications.map((cert, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                  Contact Now
                </button>
                <button className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
                  Get a Quote
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video w-full">
                  <img 
                    src={roofer.image} 
                    alt={roofer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  {/* Contact Information */}
                  {roofer.contact && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                      <ul className="space-y-3">
                        {roofer.contact.phone && (
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary mr-3 mt-0.5">
                              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            <span>{roofer.contact.phone}</span>
                          </li>
                        )}
                        {roofer.contact.email && (
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary mr-3 mt-0.5">
                              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <span>{roofer.contact.email}</span>
                          </li>
                        )}
                        {roofer.contact.website && (
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary mr-3 mt-0.5">
                              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                            </svg>
                            <a href={roofer.contact.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {roofer.contact.website.replace(/^https?:\/\/(www\.)?/, '')}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  
                  {/* Address */}
                  {roofer.address && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">Address</h3>
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary mr-3 mt-0.5">
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p>{roofer.address.street}</p>
                          <p>{roofer.address.city}, {roofer.address.state} {roofer.address.zipCode}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Business Hours */}
                  {roofer.businessHours && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                      <div className="space-y-1">
                        {formatBusinessHours()}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* CTA Section */}
      <Section bgColor="bg-primary/10" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work with {roofer.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch today to discuss your roofing project and receive a free quote.
            </p>
            <button className="px-8 py-4 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              Contact Now
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
}

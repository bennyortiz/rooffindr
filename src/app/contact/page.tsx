'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Section } from '@/components/ui/containers/Section';
import { Container } from '@/components/ui/containers/Container';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { MailIcon, HomeIcon, PhoneIcon, GlobeIcon, Building2, CheckSquare, Clock, FileText } from 'lucide-react';
import { StructuredData } from '@/components/seo';
import { siteConfig } from '@/lib/config/site';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    website: '',
    yearsInBusiness: '',
    licenseNumber: '',
    description: '',
    services: {
      residential: false,
      commercial: false,
      repairs: false,
      replacement: false,
      inspection: false,
      gutters: false,
      siding: false,
      other: false
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => {
      if (field.startsWith('services.')) {
        const serviceField = field.split('.')[1];
        return {
          ...prev,
          services: {
            ...prev.services,
            [serviceField]: value
          }
        };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Application submitted successfully', {
        description: 'We\'ll review your information and get back to you shortly.',
      });
    }, 1500);
  };

  return (
    <>
      <StructuredData
        type="ContactPage"
        data={{
          name: "Contact RoofFindr",
          description: "Join our network of trusted roofing professionals in Texas.",
          url: `${siteConfig.url}/contact`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            contactType: "Customer Service"
          }
        }}
      />
    
      <Section bgColor="bg-muted/50" className="py-12 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Professional Network</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Apply to become part of RoofFindr's trusted network of roofing professionals. Connect with homeowners across Texas looking for quality roofing services.
              </p>
            </div>

            {!isSubmitted ? (
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Business Information */}
                    <div className="space-y-6 md:col-span-2">
                      <h2 className="text-xl font-semibold border-b pb-2">Business Information</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="businessName">Business Name</Label>
                          <div className="flex mt-1.5">
                            <Building2 className="mr-2 h-4 w-4 opacity-70 mt-3" />
                            <Input
                              id="businessName"
                              placeholder="Your company name"
                              value={formData.businessName}
                              onChange={(e) => updateFormData('businessName', e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="contactName">Contact Person</Label>
                            <Input
                              id="contactName"
                              placeholder="Full name"
                              value={formData.contactName}
                              onChange={(e) => updateFormData('contactName', e.target.value)}
                              required
                              className="mt-1.5"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="yearsInBusiness">Years in Business</Label>
                            <div className="flex mt-1.5">
                              <Clock className="mr-2 h-4 w-4 opacity-70 mt-3" />
                              <Input
                                id="yearsInBusiness"
                                placeholder="e.g. 5"
                                value={formData.yearsInBusiness}
                                onChange={(e) => updateFormData('yearsInBusiness', e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <div className="flex mt-1.5">
                          <MailIcon className="mr-2 h-4 w-4 opacity-70 mt-3" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="flex mt-1.5">
                          <PhoneIcon className="mr-2 h-4 w-4 opacity-70 mt-3" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <div className="flex mt-1.5">
                          <GlobeIcon className="mr-2 h-4 w-4 opacity-70 mt-3" />
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://www.example.com"
                            value={formData.website}
                            onChange={(e) => updateFormData('website', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Location Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Business Address</Label>
                        <div className="flex mt-1.5">
                          <HomeIcon className="mr-2 h-4 w-4 opacity-70 mt-3" />
                          <Input
                            id="address"
                            placeholder="Street address"
                            value={formData.address}
                            onChange={(e) => updateFormData('address', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            placeholder="Austin"
                            value={formData.city}
                            onChange={(e) => updateFormData('city', e.target.value)}
                            required
                            className="mt-1.5"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            placeholder="78701"
                            value={formData.zipCode}
                            onChange={(e) => updateFormData('zipCode', e.target.value)}
                            required
                            className="mt-1.5"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="licenseNumber">License Number</Label>
                        <div className="flex mt-1.5">
                          <FileText className="mr-2 h-4 w-4 opacity-70 mt-3" />
                          <Input
                            id="licenseNumber"
                            placeholder="Your business license number"
                            value={formData.licenseNumber}
                            onChange={(e) => updateFormData('licenseNumber', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Services Offered */}
                    <div className="md:col-span-2 space-y-4">
                      <h2 className="text-xl font-semibold border-b pb-2">Services Offered</h2>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="residential" 
                            checked={formData.services.residential}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.residential', checked === true)}
                          />
                          <Label htmlFor="residential" className="cursor-pointer">Residential</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="commercial" 
                            checked={formData.services.commercial}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.commercial', checked === true)}
                          />
                          <Label htmlFor="commercial" className="cursor-pointer">Commercial</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="repairs" 
                            checked={formData.services.repairs}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.repairs', checked === true)}
                          />
                          <Label htmlFor="repairs" className="cursor-pointer">Repairs</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="replacement" 
                            checked={formData.services.replacement}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.replacement', checked === true)}
                          />
                          <Label htmlFor="replacement" className="cursor-pointer">Replacement</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="inspection" 
                            checked={formData.services.inspection}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.inspection', checked === true)}
                          />
                          <Label htmlFor="inspection" className="cursor-pointer">Inspection</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="gutters" 
                            checked={formData.services.gutters}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.gutters', checked === true)}
                          />
                          <Label htmlFor="gutters" className="cursor-pointer">Gutters</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="siding" 
                            checked={formData.services.siding}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.siding', checked === true)}
                          />
                          <Label htmlFor="siding" className="cursor-pointer">Siding</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="other" 
                            checked={formData.services.other}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.other', checked === true)}
                          />
                          <Label htmlFor="other" className="cursor-pointer">Other</Label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Business Description */}
                    <div className="md:col-span-2 space-y-4">
                      <h2 className="text-xl font-semibold border-b pb-2">Business Description</h2>
                      
                      <div>
                        <Label htmlFor="description">Tell us about your business</Label>
                        <Textarea
                          id="description"
                          placeholder="Please provide a brief description of your business, your specialties, and why homeowners should choose you..."
                          value={formData.description}
                          onChange={(e) => updateFormData('description', e.target.value)}
                          className="mt-1.5 h-32"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto px-8 py-2.5" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckSquare className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
                <p className="text-lg mb-6 max-w-lg mx-auto">
                  Thank you for your interest in joining RoofFindr's professional network. Our team will review your application and get in touch with you shortly.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-2">
                  Submit Another Application
                </Button>
              </div>
            )}
          </div>
        </Container>
      </Section>
      
      <Section bgColor="bg-primary/10" className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Join RoofFindr?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reach More Customers</h3>
                <p className="text-muted-foreground">
                  Connect with homeowners actively looking for quality roofing services in your service area.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Build Credibility</h3>
                <p className="text-muted-foreground">
                  Showcase your work, reviews, and credentials to build trust with potential customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Grow Your Business</h3>
                <p className="text-muted-foreground">
                  Expand your customer base with high-quality leads from homeowners ready to hire.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 
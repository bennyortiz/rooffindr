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
import { 
  MailIcon, HomeIcon, PhoneIcon, GlobeIcon, Building2Icon,
  CheckSquareIcon, ClockIcon, FileTextIcon, UserIcon, MapPinIcon, 
  UsersIcon, ShieldIcon, SmileIcon
} from 'lucide-react';
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
    
      <Section bgColor="bg-muted/30" className="py-12 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Professional Network</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Apply to become part of RoofFindr's trusted network of roofing professionals. Connect with homeowners across Texas looking for quality roofing services.
              </p>
            </div>

            {!isSubmitted ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-primary/5 p-4 border-b border-primary/10">
                  <h2 className="text-lg font-medium text-primary">Business Application Form</h2>
                </div>
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
                  {/* Business Information */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2Icon className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-semibold">Business Information</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="businessName" className="text-sm font-medium">
                          Business Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="mt-1.5 relative">
                          <Input
                            id="businessName"
                            placeholder="Your company name"
                            value={formData.businessName}
                            onChange={(e) => updateFormData('businessName', e.target.value)}
                            required
                            className="pl-9"
                          />
                          <Building2Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="contactName" className="text-sm font-medium">
                          Contact Person <span className="text-red-500">*</span>
                        </Label>
                        <div className="mt-1.5 relative">
                          <Input
                            id="contactName"
                            placeholder="Full name"
                            value={formData.contactName}
                            onChange={(e) => updateFormData('contactName', e.target.value)}
                            required
                            className="pl-9"
                          />
                          <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <div className="mt-1.5 relative">
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            required
                            className="pl-9"
                          />
                          <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <div className="mt-1.5 relative">
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                            required
                            className="pl-9"
                          />
                          <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="website" className="text-sm font-medium">
                          Website
                        </Label>
                        <div className="mt-1.5 relative">
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://www.example.com"
                            value={formData.website}
                            onChange={(e) => updateFormData('website', e.target.value)}
                            className="pl-9"
                          />
                          <GlobeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="yearsInBusiness" className="text-sm font-medium">
                          Years in Business <span className="text-red-500">*</span>
                        </Label>
                        <div className="mt-1.5 relative">
                          <Input
                            id="yearsInBusiness"
                            placeholder="e.g. 5"
                            value={formData.yearsInBusiness}
                            onChange={(e) => updateFormData('yearsInBusiness', e.target.value)}
                            required
                            className="pl-9"
                          />
                          <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Location Information */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPinIcon className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-semibold">Location Information</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label htmlFor="address" className="text-sm font-medium">
                          Business Address <span className="text-red-500">*</span>
                        </Label>
                        <div className="mt-1.5 relative">
                          <Input
                            id="address"
                            placeholder="Street address"
                            value={formData.address}
                            onChange={(e) => updateFormData('address', e.target.value)}
                            required
                            className="pl-9"
                          />
                          <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="city" className="text-sm font-medium">
                          City <span className="text-red-500">*</span>
                        </Label>
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
                        <Label htmlFor="zipCode" className="text-sm font-medium">
                          ZIP Code <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="zipCode"
                          placeholder="78701"
                          value={formData.zipCode}
                          onChange={(e) => updateFormData('zipCode', e.target.value)}
                          required
                          className="mt-1.5"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="licenseNumber" className="text-sm font-medium">
                          License Number <span className="text-red-500">*</span>
                        </Label>
                        <div className="mt-1.5 relative">
                          <Input
                            id="licenseNumber"
                            placeholder="Your business license number"
                            value={formData.licenseNumber}
                            onChange={(e) => updateFormData('licenseNumber', e.target.value)}
                            required
                            className="pl-9"
                          />
                          <FileTextIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Services Offered */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-5 w-5 text-primary flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                      <h2 className="text-xl font-semibold">Services Offered</h2>
                    </div>
                    
                    <div className="bg-muted/10 p-5 rounded-lg border border-muted/30">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="residential" 
                            checked={formData.services.residential}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.residential', checked === true)}
                            className="text-primary border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="residential" className="cursor-pointer text-sm">Residential</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="commercial" 
                            checked={formData.services.commercial}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.commercial', checked === true)}
                            className="text-primary border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="commercial" className="cursor-pointer text-sm">Commercial</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="repairs" 
                            checked={formData.services.repairs}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.repairs', checked === true)}
                            className="text-primary border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="repairs" className="cursor-pointer text-sm">Repairs</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="replacement" 
                            checked={formData.services.replacement}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.replacement', checked === true)}
                            className="text-primary border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="replacement" className="cursor-pointer text-sm">Replacement</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="inspection" 
                            checked={formData.services.inspection}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.inspection', checked === true)}
                            className="text-primary border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="inspection" className="cursor-pointer text-sm">Inspection</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="gutters" 
                            checked={formData.services.gutters}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.gutters', checked === true)}
                            className="text-primary border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="gutters" className="cursor-pointer text-sm">Gutters</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="siding" 
                            checked={formData.services.siding}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.siding', checked === true)}
                            className="text-primary border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="siding" className="cursor-pointer text-sm">Siding</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="other" 
                            checked={formData.services.other}
                            onCheckedChange={(checked: boolean | 'indeterminate') => updateFormData('services.other', checked === true)}
                            className="text-primary border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="other" className="cursor-pointer text-sm">Other</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Description */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-5 w-5 text-primary flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <h2 className="text-xl font-semibold">Business Description</h2>
                    </div>
                    
                    <div>
                      <Label htmlFor="description" className="text-sm font-medium">
                        Tell us about your business <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Please provide a brief description of your business, your specialties, and why homeowners should choose you..."
                        value={formData.description}
                        onChange={(e) => updateFormData('description', e.target.value)}
                        className="mt-1.5 h-32 resize-none"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t flex justify-end">
                    <Button 
                      type="submit" 
                      className="px-8 py-2.5 bg-primary hover:bg-primary/90 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-green-50 p-4 border-b border-green-100">
                  <h2 className="text-lg font-medium text-green-700">Application Status</h2>
                </div>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckSquareIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
                  <p className="text-lg mb-6 max-w-lg mx-auto text-muted-foreground">
                    Thank you for your interest in joining RoofFindr's professional network. Our team will review your application and get in touch with you shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)} 
                    className="mt-2 border-primary text-primary hover:bg-primary/5"
                  >
                    Submit Another Application
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
      
      <Section bgColor="bg-primary/5" className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Join RoofFindr?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-muted/10 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <UsersIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Reach More Customers</h3>
                <p className="text-muted-foreground">
                  Connect with homeowners actively looking for quality roofing services in your service area.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-muted/10 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Build Credibility</h3>
                <p className="text-muted-foreground">
                  Showcase your work, reviews, and credentials to build trust with potential customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-muted/10 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <SmileIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Grow Your Business</h3>
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
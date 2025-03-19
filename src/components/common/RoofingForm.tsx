"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HomeIcon, PhoneIcon, MailIcon } from "lucide-react";
import { toast } from "sonner";
import { FormProgress } from "@/components/forms/FormProgress";
import { FormStep } from "@/components/forms/FormStep";
import { FormNavigation } from "@/components/forms/FormNavigation";
import { FormHelp } from "@/components/forms/FormHelp";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { RoofingFormData } from "@/types";
import { cn } from "@/lib/utils";

interface RoofingFormProps {
  onSubmit?: (formData: RoofingFormData) => void;
  className?: string;
}

/**
 * Form help content
 */
const formHelpContent = [
  {
    question: "Why do we need your address?",
    answer: "Your address helps us find the best local roofing professionals in your area who are familiar with your neighborhood's specific roofing needs and regulations."
  },
  {
    question: "What types of roofing projects can I request?",
    answer: "We connect you with professionals for all roofing needs including repairs, full replacements, inspections after storms, and new construction projects."
  },
  {
    question: "How quickly will I be contacted?",
    answer: "Most homeowners receive their first response from a qualified roofer within 24 hours of submitting their request."
  }
];

/**
 * Roofing form component
 * 
 * @param onSubmit - Callback function when form is submitted
 * @param className - Additional CSS classes
 */
export function RoofingForm({ onSubmit, className }: RoofingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RoofingFormData>({
    address: "",
    city: "",
    zipCode: "",
    roofType: "",
    projectType: "",
    timeframe: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showCityZip, setShowCityZip] = useState(false);

  const updateFormData = (field: keyof RoofingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsTransitioning(false);
    }, 300);
  };

  const prevStep = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep((prev) => prev - 1);
      setIsTransitioning(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the data to your backend
    console.log("Form submitted:", formData);
    
    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit(formData);
    }
    
    // Show success toast
    toast.success("Request submitted successfully", {
      description: "Local roofing professionals will contact you shortly.",
      action: {
        label: "View Status",
        onClick: () => console.log("View status clicked"),
      },
    });
    
    // Move to thank you step
    nextStep();
  };

  // Show city/zip fields after a short delay when address is entered
  useEffect(() => {
    if (formData.address && step === 1 && !showCityZip) {
      const timer = setTimeout(() => {
        setShowCityZip(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [formData.address, step, showCityZip]);

  // Reset showCityZip when returning to step 1
  useEffect(() => {
    if (step !== 1) {
      setShowCityZip(false);
    }
  }, [step]);

  return (
    <div className={cn("w-full", className)}>
      {/* Progress bar */}
      <FormProgress 
        currentStep={step} 
        totalSteps={5} 
      />

      {/* Step 1: Address */}
      <FormStep
        title="Where is your property located?"
        description="We'll find the best roofers in your area"
        isActive={step === 1}
        isTransitioning={isTransitioning}
      >
        <div className="space-y-3">
          <div className="space-y-2 transition-all duration-300 ease-in-out">
            <Label htmlFor="address">Street Address</Label>
            <div className="flex">
              <HomeIcon className="mr-2 h-4 w-4 opacity-70 mt-3" />
              <Input
                id="address"
                placeholder="123 Main St"
                value={formData.address}
                onChange={(e) => updateFormData("address", e.target.value)}
                autoFocus
              />
            </div>
          </div>
          
          {/* City and ZIP fields appear after address is entered */}
          <div className={cn(
            "space-y-3 transition-all duration-500 ease-in-out",
            showCityZip ? 'max-h-40 opacity-100 bg-white' : 'max-h-0 opacity-0 overflow-hidden'
          )}>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="Austin"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  placeholder="78701"
                  value={formData.zipCode}
                  onChange={(e) => updateFormData("zipCode", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <FormNavigation
          onNext={nextStep}
          isFirstStep={true}
          nextDisabled={!formData.address || (showCityZip && (!formData.city || !formData.zipCode))}
          nextText={!showCityZip ? 'Continue' : 'Find Roofers'}
        />
      </FormStep>

      {/* Step 2: Project Details */}
      <FormStep
        title="What type of roofing project do you need?"
        description="This helps us match you with the right professionals"
        isActive={step === 2}
        isTransitioning={isTransitioning}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Project Type</Label>
            <RadioGroup
              value={formData.projectType}
              onValueChange={(value: string) => {
                updateFormData("projectType", value);
                // Auto-advance after a short delay when selection is made
                setTimeout(() => nextStep(), 800);
              }}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-2 p-3 rounded-md border hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="repair" id="repair" />
                <Label htmlFor="repair" className="cursor-pointer font-medium flex-1">Repair</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-md border hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="replacement" id="replacement" />
                <Label htmlFor="replacement" className="cursor-pointer font-medium flex-1">Full Replacement</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-md border hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="inspection" id="inspection" />
                <Label htmlFor="inspection" className="cursor-pointer font-medium flex-1">Inspection</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-md border hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new" className="cursor-pointer font-medium flex-1">New Construction</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        <FormNavigation
          onNext={nextStep}
          onPrev={prevStep}
          nextDisabled={!formData.projectType}
        />
      </FormStep>

      {/* Step 3: Timeframe and Additional Details */}
      <FormStep
        title="When do you need this done?"
        description="Help us understand your timeline"
        isActive={step === 3}
        isTransitioning={isTransitioning}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="timeframe">Timeframe</Label>
            <Select
              value={formData.timeframe}
              onValueChange={(value) => updateFormData("timeframe", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                <SelectItem value="1week">Within 1 week</SelectItem>
                <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                <SelectItem value="1month">Within 1 month</SelectItem>
                <SelectItem value="planning">Just planning</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Additional Details (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Tell us more about your project..."
              value={formData.description}
              onChange={(e) => updateFormData("description", e.target.value)}
              className="h-24"
            />
          </div>
        </div>
        
        <FormNavigation
          onNext={nextStep}
          onPrev={prevStep}
          nextDisabled={!formData.timeframe}
        />
      </FormStep>

      {/* Step 4: Contact Information */}
      <FormStep
        title="Your Contact Information"
        description="We'll connect you with qualified professionals"
        isActive={step === 4}
        isTransitioning={isTransitioning}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="flex">
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                required
                autoFocus
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="flex">
              <MailIcon className="mr-2 h-4 w-4 opacity-70 mt-3" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex">
              <PhoneIcon className="mr-2 h-4 w-4 opacity-70 mt-3" />
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                required
              />
            </div>
          </div>
          
          <FormNavigation
            onPrev={prevStep}
            onSubmit={() => handleSubmit(new Event('submit') as unknown as React.FormEvent)}
            isLastStep={true}
            submitDisabled={!formData.name || !formData.email || !formData.phone}
            submitText="Submit Request"
          />

          {/* Help accordion */}
          <FormHelp items={formHelpContent} />
        </form>
      </FormStep>

      {/* Step 5: Thank You */}
      <FormStep
        title=""
        isActive={step === 5}
        isTransitioning={isTransitioning}
      >
        <FormSuccess
          title="Request Submitted!"
          message="We've received your request and will connect you with qualified roofing professionals in your area shortly."
          secondaryMessage="Check your email for updates and next steps."
        />
      </FormStep>
    </div>
  );
}

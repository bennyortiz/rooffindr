/**
 * Roofer interface
 */
export interface Roofer {
  id: number;
  name: string;
  slug: string;
  description?: string;
  rating: number;
  reviews: number;
  image: string;
  services: string[];
  cities: string[];
  counties?: string[];
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  contact?: {
    phone: string;
    email: string;
    website?: string;
  };
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  businessHours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  certifications?: string[];
  yearsInBusiness?: number;
  employeeCount?: number;
  insuranceInfo?: {
    liability: boolean;
    workersComp: boolean;
  };
  paymentMethods?: string[];
  specialFeatures?: string[];
  founded?: string;
  owner?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

/**
 * City interface
 */
export interface City {
  id: number;
  name: string;
  slug: string;
  state: string;
  county?: string;
  population?: number;
  description?: string;
  image?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

/**
 * County interface
 */
export interface County {
  id: number;
  name: string;
  slug: string;
  state: string;
  cities: string[];
  description?: string;
  image?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

/**
 * Service interface
 */
export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  image?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

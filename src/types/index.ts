/**
 * Common type definitions for the RoofFindr application
 */

import { ReactNode } from "react";

/**
 * Roofer profile data
 */
export interface Roofer {
  id: number | string;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  services: string[];
  slug?: string;
}

/**
 * Testimonial data
 */
export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image?: string;
}

/**
 * Step data for process flows
 */
export interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

/**
 * Form data for roofing service requests
 */
export interface RoofingFormData {
  address: string;
  city: string;
  zipCode: string;
  roofType: string;
  projectType: string;
  timeframe: string;
  description: string;
  name: string;
  email: string;
  phone: string;
}

/**
 * Common props for section components
 */
export interface SectionProps {
  className?: string;
}

/**
 * Common props for components with background and text color options
 */
export interface ColorProps {
  bgColor?: string;
  textColor?: string;
}

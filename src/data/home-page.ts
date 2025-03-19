import { Roofer, Step, Testimonial } from '@/types';

/**
 * FAQ items for the home page
 */
export const faqItems = [
  {
    question: 'How does RoofFindr work?',
    answer:
      "RoofFindr connects homeowners with trusted local roofing professionals. Simply fill out our form with your project details, and we'll match you with qualified roofers in your area. You can then compare profiles, reviews, and quotes to find the perfect match for your roofing needs.",
  },
  {
    question: 'Is RoofFindr free to use?',
    answer:
      'Yes, RoofFindr is completely free for homeowners. There are no fees or obligations when you use our service to find and connect with roofing professionals.',
  },
  {
    question: 'How are roofing professionals vetted?',
    answer:
      "All roofing professionals on RoofFindr go through a verification process that checks their licensing, insurance, and business credentials. We also collect and verify customer reviews to ensure you're connecting with reputable professionals.",
  },
  {
    question: 'How quickly will I hear from roofers?',
    answer:
      'Most homeowners receive their first response from a qualified roofer within 24 hours of submitting their request. The exact timing may vary based on your location and the current demand for roofing services in your area.',
  },
  {
    question: 'What types of roofing projects can I request?',
    answer:
      'RoofFindr can help with all types of roofing projects, including repairs, full replacements, inspections, maintenance, and new construction. Our network includes professionals specializing in various roofing materials and styles.',
  },
  {
    question: 'What areas does RoofFindr serve?',
    answer:
      "Currently, RoofFindr serves homeowners throughout Texas. We're continuously expanding our network to include more areas and provide our service to more homeowners across the country.",
  },
];

/**
 * Featured roofers data for the home page
 */
export const featuredRoofers: Roofer[] = [
  {
    id: 1,
    name: 'Texas Roofing Experts',
    rating: 4.9,
    reviews: 127,
    image:
      'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=2070&auto=format&fit=crop',
    services: ['Residential', 'Commercial', 'Repairs'],
    cities: ['Dallas', 'Fort Worth', 'Plano'],
    slug: 'texas-roofing-experts',
  },
  {
    id: 2,
    name: 'Lone Star Roofing',
    rating: 4.8,
    reviews: 94,
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop',
    services: ['Residential', 'Metal Roofs', 'Inspections'],
    cities: ['Houston', 'Sugar Land', 'Katy'],
    slug: 'lone-star-roofing',
  },
  {
    id: 3,
    name: 'Austin Roof Pros',
    rating: 4.7,
    reviews: 86,
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
    services: ['Residential', 'Tile Roofs', 'Repairs'],
    cities: ['Austin', 'Round Rock', 'Cedar Park'],
    slug: 'austin-roof-pros',
  },
];

/**
 * How it works steps data for the home page
 */
export const howItWorksSteps: Omit<Step, 'icon'>[] = [
  {
    title: 'Tell us about your project',
    description: 'Fill out our simple form with details about your roofing needs and location.',
  },
  {
    title: 'Get matched with pros',
    description: "We'll connect you with top-rated roofing professionals in your area.",
  },
  {
    title: 'Compare and choose',
    description: 'Review profiles, ratings, and previous work to find the perfect match.',
  },
  {
    title: 'Get the job done right',
    description: 'Work with trusted professionals who deliver quality results.',
  },
];

/**
 * Testimonials data for the home page
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'RoofFindr made it so easy to find a reliable roofer after the storm damaged our home. We were connected with a professional who fixed everything quickly and at a fair price.',
    author: 'Sarah Johnson',
    location: 'Dallas, TX',
  },
  {
    quote:
      'I needed a complete roof replacement and was overwhelmed by all the options. RoofFindr simplified the process and helped me find the perfect contractor for my home.',
    author: 'Michael Rodriguez',
    location: 'Houston, TX',
  },
  {
    quote:
      'As a new homeowner, I had no idea where to start when I noticed a leak. RoofFindr connected me with a local expert who not only fixed the issue but educated me on proper roof maintenance.',
    author: 'Emily Chen',
    location: 'Austin, TX',
  },
];

/**
 * Hero section data for the home page
 */
export const heroData = {
  title: 'Find Trusted Roofing Professionals in Texas',
  description:
    'Connect with verified local roofers who understand Texas weather challenges. Get quotes, compare services, and make confident decisions.',
  imageSrc:
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
  primaryButtonText: 'Find a Roofer',
  primaryButtonLink: '/find-roofer',
  secondaryButtonText: 'Learn More',
  secondaryButtonLink: '/how-it-works',
  trustBadgeText: 'Trusted by 10,000+ Texas homeowners',
};

/**
 * CTA section data for the home page
 */
export const ctaData = {
  title: 'Ready to Find Your Perfect Roofing Professional?',
  description:
    'Join thousands of Texas homeowners who have found reliable roofing services through RoofFindr.',
  buttonText: 'Get Started Today',
  buttonLink: '/find-roofer',
};

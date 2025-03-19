import { Roofer } from "@/types";

/**
 * Complete roofers data
 */
export const roofers: Roofer[] = [
  {
    id: 1,
    name: "Texas Roofing Experts",
    slug: "texas-roofing-experts",
    description: "Texas Roofing Experts is a full-service roofing company serving the Dallas-Fort Worth metroplex. With over 20 years of experience, we specialize in residential and commercial roofing, including repairs, replacements, and new installations. Our team of certified professionals is committed to quality workmanship and exceptional customer service.",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=2070&auto=format&fit=crop",
    services: ["Residential Roofing", "Commercial Roofing", "Roof Repairs", "Roof Replacements", "Roof Inspections", "Emergency Services"],
    cities: ["Dallas", "Fort Worth", "Plano", "Arlington", "Irving"],
    counties: ["Dallas County", "Tarrant County", "Collin County"],
    address: {
      street: "1234 Main Street",
      city: "Dallas",
      state: "TX",
      zipCode: "75201",
    },
    contact: {
      phone: "(214) 555-1234",
      email: "info@texasroofingexperts.com",
      website: "https://www.texasroofingexperts.com",
    },
    socialMedia: {
      facebook: "https://www.facebook.com/texasroofingexperts",
      twitter: "https://twitter.com/txroofingexp",
      instagram: "https://www.instagram.com/texasroofingexperts",
    },
    businessHours: {
      monday: "8:00 AM - 5:00 PM",
      tuesday: "8:00 AM - 5:00 PM",
      wednesday: "8:00 AM - 5:00 PM",
      thursday: "8:00 AM - 5:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 2:00 PM",
      sunday: "Closed",
    },
    certifications: ["GAF Certified Contractor", "Owens Corning Preferred Contractor", "CertainTeed SELECT ShingleMaster"],
    yearsInBusiness: 22,
    employeeCount: 35,
    insuranceInfo: {
      liability: true,
      workersComp: true,
    },
    paymentMethods: ["Credit Card", "Debit Card", "Cash", "Check", "Financing Available"],
    specialFeatures: ["Free Estimates", "Emergency Services", "Warranty Options", "Financing Available"],
    founded: "2003",
    owner: "Michael Johnson",
    metaDescription: "Texas Roofing Experts provides professional roofing services in Dallas-Fort Worth. Specializing in residential and commercial roofing, repairs, and replacements.",
    metaKeywords: ["Texas Roofing Experts", "Dallas roofer", "Fort Worth roofing contractor", "residential roofing", "commercial roofing", "roof repairs", "Texas roofing services"],
  },
  {
    id: 2,
    name: "Lone Star Roofing",
    slug: "lone-star-roofing",
    description: "Lone Star Roofing is a premier roofing company serving the Greater Houston area. We specialize in residential roofing, metal roofs, and thorough roof inspections. Our team of experienced professionals is dedicated to providing high-quality workmanship and exceptional customer service to homeowners throughout Houston and surrounding communities.",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop",
    services: ["Residential Roofing", "Metal Roofs", "Roof Inspections", "Roof Repairs", "Roof Replacements", "Storm Damage Repair"],
    cities: ["Houston", "Sugar Land", "Katy", "Pearland", "The Woodlands"],
    counties: ["Harris County", "Fort Bend County", "Montgomery County"],
    address: {
      street: "5678 Oak Avenue",
      city: "Houston",
      state: "TX",
      zipCode: "77002",
    },
    contact: {
      phone: "(713) 555-5678",
      email: "info@lonestarroofing.com",
      website: "https://www.lonestarroofing.com",
    },
    socialMedia: {
      facebook: "https://www.facebook.com/lonestarroofing",
      instagram: "https://www.instagram.com/lonestarroofing",
      youtube: "https://www.youtube.com/lonestarroofing",
    },
    businessHours: {
      monday: "7:30 AM - 6:00 PM",
      tuesday: "7:30 AM - 6:00 PM",
      wednesday: "7:30 AM - 6:00 PM",
      thursday: "7:30 AM - 6:00 PM",
      friday: "7:30 AM - 6:00 PM",
      saturday: "8:00 AM - 3:00 PM",
      sunday: "Closed",
    },
    certifications: ["GAF Master Elite Contractor", "HAAG Certified Inspector", "IKO Shield Pro Plus"],
    yearsInBusiness: 15,
    employeeCount: 28,
    insuranceInfo: {
      liability: true,
      workersComp: true,
    },
    paymentMethods: ["Credit Card", "Debit Card", "Cash", "Check", "Insurance Claims"],
    specialFeatures: ["Free Inspections", "Storm Damage Specialists", "Insurance Claim Assistance", "Lifetime Warranties"],
    founded: "2010",
    owner: "Robert Garcia",
    metaDescription: "Lone Star Roofing provides professional roofing services in Houston, TX. Specializing in residential roofing, metal roofs, and roof inspections.",
    metaKeywords: ["Lone Star Roofing", "Houston roofer", "metal roofing", "roof inspections", "residential roofing", "storm damage repair", "Texas roofing services"],
  },
  {
    id: 3,
    name: "Austin Roof Pros",
    slug: "austin-roof-pros",
    description: "Austin Roof Pros is a trusted roofing company serving Austin and surrounding areas. We specialize in residential roofing, tile roofs, and roof repairs. Our team of skilled professionals is committed to providing exceptional service, quality materials, and lasting results for homeowners throughout Central Texas.",
    rating: 4.7,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    services: ["Residential Roofing", "Tile Roofs", "Roof Repairs", "Roof Replacements", "Gutter Installation", "Skylight Installation"],
    cities: ["Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville"],
    counties: ["Travis County", "Williamson County", "Hays County"],
    address: {
      street: "910 Congress Avenue",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
    },
    contact: {
      phone: "(512) 555-9101",
      email: "info@austinroofpros.com",
      website: "https://www.austinroofpros.com",
    },
    socialMedia: {
      facebook: "https://www.facebook.com/austinroofpros",
      instagram: "https://www.instagram.com/austinroofpros",
      linkedin: "https://www.linkedin.com/company/austin-roof-pros",
    },
    businessHours: {
      monday: "8:00 AM - 5:30 PM",
      tuesday: "8:00 AM - 5:30 PM",
      wednesday: "8:00 AM - 5:30 PM",
      thursday: "8:00 AM - 5:30 PM",
      friday: "8:00 AM - 5:30 PM",
      saturday: "By appointment",
      sunday: "Closed",
    },
    certifications: ["CertainTeed SELECT ShingleMaster", "Tile Roofing Institute Certified", "NRCA Member"],
    yearsInBusiness: 12,
    employeeCount: 22,
    insuranceInfo: {
      liability: true,
      workersComp: true,
    },
    paymentMethods: ["Credit Card", "Debit Card", "Cash", "Check", "Financing Available"],
    specialFeatures: ["Eco-Friendly Options", "Energy-Efficient Roofing", "Extended Warranties", "Maintenance Programs"],
    founded: "2013",
    owner: "David Martinez",
    metaDescription: "Austin Roof Pros provides professional roofing services in Austin, TX. Specializing in residential roofing, tile roofs, and roof repairs.",
    metaKeywords: ["Austin Roof Pros", "Austin roofer", "tile roofing", "roof repairs", "residential roofing", "skylight installation", "Texas roofing services"],
  },
];

/**
 * Get a roofer by slug
 * 
 * @param slug - Roofer slug
 * @returns Roofer object or undefined if not found
 */
export function getRooferBySlug(slug: string): Roofer | undefined {
  return roofers.find(roofer => roofer.slug === slug);
}

/**
 * Get all roofer slugs
 * 
 * @returns Array of roofer slugs
 */
export function getAllRooferSlugs(): string[] {
  return roofers.map(roofer => roofer.slug);
}

/**
 * Get roofers by city
 * 
 * @param city - City name
 * @returns Array of roofers that serve the specified city
 */
export function getRoofersByCity(city: string): Roofer[] {
  return roofers.filter(roofer => roofer.cities.includes(city));
}

/**
 * Get roofers by county
 * 
 * @param county - County name
 * @returns Array of roofers that serve the specified county
 */
export function getRoofersByCounty(county: string): Roofer[] {
  return roofers.filter(roofer => roofer.counties?.includes(county));
}

/**
 * Get roofers by service
 * 
 * @param service - Service name
 * @returns Array of roofers that offer the specified service
 */
export function getRoofersByService(service: string): Roofer[] {
  return roofers.filter(roofer => 
    roofer.services.some(s => s.toLowerCase().includes(service.toLowerCase()))
  );
}

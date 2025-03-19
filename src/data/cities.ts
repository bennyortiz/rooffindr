import { City } from "@/types";

/**
 * Texas cities data
 */
export const cities: City[] = [
  {
    id: 1,
    name: "Dallas",
    slug: "dallas",
    state: "Texas",
    county: "Dallas",
    population: 1345047,
    description: "Dallas is a modern metropolis in north Texas, a commercial and cultural hub of the region. The city's prominence comes from its historical importance as a center for the oil and cotton industries, its position along numerous railroad lines, and its geographic position.",
    image: "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?q=80&w=2070&auto=format&fit=crop",
    metaDescription: "Find top-rated roofing professionals in Dallas, TX. Connect with local roofers who understand Dallas's unique weather challenges and building requirements.",
    metaKeywords: ["Dallas roofers", "Dallas roofing contractors", "Dallas roof repair", "Dallas roof replacement", "local roofing professionals", "Texas roofing services"],
  },
  {
    id: 2,
    name: "Houston",
    slug: "houston",
    state: "Texas",
    county: "Harris",
    population: 2320268,
    description: "Houston is the most populous city in Texas and the fourth-most populous city in the United States. Known for its diverse population, strong industries, and NASA's Johnson Space Center, Houston is a major hub for the energy, manufacturing, and healthcare sectors.",
    image: "https://images.unsplash.com/photo-1572635148818-ef6bdfbd0578?q=80&w=2070&auto=format&fit=crop",
    metaDescription: "Find top-rated roofing professionals in Houston, TX. Connect with local roofers who understand Houston's unique weather challenges and building requirements.",
    metaKeywords: ["Houston roofers", "Houston roofing contractors", "Houston roof repair", "Houston roof replacement", "local roofing professionals", "Texas roofing services"],
  },
  {
    id: 3,
    name: "Austin",
    slug: "austin",
    state: "Texas",
    county: "Travis",
    population: 964254,
    description: "Austin is the capital city of Texas and is known for its vibrant live-music scene, outdoor activities, and tech industry. Home to the University of Texas flagship campus, Austin has a strong economy, diverse culture, and is often ranked as one of the best places to live in the United States.",
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2070&auto=format&fit=crop",
    metaDescription: "Find top-rated roofing professionals in Austin, TX. Connect with local roofers who understand Austin's unique weather challenges and building requirements.",
    metaKeywords: ["Austin roofers", "Austin roofing contractors", "Austin roof repair", "Austin roof replacement", "local roofing professionals", "Texas roofing services"],
  },
  {
    id: 4,
    name: "San Antonio",
    slug: "san-antonio",
    state: "Texas",
    county: "Bexar",
    population: 1547253,
    description: "San Antonio is a major city in south-central Texas with a rich colonial heritage. It's home to the Alamo, the River Walk, and several historic missions. The city has a diverse economy with major sectors including health care, government, financial services, and tourism.",
    image: "https://images.unsplash.com/photo-1569939237022-4b60cbb8c476?q=80&w=2070&auto=format&fit=crop",
    metaDescription: "Find top-rated roofing professionals in San Antonio, TX. Connect with local roofers who understand San Antonio's unique weather challenges and building requirements.",
    metaKeywords: ["San Antonio roofers", "San Antonio roofing contractors", "San Antonio roof repair", "San Antonio roof replacement", "local roofing professionals", "Texas roofing services"],
  },
  {
    id: 5,
    name: "Fort Worth",
    slug: "fort-worth",
    state: "Texas",
    county: "Tarrant",
    population: 918915,
    description: "Fort Worth is a city in North Texas known for its Western heritage, world-class museums, and vibrant downtown area. It's the fifth-largest city in Texas and part of the Dallas-Fort Worth-Arlington metropolitan area, which is the fourth-largest metropolitan area in the United States.",
    image: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=2070&auto=format&fit=crop",
    metaDescription: "Find top-rated roofing professionals in Fort Worth, TX. Connect with local roofers who understand Fort Worth's unique weather challenges and building requirements.",
    metaKeywords: ["Fort Worth roofers", "Fort Worth roofing contractors", "Fort Worth roof repair", "Fort Worth roof replacement", "local roofing professionals", "Texas roofing services"],
  },
];

/**
 * Get a city by slug
 * 
 * @param slug - City slug
 * @returns City object or undefined if not found
 */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

/**
 * Get all city slugs
 * 
 * @returns Array of city slugs
 */
export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}

/**
 * API configuration
 */
export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.rooffindr.com',
  endpoints: {
    roofers: '/api/roofers',
    cities: '/api/cities',
    contact: '/api/contact',
    search: '/api/search',
    reviews: '/api/reviews',
  },
  // Add reasonable timeout values
  timeouts: {
    default: 10000, // 10 seconds
    search: 15000, // 15 seconds for search
    contact: 20000, // 20 seconds for contact form
  },
  // Rate limiting settings
  rateLimits: {
    search: 10, // 10 requests per minute
    contact: 5, // 5 requests per minute
  },
  // Cache settings
  cache: {
    roofers: 3600, // 1 hour in seconds
    cities: 86400, // 24 hours in seconds
    staleWhileRevalidate: 300, // 5 minutes
  },
  // API keys
  keys: {
    mapbox: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    googleMaps: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  },
}; 
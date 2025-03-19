/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
    // Explicitly set the default behavior for image optimization
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Allow hydration mismatch logs to be disabled entirely during development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 4,
  },
};

module.exports = nextConfig; 
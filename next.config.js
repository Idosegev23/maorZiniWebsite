/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  eslint: {
    // הגדרה זו תגרום לתהליך הבנייה להתעלם משגיאות לינטינג ולהמשיך
    ignoreDuringBuilds: true,
  },
  typescript: {
    // הגדרה זו תגרום לתהליך הבנייה להתעלם משגיאות TypeScript ולהמשיך
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 
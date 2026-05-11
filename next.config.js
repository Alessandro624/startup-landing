/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict React mode
  reactStrictMode: true,

  // Image optimization - add your own domains
  images: {
    remotePatterns: [
      // Example: { protocol: "https", hostname: "cdn.yourstartup.com" },
    ],
  },

  // Fallback security headers (proxy handles the full set,
  // but these cover static export scenarios)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

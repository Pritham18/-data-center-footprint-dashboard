import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Leaflet requires unsafe-inline for its DivIcon styles
      "style-src 'self' 'unsafe-inline'",
      // OpenStreetMap tiles
      "img-src 'self' data: https://*.tile.openstreetmap.org",
      "connect-src 'self' https://*.tile.openstreetmap.org",
      "font-src 'self'",
      "script-src 'self' 'unsafe-eval'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

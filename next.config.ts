import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  // Hide the dev-only on-screen route indicator (Next 16: single boolean).
  devIndicators: false,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'host' as const, value: 'amaeaai.vercel.app' }], destination: 'https://amaea.co.uk/:path*', permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.amaea.co.uk" }],
        destination: "https://amaea.co.uk/:path*",
        permanent: true,
      },
      { source: "/signin", destination: "https://app.amaea.co.uk/login", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
      { source: "/founders", destination: "/waitlist", permanent: false },
    ];
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        {
          key: "Content-Security-Policy",
          // Next hydration and the existing theme bootstrap use inline scripts.
          // Development additionally needs eval for its debugging runtime.
          value: `default-src 'self'; script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'`,
        },
      ],
    }];
  },
};

export default nextConfig;

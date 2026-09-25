import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the dev-only on-screen route indicator (Next 16: single boolean).
  devIndicators: false,
  poweredByHeader: false,
  async redirects() {
    const recruitmentRedirects = process.env.NEXT_PUBLIC_SITE_MODE === "full" ? [] : [
      { source: "/about", destination: "/#our-story", permanent: false },
      { source: "/features", destination: "/#original-platform", permanent: false },
      { source: "/founders", destination: "/waitlist", permanent: false },
      { source: "/contact", destination: "/waitlist", permanent: false },
    ];
    return [
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
      ...recruitmentRedirects,
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

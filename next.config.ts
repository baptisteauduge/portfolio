import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static HTML export: every page is prerendered into out/ at build time.
  output: 'export',
  // Keeps the canonical and og:url as https://www.auduge.com/ (with the slash).
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

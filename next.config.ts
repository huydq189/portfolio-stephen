import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/personal.ts',
        permanent: true
      }
    ];
  }
};

const withMDX = createMDX();

export default withMDX(nextConfig);

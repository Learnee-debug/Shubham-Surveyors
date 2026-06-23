import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.shubhamsurveyors.com' }],
        destination: 'https://shubhamsurveyors.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

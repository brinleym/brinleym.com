/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  optimizeFonts: false
}
 
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)

/** @type {import('next').NextConfig} */

/* const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? '/mdxblog/' : ''
}*/

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withNextOptimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withNextOptimizedImages(
    withMDX({
        webpack: (config, { isServer }) => {
            if (!isServer) {
            config.node = {
            fs: 'empty'
                }
            }
            return config
        },
      pageExtensions: ['js', 'jsx', 'mdx'],
      target: 'serverless',
        basePath: ghPages? '/mdxblog/' : '',
        assetPrefix: ghPages ? '/mdxblog/' : '',
    })
)
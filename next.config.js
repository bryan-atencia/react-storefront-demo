const webpack = require('webpack')
const withReactStorefront = require('react-storefront/plugins/withReactStorefront')
require('dotenv').config()

// const withXDN = require('@xdn/next/withXDN')

  // module.exports = withXDN({
  //   // additional Next.js config options here
  // })

module.exports = withReactStorefront({
  target: 'serverless',
  connector: 'react-storefront/mock-connector',
  webpack: config => {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    )
    return config
  },
})

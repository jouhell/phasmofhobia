const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/phasmofhobia/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        // name: '[path][name].[ext]',

        name() {
          // `resourcePath` - `/absolute/path/to/file.js`
          // `resourceQuery` - `?foo=bar`

          if (process.env.NODE_ENV === 'development') {
            return '[path][name].[ext]'
          }

          return '[contenthash].[ext]'
        },
        publicPath: !debug
          ? `/phasmofhobia/_next/static/images`
          : `/_next/static/images`,
        outputPath: 'static/images',
        limit: 1000,
      },
    })
    // Important: return the modified config
    return config
  } /*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */,
}

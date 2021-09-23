module.exports = {
  webpack: {
    configure(config) {
      // Fixes source maps to include full relative paths of node_modules;
      // adapted from https://github.com/facebook/create-react-app/pull/8227/files.
      config.module.rules.unshift({
        enforce: 'pre',
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        test: /\.(js|mjs|jsx|ts|tsx|css)$/,
        use: 'source-map-loader',
      })
      return config
    },
  },
}

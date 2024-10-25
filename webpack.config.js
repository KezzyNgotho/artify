const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util"),
      "zlib": require.resolve("browserify-zlib")
    }
  },
  // Other Webpack configurations
};

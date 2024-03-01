const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .use(webpack.DefinePlugin, [{
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      }]);
  }
};
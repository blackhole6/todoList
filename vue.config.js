module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://api.qycc.fun',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  };
  
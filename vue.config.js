let path = require('path');
let PATHS = {
  src: path.resolve(__dirname, 'src')
}

module.exports = {
    publicPath: "/",
    outputDir: "docs",
    chainWebpack: config => {
      config.plugin('copy').use(require('copy-webpack-plugin'), [
        [
            {
                from: PATHS.src + '/assets/static',
                to: 'img',
            },
        ],
    ]);
  }
}
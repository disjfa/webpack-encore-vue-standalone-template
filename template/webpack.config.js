// webpack.config.js
let Encore = require('@symfony/webpack-encore');
const { GenerateSW } = require('workbox-webpack-plugin');

Encore
// the project directory where all compiled src will be stored
  .setOutputPath('public/build/')

  // the public path used by the web server to access the previous directory
  .setPublicPath('/build')

  // will create public/build/app.js and public/build/app.css
  .addEntry('site', './src/js/site.js')

  // allow sass/scss files to be processed
  .enableSassLoader()

  // allow legacy applications to use $/jQuery as a global variable
  .enableSourceMaps(!Encore.isProduction())

  // enable vue
  .enableVueLoader()

  // empty the outputPath dir before each build
  .cleanupOutputBeforeBuild()

  // Add workbox plugin
  .addPlugin(new GenerateSW({
    globDirectory: 'public',
    globPatterns: ['**/*.{html,js,css,jpg,png,woff2,woff,ttf,json}'],
    swDest: './../service-worker.js',
  }))
;

if (Encore.isProduction()) {
  // Enable post css loader
  Encore
  // enable post css
    .enablePostCssLoader()
  ;
}

// export the final configuration
module.exports = Encore.getWebpackConfig();
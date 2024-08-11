const path = require('path');

module.exports = {
  entry: {
    // JS
    components_index: './static/js/script_modules.js',
    responsive_index: './static/js/index_components.js',
    // CSS
    style_reset: './static/css/reset.css',
    style_styles: './static/css/styles.css',
    styles_atoms: './static/css/index/atoms.css',
    styles_molecules: './static/css/index/molecules.css',
    styles_organisms: './static/css/index/organisms.css',
    styles_templates: './static/css/index/templates.css',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // Archivos JS
    assetModuleFilename: '[name][ext]',
  },
  mode: 'development'
};
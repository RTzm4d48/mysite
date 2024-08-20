const path = require('path');

module.exports = {
  entry: {
    // NOTE : JS
    index_main: './static/js/index/main.js',
    index_components: './static/js/index_components.js',
    // templates
    templates_main: './static/js/templates_scripts/main.js',
    // NOTE : CSS
    style_reset: './static/css/reset.css',
    style_styles: './static/css/styles.css',
    styles_atoms: './static/css/index/atoms.css',
    styles_molecules: './static/css/index/molecules.css',
    styles_organisms: './static/css/index/organisms.css',
    styles_templates: './static/css/index/templates.css',
    // templates
    styles_templates_atoms: './static/css/templates_styles/atoms.css',
    styles_templates_molecules: './static/css/templates_styles/molecules.css',
    styles_templates_organisms: './static/css/templates_styles/organisms.css',
    styles_templates_templates: './static/css/templates_styles/templates.css',
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